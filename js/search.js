// Search functionality using Fuse.js
(function() {
  'use strict';

  let fuse = null;
  let searchData = [];
  let currentFilter = 'all';

  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchInfo = document.getElementById('search-info');
  const searchClear = document.getElementById('search-clear');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Fuse.js options
  const fuseOptions = {
    keys: [
      { name: 'title', weight: 0.4 },
      { name: 'description', weight: 0.3 },
      { name: 'tags', weight: 0.2 },
      { name: 'content', weight: 0.1 }
    ],
    threshold: 0.3,
    ignoreLocation: true,
    minMatchCharLength: 2,
    includeScore: true,
    includeMatches: true
  };

  // Subject colors
  const subjectColors = {
    physics: 'var(--accent-physics)',
    chemistry: 'var(--accent-chemistry)',
    mathematics: 'var(--accent-math)'
  };

  // Load search index
  async function loadSearchIndex() {
    try {
      const response = await fetch('/jee-notes-site/index.json');
      searchData = await response.json();
      fuse = new Fuse(searchData, fuseOptions);

      // Check for URL query parameter
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get('q');
      if (query) {
        searchInput.value = query;
        performSearch(query);
      }
    } catch (error) {
      console.error('Failed to load search index:', error);
      searchInfo.textContent = 'Failed to load search index. Please try again.';
    }
  }

  // Perform search
  function performSearch(query) {
    if (!fuse || !query.trim()) {
      searchResults.innerHTML = '';
      searchInfo.textContent = '';
      searchClear.style.display = 'none';
      return;
    }

    searchClear.style.display = 'flex';

    let results = fuse.search(query);

    // Apply filter
    if (currentFilter !== 'all') {
      results = results.filter(result => {
        const section = result.item.section?.toLowerCase();
        return section === currentFilter;
      });
    }

    // Update info
    if (results.length === 0) {
      searchInfo.textContent = `No results found for "${query}"`;
      searchResults.innerHTML = `
        <div class="no-results">
          <p>Try different keywords or check the spelling.</p>
          <p>You can also browse by subject using the filters above.</p>
        </div>
      `;
      return;
    }

    searchInfo.textContent = `Found ${results.length} result${results.length === 1 ? '' : 's'} for "${query}"`;

    // Render results
    searchResults.innerHTML = results
      .slice(0, 50) // Limit to 50 results
      .map(result => renderResult(result))
      .join('');
  }

  // Render single result
  function renderResult(result) {
    const item = result.item;
    const section = item.section || 'general';
    const subject = item.subject || section;
    const color = subjectColors[section.toLowerCase()] || 'var(--accent-primary)';
    const tags = item.tags ? item.tags.slice(0, 3) : [];

    // Create snippet from content
    let snippet = item.description || '';
    if (!snippet && item.content) {
      snippet = item.content.substring(0, 150).trim() + '...';
    }

    return `
      <a href="${item.permalink}" class="search-result-item">
        <div class="result-header">
          <span class="result-subject" style="--subject-color: ${color}">${capitalizeFirst(section)}</span>
          <h3 class="result-title">${highlightMatch(item.title, result.matches)}</h3>
        </div>
        <p class="result-snippet">${snippet}</p>
        ${tags.length > 0 ? `
          <div class="result-tags">
            ${tags.map(tag => `<span class="result-tag">${tag}</span>`).join('')}
          </div>
        ` : ''}
      </a>
    `;
  }

  // Highlight matched text
  function highlightMatch(text, matches) {
    if (!matches) return text;

    const titleMatch = matches.find(m => m.key === 'title');
    if (!titleMatch) return text;

    let result = text;
    const indices = titleMatch.indices.sort((a, b) => b[0] - a[0]);

    indices.forEach(([start, end]) => {
      const match = result.substring(start, end + 1);
      result = result.substring(0, start) + `<mark>${match}</mark>` + result.substring(end + 1);
    });

    return result;
  }

  // Capitalize first letter
  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Debounce function
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Event listeners
  if (searchInput) {
    searchInput.addEventListener('input', debounce(function(e) {
      performSearch(e.target.value);
    }, 200));

    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        searchInput.value = '';
        performSearch('');
        searchInput.blur();
      }
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', function() {
      searchInput.value = '';
      performSearch('');
      searchInput.focus();
    });
  }

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.dataset.filter;
      performSearch(searchInput.value);
    });
  });

  // Initialize
  loadSearchIndex();
})();
