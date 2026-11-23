/**
 * JEE Notes Interactive Animations Library
 * Provides interactive visualizations for physics, chemistry, and math concepts
 */

// ============================================
// UTILITY FUNCTIONS
// ============================================

const JEEAnimations = {
  
  // Get theme-aware colors from CSS variables
  getColors() {
    const style = getComputedStyle(document.documentElement);
    return {
      bg: style.getPropertyValue('--bg-primary').trim() || '#09090b',
      bgSecondary: style.getPropertyValue('--bg-secondary').trim() || '#18181b',
      blue: style.getPropertyValue('--anim-blue').trim() || '#58a6ff',
      green: style.getPropertyValue('--anim-green').trim() || '#7ee787',
      orange: style.getPropertyValue('--anim-orange').trim() || '#f78166',
      purple: style.getPropertyValue('--anim-purple').trim() || '#a371f7',
      cyan: style.getPropertyValue('--anim-cyan').trim() || '#79c0ff',
      yellow: style.getPropertyValue('--anim-yellow').trim() || '#e3b341',
      grid: style.getPropertyValue('--anim-grid').trim() || '#21262d',
      axis: style.getPropertyValue('--anim-axis').trim() || '#30363d',
      axisLabel: style.getPropertyValue('--anim-axis-label').trim() || '#8b949e',
      blueGlow: style.getPropertyValue('--anim-blue-glow').trim() || 'rgba(88, 166, 255, 0.3)',
      greenGlow: style.getPropertyValue('--anim-green-glow').trim() || 'rgba(126, 231, 135, 0.3)',
      orangeGlow: style.getPropertyValue('--anim-orange-glow').trim() || 'rgba(247, 129, 102, 0.3)',
      text: style.getPropertyValue('--text-primary').trim() || '#fafafa',
      textSecondary: style.getPropertyValue('--text-secondary').trim() || '#a1a1aa',
    };
  },

  // Create canvas with proper scaling for retina displays
  createCanvas(container, width = 400, height = 300) {
    const canvas = document.createElement('canvas');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    container.appendChild(canvas);
    return { canvas, ctx, width, height };
  },

  // Create slider control
  createSlider(container, label, min, max, value, step = 1, unit = '') {
    const wrapper = document.createElement('div');
    wrapper.className = 'anim-control';
    
    const labelEl = document.createElement('label');
    labelEl.innerHTML = `${label}: <span class="value">${value}${unit}</span>`;
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = min;
    slider.max = max;
    slider.value = value;
    slider.step = step;
    
    slider.addEventListener('input', () => {
      labelEl.querySelector('.value').textContent = slider.value + unit;
    });
    
    wrapper.appendChild(labelEl);
    wrapper.appendChild(slider);
    container.appendChild(wrapper);
    
    return slider;
  },

  // Create button
  createButton(container, text, onClick) {
    const btn = document.createElement('button');
    btn.className = 'anim-btn';
    btn.textContent = text;
    btn.addEventListener('click', onClick);
    container.appendChild(btn);
    return btn;
  },

  // ============================================
  // FULLSCREEN MODAL FUNCTIONS
  // ============================================

  // Store reference to current fullscreen animation
  _fullscreenState: {
    activeId: null,
    originalParent: null,
    originalContent: null
  },

  // Toggle fullscreen for an animation
  toggleFullscreen(containerId) {
    const overlay = document.getElementById('animation-fullscreen-overlay');
    const wrapper = document.getElementById(containerId);

    if (!overlay || !wrapper) return;

    if (this._fullscreenState.activeId === containerId) {
      this.closeFullscreen();
    } else {
      this.openFullscreen(containerId);
    }
  },

  // Open fullscreen modal
  openFullscreen(containerId) {
    const overlay = document.getElementById('animation-fullscreen-overlay');
    const wrapper = document.getElementById(containerId);
    const fullscreenContent = overlay.querySelector('.fullscreen-content');
    const fullscreenTitle = overlay.querySelector('.fullscreen-title');

    if (!overlay || !wrapper || !fullscreenContent) return;

    // Get the animation content - it's now inside a content div with -content suffix
    const animContent = wrapper.querySelector('.animation-content');
    const animContainer = animContent ? animContent.querySelector('.animation-container') : wrapper.querySelector('.animation-container');

    if (!animContainer) return;

    // Store state for restoration
    this._fullscreenState.activeId = containerId;
    this._fullscreenState.originalParent = animContent || wrapper;

    // Get animation type for title
    const animType = wrapper.dataset.animation || 'Interactive Demo';
    const titleMap = {
      'projectileMotion': 'Projectile Motion',
      'collisionsInteractive': 'Collision Simulator',
      'electricFieldVisualizer': 'Electric Field Visualizer',
      'keplerOrbitalMotion': 'Kepler\'s Orbital Motion',
      'vseprGeometry': 'VSEPR Molecular Geometry',
      'leChatelierSimulator': 'Le Chatelier Simulator',
      'conicSections': 'Conic Sections Explorer',
      'derivativeVisualizer': 'Derivative Visualizer',
      'riemannSum': 'Riemann Sum Visualizer',
      'crystalFieldTheory': 'Crystal Field Theory',
      'waveMotionVisualizer': 'Wave Motion & Superposition',
      'vectorOperations': 'Vector Operations',
      'complexPlaneVisualizer': 'Complex Plane & De Moivre',
      'lorentzForceVisualizer': 'Lorentz Force 3D',
      'gibbsEnergyCalculator': 'Gibbs Energy Calculator',
      'probabilityTree': 'Probability Tree & Bayes',
      'matrixTransform': 'Matrix Transformations',
      'gpConvergence': 'GP Convergence',
      'epsilonDelta': 'Epsilon-Delta Limits',
      'slopeField': 'Slope Field',
      'threeDGeometry': '3D Lines & Planes'
    };
    fullscreenTitle.textContent = titleMap[animType] || 'Interactive Demo';

    // Move animation container to fullscreen
    fullscreenContent.innerHTML = '';
    fullscreenContent.appendChild(animContainer);

    // Show overlay
    overlay.classList.add('active');
    document.body.classList.add('animation-fullscreen-active');
    wrapper.classList.add('is-fullscreen');

    // Resize canvas for fullscreen if possible
    this._resizeForFullscreen(animContainer);
  },

  // Close fullscreen modal
  closeFullscreen() {
    const overlay = document.getElementById('animation-fullscreen-overlay');

    if (!overlay || !this._fullscreenState.activeId) return;

    const wrapper = document.getElementById(this._fullscreenState.activeId);
    const fullscreenContent = overlay.querySelector('.fullscreen-content');
    const animContainer = fullscreenContent.querySelector('.animation-container');

    if (animContainer && this._fullscreenState.originalParent) {
      // Move animation back to original location
      this._fullscreenState.originalParent.appendChild(animContainer);

      // Restore canvas size
      this._restoreFromFullscreen(animContainer);
    }

    // Hide overlay
    overlay.classList.remove('active');
    document.body.classList.remove('animation-fullscreen-active');

    if (wrapper) {
      wrapper.classList.remove('is-fullscreen');
    }

    // Clear state
    this._fullscreenState.activeId = null;
    this._fullscreenState.originalParent = null;
  },

  // Resize canvas for fullscreen
  _resizeForFullscreen(container) {
    const canvas = container.querySelector('canvas');
    if (!canvas) return;

    // Store original dimensions
    canvas.dataset.originalWidth = canvas.style.width;
    canvas.dataset.originalHeight = canvas.style.height;

    // Calculate new dimensions to fit fullscreen
    const maxWidth = window.innerWidth * 0.9 - 48; // 90vw minus padding
    const maxHeight = window.innerHeight * 0.7; // Leave room for controls

    const originalWidth = parseInt(canvas.dataset.originalWidth) || 500;
    const originalHeight = parseInt(canvas.dataset.originalHeight) || 350;
    const aspectRatio = originalWidth / originalHeight;

    let newWidth = maxWidth;
    let newHeight = newWidth / aspectRatio;

    if (newHeight > maxHeight) {
      newHeight = maxHeight;
      newWidth = newHeight * aspectRatio;
    }

    // Apply new dimensions
    canvas.style.width = Math.round(newWidth) + 'px';
    canvas.style.height = Math.round(newHeight) + 'px';
  },

  // Restore canvas from fullscreen
  _restoreFromFullscreen(container) {
    const canvas = container.querySelector('canvas');
    if (!canvas) return;

    // Restore original dimensions
    if (canvas.dataset.originalWidth) {
      canvas.style.width = canvas.dataset.originalWidth;
    }
    if (canvas.dataset.originalHeight) {
      canvas.style.height = canvas.dataset.originalHeight;
    }
  },

  // ============================================
  // PHYSICS ANIMATIONS
  // ============================================

  // Projectile Motion Animation
  projectileMotion(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'animation-container';
    
    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);
    
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);
    
    const velocitySlider = this.createSlider(controls, 'Initial Velocity', 10, 50, 30, 1, ' m/s');
    const angleSlider = this.createSlider(controls, 'Angle', 15, 75, 45, 1, '°');
    
    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);
    
    let animationId = null;
    let isPlaying = false;
    
    const g = 9.8;
    const scale = 3;
    const groundY = height - 40;
    
    const self = this;
    
    const launch = () => {
      if (animationId) cancelAnimationFrame(animationId);
      
      const v0 = parseFloat(velocitySlider.value);
      const angle = parseFloat(angleSlider.value) * Math.PI / 180;
      const vx = v0 * Math.cos(angle);
      const vy = v0 * Math.sin(angle);
      
      // Calculate trajectory parameters
      const timeOfFlight = (2 * vy) / g;
      const maxHeight = (vy * vy) / (2 * g);
      const range = vx * timeOfFlight;
      
      info.innerHTML = `
        <div class="info-item">Range: <strong>${range.toFixed(1)} m</strong></div>
        <div class="info-item">Max Height: <strong>${maxHeight.toFixed(1)} m</strong></div>
        <div class="info-item">Time of Flight: <strong>${timeOfFlight.toFixed(2)} s</strong></div>
      `;
      
      let t = 0;
      const dt = 0.02;
      const trail = [];
      
      const animate = () => {
        const colors = self.getColors();
        ctx.fillStyle = colors.bg;
        ctx.fillRect(0, 0, width, height);
        
        // Draw ground
        ctx.strokeStyle = colors.axis;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, groundY);
        ctx.lineTo(width, groundY);
        ctx.stroke();
        
        // Draw grid
        ctx.strokeStyle = colors.grid;
        ctx.lineWidth = 1;
        for (let i = 0; i < width; i += 50) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, groundY);
          ctx.stroke();
        }
        for (let i = groundY; i > 0; i -= 50) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(width, i);
          ctx.stroke();
        }
        
        // Calculate position
        const x = vx * t;
        const y = vy * t - 0.5 * g * t * t;
        
        const canvasX = 30 + x * scale;
        const canvasY = groundY - y * scale;
        
        // Store trail
        if (y >= 0 && canvasX < width) {
          trail.push({ x: canvasX, y: canvasY });
        }
        
        // Draw trajectory trail
        if (trail.length > 1) {
          ctx.strokeStyle = colors.blue;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(trail[0].x, trail[0].y);
          for (let i = 1; i < trail.length; i++) {
            ctx.lineTo(trail[i].x, trail[i].y);
          }
          ctx.stroke();
        }
        
        // Draw projectile
        if (y >= 0 && canvasX < width) {
          ctx.fillStyle = colors.orange;
          ctx.beginPath();
          ctx.arc(canvasX, canvasY, 8, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw velocity vector
          const currentVx = vx;
          const currentVy = vy - g * t;
          const vMag = Math.sqrt(currentVx * currentVx + currentVy * currentVy);
          const vectorScale = 2;
          
          ctx.strokeStyle = colors.green;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(canvasX, canvasY);
          ctx.lineTo(canvasX + currentVx * vectorScale, canvasY - currentVy * vectorScale);
          ctx.stroke();
          
          // Arrow head
          const arrowAngle = Math.atan2(-currentVy, currentVx);
          ctx.beginPath();
          ctx.moveTo(canvasX + currentVx * vectorScale, canvasY - currentVy * vectorScale);
          ctx.lineTo(
            canvasX + currentVx * vectorScale - 10 * Math.cos(arrowAngle - 0.3),
            canvasY - currentVy * vectorScale + 10 * Math.sin(arrowAngle - 0.3)
          );
          ctx.moveTo(canvasX + currentVx * vectorScale, canvasY - currentVy * vectorScale);
          ctx.lineTo(
            canvasX + currentVx * vectorScale - 10 * Math.cos(arrowAngle + 0.3),
            canvasY - currentVy * vectorScale + 10 * Math.sin(arrowAngle + 0.3)
          );
          ctx.stroke();
          
          t += dt;
          animationId = requestAnimationFrame(animate);
        } else {
          isPlaying = false;
          launchBtn.textContent = 'Launch';
        }
      };
      
      isPlaying = true;
      launchBtn.textContent = 'Reset';
      animate();
    };
    
    const launchBtn = this.createButton(controls, 'Launch', () => {
      launch();
    });
    
    // Initial draw
    const colors = this.getColors();
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = colors.axis;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(width, groundY);
    ctx.stroke();
  },

  // Simple Harmonic Motion Animation
  simpleHarmonicMotion(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'animation-container';
    
    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);
    
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);
    
    const ampSlider = this.createSlider(controls, 'Amplitude', 20, 80, 50, 1, ' px');
    const freqSlider = this.createSlider(controls, 'Frequency', 0.5, 3, 1, 0.1, ' Hz');
    
    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);
    
    let t = 0;
    const trail = [];
    const maxTrailLength = 200;
    const self = this;
    
    const animate = () => {
      const colors = self.getColors();
      const A = parseFloat(ampSlider.value);
      const f = parseFloat(freqSlider.value);
      const omega = 2 * Math.PI * f;
      
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);
      
      // Calculate position
      const x = A * Math.cos(omega * t);
      const v = -A * omega * Math.sin(omega * t);
      const a = -A * omega * omega * Math.cos(omega * t);
      
      const centerX = 120;
      const centerY = height / 2;
      const massX = centerX + x;
      
      // Draw spring
      ctx.strokeStyle = colors.axisLabel;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(30, centerY);
      const springCoils = 10;
      const springWidth = 15;
      for (let i = 0; i <= springCoils; i++) {
        const sx = 30 + (i / springCoils) * (massX - 50 - 30);
        const sy = centerY + (i % 2 === 0 ? springWidth : -springWidth) * (i > 0 && i < springCoils ? 1 : 0);
        ctx.lineTo(sx, sy);
      }
      ctx.lineTo(massX - 20, centerY);
      ctx.stroke();
      
      // Draw wall
      ctx.fillStyle = colors.axis;
      ctx.fillRect(0, centerY - 50, 30, 100);
      
      // Draw mass
      ctx.fillStyle = colors.blue;
      ctx.fillRect(massX - 20, centerY - 25, 40, 50);
      
      // Draw equilibrium line
      ctx.strokeStyle = colors.axis;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - 80);
      ctx.lineTo(centerX, centerY + 80);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Draw displacement arrow
      if (Math.abs(x) > 5) {
        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY + 60);
        ctx.lineTo(massX, centerY + 60);
        ctx.stroke();
        
        // Arrow head
        const dir = x > 0 ? 1 : -1;
        ctx.beginPath();
        ctx.moveTo(massX, centerY + 60);
        ctx.lineTo(massX - 8 * dir, centerY + 55);
        ctx.lineTo(massX - 8 * dir, centerY + 65);
        ctx.closePath();
        ctx.fillStyle = colors.orange;
        ctx.fill();
      }
      
      // Draw position-time graph
      const graphX = 280;
      const graphY = centerY;
      const graphWidth = 200;
      const graphHeight = 80;
      
      // Graph axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(graphX, graphY - graphHeight);
      ctx.lineTo(graphX, graphY + graphHeight);
      ctx.moveTo(graphX, graphY);
      ctx.lineTo(graphX + graphWidth, graphY);
      ctx.stroke();
      
      // Labels
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '12px system-ui';
      ctx.fillText('x(t)', graphX + graphWidth + 5, graphY + 4);
      ctx.fillText('t', graphX + graphWidth / 2, graphY + graphHeight + 15);
      
      // Add to trail
      trail.push({ t: t, x: x });
      if (trail.length > maxTrailLength) trail.shift();
      
      // Draw trail on graph
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < trail.length; i++) {
        const gx = graphX + (i / maxTrailLength) * graphWidth;
        const gy = graphY - trail[i].x * (graphHeight / 100);
        if (i === 0) ctx.moveTo(gx, gy);
        else ctx.lineTo(gx, gy);
      }
      ctx.stroke();
      
      // Current point
      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(graphX + graphWidth, graphY - x * (graphHeight / 100), 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Update info
      info.innerHTML = `
        <div class="info-item">x = <strong>${x.toFixed(1)} px</strong></div>
        <div class="info-item">v = <strong>${v.toFixed(1)} px/s</strong></div>
        <div class="info-item">a = <strong>${a.toFixed(1)} px/s²</strong></div>
        <div class="info-item">T = <strong>${(1/f).toFixed(2)} s</strong></div>
      `;
      
      t += 0.016;
      requestAnimationFrame(animate);
    };
    
    animate();
  },

  // Wave Superposition Animation
  waveSuperposition(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'animation-container';
    
    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);
    
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);
    
    const freq1Slider = this.createSlider(controls, 'Wave 1 Frequency', 1, 5, 2, 0.5, ' Hz');
    const freq2Slider = this.createSlider(controls, 'Wave 2 Frequency', 1, 5, 2.5, 0.5, ' Hz');
    const phaseSlider = this.createSlider(controls, 'Phase Difference', 0, 360, 0, 10, '°');
    
    let t = 0;
    const self = this;
    
    const animate = () => {
      const colors = self.getColors();
      const f1 = parseFloat(freq1Slider.value);
      const f2 = parseFloat(freq2Slider.value);
      const phase = parseFloat(phaseSlider.value) * Math.PI / 180;
      
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);
      
      const amplitude = 30;
      const yOffset1 = 60;
      const yOffset2 = 140;
      const yOffsetSum = 260;
      
      // Labels
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '12px system-ui';
      ctx.fillText('Wave 1', 10, yOffset1 - 35);
      ctx.fillText('Wave 2', 10, yOffset2 - 35);
      ctx.fillText('Superposition', 10, yOffsetSum - 35);
      
      // Draw center lines
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      [yOffset1, yOffset2, yOffsetSum].forEach(y => {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      });
      
      // Wave 1
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const y = amplitude * Math.sin(2 * Math.PI * f1 * (x / 100 - t));
        if (x === 0) ctx.moveTo(x, yOffset1 + y);
        else ctx.lineTo(x, yOffset1 + y);
      }
      ctx.stroke();
      
      // Wave 2
      ctx.strokeStyle = colors.orange;
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const y = amplitude * Math.sin(2 * Math.PI * f2 * (x / 100 - t) + phase);
        if (x === 0) ctx.moveTo(x, yOffset2 + y);
        else ctx.lineTo(x, yOffset2 + y);
      }
      ctx.stroke();
      
      // Superposition
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const y1 = amplitude * Math.sin(2 * Math.PI * f1 * (x / 100 - t));
        const y2 = amplitude * Math.sin(2 * Math.PI * f2 * (x / 100 - t) + phase);
        const y = y1 + y2;
        if (x === 0) ctx.moveTo(x, yOffsetSum + y);
        else ctx.lineTo(x, yOffsetSum + y);
      }
      ctx.stroke();
      
      // Beat frequency info
      if (Math.abs(f1 - f2) < 1) {
        ctx.fillStyle = colors.axisLabel;
        ctx.fillText(`Beat frequency: ${Math.abs(f1 - f2).toFixed(1)} Hz`, 10, yOffsetSum + 55);
      }
      
      t += 0.016;
      requestAnimationFrame(animate);
    };
    
    animate();
  },

  // Electric Field Lines Animation
  electricField(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'animation-container';
    
    const { canvas, ctx, width, height } = this.createCanvas(container, 450, 350);
    
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);
    
    const self = this;
    const chargeBtn1 = this.createButton(controls, '+Q at left', () => { charges[0].q = 1; render(); });
    const chargeBtn2 = this.createButton(controls, '-Q at left', () => { charges[0].q = -1; render(); });
    const chargeBtn3 = this.createButton(controls, '+Q at right', () => { charges[1].q = 1; render(); });
    const chargeBtn4 = this.createButton(controls, '-Q at right', () => { charges[1].q = -1; render(); });
    
    const charges = [
      { x: 150, y: height / 2, q: 1 },
      { x: 300, y: height / 2, q: -1 }
    ];
    
    const calculateField = (px, py) => {
      let Ex = 0, Ey = 0;
      for (const charge of charges) {
        const dx = px - charge.x;
        const dy = py - charge.y;
        const r2 = dx * dx + dy * dy;
        const r = Math.sqrt(r2);
        if (r < 20) continue;
        const E = charge.q / r2 * 5000;
        Ex += E * dx / r;
        Ey += E * dy / r;
      }
      return { Ex, Ey };
    };
    
    const render = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);
      
      // Draw field lines
      const numLines = 12;
      for (const charge of charges) {
        if (charge.q === 0) continue;
        
        for (let i = 0; i < numLines; i++) {
          const angle = (2 * Math.PI * i) / numLines;
          let x = charge.x + 25 * Math.cos(angle);
          let y = charge.y + 25 * Math.sin(angle);
          
          ctx.strokeStyle = charge.q > 0 ? colors.blue + '99' : colors.orange + '99';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x, y);
          
          const direction = charge.q > 0 ? 1 : -1;
          
          for (let step = 0; step < 100; step++) {
            const { Ex, Ey } = calculateField(x, y);
            const E = Math.sqrt(Ex * Ex + Ey * Ey);
            if (E < 0.1 || x < 0 || x > width || y < 0 || y > height) break;
            
            const stepSize = 5;
            x += direction * stepSize * Ex / E;
            y += direction * stepSize * Ey / E;
            
            ctx.lineTo(x, y);
            
            // Check if reached another charge
            let hitCharge = false;
            for (const c of charges) {
              const d = Math.sqrt((x - c.x) ** 2 + (y - c.y) ** 2);
              if (d < 20) hitCharge = true;
            }
            if (hitCharge) break;
          }
          ctx.stroke();
        }
      }
      
      // Draw charges
      for (const charge of charges) {
        // Glow effect
        const gradient = ctx.createRadialGradient(charge.x, charge.y, 0, charge.x, charge.y, 30);
        gradient.addColorStop(0, charge.q > 0 ? colors.blueGlow : colors.orangeGlow);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(charge.x, charge.y, 30, 0, Math.PI * 2);
        ctx.fill();
        
        // Charge circle
        ctx.fillStyle = charge.q > 0 ? colors.blue : colors.orange;
        ctx.beginPath();
        ctx.arc(charge.x, charge.y, 18, 0, Math.PI * 2);
        ctx.fill();
        
        // + or - sign
        ctx.fillStyle = colors.bg;
        ctx.font = 'bold 20px system-ui';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(charge.q > 0 ? '+' : '−', charge.x, charge.y);
      }
      
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
    };
    
    render();
  },

  // Advanced Electric Field Visualizer with full interactivity
  electricFieldVisualizer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container electric-field-visualizer';

    const self = this;

    // Main layout container
    const mainWrapper = document.createElement('div');
    mainWrapper.style.cssText = 'display: flex; flex-direction: column; gap: 10px; width: 100%;';
    container.appendChild(mainWrapper);

    // Canvas container
    const canvasContainer = document.createElement('div');
    canvasContainer.style.cssText = 'position: relative; border-radius: 8px; overflow: hidden;';
    mainWrapper.appendChild(canvasContainer);

    const { canvas, ctx, width, height } = this.createCanvas(canvasContainer, 600, 450);
    canvas.style.cssText = 'display: block; cursor: crosshair; border-radius: 8px;';

    // Controls panel
    const controlsPanel = document.createElement('div');
    controlsPanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px;';
    mainWrapper.appendChild(controlsPanel);

    // Charge buttons group
    const chargeGroup = document.createElement('div');
    chargeGroup.style.cssText = 'display: flex; gap: 6px; align-items: center;';
    controlsPanel.appendChild(chargeGroup);

    const addPosBtn = document.createElement('button');
    addPosBtn.className = 'anim-btn';
    addPosBtn.innerHTML = '<span style="color: #ef4444; font-weight: bold; font-size: 16px;">+</span> Add +q';
    addPosBtn.style.cssText = 'padding: 6px 12px; font-size: 13px; display: flex; align-items: center; gap: 4px;';
    chargeGroup.appendChild(addPosBtn);

    const addNegBtn = document.createElement('button');
    addNegBtn.className = 'anim-btn';
    addNegBtn.innerHTML = '<span style="color: #60a5fa; font-weight: bold; font-size: 16px;">-</span> Add -q';
    addNegBtn.style.cssText = 'padding: 6px 12px; font-size: 13px; display: flex; align-items: center; gap: 4px;';
    chargeGroup.appendChild(addNegBtn);

    const clearBtn = document.createElement('button');
    clearBtn.className = 'anim-btn';
    clearBtn.textContent = 'Clear All';
    clearBtn.style.cssText = 'padding: 6px 12px; font-size: 13px; background: #3f3f46;';
    chargeGroup.appendChild(clearBtn);

    // Magnitude slider
    const magGroup = document.createElement('div');
    magGroup.style.cssText = 'display: flex; align-items: center; gap: 8px; padding: 0 8px;';
    const magLabel = document.createElement('span');
    magLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa);';
    magLabel.textContent = 'Charge: ';
    const magValue = document.createElement('span');
    magValue.style.cssText = 'font-size: 12px; color: var(--text-primary, #fafafa); font-weight: bold; min-width: 20px;';
    magValue.textContent = '1';
    const magSlider = document.createElement('input');
    magSlider.type = 'range';
    magSlider.min = '1';
    magSlider.max = '5';
    magSlider.value = '1';
    magSlider.step = '1';
    magSlider.style.cssText = 'width: 80px;';
    magGroup.appendChild(magLabel);
    magGroup.appendChild(magSlider);
    magGroup.appendChild(magValue);
    controlsPanel.appendChild(magGroup);

    // View toggles group
    const viewGroup = document.createElement('div');
    viewGroup.style.cssText = 'display: flex; gap: 6px; align-items: center; margin-left: auto;';
    controlsPanel.appendChild(viewGroup);

    const createToggle = (label, checked, onChange) => {
      const wrapper = document.createElement('label');
      wrapper.style.cssText = 'display: flex; align-items: center; gap: 4px; font-size: 12px; color: var(--text-secondary, #a1a1aa); cursor: pointer;';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = checked;
      checkbox.addEventListener('change', onChange);
      wrapper.appendChild(checkbox);
      wrapper.appendChild(document.createTextNode(label));
      return { wrapper, checkbox };
    };

    let showFieldLines = true;
    let showVectors = false;
    let showEquipotentials = false;
    let showTestCharge = true;

    const fieldLinesToggle = createToggle('Field Lines', true, () => { showFieldLines = !showFieldLines; render(); });
    const vectorsToggle = createToggle('Vectors', false, () => { showVectors = !showVectors; render(); });
    const equipotToggle = createToggle('Equipotentials', false, () => { showEquipotentials = !showEquipotentials; render(); });
    const testChargeToggle = createToggle('Test Charge', true, () => { showTestCharge = !showTestCharge; render(); });

    viewGroup.appendChild(fieldLinesToggle.wrapper);
    viewGroup.appendChild(vectorsToggle.wrapper);
    viewGroup.appendChild(equipotToggle.wrapper);
    viewGroup.appendChild(testChargeToggle.wrapper);

    // Presets panel
    const presetsPanel = document.createElement('div');
    presetsPanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 6px; padding: 8px 12px; background: var(--bg-secondary, #18181b); border-radius: 8px;';
    mainWrapper.appendChild(presetsPanel);

    const presetsLabel = document.createElement('span');
    presetsLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa); margin-right: 8px; display: flex; align-items: center;';
    presetsLabel.textContent = 'Presets:';
    presetsPanel.appendChild(presetsLabel);

    const presets = {
      'Single +q': [{ x: width/2, y: height/2, q: 1 }],
      'Single -q': [{ x: width/2, y: height/2, q: -1 }],
      'Dipole': [{ x: width/2 - 80, y: height/2, q: 1 }, { x: width/2 + 80, y: height/2, q: -1 }],
      'Like Charges': [{ x: width/2 - 80, y: height/2, q: 1 }, { x: width/2 + 80, y: height/2, q: 1 }],
      'Parallel Plates': 'plates'
    };

    Object.entries(presets).forEach(([name, config]) => {
      const btn = document.createElement('button');
      btn.className = 'anim-btn';
      btn.textContent = name;
      btn.style.cssText = 'padding: 4px 10px; font-size: 11px;';
      btn.addEventListener('click', () => loadPreset(name, config));
      presetsPanel.appendChild(btn);
    });

    // Info panel
    const infoPanel = document.createElement('div');
    infoPanel.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 8px; padding: 10px 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; font-size: 12px;';
    mainWrapper.appendChild(infoPanel);

    const createInfoItem = (label, id) => {
      const item = document.createElement('div');
      item.style.cssText = 'display: flex; flex-direction: column;';
      const labelEl = document.createElement('span');
      labelEl.style.cssText = 'color: var(--text-secondary, #a1a1aa); font-size: 11px;';
      labelEl.textContent = label;
      const valueEl = document.createElement('span');
      valueEl.id = id;
      valueEl.style.cssText = 'color: var(--text-primary, #fafafa); font-weight: bold;';
      valueEl.textContent = '-';
      item.appendChild(labelEl);
      item.appendChild(valueEl);
      return item;
    };

    infoPanel.appendChild(createInfoItem('Positive Charges', 'ef-pos-count'));
    infoPanel.appendChild(createInfoItem('Negative Charges', 'ef-neg-count'));
    infoPanel.appendChild(createInfoItem('Net Charge', 'ef-net-charge'));
    infoPanel.appendChild(createInfoItem('Field at Test Charge', 'ef-field-strength'));
    infoPanel.appendChild(createInfoItem('Force Direction', 'ef-force-dir'));

    // State
    let charges = [];
    let testChargePos = { x: width * 0.75, y: height * 0.5 };
    let draggedCharge = null;
    let draggedTestCharge = false;
    let isPlatesMode = false;
    let addMode = null; // 'positive', 'negative', or null

    const k = 8.99e9; // Coulomb's constant (scaled for visualization)
    const chargeRadius = 20;

    // Utility functions
    const calculateField = (px, py) => {
      let Ex = 0, Ey = 0;

      if (isPlatesMode) {
        // Uniform field between parallel plates
        const plateTop = height * 0.2;
        const plateBottom = height * 0.8;
        if (py > plateTop && py < plateBottom) {
          Ey = 200; // Uniform downward field
        }
        return { Ex, Ey };
      }

      for (const charge of charges) {
        const dx = px - charge.x;
        const dy = py - charge.y;
        const r2 = dx * dx + dy * dy;
        const r = Math.sqrt(r2);
        if (r < chargeRadius * 1.5) continue;

        const E = (charge.q * Math.abs(charge.q)) * 8000 / r2;
        Ex += E * dx / r;
        Ey += E * dy / r;
      }
      return { Ex, Ey };
    };

    const calculatePotential = (px, py) => {
      let V = 0;
      if (isPlatesMode) {
        const plateTop = height * 0.2;
        const plateBottom = height * 0.8;
        V = -200 * (py - plateTop) / (plateBottom - plateTop);
        return V;
      }
      for (const charge of charges) {
        const dx = px - charge.x;
        const dy = py - charge.y;
        const r = Math.sqrt(dx * dx + dy * dy);
        if (r < chargeRadius) continue;
        V += (charge.q * Math.abs(charge.q)) * 5000 / r;
      }
      return V;
    };

    const drawFieldLines = (colors) => {
      if (!showFieldLines) return;

      const numLinesPerCharge = 12;
      const stepSize = 4;
      const maxSteps = 200;

      if (isPlatesMode) {
        // Draw uniform field lines for parallel plates
        ctx.strokeStyle = colors.text + 'aa';
        ctx.lineWidth = 1.5;
        const plateTop = height * 0.2;
        const plateBottom = height * 0.8;
        const numLines = 15;

        for (let i = 0; i < numLines; i++) {
          const x = width * 0.15 + (width * 0.7) * i / (numLines - 1);
          ctx.beginPath();
          ctx.moveTo(x, plateTop + 15);
          ctx.lineTo(x, plateBottom - 15);
          ctx.stroke();

          // Arrow in middle
          const arrowY = (plateTop + plateBottom) / 2;
          ctx.beginPath();
          ctx.moveTo(x - 5, arrowY - 8);
          ctx.lineTo(x, arrowY);
          ctx.lineTo(x + 5, arrowY - 8);
          ctx.stroke();
        }
        return;
      }

      for (const charge of charges) {
        const lineCount = numLinesPerCharge * Math.abs(charge.q);

        for (let i = 0; i < lineCount; i++) {
          const angle = (2 * Math.PI * i) / lineCount;
          let x = charge.x + (chargeRadius + 5) * Math.cos(angle);
          let y = charge.y + (chargeRadius + 5) * Math.sin(angle);

          const direction = charge.q > 0 ? 1 : -1;

          ctx.strokeStyle = colors.text + '88';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(x, y);

          let lastArrowStep = 0;

          for (let step = 0; step < maxSteps; step++) {
            const { Ex, Ey } = calculateField(x, y);
            const E = Math.sqrt(Ex * Ex + Ey * Ey);

            if (E < 0.5 || x < 0 || x > width || y < 0 || y > height) break;

            x += direction * stepSize * Ex / E;
            y += direction * stepSize * Ey / E;

            ctx.lineTo(x, y);

            // Check if hit another charge
            let hitCharge = false;
            for (const c of charges) {
              if (c === charge && step < 5) continue;
              const d = Math.sqrt((x - c.x) ** 2 + (y - c.y) ** 2);
              if (d < chargeRadius + 3) hitCharge = true;
            }
            if (hitCharge) break;

            // Draw arrow heads at intervals
            if (step - lastArrowStep > 25 && step < maxSteps - 20) {
              ctx.stroke();

              // Draw arrow head
              const arrowSize = 6;
              const { Ex: exa, Ey: eya } = calculateField(x, y);
              const ea = Math.sqrt(exa * exa + eya * eya);
              if (ea > 0.1) {
                const ax = direction * exa / ea;
                const ay = direction * eya / ea;

                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x - arrowSize * ax - arrowSize * 0.5 * ay, y - arrowSize * ay + arrowSize * 0.5 * ax);
                ctx.moveTo(x, y);
                ctx.lineTo(x - arrowSize * ax + arrowSize * 0.5 * ay, y - arrowSize * ay - arrowSize * 0.5 * ax);
                ctx.stroke();
              }

              ctx.beginPath();
              ctx.moveTo(x, y);
              lastArrowStep = step;
            }
          }
          ctx.stroke();
        }
      }
    };

    const drawFieldVectors = (colors) => {
      if (!showVectors) return;

      const gridSpacing = 40;
      const maxArrowLength = 25;

      ctx.strokeStyle = colors.text + '66';
      ctx.lineWidth = 1;

      for (let x = gridSpacing; x < width; x += gridSpacing) {
        for (let y = gridSpacing; y < height; y += gridSpacing) {
          // Skip if too close to a charge
          let tooClose = false;
          for (const c of charges) {
            if (Math.sqrt((x - c.x) ** 2 + (y - c.y) ** 2) < chargeRadius * 2) {
              tooClose = true;
              break;
            }
          }
          if (tooClose) continue;

          const { Ex, Ey } = calculateField(x, y);
          const E = Math.sqrt(Ex * Ex + Ey * Ey);

          if (E < 0.1) continue;

          // Normalize and scale arrow
          const scale = Math.min(maxArrowLength, Math.log(E + 1) * 8);
          const ax = scale * Ex / E;
          const ay = scale * Ey / E;

          // Draw arrow
          ctx.beginPath();
          ctx.moveTo(x - ax/2, y - ay/2);
          ctx.lineTo(x + ax/2, y + ay/2);
          ctx.stroke();

          // Arrow head
          const headSize = 4;
          const angle = Math.atan2(ay, ax);
          ctx.beginPath();
          ctx.moveTo(x + ax/2, y + ay/2);
          ctx.lineTo(x + ax/2 - headSize * Math.cos(angle - 0.4), y + ay/2 - headSize * Math.sin(angle - 0.4));
          ctx.moveTo(x + ax/2, y + ay/2);
          ctx.lineTo(x + ax/2 - headSize * Math.cos(angle + 0.4), y + ay/2 - headSize * Math.sin(angle + 0.4));
          ctx.stroke();
        }
      }
    };

    const drawEquipotentials = (colors) => {
      if (!showEquipotentials) return;
      if (charges.length === 0 && !isPlatesMode) return;

      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 4]);

      if (isPlatesMode) {
        // Draw horizontal equipotential lines for parallel plates
        const plateTop = height * 0.2;
        const plateBottom = height * 0.8;
        const numLines = 8;

        for (let i = 1; i < numLines; i++) {
          const y = plateTop + (plateBottom - plateTop) * i / numLines;
          ctx.beginPath();
          ctx.moveTo(width * 0.1, y);
          ctx.lineTo(width * 0.9, y);
          ctx.stroke();
        }
        ctx.setLineDash([]);
        return;
      }

      // Find potential range
      let minV = Infinity, maxV = -Infinity;
      for (let x = 0; x < width; x += 20) {
        for (let y = 0; y < height; y += 20) {
          const V = calculatePotential(x, y);
          if (isFinite(V)) {
            minV = Math.min(minV, V);
            maxV = Math.max(maxV, V);
          }
        }
      }

      // Draw contours using marching squares approximation
      const numContours = 8;
      const step = (maxV - minV) / (numContours + 1);

      for (let contour = 1; contour <= numContours; contour++) {
        const targetV = minV + step * contour;

        // Simple contour tracing
        for (let startX = 20; startX < width - 20; startX += 30) {
          for (let startY = 20; startY < height - 20; startY += 30) {
            const V = calculatePotential(startX, startY);
            if (Math.abs(V - targetV) < step * 0.3) {
              // Found a point near contour, trace it
              ctx.beginPath();
              ctx.arc(startX, startY, 2, 0, Math.PI * 2);
              ctx.stroke();
            }
          }
        }
      }

      ctx.setLineDash([]);
    };

    const drawCharges = (colors) => {
      if (isPlatesMode) {
        // Draw parallel plates
        const plateTop = height * 0.2;
        const plateBottom = height * 0.8;
        const plateWidth = width * 0.7;
        const plateX = width * 0.15;

        // Positive plate (top)
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(plateX, plateTop - 8, plateWidth, 16);
        ctx.fillStyle = colors.bg;
        ctx.font = 'bold 14px system-ui';
        ctx.textAlign = 'center';
        for (let i = 0; i < 10; i++) {
          ctx.fillText('+', plateX + plateWidth * (i + 0.5) / 10, plateTop + 5);
        }

        // Negative plate (bottom)
        ctx.fillStyle = '#60a5fa';
        ctx.fillRect(plateX, plateBottom - 8, plateWidth, 16);
        ctx.fillStyle = colors.bg;
        for (let i = 0; i < 10; i++) {
          ctx.fillText('-', plateX + plateWidth * (i + 0.5) / 10, plateBottom + 5);
        }

        ctx.textAlign = 'left';
        return;
      }

      for (const charge of charges) {
        const isPositive = charge.q > 0;
        const size = chargeRadius * (0.8 + 0.2 * Math.abs(charge.q));

        // Glow effect
        const gradient = ctx.createRadialGradient(charge.x, charge.y, 0, charge.x, charge.y, size * 1.8);
        gradient.addColorStop(0, isPositive ? 'rgba(239, 68, 68, 0.4)' : 'rgba(96, 165, 250, 0.4)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(charge.x, charge.y, size * 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Charge circle
        ctx.fillStyle = isPositive ? '#ef4444' : '#60a5fa';
        ctx.beginPath();
        ctx.arc(charge.x, charge.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Border
        ctx.strokeStyle = isPositive ? '#fca5a5' : '#93c5fd';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(charge.x, charge.y, size, 0, Math.PI * 2);
        ctx.stroke();

        // + or - sign
        ctx.fillStyle = '#ffffff';
        ctx.font = `bold ${14 + Math.abs(charge.q) * 2}px system-ui`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(isPositive ? '+' : '-', charge.x, charge.y);

        // Charge magnitude label
        if (Math.abs(charge.q) > 1) {
          ctx.font = '10px system-ui';
          ctx.fillStyle = colors.text;
          ctx.fillText(`${Math.abs(charge.q)}q`, charge.x, charge.y + size + 12);
        }
      }

      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
    };

    const drawTestCharge = (colors) => {
      if (!showTestCharge) return;

      const { Ex, Ey } = calculateField(testChargePos.x, testChargePos.y);
      const E = Math.sqrt(Ex * Ex + Ey * Ey);

      // Test charge (small positive)
      ctx.fillStyle = '#34d399';
      ctx.beginPath();
      ctx.arc(testChargePos.x, testChargePos.y, 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#86efac';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(testChargePos.x, testChargePos.y, 10, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('+', testChargePos.x, testChargePos.y);

      // Force arrow on test charge
      if (E > 0.5 && (charges.length > 0 || isPlatesMode)) {
        const arrowLength = Math.min(60, Math.log(E + 1) * 15);
        const fx = arrowLength * Ex / E;
        const fy = arrowLength * Ey / E;

        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(testChargePos.x, testChargePos.y);
        ctx.lineTo(testChargePos.x + fx, testChargePos.y + fy);
        ctx.stroke();

        // Arrow head
        const angle = Math.atan2(fy, fx);
        ctx.beginPath();
        ctx.moveTo(testChargePos.x + fx, testChargePos.y + fy);
        ctx.lineTo(testChargePos.x + fx - 10 * Math.cos(angle - 0.3), testChargePos.y + fy - 10 * Math.sin(angle - 0.3));
        ctx.lineTo(testChargePos.x + fx - 10 * Math.cos(angle + 0.3), testChargePos.y + fy - 10 * Math.sin(angle + 0.3));
        ctx.closePath();
        ctx.fillStyle = '#fbbf24';
        ctx.fill();

        // Force label
        ctx.fillStyle = '#fbbf24';
        ctx.font = 'bold 11px system-ui';
        ctx.textAlign = 'left';
        ctx.fillText('F', testChargePos.x + fx + 8, testChargePos.y + fy);
      }

      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
    };

    const updateInfo = () => {
      const posCount = charges.filter(c => c.q > 0).reduce((sum, c) => sum + c.q, 0);
      const negCount = charges.filter(c => c.q < 0).reduce((sum, c) => sum + Math.abs(c.q), 0);
      const netCharge = charges.reduce((sum, c) => sum + c.q, 0);

      const { Ex, Ey } = calculateField(testChargePos.x, testChargePos.y);
      const E = Math.sqrt(Ex * Ex + Ey * Ey);
      const angle = Math.atan2(Ey, Ex) * 180 / Math.PI;

      document.getElementById('ef-pos-count').textContent = isPlatesMode ? 'Plate' : posCount.toString();
      document.getElementById('ef-neg-count').textContent = isPlatesMode ? 'Plate' : negCount.toString();
      document.getElementById('ef-net-charge').textContent = isPlatesMode ? '0 (Capacitor)' : (netCharge > 0 ? '+' : '') + netCharge + 'q';
      document.getElementById('ef-field-strength').textContent = E < 0.1 ? '0' : E.toFixed(1) + ' (rel)';

      let direction = '-';
      if (E > 0.5) {
        if (angle > -22.5 && angle <= 22.5) direction = 'Right';
        else if (angle > 22.5 && angle <= 67.5) direction = 'Down-Right';
        else if (angle > 67.5 && angle <= 112.5) direction = 'Down';
        else if (angle > 112.5 && angle <= 157.5) direction = 'Down-Left';
        else if (angle > 157.5 || angle <= -157.5) direction = 'Left';
        else if (angle > -157.5 && angle <= -112.5) direction = 'Up-Left';
        else if (angle > -112.5 && angle <= -67.5) direction = 'Up';
        else if (angle > -67.5 && angle <= -22.5) direction = 'Up-Right';
      }
      document.getElementById('ef-force-dir').textContent = direction;
    };

    const render = () => {
      const colors = self.getColors();

      // Background
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw components
      drawEquipotentials(colors);
      drawFieldLines(colors);
      drawFieldVectors(colors);
      drawCharges(colors);
      drawTestCharge(colors);

      // Instructions overlay
      if (charges.length === 0 && !isPlatesMode) {
        ctx.fillStyle = colors.textSecondary;
        ctx.font = '14px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('Click canvas to add charges, or select a preset below', width/2, height/2 - 20);
        ctx.fillText('Drag charges to reposition them', width/2, height/2 + 5);
        ctx.textAlign = 'left';
      }

      // Add mode indicator
      if (addMode) {
        ctx.fillStyle = addMode === 'positive' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(96, 165, 250, 0.2)';
        ctx.fillRect(0, 0, width, 30);
        ctx.fillStyle = colors.text;
        ctx.font = '12px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(`Click to place ${addMode} charge (magnitude: ${magSlider.value}q) - Click elsewhere or press Esc to cancel`, width/2, 18);
        ctx.textAlign = 'left';
      }

      updateInfo();
    };

    const loadPreset = (name, config) => {
      if (config === 'plates') {
        charges = [];
        isPlatesMode = true;
        testChargePos = { x: width * 0.5, y: height * 0.5 };
      } else {
        isPlatesMode = false;
        charges = config.map(c => ({ ...c }));
        testChargePos = { x: width * 0.75, y: height * 0.5 };
      }
      addMode = null;
      render();
    };

    // Event handlers
    magSlider.addEventListener('input', () => {
      magValue.textContent = magSlider.value;
    });

    addPosBtn.addEventListener('click', () => {
      addMode = addMode === 'positive' ? null : 'positive';
      isPlatesMode = false;
      render();
    });

    addNegBtn.addEventListener('click', () => {
      addMode = addMode === 'negative' ? null : 'negative';
      isPlatesMode = false;
      render();
    });

    clearBtn.addEventListener('click', () => {
      charges = [];
      isPlatesMode = false;
      addMode = null;
      testChargePos = { x: width * 0.75, y: height * 0.5 };
      render();
    });

    const getMousePos = (e) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - rect.left) * (width / rect.width),
        y: (e.clientY - rect.top) * (height / rect.height)
      };
    };

    const findChargeAt = (x, y) => {
      for (const charge of charges) {
        const d = Math.sqrt((x - charge.x) ** 2 + (y - charge.y) ** 2);
        if (d < chargeRadius * 1.5) return charge;
      }
      return null;
    };

    const isNearTestCharge = (x, y) => {
      const d = Math.sqrt((x - testChargePos.x) ** 2 + (y - testChargePos.y) ** 2);
      return d < 15;
    };

    canvas.addEventListener('mousedown', (e) => {
      const pos = getMousePos(e);

      if (addMode) {
        // Add new charge
        const mag = parseInt(magSlider.value);
        charges.push({
          x: pos.x,
          y: pos.y,
          q: addMode === 'positive' ? mag : -mag
        });
        addMode = null;
        render();
        return;
      }

      // Check if clicking on test charge
      if (showTestCharge && isNearTestCharge(pos.x, pos.y)) {
        draggedTestCharge = true;
        canvas.style.cursor = 'grabbing';
        return;
      }

      // Check if clicking on existing charge
      const charge = findChargeAt(pos.x, pos.y);
      if (charge) {
        draggedCharge = charge;
        canvas.style.cursor = 'grabbing';
        return;
      }
    });

    canvas.addEventListener('mousemove', (e) => {
      const pos = getMousePos(e);

      if (draggedCharge) {
        draggedCharge.x = Math.max(chargeRadius, Math.min(width - chargeRadius, pos.x));
        draggedCharge.y = Math.max(chargeRadius, Math.min(height - chargeRadius, pos.y));
        render();
        return;
      }

      if (draggedTestCharge) {
        testChargePos.x = Math.max(15, Math.min(width - 15, pos.x));
        testChargePos.y = Math.max(15, Math.min(height - 15, pos.y));
        render();
        return;
      }

      // Update cursor
      if (addMode) {
        canvas.style.cursor = 'crosshair';
      } else if (findChargeAt(pos.x, pos.y) || (showTestCharge && isNearTestCharge(pos.x, pos.y))) {
        canvas.style.cursor = 'grab';
      } else {
        canvas.style.cursor = 'default';
      }
    });

    canvas.addEventListener('mouseup', () => {
      draggedCharge = null;
      draggedTestCharge = false;
      canvas.style.cursor = addMode ? 'crosshair' : 'default';
    });

    canvas.addEventListener('mouseleave', () => {
      draggedCharge = null;
      draggedTestCharge = false;
    });

    // Touch support
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      const pos = {
        x: (touch.clientX - rect.left) * (width / rect.width),
        y: (touch.clientY - rect.top) * (height / rect.height)
      };

      if (addMode) {
        const mag = parseInt(magSlider.value);
        charges.push({
          x: pos.x,
          y: pos.y,
          q: addMode === 'positive' ? mag : -mag
        });
        addMode = null;
        render();
        return;
      }

      if (showTestCharge && isNearTestCharge(pos.x, pos.y)) {
        draggedTestCharge = true;
        return;
      }

      const charge = findChargeAt(pos.x, pos.y);
      if (charge) {
        draggedCharge = charge;
      }
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      const pos = {
        x: (touch.clientX - rect.left) * (width / rect.width),
        y: (touch.clientY - rect.top) * (height / rect.height)
      };

      if (draggedCharge) {
        draggedCharge.x = Math.max(chargeRadius, Math.min(width - chargeRadius, pos.x));
        draggedCharge.y = Math.max(chargeRadius, Math.min(height - chargeRadius, pos.y));
        render();
      }

      if (draggedTestCharge) {
        testChargePos.x = Math.max(15, Math.min(width - 15, pos.x));
        testChargePos.y = Math.max(15, Math.min(height - 15, pos.y));
        render();
      }
    }, { passive: false });

    canvas.addEventListener('touchend', () => {
      draggedCharge = null;
      draggedTestCharge = false;
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && addMode) {
        addMode = null;
        render();
      }
    });

    // Double-click to remove charge
    canvas.addEventListener('dblclick', (e) => {
      const pos = getMousePos(e);
      const charge = findChargeAt(pos.x, pos.y);
      if (charge) {
        charges = charges.filter(c => c !== charge);
        render();
      }
    });

    // Initial render with dipole preset
    loadPreset('Dipole', presets['Dipole']);
  },

  // Orbital Visualization (Chemistry)
  orbitalVisualization(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'animation-container';
    
    const { canvas, ctx, width, height } = this.createCanvas(container, 400, 350);
    
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);
    
    let currentOrbital = 's';
    const self = this;
    
    const sBtn = this.createButton(controls, 's orbital', () => { currentOrbital = 's'; });
    const pBtn = this.createButton(controls, 'p orbital', () => { currentOrbital = 'p'; });
    const dBtn = this.createButton(controls, 'd orbital', () => { currentOrbital = 'd'; });
    
    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);
    
    let angle = 0;
    
    const animate = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX - 150, centerY);
      ctx.lineTo(centerX + 150, centerY);
      ctx.moveTo(centerX, centerY - 130);
      ctx.lineTo(centerX, centerY + 130);
      ctx.stroke();
      
      // Labels
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '12px system-ui';
      ctx.fillText('x', centerX + 155, centerY + 4);
      ctx.fillText('y', centerX + 4, centerY - 135);
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      
      if (currentOrbital === 's') {
        // s orbital - sphere
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 70);
        gradient.addColorStop(0, colors.blue);
        gradient.addColorStop(0.5, colors.blue + '66');
        gradient.addColorStop(1, colors.blue + '00');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, 70, 0, Math.PI * 2);
        ctx.fill();
        
        // Nucleus
        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fill();
        
        info.innerHTML = `
          <div class="info-item"><strong>s Orbital</strong></div>
          <div class="info-item">Shape: Spherical</div>
          <div class="info-item">Nodes: n - 1 (radial only)</div>
          <div class="info-item">Orbitals per subshell: 1</div>
        `;
      } else if (currentOrbital === 'p') {
        // p orbital - dumbbell
        const drawLobe = (offsetX, offsetY, rotation) => {
          ctx.save();
          ctx.rotate(rotation);
          
          const gradient = ctx.createRadialGradient(offsetX, offsetY, 0, offsetX, offsetY, 60);
          gradient.addColorStop(0, colors.green);
          gradient.addColorStop(0.7, colors.green + '4D');
          gradient.addColorStop(1, colors.green + '00');
          ctx.fillStyle = gradient;
          
          ctx.beginPath();
          ctx.ellipse(offsetX, offsetY, 35, 55, 0, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        };
        
        drawLobe(0, -55, 0);
        drawLobe(0, 55, 0);
        
        // Node plane indicator
        ctx.strokeStyle = colors.orange + '80';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(-80, 0);
        ctx.lineTo(80, 0);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Nucleus
        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fill();
        
        info.innerHTML = `
          <div class="info-item"><strong>p Orbital</strong></div>
          <div class="info-item">Shape: Dumbbell</div>
          <div class="info-item">Nodes: 1 nodal plane</div>
          <div class="info-item">Orbitals per subshell: 3 (px, py, pz)</div>
        `;
      } else if (currentOrbital === 'd') {
        // d orbital - cloverleaf
        const drawLobe = (angle, distance) => {
          ctx.save();
          ctx.rotate(angle);
          
          const gradient = ctx.createRadialGradient(0, -distance, 0, 0, -distance, 40);
          gradient.addColorStop(0, colors.orange);
          gradient.addColorStop(0.7, colors.orange + '4D');
          gradient.addColorStop(1, colors.orange + '00');
          ctx.fillStyle = gradient;
          
          ctx.beginPath();
          ctx.ellipse(0, -distance, 25, 40, 0, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        };
        
        for (let i = 0; i < 4; i++) {
          drawLobe(i * Math.PI / 2, 50);
        }
        
        // Nucleus
        ctx.fillStyle = colors.blue;
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fill();
        
        info.innerHTML = `
          <div class="info-item"><strong>d Orbital (dxy)</strong></div>
          <div class="info-item">Shape: Cloverleaf</div>
          <div class="info-item">Nodes: 2 nodal planes</div>
          <div class="info-item">Orbitals per subshell: 5</div>
        `;
      }
      
      ctx.restore();
      
      angle += 0.005;
      requestAnimationFrame(animate);
    };
    
    animate();
  },

  // Function Graph Plotter (Math)
  functionPlotter(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'animation-container';
    
    const { canvas, ctx, width, height } = this.createCanvas(container, 450, 350);
    
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);
    
    const self = this;
    const functions = {
      'sin(x)': x => Math.sin(x),
      'cos(x)': x => Math.cos(x),
      'x²': x => x * x,
      'x³': x => x * x * x,
      'eˣ': x => Math.exp(x),
      'ln(x)': x => x > 0 ? Math.log(x) : NaN
    };
    
    let currentFunc = 'sin(x)';
    
    Object.keys(functions).forEach(name => {
      this.createButton(controls, name, () => {
        currentFunc = name;
        render();
      });
    });
    
    const render = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;
      const scaleX = 40;
      const scaleY = 40;
      
      // Grid
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      for (let x = centerX % scaleX; x < width; x += scaleX) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = centerY % scaleY; y < height; y += scaleY) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // Axes
      ctx.strokeStyle = colors.axisLabel;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.stroke();
      
      // Axis labels
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '12px system-ui';
      ctx.fillText('x', width - 15, centerY - 10);
      ctx.fillText('y', centerX + 10, 15);
      
      // Number labels
      ctx.font = '10px system-ui';
      for (let i = -5; i <= 5; i++) {
        if (i !== 0) {
          ctx.fillText(i.toString(), centerX + i * scaleX - 4, centerY + 15);
          ctx.fillText((-i).toString(), centerX + 5, centerY + i * scaleY + 4);
        }
      }
      
      // Plot function
      const func = functions[currentFunc];
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      let started = false;
      
      for (let px = 0; px < width; px++) {
        const x = (px - centerX) / scaleX;
        const y = func(x);
        
        if (isNaN(y) || !isFinite(y) || Math.abs(y) > 10) {
          started = false;
          continue;
        }
        
        const py = centerY - y * scaleY;
        
        if (!started) {
          ctx.moveTo(px, py);
          started = true;
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
      
      // Function label
      ctx.fillStyle = colors.blue;
      ctx.font = '16px system-ui';
      ctx.fillText(`f(x) = ${currentFunc}`, 20, 30);
    };
    
    render();
  },

  // Circular Motion Animation
  circularMotion(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'animation-container';
    
    const { canvas, ctx, width, height } = this.createCanvas(container, 450, 350);
    
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);
    
    const radiusSlider = this.createSlider(controls, 'Radius', 40, 120, 80, 5, ' px');
    const speedSlider = this.createSlider(controls, 'Angular Speed', 0.5, 3, 1, 0.1, ' rad/s');
    
    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);
    
    let theta = 0;
    const centerX = width / 2;
    const centerY = height / 2;
    const self = this;
    
    const animate = () => {
      const colors = self.getColors();
      const r = parseFloat(radiusSlider.value);
      const omega = parseFloat(speedSlider.value);
      
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);
      
      // Draw circular path
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
      ctx.stroke();
      
      // Position of particle
      const x = centerX + r * Math.cos(theta);
      const y = centerY + r * Math.sin(theta);
      
      // Draw radius line
      ctx.strokeStyle = colors.axisLabel;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
      
      // Draw velocity vector (tangent)
      const v = r * omega;
      const vScale = 0.5;
      const vx = -v * Math.sin(theta) * vScale;
      const vy = v * Math.cos(theta) * vScale;
      
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + vx, y + vy);
      ctx.stroke();
      
      // Velocity arrow head
      const vAngle = Math.atan2(vy, vx);
      ctx.beginPath();
      ctx.moveTo(x + vx, y + vy);
      ctx.lineTo(x + vx - 10 * Math.cos(vAngle - 0.4), y + vy - 10 * Math.sin(vAngle - 0.4));
      ctx.moveTo(x + vx, y + vy);
      ctx.lineTo(x + vx - 10 * Math.cos(vAngle + 0.4), y + vy - 10 * Math.sin(vAngle + 0.4));
      ctx.stroke();
      
      // Draw centripetal acceleration (towards center)
      const ac = r * omega * omega;
      const aScale = 0.3;
      const ax = -ac * Math.cos(theta) * aScale;
      const ay = -ac * Math.sin(theta) * aScale;
      
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + ax, y + ay);
      ctx.stroke();
      
      // Acceleration arrow head
      const aAngle = Math.atan2(ay, ax);
      ctx.beginPath();
      ctx.moveTo(x + ax, y + ay);
      ctx.lineTo(x + ax - 10 * Math.cos(aAngle - 0.4), y + ay - 10 * Math.sin(aAngle - 0.4));
      ctx.moveTo(x + ax, y + ay);
      ctx.lineTo(x + ax - 10 * Math.cos(aAngle + 0.4), y + ay - 10 * Math.sin(aAngle + 0.4));
      ctx.stroke();
      
      // Draw particle
      ctx.fillStyle = colors.blue;
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw center
      ctx.fillStyle = colors.axisLabel;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Legend
      ctx.font = '12px system-ui';
      ctx.fillStyle = colors.green;
      ctx.fillText('→ Velocity (v)', 20, 25);
      ctx.fillStyle = colors.orange;
      ctx.fillText('→ Centripetal Acceleration (ac)', 20, 45);
      
      // Update info
      const T = (2 * Math.PI) / omega;
      info.innerHTML = `
        <div class="info-item">v = ωr = <strong>${(omega * r).toFixed(1)} px/s</strong></div>
        <div class="info-item">a꜀ = ω²r = <strong>${(omega * omega * r).toFixed(1)} px/s²</strong></div>
        <div class="info-item">T = 2π/ω = <strong>${T.toFixed(2)} s</strong></div>
      `;
      
      theta += omega * 0.016;
      requestAnimationFrame(animate);
    };
    
    animate();
  },

  // Lens Ray Diagram
  lensRayDiagram(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'animation-container';
    
    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);
    
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);
    
    const self = this;
    const objectSlider = this.createSlider(controls, 'Object Distance', -200, -50, -120, 5, ' px');
    const focalSlider = this.createSlider(controls, 'Focal Length', 30, 100, 60, 5, ' px');
    
    let lensType = 'convex';
    this.createButton(controls, 'Convex Lens', () => { lensType = 'convex'; render(); });
    this.createButton(controls, 'Concave Lens', () => { lensType = 'concave'; render(); });
    
    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);
    
    const lensX = width / 2;
    const axisY = height / 2;
    const objectHeight = 50;
    
    const render = () => {
      const colors = self.getColors();
      const u = parseFloat(objectSlider.value);
      const f = lensType === 'convex' ? parseFloat(focalSlider.value) : -parseFloat(focalSlider.value);
      
      // Lens formula: 1/v - 1/u = 1/f
      const v = (u * f) / (u + f);
      const m = v / u;
      const imageHeight = -m * objectHeight;
      
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);
      
      // Draw principal axis
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, axisY);
      ctx.lineTo(width, axisY);
      ctx.stroke();
      
      // Draw lens
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 3;
      ctx.beginPath();
      if (lensType === 'convex') {
        ctx.moveTo(lensX, axisY - 80);
        ctx.quadraticCurveTo(lensX + 15, axisY, lensX, axisY + 80);
        ctx.moveTo(lensX, axisY - 80);
        ctx.quadraticCurveTo(lensX - 15, axisY, lensX, axisY + 80);
      } else {
        ctx.moveTo(lensX - 10, axisY - 80);
        ctx.quadraticCurveTo(lensX + 5, axisY, lensX - 10, axisY + 80);
        ctx.moveTo(lensX + 10, axisY - 80);
        ctx.quadraticCurveTo(lensX - 5, axisY, lensX + 10, axisY + 80);
      }
      ctx.stroke();
      
      // Draw focal points
      ctx.fillStyle = colors.axisLabel;
      ctx.beginPath();
      ctx.arc(lensX + Math.abs(f), axisY, 5, 0, Math.PI * 2);
      ctx.arc(lensX - Math.abs(f), axisY, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = '12px system-ui';
      ctx.fillText('F', lensX + Math.abs(f) - 4, axisY + 20);
      ctx.fillText('F', lensX - Math.abs(f) - 4, axisY + 20);
      
      // Draw object
      const objX = lensX + u;
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(objX, axisY);
      ctx.lineTo(objX, axisY - objectHeight);
      ctx.stroke();
      // Arrow head
      ctx.beginPath();
      ctx.moveTo(objX, axisY - objectHeight);
      ctx.lineTo(objX - 5, axisY - objectHeight + 10);
      ctx.lineTo(objX + 5, axisY - objectHeight + 10);
      ctx.closePath();
      ctx.fillStyle = colors.green;
      ctx.fill();
      
      // Draw rays
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 1.5;
      
      // Ray 1: Parallel to axis, then through F
      ctx.beginPath();
      ctx.moveTo(objX, axisY - objectHeight);
      ctx.lineTo(lensX, axisY - objectHeight);
      if (lensType === 'convex') {
        ctx.lineTo(lensX + 300, axisY + (300 / Math.abs(f)) * objectHeight);
      } else {
        ctx.lineTo(lensX + 300, axisY - objectHeight - (300 / Math.abs(f)) * objectHeight);
        // Virtual ray (dashed)
        ctx.stroke();
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(lensX, axisY - objectHeight);
        ctx.lineTo(lensX - Math.abs(f), axisY);
      }
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Ray 2: Through center
      const slope = -objectHeight / (-u);
      ctx.beginPath();
      ctx.moveTo(objX, axisY - objectHeight);
      ctx.lineTo(lensX + 200, axisY - objectHeight - slope * (200 - (-u)));
      ctx.stroke();
      
      // Draw image if real
      if ((lensType === 'convex' && v > 0) || (lensType === 'concave')) {
        const imgX = lensX + v;
        const imgTop = axisY - imageHeight;
        
        if (lensType === 'concave' || v > 0) {
          ctx.strokeStyle = lensType === 'convex' ? colors.purple : colors.purple + '80';
          ctx.setLineDash(lensType === 'concave' ? [5, 5] : []);
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(imgX, axisY);
          ctx.lineTo(imgX, imgTop);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }
      
      // Update info
      const imageType = v > 0 ? 'Real' : 'Virtual';
      const imageOrientation = m > 0 ? 'Erect' : 'Inverted';
      const imageSize = Math.abs(m) > 1 ? 'Magnified' : Math.abs(m) < 1 ? 'Diminished' : 'Same size';
      
      info.innerHTML = `
        <div class="info-item">u = <strong>${u} px</strong></div>
        <div class="info-item">v = <strong>${v.toFixed(1)} px</strong></div>
        <div class="info-item">m = <strong>${m.toFixed(2)}</strong></div>
        <div class="info-item">Image: <strong>${imageType}, ${imageOrientation}, ${imageSize}</strong></div>
      `;
    };
    
    objectSlider.addEventListener('input', render);
    focalSlider.addEventListener('input', render);
    
    render();
  },

  // Collision Animation (Elastic vs Inelastic)
  collisionDemo(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'animation-container';
    
    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 250);
    
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);
    
    const self = this;
    let collisionType = 'elastic';
    let isPlaying = false;
    
    this.createButton(controls, 'Elastic', () => { collisionType = 'elastic'; reset(); });
    this.createButton(controls, 'Inelastic', () => { collisionType = 'inelastic'; reset(); });
    this.createButton(controls, 'Perfectly Inelastic', () => { collisionType = 'perfectly-inelastic'; reset(); });
    
    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);
    
    const groundY = height - 40;
    const m1 = 2, m2 = 1;
    let ball1, ball2;
    let animationId = null;
    
    const reset = () => {
      if (animationId) cancelAnimationFrame(animationId);
      ball1 = { x: 100, v: 80, m: m1, r: 25 };
      ball2 = { x: 300, v: -20, m: m2, r: 20 };
      isPlaying = false;
      render();
    };
    
    const render = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);
      
      // Ground
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.stroke();
      
      // Ball 1
      ctx.fillStyle = colors.blue;
      ctx.beginPath();
      ctx.arc(ball1.x, groundY - ball1.r, ball1.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 12px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(`${ball1.m}kg`, ball1.x, groundY - ball1.r + 4);
      
      // Ball 2
      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(ball2.x, groundY - ball2.r, ball2.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.text;
      ctx.fillText(`${ball2.m}kg`, ball2.x, groundY - ball2.r + 4);
      
      // Velocity vectors
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 2;
      if (Math.abs(ball1.v) > 5) {
        ctx.beginPath();
        ctx.moveTo(ball1.x, groundY - ball1.r * 2 - 10);
        ctx.lineTo(ball1.x + ball1.v * 0.5, groundY - ball1.r * 2 - 10);
        ctx.stroke();
      }
      if (Math.abs(ball2.v) > 5) {
        ctx.beginPath();
        ctx.moveTo(ball2.x, groundY - ball2.r * 2 - 10);
        ctx.lineTo(ball2.x + ball2.v * 0.5, groundY - ball2.r * 2 - 10);
        ctx.stroke();
      }
      
      ctx.textAlign = 'left';
      
      // Info
      const p_initial = ball1.m * ball1.v + ball2.m * ball2.v;
      const ke_initial = 0.5 * ball1.m * ball1.v * ball1.v + 0.5 * ball2.m * ball2.v * ball2.v;
      
      info.innerHTML = `
        <div class="info-item">Type: <strong>${collisionType}</strong></div>
        <div class="info-item">Momentum: <strong>${p_initial.toFixed(0)} kg·m/s</strong></div>
        <div class="info-item">KE: <strong>${ke_initial.toFixed(0)} J</strong></div>
      `;
    };
    
    const startBtn = this.createButton(controls, 'Start Collision', () => {
      if (isPlaying) {
        reset();
        return;
      }
      isPlaying = true;
      startBtn.textContent = 'Reset';
      
      const animate = () => {
        const colors = self.getColors();
        
        // Move balls
        ball1.x += ball1.v * 0.016;
        ball2.x += ball2.v * 0.016;
        
        // Check collision
        const dist = Math.abs(ball1.x - ball2.x);
        if (dist < ball1.r + ball2.r) {
          // Collision happened
          const u1 = ball1.v, u2 = ball2.v;
          
          if (collisionType === 'elastic') {
            ball1.v = ((m1 - m2) * u1 + 2 * m2 * u2) / (m1 + m2);
            ball2.v = ((m2 - m1) * u2 + 2 * m1 * u1) / (m1 + m2);
          } else if (collisionType === 'inelastic') {
            const e = 0.5; // coefficient of restitution
            ball1.v = ((m1 - e * m2) * u1 + (1 + e) * m2 * u2) / (m1 + m2);
            ball2.v = ((m2 - e * m1) * u2 + (1 + e) * m1 * u1) / (m1 + m2);
          } else { // perfectly inelastic
            const v_common = (m1 * u1 + m2 * u2) / (m1 + m2);
            ball1.v = v_common;
            ball2.v = v_common;
          }
          
          // Separate balls
          ball1.x = ball2.x - (ball1.r + ball2.r + 2);
        }
        
        render();
        
        if (ball1.x > 0 && ball1.x < width && ball2.x > 0 && ball2.x < width) {
          animationId = requestAnimationFrame(animate);
        } else {
          isPlaying = false;
          startBtn.textContent = 'Start Collision';
        }
      };
      
      animate();
    });
    
    reset();
  },

  // Work-Energy Visualization
  workEnergyDemo(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'animation-container';
    
    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);
    
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);
    
    const forceSlider = this.createSlider(controls, 'Applied Force', 0, 50, 20, 5, ' N');
    const frictionSlider = this.createSlider(controls, 'Friction (μ)', 0, 0.5, 0.1, 0.05, '');
    
    const self = this;
    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);
    
    let isPlaying = false;
    let block = { x: 50, v: 0, m: 5 };
    const groundY = height - 80;
    const g = 10;
    
    const startBtn = this.createButton(controls, 'Apply Force', () => {
      if (isPlaying) {
        block = { x: 50, v: 0, m: 5 };
        isPlaying = false;
        startBtn.textContent = 'Apply Force';
        render();
        return;
      }
      
      isPlaying = true;
      startBtn.textContent = 'Reset';
      const F = parseFloat(forceSlider.value);
      const mu = parseFloat(frictionSlider.value);
      
      let totalWork = 0;
      let prevX = block.x;
      
      const animate = () => {
        const colors = self.getColors();
        const friction = mu * block.m * g;
        const netForce = F - friction;
        const a = netForce / block.m;
        
        block.v += a * 0.016;
        if (block.v < 0) block.v = 0;
        block.x += block.v * 0.016;
        
        const dx = block.x - prevX;
        totalWork += F * dx - friction * dx;
        prevX = block.x;
        
        ctx.fillStyle = colors.bg;
        ctx.fillRect(0, 0, width, height);
        
        // Ground
        ctx.strokeStyle = colors.axis;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, groundY);
        ctx.lineTo(width, groundY);
        ctx.stroke();
        
        // Block
        const blockW = 50, blockH = 40;
        ctx.fillStyle = colors.blue;
        ctx.fillRect(block.x, groundY - blockH, blockW, blockH);
        
        // Force arrow
        if (F > 0) {
          ctx.strokeStyle = colors.green;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(block.x + blockW, groundY - blockH / 2);
          ctx.lineTo(block.x + blockW + F * 2, groundY - blockH / 2);
          ctx.stroke();
          ctx.fillStyle = colors.green;
          ctx.beginPath();
          ctx.moveTo(block.x + blockW + F * 2, groundY - blockH / 2);
          ctx.lineTo(block.x + blockW + F * 2 - 10, groundY - blockH / 2 - 5);
          ctx.lineTo(block.x + blockW + F * 2 - 10, groundY - blockH / 2 + 5);
          ctx.fill();
        }
        
        // Friction arrow
        if (mu > 0 && block.v > 0) {
          ctx.strokeStyle = colors.orange;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(block.x, groundY - blockH / 2);
          ctx.lineTo(block.x - friction * 2, groundY - blockH / 2);
          ctx.stroke();
        }
        
        // Energy bar chart
        const barX = 350;
        const barMaxH = 100;
        const ke = 0.5 * block.m * block.v * block.v;
        const keH = Math.min((ke / 500) * barMaxH, barMaxH);
        
        ctx.fillStyle = colors.blue + '80';
        ctx.fillRect(barX, groundY - keH, 40, keH);
        ctx.fillStyle = colors.axisLabel;
        ctx.font = '10px system-ui';
        ctx.fillText('KE', barX + 12, groundY + 15);
        
        ctx.fillStyle = colors.orange + '80';
        const workH = Math.min((Math.max(totalWork, 0) / 500) * barMaxH, barMaxH);
        ctx.fillRect(barX + 60, groundY - workH, 40, workH);
        ctx.fillText('Work', barX + 67, groundY + 15);
        
        info.innerHTML = `
          <div class="info-item">Velocity: <strong>${block.v.toFixed(1)} m/s</strong></div>
          <div class="info-item">KE: <strong>${ke.toFixed(1)} J</strong></div>
          <div class="info-item">Net Work: <strong>${totalWork.toFixed(1)} J</strong></div>
          <div class="info-item">Net Force: <strong>${netForce.toFixed(1)} N</strong></div>
        `;
        
        if (block.x < width - 100 && (block.v > 0 || a > 0)) {
          requestAnimationFrame(animate);
        } else {
          isPlaying = false;
          startBtn.textContent = 'Apply Force';
        }
      };
      
      animate();
    });
    
    const render = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);
      
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.stroke();
      
      const blockW = 50, blockH = 40;
      ctx.fillStyle = colors.blue;
      ctx.fillRect(block.x, groundY - blockH, blockW, blockH);
      
      info.innerHTML = `
        <div class="info-item">Velocity: <strong>0 m/s</strong></div>
        <div class="info-item">KE: <strong>0 J</strong></div>
        <div class="info-item">Net Work: <strong>0 J</strong></div>
      `;
    };
    
    render();
  },

  // Kinematic Motion Grapher
  kinematicGraph(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'animation-container';
    
    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);
    
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);
    
    const self = this;
    const u0Slider = this.createSlider(controls, 'Initial Velocity (u)', -20, 40, 20, 5, ' m/s');
    const aSlider = this.createSlider(controls, 'Acceleration (a)', -10, 10, -5, 1, ' m/s²');
    
    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);
    
    const render = () => {
      const colors = self.getColors();
      const u = parseFloat(u0Slider.value);
      const a = parseFloat(aSlider.value);
      
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);
      
      const graphW = 140, graphH = 100;
      const graphs = [
        { title: 's-t', x: 30, y: 30, func: t => u * t + 0.5 * a * t * t, yScale: 5 },
        { title: 'v-t', x: 190, y: 30, func: t => u + a * t, yScale: 20 },
        { title: 'a-t', x: 350, y: 30, func: t => a, yScale: 10 }
      ];
      
      graphs.forEach(g => {
        const centerY = g.y + graphH / 2;
        
        // Axes
        ctx.strokeStyle = colors.axis;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(g.x, g.y);
        ctx.lineTo(g.x, g.y + graphH);
        ctx.lineTo(g.x + graphW, g.y + graphH);
        ctx.stroke();
        
        // Zero line
        ctx.strokeStyle = colors.grid;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(g.x, centerY);
        ctx.lineTo(g.x + graphW, centerY);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Labels
        ctx.fillStyle = colors.axisLabel;
        ctx.font = '12px system-ui';
        ctx.fillText(g.title, g.x + graphW / 2 - 10, g.y - 5);
        ctx.fillText('t', g.x + graphW + 5, g.y + graphH + 5);
        
        // Plot
        ctx.strokeStyle = colors.blue;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        const tMax = 5;
        for (let px = 0; px <= graphW; px++) {
          const t = (px / graphW) * tMax;
          const y = g.func(t);
          const py = centerY - (y / g.yScale) * (graphH / 2);
          
          if (py >= g.y && py <= g.y + graphH) {
            if (px === 0) ctx.moveTo(g.x + px, py);
            else ctx.lineTo(g.x + px, py);
          }
        }
        ctx.stroke();
      });
      
      // Motion visualization at bottom
      const vizY = 220;
      const vizH = 100;
      
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(30, vizY + vizH);
      ctx.lineTo(width - 30, vizY + vizH);
      ctx.stroke();
      
      // Draw positions at different times
      const tMax = 5;
      const sMax = Math.max(Math.abs(u * tMax + 0.5 * a * tMax * tMax), 50);
      const vizScale = (width - 100) / (sMax * 2);
      const originX = 50;
      
      for (let t = 0; t <= tMax; t += 0.5) {
        const s = u * t + 0.5 * a * t * t;
        const x = originX + s * vizScale;
        
        if (x > 30 && x < width - 30) {
          const alpha = 0.3 + (t / tMax) * 0.7;
          ctx.fillStyle = colors.blue + Math.round(alpha * 255).toString(16).padStart(2, '0');
          ctx.beginPath();
          ctx.arc(x, vizY + vizH - 15, 10, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Current position marker
      const finalS = u * tMax + 0.5 * a * tMax * tMax;
      const finalV = u + a * tMax;
      
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '11px system-ui';
      ctx.fillText('Position over time (t=0 to t=5s)', 30, vizY - 5);
      
      info.innerHTML = `
        <div class="info-item">At t=5s: s = <strong>${finalS.toFixed(1)} m</strong></div>
        <div class="info-item">At t=5s: v = <strong>${finalV.toFixed(1)} m/s</strong></div>
        <div class="info-item">Equation: s = ${u}t + ½(${a})t²</div>
      `;
    };
    
    u0Slider.addEventListener('input', render);
    aSlider.addEventListener('input', render);
    render();
  },

  // Set Operations Visualization
  setOperations(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'animation-container';
    
    const { canvas, ctx, width, height } = this.createCanvas(container, 450, 300);
    
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);
    
    const self = this;
    let operation = 'union';
    
    this.createButton(controls, 'A ∪ B', () => { operation = 'union'; render(); });
    this.createButton(controls, 'A ∩ B', () => { operation = 'intersection'; render(); });
    this.createButton(controls, 'A - B', () => { operation = 'difference'; render(); });
    this.createButton(controls, 'A\' (complement)', () => { operation = 'complement'; render(); });
    
    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);
    
    const render = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);
      
      const centerY = height / 2;
      const r = 80;
      const ax = 160, bx = 260;
      
      // Draw universal set rectangle
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.strokeRect(40, 40, width - 80, height - 80);
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '14px system-ui';
      ctx.fillText('U (Universal Set)', 50, 60);
      
      // Highlight based on operation
      ctx.globalAlpha = 0.4;
      
      if (operation === 'union') {
        ctx.fillStyle = colors.green;
        ctx.beginPath();
        ctx.arc(ax, centerY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(bx, centerY, r, 0, Math.PI * 2);
        ctx.fill();
      } else if (operation === 'intersection') {
        ctx.fillStyle = colors.green;
        ctx.save();
        ctx.beginPath();
        ctx.arc(ax, centerY, r, 0, Math.PI * 2);
        ctx.clip();
        ctx.beginPath();
        ctx.arc(bx, centerY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      } else if (operation === 'difference') {
        ctx.fillStyle = colors.green;
        ctx.beginPath();
        ctx.arc(ax, centerY, r, 0, Math.PI * 2);
        ctx.fill();
        // Cut out B
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(bx, centerY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
      } else if (operation === 'complement') {
        ctx.fillStyle = colors.green;
        ctx.fillRect(40, 40, width - 80, height - 80);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(ax, centerY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
      }
      
      ctx.globalAlpha = 1;
      
      // Draw set outlines
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(ax, centerY, r, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.strokeStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(bx, centerY, r, 0, Math.PI * 2);
      ctx.stroke();
      
      // Labels
      ctx.fillStyle = colors.blue;
      ctx.font = 'bold 20px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('A', ax - 40, centerY);
      ctx.fillStyle = colors.orange;
      ctx.fillText('B', bx + 40, centerY);
      ctx.textAlign = 'left';
      
      // Operation info
      const opSymbols = {
        'union': 'A ∪ B = {x : x ∈ A or x ∈ B}',
        'intersection': 'A ∩ B = {x : x ∈ A and x ∈ B}',
        'difference': 'A - B = {x : x ∈ A and x ∉ B}',
        'complement': 'A\' = {x : x ∈ U and x ∉ A}'
      };
      
      info.innerHTML = `<div class="info-item"><strong>${opSymbols[operation]}</strong></div>`;
    };
    
    render();
  },

  // Bohr Model Animation
  bohrModel(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'animation-container';
    
    const { canvas, ctx, width, height } = this.createCanvas(container, 400, 350);
    
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);
    
    let currentShell = 2;
    let transitioning = false;
    let transitionProgress = 0;
    let fromShell = 2;
    let toShell = 2;
    const self = this;
    
    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);
    
    const jumpUp = this.createButton(controls, '⬆ Absorb Energy', () => {
      if (!transitioning && currentShell < 4) {
        fromShell = currentShell;
        toShell = currentShell + 1;
        transitioning = true;
        transitionProgress = 0;
      }
    });
    
    const jumpDown = this.createButton(controls, '⬇ Emit Photon', () => {
      if (!transitioning && currentShell > 1) {
        fromShell = currentShell;
        toShell = currentShell - 1;
        transitioning = true;
        transitionProgress = 0;
      }
    });
    
    const centerX = width / 2 - 50;
    const centerY = height / 2;
    const orbits = [0, 40, 70, 100, 130];
    const energies = [-13.6, -3.4, -1.51, -0.85]; // eV for hydrogen
    
    let electronAngle = 0;
    let photonParticles = [];
    
    const animate = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);
      
      // Draw nucleus
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 20);
      gradient.addColorStop(0, colors.orange);
      gradient.addColorStop(1, colors.orangeGlow);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('+', centerX, centerY);
      
      // Draw orbits
      for (let n = 1; n <= 4; n++) {
        ctx.strokeStyle = n === currentShell ? colors.blue : colors.axis;
        ctx.lineWidth = n === currentShell ? 2 : 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, orbits[n], 0, Math.PI * 2);
        ctx.stroke();
        
        // Shell labels
        ctx.fillStyle = colors.axisLabel;
        ctx.font = '11px system-ui';
        ctx.fillText(`n=${n}`, centerX + orbits[n] + 15, centerY);
      }
      
      // Calculate electron position
      let electronRadius;
      if (transitioning) {
        transitionProgress += 0.03;
        const fromR = orbits[fromShell];
        const toR = orbits[toShell];
        electronRadius = fromR + (toR - fromR) * Math.min(transitionProgress, 1);
        
        // Emit photon when jumping down
        if (toShell < fromShell && transitionProgress < 0.1) {
          const wavelength = 1240 / (energies[fromShell - 1] - energies[toShell - 1]); // nm approx
          photonParticles.push({
            x: centerX + electronRadius * Math.cos(electronAngle),
            y: centerY + electronRadius * Math.sin(electronAngle),
            vx: 3,
            vy: -1,
            life: 1,
            wavelength
          });
        }
        
        if (transitionProgress >= 1) {
          transitioning = false;
          currentShell = toShell;
        }
      } else {
        electronRadius = orbits[currentShell];
      }
      
      // Draw electron
      const ex = centerX + electronRadius * Math.cos(electronAngle);
      const ey = centerY + electronRadius * Math.sin(electronAngle);
      
      const electronGlow = ctx.createRadialGradient(ex, ey, 0, ex, ey, 15);
      electronGlow.addColorStop(0, colors.blue);
      electronGlow.addColorStop(1, colors.blue + '00');
      ctx.fillStyle = electronGlow;
      ctx.beginPath();
      ctx.arc(ex, ey, 15, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = colors.blue;
      ctx.beginPath();
      ctx.arc(ex, ey, 8, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 10px system-ui';
      ctx.fillText('−', ex, ey);
      
      // Draw photons
      photonParticles = photonParticles.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.01;
        
        if (p.life > 0 && p.x < width) {
          // Wavy photon
          const waveY = p.y + Math.sin(p.x * 0.1) * 5;
          // Convert hex to rgba for opacity
          const greenHex = colors.green;
          ctx.fillStyle = greenHex + Math.round(p.life * 255).toString(16).padStart(2, '0');
          ctx.beginPath();
          ctx.arc(p.x, waveY, 4, 0, Math.PI * 2);
          ctx.fill();
          return true;
        }
        return false;
      });
      
      // Energy level diagram on the right
      const diagramX = width - 80;
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(diagramX - 30, 40);
      ctx.lineTo(diagramX - 30, height - 40);
      ctx.stroke();
      
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '10px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('E (eV)', diagramX - 25, 30);
      
      for (let n = 1; n <= 4; n++) {
        const levelY = 50 + (4 - n) * 60;
        ctx.strokeStyle = n === currentShell ? colors.blue : colors.axis;
        ctx.lineWidth = n === currentShell ? 2 : 1;
        ctx.beginPath();
        ctx.moveTo(diagramX - 20, levelY);
        ctx.lineTo(diagramX + 40, levelY);
        ctx.stroke();
        
        ctx.fillStyle = colors.axisLabel;
        ctx.fillText(`n=${n}`, diagramX + 45, levelY + 4);
        ctx.fillText(`${energies[n-1]} eV`, diagramX - 20, levelY - 8);
      }
      
      // Current state info
      const E = energies[currentShell - 1];
      const r = 0.529 * currentShell * currentShell; // Bohr radius in Å
      
      info.innerHTML = `
        <div class="info-item">Shell: <strong>n = ${currentShell}</strong></div>
        <div class="info-item">Energy: <strong>${E} eV</strong></div>
        <div class="info-item">Radius: <strong>${r.toFixed(2)} Å</strong></div>
      `;
      
      electronAngle += 0.03 / currentShell;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      
      requestAnimationFrame(animate);
    };
    
    animate();
  },

  // Vector Addition Animation
  vectorAddition(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 450, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const self = this;
    const v1MagSlider = this.createSlider(controls, 'Vector A magnitude', 20, 100, 60, 5, ' units');
    const v1AngleSlider = this.createSlider(controls, 'Vector A angle', 0, 90, 30, 5, '°');
    const v2MagSlider = this.createSlider(controls, 'Vector B magnitude', 20, 100, 80, 5, ' units');
    const v2AngleSlider = this.createSlider(controls, 'Vector B angle', 0, 90, 60, 5, '°');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const originX = 80;
    const originY = height - 60;

    const drawArrow = (x1, y1, x2, y2, color, label) => {
      const angle = Math.atan2(y2 - y1, x2 - x1);
      const headLen = 12;

      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - headLen * Math.cos(angle - 0.4), y2 - headLen * Math.sin(angle - 0.4));
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - headLen * Math.cos(angle + 0.4), y2 - headLen * Math.sin(angle + 0.4));
      ctx.stroke();

      if (label) {
        ctx.fillStyle = color;
        ctx.font = 'bold 14px system-ui';
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        ctx.fillText(label, midX + 10, midY - 10);
      }
    };

    const render = () => {
      const colors = self.getColors();
      const v1Mag = parseFloat(v1MagSlider.value);
      const v1Angle = parseFloat(v1AngleSlider.value) * Math.PI / 180;
      const v2Mag = parseFloat(v2MagSlider.value);
      const v2Angle = parseFloat(v2AngleSlider.value) * Math.PI / 180;

      const v1x = v1Mag * Math.cos(v1Angle);
      const v1y = v1Mag * Math.sin(v1Angle);
      const v2x = v2Mag * Math.cos(v2Angle);
      const v2y = v2Mag * Math.sin(v2Angle);

      const resultMag = Math.sqrt((v1x + v2x) ** 2 + (v1y + v2y) ** 2);
      const resultAngle = Math.atan2(v1y + v2y, v1x + v2x) * 180 / Math.PI;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw grid
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      for (let i = originX; i < width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let i = originY; i > 0; i -= 40) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }

      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(width - 20, originY);
      ctx.moveTo(originX, originY);
      ctx.lineTo(originX, 20);
      ctx.stroke();

      // Vector A (from origin)
      drawArrow(originX, originY, originX + v1x * 2, originY - v1y * 2, colors.blue, 'A');

      // Vector B (from tip of A - parallelogram method)
      const tipAx = originX + v1x * 2;
      const tipAy = originY - v1y * 2;
      drawArrow(tipAx, tipAy, tipAx + v2x * 2, tipAy - v2y * 2, colors.orange, 'B');

      // Vector B from origin (dashed)
      ctx.setLineDash([5, 5]);
      drawArrow(originX, originY, originX + v2x * 2, originY - v2y * 2, colors.orange + '80', '');
      ctx.setLineDash([]);

      // Resultant
      drawArrow(originX, originY, originX + (v1x + v2x) * 2, originY - (v1y + v2y) * 2, colors.green, 'A+B');

      // Parallelogram completion
      ctx.strokeStyle = colors.axisLabel;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(originX + v2x * 2, originY - v2y * 2);
      ctx.lineTo(originX + (v1x + v2x) * 2, originY - (v1y + v2y) * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      info.innerHTML = `
        <div class="info-item">|A| = <strong>${v1Mag.toFixed(0)}</strong> at ${(v1Angle * 180 / Math.PI).toFixed(0)}°</div>
        <div class="info-item">|B| = <strong>${v2Mag.toFixed(0)}</strong> at ${(v2Angle * 180 / Math.PI).toFixed(0)}°</div>
        <div class="info-item">|A+B| = <strong>${resultMag.toFixed(1)}</strong> at ${resultAngle.toFixed(1)}°</div>
      `;
    };

    v1MagSlider.addEventListener('input', render);
    v1AngleSlider.addEventListener('input', render);
    v2MagSlider.addEventListener('input', render);
    v2AngleSlider.addEventListener('input', render);
    render();
  },

  // Trigonometric Circle (Unit Circle) Animation
  trigCircle(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 450, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const self = this;
    const angleSlider = this.createSlider(controls, 'Angle θ', 0, 360, 45, 5, '°');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const centerX = 180;
    const centerY = height / 2;
    const radius = 120;

    const render = () => {
      const colors = self.getColors();
      const angleDeg = parseFloat(angleSlider.value);
      const angle = angleDeg * Math.PI / 180;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX - radius - 30, centerY);
      ctx.lineTo(centerX + radius + 30, centerY);
      ctx.moveTo(centerX, centerY - radius - 30);
      ctx.lineTo(centerX, centerY + radius + 30);
      ctx.stroke();

      // Labels
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '12px system-ui';
      ctx.fillText('x', centerX + radius + 35, centerY + 4);
      ctx.fillText('y', centerX + 4, centerY - radius - 35);
      ctx.fillText('1', centerX + radius + 5, centerY + 15);
      ctx.fillText('-1', centerX - radius - 15, centerY + 15);

      // Unit circle
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Point on circle
      const px = centerX + radius * Math.cos(angle);
      const py = centerY - radius * Math.sin(angle);

      // Radius line
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(px, py);
      ctx.stroke();

      // cos(θ) projection (x-component)
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(px, centerY);
      ctx.stroke();
      ctx.fillStyle = colors.orange;
      ctx.fillText('cos θ', (centerX + px) / 2 - 15, centerY + 20);

      // sin(θ) projection (y-component)
      ctx.strokeStyle = colors.purple;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(px, centerY);
      ctx.lineTo(px, py);
      ctx.stroke();
      ctx.fillStyle = colors.purple;
      ctx.fillText('sin θ', px + 10, (centerY + py) / 2);

      // Point
      ctx.fillStyle = colors.green;
      ctx.beginPath();
      ctx.arc(px, py, 8, 0, Math.PI * 2);
      ctx.fill();

      // Angle arc
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 30, 0, -angle, true);
      ctx.stroke();
      ctx.fillStyle = colors.cyan;
      ctx.fillText('θ', centerX + 35, centerY - 10);

      // Right side: Graph representation
      const graphX = 330;
      const graphY = 50;
      const graphH = 100;
      const graphW = 100;

      // Sin graph
      ctx.strokeStyle = colors.purple;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= graphW; x++) {
        const a = (x / graphW) * 2 * Math.PI;
        const y = graphY + graphH/2 - Math.sin(a) * (graphH/2 - 10);
        if (x === 0) ctx.moveTo(graphX + x, y);
        else ctx.lineTo(graphX + x, y);
      }
      ctx.stroke();

      // Current point marker
      const markerX = graphX + (angleDeg / 360) * graphW;
      const markerY = graphY + graphH/2 - Math.sin(angle) * (graphH/2 - 10);
      ctx.fillStyle = colors.purple;
      ctx.beginPath();
      ctx.arc(markerX, markerY, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = colors.axisLabel;
      ctx.fillText('sin θ graph', graphX, graphY - 10);

      // Cos graph below
      const graphY2 = 200;
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= graphW; x++) {
        const a = (x / graphW) * 2 * Math.PI;
        const y = graphY2 + graphH/2 - Math.cos(a) * (graphH/2 - 10);
        if (x === 0) ctx.moveTo(graphX + x, y);
        else ctx.lineTo(graphX + x, y);
      }
      ctx.stroke();

      const markerX2 = graphX + (angleDeg / 360) * graphW;
      const markerY2 = graphY2 + graphH/2 - Math.cos(angle) * (graphH/2 - 10);
      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(markerX2, markerY2, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = colors.axisLabel;
      ctx.fillText('cos θ graph', graphX, graphY2 - 10);

      info.innerHTML = `
        <div class="info-item">θ = <strong>${angleDeg}° = ${(angle).toFixed(3)} rad</strong></div>
        <div class="info-item">sin θ = <strong>${Math.sin(angle).toFixed(4)}</strong></div>
        <div class="info-item">cos θ = <strong>${Math.cos(angle).toFixed(4)}</strong></div>
        <div class="info-item">tan θ = <strong>${Math.abs(Math.cos(angle)) > 0.01 ? Math.tan(angle).toFixed(4) : '∞'}</strong></div>
      `;
    };

    angleSlider.addEventListener('input', render);
    render();
  },

  // Complex Plane (Argand Diagram) Animation
  complexPlane(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 450, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const self = this;
    const realSlider = this.createSlider(controls, 'Real part (a)', -5, 5, 3, 0.5, '');
    const imagSlider = this.createSlider(controls, 'Imaginary part (b)', -5, 5, 4, 0.5, '');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 35;

    const render = () => {
      const colors = self.getColors();
      const a = parseFloat(realSlider.value);
      const b = parseFloat(imagSlider.value);

      const modulus = Math.sqrt(a * a + b * b);
      const argument = Math.atan2(b, a);
      const argDeg = argument * 180 / Math.PI;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      for (let x = centerX % scale; x < width; x += scale) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = centerY % scale; y < height; y += scale) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.stroke();

      // Labels
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '12px system-ui';
      ctx.fillText('Re', width - 25, centerY - 10);
      ctx.fillText('Im', centerX + 10, 20);

      // Number labels
      for (let i = -5; i <= 5; i++) {
        if (i !== 0) {
          ctx.fillText(i.toString(), centerX + i * scale - 4, centerY + 15);
          ctx.fillText(i + 'i', centerX + 5, centerY - i * scale + 4);
        }
      }

      // Point z = a + bi
      const px = centerX + a * scale;
      const py = centerY - b * scale;

      // Modulus line (from origin to z)
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(px, py);
      ctx.stroke();

      // Real component
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 3]);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(px, centerY);
      ctx.stroke();

      // Imaginary component
      ctx.strokeStyle = colors.purple;
      ctx.beginPath();
      ctx.moveTo(px, centerY);
      ctx.lineTo(px, py);
      ctx.stroke();
      ctx.setLineDash([]);

      // Argument arc
      if (modulus > 0.1) {
        ctx.strokeStyle = colors.cyan;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 25, 0, -argument, b >= 0);
        ctx.stroke();
        ctx.fillStyle = colors.cyan;
        ctx.fillText('θ', centerX + 30, centerY - (b >= 0 ? 5 : -15));
      }

      // Point z
      ctx.fillStyle = colors.blue;
      ctx.beginPath();
      ctx.arc(px, py, 8, 0, Math.PI * 2);
      ctx.fill();

      // Label
      ctx.fillStyle = colors.blue;
      ctx.font = 'bold 14px system-ui';
      ctx.fillText(`z = ${a} + ${b}i`, px + 15, py - 10);

      info.innerHTML = `
        <div class="info-item">z = <strong>${a} + ${b}i</strong></div>
        <div class="info-item">|z| = <strong>${modulus.toFixed(3)}</strong></div>
        <div class="info-item">arg(z) = <strong>${argDeg.toFixed(1)}° = ${argument.toFixed(3)} rad</strong></div>
        <div class="info-item">Polar: <strong>${modulus.toFixed(2)}(cos${argDeg.toFixed(0)}° + i sin${argDeg.toFixed(0)}°)</strong></div>
      `;
    };

    realSlider.addEventListener('input', render);
    imagSlider.addEventListener('input', render);
    render();
  },

  // Pendulum/SHM Animation
  pendulumMotion(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 450, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const self = this;
    const lengthSlider = this.createSlider(controls, 'Length', 80, 180, 120, 10, ' px');
    const ampSlider = this.createSlider(controls, 'Amplitude', 10, 45, 30, 5, '°');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const pivotX = width / 2;
    const pivotY = 50;
    let t = 0;
    const g = 9.8;

    const animate = () => {
      const colors = self.getColors();
      const L = parseFloat(lengthSlider.value);
      const ampDeg = parseFloat(ampSlider.value);
      const amp = ampDeg * Math.PI / 180;

      // Time period T = 2π√(L/g), using scaled values
      const omega = Math.sqrt(g / (L / 50)); // scaled
      const theta = amp * Math.cos(omega * t);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Pivot
      ctx.fillStyle = colors.axis;
      ctx.fillRect(pivotX - 30, pivotY - 10, 60, 10);

      // String
      const bobX = pivotX + L * Math.sin(theta);
      const bobY = pivotY + L * Math.cos(theta);

      ctx.strokeStyle = colors.axisLabel;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pivotX, pivotY);
      ctx.lineTo(bobX, bobY);
      ctx.stroke();

      // Equilibrium line
      ctx.strokeStyle = colors.grid;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(pivotX, pivotY);
      ctx.lineTo(pivotX, pivotY + L + 30);
      ctx.stroke();
      ctx.setLineDash([]);

      // Angle arc
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(pivotX, pivotY, 40, Math.PI / 2, Math.PI / 2 - theta, theta > 0);
      ctx.stroke();

      // Bob
      ctx.fillStyle = colors.blue;
      ctx.beginPath();
      ctx.arc(bobX, bobY, 20, 0, Math.PI * 2);
      ctx.fill();

      // Velocity vector (tangent to arc)
      const v = -amp * omega * L * Math.sin(omega * t);
      const vScale = 0.3;
      const vx = v * Math.cos(theta) * vScale;
      const vy = -v * Math.sin(theta) * vScale;

      if (Math.abs(v) > 5) {
        ctx.strokeStyle = colors.green;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(bobX, bobY);
        ctx.lineTo(bobX + vx, bobY + vy);
        ctx.stroke();
      }

      // Energy bar
      const barX = width - 80;
      const barH = 150;
      const PE = (1 - Math.cos(theta)) * 100;
      const KE = 100 - PE;

      ctx.fillStyle = colors.orange + '80';
      ctx.fillRect(barX, 200 - PE * barH / 100, 25, PE * barH / 100);
      ctx.fillStyle = colors.blue + '80';
      ctx.fillRect(barX + 35, 200 - KE * barH / 100, 25, KE * barH / 100);

      ctx.fillStyle = colors.axisLabel;
      ctx.font = '10px system-ui';
      ctx.fillText('PE', barX + 5, 215);
      ctx.fillText('KE', barX + 40, 215);

      const T = 2 * Math.PI * Math.sqrt(L / 50 / g);

      info.innerHTML = `
        <div class="info-item">θ = <strong>${(theta * 180 / Math.PI).toFixed(1)}°</strong></div>
        <div class="info-item">T = 2π√(L/g) = <strong>${T.toFixed(2)} s</strong></div>
        <div class="info-item">ω = <strong>${omega.toFixed(2)} rad/s</strong></div>
      `;

      t += 0.02;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // ============================================
  // NEW CHEMISTRY ANIMATIONS
  // ============================================

  // Electrochemical Cell Animation
  electrochemicalCell(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const cellTypeBtn = this.createButton(controls, 'Galvanic Cell', () => {
      cellType = 'galvanic';
      cellTypeBtn.textContent = 'Galvanic Cell';
    });
    this.createButton(controls, 'Switch to Electrolytic', () => {
      cellType = cellType === 'galvanic' ? 'electrolytic' : 'galvanic';
      cellTypeBtn.textContent = cellType === 'galvanic' ? 'Galvanic Cell' : 'Electrolytic Cell';
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    let cellType = 'galvanic';
    let t = 0;
    const self = this;

    const animate = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw beakers
      const beakerWidth = 120;
      const beakerHeight = 150;
      const beaker1X = 80;
      const beaker2X = 350;
      const beakerY = 120;

      // Left beaker (Anode)
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(beaker1X, beakerY);
      ctx.lineTo(beaker1X, beakerY + beakerHeight);
      ctx.lineTo(beaker1X + beakerWidth, beakerY + beakerHeight);
      ctx.lineTo(beaker1X + beakerWidth, beakerY);
      ctx.stroke();

      // Solution in left beaker
      ctx.fillStyle = cellType === 'galvanic' ? colors.blue + '40' : colors.orange + '40';
      ctx.fillRect(beaker1X + 3, beakerY + 30, beakerWidth - 6, beakerHeight - 33);

      // Right beaker (Cathode)
      ctx.strokeStyle = colors.axis;
      ctx.beginPath();
      ctx.moveTo(beaker2X, beakerY);
      ctx.lineTo(beaker2X, beakerY + beakerHeight);
      ctx.lineTo(beaker2X + beakerWidth, beakerY + beakerHeight);
      ctx.lineTo(beaker2X + beakerWidth, beakerY);
      ctx.stroke();

      // Solution in right beaker
      ctx.fillStyle = cellType === 'galvanic' ? colors.orange + '40' : colors.blue + '40';
      ctx.fillRect(beaker2X + 3, beakerY + 30, beakerWidth - 6, beakerHeight - 33);

      // Electrodes
      const electrodeWidth = 20;
      const electrodeHeight = 100;

      // Anode (left)
      ctx.fillStyle = colors.purple;
      ctx.fillRect(beaker1X + 50, beakerY + 20, electrodeWidth, electrodeHeight);

      // Cathode (right)
      ctx.fillStyle = colors.cyan;
      ctx.fillRect(beaker2X + 50, beakerY + 20, electrodeWidth, electrodeHeight);

      // Salt bridge
      ctx.strokeStyle = colors.yellow;
      ctx.lineWidth = 15;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(beaker1X + beakerWidth - 10, beakerY + 50);
      ctx.quadraticCurveTo(width / 2, beakerY - 30, beaker2X + 10, beakerY + 50);
      ctx.stroke();

      // Wire connection
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(beaker1X + 60, beakerY + 20);
      ctx.lineTo(beaker1X + 60, beakerY - 40);
      ctx.lineTo(beaker2X + 60, beakerY - 40);
      ctx.lineTo(beaker2X + 60, beakerY + 20);
      ctx.stroke();

      // Electron flow animation
      const electronCount = 8;
      for (let i = 0; i < electronCount; i++) {
        const progress = ((t * 0.02 + i / electronCount) % 1);
        let ex, ey;

        if (cellType === 'galvanic') {
          // Electrons flow from anode to cathode through wire
          if (progress < 0.5) {
            ex = beaker1X + 60 + (beaker2X - beaker1X) * (progress * 2);
            ey = beakerY - 40;
          } else {
            ex = beaker2X + 60;
            ey = beakerY - 40 + 60 * ((progress - 0.5) * 2);
          }
        } else {
          // Electrolytic - reverse flow
          if (progress < 0.5) {
            ex = beaker2X + 60 - (beaker2X - beaker1X) * (progress * 2);
            ey = beakerY - 40;
          } else {
            ex = beaker1X + 60;
            ey = beakerY - 40 + 60 * ((progress - 0.5) * 2);
          }
        }

        ctx.fillStyle = colors.yellow;
        ctx.beginPath();
        ctx.arc(ex, ey, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Labels
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Anode (-)', beaker1X + 60, beakerY + beakerHeight + 25);
      ctx.fillText('Cathode (+)', beaker2X + 60, beakerY + beakerHeight + 25);
      ctx.fillText('Salt Bridge', width / 2, beakerY - 10);

      ctx.font = '12px system-ui';
      ctx.fillStyle = colors.textSecondary;
      ctx.fillText('Oxidation', beaker1X + 60, beakerY + beakerHeight + 45);
      ctx.fillText('Reduction', beaker2X + 60, beakerY + beakerHeight + 45);

      info.innerHTML = `
        <div class="info-item">Cell Type: <strong>${cellType === 'galvanic' ? 'Galvanic (Spontaneous)' : 'Electrolytic (Non-spontaneous)'}</strong></div>
        <div class="info-item">Electron Flow: <strong>${cellType === 'galvanic' ? 'Anode → Cathode' : 'Cathode → Anode'}</strong></div>
        <div class="info-item">At Anode: <strong>Oxidation (loss of e⁻)</strong></div>
        <div class="info-item">At Cathode: <strong>Reduction (gain of e⁻)</strong></div>
      `;

      t++;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // Molecular Geometry Visualization
  molecularGeometry(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const geometries = ['linear', 'trigonal', 'tetrahedral', 'tbp', 'octahedral'];
    const geometryNames = ['Linear (sp)', 'Trigonal Planar (sp²)', 'Tetrahedral (sp³)', 'Trigonal Bipyramidal (sp³d)', 'Octahedral (sp³d²)'];
    let currentGeometry = 0;

    const geomBtn = this.createButton(controls, geometryNames[0], () => {});
    this.createButton(controls, 'Next Shape →', () => {
      currentGeometry = (currentGeometry + 1) % geometries.length;
      geomBtn.textContent = geometryNames[currentGeometry];
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    let angle = 0;
    const self = this;

    const animate = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = 80;

      // Draw central atom
      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(cx, cy, 25, 0, Math.PI * 2);
      ctx.fill();

      // Get bond positions based on geometry
      let bonds = [];
      const geom = geometries[currentGeometry];

      if (geom === 'linear') {
        bonds = [
          { x: -radius, y: 0 },
          { x: radius, y: 0 }
        ];
      } else if (geom === 'trigonal') {
        for (let i = 0; i < 3; i++) {
          const a = (i * 120 + angle) * Math.PI / 180;
          bonds.push({ x: radius * Math.cos(a), y: radius * Math.sin(a) });
        }
      } else if (geom === 'tetrahedral') {
        bonds = [
          { x: 0, y: -radius },
          { x: -radius * 0.94, y: radius * 0.33 },
          { x: radius * 0.47, y: radius * 0.33, z: -0.5 },
          { x: radius * 0.47, y: radius * 0.33, z: 0.5 }
        ];
        // Apply rotation
        const cosA = Math.cos(angle * 0.02);
        const sinA = Math.sin(angle * 0.02);
        bonds = bonds.map(b => ({
          x: b.x * cosA - (b.z || 0) * radius * sinA,
          y: b.y,
          z: b.x * sinA + (b.z || 0) * radius * cosA
        }));
      } else if (geom === 'tbp') {
        bonds = [
          { x: 0, y: -radius },
          { x: 0, y: radius },
          { x: -radius * 0.87, y: 0 },
          { x: radius * 0.43, y: 0, z: -0.5 },
          { x: radius * 0.43, y: 0, z: 0.5 }
        ];
        const cosA = Math.cos(angle * 0.02);
        const sinA = Math.sin(angle * 0.02);
        bonds = bonds.map(b => ({
          x: b.x * cosA - (b.z || 0) * radius * sinA,
          y: b.y,
          z: b.x * sinA + (b.z || 0) * radius * cosA
        }));
      } else if (geom === 'octahedral') {
        bonds = [
          { x: 0, y: -radius },
          { x: 0, y: radius },
          { x: -radius, y: 0 },
          { x: radius, y: 0 },
          { x: 0, y: 0, z: -0.8 },
          { x: 0, y: 0, z: 0.8 }
        ];
        const cosA = Math.cos(angle * 0.02);
        const sinA = Math.sin(angle * 0.02);
        bonds = bonds.map(b => ({
          x: b.x * cosA - (b.z || 0) * radius * sinA,
          y: b.y,
          z: b.x * sinA + (b.z || 0) * radius * cosA
        }));
      }

      // Sort by z for proper 3D rendering
      bonds.sort((a, b) => (a.z || 0) - (b.z || 0));

      // Draw bonds and atoms
      bonds.forEach((bond, i) => {
        const depth = (bond.z || 0) + 1;
        const alpha = 0.5 + depth * 0.25;

        // Bond line
        ctx.strokeStyle = colors.axis;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + bond.x, cy + bond.y);
        ctx.stroke();

        // Terminal atom
        ctx.fillStyle = colors.blue;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(cx + bond.x, cy + bond.y, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Redraw central atom on top
      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(cx, cy, 25, 0, Math.PI * 2);
      ctx.fill();

      // Bond angles
      const bondAngles = {
        'linear': '180°',
        'trigonal': '120°',
        'tetrahedral': '109.5°',
        'tbp': '90°, 120°',
        'octahedral': '90°'
      };

      const examples = {
        'linear': 'BeCl₂, CO₂',
        'trigonal': 'BF₃, AlCl₃',
        'tetrahedral': 'CH₄, NH₄⁺',
        'tbp': 'PCl₅, SF₄',
        'octahedral': 'SF₆, [Fe(CN)₆]³⁻'
      };

      info.innerHTML = `
        <div class="info-item">Geometry: <strong>${geometryNames[currentGeometry]}</strong></div>
        <div class="info-item">Bond Angle: <strong>${bondAngles[geom]}</strong></div>
        <div class="info-item">Examples: <strong>${examples[geom]}</strong></div>
      `;

      angle += 0.5;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // Reaction Rate / Kinetics Animation
  reactionKinetics(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const tempSlider = this.createSlider(controls, 'Temperature', 300, 500, 350, 10, ' K');
    const concSlider = this.createSlider(controls, 'Concentration', 1, 10, 5, 1, ' M');

    this.createButton(controls, 'Reset', () => {
      particles = initParticles();
      collisions = 0;
      successfulCollisions = 0;
      time = 0;
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let particles = [];
    let collisions = 0;
    let successfulCollisions = 0;
    let time = 0;

    const initParticles = () => {
      const count = parseInt(concSlider.value) * 3;
      const p = [];
      for (let i = 0; i < count; i++) {
        p.push({
          x: Math.random() * (width - 40) + 20,
          y: Math.random() * (height - 40) + 20,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          type: i % 2 === 0 ? 'A' : 'B',
          radius: 12
        });
      }
      return p;
    };

    particles = initParticles();

    const animate = () => {
      const colors = self.getColors();
      const temp = parseInt(tempSlider.value);
      const speedFactor = temp / 350;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw container
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.strokeRect(10, 10, width - 20, height - 20);

      // Update and draw particles
      particles.forEach((p, i) => {
        // Update position
        p.x += p.vx * speedFactor;
        p.y += p.vy * speedFactor;

        // Bounce off walls
        if (p.x < 20 || p.x > width - 20) {
          p.vx *= -1;
          p.x = Math.max(20, Math.min(width - 20, p.x));
        }
        if (p.y < 20 || p.y > height - 20) {
          p.vy *= -1;
          p.y = Math.max(20, Math.min(height - 20, p.y));
        }

        // Check collisions
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < p.radius + p2.radius) {
            collisions++;
            // Successful collision if different types and enough energy
            if (p.type !== p2.type && speedFactor > 0.8) {
              successfulCollisions++;
              // Flash effect
              ctx.fillStyle = colors.yellow + '60';
              ctx.beginPath();
              ctx.arc((p.x + p2.x) / 2, (p.y + p2.y) / 2, 25, 0, Math.PI * 2);
              ctx.fill();
            }
            // Bounce
            const angle = Math.atan2(dy, dx);
            const speed1 = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            const speed2 = Math.sqrt(p2.vx * p2.vx + p2.vy * p2.vy);
            p.vx = -speed1 * Math.cos(angle);
            p.vy = -speed1 * Math.sin(angle);
            p2.vx = speed2 * Math.cos(angle);
            p2.vy = speed2 * Math.sin(angle);
          }
        }

        // Draw particle
        ctx.fillStyle = p.type === 'A' ? colors.blue : colors.orange;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = colors.text;
        ctx.font = 'bold 10px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(p.type, p.x, p.y + 4);
      });

      // Calculate rate (Arrhenius-like)
      const Ea = 50; // kJ/mol (activation energy)
      const A = 1e10; // pre-exponential factor
      const R = 8.314;
      const k = A * Math.exp(-Ea * 1000 / (R * temp));

      info.innerHTML = `
        <div class="info-item">Temperature: <strong>${temp} K</strong></div>
        <div class="info-item">Rate Constant k: <strong>${k.toExponential(2)} s⁻¹</strong></div>
        <div class="info-item">Total Collisions: <strong>${collisions}</strong></div>
        <div class="info-item">Effective Collisions: <strong>${successfulCollisions}</strong></div>
      `;

      time++;
      requestAnimationFrame(animate);
    };

    animate();

    // Reinitialize on slider change
    concSlider.addEventListener('input', () => {
      particles = initParticles();
      collisions = 0;
      successfulCollisions = 0;
    });
  },

  // Equilibrium Animation
  equilibriumDemo(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 320);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const kSlider = this.createSlider(controls, 'Equilibrium Constant K', 0.1, 10, 1, 0.1, '');

    this.createButton(controls, 'Add Reactant', () => {
      for (let i = 0; i < 5; i++) {
        particles.push(createParticle('R'));
      }
    });
    this.createButton(controls, 'Add Product', () => {
      for (let i = 0; i < 5; i++) {
        particles.push(createParticle('P'));
      }
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let particles = [];

    const createParticle = (type) => ({
      x: type === 'R' ? Math.random() * (width/2 - 40) + 20 : Math.random() * (width/2 - 40) + width/2 + 20,
      y: Math.random() * (height - 60) + 30,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      type: type,
      radius: 10
    });

    // Initialize with some particles
    for (let i = 0; i < 20; i++) {
      particles.push(createParticle('R'));
    }
    for (let i = 0; i < 10; i++) {
      particles.push(createParticle('P'));
    }

    const animate = () => {
      const colors = self.getColors();
      const K = parseFloat(kSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw divider (membrane)
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 3;
      ctx.setLineDash([10, 5]);
      ctx.beginPath();
      ctx.moveTo(width/2, 20);
      ctx.lineTo(width/2, height - 20);
      ctx.stroke();
      ctx.setLineDash([]);

      // Labels
      ctx.fillStyle = colors.textSecondary;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Reactants [A]', width/4, 15);
      ctx.fillText('Products [B]', 3*width/4, 15);

      // Count particles
      let reactants = 0, products = 0;

      particles.forEach((p, i) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 15) { p.vx *= -1; p.x = 15; }
        if (p.x > width - 15) { p.vx *= -1; p.x = width - 15; }
        if (p.y < 25) { p.vy *= -1; p.y = 25; }
        if (p.y > height - 25) { p.vy *= -1; p.y = height - 25; }

        // Crossing the membrane (equilibrium dynamics)
        if (p.type === 'R' && p.x > width/2 - 5 && p.x < width/2 + 5) {
          // Forward reaction probability based on K
          if (Math.random() < 0.1 * K / (1 + K)) {
            p.type = 'P';
            p.x = width/2 + 10;
          } else {
            p.vx *= -1;
          }
        } else if (p.type === 'P' && p.x > width/2 - 5 && p.x < width/2 + 5) {
          // Reverse reaction
          if (Math.random() < 0.1 / (1 + K)) {
            p.type = 'R';
            p.x = width/2 - 10;
          } else {
            p.vx *= -1;
          }
        }

        // Keep in respective zones
        if (p.type === 'R' && p.x > width/2) {
          p.x = width/2 - 10;
          p.vx *= -1;
        }
        if (p.type === 'P' && p.x < width/2) {
          p.x = width/2 + 10;
          p.vx *= -1;
        }

        // Count
        if (p.type === 'R') reactants++;
        else products++;

        // Draw particle
        ctx.fillStyle = p.type === 'R' ? colors.blue : colors.green;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      const Q = products / Math.max(reactants, 1);
      const equilibriumStatus = Math.abs(Q - K) < 0.3 ? 'At Equilibrium' : (Q < K ? 'Forward favored' : 'Reverse favored');

      info.innerHTML = `
        <div class="info-item">K (set): <strong>${K.toFixed(1)}</strong></div>
        <div class="info-item">[Reactants]: <strong>${reactants}</strong></div>
        <div class="info-item">[Products]: <strong>${products}</strong></div>
        <div class="info-item">Q = [P]/[R]: <strong>${Q.toFixed(2)}</strong></div>
        <div class="info-item">Status: <strong>${equilibriumStatus}</strong></div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // ============================================
  // NEW PHYSICS ANIMATIONS
  // ============================================

  // Capacitor Animation
  capacitorDemo(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const voltageSlider = this.createSlider(controls, 'Voltage', 0, 12, 6, 1, ' V');
    const areaSlider = this.createSlider(controls, 'Plate Area', 50, 150, 100, 10, ' cm²');
    const distSlider = this.createSlider(controls, 'Separation', 20, 80, 40, 5, ' mm');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let t = 0;

    const animate = () => {
      const colors = self.getColors();
      const V = parseFloat(voltageSlider.value);
      const A = parseFloat(areaSlider.value);
      const d = parseFloat(distSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const plateHeight = A * 0.8;
      const separation = d * 1.5;

      // Draw plates
      ctx.fillStyle = colors.purple;
      ctx.fillRect(cx - separation/2 - 15, cy - plateHeight/2, 15, plateHeight);

      ctx.fillStyle = colors.cyan;
      ctx.fillRect(cx + separation/2, cy - plateHeight/2, 15, plateHeight);

      // Draw charges on plates
      const chargeCount = Math.floor(V * 2);
      for (let i = 0; i < chargeCount; i++) {
        const y = cy - plateHeight/2 + (i + 0.5) * plateHeight / chargeCount;

        // Positive charges on left plate
        ctx.fillStyle = colors.orange;
        ctx.font = 'bold 14px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('+', cx - separation/2 - 7, y + 5);

        // Negative charges on right plate
        ctx.fillStyle = colors.blue;
        ctx.fillText('−', cx + separation/2 + 7, y + 5);
      }

      // Draw electric field lines
      if (V > 0) {
        ctx.strokeStyle = colors.green + '60';
        ctx.lineWidth = 1;
        const lineCount = Math.min(V, 8);
        for (let i = 0; i < lineCount; i++) {
          const y = cy - plateHeight/2 + (i + 0.5) * plateHeight / lineCount;
          ctx.beginPath();
          ctx.moveTo(cx - separation/2, y);
          ctx.lineTo(cx + separation/2, y);
          ctx.stroke();

          // Arrow
          ctx.beginPath();
          ctx.moveTo(cx + 5, y);
          ctx.lineTo(cx - 5, y - 5);
          ctx.lineTo(cx - 5, y + 5);
          ctx.closePath();
          ctx.fillStyle = colors.green + '60';
          ctx.fill();
        }
      }

      // Labels
      ctx.fillStyle = colors.text;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('+V', cx - separation/2 - 7, cy - plateHeight/2 - 15);
      ctx.fillText('0V', cx + separation/2 + 7, cy - plateHeight/2 - 15);

      // Calculate capacitance
      const epsilon0 = 8.85e-12;
      const Ameter = A * 1e-4;
      const dmeter = d * 1e-3;
      const C = epsilon0 * Ameter / dmeter;
      const Q = C * V;
      const E = V / dmeter;
      const U = 0.5 * C * V * V;

      info.innerHTML = `
        <div class="info-item">Capacitance C = ε₀A/d: <strong>${(C * 1e12).toFixed(2)} pF</strong></div>
        <div class="info-item">Charge Q = CV: <strong>${(Q * 1e12).toFixed(2)} pC</strong></div>
        <div class="info-item">Field E = V/d: <strong>${E.toFixed(0)} V/m</strong></div>
        <div class="info-item">Energy U = ½CV²: <strong>${(U * 1e12).toFixed(2)} pJ</strong></div>
      `;

      t++;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // Magnetic Field Visualization
  magneticFieldDemo(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const currentSlider = this.createSlider(controls, 'Current', 1, 10, 5, 1, ' A');

    let fieldType = 'wire';
    const typeBtn = this.createButton(controls, 'Straight Wire', () => {});
    this.createButton(controls, 'Toggle Type', () => {
      fieldType = fieldType === 'wire' ? 'loop' : (fieldType === 'loop' ? 'solenoid' : 'wire');
      typeBtn.textContent = fieldType === 'wire' ? 'Straight Wire' : (fieldType === 'loop' ? 'Current Loop' : 'Solenoid');
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let t = 0;

    const animate = () => {
      const colors = self.getColors();
      const I = parseFloat(currentSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      if (fieldType === 'wire') {
        // Draw wire (going into page)
        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.arc(cx, cy, 15, 0, Math.PI * 2);
        ctx.fill();

        // X symbol (current into page)
        ctx.strokeStyle = colors.bg;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx - 7, cy - 7);
        ctx.lineTo(cx + 7, cy + 7);
        ctx.moveTo(cx + 7, cy - 7);
        ctx.lineTo(cx - 7, cy + 7);
        ctx.stroke();

        // Draw magnetic field lines (circles)
        for (let r = 40; r < 150; r += 30) {
          ctx.strokeStyle = colors.cyan + '80';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.stroke();

          // Direction arrows
          const arrowAngle = (t * 0.02) % (Math.PI * 2);
          const ax = cx + r * Math.cos(arrowAngle);
          const ay = cy + r * Math.sin(arrowAngle);

          ctx.fillStyle = colors.cyan;
          ctx.beginPath();
          ctx.arc(ax, ay, 5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = colors.textSecondary;
        ctx.font = '12px system-ui';
        ctx.fillText('B ∝ 1/r (decreases with distance)', cx, height - 20);

      } else if (fieldType === 'loop') {
        // Draw loop
        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.ellipse(cx, cy, 80, 40, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Magnetic field through center
        for (let i = -60; i <= 60; i += 20) {
          ctx.strokeStyle = colors.cyan + '80';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx + i, cy + 80);
          ctx.lineTo(cx + i, cy - 80);
          ctx.stroke();

          // Arrow pointing up
          ctx.fillStyle = colors.cyan;
          ctx.beginPath();
          ctx.moveTo(cx + i, cy - 80);
          ctx.lineTo(cx + i - 5, cy - 70);
          ctx.lineTo(cx + i + 5, cy - 70);
          ctx.closePath();
          ctx.fill();
        }

      } else {
        // Solenoid
        const coilCount = 6;
        const coilWidth = 200;
        const startX = cx - coilWidth/2;

        for (let i = 0; i < coilCount; i++) {
          const x = startX + i * (coilWidth / coilCount);
          ctx.strokeStyle = colors.orange;
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.ellipse(x, cy, 15, 50, 0, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Uniform field inside
        for (let y = cy - 30; y <= cy + 30; y += 15) {
          ctx.strokeStyle = colors.cyan + '80';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(startX - 40, y);
          ctx.lineTo(startX + coilWidth + 40, y);
          ctx.stroke();

          // Arrow
          ctx.fillStyle = colors.cyan;
          ctx.beginPath();
          ctx.moveTo(cx + 30, y);
          ctx.lineTo(cx + 20, y - 4);
          ctx.lineTo(cx + 20, y + 4);
          ctx.closePath();
          ctx.fill();
        }

        ctx.fillStyle = colors.textSecondary;
        ctx.font = '12px system-ui';
        ctx.fillText('Uniform field inside solenoid', cx, height - 20);
      }

      // Calculate field
      const mu0 = 4 * Math.PI * 1e-7;
      const r = 0.05; // 5 cm
      const B_wire = mu0 * I / (2 * Math.PI * r);
      const B_loop = mu0 * I / (2 * r);
      const n = 100; // turns per meter
      const B_solenoid = mu0 * n * I;

      const B = fieldType === 'wire' ? B_wire : (fieldType === 'loop' ? B_loop : B_solenoid);

      info.innerHTML = `
        <div class="info-item">Current: <strong>${I} A</strong></div>
        <div class="info-item">Field Type: <strong>${fieldType === 'wire' ? 'B = μ₀I/(2πr)' : (fieldType === 'loop' ? 'B = μ₀I/(2R)' : 'B = μ₀nI')}</strong></div>
        <div class="info-item">Magnetic Field B: <strong>${(B * 1e6).toFixed(2)} μT</strong></div>
      `;

      t++;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // Nuclear Decay Animation
  nuclearDecay(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 320);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const halfLifeSlider = this.createSlider(controls, 'Half-life', 1, 10, 3, 0.5, ' s');

    this.createButton(controls, 'Reset', () => {
      initNuclei();
      time = 0;
    });

    let decayType = 'alpha';
    const decayBtn = this.createButton(controls, 'α Decay', () => {});
    this.createButton(controls, 'Change Decay', () => {
      decayType = decayType === 'alpha' ? 'beta' : (decayType === 'beta' ? 'gamma' : 'alpha');
      decayBtn.textContent = decayType === 'alpha' ? 'α Decay' : (decayType === 'beta' ? 'β Decay' : 'γ Decay');
      initNuclei();
      time = 0;
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let nuclei = [];
    let emittedParticles = [];
    let time = 0;
    let decayedCount = 0;
    const initialCount = 50;

    const initNuclei = () => {
      nuclei = [];
      emittedParticles = [];
      decayedCount = 0;
      for (let i = 0; i < initialCount; i++) {
        nuclei.push({
          x: 50 + Math.random() * 150,
          y: 50 + Math.random() * 200,
          decayed: false,
          decayTime: -1
        });
      }
    };

    initNuclei();

    const animate = () => {
      const colors = self.getColors();
      const halfLife = parseFloat(halfLifeSlider.value);
      const lambda = Math.log(2) / halfLife;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw sections
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.strokeRect(30, 30, 200, 240);
      ctx.strokeRect(270, 30, 200, 240);

      ctx.fillStyle = colors.textSecondary;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Parent Nuclei', 130, 20);
      ctx.fillText('Daughter Nuclei', 370, 20);

      // Process decays
      nuclei.forEach(n => {
        if (!n.decayed) {
          // Decay probability per frame
          if (Math.random() < lambda * 0.016) {
            n.decayed = true;
            n.decayTime = time;
            decayedCount++;

            // Emit particle
            emittedParticles.push({
              x: n.x,
              y: n.y,
              vx: 3 + Math.random() * 2,
              vy: (Math.random() - 0.5) * 2,
              type: decayType,
              life: 60
            });
          }
        }
      });

      // Draw nuclei
      nuclei.forEach(n => {
        if (!n.decayed) {
          // Parent nucleus
          ctx.fillStyle = colors.orange;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 10, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Daughter nucleus (moved to right side)
          const dx = 270 + (n.x - 30);
          ctx.fillStyle = colors.green;
          ctx.beginPath();
          ctx.arc(dx, n.y, decayType === 'alpha' ? 8 : 10, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw emitted particles
      emittedParticles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        if (p.life > 0) {
          if (p.type === 'alpha') {
            ctx.fillStyle = colors.purple;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = colors.text;
            ctx.font = '8px system-ui';
            ctx.fillText('α', p.x - 3, p.y + 3);
          } else if (p.type === 'beta') {
            ctx.fillStyle = colors.blue;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Gamma - wavy line
            ctx.strokeStyle = colors.yellow;
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let j = 0; j < 20; j++) {
              const wx = p.x + j * 2;
              const wy = p.y + Math.sin(j * 0.8) * 5;
              if (j === 0) ctx.moveTo(wx, wy);
              else ctx.lineTo(wx, wy);
            }
            ctx.stroke();
          }
        }
      });

      // Remove dead particles
      emittedParticles = emittedParticles.filter(p => p.life > 0);

      // Exponential decay formula
      const remaining = initialCount - decayedCount;
      const theoretical = initialCount * Math.exp(-lambda * time * 0.016);

      info.innerHTML = `
        <div class="info-item">Time: <strong>${(time * 0.016).toFixed(1)} s</strong></div>
        <div class="info-item">Half-life: <strong>${halfLife} s</strong></div>
        <div class="info-item">Remaining: <strong>${remaining}/${initialCount}</strong></div>
        <div class="info-item">N(t) = N₀e^(-λt): <strong>${theoretical.toFixed(1)}</strong></div>
        <div class="info-item">Decay: <strong>${decayType === 'alpha' ? 'α (₂He⁴)' : (decayType === 'beta' ? 'β (e⁻)' : 'γ (photon)')}</strong></div>
      `;

      time++;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // Refraction Animation
  refractionDemo(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const angleSlider = this.createSlider(controls, 'Incident Angle', 0, 80, 45, 1, '°');
    const n2Slider = this.createSlider(controls, 'Refractive Index n₂', 1.0, 2.5, 1.5, 0.1, '');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const animate = () => {
      const colors = self.getColors();
      const theta1 = parseFloat(angleSlider.value) * Math.PI / 180;
      const n1 = 1.0; // Air
      const n2 = parseFloat(n2Slider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw media
      ctx.fillStyle = colors.blue + '20';
      ctx.fillRect(0, cy, width, height/2);

      // Interface line
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke();

      // Normal line
      ctx.strokeStyle = colors.axis + '60';
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(cx, cy - 120);
      ctx.lineTo(cx, cy + 120);
      ctx.stroke();
      ctx.setLineDash([]);

      // Calculate refracted angle (Snell's law)
      const sinTheta2 = (n1 / n2) * Math.sin(theta1);
      const isTIR = Math.abs(sinTheta2) > 1;
      const theta2 = isTIR ? Math.PI / 2 : Math.asin(sinTheta2);

      const rayLength = 120;

      // Incident ray
      const incidentEndX = cx - rayLength * Math.sin(theta1);
      const incidentEndY = cy - rayLength * Math.cos(theta1);

      ctx.strokeStyle = colors.yellow;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(incidentEndX, incidentEndY);
      ctx.lineTo(cx, cy);
      ctx.stroke();

      // Arrow on incident ray
      const arrowAngle = Math.PI + theta1;
      ctx.fillStyle = colors.yellow;
      ctx.beginPath();
      ctx.moveTo(cx - 30 * Math.sin(theta1), cy - 30 * Math.cos(theta1));
      ctx.lineTo(cx - 40 * Math.sin(theta1) - 8 * Math.cos(arrowAngle), cy - 40 * Math.cos(theta1) + 8 * Math.sin(arrowAngle));
      ctx.lineTo(cx - 40 * Math.sin(theta1) + 8 * Math.cos(arrowAngle), cy - 40 * Math.cos(theta1) - 8 * Math.sin(arrowAngle));
      ctx.closePath();
      ctx.fill();

      // Reflected ray
      const reflectedEndX = cx + rayLength * Math.sin(theta1);
      const reflectedEndY = cy - rayLength * Math.cos(theta1);

      ctx.strokeStyle = colors.purple + '80';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(reflectedEndX, reflectedEndY);
      ctx.stroke();

      // Refracted ray (if no TIR)
      if (!isTIR) {
        const refractedEndX = cx + rayLength * Math.sin(theta2);
        const refractedEndY = cy + rayLength * Math.cos(theta2);

        ctx.strokeStyle = colors.green;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(refractedEndX, refractedEndY);
        ctx.stroke();
      } else {
        // Total Internal Reflection
        ctx.fillStyle = colors.orange;
        ctx.font = 'bold 14px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('Total Internal Reflection!', cx, cy + 60);
      }

      // Angle arcs
      ctx.strokeStyle = colors.yellow + '80';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 40, -Math.PI/2, -Math.PI/2 + theta1);
      ctx.stroke();

      if (!isTIR) {
        ctx.strokeStyle = colors.green + '80';
        ctx.beginPath();
        ctx.arc(cx, cy, 40, Math.PI/2 - theta2, Math.PI/2);
        ctx.stroke();
      }

      // Labels
      ctx.fillStyle = colors.textSecondary;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('n₁ = 1.0 (Air)', 20, 40);
      ctx.fillText(`n₂ = ${n2.toFixed(1)}`, 20, cy + 30);

      const criticalAngle = n2 > n1 ? 'N/A' : (Math.asin(n2/n1) * 180 / Math.PI).toFixed(1) + '°';

      info.innerHTML = `
        <div class="info-item">Incident Angle θ₁: <strong>${(theta1 * 180 / Math.PI).toFixed(1)}°</strong></div>
        <div class="info-item">Refracted Angle θ₂: <strong>${isTIR ? 'TIR' : (theta2 * 180 / Math.PI).toFixed(1) + '°'}</strong></div>
        <div class="info-item">Snell's Law: <strong>n₁sin θ₁ = n₂sin θ₂</strong></div>
        <div class="info-item">Critical Angle: <strong>${criticalAngle}</strong></div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // ============================================
  // NEW MATHEMATICS ANIMATIONS
  // ============================================

  // Matrix Operations Visualization
  matrixTransform(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const aSlider = this.createSlider(controls, 'a (scale x)', -2, 2, 1, 0.1, '');
    const bSlider = this.createSlider(controls, 'b (shear)', -2, 2, 0, 0.1, '');
    const cSlider = this.createSlider(controls, 'c (shear)', -2, 2, 0, 0.1, '');
    const dSlider = this.createSlider(controls, 'd (scale y)', -2, 2, 1, 0.1, '');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const animate = () => {
      const colors = self.getColors();
      const a = parseFloat(aSlider.value);
      const b = parseFloat(bSlider.value);
      const c = parseFloat(cSlider.value);
      const d = parseFloat(dSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = 40;

      // Draw grid
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      for (let i = -5; i <= 5; i++) {
        ctx.beginPath();
        ctx.moveTo(cx + i * scale, 0);
        ctx.lineTo(cx + i * scale, height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, cy + i * scale);
        ctx.lineTo(width, cy + i * scale);
        ctx.stroke();
      }

      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, height);
      ctx.stroke();

      // Original unit square
      const square = [
        [0, 0], [1, 0], [1, 1], [0, 1]
      ];

      // Draw original square (faded)
      ctx.strokeStyle = colors.blue + '40';
      ctx.lineWidth = 2;
      ctx.beginPath();
      square.forEach((p, i) => {
        const px = cx + p[0] * scale;
        const py = cy - p[1] * scale;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.closePath();
      ctx.stroke();

      // Transform and draw new shape
      const transformed = square.map(p => [
        a * p[0] + b * p[1],
        c * p[0] + d * p[1]
      ]);

      ctx.fillStyle = colors.orange + '40';
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 2;
      ctx.beginPath();
      transformed.forEach((p, i) => {
        const px = cx + p[0] * scale;
        const py = cy - p[1] * scale;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw basis vectors
      // Original i-hat
      ctx.strokeStyle = colors.green + '60';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + scale, cy);
      ctx.stroke();

      // Original j-hat
      ctx.strokeStyle = colors.purple + '60';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx, cy - scale);
      ctx.stroke();

      // Transformed i-hat (first column)
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + a * scale, cy - c * scale);
      ctx.stroke();

      // Transformed j-hat (second column)
      ctx.strokeStyle = colors.purple;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + b * scale, cy - d * scale);
      ctx.stroke();

      const det = a * d - b * c;

      info.innerHTML = `
        <div class="info-item">Matrix: <strong>[${a}, ${b}; ${c}, ${d}]</strong></div>
        <div class="info-item">Determinant: <strong>${det.toFixed(2)}</strong></div>
        <div class="info-item">Area Scale: <strong>|det| = ${Math.abs(det).toFixed(2)}</strong></div>
        <div class="info-item">${det < 0 ? 'Orientation: <strong>Flipped</strong>' : 'Orientation: <strong>Preserved</strong>'}</div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Conic Sections Visualization
  conicSection(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    let conicType = 'parabola';
    const typeBtn = this.createButton(controls, 'Parabola', () => {});
    this.createButton(controls, 'Next Conic', () => {
      conicType = conicType === 'parabola' ? 'ellipse' : (conicType === 'ellipse' ? 'hyperbola' : 'parabola');
      typeBtn.textContent = conicType.charAt(0).toUpperCase() + conicType.slice(1);
    });

    const eSlider = this.createSlider(controls, 'Eccentricity', 0.1, 2, 0.5, 0.1, '');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let t = 0;

    const animate = () => {
      const colors = self.getColors();
      let e = parseFloat(eSlider.value);

      // Adjust e based on conic type
      if (conicType === 'parabola') e = 1;
      else if (conicType === 'ellipse') e = Math.min(e, 0.99);
      else e = Math.max(e, 1.01);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = 50;

      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, height);
      ctx.stroke();

      if (conicType === 'parabola') {
        const a = 1;
        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = -4; x <= 4; x += 0.05) {
          const y = x * x / (4 * a);
          const px = cx + x * scale;
          const py = cy - y * scale;
          if (x === -4) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Focus
        ctx.fillStyle = colors.green;
        ctx.beginPath();
        ctx.arc(cx, cy - a * scale, 6, 0, Math.PI * 2);
        ctx.fill();

        // Directrix
        ctx.strokeStyle = colors.purple;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(0, cy + a * scale);
        ctx.lineTo(width, cy + a * scale);
        ctx.stroke();
        ctx.setLineDash([]);

      } else if (conicType === 'ellipse') {
        const a = 2;
        const b = a * Math.sqrt(1 - e * e);
        const c = a * e;

        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(cx, cy, a * scale, b * scale, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Foci
        ctx.fillStyle = colors.green;
        ctx.beginPath();
        ctx.arc(cx - c * scale, cy, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx + c * scale, cy, 6, 0, Math.PI * 2);
        ctx.fill();

        // Point on ellipse
        const angle = t * 0.02;
        const px = cx + a * Math.cos(angle) * scale;
        const py = cy - b * Math.sin(angle) * scale;

        ctx.fillStyle = colors.cyan;
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();

        // Lines to foci
        ctx.strokeStyle = colors.yellow + '60';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(cx - c * scale, cy);
        ctx.moveTo(px, py);
        ctx.lineTo(cx + c * scale, cy);
        ctx.stroke();

      } else {
        const a = 1.5;
        const b = a * Math.sqrt(e * e - 1);
        const c = a * e;

        // Right branch
        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let th = -1.5; th <= 1.5; th += 0.05) {
          const x = a / Math.cos(th);
          const y = b * Math.tan(th);
          if (Math.abs(x) < 5) {
            const px = cx + x * scale;
            const py = cy - y * scale;
            if (th === -1.5) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
        }
        ctx.stroke();

        // Left branch
        ctx.beginPath();
        for (let th = -1.5; th <= 1.5; th += 0.05) {
          const x = -a / Math.cos(th);
          const y = -b * Math.tan(th);
          if (Math.abs(x) < 5) {
            const px = cx + x * scale;
            const py = cy - y * scale;
            if (th === -1.5) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
        }
        ctx.stroke();

        // Foci
        ctx.fillStyle = colors.green;
        ctx.beginPath();
        ctx.arc(cx - c * scale, cy, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx + c * scale, cy, 6, 0, Math.PI * 2);
        ctx.fill();

        // Asymptotes
        ctx.strokeStyle = colors.purple + '40';
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(cx - 200, cy + 200 * b / a);
        ctx.lineTo(cx + 200, cy - 200 * b / a);
        ctx.moveTo(cx - 200, cy - 200 * b / a);
        ctx.lineTo(cx + 200, cy + 200 * b / a);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      const equation = conicType === 'parabola' ? 'y = x²/4a' :
                       (conicType === 'ellipse' ? 'x²/a² + y²/b² = 1' : 'x²/a² - y²/b² = 1');

      info.innerHTML = `
        <div class="info-item">Conic: <strong>${conicType.charAt(0).toUpperCase() + conicType.slice(1)}</strong></div>
        <div class="info-item">Eccentricity e: <strong>${e.toFixed(2)}</strong></div>
        <div class="info-item">Equation: <strong>${equation}</strong></div>
        <div class="info-item">e ${e < 1 ? '< 1' : (e === 1 ? '= 1' : '> 1')}: <strong>${conicType}</strong></div>
      `;

      t++;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // Integral Area Visualization
  integralArea(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 320);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const aSlider = this.createSlider(controls, 'Lower bound a', 0, 2, 0, 0.1, '');
    const bSlider = this.createSlider(controls, 'Upper bound b', 1, 4, 2, 0.1, '');
    const nSlider = this.createSlider(controls, 'Rectangles n', 1, 50, 10, 1, '');

    let func = 'x2';
    const funcBtn = this.createButton(controls, 'f(x) = x²', () => {});
    this.createButton(controls, 'Change f(x)', () => {
      func = func === 'x2' ? 'sinx' : (func === 'sinx' ? 'ex' : 'x2');
      funcBtn.textContent = func === 'x2' ? 'f(x) = x²' : (func === 'sinx' ? 'f(x) = sin(x)' : 'f(x) = eˣ');
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const f = (x) => {
      if (func === 'x2') return x * x;
      if (func === 'sinx') return Math.sin(x) + 1;
      return Math.exp(x / 2);
    };

    const integral = (a, b) => {
      if (func === 'x2') return (b*b*b - a*a*a) / 3;
      if (func === 'sinx') return -Math.cos(b) + Math.cos(a) + (b - a);
      return 2 * (Math.exp(b/2) - Math.exp(a/2));
    };

    const animate = () => {
      const colors = self.getColors();
      const a = parseFloat(aSlider.value);
      const b = parseFloat(bSlider.value);
      const n = parseInt(nSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const ox = 50;
      const oy = height - 50;
      const scaleX = (width - 100) / 4;
      const scaleY = (height - 100) / 5;

      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(ox, 20);
      ctx.lineTo(ox, oy);
      ctx.lineTo(width - 20, oy);
      ctx.stroke();

      // Axis labels
      ctx.fillStyle = colors.textSecondary;
      ctx.font = '12px system-ui';
      for (let i = 0; i <= 4; i++) {
        ctx.fillText(i.toString(), ox + i * scaleX - 5, oy + 20);
      }

      // Draw rectangles (Riemann sum)
      const dx = (b - a) / n;
      let riemannSum = 0;

      for (let i = 0; i < n; i++) {
        const x = a + i * dx;
        const h = f(x + dx/2); // Midpoint rule
        riemannSum += h * dx;

        const rx = ox + x * scaleX;
        const rw = dx * scaleX;
        const rh = h * scaleY;

        ctx.fillStyle = colors.blue + '60';
        ctx.fillRect(rx, oy - rh, rw, rh);
        ctx.strokeStyle = colors.blue;
        ctx.lineWidth = 1;
        ctx.strokeRect(rx, oy - rh, rw, rh);
      }

      // Draw function
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= 4; x += 0.05) {
        const px = ox + x * scaleX;
        const py = oy - f(x) * scaleY;
        if (x === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Mark bounds
      ctx.strokeStyle = colors.green;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(ox + a * scaleX, oy);
      ctx.lineTo(ox + a * scaleX, oy - f(a) * scaleY);
      ctx.moveTo(ox + b * scaleX, oy);
      ctx.lineTo(ox + b * scaleX, oy - f(b) * scaleY);
      ctx.stroke();
      ctx.setLineDash([]);

      const exactArea = integral(a, b);
      const error = Math.abs(exactArea - riemannSum);

      info.innerHTML = `
        <div class="info-item">∫ from ${a.toFixed(1)} to ${b.toFixed(1)}</div>
        <div class="info-item">Riemann Sum (n=${n}): <strong>${riemannSum.toFixed(4)}</strong></div>
        <div class="info-item">Exact Integral: <strong>${exactArea.toFixed(4)}</strong></div>
        <div class="info-item">Error: <strong>${error.toFixed(4)}</strong></div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Formula Explanation with Variable Labels
  formulaGravitation(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 380);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const m1Slider = this.createSlider(controls, 'Mass m₁', 1, 20, 10, 1, ' kg');
    const m2Slider = this.createSlider(controls, 'Mass m₂', 1, 20, 5, 1, ' kg');
    const rSlider = this.createSlider(controls, 'Distance r', 1, 10, 3, 0.5, ' m');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    const G = 6.674e-11;

    const animate = () => {
      const colors = self.getColors();
      const m1 = parseFloat(m1Slider.value);
      const m2 = parseFloat(m2Slider.value);
      const r = parseFloat(rSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 18px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText("Newton's Law of Universal Gravitation", width / 2, 30);

      // Draw formula
      ctx.font = 'bold 24px "Courier New", monospace';
      ctx.fillStyle = colors.yellow;
      ctx.fillText('F = G × m₁ × m₂ / r²', width / 2, 70);

      // Draw masses
      const mass1X = 100;
      const mass2X = width - 100;
      const massY = height / 2 + 20;
      const mass1Radius = 15 + m1 * 1.5;
      const mass2Radius = 15 + m2 * 1.5;

      // Mass 1
      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(mass1X, massY, mass1Radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('m₁', mass1X, massY + 5);

      // Mass 1 label with arrow
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(mass1X, massY - mass1Radius - 10);
      ctx.lineTo(mass1X, massY - mass1Radius - 50);
      ctx.stroke();
      ctx.fillStyle = colors.cyan;
      ctx.font = '14px system-ui';
      ctx.fillText(`m₁ = ${m1} kg`, mass1X, massY - mass1Radius - 60);

      // Mass 2
      ctx.fillStyle = colors.blue;
      ctx.beginPath();
      ctx.arc(mass2X, massY, mass2Radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.fillText('m₂', mass2X, massY + 5);

      // Mass 2 label with arrow
      ctx.strokeStyle = colors.purple;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(mass2X, massY - mass2Radius - 10);
      ctx.lineTo(mass2X, massY - mass2Radius - 50);
      ctx.stroke();
      ctx.fillStyle = colors.purple;
      ctx.font = '14px system-ui';
      ctx.fillText(`m₂ = ${m2} kg`, mass2X, massY - mass2Radius - 60);

      // Distance line with label
      const lineY = massY + 70;
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(mass1X, lineY);
      ctx.lineTo(mass2X, lineY);
      ctx.stroke();

      // Distance arrows
      ctx.beginPath();
      ctx.moveTo(mass1X, lineY);
      ctx.lineTo(mass1X + 10, lineY - 8);
      ctx.lineTo(mass1X + 10, lineY + 8);
      ctx.closePath();
      ctx.fillStyle = colors.green;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(mass2X, lineY);
      ctx.lineTo(mass2X - 10, lineY - 8);
      ctx.lineTo(mass2X - 10, lineY + 8);
      ctx.closePath();
      ctx.fill();

      // Distance label
      ctx.fillStyle = colors.green;
      ctx.font = 'bold 16px system-ui';
      ctx.fillText(`r = ${r} m`, width / 2, lineY + 30);

      // Force vectors
      const F = G * m1 * m2 / (r * r);
      const forceScale = Math.min(80, F * 1e11 * 5);

      // Force on m1 (towards m2)
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(mass1X + mass1Radius + 5, massY);
      ctx.lineTo(mass1X + mass1Radius + 5 + forceScale, massY);
      ctx.stroke();
      // Arrow head
      ctx.beginPath();
      ctx.moveTo(mass1X + mass1Radius + 5 + forceScale, massY);
      ctx.lineTo(mass1X + mass1Radius + 5 + forceScale - 10, massY - 6);
      ctx.lineTo(mass1X + mass1Radius + 5 + forceScale - 10, massY + 6);
      ctx.closePath();
      ctx.fillStyle = colors.orange;
      ctx.fill();
      ctx.font = '12px system-ui';
      ctx.fillText('F₁₂', mass1X + mass1Radius + 15 + forceScale / 2, massY - 15);

      // Force on m2 (towards m1)
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(mass2X - mass2Radius - 5, massY);
      ctx.lineTo(mass2X - mass2Radius - 5 - forceScale, massY);
      ctx.stroke();
      // Arrow head
      ctx.beginPath();
      ctx.moveTo(mass2X - mass2Radius - 5 - forceScale, massY);
      ctx.lineTo(mass2X - mass2Radius - 5 - forceScale + 10, massY - 6);
      ctx.lineTo(mass2X - mass2Radius - 5 - forceScale + 10, massY + 6);
      ctx.closePath();
      ctx.fillStyle = colors.blue;
      ctx.fill();
      ctx.fillText('F₂₁', mass2X - mass2Radius - 15 - forceScale / 2, massY - 15);

      // G constant box
      ctx.strokeStyle = colors.yellow;
      ctx.lineWidth = 2;
      ctx.strokeRect(20, height - 80, 180, 50);
      ctx.fillStyle = colors.yellow;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('G = 6.674 × 10⁻¹¹', 30, height - 55);
      ctx.fillText('N·m²/kg²', 30, height - 40);

      info.innerHTML = `
        <div class="info-item">Force F = <strong>${F.toExponential(3)} N</strong></div>
        <div class="info-item">|F₁₂| = |F₂₁| (Newton's 3rd Law)</div>
        <div class="info-item">F ∝ m₁m₂ and F ∝ 1/r²</div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Coulomb's Law Formula Visualization
  formulaCoulomb(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 380);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const q1Slider = this.createSlider(controls, 'Charge q₁', -10, 10, 5, 1, ' μC');
    const q2Slider = this.createSlider(controls, 'Charge q₂', -10, 10, -3, 1, ' μC');
    const rSlider = this.createSlider(controls, 'Distance r', 1, 10, 3, 0.5, ' cm');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    const k = 9e9;

    const animate = () => {
      const colors = self.getColors();
      const q1 = parseFloat(q1Slider.value);
      const q2 = parseFloat(q2Slider.value);
      const r = parseFloat(rSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 18px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText("Coulomb's Law", width / 2, 30);

      // Formula
      ctx.font = 'bold 24px "Courier New", monospace';
      ctx.fillStyle = colors.cyan;
      ctx.fillText('F = k × |q₁| × |q₂| / r²', width / 2, 70);

      // Draw charges
      const charge1X = 120;
      const charge2X = width - 120;
      const chargeY = height / 2 + 10;
      const chargeRadius = 30;

      // Charge 1
      ctx.fillStyle = q1 > 0 ? colors.orange : colors.blue;
      ctx.beginPath();
      ctx.arc(charge1X, chargeY, chargeRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 20px system-ui';
      ctx.fillText(q1 > 0 ? '+' : '−', charge1X, chargeY + 7);

      // Charge 1 label
      ctx.fillStyle = q1 > 0 ? colors.orange : colors.blue;
      ctx.font = '14px system-ui';
      ctx.fillText(`q₁ = ${q1 > 0 ? '+' : ''}${q1} μC`, charge1X, chargeY - 55);

      // Charge 2
      ctx.fillStyle = q2 > 0 ? colors.orange : colors.blue;
      ctx.beginPath();
      ctx.arc(charge2X, chargeY, chargeRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 20px system-ui';
      ctx.fillText(q2 > 0 ? '+' : '−', charge2X, chargeY + 7);

      // Charge 2 label
      ctx.fillStyle = q2 > 0 ? colors.orange : colors.blue;
      ctx.font = '14px system-ui';
      ctx.fillText(`q₂ = ${q2 > 0 ? '+' : ''}${q2} μC`, charge2X, chargeY - 55);

      // Distance line
      const lineY = chargeY + 60;
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(charge1X, lineY);
      ctx.lineTo(charge2X, lineY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = colors.green;
      ctx.font = 'bold 14px system-ui';
      ctx.fillText(`r = ${r} cm`, width / 2, lineY + 25);

      // Calculate force
      const q1_C = q1 * 1e-6;
      const q2_C = q2 * 1e-6;
      const r_m = r * 0.01;
      const F = k * Math.abs(q1_C * q2_C) / (r_m * r_m);

      const isAttractive = (q1 * q2) < 0;
      const forceScale = Math.min(60, Math.log10(F + 1) * 20);

      // Force vectors
      if (isAttractive) {
        // Attractive force - arrows pointing towards each other
        ctx.strokeStyle = colors.purple;
        ctx.lineWidth = 4;
        // Force on q1 towards q2
        ctx.beginPath();
        ctx.moveTo(charge1X + chargeRadius + 10, chargeY);
        ctx.lineTo(charge1X + chargeRadius + 10 + forceScale, chargeY);
        ctx.stroke();
        ctx.fillStyle = colors.purple;
        ctx.beginPath();
        ctx.moveTo(charge1X + chargeRadius + 10 + forceScale, chargeY);
        ctx.lineTo(charge1X + chargeRadius + 10 + forceScale - 10, chargeY - 6);
        ctx.lineTo(charge1X + chargeRadius + 10 + forceScale - 10, chargeY + 6);
        ctx.closePath();
        ctx.fill();

        // Force on q2 towards q1
        ctx.beginPath();
        ctx.moveTo(charge2X - chargeRadius - 10, chargeY);
        ctx.lineTo(charge2X - chargeRadius - 10 - forceScale, chargeY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(charge2X - chargeRadius - 10 - forceScale, chargeY);
        ctx.lineTo(charge2X - chargeRadius - 10 - forceScale + 10, chargeY - 6);
        ctx.lineTo(charge2X - chargeRadius - 10 - forceScale + 10, chargeY + 6);
        ctx.closePath();
        ctx.fill();
      } else {
        // Repulsive force - arrows pointing away
        ctx.strokeStyle = colors.yellow;
        ctx.lineWidth = 4;
        // Force on q1 away from q2
        ctx.beginPath();
        ctx.moveTo(charge1X - chargeRadius - 10, chargeY);
        ctx.lineTo(charge1X - chargeRadius - 10 - forceScale, chargeY);
        ctx.stroke();
        ctx.fillStyle = colors.yellow;
        ctx.beginPath();
        ctx.moveTo(charge1X - chargeRadius - 10 - forceScale, chargeY);
        ctx.lineTo(charge1X - chargeRadius - 10 - forceScale + 10, chargeY - 6);
        ctx.lineTo(charge1X - chargeRadius - 10 - forceScale + 10, chargeY + 6);
        ctx.closePath();
        ctx.fill();

        // Force on q2 away from q1
        ctx.beginPath();
        ctx.moveTo(charge2X + chargeRadius + 10, chargeY);
        ctx.lineTo(charge2X + chargeRadius + 10 + forceScale, chargeY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(charge2X + chargeRadius + 10 + forceScale, chargeY);
        ctx.lineTo(charge2X + chargeRadius + 10 + forceScale - 10, chargeY - 6);
        ctx.lineTo(charge2X + chargeRadius + 10 + forceScale - 10, chargeY + 6);
        ctx.closePath();
        ctx.fill();
      }

      // k constant box
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 2;
      ctx.strokeRect(20, height - 80, 180, 50);
      ctx.fillStyle = colors.cyan;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('k = 9 × 10⁹ N·m²/C²', 30, height - 55);
      ctx.fillText('(Coulomb constant)', 30, height - 40);

      info.innerHTML = `
        <div class="info-item">Force F = <strong>${F.toExponential(3)} N</strong></div>
        <div class="info-item">Type: <strong style="color: ${isAttractive ? '#a855f7' : '#eab308'}">${isAttractive ? 'Attractive (opposite charges)' : 'Repulsive (like charges)'}</strong></div>
        <div class="info-item">F ∝ q₁q₂ and F ∝ 1/r²</div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Ohm's Law Visualization
  formulaOhmsLaw(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const vSlider = this.createSlider(controls, 'Voltage V', 1, 24, 12, 1, ' V');
    const rSlider = this.createSlider(controls, 'Resistance R', 1, 100, 10, 1, ' Ω');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let t = 0;

    const animate = () => {
      const colors = self.getColors();
      const V = parseFloat(vSlider.value);
      const R = parseFloat(rSlider.value);
      const I = V / R;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title and Formula
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 18px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText("Ohm's Law", width / 2, 30);

      ctx.font = 'bold 28px "Courier New", monospace';
      ctx.fillStyle = colors.green;
      ctx.fillText('V = I × R', width / 2, 70);

      // Draw circuit
      const cx = width / 2;
      const cy = height / 2 + 30;

      // Battery
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy - 50);
      ctx.lineTo(cx - 100, cy - 30);
      ctx.stroke();
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy - 30);
      ctx.lineTo(cx - 100, cy - 10);
      ctx.stroke();
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy - 10);
      ctx.lineTo(cx - 100, cy + 10);
      ctx.stroke();

      // Battery labels
      ctx.fillStyle = colors.orange;
      ctx.font = 'bold 16px system-ui';
      ctx.fillText('+', cx - 100, cy - 55);
      ctx.fillStyle = colors.blue;
      ctx.fillText('−', cx - 100, cy + 30);

      // Voltage label
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - 130, cy - 40);
      ctx.lineTo(cx - 150, cy - 40);
      ctx.lineTo(cx - 150, cy);
      ctx.lineTo(cx - 130, cy);
      ctx.stroke();
      ctx.fillStyle = colors.orange;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'right';
      ctx.fillText(`V = ${V} V`, cx - 155, cy - 15);

      // Wires
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 3;
      // Top wire
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy - 50);
      ctx.lineTo(cx - 100, cy - 80);
      ctx.lineTo(cx + 100, cy - 80);
      ctx.lineTo(cx + 100, cy - 50);
      ctx.stroke();
      // Bottom wire
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy + 10);
      ctx.lineTo(cx - 100, cy + 50);
      ctx.lineTo(cx + 100, cy + 50);
      ctx.lineTo(cx + 100, cy + 10);
      ctx.stroke();

      // Resistor
      ctx.strokeStyle = colors.purple;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx + 100, cy - 50);
      for (let i = 0; i < 6; i++) {
        const y = cy - 50 + (i + 0.5) * 10;
        ctx.lineTo(cx + (i % 2 === 0 ? 115 : 85), y);
      }
      ctx.lineTo(cx + 100, cy + 10);
      ctx.stroke();

      // Resistor label
      ctx.fillStyle = colors.purple;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText(`R = ${R} Ω`, cx + 125, cy - 15);

      // Current flow (animated electrons)
      const electronCount = Math.min(10, Math.floor(I * 2) + 2);
      const speed = I * 0.5;

      for (let i = 0; i < electronCount; i++) {
        const progress = ((t * speed * 0.02 + i / electronCount) % 1);
        let ex, ey;

        if (progress < 0.25) {
          // Top wire left to right
          ex = cx - 100 + (cx + 100 - (cx - 100)) * (progress * 4);
          ey = cy - 80;
        } else if (progress < 0.5) {
          // Right side down
          ex = cx + 100;
          ey = cy - 80 + 130 * ((progress - 0.25) * 4);
        } else if (progress < 0.75) {
          // Bottom wire right to left
          ex = cx + 100 - (cx + 100 - (cx - 100)) * ((progress - 0.5) * 4);
          ey = cy + 50;
        } else {
          // Left side up
          ex = cx - 100;
          ey = cy + 50 - 130 * ((progress - 0.75) * 4);
        }

        ctx.fillStyle = colors.cyan;
        ctx.beginPath();
        ctx.arc(ex, ey, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Current arrow
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - 30, cy - 80);
      ctx.lineTo(cx + 30, cy - 80);
      ctx.stroke();
      ctx.fillStyle = colors.cyan;
      ctx.beginPath();
      ctx.moveTo(cx + 30, cy - 80);
      ctx.lineTo(cx + 20, cy - 86);
      ctx.lineTo(cx + 20, cy - 74);
      ctx.closePath();
      ctx.fill();
      ctx.font = '14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(`I = ${I.toFixed(2)} A`, cx, cy - 95);

      info.innerHTML = `
        <div class="info-item">Current I = V/R = <strong>${I.toFixed(3)} A</strong></div>
        <div class="info-item">Power P = VI = I²R = <strong>${(V * I).toFixed(2)} W</strong></div>
        <div class="info-item">I ∝ V (at constant R), I ∝ 1/R (at constant V)</div>
      `;

      t++;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // Legacy Probability Tree Visualization - replaced by enhanced version at end of file
  // See JEEAnimations.probabilityTree = function() at the bottom for the new implementation
  probabilityTreeLegacy(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const p1Slider = this.createSlider(controls, 'P(A)', 0.1, 0.9, 0.5, 0.1, '');
    const p2Slider = this.createSlider(controls, 'P(B|A)', 0.1, 0.9, 0.6, 0.1, '');
    const p3Slider = this.createSlider(controls, 'P(B|A\')', 0.1, 0.9, 0.3, 0.1, '');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const animate = () => {
      const colors = self.getColors();
      const pA = parseFloat(p1Slider.value);
      const pBA = parseFloat(p2Slider.value);
      const pBAc = parseFloat(p3Slider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const startX = 50;
      const startY = height / 2;
      const level1X = 180;
      const level2X = 350;

      // Level 1 branches
      const aY = startY - 80;
      const acY = startY + 80;

      // Branch to A
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(level1X, aY);
      ctx.stroke();

      // Branch to A'
      ctx.strokeStyle = colors.orange;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(level1X, acY);
      ctx.stroke();

      // Level 2 branches from A
      const abY = aY - 50;
      const abcY = aY + 50;

      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(level1X, aY);
      ctx.lineTo(level2X, abY);
      ctx.stroke();

      ctx.strokeStyle = colors.purple;
      ctx.beginPath();
      ctx.moveTo(level1X, aY);
      ctx.lineTo(level2X, abcY);
      ctx.stroke();

      // Level 2 branches from A'
      const acbY = acY - 50;
      const acbcY = acY + 50;

      ctx.strokeStyle = colors.blue;
      ctx.beginPath();
      ctx.moveTo(level1X, acY);
      ctx.lineTo(level2X, acbY);
      ctx.stroke();

      ctx.strokeStyle = colors.purple;
      ctx.beginPath();
      ctx.moveTo(level1X, acY);
      ctx.lineTo(level2X, acbcY);
      ctx.stroke();

      // Nodes
      ctx.fillStyle = colors.cyan;
      ctx.beginPath();
      ctx.arc(startX, startY, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = colors.green;
      ctx.beginPath();
      ctx.arc(level1X, aY, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(level1X, acY, 8, 0, Math.PI * 2);
      ctx.fill();

      // End nodes
      [[level2X, abY], [level2X, abcY], [level2X, acbY], [level2X, acbcY]].forEach(([x, y]) => {
        ctx.fillStyle = colors.text;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Labels
      ctx.fillStyle = colors.text;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'center';

      ctx.fillText(`P(A)=${pA}`, (startX + level1X)/2 - 20, aY - 20);
      ctx.fillText(`P(A')=${(1-pA).toFixed(1)}`, (startX + level1X)/2 - 20, acY + 30);

      ctx.fillText(`P(B|A)=${pBA}`, (level1X + level2X)/2, abY - 10);
      ctx.fillText(`P(B'|A)=${(1-pBA).toFixed(1)}`, (level1X + level2X)/2, abcY + 20);
      ctx.fillText(`P(B|A')=${pBAc}`, (level1X + level2X)/2, acbY - 10);
      ctx.fillText(`P(B'|A')=${(1-pBAc).toFixed(1)}`, (level1X + level2X)/2, acbcY + 20);

      // Outcome labels
      ctx.textAlign = 'left';
      ctx.fillText('A', level1X + 15, aY + 5);
      ctx.fillText('A\'', level1X + 15, acY + 5);

      ctx.fillText(`A∩B: ${(pA * pBA).toFixed(3)}`, level2X + 15, abY + 5);
      ctx.fillText(`A∩B': ${(pA * (1-pBA)).toFixed(3)}`, level2X + 15, abcY + 5);
      ctx.fillText(`A'∩B: ${((1-pA) * pBAc).toFixed(3)}`, level2X + 15, acbY + 5);
      ctx.fillText(`A'∩B': ${((1-pA) * (1-pBAc)).toFixed(3)}`, level2X + 15, acbcY + 5);

      // Calculate probabilities
      const pB = pA * pBA + (1 - pA) * pBAc;
      const pAB = (pA * pBA) / pB; // Bayes' theorem

      info.innerHTML = `
        <div class="info-item">P(B) = P(A)·P(B|A) + P(A')·P(B|A'): <strong>${pB.toFixed(3)}</strong></div>
        <div class="info-item">P(A|B) = P(A∩B)/P(B): <strong>${pAB.toFixed(3)}</strong></div>
        <div class="info-item">Bayes' Theorem: P(A|B) = P(B|A)·P(A)/P(B)</div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Series Visualization (AP/GP)
  seriesVisualization(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const self = this;
    let seriesType = 'AP';

    this.createButton(controls, 'Arithmetic (AP)', () => { seriesType = 'AP'; render(); });
    this.createButton(controls, 'Geometric (GP)', () => { seriesType = 'GP'; render(); });

    const aSlider = this.createSlider(controls, 'First term (a)', 1, 10, 2, 1, '');
    const dSlider = this.createSlider(controls, 'Common diff/ratio', 1, 5, 2, 0.5, '');
    const nSlider = this.createSlider(controls, 'Number of terms (n)', 1, 10, 5, 1, '');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const render = () => {
      const colors = self.getColors();
      const a = parseFloat(aSlider.value);
      const d = parseFloat(dSlider.value);
      const n = parseInt(nSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Calculate series
      const terms = [];
      let sum = 0;
      for (let i = 0; i < n; i++) {
        const term = seriesType === 'AP' ? a + i * d : a * Math.pow(d, i);
        terms.push(term);
        sum += term;
      }

      // Draw bars
      const barWidth = (width - 100) / n;
      const maxTerm = Math.max(...terms);
      const scale = (height - 120) / (maxTerm * 1.2);

      for (let i = 0; i < n; i++) {
        const barHeight = terms[i] * scale;
        const x = 50 + i * barWidth;
        const y = height - 60 - barHeight;

        // Bar
        ctx.fillStyle = i % 2 === 0 ? colors.blue : colors.cyan;
        ctx.fillRect(x, y, barWidth - 5, barHeight);

        // Value label
        ctx.fillStyle = colors.text;
        ctx.font = '10px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(terms[i].toFixed(1), x + barWidth / 2 - 2.5, y - 5);

        // Term label
        ctx.fillStyle = colors.axisLabel;
        ctx.fillText(`T${i + 1}`, x + barWidth / 2 - 2.5, height - 40);
      }

      // Draw sum line
      const avgHeight = (sum / n) * scale;
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(40, height - 60 - avgHeight);
      ctx.lineTo(width - 40, height - 60 - avgHeight);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = colors.green;
      ctx.font = 'bold 12px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText(`Sum = ${sum.toFixed(2)}`, width - 120, height - 65 - avgHeight);

      // Formulas and info
      if (seriesType === 'AP') {
        const expectedSum = (n / 2) * (2 * a + (n - 1) * d);
        info.innerHTML = `
          <div class="info-item"><strong>Arithmetic Progression</strong></div>
          <div class="info-item">nth term: T<sub>n</sub> = a + (n-1)d = ${a} + ${n-1}×${d} = ${(a + (n-1) * d).toFixed(2)}</div>
          <div class="info-item">Sum: S<sub>n</sub> = n/2 × [2a + (n-1)d] = ${expectedSum.toFixed(2)}</div>
        `;
      } else {
        const r = d;
        const expectedSum = r === 1 ? n * a : a * (Math.pow(r, n) - 1) / (r - 1);
        info.innerHTML = `
          <div class="info-item"><strong>Geometric Progression</strong></div>
          <div class="info-item">nth term: T<sub>n</sub> = ar<sup>n-1</sup> = ${a}×${r}<sup>${n-1}</sup> = ${(a * Math.pow(r, n-1)).toFixed(2)}</div>
          <div class="info-item">Sum: S<sub>n</sub> = a(r<sup>n</sup>-1)/(r-1) = ${expectedSum.toFixed(2)}</div>
        `;
      }
    };

    aSlider.addEventListener('input', render);
    dSlider.addEventListener('input', render);
    nSlider.addEventListener('input', render);

    render();
  },

  // 3D Visualization
  threeDVisualization(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const self = this;
    const angleXSlider = this.createSlider(controls, 'Rotate X', 0, 360, 30, 5, '°');
    const angleYSlider = this.createSlider(controls, 'Rotate Y', 0, 360, 45, 5, '°');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    // Define 3D points
    const points = [
      { x: 0, y: 0, z: 0, label: 'O' },
      { x: 100, y: 0, z: 0, label: 'A' },
      { x: 0, y: 100, z: 0, label: 'B' },
      { x: 0, y: 0, z: 100, label: 'C' },
      { x: 60, y: 80, z: 50, label: 'P' }
    ];

    const project3D = (x, y, z, angleX, angleY) => {
      const radX = angleX * Math.PI / 180;
      const radY = angleY * Math.PI / 180;

      // Rotate around X axis
      let y1 = y * Math.cos(radX) - z * Math.sin(radX);
      let z1 = y * Math.sin(radX) + z * Math.cos(radX);

      // Rotate around Y axis
      let x2 = x * Math.cos(radY) + z1 * Math.sin(radY);
      let z2 = -x * Math.sin(radY) + z1 * Math.cos(radY);

      // Project to 2D (simple orthographic projection)
      const scale = 1.5;
      const offsetX = width / 2;
      const offsetY = height / 2;

      return {
        x: offsetX + x2 * scale,
        y: offsetY - y1 * scale,
        z: z2
      };
    };

    const render = () => {
      const colors = self.getColors();
      const angleX = parseFloat(angleXSlider.value);
      const angleY = parseFloat(angleYSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Project all points
      const projected = points.map(p => ({
        ...project3D(p.x, p.y, p.z, angleX, angleY),
        label: p.label,
        original: p
      }));

      // Draw axes
      const origin = projected[0];
      const xAxis = projected[1];
      const yAxis = projected[2];
      const zAxis = projected[3];

      // X axis (red)
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(xAxis.x, xAxis.y);
      ctx.stroke();
      ctx.fillStyle = colors.orange;
      ctx.font = 'bold 14px system-ui';
      ctx.fillText('X', xAxis.x + 10, xAxis.y);

      // Y axis (green)
      ctx.strokeStyle = colors.green;
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(yAxis.x, yAxis.y);
      ctx.stroke();
      ctx.fillStyle = colors.green;
      ctx.fillText('Y', yAxis.x + 10, yAxis.y);

      // Z axis (blue)
      ctx.strokeStyle = colors.blue;
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(zAxis.x, zAxis.y);
      ctx.stroke();
      ctx.fillStyle = colors.blue;
      ctx.fillText('Z', zAxis.x + 10, zAxis.y);

      // Draw point P
      const pointP = projected[4];
      ctx.fillStyle = colors.cyan;
      ctx.beginPath();
      ctx.arc(pointP.x, pointP.y, 6, 0, Math.PI * 2);
      ctx.fill();

      // Draw projections
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = colors.axisLabel;
      ctx.lineWidth = 1;

      // Line from P to XY plane
      const pXY = project3D(pointP.original.x, pointP.original.y, 0, angleX, angleY);
      ctx.beginPath();
      ctx.moveTo(pointP.x, pointP.y);
      ctx.lineTo(pXY.x, pXY.y);
      ctx.stroke();

      ctx.setLineDash([]);

      // Label
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.fillText('P', pointP.x + 10, pointP.y - 10);

      const p = points[4];
      info.innerHTML = `
        <div class="info-item"><strong>3D Coordinate System</strong></div>
        <div class="info-item">Point P: (${p.x}, ${p.y}, ${p.z})</div>
        <div class="info-item">Distance from origin: ${Math.sqrt(p.x*p.x + p.y*p.y + p.z*p.z).toFixed(2)}</div>
        <div class="info-item">Use sliders to rotate the view</div>
      `;
    };

    angleXSlider.addEventListener('input', render);
    angleYSlider.addEventListener('input', render);

    render();
  },

  // Matrix Visualizer
  matrixVisualizer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const self = this;
    let operation = 'transform';

    this.createButton(controls, 'Transformation', () => { operation = 'transform'; render(); });
    this.createButton(controls, 'Determinant (Area)', () => { operation = 'determinant'; render(); });

    const aSlider = this.createSlider(controls, 'a (1,1)', -3, 3, 2, 0.5, '');
    const bSlider = this.createSlider(controls, 'b (1,2)', -3, 3, 0, 0.5, '');
    const cSlider = this.createSlider(controls, 'c (2,1)', -3, 3, 0, 0.5, '');
    const dSlider = this.createSlider(controls, 'd (2,2)', -3, 3, 2, 0.5, '');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const render = () => {
      const colors = self.getColors();
      const a = parseFloat(aSlider.value);
      const b = parseFloat(bSlider.value);
      const c = parseFloat(cSlider.value);
      const d = parseFloat(dSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const scale = 30;

      // Draw grid
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      for (let i = -8; i <= 8; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX + i * scale, 0);
        ctx.lineTo(centerX + i * scale, height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, centerY + i * scale);
        ctx.lineTo(width, centerY + i * scale);
        ctx.stroke();
      }

      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      if (operation === 'transform') {
        // Original unit square
        ctx.strokeStyle = colors.blue;
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.strokeRect(centerX, centerY - scale, scale, scale);
        ctx.setLineDash([]);

        // Transformed shape
        const p1 = { x: 0, y: 0 };
        const p2 = { x: a, y: -c };
        const p3 = { x: a + b, y: -c - d };
        const p4 = { x: b, y: -d };

        ctx.fillStyle = colors.greenGlow;
        ctx.beginPath();
        ctx.moveTo(centerX + p1.x * scale, centerY + p1.y * scale);
        ctx.lineTo(centerX + p2.x * scale, centerY + p2.y * scale);
        ctx.lineTo(centerX + p3.x * scale, centerY + p3.y * scale);
        ctx.lineTo(centerX + p4.x * scale, centerY + p4.y * scale);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = colors.green;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Vectors
        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + a * scale, centerY - c * scale);
        ctx.stroke();

        ctx.strokeStyle = colors.purple;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + b * scale, centerY - d * scale);
        ctx.stroke();

      } else if (operation === 'determinant') {
        // Show determinant as area
        const det = a * d - b * c;

        // Draw parallelogram
        const p1 = { x: 0, y: 0 };
        const p2 = { x: a, y: -c };
        const p3 = { x: a + b, y: -c - d };
        const p4 = { x: b, y: -d };

        ctx.fillStyle = det >= 0 ? colors.blueGlow : colors.orangeGlow;
        ctx.beginPath();
        ctx.moveTo(centerX + p1.x * scale, centerY + p1.y * scale);
        ctx.lineTo(centerX + p2.x * scale, centerY + p2.y * scale);
        ctx.lineTo(centerX + p3.x * scale, centerY + p3.y * scale);
        ctx.lineTo(centerX + p4.x * scale, centerY + p4.y * scale);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = det >= 0 ? colors.blue : colors.orange;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Area label
        ctx.fillStyle = colors.text;
        ctx.font = 'bold 16px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(`Area = |det| = ${Math.abs(det).toFixed(2)}`, centerX + (a + b) * scale / 2, centerY - (c + d) * scale / 2);
      }

      const det = a * d - b * c;
      info.innerHTML = `
        <div class="info-item"><strong>Matrix: [[${a}, ${b}], [${c}, ${d}]]</strong></div>
        <div class="info-item">Determinant: det(A) = ad - bc = ${det.toFixed(2)}</div>
        <div class="info-item">${det === 0 ? 'Singular matrix (no inverse)' : 'Invertible matrix'}</div>
        <div class="info-item">${operation === 'determinant' ? 'Area represents |determinant|' : 'Unit square transformed by matrix'}</div>
      `;
    };

    aSlider.addEventListener('input', render);
    bSlider.addEventListener('input', render);
    cSlider.addEventListener('input', render);
    dSlider.addEventListener('input', render);

    render();
  },

  // Pascal's Triangle
  pascalTriangle(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const self = this;
    const nSlider = this.createSlider(controls, 'Rows (n)', 1, 9, 6, 1, '');
    const rSlider = this.createSlider(controls, 'Highlight C(n,r) where r =', 0, 8, 2, 1, '');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const binomial = (n, k) => {
      if (k < 0 || k > n) return 0;
      if (k === 0 || k === n) return 1;
      let result = 1;
      for (let i = 1; i <= k; i++) {
        result = result * (n - i + 1) / i;
      }
      return result;
    };

    const render = () => {
      const colors = self.getColors();
      const n = parseInt(nSlider.value);
      const highlightR = parseInt(rSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const startY = 40;
      const rowHeight = 35;
      const colWidth = 50;

      // Update r slider max to current n
      rSlider.max = n;
      if (highlightR > n) {
        rSlider.value = n;
      }

      for (let row = 0; row <= n; row++) {
        const rowWidth = (row + 1) * colWidth;
        const startX = (width - rowWidth) / 2 + colWidth / 2;
        const y = startY + row * rowHeight;

        for (let col = 0; col <= row; col++) {
          const value = binomial(row, col);
          const x = startX + col * colWidth;

          // Highlight if this is C(n, r)
          const isHighlight = row === n && col === highlightR;

          // Circle
          ctx.fillStyle = isHighlight ? colors.orange : colors.blue;
          ctx.beginPath();
          ctx.arc(x, y, 18, 0, Math.PI * 2);
          ctx.fill();

          if (isHighlight) {
            ctx.strokeStyle = colors.yellow;
            ctx.lineWidth = 3;
            ctx.stroke();
          }

          // Value
          ctx.fillStyle = colors.bg;
          ctx.font = 'bold 12px system-ui';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(value, x, y);
        }
      }

      const highlightValue = binomial(n, highlightR);
      info.innerHTML = `
        <div class="info-item"><strong>Pascal's Triangle</strong></div>
        <div class="info-item">Row ${n}: Coefficients of (a+b)<sup>${n}</sup></div>
        <div class="info-item">Highlighted: C(${n}, ${highlightR}) = <sup>${n}</sup>C<sub>${highlightR}</sub> = ${highlightValue}</div>
        <div class="info-item">Each number is the sum of the two above it</div>
      `;
    };

    nSlider.addEventListener('input', render);
    rSlider.addEventListener('input', render);

    render();
  },

  // Derivative Slope
  derivativeSlope(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const self = this;
    const xSlider = this.createSlider(controls, 'Point x', -3, 3, 1, 0.1, '');

    let funcType = 'quadratic';
    this.createButton(controls, 'f(x) = x²', () => { funcType = 'quadratic'; render(); });
    this.createButton(controls, 'f(x) = x³', () => { funcType = 'cubic'; render(); });
    this.createButton(controls, 'f(x) = sin(x)', () => { funcType = 'sin'; render(); });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const f = (x) => {
      if (funcType === 'quadratic') return x * x;
      if (funcType === 'cubic') return x * x * x / 3;
      if (funcType === 'sin') return 2 * Math.sin(x);
      return 0;
    };

    const df = (x) => {
      if (funcType === 'quadratic') return 2 * x;
      if (funcType === 'cubic') return x * x;
      if (funcType === 'sin') return 2 * Math.cos(x);
      return 0;
    };

    const render = () => {
      const colors = self.getColors();
      const px = parseFloat(xSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const scale = 40;

      // Draw grid
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      for (let i = -10; i <= 10; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX + i * scale, 0);
        ctx.lineTo(centerX + i * scale, height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, centerY + i * scale);
        ctx.lineTo(width, centerY + i * scale);
        ctx.stroke();
      }

      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Draw function
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = -width / (2 * scale); x <= width / (2 * scale); x += 0.05) {
        const y = f(x);
        const screenX = centerX + x * scale;
        const screenY = centerY - y * scale;
        if (x === -width / (2 * scale)) {
          ctx.moveTo(screenX, screenY);
        } else {
          ctx.lineTo(screenX, screenY);
        }
      }
      ctx.stroke();

      // Draw point
      const py = f(px);
      const pointX = centerX + px * scale;
      const pointY = centerY - py * scale;

      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(pointX, pointY, 6, 0, Math.PI * 2);
      ctx.fill();

      // Draw tangent line
      const slope = df(px);
      const tangentLength = 3;
      const x1 = px - tangentLength;
      const y1 = py - slope * tangentLength;
      const x2 = px + tangentLength;
      const y2 = py + slope * tangentLength;

      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX + x1 * scale, centerY - y1 * scale);
      ctx.lineTo(centerX + x2 * scale, centerY - y2 * scale);
      ctx.stroke();

      // Labels
      ctx.fillStyle = colors.text;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'left';

      const funcStr = funcType === 'quadratic' ? 'x²' : funcType === 'cubic' ? 'x³/3' : '2sin(x)';
      const derivStr = funcType === 'quadratic' ? '2x' : funcType === 'cubic' ? 'x²' : '2cos(x)';

      info.innerHTML = `
        <div class="info-item"><strong>Derivative as Slope</strong></div>
        <div class="info-item">f(x) = ${funcStr}, f'(x) = ${derivStr}</div>
        <div class="info-item">At x = ${px.toFixed(2)}: f(${px.toFixed(2)}) = ${py.toFixed(2)}</div>
        <div class="info-item">Slope of tangent: f'(${px.toFixed(2)}) = ${slope.toFixed(2)}</div>
      `;
    };

    xSlider.addEventListener('input', render);

    render();
  },

  // Venn Diagram
  vennDiagram(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const self = this;
    let highlighted = 'none';

    this.createButton(controls, 'A only', () => { highlighted = 'A-only'; render(); });
    this.createButton(controls, 'B only', () => { highlighted = 'B-only'; render(); });
    this.createButton(controls, 'A ∩ B', () => { highlighted = 'intersection'; render(); });
    this.createButton(controls, 'A ∪ B', () => { highlighted = 'union'; render(); });
    this.createButton(controls, 'Clear', () => { highlighted = 'none'; render(); });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const render = () => {
      const colors = self.getColors();

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const centerY = height / 2;
      const r = 80;
      const ax = width / 2 - 50;
      const bx = width / 2 + 50;

      // Draw universal set
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.strokeRect(40, 40, width - 80, height - 80);
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '14px system-ui';
      ctx.fillText('U', 50, 60);

      // Highlight regions
      ctx.globalAlpha = 0.5;

      if (highlighted === 'A-only') {
        ctx.fillStyle = colors.blue;
        ctx.beginPath();
        ctx.arc(ax, centerY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(bx, centerY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
      } else if (highlighted === 'B-only') {
        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.arc(bx, centerY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(ax, centerY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
      } else if (highlighted === 'intersection') {
        ctx.fillStyle = colors.green;
        ctx.save();
        ctx.beginPath();
        ctx.arc(ax, centerY, r, 0, Math.PI * 2);
        ctx.clip();
        ctx.beginPath();
        ctx.arc(bx, centerY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      } else if (highlighted === 'union') {
        ctx.fillStyle = colors.purple;
        ctx.beginPath();
        ctx.arc(ax, centerY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(bx, centerY, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      // Draw circles
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(ax, centerY, r, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(bx, centerY, r, 0, Math.PI * 2);
      ctx.stroke();

      // Labels
      ctx.fillStyle = colors.blue;
      ctx.font = 'bold 24px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('A', ax - 40, centerY);

      ctx.fillStyle = colors.orange;
      ctx.fillText('B', bx + 40, centerY);

      const descriptions = {
        'A-only': 'A - B: Elements in A but not in B',
        'B-only': 'B - A: Elements in B but not in A',
        'intersection': 'A ∩ B: Elements in both A and B',
        'union': 'A ∪ B: Elements in A or B or both',
        'none': 'Click buttons to highlight set operations'
      };

      info.innerHTML = `
        <div class="info-item"><strong>Venn Diagram</strong></div>
        <div class="info-item">${descriptions[highlighted]}</div>
      `;
    };

    render();
  },

  // Conic Sections
  conicSections(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const self = this;
    let conicType = 'circle';

    this.createButton(controls, 'Circle', () => { conicType = 'circle'; render(); });
    this.createButton(controls, 'Ellipse', () => { conicType = 'ellipse'; render(); });
    this.createButton(controls, 'Parabola', () => { conicType = 'parabola'; render(); });
    this.createButton(controls, 'Hyperbola', () => { conicType = 'hyperbola'; render(); });

    const aSlider = this.createSlider(controls, 'Parameter a', 1, 5, 3, 0.5, '');
    const bSlider = this.createSlider(controls, 'Parameter b', 1, 5, 2, 0.5, '');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const render = () => {
      const colors = self.getColors();
      const a = parseFloat(aSlider.value);
      const b = parseFloat(bSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const scale = 30;

      // Draw grid
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      for (let i = -10; i <= 10; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX + i * scale, 0);
        ctx.lineTo(centerX + i * scale, height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, centerY + i * scale);
        ctx.lineTo(width, centerY + i * scale);
        ctx.stroke();
      }

      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Draw conic
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 3;

      if (conicType === 'circle') {
        ctx.beginPath();
        ctx.arc(centerX, centerY, a * scale, 0, Math.PI * 2);
        ctx.stroke();

        // Center
        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
        ctx.fill();

        info.innerHTML = `
          <div class="info-item"><strong>Circle</strong></div>
          <div class="info-item">Equation: x² + y² = r²</div>
          <div class="info-item">Radius: r = ${a.toFixed(1)}</div>
          <div class="info-item">Eccentricity: e = 0</div>
        `;

      } else if (conicType === 'ellipse') {
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, a * scale, b * scale, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Foci
        const c = Math.sqrt(Math.abs(a * a - b * b));
        const e = c / Math.max(a, b);

        if (a > b) {
          ctx.fillStyle = colors.orange;
          ctx.beginPath();
          ctx.arc(centerX - c * scale, centerY, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(centerX + c * scale, centerY, 4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = colors.orange;
          ctx.beginPath();
          ctx.arc(centerX, centerY - c * scale, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(centerX, centerY + c * scale, 4, 0, Math.PI * 2);
          ctx.fill();
        }

        info.innerHTML = `
          <div class="info-item"><strong>Ellipse</strong></div>
          <div class="info-item">Equation: x²/a² + y²/b² = 1</div>
          <div class="info-item">Semi-major: a = ${a.toFixed(1)}, Semi-minor: b = ${b.toFixed(1)}</div>
          <div class="info-item">Eccentricity: e = ${e.toFixed(3)}</div>
        `;

      } else if (conicType === 'parabola') {
        ctx.beginPath();
        for (let x = -width / (2 * scale); x <= width / (2 * scale); x += 0.05) {
          const y = x * x / (4 * a);
          const screenX = centerX + x * scale;
          const screenY = centerY - y * scale;
          if (x === -width / (2 * scale)) {
            ctx.moveTo(screenX, screenY);
          } else {
            ctx.lineTo(screenX, screenY);
          }
        }
        ctx.stroke();

        // Focus
        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.arc(centerX, centerY - a * scale, 4, 0, Math.PI * 2);
        ctx.fill();

        // Directrix
        ctx.strokeStyle = colors.green;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(0, centerY + a * scale);
        ctx.lineTo(width, centerY + a * scale);
        ctx.stroke();
        ctx.setLineDash([]);

        info.innerHTML = `
          <div class="info-item"><strong>Parabola</strong></div>
          <div class="info-item">Equation: y² = 4ax</div>
          <div class="info-item">Parameter: a = ${a.toFixed(1)}</div>
          <div class="info-item">Eccentricity: e = 1</div>
        `;

      } else if (conicType === 'hyperbola') {
        ctx.beginPath();
        for (let x = -width / (2 * scale); x <= width / (2 * scale); x += 0.05) {
          const ySquared = (b * b / (a * a)) * (x * x - a * a);
          if (ySquared >= 0) {
            const y1 = Math.sqrt(ySquared);
            const y2 = -Math.sqrt(ySquared);
            const screenX = centerX + x * scale;
            ctx.lineTo(screenX, centerY - y1 * scale);
          }
        }
        ctx.stroke();

        ctx.beginPath();
        for (let x = width / (2 * scale); x >= -width / (2 * scale); x -= 0.05) {
          const ySquared = (b * b / (a * a)) * (x * x - a * a);
          if (ySquared >= 0) {
            const y2 = -Math.sqrt(ySquared);
            const screenX = centerX + x * scale;
            ctx.lineTo(screenX, centerY - y2 * scale);
          }
        }
        ctx.stroke();

        // Foci
        const c = Math.sqrt(a * a + b * b);
        const e = c / a;

        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.arc(centerX - c * scale, centerY, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(centerX + c * scale, centerY, 4, 0, Math.PI * 2);
        ctx.fill();

        // Asymptotes
        ctx.strokeStyle = colors.green;
        ctx.setLineDash([5, 5]);
        const slope = b / a;
        ctx.beginPath();
        ctx.moveTo(0, centerY - slope * (centerX / scale) * scale);
        ctx.lineTo(width, centerY + slope * ((width - centerX) / scale) * scale);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, centerY + slope * (centerX / scale) * scale);
        ctx.lineTo(width, centerY - slope * ((width - centerX) / scale) * scale);
        ctx.stroke();
        ctx.setLineDash([]);

        info.innerHTML = `
          <div class="info-item"><strong>Hyperbola</strong></div>
          <div class="info-item">Equation: x²/a² - y²/b² = 1</div>
          <div class="info-item">a = ${a.toFixed(1)}, b = ${b.toFixed(1)}</div>
          <div class="info-item">Eccentricity: e = ${e.toFixed(3)}</div>
        `;
      }
    };

    aSlider.addEventListener('input', render);
    bSlider.addEventListener('input', render);

    render();
  },

  // Central Tendency
  centralTendency(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const self = this;

    // Generate random data
    let data = [12, 15, 18, 18, 20, 22, 22, 22, 25, 28, 30, 35];

    this.createButton(controls, 'Random Data', () => {
      data = [];
      const n = 10 + Math.floor(Math.random() * 10);
      for (let i = 0; i < n; i++) {
        data.push(Math.floor(Math.random() * 40) + 10);
      }
      data.sort((a, b) => a - b);
      render();
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const render = () => {
      const colors = self.getColors();

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Calculate statistics
      const sum = data.reduce((a, b) => a + b, 0);
      const mean = sum / data.length;
      const median = data.length % 2 === 0
        ? (data[data.length / 2 - 1] + data[data.length / 2]) / 2
        : data[Math.floor(data.length / 2)];

      // Mode
      const freq = {};
      data.forEach(x => freq[x] = (freq[x] || 0) + 1);
      const maxFreq = Math.max(...Object.values(freq));
      const modes = Object.keys(freq).filter(k => freq[k] === maxFreq).map(Number);
      const mode = modes[0];

      // Draw histogram
      const min = Math.min(...data);
      const max = Math.max(...data);
      const range = max - min;
      const binWidth = Math.max(2, Math.ceil(range / 8));
      const bins = [];

      for (let i = min; i <= max; i += binWidth) {
        bins.push({
          start: i,
          end: i + binWidth,
          count: data.filter(x => x >= i && x < i + binWidth).length
        });
      }

      const maxCount = Math.max(...bins.map(b => b.count));
      const barWidth = (width - 100) / bins.length;
      const scaleY = (height - 150) / maxCount;

      bins.forEach((bin, i) => {
        const x = 50 + i * barWidth;
        const barHeight = bin.count * scaleY;
        const y = height - 100 - barHeight;

        ctx.fillStyle = colors.blue;
        ctx.fillRect(x, y, barWidth - 5, barHeight);

        ctx.fillStyle = colors.axisLabel;
        ctx.font = '10px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(bin.start, x + barWidth / 2 - 2.5, height - 80);
      });

      // Draw mean line
      const meanX = 50 + ((mean - min) / range) * (bins.length * barWidth);
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(meanX, height - 100);
      ctx.lineTo(meanX, 50);
      ctx.stroke();
      ctx.fillStyle = colors.orange;
      ctx.font = 'bold 12px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('Mean', meanX + 5, 65);

      // Draw median line
      const medianX = 50 + ((median - min) / range) * (bins.length * barWidth);
      ctx.strokeStyle = colors.green;
      ctx.beginPath();
      ctx.moveTo(medianX, height - 100);
      ctx.lineTo(medianX, 50);
      ctx.stroke();
      ctx.fillStyle = colors.green;
      ctx.fillText('Median', medianX + 5, 80);

      // Draw mode line
      const modeX = 50 + ((mode - min) / range) * (bins.length * barWidth);
      ctx.strokeStyle = colors.purple;
      ctx.beginPath();
      ctx.moveTo(modeX, height - 100);
      ctx.lineTo(modeX, 50);
      ctx.stroke();
      ctx.fillStyle = colors.purple;
      ctx.fillText('Mode', modeX + 5, 95);

      ctx.setLineDash([]);

      // Axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(45, 50);
      ctx.lineTo(45, height - 95);
      ctx.lineTo(width - 45, height - 95);
      ctx.stroke();

      ctx.fillStyle = colors.text;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Value', width / 2, height - 60);

      info.innerHTML = `
        <div class="info-item"><strong>Measures of Central Tendency</strong></div>
        <div class="info-item">Mean (average): <strong>${mean.toFixed(2)}</strong></div>
        <div class="info-item">Median (middle value): <strong>${median.toFixed(2)}</strong></div>
        <div class="info-item">Mode (most frequent): <strong>${mode}</strong> (frequency: ${maxFreq})</div>
        <div class="info-item">Sample size: n = ${data.length}</div>
      `;
    };

    render();
  },

  // Electromagnetic Induction
  emInduction(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx } = this.createCanvas(container, 500, 350);
    const width = canvas.width;
    const height = canvas.height;

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const speedSlider = this.createSlider(controls, 'Magnet Speed', 1, 10, 5, 0.5, ' m/s');
    const directionBtn = this.createButton(controls, 'Reverse Direction', () => {
      direction *= -1;
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let direction = 1;
    let magnetX = 50;

    const animate = () => {
      const colors = self.getColors();
      const speed = parseFloat(speedSlider.value) / 10;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Update magnet position
      magnetX += speed * direction;
      if (magnetX > width - 50 || magnetX < 50) {
        direction *= -1;
      }

      // Draw coil
      const coilX = width / 2;
      const coilY = height / 2;
      const coilRadius = 60;

      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 4;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(coilX, coilY - 30 + i * 15, coilRadius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw connecting wires
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(coilX - coilRadius, coilY - 30);
      ctx.lineTo(coilX - coilRadius - 30, coilY - 60);
      ctx.moveTo(coilX + coilRadius, coilY + 30);
      ctx.lineTo(coilX + coilRadius + 30, coilY + 60);
      ctx.stroke();

      // Draw magnet
      const magnetHeight = 80;
      const magnetWidth = 40;

      // North pole (red)
      ctx.fillStyle = colors.red;
      ctx.fillRect(magnetX - magnetWidth / 2, coilY - magnetHeight / 2, magnetWidth / 2, magnetHeight);
      ctx.fillStyle = colors.textPrimary;
      ctx.font = 'bold 16px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('N', magnetX - magnetWidth / 4, coilY + 5);

      // South pole (blue)
      ctx.fillStyle = colors.blue;
      ctx.fillRect(magnetX, coilY - magnetHeight / 2, magnetWidth / 2, magnetHeight);
      ctx.fillStyle = colors.textPrimary;
      ctx.fillText('S', magnetX + magnetWidth / 4, coilY + 5);

      // Draw magnetic field lines
      ctx.strokeStyle = colors.green + '60';
      ctx.lineWidth = 1;
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.moveTo(magnetX - magnetWidth / 2 - 20, coilY + i * 15);
        ctx.quadraticCurveTo(magnetX - 50, coilY + i * 30, magnetX + magnetWidth / 2 + 20, coilY + i * 15);
        ctx.stroke();
      }

      // Calculate induced EMF (Faraday's law)
      const velocity = speed * direction * 10;
      const B = 0.5; // Tesla
      const N = 5; // Number of turns
      const A = Math.PI * coilRadius * coilRadius / 10000; // Area in m²
      const emf = Math.abs(N * B * A * velocity);

      // Draw current indication
      if (Math.abs(velocity) > 0.1) {
        const currentDir = velocity > 0 ? 1 : -1;
        ctx.strokeStyle = currentDir > 0 ? colors.yellow : colors.purple;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(coilX - coilRadius - 30, coilY - 60);
        ctx.lineTo(coilX + coilRadius + 30, coilY + 60);
        ctx.stroke();

        // Arrow for current direction
        if (currentDir > 0) {
          ctx.beginPath();
          ctx.moveTo(coilX + coilRadius + 30, coilY + 60);
          ctx.lineTo(coilX + coilRadius + 20, coilY + 55);
          ctx.lineTo(coilX + coilRadius + 25, coilY + 60);
          ctx.lineTo(coilX + coilRadius + 30, coilY + 60);
          ctx.fill();
        }
      }

      // Display information
      info.innerHTML = `
        <div class="info-item">Induced EMF (ε): <strong>${emf.toFixed(4)} V</strong></div>
        <div class="info-item">Number of Turns (N): <strong>${N}</strong></div>
        <div class="info-item">Magnetic Field (B): <strong>${B} T</strong></div>
        <div class="info-item">Faraday's Law: ε = -N(dΦ/dt)</div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Rotational Motion
  rotationalMotion(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx } = this.createCanvas(container, 500, 350);
    const width = canvas.width;
    const height = canvas.height;

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const omegaSlider = this.createSlider(controls, 'Angular Velocity', 0.5, 5, 2, 0.5, ' rad/s');
    const radiusSlider = this.createSlider(controls, 'Radius', 20, 80, 50, 5, ' cm');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let angle = 0;

    const animate = () => {
      const colors = self.getColors();
      const omega = parseFloat(omegaSlider.value);
      const radius = parseFloat(radiusSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw rotation axis
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 100);
      ctx.lineTo(cx, cy + 100);
      ctx.stroke();

      // Draw circular path
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw rotating disk
      ctx.fillStyle = colors.blue + '40';
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Draw radius line
      const pointX = cx + radius * Math.cos(angle);
      const pointY = cy + radius * Math.sin(angle);

      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(pointX, pointY);
      ctx.stroke();

      // Draw point mass
      ctx.fillStyle = colors.red;
      ctx.beginPath();
      ctx.arc(pointX, pointY, 8, 0, Math.PI * 2);
      ctx.fill();

      // Draw velocity vector (tangent)
      const vx = -radius * omega * Math.sin(angle);
      const vy = radius * omega * Math.cos(angle);
      const scale = 5;

      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pointX, pointY);
      ctx.lineTo(pointX + vx * scale, pointY + vy * scale);
      ctx.stroke();

      // Arrow head
      const velAngle = Math.atan2(vy, vx);
      ctx.fillStyle = colors.green;
      ctx.beginPath();
      ctx.moveTo(pointX + vx * scale, pointY + vy * scale);
      ctx.lineTo(
        pointX + vx * scale - 10 * Math.cos(velAngle - 0.3),
        pointY + vy * scale - 10 * Math.sin(velAngle - 0.3)
      );
      ctx.lineTo(
        pointX + vx * scale - 10 * Math.cos(velAngle + 0.3),
        pointY + vy * scale - 10 * Math.sin(velAngle + 0.3)
      );
      ctx.closePath();
      ctx.fill();

      // Draw angular velocity arrow
      ctx.strokeStyle = colors.purple;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 70);
      ctx.lineTo(cx, cy - 100);
      ctx.stroke();

      ctx.fillStyle = colors.purple;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 100);
      ctx.lineTo(cx - 5, cy - 90);
      ctx.lineTo(cx + 5, cy - 90);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = colors.textPrimary;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('ω', cx + 15, cy - 80);

      // Calculate values
      const mass = 1; // kg
      const I = mass * (radius / 100) * (radius / 100); // moment of inertia
      const v = omega * (radius / 100); // linear velocity
      const KE = 0.5 * I * omega * omega; // rotational kinetic energy

      // Update angle
      angle += omega * 0.02;
      if (angle > Math.PI * 2) angle -= Math.PI * 2;

      info.innerHTML = `
        <div class="info-item">Angular Velocity (ω): <strong>${omega.toFixed(2)} rad/s</strong></div>
        <div class="info-item">Linear Velocity (v): <strong>${v.toFixed(2)} m/s</strong></div>
        <div class="info-item">Moment of Inertia (I): <strong>${I.toFixed(4)} kg·m²</strong></div>
        <div class="info-item">Rotational KE: <strong>${KE.toFixed(3)} J</strong></div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Free Body Diagram
  freebodyDiagram(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx } = this.createCanvas(container, 500, 350);
    const width = canvas.width;
    const height = canvas.height;

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const appliedSlider = this.createSlider(controls, 'Applied Force', 0, 100, 50, 5, ' N');
    const frictionSlider = this.createSlider(controls, 'Friction Coeff (μ)', 0, 1, 0.3, 0.05, '');
    const angleSlider = this.createSlider(controls, 'Surface Angle', 0, 45, 0, 5, '°');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const animate = () => {
      const colors = self.getColors();
      const F_applied = parseFloat(appliedSlider.value);
      const mu = parseFloat(frictionSlider.value);
      const theta = parseFloat(angleSlider.value) * Math.PI / 180;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const blockSize = 60;

      // Draw inclined surface
      ctx.save();
      ctx.translate(cx, cy + 50);
      ctx.rotate(theta);

      ctx.fillStyle = colors.grid;
      ctx.fillRect(-150, 0, 300, 20);

      // Draw surface pattern
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      for (let i = -150; i < 150; i += 10) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i - 5, 10);
        ctx.stroke();
      }

      ctx.restore();

      // Draw block
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(theta);

      ctx.fillStyle = colors.blue;
      ctx.strokeStyle = colors.textPrimary;
      ctx.lineWidth = 2;
      ctx.fillRect(-blockSize / 2, -blockSize / 2 - blockSize, blockSize, blockSize);
      ctx.strokeRect(-blockSize / 2, -blockSize / 2 - blockSize, blockSize, blockSize);

      ctx.restore();

      // Calculate forces
      const mass = 10; // kg
      const g = 9.8; // m/s²
      const W = mass * g; // Weight
      const N = W * Math.cos(theta); // Normal force
      const F_gravity_parallel = W * Math.sin(theta); // Component parallel to surface
      const F_friction = mu * N; // Friction force

      const scale = 0.5;

      // Draw weight vector
      ctx.strokeStyle = colors.red;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx, cy + W * scale);
      ctx.stroke();

      this.drawArrow(ctx, cx, cy, cx, cy + W * scale, colors.red);

      ctx.fillStyle = colors.red;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('W = mg', cx + 30, cy + W * scale / 2);

      // Draw normal force
      const normalX = -Math.sin(theta) * N * scale;
      const normalY = -Math.cos(theta) * N * scale;

      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + normalX, cy + normalY);
      ctx.stroke();

      this.drawArrow(ctx, cx, cy, cx + normalX, cy + normalY, colors.green);

      ctx.fillStyle = colors.green;
      ctx.fillText('N', cx + normalX / 2 - 20, cy + normalY / 2);

      // Draw applied force
      if (F_applied > 0) {
        const appliedX = Math.cos(theta) * F_applied * scale;
        const appliedY = -Math.sin(theta) * F_applied * scale;

        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + appliedX, cy + appliedY);
        ctx.stroke();

        this.drawArrow(ctx, cx, cy, cx + appliedX, cy + appliedY, colors.orange);

        ctx.fillStyle = colors.orange;
        ctx.fillText('F', cx + appliedX / 2, cy + appliedY / 2 - 15);
      }

      // Draw friction force
      if (F_friction > 0) {
        const frictionX = -Math.cos(theta) * F_friction * scale;
        const frictionY = Math.sin(theta) * F_friction * scale;

        ctx.strokeStyle = colors.purple;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + frictionX, cy + frictionY);
        ctx.stroke();

        this.drawArrow(ctx, cx, cy, cx + frictionX, cy + frictionY, colors.purple);

        ctx.fillStyle = colors.purple;
        ctx.fillText('f', cx + frictionX / 2, cy + frictionY / 2 + 20);
      }

      // Calculate net force
      const F_net_parallel = F_applied - F_friction - F_gravity_parallel;
      const acceleration = F_net_parallel / mass;

      info.innerHTML = `
        <div class="info-item">Weight (W): <strong>${W.toFixed(1)} N</strong></div>
        <div class="info-item">Normal Force (N): <strong>${N.toFixed(1)} N</strong></div>
        <div class="info-item">Friction (f): <strong>${F_friction.toFixed(1)} N</strong></div>
        <div class="info-item">Net Force: <strong>${F_net_parallel.toFixed(1)} N</strong></div>
        <div class="info-item">Acceleration: <strong>${acceleration.toFixed(2)} m/s²</strong></div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Velocity-Time Graph
  velocityTime(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx } = this.createCanvas(container, 500, 350);
    const width = canvas.width;
    const height = canvas.height;

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const v0Slider = this.createSlider(controls, 'Initial Velocity', 0, 50, 20, 5, ' m/s');
    const accelSlider = this.createSlider(controls, 'Acceleration', -10, 10, 2, 1, ' m/s²');
    const timeSlider = this.createSlider(controls, 'Time', 1, 10, 5, 1, ' s');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const animate = () => {
      const colors = self.getColors();
      const v0 = parseFloat(v0Slider.value);
      const a = parseFloat(accelSlider.value);
      const maxTime = parseFloat(timeSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const margin = 50;
      const graphWidth = width - 2 * margin;
      const graphHeight = height - 2 * margin;
      const originX = margin;
      const originY = height - margin;

      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(originX, margin);
      ctx.lineTo(originX, originY);
      ctx.lineTo(width - margin, originY);
      ctx.stroke();

      // Draw grid
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      for (let i = 0; i <= 10; i++) {
        const x = originX + (graphWidth * i) / 10;
        ctx.beginPath();
        ctx.moveTo(x, originY);
        ctx.lineTo(x, margin);
        ctx.stroke();

        const y = originY - (graphHeight * i) / 10;
        ctx.beginPath();
        ctx.moveTo(originX, y);
        ctx.lineTo(width - margin, y);
        ctx.stroke();
      }

      // Calculate velocity range for scaling
      const v_final = v0 + a * maxTime;
      const v_max = Math.max(Math.abs(v0), Math.abs(v_final), 10);
      const v_scale = graphHeight / (2 * v_max);
      const t_scale = graphWidth / maxTime;

      // Draw v-t graph
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 3;
      ctx.beginPath();

      const points = [];
      for (let t = 0; t <= maxTime; t += 0.1) {
        const v = v0 + a * t;
        const x = originX + t * t_scale;
        const y = originY - (v * v_scale + graphHeight / 2 - v0 * v_scale);

        if (t === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        points.push({ t, v, x, y });
      }
      ctx.stroke();

      // Shade area under curve (displacement)
      ctx.fillStyle = colors.blue + '30';
      ctx.beginPath();
      ctx.moveTo(originX, originY - (graphHeight / 2 - v0 * v_scale));
      for (const point of points) {
        ctx.lineTo(point.x, point.y);
      }
      ctx.lineTo(originX + maxTime * t_scale, originY - graphHeight / 2);
      ctx.closePath();
      ctx.fill();

      // Draw zero velocity line
      ctx.strokeStyle = colors.red + '60';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(originX, originY - graphHeight / 2);
      ctx.lineTo(width - margin, originY - graphHeight / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Labels
      ctx.fillStyle = colors.textPrimary;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Time (s)', width / 2, height - 10);

      ctx.save();
      ctx.translate(15, height / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText('Velocity (m/s)', 0, 0);
      ctx.restore();

      // Draw axis labels
      ctx.font = '12px system-ui';
      ctx.textAlign = 'center';
      for (let i = 0; i <= maxTime; i += Math.ceil(maxTime / 5)) {
        const x = originX + (i / maxTime) * graphWidth;
        ctx.fillText(i.toString(), x, originY + 20);
      }

      ctx.textAlign = 'right';
      for (let i = -v_max; i <= v_max; i += Math.ceil(v_max / 2)) {
        const y = originY - ((i * v_scale) + graphHeight / 2 - v0 * v_scale);
        if (y >= margin && y <= originY) {
          ctx.fillText(i.toFixed(0), originX - 10, y + 5);
        }
      }

      // Calculate displacement (area under curve)
      const displacement = v0 * maxTime + 0.5 * a * maxTime * maxTime;

      info.innerHTML = `
        <div class="info-item">Initial Velocity (v₀): <strong>${v0} m/s</strong></div>
        <div class="info-item">Final Velocity (v): <strong>${v_final.toFixed(1)} m/s</strong></div>
        <div class="info-item">Acceleration (a): <strong>${a} m/s²</strong></div>
        <div class="info-item">Displacement (area): <strong>${displacement.toFixed(1)} m</strong></div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Orbital Motion
  orbitalMotion(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx } = this.createCanvas(container, 500, 350);
    const width = canvas.width;
    const height = canvas.height;

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const eccentricitySlider = this.createSlider(controls, 'Eccentricity', 0, 0.9, 0.5, 0.1, '');
    const speedSlider = this.createSlider(controls, 'Orbital Speed', 0.5, 5, 2, 0.5, 'x');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let angle = 0;

    const animate = () => {
      const colors = self.getColors();
      const e = parseFloat(eccentricitySlider.value);
      const speed = parseFloat(speedSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Ellipse parameters
      const a = 150; // Semi-major axis
      const b = a * Math.sqrt(1 - e * e); // Semi-minor axis
      const c = a * e; // Distance from center to focus

      // Draw elliptical orbit
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.ellipse(cx, cy, a, b, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Sun at focus
      const sunX = cx - c;
      const sunY = cy;

      ctx.fillStyle = colors.yellow;
      ctx.beginPath();
      ctx.arc(sunX, sunY, 20, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = colors.textPrimary;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Sun', sunX, sunY + 35);

      // Calculate planet position on ellipse
      const r = (a * (1 - e * e)) / (1 + e * Math.cos(angle));
      const planetX = cx + r * Math.cos(angle) - c;
      const planetY = cy + r * Math.sin(angle);

      // Draw planet
      ctx.fillStyle = colors.blue;
      ctx.beginPath();
      ctx.arc(planetX, planetY, 10, 0, Math.PI * 2);
      ctx.fill();

      // Draw line from Sun to planet
      ctx.strokeStyle = colors.orange + '60';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(sunX, sunY);
      ctx.lineTo(planetX, planetY);
      ctx.stroke();

      // Draw velocity vector
      const vx = -r * Math.sin(angle);
      const vy = r * Math.cos(angle);
      const v_scale = 0.3;

      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(planetX, planetY);
      ctx.lineTo(planetX + vx * v_scale, planetY + vy * v_scale);
      ctx.stroke();

      this.drawArrow(ctx, planetX, planetY, planetX + vx * v_scale, planetY + vy * v_scale, colors.green);

      // Draw area swept (Kepler's 2nd law visualization)
      ctx.fillStyle = colors.purple + '20';
      ctx.strokeStyle = colors.purple;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(sunX, sunY);
      ctx.arc(cx - c, cy, r, angle - 0.3, angle);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw semi-major and semi-minor axes
      ctx.strokeStyle = colors.red + '40';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(cx - a, cy);
      ctx.lineTo(cx + a, cy);
      ctx.moveTo(cx, cy - b);
      ctx.lineTo(cx, cy + b);
      ctx.stroke();
      ctx.setLineDash([]);

      // Update angle (Kepler's 2nd law: variable speed)
      const angularSpeed = speed * 0.01 * (1 / (r / a));
      angle += angularSpeed;
      if (angle > Math.PI * 2) angle -= Math.PI * 2;

      // Calculate orbital period (Kepler's 3rd law)
      const T_earth = 1; // Earth's period in years
      const a_earth = 1; // Earth's semi-major axis in AU
      const T = T_earth * Math.pow(a / (a_earth * 150), 1.5); // Period in years

      info.innerHTML = `
        <div class="info-item">Eccentricity (e): <strong>${e.toFixed(2)}</strong></div>
        <div class="info-item">Semi-major axis (a): <strong>${(a / 150).toFixed(2)} AU</strong></div>
        <div class="info-item">Semi-minor axis (b): <strong>${(b / 150).toFixed(2)} AU</strong></div>
        <div class="info-item">Orbital Period (T): <strong>${T.toFixed(2)} years</strong></div>
        <div class="info-item">Kepler's 3rd Law: T² ∝ a³</div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Thermodynamics Process
  thermodynamicsProcess(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx } = this.createCanvas(container, 500, 350);
    const width = canvas.width;
    const height = canvas.height;

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    let processType = 'isothermal';
    const processBtn = this.createButton(controls, 'Process: Isothermal', () => {
      const processes = ['isothermal', 'adiabatic', 'isobaric', 'isochoric'];
      const currentIndex = processes.indexOf(processType);
      processType = processes[(currentIndex + 1) % processes.length];
      processBtn.textContent = 'Process: ' + processType.charAt(0).toUpperCase() + processType.slice(1);
    });

    const volumeSlider = this.createSlider(controls, 'Volume Ratio', 1, 5, 3, 0.5, 'x');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const animate = () => {
      const colors = self.getColors();
      const V_ratio = parseFloat(volumeSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const margin = 50;
      const graphWidth = width - 2 * margin;
      const graphHeight = height - 2 * margin;
      const originX = margin;
      const originY = height - margin;

      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(originX, margin);
      ctx.lineTo(originX, originY);
      ctx.lineTo(width - margin, originY);
      ctx.stroke();

      // Draw grid
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      for (let i = 0; i <= 10; i++) {
        const x = originX + (graphWidth * i) / 10;
        ctx.beginPath();
        ctx.moveTo(x, originY);
        ctx.lineTo(x, margin);
        ctx.stroke();

        const y = originY - (graphHeight * i) / 10;
        ctx.beginPath();
        ctx.moveTo(originX, y);
        ctx.lineTo(width - margin, y);
        ctx.stroke();
      }

      // Initial state
      const V1 = 1;
      const P1 = 5;
      const T1 = 300; // Kelvin
      const gamma = 1.4; // For diatomic gas

      // Final state
      const V2 = V1 * V_ratio;
      let P2, T2, work, heat, deltaU;

      // Calculate based on process type
      if (processType === 'isothermal') {
        // PV = constant, T constant
        P2 = P1 * (V1 / V2);
        T2 = T1;
        work = P1 * V1 * Math.log(V2 / V1);
        heat = work;
        deltaU = 0;
      } else if (processType === 'adiabatic') {
        // PV^γ = constant, Q = 0
        P2 = P1 * Math.pow(V1 / V2, gamma);
        T2 = T1 * Math.pow(V1 / V2, gamma - 1);
        work = (P1 * V1 - P2 * V2) / (gamma - 1);
        heat = 0;
        deltaU = -work;
      } else if (processType === 'isobaric') {
        // P constant
        P2 = P1;
        T2 = T1 * (V2 / V1);
        work = P1 * (V2 - V1);
        deltaU = 1.5 * work; // For ideal gas
        heat = work + deltaU;
      } else { // isochoric
        // V constant
        P2 = P1;
        T2 = T1;
        work = 0;
        heat = 0;
        deltaU = 0;
      }

      // Scaling
      const V_max = Math.max(V2, 5);
      const P_max = Math.max(P1, P2, 5);
      const V_scale = graphWidth / V_max;
      const P_scale = graphHeight / P_max;

      // Draw process curve
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 3;
      ctx.beginPath();

      const steps = 100;
      for (let i = 0; i <= steps; i++) {
        const V = V1 + (V2 - V1) * (i / steps);
        let P;

        if (processType === 'isothermal') {
          P = P1 * V1 / V;
        } else if (processType === 'adiabatic') {
          P = P1 * Math.pow(V1 / V, gamma);
        } else if (processType === 'isobaric') {
          P = P1;
        } else { // isochoric
          P = P1 + (P2 - P1) * (i / steps);
        }

        const x = originX + V * V_scale;
        const y = originY - P * P_scale;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Draw start and end points
      const x1 = originX + V1 * V_scale;
      const y1 = originY - P1 * P_scale;
      const x2 = originX + V2 * V_scale;
      const y2 = originY - P2 * P_scale;

      ctx.fillStyle = colors.green;
      ctx.beginPath();
      ctx.arc(x1, y1, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = colors.red;
      ctx.beginPath();
      ctx.arc(x2, y2, 8, 0, Math.PI * 2);
      ctx.fill();

      // Labels
      ctx.fillStyle = colors.textPrimary;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Volume (V)', width / 2, height - 10);

      ctx.save();
      ctx.translate(15, height / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText('Pressure (P)', 0, 0);
      ctx.restore();

      ctx.fillStyle = colors.green;
      ctx.fillText('A', x1 - 20, y1 - 10);

      ctx.fillStyle = colors.red;
      ctx.fillText('B', x2 + 20, y2 - 10);

      // Process description
      let processDesc = '';
      if (processType === 'isothermal') {
        processDesc = 'Isothermal: PV = constant, ΔU = 0, Q = W';
      } else if (processType === 'adiabatic') {
        processDesc = 'Adiabatic: PV^γ = constant, Q = 0, ΔU = -W';
      } else if (processType === 'isobaric') {
        processDesc = 'Isobaric: P = constant, W = PΔV';
      } else {
        processDesc = 'Isochoric: V = constant, W = 0, Q = ΔU';
      }

      info.innerHTML = `
        <div class="info-item">${processDesc}</div>
        <div class="info-item">Work Done (W): <strong>${work.toFixed(2)} J</strong></div>
        <div class="info-item">Heat Transfer (Q): <strong>${heat.toFixed(2)} J</strong></div>
        <div class="info-item">Change in Internal Energy (ΔU): <strong>${deltaU.toFixed(2)} J</strong></div>
        <div class="info-item">Final Temperature: <strong>${T2.toFixed(1)} K</strong></div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Wave Function
  waveFunction(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx } = this.createCanvas(container, 500, 350);
    const width = canvas.width;
    const height = canvas.height;

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const nSlider = this.createSlider(controls, 'Quantum Number (n)', 1, 5, 1, 1, '');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let phase = 0;

    const animate = () => {
      const colors = self.getColors();
      const n = parseInt(nSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const margin = 50;
      const boxWidth = width - 2 * margin;
      const boxHeight = height - 2 * margin;
      const L = boxWidth; // Box length

      // Draw potential box
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(margin, margin);
      ctx.lineTo(margin, height - margin);
      ctx.lineTo(width - margin, height - margin);
      ctx.lineTo(width - margin, margin);
      ctx.stroke();

      // Calculate wave function parameters
      const centerY = height / 2;
      const amplitude = boxHeight / 4;

      // Draw wave function ψ(x)
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2;
      ctx.beginPath();

      const points = [];
      for (let x = 0; x <= L; x += 2) {
        const position = x / L; // Normalized position (0 to 1)
        const psi = Math.sqrt(2 / L) * Math.sin(n * Math.PI * position) * Math.cos(phase);
        const canvasX = margin + x;
        const canvasY = centerY - psi * amplitude;

        if (x === 0) {
          ctx.moveTo(canvasX, canvasY);
        } else {
          ctx.lineTo(canvasX, canvasY);
        }

        points.push({ x: canvasX, y: canvasY, psi });
      }
      ctx.stroke();

      // Draw probability density |ψ|²
      ctx.fillStyle = colors.purple + '40';
      ctx.strokeStyle = colors.purple;
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let x = 0; x <= L; x += 2) {
        const position = x / L;
        const psi = Math.sqrt(2 / L) * Math.sin(n * Math.PI * position);
        const psi_squared = psi * psi * L / 2; // Normalized probability density
        const canvasX = margin + x;
        const canvasY = height - margin - psi_squared * amplitude * 2;

        if (x === 0) {
          ctx.moveTo(canvasX, height - margin);
          ctx.lineTo(canvasX, canvasY);
        } else {
          ctx.lineTo(canvasX, canvasY);
        }
      }
      ctx.lineTo(width - margin, height - margin);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw zero line
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(margin, centerY);
      ctx.lineTo(width - margin, centerY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw nodes (zeros of wave function)
      ctx.fillStyle = colors.red;
      for (let i = 1; i < n; i++) {
        const nodeX = margin + (i / n) * L;
        ctx.beginPath();
        ctx.arc(nodeX, centerY, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Labels
      ctx.fillStyle = colors.textPrimary;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'center';

      ctx.fillStyle = colors.blue;
      ctx.fillText('ψ(x) - Wave Function', width / 2, 30);

      ctx.fillStyle = colors.purple;
      ctx.fillText('|ψ(x)|² - Probability Density', width / 2, height - 20);

      // Calculate energy
      const h = 6.626e-34; // Planck's constant
      const m = 9.109e-31; // Electron mass
      const L_meters = 1e-9; // 1 nm box
      const E = (n * n * h * h) / (8 * m * L_meters * L_meters);
      const E_eV = E / 1.602e-19; // Convert to eV

      // Update phase
      phase += 0.05;

      info.innerHTML = `
        <div class="info-item">Quantum Number (n): <strong>${n}</strong></div>
        <div class="info-item">Number of Nodes: <strong>${n - 1}</strong></div>
        <div class="info-item">Energy Level: <strong>${E_eV.toFixed(2)} eV</strong></div>
        <div class="info-item">Energy ∝ n²</div>
        <div class="info-item">ψₙ(x) = √(2/L) sin(nπx/L)</div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Magnetic Field
  magneticField(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx } = this.createCanvas(container, 500, 350);
    const width = canvas.width;
    const height = canvas.height;

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const strengthSlider = this.createSlider(controls, 'Field Strength', 1, 10, 5, 1, 'x');

    let sourceType = 'bar_magnet';
    const sourceBtn = this.createButton(controls, 'Source: Bar Magnet', () => {
      sourceType = sourceType === 'bar_magnet' ? 'wire' : 'bar_magnet';
      sourceBtn.textContent = sourceType === 'bar_magnet' ? 'Source: Bar Magnet' : 'Source: Current Wire';
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const animate = () => {
      const colors = self.getColors();
      const strength = parseFloat(strengthSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      if (sourceType === 'bar_magnet') {
        // Draw bar magnet
        const magnetWidth = 30;
        const magnetHeight = 100;

        // North pole (red)
        ctx.fillStyle = colors.red;
        ctx.fillRect(cx - magnetWidth / 2, cy - magnetHeight / 2, magnetWidth / 2, magnetHeight);
        ctx.fillStyle = colors.textPrimary;
        ctx.font = 'bold 18px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('N', cx - magnetWidth / 4, cy + 5);

        // South pole (blue)
        ctx.fillStyle = colors.blue;
        ctx.fillRect(cx, cy - magnetHeight / 2, magnetWidth / 2, magnetHeight);
        ctx.fillStyle = colors.textPrimary;
        ctx.fillText('S', cx + magnetWidth / 4, cy + 5);

        // Draw magnetic field lines
        ctx.strokeStyle = colors.green;
        ctx.lineWidth = 2;

        const numLines = 8;
        for (let i = 0; i < numLines; i++) {
          const offset = (i - numLines / 2 + 0.5) * 15;

          ctx.beginPath();
          // Lines from North pole
          ctx.moveTo(cx - magnetWidth / 2, cy + offset);

          // Curved field lines
          const controlX1 = cx - magnetWidth / 2 - 80 * (strength / 5);
          const controlY1 = cy + offset - 60;
          const controlX2 = cx + magnetWidth / 2 + 80 * (strength / 5);
          const controlY2 = cy - offset - 60;

          ctx.bezierCurveTo(
            controlX1, controlY1,
            controlX2, controlY2,
            cx + magnetWidth / 2, cy - offset
          );
          ctx.stroke();

          // Draw arrow heads
          const arrowSize = 8;
          const arrowX = cx + magnetWidth / 2 + 20;
          const arrowY = cy - offset - 20;

          ctx.fillStyle = colors.green;
          ctx.beginPath();
          ctx.moveTo(arrowX, arrowY);
          ctx.lineTo(arrowX - arrowSize, arrowY - arrowSize / 2);
          ctx.lineTo(arrowX - arrowSize, arrowY + arrowSize / 2);
          ctx.closePath();
          ctx.fill();
        }

        info.innerHTML = `
          <div class="info-item">Source: <strong>Bar Magnet</strong></div>
          <div class="info-item">Field lines: N → S outside, S → N inside</div>
          <div class="info-item">Magnetic dipole field</div>
          <div class="info-item">No magnetic monopoles exist</div>
        `;
      } else {
        // Draw current-carrying wire (cross-section)
        const wireRadius = 15;

        ctx.fillStyle = colors.orange;
        ctx.strokeStyle = colors.textPrimary;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, wireRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Draw current direction (dot = coming out)
        ctx.fillStyle = colors.textPrimary;
        ctx.beginPath();
        ctx.arc(cx, cy, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = '12px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('I', cx, cy - 25);

        // Draw concentric circular field lines
        ctx.strokeStyle = colors.green;
        ctx.lineWidth = 2;

        for (let r = 40; r < 200; r += 30) {
          ctx.beginPath();
          ctx.arc(cx, cy, r * (strength / 5), 0, Math.PI * 2);
          ctx.stroke();

          // Draw arrow heads (counterclockwise for current coming out)
          const arrowAngle = Math.PI / 4;
          const arrowX = cx + r * (strength / 5) * Math.cos(arrowAngle);
          const arrowY = cy + r * (strength / 5) * Math.sin(arrowAngle);

          ctx.fillStyle = colors.green;
          ctx.save();
          ctx.translate(arrowX, arrowY);
          ctx.rotate(arrowAngle + Math.PI / 2);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(-8, -5);
          ctx.lineTo(-8, 5);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }

        // Calculate field strength at a point
        const mu0 = 4 * Math.PI * 1e-7; // Permeability of free space
        const I = 10; // Current in Amperes
        const r = 0.05; // Distance in meters
        const B = (mu0 * I) / (2 * Math.PI * r);

        info.innerHTML = `
          <div class="info-item">Source: <strong>Current Wire</strong></div>
          <div class="info-item">Current (I): <strong>${I} A</strong></div>
          <div class="info-item">Field at r = ${r}m: <strong>${(B * 1e6).toFixed(2)} μT</strong></div>
          <div class="info-item">Right-hand rule: Thumb = I, Fingers = B</div>
          <div class="info-item">B = μ₀I/(2πr)</div>
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Photoelectric Effect
  photoelectricEffect(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx } = this.createCanvas(container, 500, 350);
    const width = canvas.width;
    const height = canvas.height;

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const frequencySlider = this.createSlider(controls, 'Frequency', 4, 10, 7, 0.5, ' ×10¹⁴ Hz');
    const intensitySlider = this.createSlider(controls, 'Intensity', 1, 10, 5, 1, 'x');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    const photons = [];
    const electrons = [];
    let time = 0;

    const animate = () => {
      const colors = self.getColors();
      const frequency = parseFloat(frequencySlider.value); // × 10^14 Hz
      const intensity = parseFloat(intensitySlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const metalX = 200;
      const metalY = height / 2;
      const metalHeight = 200;

      // Draw metal surface
      ctx.fillStyle = colors.grid;
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.fillRect(metalX, metalY - metalHeight / 2, 20, metalHeight);
      ctx.strokeRect(metalX, metalY - metalHeight / 2, 20, metalHeight);

      // Draw metal label
      ctx.fillStyle = colors.textPrimary;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Metal', metalX + 10, metalY + metalHeight / 2 + 30);
      ctx.fillText('Surface', metalX + 10, metalY + metalHeight / 2 + 50);

      // Constants
      const h = 6.626e-34; // Planck's constant
      const c = 3e8; // Speed of light
      const workFunction = 4.5; // eV (work function of metal)
      const freq_Hz = frequency * 1e14; // Actual frequency in Hz
      const photonEnergy = (h * freq_Hz) / 1.602e-19; // in eV

      // Generate photons based on intensity
      if (time % Math.max(1, 10 - intensity) === 0) {
        photons.push({
          x: 50,
          y: metalY - metalHeight / 2 + Math.random() * metalHeight,
          speed: 3
        });
      }

      // Update and draw photons
      ctx.fillStyle = colors.yellow;
      for (let i = photons.length - 1; i >= 0; i--) {
        const photon = photons[i];
        photon.x += photon.speed;

        // Draw photon as wave packet
        ctx.beginPath();
        ctx.arc(photon.x, photon.y, 5, 0, Math.PI * 2);
        ctx.fill();

        // Draw wavy line for photon
        ctx.strokeStyle = colors.yellow;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let j = 0; j < 20; j++) {
          const px = photon.x - 20 + j;
          const py = photon.y + Math.sin(j * 0.5) * 3;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Check collision with metal
        if (photon.x >= metalX) {
          photons.splice(i, 1);

          // Emit electron if energy sufficient
          if (photonEnergy > workFunction) {
            const kineticEnergy = photonEnergy - workFunction;
            electrons.push({
              x: metalX + 20,
              y: photon.y,
              vx: Math.sqrt(kineticEnergy) * 0.5,
              vy: (Math.random() - 0.5) * 2,
              ke: kineticEnergy
            });
          }
        }

        // Remove photons that are off screen
        if (photon.x > width) {
          photons.splice(i, 1);
        }
      }

      // Update and draw electrons
      ctx.fillStyle = colors.blue;
      for (let i = electrons.length - 1; i >= 0; i--) {
        const electron = electrons[i];
        electron.x += electron.vx;
        electron.y += electron.vy;

        // Draw electron
        ctx.beginPath();
        ctx.arc(electron.x, electron.y, 6, 0, Math.PI * 2);
        ctx.fill();

        // Draw electron symbol
        ctx.fillStyle = colors.textPrimary;
        ctx.font = '10px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('e⁻', electron.x, electron.y + 3);
        ctx.fillStyle = colors.blue;

        // Remove electrons that are off screen
        if (electron.x > width || electron.y < 0 || electron.y > height) {
          electrons.splice(i, 1);
        }
      }

      // Draw energy diagram
      const diagramX = 350;
      const diagramY = 100;
      const diagramWidth = 120;
      const diagramHeight = 150;

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.strokeRect(diagramX, diagramY, diagramWidth, diagramHeight);

      // Work function level
      const wfLevel = diagramY + diagramHeight - (workFunction / 10) * diagramHeight;
      ctx.strokeStyle = colors.red;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(diagramX, wfLevel);
      ctx.lineTo(diagramX + diagramWidth, wfLevel);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = colors.red;
      ctx.font = '11px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('φ = ' + workFunction + ' eV', diagramX + 5, wfLevel - 5);

      // Photon energy
      if (photonEnergy <= 10) {
        const peLevel = diagramY + diagramHeight - (photonEnergy / 10) * diagramHeight;
        ctx.fillStyle = colors.yellow;
        ctx.fillRect(diagramX + 10, peLevel, 30, diagramHeight - (peLevel - diagramY));
        ctx.fillText('hν', diagramX + 15, peLevel - 5);
      }

      // Kinetic energy
      if (photonEnergy > workFunction) {
        const keLevel = diagramY + diagramHeight - (photonEnergy / 10) * diagramHeight;
        ctx.fillStyle = colors.green + '80';
        ctx.fillRect(diagramX + 50, keLevel, 30, (photonEnergy - workFunction) / 10 * diagramHeight);
        ctx.fillStyle = colors.green;
        ctx.fillText('KE', diagramX + 55, keLevel + 15);
      }

      time++;

      // Calculate stopping potential
      const stoppingPotential = photonEnergy > workFunction ? photonEnergy - workFunction : 0;
      const maxKE = stoppingPotential;

      info.innerHTML = `
        <div class="info-item">Photon Energy (hν): <strong>${photonEnergy.toFixed(2)} eV</strong></div>
        <div class="info-item">Work Function (φ): <strong>${workFunction} eV</strong></div>
        <div class="info-item">Max KE: <strong>${maxKE.toFixed(2)} eV</strong></div>
        <div class="info-item">Stopping Potential: <strong>${stoppingPotential.toFixed(2)} V</strong></div>
        <div class="info-item">Einstein: KE = hν - φ</div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Dimensional Analysis
  dimensionalAnalysis(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx } = this.createCanvas(container, 500, 350);
    const width = canvas.width;
    const height = canvas.height;

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    let equationType = 'force';
    const equationBtn = this.createButton(controls, 'Equation: Force', () => {
      const equations = ['force', 'energy', 'power', 'pressure', 'velocity'];
      const currentIndex = equations.indexOf(equationType);
      equationType = equations[(currentIndex + 1) % equations.length];
      equationBtn.textContent = 'Equation: ' + equationType.charAt(0).toUpperCase() + equationType.slice(1);
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const animate = () => {
      const colors = self.getColors();

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      let equation, lhs, rhs, dimensions, isHomogeneous;

      // Define equations and their dimensional analysis
      if (equationType === 'force') {
        equation = 'F = ma';
        lhs = { name: 'F', dim: '[M L T⁻²]', M: 1, L: 1, T: -2 };
        rhs = {
          name: 'ma',
          components: [
            { name: 'm', dim: '[M]', M: 1, L: 0, T: 0 },
            { name: 'a', dim: '[L T⁻²]', M: 0, L: 1, T: -2 }
          ],
          dim: '[M L T⁻²]',
          M: 1, L: 1, T: -2
        };
        isHomogeneous = true;
      } else if (equationType === 'energy') {
        equation = 'E = ½mv²';
        lhs = { name: 'E', dim: '[M L² T⁻²]', M: 1, L: 2, T: -2 };
        rhs = {
          name: '½mv²',
          components: [
            { name: 'm', dim: '[M]', M: 1, L: 0, T: 0 },
            { name: 'v²', dim: '[L² T⁻²]', M: 0, L: 2, T: -2 }
          ],
          dim: '[M L² T⁻²]',
          M: 1, L: 2, T: -2
        };
        isHomogeneous = true;
      } else if (equationType === 'power') {
        equation = 'P = W/t';
        lhs = { name: 'P', dim: '[M L² T⁻³]', M: 1, L: 2, T: -3 };
        rhs = {
          name: 'W/t',
          components: [
            { name: 'W', dim: '[M L² T⁻²]', M: 1, L: 2, T: -2 },
            { name: 't', dim: '[T]', M: 0, L: 0, T: 1 }
          ],
          dim: '[M L² T⁻³]',
          M: 1, L: 2, T: -3
        };
        isHomogeneous = true;
      } else if (equationType === 'pressure') {
        equation = 'P = F/A';
        lhs = { name: 'P', dim: '[M L⁻¹ T⁻²]', M: 1, L: -1, T: -2 };
        rhs = {
          name: 'F/A',
          components: [
            { name: 'F', dim: '[M L T⁻²]', M: 1, L: 1, T: -2 },
            { name: 'A', dim: '[L²]', M: 0, L: 2, T: 0 }
          ],
          dim: '[M L⁻¹ T⁻²]',
          M: 1, L: -1, T: -2
        };
        isHomogeneous = true;
      } else { // velocity
        equation = 'v = u + at';
        lhs = { name: 'v', dim: '[L T⁻¹]', M: 0, L: 1, T: -1 };
        rhs = {
          name: 'u + at',
          components: [
            { name: 'u', dim: '[L T⁻¹]', M: 0, L: 1, T: -1 },
            { name: 'at', dim: '[L T⁻²][T]', M: 0, L: 1, T: -1 }
          ],
          dim: '[L T⁻¹]',
          M: 0, L: 1, T: -1
        };
        isHomogeneous = true;
      }

      // Draw equation
      ctx.fillStyle = colors.textPrimary;
      ctx.font = 'bold 24px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(equation, width / 2, 50);

      // Draw LHS analysis
      const lhsX = 150;
      const lhsY = 120;

      ctx.fillStyle = colors.blue + '40';
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2;
      ctx.fillRect(lhsX - 60, lhsY - 30, 120, 80);
      ctx.strokeRect(lhsX - 60, lhsY - 30, 120, 80);

      ctx.fillStyle = colors.blue;
      ctx.font = '18px system-ui';
      ctx.fillText(lhs.name, lhsX, lhsY);

      ctx.font = '14px system-ui';
      ctx.fillText(lhs.dim, lhsX, lhsY + 25);

      // Draw RHS analysis
      const rhsX = 350;
      const rhsY = 120;

      ctx.fillStyle = colors.orange + '40';
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 2;
      ctx.fillRect(rhsX - 60, rhsY - 30, 120, 80);
      ctx.strokeRect(rhsX - 60, rhsY - 30, 120, 80);

      ctx.fillStyle = colors.orange;
      ctx.font = '18px system-ui';
      ctx.fillText(rhs.name, rhsX, rhsY);

      ctx.font = '14px system-ui';
      ctx.fillText(rhs.dim, rhsX, rhsY + 25);

      // Draw equals sign or check mark
      ctx.fillStyle = isHomogeneous ? colors.green : colors.red;
      ctx.font = 'bold 36px system-ui';
      ctx.fillText(isHomogeneous ? '✓' : '✗', width / 2, lhsY + 5);

      // Draw dimensional breakdown
      let yOffset = 220;

      ctx.fillStyle = colors.textSecondary;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('Dimensional Breakdown:', 50, yOffset);

      yOffset += 25;

      // LHS dimensions
      ctx.fillStyle = colors.blue;
      ctx.fillText(`${lhs.name}:`, 50, yOffset);
      ctx.fillText(`[M${this.formatExponent(lhs.M)} L${this.formatExponent(lhs.L)} T${this.formatExponent(lhs.T)}]`, 150, yOffset);

      yOffset += 25;

      // RHS components
      for (const comp of rhs.components) {
        ctx.fillStyle = colors.orange;
        ctx.fillText(`${comp.name}:`, 50, yOffset);
        ctx.fillText(`[M${this.formatExponent(comp.M)} L${this.formatExponent(comp.L)} T${this.formatExponent(comp.T)}]`, 150, yOffset);
        yOffset += 20;
      }

      yOffset += 10;

      // Result
      ctx.fillStyle = colors.orange;
      ctx.fillText(`Result:`, 50, yOffset);
      ctx.fillText(`[M${this.formatExponent(rhs.M)} L${this.formatExponent(rhs.L)} T${this.formatExponent(rhs.T)}]`, 150, yOffset);

      // Draw fundamental dimensions legend
      const legendX = 320;
      const legendY = 240;

      ctx.fillStyle = colors.textSecondary;
      ctx.font = '13px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('Fundamental Dimensions:', legendX, legendY);

      ctx.font = '12px system-ui';
      ctx.fillText('[M] = Mass', legendX, legendY + 20);
      ctx.fillText('[L] = Length', legendX, legendY + 35);
      ctx.fillText('[T] = Time', legendX, legendY + 50);

      info.innerHTML = `
        <div class="info-item">Equation: <strong>${equation}</strong></div>
        <div class="info-item">LHS Dimension: <strong>${lhs.dim}</strong></div>
        <div class="info-item">RHS Dimension: <strong>${rhs.dim}</strong></div>
        <div class="info-item">Dimensionally Homogeneous: <strong>${isHomogeneous ? 'YES ✓' : 'NO ✗'}</strong></div>
        <div class="info-item">Principle: Both sides must have same dimensions</div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Helper method for drawing arrows
  drawArrow(ctx, x1, y1, x2, y2, color) {
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const arrowSize = 10;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(
      x2 - arrowSize * Math.cos(angle - 0.3),
      y2 - arrowSize * Math.sin(angle - 0.3)
    );
    ctx.lineTo(
      x2 - arrowSize * Math.cos(angle + 0.3),
      y2 - arrowSize * Math.sin(angle + 0.3)
    );
    ctx.closePath();
    ctx.fill();
  },

  // Colligative Properties Animation
  colligativeProperties(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const soluteSlider = this.createSlider(controls, 'Solute Concentration', 0, 10, 5, 1, ' M');

    let propertyType = 'vapor';
    const propertyBtn = this.createButton(controls, 'Vapor Pressure', () => {});
    this.createButton(controls, 'Switch Property', () => {
      if (propertyType === 'vapor') {
        propertyType = 'boiling';
        propertyBtn.textContent = 'Boiling Point';
      } else if (propertyType === 'boiling') {
        propertyType = 'freezing';
        propertyBtn.textContent = 'Freezing Point';
      } else {
        propertyType = 'vapor';
        propertyBtn.textContent = 'Vapor Pressure';
      }
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let t = 0;
    let particles = [];

    const initParticles = (concentration) => {
      const p = [];
      const solventCount = 40 - concentration * 2;
      for (let i = 0; i < solventCount; i++) {
        p.push({
          x: Math.random() * 200 + 50,
          y: 250 + Math.random() * 100,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          type: 'solvent',
          radius: 5
        });
      }
      for (let i = 0; i < concentration * 2; i++) {
        p.push({
          x: Math.random() * 200 + 50,
          y: 250 + Math.random() * 100,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          type: 'solute',
          radius: 8
        });
      }
      return p;
    };

    const animate = () => {
      const colors = self.getColors();
      const concentration = parseInt(soluteSlider.value);

      if (t % 60 === 0) {
        particles = initParticles(concentration);
      }

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      if (propertyType === 'vapor') {
        ctx.strokeStyle = colors.axis;
        ctx.lineWidth = 3;
        ctx.strokeRect(30, 230, 240, 140);

        ctx.fillStyle = colors.blue + '30';
        ctx.fillRect(30, 250, 240, 120);

        ctx.fillStyle = colors.cyan + '15';
        ctx.fillRect(30, 230, 240, 20);

        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 35 || p.x > 265) p.vx *= -1;
          if (p.y < 255 || p.y > 365) p.vy *= -1;

          const escapeProb = 0.01 * (1 - concentration * 0.08);
          if (p.type === 'solvent' && p.y < 260 && Math.random() < escapeProb) {
            p.y -= 15;
          }

          ctx.fillStyle = p.type === 'solvent' ? colors.blue : colors.orange;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.fillStyle = colors.text;
        ctx.font = 'bold 14px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('Vapor Pressure Lowering', 150, 30);

        const vaporPressure = 100 * (1 - concentration * 0.05);
        ctx.strokeStyle = colors.purple;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(400, 150, 60, 0.75 * Math.PI, 2.25 * Math.PI);
        ctx.stroke();

        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(400, 150, 60, 0.75 * Math.PI, 0.75 * Math.PI + 1.5 * Math.PI * vaporPressure / 100);
        ctx.stroke();

        ctx.fillStyle = colors.text;
        ctx.font = 'bold 12px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(`${vaporPressure.toFixed(1)}%`, 400, 160);

      } else if (propertyType === 'boiling') {
        ctx.strokeStyle = colors.axis;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(50, 250);
        ctx.lineTo(50, 360);
        ctx.lineTo(250, 360);
        ctx.lineTo(250, 250);
        ctx.stroke();

        ctx.fillStyle = colors.blue + '40';
        ctx.fillRect(53, 270, 194, 87);

        const bubbleCount = 8 + concentration;
        for (let i = 0; i < bubbleCount; i++) {
          const by = 360 - ((t * 2 + i * 30) % 90);
          const bx = 70 + (i * 20) % 180;
          ctx.fillStyle = colors.cyan + '60';
          ctx.beginPath();
          ctx.arc(bx, by, 5, 0, Math.PI * 2);
          ctx.fill();
        }

        particles.forEach(p => {
          ctx.fillStyle = p.type === 'solvent' ? colors.blue : colors.orange;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });

        const boilingPoint = 100 + concentration * 0.52;
        ctx.fillStyle = colors.text;
        ctx.font = 'bold 14px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('Boiling Point Elevation', 150, 30);
        ctx.fillText(`${boilingPoint.toFixed(1)}°C`, 400, 200);

      } else {
        ctx.strokeStyle = colors.axis;
        ctx.lineWidth = 3;
        ctx.strokeRect(30, 230, 240, 140);

        const iceCount = Math.max(0, 15 - concentration * 2);
        for (let i = 0; i < iceCount; i++) {
          const ix = 50 + (i * 25) % 200;
          const iy = 340 + Math.sin(t * 0.05 + i) * 5;
          ctx.strokeStyle = colors.cyan;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(ix, iy - 8);
          ctx.lineTo(ix, iy + 8);
          ctx.moveTo(ix - 8, iy);
          ctx.lineTo(ix + 8, iy);
          ctx.stroke();
        }

        particles.forEach(p => {
          p.x += p.vx * 0.5;
          p.y += p.vy * 0.5;

          if (p.x < 35 || p.x > 265) p.vx *= -1;
          if (p.y < 235 || p.y > 365) p.vy *= -1;

          ctx.fillStyle = p.type === 'solvent' ? colors.blue : colors.orange;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });

        const freezingPoint = 0 - concentration * 1.86;
        ctx.fillStyle = colors.text;
        ctx.font = 'bold 14px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('Freezing Point Depression', 150, 30);
        ctx.fillText(`${freezingPoint.toFixed(1)}°C`, 400, 200);
      }

      const deltaTb = concentration * 0.52;
      const deltaTf = concentration * 1.86;
      const vaporDecrease = concentration * 5;

      info.innerHTML = `
        <div class="info-item">Property: <strong>${propertyType === 'vapor' ? 'Vapor Pressure Lowering' : propertyType === 'boiling' ? 'Boiling Point Elevation' : 'Freezing Point Depression'}</strong></div>
        <div class="info-item">ΔT<sub>b</sub> = K<sub>b</sub>·m: <strong>+${deltaTb.toFixed(2)}°C</strong></div>
        <div class="info-item">ΔT<sub>f</sub> = K<sub>f</sub>·m: <strong>-${deltaTf.toFixed(2)}°C</strong></div>
        <div class="info-item">Vapor Pressure: <strong>${(100 - vaporDecrease).toFixed(1)}%</strong></div>
      `;

      t++;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // Ionic Bonding Animation
  ionicBonding(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    let phase = 'atoms';
    const phaseBtn = this.createButton(controls, 'Show Atoms', () => {});
    this.createButton(controls, 'Form Bond', () => {
      if (phase === 'atoms') {
        phase = 'transfer';
        phaseBtn.textContent = 'Electron Transfer';
      } else if (phase === 'transfer') {
        phase = 'ions';
        phaseBtn.textContent = 'Ionic Bond';
      } else if (phase === 'ions') {
        phase = 'lattice';
        phaseBtn.textContent = 'Lattice Formation';
      }
    });

    this.createButton(controls, 'Reset', () => {
      phase = 'atoms';
      phaseBtn.textContent = 'Show Atoms';
      t = 0;
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let t = 0;

    const animate = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      if (phase === 'atoms') {
        const naX = 150, naY = 200;

        ctx.fillStyle = colors.purple;
        ctx.beginPath();
        ctx.arc(naX, naY, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = colors.text;
        ctx.font = 'bold 12px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('Na', naX, naY + 4);

        ctx.strokeStyle = colors.axis;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(naX, naY, 70, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        for (let i = 0; i < 11; i++) {
          const angle = (t * 0.02 + i * Math.PI / 5.5) % (Math.PI * 2);
          const radius = i < 2 ? 40 : 70;
          const ex = naX + Math.cos(angle) * radius;
          const ey = naY + Math.sin(angle) * radius;
          ctx.fillStyle = i === 10 ? colors.orange : colors.yellow;
          ctx.beginPath();
          ctx.arc(ex, ey, i === 10 ? 5 : 4, 0, Math.PI * 2);
          ctx.fill();
        }

        const clX = 400, clY = 200;

        ctx.fillStyle = colors.green;
        ctx.beginPath();
        ctx.arc(clX, clY, 25, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = colors.text;
        ctx.font = 'bold 12px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('Cl', clX, clY + 4);

        ctx.strokeStyle = colors.axis;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(clX, clY, 75, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        for (let i = 0; i < 17; i++) {
          const angle = (t * 0.015 + i * Math.PI * 2 / 17) % (Math.PI * 2);
          const radius = i < 10 ? 45 : 75;
          const ex = clX + Math.cos(angle) * radius;
          const ey = clY + Math.sin(angle) * radius;
          ctx.fillStyle = colors.yellow;
          ctx.beginPath();
          ctx.arc(ex, ey, 4, 0, Math.PI * 2);
          ctx.fill();
        }

      } else if (phase === 'transfer') {
        const progress = Math.min(1, t * 0.02);
        const naX = 150, naY = 200;
        const clX = 400, clY = 200;

        ctx.fillStyle = colors.purple;
        ctx.beginPath();
        ctx.arc(naX, naY, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = colors.green;
        ctx.beginPath();
        ctx.arc(clX, clY, 25, 0, Math.PI * 2);
        ctx.fill();

        const eX = naX + (clX - naX) * progress;
        const eY = naY + (clY - naY) * progress - Math.sin(progress * Math.PI) * 50;

        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.arc(eX, eY, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = colors.text;
        ctx.font = '12px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('Electron Transfer', 275, 120);

      } else if (phase === 'ions') {
        const naX = 200, naY = 200;
        const clX = 350, clY = 200;

        ctx.fillStyle = colors.purple;
        ctx.beginPath();
        ctx.arc(naX, naY, 25, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = colors.text;
        ctx.font = 'bold 14px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('Na⁺', naX, naY + 5);

        ctx.fillStyle = colors.green;
        ctx.beginPath();
        ctx.arc(clX, clY, 30, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = colors.text;
        ctx.fillText('Cl⁻', clX, clY + 5);

        ctx.fillStyle = colors.text;
        ctx.font = '12px system-ui';
        ctx.fillText('Ionic Bond - Electrostatic Attraction', 275, 280);

      } else {
        ctx.fillStyle = colors.text;
        ctx.font = 'bold 14px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('NaCl Crystal Lattice', 275, 30);

        const latticeSize = 60;
        const startX = 100;
        const startY = 80;

        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            const x = startX + i * latticeSize;
            const y = startY + j * latticeSize;
            const isNa = (i + j) % 2 === 0;

            ctx.fillStyle = isNa ? colors.purple : colors.green;
            ctx.beginPath();
            ctx.arc(x, y, isNa ? 15 : 20, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = colors.text;
            ctx.font = '11px system-ui';
            ctx.textAlign = 'center';
            ctx.fillText(isNa ? 'Na⁺' : 'Cl⁻', x, y + 4);
          }
        }
      }

      info.innerHTML = `
        <div class="info-item">Stage: <strong>${phase === 'atoms' ? 'Separate Atoms' : phase === 'transfer' ? 'Electron Transfer' : phase === 'ions' ? 'Ionic Bond' : 'Crystal Lattice'}</strong></div>
        <div class="info-item">Na: <strong>1s² 2s² 2p⁶ 3s¹ → Na⁺: 1s² 2s² 2p⁶</strong></div>
        <div class="info-item">Cl: <strong>[Ne] 3s² 3p⁵ → Cl⁻: [Ne] 3s² 3p⁶</strong></div>
        <div class="info-item">Formula: <strong>NaCl (1:1 ratio)</strong></div>
      `;

      t++;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // Osmosis Animation
  osmosis(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const concentrationSlider = this.createSlider(controls, 'Right Concentration', 0, 10, 5, 1, ' M');

    this.createButton(controls, 'Reset', () => {
      leftLevel = 250;
      rightLevel = 250;
      particles = initParticles();
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let t = 0;
    let leftLevel = 250;
    let rightLevel = 250;
    let particles = [];

    const initParticles = () => {
      const p = [];
      const rightConc = parseInt(concentrationSlider.value);

      for (let i = 0; i < 30; i++) {
        p.push({
          x: 50 + Math.random() * 180,
          y: 150 + Math.random() * 200,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          type: 'solvent',
          side: 'left',
          radius: 5
        });
      }
      for (let i = 0; i < 5; i++) {
        p.push({
          x: 50 + Math.random() * 180,
          y: 150 + Math.random() * 200,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          type: 'solute',
          side: 'left',
          radius: 8
        });
      }

      for (let i = 0; i < 30; i++) {
        p.push({
          x: 320 + Math.random() * 180,
          y: 150 + Math.random() * 200,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          type: 'solvent',
          side: 'right',
          radius: 5
        });
      }
      for (let i = 0; i < rightConc * 3; i++) {
        p.push({
          x: 320 + Math.random() * 180,
          y: 150 + Math.random() * 200,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          type: 'solute',
          side: 'right',
          radius: 8
        });
      }

      return p;
    };

    particles = initParticles();

    const animate = () => {
      const colors = self.getColors();
      const rightConc = parseInt(concentrationSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.moveTo(40, 100);
      ctx.lineTo(40, 350);
      ctx.lineTo(240, 350);
      ctx.lineTo(240, 100);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(310, 100);
      ctx.lineTo(310, 350);
      ctx.lineTo(510, 350);
      ctx.lineTo(510, 100);
      ctx.stroke();

      ctx.strokeStyle = colors.yellow;
      ctx.lineWidth = 4;
      ctx.setLineDash([10, 5]);
      ctx.beginPath();
      ctx.moveTo(275, 120);
      ctx.lineTo(275, 350);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = colors.blue + '30';
      ctx.fillRect(43, leftLevel, 194, 350 - leftLevel);

      ctx.fillStyle = colors.cyan + '30';
      ctx.fillRect(313, rightLevel, 194, 350 - rightLevel);

      const flowRate = rightConc * 0.15;
      if (rightLevel > 100 && leftLevel < 340) {
        leftLevel += flowRate;
        rightLevel -= flowRate * 0.7;
      }

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.side === 'left') {
          if (p.x < 45 || p.x > 235) p.vx *= -1;
          if (p.y < 105 || p.y > 345) p.vy *= -1;

          if (p.type === 'solvent' && p.x > 265 && p.x < 285) {
            p.side = 'right';
            p.x = 285;
          }
        } else {
          if (p.x < 315 || p.x > 505) p.vx *= -1;
          if (p.y < 105 || p.y > 345) p.vy *= -1;

          if (p.type === 'solvent' && p.x < 285 && p.x > 265 && Math.random() < 0.3) {
            p.side = 'left';
            p.x = 265;
          }
        }

        if (p.side === 'left' && p.y < leftLevel) p.y = leftLevel + 5;
        if (p.side === 'right' && p.y < rightLevel) p.y = rightLevel + 5;

        ctx.fillStyle = p.type === 'solvent' ? colors.blue : colors.orange;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = colors.text;
      ctx.font = 'bold 12px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Dilute', 140, 80);
      ctx.fillText('Concentrated', 410, 80);
      ctx.fillText('Semipermeable Membrane', 275, 370);

      const osmoticPressure = (leftLevel - rightLevel) * 0.5;

      info.innerHTML = `
        <div class="info-item">Osmotic Pressure (π): <strong>${osmoticPressure.toFixed(1)} units</strong></div>
        <div class="info-item">π = iMRT (van't Hoff equation)</div>
        <div class="info-item">Direction: <strong>Dilute → Concentrated</strong></div>
        <div class="info-item">Membrane: <strong>Allows solvent, blocks solute</strong></div>
      `;

      t++;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // pH Indicator Animation
  phIndicator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const phSlider = this.createSlider(controls, 'pH', 0, 14, 7, 0.5, '');

    this.createButton(controls, 'Add Acid', () => {
      const currentPH = parseFloat(phSlider.value);
      phSlider.value = Math.max(0, currentPH - 1);
      phSlider.dispatchEvent(new Event('input'));
    });

    this.createButton(controls, 'Add Base', () => {
      const currentPH = parseFloat(phSlider.value);
      phSlider.value = Math.min(14, currentPH + 1);
      phSlider.dispatchEvent(new Event('input'));
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let t = 0;

    const getColorForPH = (ph) => {
      if (ph < 1) return '#8B0000';
      if (ph < 2) return '#FF0000';
      if (ph < 3) return '#FF4500';
      if (ph < 4) return '#FF6347';
      if (ph < 5) return '#FFA500';
      if (ph < 6) return '#FFD700';
      if (ph < 7) return '#FFFF00';
      if (ph < 8) return '#90EE90';
      if (ph < 9) return '#00FF00';
      if (ph < 10) return '#00CED1';
      if (ph < 11) return '#1E90FF';
      if (ph < 12) return '#0000FF';
      if (ph < 13) return '#4B0082';
      return '#8B008B';
    };

    const animate = () => {
      const colors = self.getColors();
      const ph = parseFloat(phSlider.value);
      const phColor = getColorForPH(ph);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = colors.text;
      ctx.font = 'bold 16px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('pH Scale', 275, 30);

      const scaleY = 60;
      const scaleWidth = 480;
      const scaleHeight = 40;
      const scaleX = (width - scaleWidth) / 2;

      for (let i = 0; i <= 14; i++) {
        const x = scaleX + (i / 14) * scaleWidth;
        const segColor = getColorForPH(i);

        ctx.fillStyle = segColor;
        ctx.fillRect(x, scaleY, scaleWidth / 14, scaleHeight);

        ctx.fillStyle = colors.text;
        ctx.font = 'bold 11px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(i.toString(), x + scaleWidth / 28, scaleY + scaleHeight + 18);
      }

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.strokeRect(scaleX, scaleY, scaleWidth, scaleHeight);

      const indicatorX = scaleX + (ph / 14) * scaleWidth;
      ctx.strokeStyle = colors.text;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(indicatorX, scaleY - 10);
      ctx.lineTo(indicatorX, scaleY + scaleHeight + 10);
      ctx.stroke();

      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.fillText(`pH ${ph.toFixed(1)}`, indicatorX, scaleY - 20);

      const beakerX = 180;
      const beakerY = 160;
      const beakerWidth = 190;
      const beakerHeight = 180;

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(beakerX, beakerY);
      ctx.lineTo(beakerX, beakerY + beakerHeight);
      ctx.lineTo(beakerX + beakerWidth, beakerY + beakerHeight);
      ctx.lineTo(beakerX + beakerWidth, beakerY);
      ctx.stroke();

      ctx.fillStyle = phColor + '80';
      ctx.fillRect(beakerX + 3, beakerY + 40, beakerWidth - 6, beakerHeight - 43);

      const particleCount = 20;
      for (let i = 0; i < particleCount; i++) {
        const px = beakerX + 20 + Math.random() * (beakerWidth - 40);
        const py = beakerY + 60 + ((t * 2 + i * 20) % (beakerHeight - 70));
        ctx.fillStyle = phColor + '60';
        ctx.beginPath();
        ctx.arc(px, py, 3 + Math.random() * 3, 0, Math.PI * 2);
        ctx.fill();
      }

      const hConc = Math.pow(10, -ph);
      const ohConc = Math.pow(10, -(14 - ph));

      let nature = 'Neutral';
      if (ph < 7) nature = ph < 3 ? 'Strongly Acidic' : 'Weakly Acidic';
      if (ph > 7) nature = ph > 11 ? 'Strongly Basic' : 'Weakly Basic';

      info.innerHTML = `
        <div class="info-item">pH: <strong>${ph.toFixed(1)}</strong> (${nature})</div>
        <div class="info-item">[H⁺]: <strong>${hConc.toExponential(2)} M</strong></div>
        <div class="info-item">[OH⁻]: <strong>${ohConc.toExponential(2)} M</strong></div>
        <div class="info-item">pH + pOH = <strong>14</strong></div>
      `;

      t++;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // Vapor Pressure Animation
  vaporPressure(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const tempSlider = this.createSlider(controls, 'Temperature', 280, 380, 300, 10, ' K');

    this.createButton(controls, 'Heat', () => {
      const currentTemp = parseInt(tempSlider.value);
      tempSlider.value = Math.min(380, currentTemp + 20);
      tempSlider.dispatchEvent(new Event('input'));
    });

    this.createButton(controls, 'Cool', () => {
      const currentTemp = parseInt(tempSlider.value);
      tempSlider.value = Math.max(280, currentTemp - 20);
      tempSlider.dispatchEvent(new Event('input'));
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let t = 0;
    let particles = [];

    const initParticles = (temp) => {
      const p = [];
      const speedFactor = temp / 300;

      for (let i = 0; i < 50; i++) {
        p.push({
          x: 60 + Math.random() * 280,
          y: 250 + Math.random() * 100,
          vx: (Math.random() - 0.5) * speedFactor,
          vy: (Math.random() - 0.5) * speedFactor,
          state: 'liquid',
          radius: 5
        });
      }

      const vaporCount = Math.floor((temp - 280) / 10);
      for (let i = 0; i < vaporCount; i++) {
        p.push({
          x: 60 + Math.random() * 280,
          y: 100 + Math.random() * 130,
          vx: (Math.random() - 0.5) * speedFactor * 2,
          vy: (Math.random() - 0.5) * speedFactor * 2,
          state: 'vapor',
          radius: 4
        });
      }

      return p;
    };

    const animate = () => {
      const colors = self.getColors();
      const temp = parseInt(tempSlider.value);

      if (t % 100 === 0) {
        particles = initParticles(temp);
      }

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 4;
      ctx.strokeRect(50, 90, 300, 270);

      ctx.fillStyle = colors.blue + '40';
      ctx.fillRect(53, 240, 294, 117);

      ctx.fillStyle = colors.cyan + '10';
      ctx.fillRect(53, 93, 294, 144);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 55 || p.x > 345) p.vx *= -1;
        if (p.y < 95 || p.y > 355) p.vy *= -1;

        if (p.state === 'liquid' && p.y < 245) {
          const evapRate = (temp - 280) / 1000;
          if (Math.random() < evapRate) {
            p.state = 'vapor';
            p.vy = -Math.abs(p.vy) * 2;
            p.radius = 4;
          }
        }

        if (p.state === 'vapor' && p.y > 235) {
          const condenseRate = (380 - temp) / 2000;
          if (Math.random() < condenseRate) {
            p.state = 'liquid';
            p.vy = Math.abs(p.vy) * 0.5;
            p.radius = 5;
          }
        }

        if (p.state === 'liquid' && p.y < 250) {
          p.y = 250;
          p.vy = Math.abs(p.vy);
        }

        ctx.fillStyle = p.state === 'liquid' ? colors.blue : colors.cyan;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Liquid-Vapor Equilibrium', 200, 30);

      ctx.font = '12px system-ui';
      ctx.fillText('Vapor', 200, 150);
      ctx.fillText('Liquid', 200, 310);

      const vaporCount = particles.filter(p => p.state === 'vapor').length;
      const vaporPressure = vaporCount * 2;

      const P0 = 10;
      const Hvap = 40.7;
      const R = 8.314;
      const T0 = 300;
      const P = P0 * Math.exp((Hvap * 1000 / R) * (1 / T0 - 1 / temp));

      info.innerHTML = `
        <div class="info-item">Temperature: <strong>${temp} K (${(temp - 273).toFixed(0)}°C)</strong></div>
        <div class="info-item">Vapor Pressure: <strong>${P.toFixed(1)} kPa</strong></div>
        <div class="info-item">Vapor Molecules: <strong>${vaporCount}</strong></div>
        <div class="info-item">ln(P) ∝ -ΔH<sub>vap</sub>/RT (Clausius-Clapeyron)</div>
      `;

      t++;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // Thermodynamic Process Animation
  thermodynamicProcess(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 550, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    let processType = 'isothermal';
    const processBtn = this.createButton(controls, 'Isothermal', () => {});

    this.createButton(controls, 'Next Process', () => {
      if (processType === 'isothermal') {
        processType = 'adiabatic';
        processBtn.textContent = 'Adiabatic';
      } else if (processType === 'adiabatic') {
        processType = 'isobaric';
        processBtn.textContent = 'Isobaric';
      } else if (processType === 'isobaric') {
        processType = 'isochoric';
        processBtn.textContent = 'Isochoric';
      } else {
        processType = 'isothermal';
        processBtn.textContent = 'Isothermal';
      }
    });

    const volumeSlider = this.createSlider(controls, 'Volume', 1, 10, 5, 0.5, ' L');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let t = 0;
    let particles = [];

    const initParticles = (volume) => {
      const p = [];
      const count = 30;
      const containerWidth = 100 + volume * 15;

      for (let i = 0; i < count; i++) {
        p.push({
          x: 360 + Math.random() * containerWidth,
          y: 180 + Math.random() * 150,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          radius: 5
        });
      }
      return p;
    };

    particles = initParticles(5);

    const animate = () => {
      const colors = self.getColors();
      const volume = parseFloat(volumeSlider.value);

      if (t % 60 === 0) {
        particles = initParticles(volume);
      }

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('PV Diagram', 150, 30);

      const graphX = 40;
      const graphY = 60;
      const graphW = 220;
      const graphH = 180;

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(graphX, graphY);
      ctx.lineTo(graphX, graphY + graphH);
      ctx.lineTo(graphX + graphW, graphY + graphH);
      ctx.stroke();

      ctx.fillStyle = colors.text;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Volume (V)', graphX + graphW / 2, graphY + graphH + 30);

      ctx.save();
      ctx.translate(graphX - 25, graphY + graphH / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText('Pressure (P)', 0, 0);
      ctx.restore();

      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 3;
      ctx.beginPath();

      const points = 50;
      for (let i = 0; i <= points; i++) {
        const v = 1 + (i / points) * 9;
        let p;

        if (processType === 'isothermal') {
          p = 10 / v;
        } else if (processType === 'adiabatic') {
          p = 10 / Math.pow(v, 1.4);
        } else if (processType === 'isobaric') {
          p = 5;
        } else {
          if (i === 0) {
            ctx.moveTo(graphX + (5 / 10) * graphW, graphY + graphH - (2 / 10) * graphH);
          } else {
            ctx.lineTo(graphX + (5 / 10) * graphW, graphY + graphH - ((2 + i * 0.16) / 10) * graphH);
          }
          continue;
        }

        const x = graphX + (v / 10) * graphW;
        const y = graphY + graphH - (p / 10) * graphH;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      const currentV = volume;
      let currentP;

      if (processType === 'isothermal') {
        currentP = 10 / currentV;
      } else if (processType === 'adiabatic') {
        currentP = 10 / Math.pow(currentV, 1.4);
      } else {
        currentP = 5;
      }

      const currentX = graphX + (currentV / 10) * graphW;
      const currentY = graphY + graphH - (currentP / 10) * graphH;

      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(currentX, currentY, 6, 0, Math.PI * 2);
      ctx.fill();

      const containerX = 350;
      const containerY = 170;
      const containerWidth = 100 + volume * 15;
      const containerHeight = 160;

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 3;
      ctx.strokeRect(containerX, containerY, containerWidth, containerHeight);

      if (processType !== 'isochoric') {
        ctx.fillStyle = colors.purple;
        ctx.fillRect(containerX + containerWidth - 10, containerY - 5, 10, containerHeight + 10);
      }

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < containerX + 5 || p.x > containerX + containerWidth - 5) p.vx *= -1;
        if (p.y < containerY + 5 || p.y > containerY + containerHeight - 5) p.vy *= -1;

        p.x = Math.max(containerX + 5, Math.min(containerX + containerWidth - 5, p.x));
        p.y = Math.max(containerY + 5, Math.min(containerY + containerHeight - 5, p.y));

        ctx.fillStyle = colors.cyan;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      let temperature;
      if (processType === 'isothermal') {
        temperature = 300;
      } else if (processType === 'adiabatic') {
        temperature = 300 * Math.pow(5 / volume, 0.4);
      } else if (processType === 'isobaric') {
        temperature = 300 * (volume / 5);
      } else {
        temperature = 300;
      }

      let equation = '';
      if (processType === 'isothermal') {
        equation = 'PV = nRT = constant';
      } else if (processType === 'adiabatic') {
        equation = 'PV<sup>γ</sup> = constant';
      } else if (processType === 'isobaric') {
        equation = 'V/T = constant';
      } else {
        equation = 'P/T = constant';
      }

      info.innerHTML = `
        <div class="info-item">Process: <strong>${processType.charAt(0).toUpperCase() + processType.slice(1)}</strong></div>
        <div class="info-item">Equation: <strong>${equation}</strong></div>
        <div class="info-item">V = <strong>${volume.toFixed(1)} L</strong>, P = <strong>${currentP.toFixed(2)} atm</strong></div>
        <div class="info-item">T = <strong>${temperature.toFixed(0)} K</strong></div>
      `;

      t++;
      requestAnimationFrame(animate);
    };

    animate();
  },

  // Helper method for formatting exponents
  formatExponent(value) {
    if (value === 0) return '⁰';
    if (value === 1) return '¹';
    if (value === -1) return '⁻¹';
    if (value === 2) return '²';
    if (value === -2) return '⁻²';
    if (value === 3) return '³';
    if (value === -3) return '⁻³';
    return value.toString();
  },

  // ============================================
  // OPTICS ANIMATIONS
  // ============================================

  // Young's Double Slit Experiment
  youngsDoubleSlit(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height} = this.createCanvas(container, 600, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const wavelengthSlider = this.createSlider(controls, 'Wavelength', 400, 700, 550, 10, ' nm');
    const slitSeparationSlider = this.createSlider(controls, 'Slit Separation', 1, 5, 2, 0.5, ' mm');
    const distanceSlider = this.createSlider(controls, 'Screen Distance', 0.5, 2, 1, 0.1, ' m');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let animPhase = 0;

    const animate = () => {
      const colors = self.getColors();
      const lambda = parseFloat(wavelengthSlider.value) * 1e-9;
      const d = parseFloat(slitSeparationSlider.value) * 1e-3;
      const D = parseFloat(distanceSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const barrierX = 100;
      const slitWidth = 4;
      const slit1Y = height / 2 - 30;
      const slit2Y = height / 2 + 30;

      ctx.fillStyle = colors.axis;
      ctx.fillRect(barrierX - 5, 0, 10, slit1Y - slitWidth);
      ctx.fillRect(barrierX - 5, slit1Y + slitWidth, 10, slit2Y - slit1Y - 2 * slitWidth);
      ctx.fillRect(barrierX - 5, slit2Y + slitWidth, 10, height - slit2Y - slitWidth);

      ctx.fillStyle = colors.cyan;
      ctx.fillRect(barrierX - 3, slit1Y, 6, slitWidth);
      ctx.fillRect(barrierX - 3, slit2Y, 6, slitWidth);

      const screenX = 450;
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(screenX, 0);
      ctx.lineTo(screenX, height);
      ctx.stroke();

      animPhase += 0.05;
      ctx.strokeStyle = colors.blue + '40';
      ctx.lineWidth = 1;

      for (let i = 0; i < 8; i++) {
        const radius = (animPhase + i * 30) % 240;
        ctx.beginPath();
        ctx.arc(barrierX, slit1Y + slitWidth/2, radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(barrierX, slit2Y + slitWidth/2, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      const fringeWidth = (lambda * D) / d;

      for (let y = 0; y < height; y++) {
        const yPos = (y - height/2) * 1e-3;
        const pathDiff = d * yPos / D;
        const phaseDiff = (2 * Math.PI * pathDiff) / lambda;
        const intensity = Math.pow(Math.cos(phaseDiff / 2), 2);

        const wl = parseFloat(wavelengthSlider.value);
        let r, g, b;
        if (wl < 490) {
          r = Math.floor((490 - wl) / (490 - 400) * 255);
          g = 0;
          b = 255;
        } else if (wl < 580) {
          r = 0;
          g = Math.floor((wl - 490) / (580 - 490) * 255);
          b = Math.floor((580 - wl) / (580 - 490) * 255);
        } else {
          r = 255;
          g = Math.floor((700 - wl) / (700 - 580) * 255);
          b = 0;
        }

        const alpha = intensity * 0.8;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fillRect(screenX - 20, y, 40, 1);
      }

      const firstMinima = (lambda * D) / (2 * d) * 1000;
      const fringeWidthMm = fringeWidth * 1000;

      info.innerHTML = `
        <div class="info-item">Fringe Width (β): <strong>${fringeWidthMm.toFixed(3)} mm</strong></div>
        <div class="info-item">β = λD/d</div>
        <div class="info-item">First Minimum at: <strong>±${firstMinima.toFixed(2)} mm</strong></div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Single Slit Diffraction
  singleSlitDiffraction(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 600, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const wavelengthSlider = this.createSlider(controls, 'Wavelength', 400, 700, 550, 10, ' nm');
    const slitWidthSlider = this.createSlider(controls, 'Slit Width', 0.5, 5, 2, 0.5, ' mm');
    const distanceSlider = this.createSlider(controls, 'Screen Distance', 0.5, 2, 1, 0.1, ' m');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const animate = () => {
      const colors = self.getColors();
      const lambda = parseFloat(wavelengthSlider.value) * 1e-9;
      const a = parseFloat(slitWidthSlider.value) * 1e-3;
      const D = parseFloat(distanceSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const barrierX = 100;
      const slitY = height / 2 - 40;
      const slitHeight = 80;

      ctx.fillStyle = colors.axis;
      ctx.fillRect(barrierX - 5, 0, 10, slitY);
      ctx.fillRect(barrierX - 5, slitY + slitHeight, 10, height - slitY - slitHeight);

      ctx.fillStyle = colors.cyan;
      ctx.fillRect(barrierX - 3, slitY, 6, slitHeight);

      const screenX = 450;
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(screenX, 0);
      ctx.lineTo(screenX, height);
      ctx.stroke();

      const wl = parseFloat(wavelengthSlider.value);
      let r, g, b;
      if (wl < 490) {
        r = Math.floor((490 - wl) / (490 - 400) * 255);
        g = 0;
        b = 255;
      } else if (wl < 580) {
        r = 0;
        g = Math.floor((wl - 490) / (580 - 490) * 255);
        b = Math.floor((580 - wl) / (580 - 490) * 255);
      } else {
        r = 255;
        g = Math.floor((700 - wl) / (700 - 580) * 255);
        b = 0;
      }

      for (let y = 0; y < height; y++) {
        const theta = Math.atan((y - height/2) * 1e-3 / D);
        const beta = (Math.PI * a * Math.sin(theta)) / lambda;

        let intensity;
        if (Math.abs(beta) < 0.001) {
          intensity = 1;
        } else {
          intensity = Math.pow(Math.sin(beta) / beta, 2);
        }

        const alpha = intensity * 0.9;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fillRect(screenX - 20, y, 40, 1);
      }

      ctx.strokeStyle = colors.yellow + '60';
      ctx.lineWidth = 2;
      for (let i = -20; i <= 20; i += 10) {
        ctx.beginPath();
        ctx.moveTo(20, height/2 + i);
        ctx.lineTo(barrierX, slitY + slitHeight/2 + i);
        ctx.stroke();
      }

      const firstMinAngle = Math.asin(lambda / a) * 180 / Math.PI;
      const firstMinDist = D * Math.tan(Math.asin(lambda / a)) * 1000;
      const centralWidth = 2 * firstMinDist;

      info.innerHTML = `
        <div class="info-item">First Minimum: <strong>±${firstMinDist.toFixed(2)} mm</strong></div>
        <div class="info-item">Central Max Width: <strong>${centralWidth.toFixed(2)} mm</strong></div>
        <div class="info-item">Condition: a sin θ = nλ</div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Total Internal Reflection
  totalInternalReflection(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 600, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const angleSlider = this.createSlider(controls, 'Incident Angle', 0, 90, 30, 1, '°');
    const n1Slider = this.createSlider(controls, 'n₁ (denser)', 1.3, 2.5, 1.5, 0.1, '');
    const n2Slider = this.createSlider(controls, 'n₂ (rarer)', 1.0, 1.5, 1.0, 0.1, '');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const animate = () => {
      const colors = self.getColors();
      const incidentAngle = parseFloat(angleSlider.value) * Math.PI / 180;
      const n1 = parseFloat(n1Slider.value);
      const n2 = parseFloat(n2Slider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const interfaceY = height / 2;

      ctx.fillStyle = colors.blue + '20';
      ctx.fillRect(0, interfaceY, width, height - interfaceY);

      ctx.fillStyle = colors.cyan + '10';
      ctx.fillRect(0, 0, width, interfaceY);

      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(0, interfaceY);
      ctx.lineTo(width, interfaceY);
      ctx.stroke();
      ctx.setLineDash([]);

      const centerX = width / 2;
      ctx.strokeStyle = colors.axisLabel;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.stroke();
      ctx.setLineDash([]);

      const criticalAngle = n2 < n1 ? Math.asin(n2 / n1) : Math.PI / 2;
      const isTIR = incidentAngle > criticalAngle;

      const rayLength = 150;
      const incidentX = centerX - rayLength * Math.sin(incidentAngle);
      const incidentY = interfaceY + rayLength * Math.cos(incidentAngle);

      ctx.strokeStyle = colors.yellow;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(incidentX, incidentY);
      ctx.lineTo(centerX, interfaceY);
      ctx.stroke();

      const arrowSize = 10;
      const incidentDir = Math.atan2(interfaceY - incidentY, centerX - incidentX);
      ctx.fillStyle = colors.yellow;
      ctx.beginPath();
      ctx.moveTo(centerX - 30 * Math.sin(incidentAngle), interfaceY + 30 * Math.cos(incidentAngle));
      ctx.lineTo(
        centerX - 30 * Math.sin(incidentAngle) - arrowSize * Math.cos(incidentDir - 0.3),
        interfaceY + 30 * Math.cos(incidentAngle) - arrowSize * Math.sin(incidentDir - 0.3)
      );
      ctx.lineTo(
        centerX - 30 * Math.sin(incidentAngle) - arrowSize * Math.cos(incidentDir + 0.3),
        interfaceY + 30 * Math.cos(incidentAngle) - arrowSize * Math.sin(incidentDir + 0.3)
      );
      ctx.closePath();
      ctx.fill();

      if (isTIR) {
        const reflectedX = centerX + rayLength * Math.sin(incidentAngle);
        const reflectedY = interfaceY + rayLength * Math.cos(incidentAngle);

        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX, interfaceY);
        ctx.lineTo(reflectedX, reflectedY);
        ctx.stroke();

        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.moveTo(centerX + 30 * Math.sin(incidentAngle), interfaceY + 30 * Math.cos(incidentAngle));
        ctx.lineTo(
          centerX + 30 * Math.sin(incidentAngle) + arrowSize * Math.cos(incidentDir - 0.3),
          interfaceY + 30 * Math.cos(incidentAngle) + arrowSize * Math.sin(incidentDir - 0.3)
        );
        ctx.lineTo(
          centerX + 30 * Math.sin(incidentAngle) + arrowSize * Math.cos(incidentDir + 0.3),
          interfaceY + 30 * Math.cos(incidentAngle) + arrowSize * Math.sin(incidentDir + 0.3)
        );
        ctx.closePath();
        ctx.fill();

        info.innerHTML = `
          <div class="info-item" style="color: ${colors.orange}"><strong>Total Internal Reflection</strong></div>
          <div class="info-item">Critical Angle: <strong>${(criticalAngle * 180 / Math.PI).toFixed(1)}°</strong></div>
          <div class="info-item">Incident Angle > Critical Angle</div>
          <div class="info-item">sin θc = n₂/n₁ = ${n2}/${n1}</div>
        `;
      } else {
        const refractedAngle = Math.asin((n1 / n2) * Math.sin(incidentAngle));
        const refractedX = centerX + rayLength * Math.sin(refractedAngle);
        const refractedY = interfaceY - rayLength * Math.cos(refractedAngle);

        ctx.strokeStyle = colors.green;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX, interfaceY);
        ctx.lineTo(refractedX, refractedY);
        ctx.stroke();

        const refractedDir = Math.atan2(refractedY - interfaceY, refractedX - centerX);
        ctx.fillStyle = colors.green;
        ctx.beginPath();
        ctx.moveTo(centerX + 30 * Math.sin(refractedAngle), interfaceY - 30 * Math.cos(refractedAngle));
        ctx.lineTo(
          centerX + 30 * Math.sin(refractedAngle) + arrowSize * Math.cos(refractedDir - 0.3),
          interfaceY - 30 * Math.cos(refractedAngle) + arrowSize * Math.sin(refractedDir - 0.3)
        );
        ctx.lineTo(
          centerX + 30 * Math.sin(refractedAngle) + arrowSize * Math.cos(refractedDir + 0.3),
          interfaceY - 30 * Math.cos(refractedAngle) + arrowSize * Math.sin(refractedDir + 0.3)
        );
        ctx.closePath();
        ctx.fill();

        const reflectedX = centerX + rayLength * Math.sin(incidentAngle);
        const reflectedY = interfaceY + rayLength * Math.cos(incidentAngle);

        ctx.strokeStyle = colors.orange + '60';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX, interfaceY);
        ctx.lineTo(reflectedX, reflectedY);
        ctx.stroke();

        info.innerHTML = `
          <div class="info-item" style="color: ${colors.green}"><strong>Refraction Occurs</strong></div>
          <div class="info-item">Critical Angle: <strong>${(criticalAngle * 180 / Math.PI).toFixed(1)}°</strong></div>
          <div class="info-item">Refracted Angle: <strong>${(refractedAngle * 180 / Math.PI).toFixed(1)}°</strong></div>
          <div class="info-item">n₁ sin θ₁ = n₂ sin θ₂</div>
        `;
      }

      ctx.strokeStyle = colors.textSecondary;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, interfaceY, 40, Math.PI/2, Math.PI/2 + incidentAngle);
      ctx.stroke();

      ctx.fillStyle = colors.text;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('Rarer (n₂)', 10, 30);
      ctx.fillText('Denser (n₁)', 10, interfaceY + 30);

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Polarization of Light
  polarization(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 600, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const polarizerAngleSlider = this.createSlider(controls, 'Polarizer Angle', 0, 90, 0, 5, '°');
    const analyzerAngleSlider = this.createSlider(controls, 'Analyzer Angle', 0, 180, 90, 5, '°');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let phase = 0;

    const animate = () => {
      const colors = self.getColors();
      const polarizerAngle = parseFloat(polarizerAngleSlider.value) * Math.PI / 180;
      const analyzerAngle = parseFloat(analyzerAngleSlider.value) * Math.PI / 180;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      phase += 0.1;

      const sourceX = 50;
      const polarizerX = 200;
      const analyzerX = 400;
      const centerY = height / 2;

      ctx.strokeStyle = colors.yellow;
      ctx.lineWidth = 2;
      for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 6) {
        const amplitude = 15;
        ctx.beginPath();
        ctx.moveTo(sourceX, centerY);
        const numWaves = 3;
        for (let i = 0; i <= numWaves; i++) {
          const x = sourceX + (polarizerX - sourceX) * i / numWaves;
          const offset = amplitude * Math.sin(phase + i * Math.PI / 2);
          const offsetX = offset * Math.cos(angle);
          const offsetY = offset * Math.sin(angle);
          ctx.lineTo(x + offsetX, centerY + offsetY);
        }
        ctx.stroke();
      }

      ctx.fillStyle = colors.axis;
      ctx.fillRect(polarizerX - 5, centerY - 80, 10, 60);
      ctx.fillRect(polarizerX - 5, centerY + 20, 10, 60);

      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 3;
      ctx.save();
      ctx.translate(polarizerX, centerY);
      ctx.rotate(polarizerAngle);
      ctx.beginPath();
      ctx.moveTo(0, -60);
      ctx.lineTo(0, 60);
      ctx.stroke();
      ctx.restore();

      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 2;
      const amplitude1 = 20;
      ctx.save();
      ctx.translate(0, centerY);
      ctx.rotate(polarizerAngle);
      ctx.beginPath();
      ctx.moveTo(polarizerX, 0);
      const numWaves1 = 4;
      for (let i = 0; i <= numWaves1; i++) {
        const x = polarizerX + (analyzerX - polarizerX) * i / numWaves1;
        const y = amplitude1 * Math.sin(phase + i * Math.PI / 2);
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      ctx.fillStyle = colors.axis;
      ctx.fillRect(analyzerX - 5, centerY - 80, 10, 60);
      ctx.fillRect(analyzerX - 5, centerY + 20, 10, 60);

      ctx.strokeStyle = colors.purple;
      ctx.lineWidth = 3;
      ctx.save();
      ctx.translate(analyzerX, centerY);
      ctx.rotate(analyzerAngle);
      ctx.beginPath();
      ctx.moveTo(0, -60);
      ctx.lineTo(0, 60);
      ctx.stroke();
      ctx.restore();

      const angleDiff = analyzerAngle - polarizerAngle;
      const intensity = Math.pow(Math.cos(angleDiff), 2);
      const amplitude2 = amplitude1 * Math.cos(angleDiff);

      if (intensity > 0.01) {
        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 2;
        ctx.save();
        ctx.translate(0, centerY);
        ctx.rotate(analyzerAngle);
        ctx.beginPath();
        ctx.moveTo(analyzerX, 0);
        const numWaves2 = 3;
        for (let i = 0; i <= numWaves2; i++) {
          const x = analyzerX + (width - analyzerX - 50) * i / numWaves2;
          const y = amplitude2 * Math.sin(phase + i * Math.PI / 2);
          ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      }

      const barX = width - 40;
      const barHeight = 150;
      const barY = centerY - barHeight / 2;

      ctx.fillStyle = colors.grid;
      ctx.fillRect(barX, barY, 20, barHeight);

      ctx.fillStyle = colors.orange;
      ctx.fillRect(barX, barY + barHeight * (1 - intensity), 20, barHeight * intensity);

      ctx.fillStyle = colors.text;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Source', sourceX, height - 20);
      ctx.fillText('Polarizer', polarizerX, height - 20);
      ctx.fillText('Analyzer', analyzerX, height - 20);
      ctx.fillText('I', barX + 10, barY - 10);

      info.innerHTML = `
        <div class="info-item">Angle between axes: <strong>${(angleDiff * 180 / Math.PI).toFixed(0)}°</strong></div>
        <div class="info-item">Transmitted Intensity: <strong>${(intensity * 100).toFixed(1)}%</strong></div>
        <div class="info-item">Malus's Law: I = I₀ cos²θ</div>
        <div class="info-item">${intensity < 0.01 ? 'Crossed polarizers - no light transmitted' : ''}</div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Prism Geometry and Dispersion
  prismGeometry(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 600, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const incidentAngleSlider = this.createSlider(controls, 'Incident Angle', 20, 70, 45, 1, '°');
    const prismAngleSlider = this.createSlider(controls, 'Prism Angle', 30, 90, 60, 5, '°');
    const refractiveIndexSlider = this.createSlider(controls, 'Refractive Index', 1.3, 1.8, 1.5, 0.05, '');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const animate = () => {
      const colors = self.getColors();
      const i1 = parseFloat(incidentAngleSlider.value) * Math.PI / 180;
      const A = parseFloat(prismAngleSlider.value) * Math.PI / 180;
      const nBase = parseFloat(refractiveIndexSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const prismCenterX = width / 2;
      const prismCenterY = height / 2;
      const prismSize = 120;

      const apex = {
        x: prismCenterX,
        y: prismCenterY - prismSize * Math.cos(A / 2) / Math.sin(A / 2)
      };
      const baseLeft = {
        x: prismCenterX - prismSize,
        y: prismCenterY + prismSize * Math.tan(A / 2)
      };
      const baseRight = {
        x: prismCenterX + prismSize,
        y: prismCenterY + prismSize * Math.tan(A / 2)
      };

      ctx.fillStyle = colors.blue + '15';
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(apex.x, apex.y);
      ctx.lineTo(baseLeft.x, baseLeft.y);
      ctx.lineTo(baseRight.x, baseRight.y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      const wavelengths = [
        { color: '#ff0000', n: nBase - 0.02, name: 'Red' },
        { color: '#00ff00', n: nBase, name: 'Green' },
        { color: '#0000ff', n: nBase + 0.02, name: 'Blue' }
      ];

      let deviations = [];

      wavelengths.forEach(wl => {
        const n = wl.n;

        const surfaceAngle = Math.PI / 2 - A / 2;
        const normalAngle = surfaceAngle + Math.PI / 2;

        const t = 0.4;
        const incidentPoint = {
          x: apex.x + t * (baseLeft.x - apex.x),
          y: apex.y + t * (baseLeft.y - apex.y)
        };

        const r1 = Math.asin(Math.sin(i1) / n);

        const insideAngle = normalAngle + r1;

        const rightSurfaceAngle = -Math.PI / 2 + A / 2;
        const rightNormalAngle = rightSurfaceAngle - Math.PI / 2;

        const m1 = Math.tan(insideAngle);
        const m2 = Math.tan(rightSurfaceAngle);
        const exitX = (baseRight.y - incidentPoint.y + m1 * incidentPoint.x - m2 * baseRight.x) / (m1 - m2);
        const exitY = incidentPoint.y + m1 * (exitX - incidentPoint.x);

        const i2 = Math.abs(insideAngle - rightNormalAngle);

        const emergentAngle = Math.asin(n * Math.sin(i2));
        const emergentDirection = rightNormalAngle + emergentAngle;

        const deviation = (i1 - emergentDirection) * 180 / Math.PI;
        deviations.push({ color: wl.name, deviation });

        ctx.strokeStyle = wl.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.moveTo(incidentPoint.x - 100 * Math.cos(i1), incidentPoint.y - 100 * Math.sin(i1));
        ctx.lineTo(incidentPoint.x, incidentPoint.y);
        ctx.stroke();

        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.moveTo(incidentPoint.x, incidentPoint.y);
        ctx.lineTo(exitX, exitY);
        ctx.stroke();

        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.moveTo(exitX, exitY);
        ctx.lineTo(exitX + 150 * Math.cos(emergentDirection), exitY + 150 * Math.sin(emergentDirection));
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      const t = 0.4;
      const incidentPoint = {
        x: apex.x + t * (baseLeft.x - apex.x),
        y: apex.y + t * (baseLeft.y - apex.y)
      };
      const surfaceAngle = Math.PI / 2 - A / 2;
      const normalAngle = surfaceAngle + Math.PI / 2;

      ctx.strokeStyle = colors.axisLabel;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(incidentPoint.x - 30 * Math.cos(normalAngle), incidentPoint.y - 30 * Math.sin(normalAngle));
      ctx.lineTo(incidentPoint.x + 30 * Math.cos(normalAngle), incidentPoint.y + 30 * Math.sin(normalAngle));
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = colors.text;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('A', apex.x, apex.y - 10);

      const avgDeviation = deviations.reduce((sum, d) => sum + d.deviation, 0) / deviations.length;

      info.innerHTML = `
        <div class="info-item">Prism Angle (A): <strong>${(A * 180 / Math.PI).toFixed(0)}°</strong></div>
        <div class="info-item">Average Deviation: <strong>${avgDeviation.toFixed(1)}°</strong></div>
        <div class="info-item">Dispersion causes color separation</div>
        <div class="info-item">δ = i + e - A (at minimum deviation: i = e)</div>
      `;

      requestAnimationFrame(animate);
    };

    animate();
  },

  // Snell's Law Interactive
  snellsLaw(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 600, 400);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const incidentAngleSlider = this.createSlider(controls, 'Incident Angle', 0, 89, 45, 1, '°');
    const n1Slider = this.createSlider(controls, 'n₁ (upper)', 1.0, 2.5, 1.0, 0.1, '');
    const n2Slider = this.createSlider(controls, 'n₂ (lower)', 1.0, 2.5, 1.5, 0.1, '');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const animate = () => {
      const colors = self.getColors();
      const incidentAngle = parseFloat(incidentAngleSlider.value) * Math.PI / 180;
      const n1 = parseFloat(n1Slider.value);
      const n2 = parseFloat(n2Slider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const interfaceY = height / 2;
      const centerX = width / 2;

      ctx.fillStyle = n1 > n2 ? colors.cyan + '10' : colors.blue + '20';
      ctx.fillRect(0, 0, width, interfaceY);

      ctx.fillStyle = n2 > n1 ? colors.cyan + '10' : colors.blue + '20';
      ctx.fillRect(0, interfaceY, width, height - interfaceY);

      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(0, interfaceY);
      ctx.lineTo(width, interfaceY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.strokeStyle = colors.axisLabel;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.stroke();
      ctx.setLineDash([]);

      const sinRefracted = (n1 / n2) * Math.sin(incidentAngle);
      const canRefract = Math.abs(sinRefracted) <= 1;

      const rayLength = 150;
      const incidentX = centerX - rayLength * Math.sin(incidentAngle);
      const incidentY = interfaceY - rayLength * Math.cos(incidentAngle);

      ctx.strokeStyle = colors.yellow;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(incidentX, incidentY);
      ctx.lineTo(centerX, interfaceY);
      ctx.stroke();

      const arrowSize = 10;
      ctx.fillStyle = colors.yellow;
      ctx.save();
      ctx.translate(centerX - 30 * Math.sin(incidentAngle), interfaceY - 30 * Math.cos(incidentAngle));
      ctx.rotate(incidentAngle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-arrowSize, -arrowSize/2);
      ctx.lineTo(-arrowSize, arrowSize/2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      ctx.strokeStyle = colors.yellow + '80';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, interfaceY, 50, -Math.PI/2, -Math.PI/2 + incidentAngle, false);
      ctx.stroke();

      ctx.fillStyle = colors.text;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('θ₁', centerX - 35 * Math.sin(incidentAngle/2), interfaceY - 55 * Math.cos(incidentAngle/2));

      if (canRefract) {
        const refractedAngle = Math.asin(sinRefracted);
        const refractedX = centerX + rayLength * Math.sin(refractedAngle);
        const refractedY = interfaceY + rayLength * Math.cos(refractedAngle);

        ctx.strokeStyle = colors.green;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX, interfaceY);
        ctx.lineTo(refractedX, refractedY);
        ctx.stroke();

        ctx.fillStyle = colors.green;
        ctx.save();
        ctx.translate(centerX + 30 * Math.sin(refractedAngle), interfaceY + 30 * Math.cos(refractedAngle));
        ctx.rotate(Math.PI + refractedAngle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-arrowSize, -arrowSize/2);
        ctx.lineTo(-arrowSize, arrowSize/2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        ctx.strokeStyle = colors.green + '80';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, interfaceY, 60, Math.PI/2, Math.PI/2 - refractedAngle, true);
        ctx.stroke();

        ctx.fillStyle = colors.text;
        ctx.fillText('θ₂', centerX + 45 * Math.sin(refractedAngle/2), interfaceY + 65 * Math.cos(refractedAngle/2));

        const reflectedX = centerX + rayLength * Math.sin(incidentAngle);
        const reflectedY = interfaceY - rayLength * Math.cos(incidentAngle);

        ctx.strokeStyle = colors.orange + '40';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX, interfaceY);
        ctx.lineTo(reflectedX, reflectedY);
        ctx.stroke();

        info.innerHTML = `
          <div class="info-item">Incident Angle: <strong>${(incidentAngle * 180 / Math.PI).toFixed(1)}°</strong></div>
          <div class="info-item">Refracted Angle: <strong>${(refractedAngle * 180 / Math.PI).toFixed(1)}°</strong></div>
          <div class="info-item">Snell's Law: n₁ sin θ₁ = n₂ sin θ₂</div>
          <div class="info-item">${n1} × ${Math.sin(incidentAngle).toFixed(3)} = ${n2} × ${Math.sin(refractedAngle).toFixed(3)}</div>
        `;
      } else {
        const reflectedX = centerX + rayLength * Math.sin(incidentAngle);
        const reflectedY = interfaceY - rayLength * Math.cos(incidentAngle);

        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX, interfaceY);
        ctx.lineTo(reflectedX, reflectedY);
        ctx.stroke();

        ctx.fillStyle = colors.orange;
        ctx.save();
        ctx.translate(centerX + 30 * Math.sin(incidentAngle), interfaceY - 30 * Math.cos(incidentAngle));
        ctx.rotate(Math.PI - incidentAngle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-arrowSize, -arrowSize/2);
        ctx.lineTo(-arrowSize, arrowSize/2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        const criticalAngle = Math.asin(n2 / n1);

        info.innerHTML = `
          <div class="info-item" style="color: ${colors.orange}"><strong>Total Internal Reflection!</strong></div>
          <div class="info-item">Critical Angle: <strong>${(criticalAngle * 180 / Math.PI).toFixed(1)}°</strong></div>
          <div class="info-item">Incident angle > Critical angle</div>
          <div class="info-item">sin θc = n₂/n₁ = ${(n2/n1).toFixed(3)}</div>
        `;
      }

      ctx.fillStyle = colors.text;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText(`Medium 1 (n₁ = ${n1})`, 10, 30);
      ctx.fillText(`Medium 2 (n₂ = ${n2})`, 10, interfaceY + 30);

      requestAnimationFrame(animate);
    };

    animate();
  },

  // ============================================
  // ADDITIONAL ANIMATIONS - HIGH PRIORITY
  // ============================================

  // Molecular Structure Visualization
  molecularStructure(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const molecules = ['H2O', 'CO2', 'NH3', 'CH4', 'C2H4'];
    let currentMol = 0;

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let rotation = 0;

    const moleculeData = {
      'H2O': {
        atoms: [
          { element: 'O', x: 0, y: 0, color: 'orange', radius: 20 },
          { element: 'H', x: -40, y: 30, color: 'cyan', radius: 12 },
          { element: 'H', x: 40, y: 30, color: 'cyan', radius: 12 }
        ],
        bonds: [[0, 1], [0, 2]],
        angle: '104.5°',
        shape: 'Bent',
        hybridization: 'sp³'
      },
      'CO2': {
        atoms: [
          { element: 'C', x: 0, y: 0, color: 'blue', radius: 16 },
          { element: 'O', x: -50, y: 0, color: 'orange', radius: 20 },
          { element: 'O', x: 50, y: 0, color: 'orange', radius: 20 }
        ],
        bonds: [[0, 1, 2], [0, 2, 2]],
        angle: '180°',
        shape: 'Linear',
        hybridization: 'sp'
      },
      'NH3': {
        atoms: [
          { element: 'N', x: 0, y: -10, color: 'blue', radius: 18 },
          { element: 'H', x: -35, y: 25, color: 'cyan', radius: 12 },
          { element: 'H', x: 35, y: 25, color: 'cyan', radius: 12 },
          { element: 'H', x: 0, y: 45, color: 'cyan', radius: 12 }
        ],
        bonds: [[0, 1], [0, 2], [0, 3]],
        angle: '107°',
        shape: 'Trigonal Pyramidal',
        hybridization: 'sp³'
      },
      'CH4': {
        atoms: [
          { element: 'C', x: 0, y: 0, color: 'blue', radius: 16 },
          { element: 'H', x: -35, y: -25, color: 'cyan', radius: 12 },
          { element: 'H', x: 35, y: -25, color: 'cyan', radius: 12 },
          { element: 'H', x: -35, y: 25, color: 'cyan', radius: 12 },
          { element: 'H', x: 35, y: 25, color: 'cyan', radius: 12 }
        ],
        bonds: [[0, 1], [0, 2], [0, 3], [0, 4]],
        angle: '109.5°',
        shape: 'Tetrahedral',
        hybridization: 'sp³'
      },
      'C2H4': {
        atoms: [
          { element: 'C', x: -30, y: 0, color: 'blue', radius: 16 },
          { element: 'C', x: 30, y: 0, color: 'blue', radius: 16 },
          { element: 'H', x: -60, y: -25, color: 'cyan', radius: 12 },
          { element: 'H', x: -60, y: 25, color: 'cyan', radius: 12 },
          { element: 'H', x: 60, y: -25, color: 'cyan', radius: 12 },
          { element: 'H', x: 60, y: 25, color: 'cyan', radius: 12 }
        ],
        bonds: [[0, 1, 2], [0, 2], [0, 3], [1, 4], [1, 5]],
        angle: '120°',
        shape: 'Trigonal Planar',
        hybridization: 'sp²'
      }
    };

    const animate = () => {
      const colors = self.getColors();
      const mol = moleculeData[molecules[currentMol]];

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 - 20;

      // Draw title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 18px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(molecules[currentMol], centerX, 30);

      // Draw bonds with rotation
      ctx.strokeStyle = colors.axisLabel;
      ctx.lineWidth = 4;
      mol.bonds.forEach(bond => {
        const from = mol.atoms[bond[0]];
        const to = mol.atoms[bond[1]];
        const numBonds = bond[2] || 1;

        const fx = centerX + from.x * Math.cos(rotation) - from.y * 0.3 * Math.sin(rotation);
        const fy = centerY + from.y + from.x * 0.3 * Math.sin(rotation);
        const tx = centerX + to.x * Math.cos(rotation) - to.y * 0.3 * Math.sin(rotation);
        const ty = centerY + to.y + to.x * 0.3 * Math.sin(rotation);

        for (let i = 0; i < numBonds; i++) {
          const offset = (i - (numBonds - 1) / 2) * 4;
          ctx.beginPath();
          ctx.moveTo(fx + offset, fy);
          ctx.lineTo(tx + offset, ty);
          ctx.stroke();
        }
      });

      // Draw atoms with 3D-like rotation
      mol.atoms.forEach(atom => {
        const ax = centerX + atom.x * Math.cos(rotation) - atom.y * 0.3 * Math.sin(rotation);
        const ay = centerY + atom.y + atom.x * 0.3 * Math.sin(rotation);

        // Atom glow
        const glow = ctx.createRadialGradient(ax, ay, 0, ax, ay, atom.radius * 1.5);
        glow.addColorStop(0, colors[atom.color]);
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(ax, ay, atom.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Atom sphere
        ctx.fillStyle = colors[atom.color];
        ctx.beginPath();
        ctx.arc(ax, ay, atom.radius, 0, Math.PI * 2);
        ctx.fill();

        // Element label
        ctx.fillStyle = colors.bg;
        ctx.font = 'bold 12px system-ui';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(atom.element, ax, ay);
      });

      // Update info
      info.innerHTML = `
        <div class="info-item">Shape: <strong>${mol.shape}</strong></div>
        <div class="info-item">Bond Angle: <strong>${mol.angle}</strong></div>
        <div class="info-item">Hybridization: <strong>${mol.hybridization}</strong></div>
      `;

      rotation += 0.01;
      requestAnimationFrame(animate);
    };

    const nextBtn = this.createButton(controls, 'Next Molecule', () => {
      currentMol = (currentMol + 1) % molecules.length;
    });

    const prevBtn = this.createButton(controls, 'Previous', () => {
      currentMol = (currentMol - 1 + molecules.length) % molecules.length;
    });

    animate();
  },

  // Reaction Mechanism Visualization
  reactionMechanism(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const reactions = ['SN1', 'SN2', 'E1', 'E2'];
    let currentReaction = 0;
    let step = 0;
    let progress = 0;

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const reactionData = {
      'SN1': {
        steps: ['Substrate', 'Carbocation Formation', 'Nucleophilic Attack', 'Product'],
        description: 'Unimolecular nucleophilic substitution'
      },
      'SN2': {
        steps: ['Approach', 'Transition State', 'Inversion', 'Product'],
        description: 'Bimolecular nucleophilic substitution'
      },
      'E1': {
        steps: ['Substrate', 'Carbocation', 'Deprotonation', 'Alkene'],
        description: 'Unimolecular elimination'
      },
      'E2': {
        steps: ['Anti-periplanar', 'Transition State', 'Bond Breaking', 'Alkene'],
        description: 'Bimolecular elimination'
      }
    };

    const animate = () => {
      const colors = self.getColors();
      const rxn = reactionData[reactions[currentReaction]];

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 20px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(reactions[currentReaction] + ' Mechanism', width / 2, 30);

      // Draw progress bar
      const barWidth = width - 80;
      const barY = 60;
      ctx.fillStyle = colors.axis;
      ctx.fillRect(40, barY, barWidth, 6);

      ctx.fillStyle = colors.green;
      ctx.fillRect(40, barY, barWidth * (step / 3), 6);

      // Draw step indicators
      for (let i = 0; i < 4; i++) {
        const x = 40 + (barWidth * i / 3);
        ctx.fillStyle = i <= step ? colors.green : colors.axis;
        ctx.beginPath();
        ctx.arc(x, barY + 3, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = colors.textSecondary;
        ctx.font = '10px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(rxn.steps[i], x, barY + 25);
      }

      // Draw animated molecules
      const centerY = height / 2 + 30;

      // Substrate
      const subX = 100 + progress * 2;
      ctx.fillStyle = colors.blue;
      ctx.beginPath();
      ctx.arc(subX, centerY, 25, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.bg;
      ctx.font = 'bold 14px system-ui';
      ctx.fillText('C', subX, centerY + 5);

      // Leaving group
      if (step < 2) {
        const lgX = subX + 40 + (step > 0 ? progress : 0);
        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.arc(lgX, centerY, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = colors.bg;
        ctx.font = 'bold 12px system-ui';
        ctx.fillText('X', lgX, centerY + 4);

        // Bond
        if (step === 0) {
          ctx.strokeStyle = colors.axisLabel;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(subX + 25, centerY);
          ctx.lineTo(lgX - 18, centerY);
          ctx.stroke();
        }
      }

      // Nucleophile
      if (step >= 1) {
        const nuX = subX - 60 - (step > 1 ? 0 : progress);
        ctx.fillStyle = colors.green;
        ctx.beginPath();
        ctx.arc(nuX, centerY, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = colors.bg;
        ctx.font = 'bold 12px system-ui';
        ctx.fillText('Nu', nuX, centerY + 4);

        // Approaching arrow
        if (step === 1) {
          ctx.strokeStyle = colors.green;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(nuX + 20, centerY);
          ctx.lineTo(subX - 30, centerY);
          ctx.stroke();

          // Arrow head
          ctx.beginPath();
          ctx.moveTo(subX - 30, centerY);
          ctx.lineTo(subX - 38, centerY - 5);
          ctx.lineTo(subX - 38, centerY + 5);
          ctx.closePath();
          ctx.fillStyle = colors.green;
          ctx.fill();
        }

        // New bond in product
        if (step >= 2) {
          ctx.strokeStyle = colors.axisLabel;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(subX - 25, centerY);
          ctx.lineTo(nuX + 18, centerY);
          ctx.stroke();
        }
      }

      // Update info
      info.innerHTML = `
        <div class="info-item">Step: <strong>${rxn.steps[step]}</strong></div>
        <div class="info-item">${rxn.description}</div>
      `;

      progress += 0.5;
      if (progress > 50) {
        progress = 0;
        step = (step + 1) % 4;
      }

      requestAnimationFrame(animate);
    };

    const nextRxn = this.createButton(controls, 'Next Reaction', () => {
      currentReaction = (currentReaction + 1) % reactions.length;
      step = 0;
      progress = 0;
    });

    animate();
  },

  // Periodic Table Interactive
  periodicTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    // Simplified periodic table data (first 20 elements)
    const elements = [
      { symbol: 'H', name: 'Hydrogen', number: 1, group: 1, period: 1, type: 'nonmetal' },
      { symbol: 'He', name: 'Helium', number: 2, group: 18, period: 1, type: 'noble' },
      { symbol: 'Li', name: 'Lithium', number: 3, group: 1, period: 2, type: 'alkali' },
      { symbol: 'Be', name: 'Beryllium', number: 4, group: 2, period: 2, type: 'alkaline' },
      { symbol: 'B', name: 'Boron', number: 5, group: 13, period: 2, type: 'metalloid' },
      { symbol: 'C', name: 'Carbon', number: 6, group: 14, period: 2, type: 'nonmetal' },
      { symbol: 'N', name: 'Nitrogen', number: 7, group: 15, period: 2, type: 'nonmetal' },
      { symbol: 'O', name: 'Oxygen', number: 8, group: 16, period: 2, type: 'nonmetal' },
      { symbol: 'F', name: 'Fluorine', number: 9, group: 17, period: 2, type: 'halogen' },
      { symbol: 'Ne', name: 'Neon', number: 10, group: 18, period: 2, type: 'noble' },
      { symbol: 'Na', name: 'Sodium', number: 11, group: 1, period: 3, type: 'alkali' },
      { symbol: 'Mg', name: 'Magnesium', number: 12, group: 2, period: 3, type: 'alkaline' },
      { symbol: 'Al', name: 'Aluminium', number: 13, group: 13, period: 3, type: 'metal' },
      { symbol: 'Si', name: 'Silicon', number: 14, group: 14, period: 3, type: 'metalloid' },
      { symbol: 'P', name: 'Phosphorus', number: 15, group: 15, period: 3, type: 'nonmetal' },
      { symbol: 'S', name: 'Sulfur', number: 16, group: 16, period: 3, type: 'nonmetal' },
      { symbol: 'Cl', name: 'Chlorine', number: 17, group: 17, period: 3, type: 'halogen' },
      { symbol: 'Ar', name: 'Argon', number: 18, group: 18, period: 3, type: 'noble' },
      { symbol: 'K', name: 'Potassium', number: 19, group: 1, period: 4, type: 'alkali' },
      { symbol: 'Ca', name: 'Calcium', number: 20, group: 2, period: 4, type: 'alkaline' }
    ];

    const typeColors = {
      'alkali': 'orange',
      'alkaline': 'yellow',
      'metal': 'blue',
      'metalloid': 'purple',
      'nonmetal': 'green',
      'halogen': 'cyan',
      'noble': 'purple'
    };

    let selectedElement = null;
    let hoverElement = null;
    const cellSize = 26;
    const offsetX = 20;
    const offsetY = 60;

    const getElementAt = (x, y) => {
      for (const el of elements) {
        const ex = offsetX + (el.group - 1) * cellSize;
        const ey = offsetY + (el.period - 1) * cellSize;
        if (x >= ex && x <= ex + cellSize - 2 && y >= ey && y <= ey + cellSize - 2) {
          return el;
        }
      }
      return null;
    };

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      hoverElement = getElementAt(x, y);
      canvas.style.cursor = hoverElement ? 'pointer' : 'default';
    });

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      selectedElement = getElementAt(x, y);
    });

    const draw = () => {
      const colors = self.getColors();

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 16px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Periodic Table (Elements 1-20)', width / 2, 30);

      // Draw elements
      elements.forEach(el => {
        const x = offsetX + (el.group - 1) * cellSize;
        const y = offsetY + (el.period - 1) * cellSize;

        const isSelected = selectedElement && selectedElement.number === el.number;
        const isHovered = hoverElement && hoverElement.number === el.number;

        // Cell background
        ctx.fillStyle = colors[typeColors[el.type]] + (isSelected ? '' : isHovered ? 'cc' : '80');
        ctx.fillRect(x, y, cellSize - 2, cellSize - 2);

        // Border
        if (isSelected || isHovered) {
          ctx.strokeStyle = colors.text;
          ctx.lineWidth = 2;
          ctx.strokeRect(x, y, cellSize - 2, cellSize - 2);
        }

        // Symbol
        ctx.fillStyle = colors.bg;
        ctx.font = 'bold 10px system-ui';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(el.symbol, x + cellSize / 2 - 1, y + cellSize / 2 - 1);
      });

      // Legend
      ctx.font = '10px system-ui';
      ctx.textAlign = 'left';
      let legendY = 200;
      Object.entries(typeColors).forEach(([type, color]) => {
        ctx.fillStyle = colors[color];
        ctx.fillRect(20, legendY, 12, 12);
        ctx.fillStyle = colors.textSecondary;
        ctx.fillText(type, 36, legendY + 10);
        legendY += 18;
      });

      // Selected element info
      if (selectedElement) {
        const infoX = 300;
        const infoY = 180;

        ctx.fillStyle = colors.bgSecondary;
        ctx.fillRect(infoX - 10, infoY - 10, 180, 120);
        ctx.strokeStyle = colors.axis;
        ctx.strokeRect(infoX - 10, infoY - 10, 180, 120);

        ctx.fillStyle = colors[typeColors[selectedElement.type]];
        ctx.font = 'bold 36px system-ui';
        ctx.textAlign = 'left';
        ctx.fillText(selectedElement.symbol, infoX, infoY + 35);

        ctx.fillStyle = colors.text;
        ctx.font = '14px system-ui';
        ctx.fillText(selectedElement.name, infoX, infoY + 60);
        ctx.fillText(`Atomic Number: ${selectedElement.number}`, infoX, infoY + 80);
        ctx.fillText(`Group: ${selectedElement.group}, Period: ${selectedElement.period}`, infoX, infoY + 100);
      }

      requestAnimationFrame(draw);
    };

    info.innerHTML = '<div class="info-item">Click on an element to see details</div>';
    draw();
  },

  // Reaction Rate Visualization
  reactionRate(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const tempSlider = this.createSlider(controls, 'Temperature', 200, 400, 300, 10, ' K');
    const concSlider = this.createSlider(controls, 'Concentration', 0.1, 2, 1, 0.1, ' M');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let particles = [];
    const numParticles = 50;

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * (width - 40) + 20,
        y: Math.random() * (height - 80) + 40,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        type: i < numParticles / 2 ? 'A' : 'B',
        reacted: false
      });
    }

    let collisions = 0;
    let time = 0;

    const animate = () => {
      const colors = self.getColors();
      const temp = parseFloat(tempSlider.value);
      const conc = parseFloat(concSlider.value);
      const speed = temp / 200;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw container
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 40, width - 40, height - 80);

      // Update and draw particles
      const activeParticles = Math.floor(numParticles * conc / 2);

      particles.forEach((p, i) => {
        if (i >= activeParticles * 2) return;

        // Update position
        p.x += p.vx * speed;
        p.y += p.vy * speed;

        // Bounce off walls
        if (p.x < 30 || p.x > width - 30) p.vx *= -1;
        if (p.y < 50 || p.y > height - 50) p.vy *= -1;

        // Keep in bounds
        p.x = Math.max(30, Math.min(width - 30, p.x));
        p.y = Math.max(50, Math.min(height - 50, p.y));

        // Check collisions
        particles.forEach((other, j) => {
          if (i >= j || j >= activeParticles * 2) return;
          if (p.type === other.type) return;

          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 15) {
            collisions++;
            // Collision effect
            ctx.fillStyle = colors.yellow + '60';
            ctx.beginPath();
            ctx.arc((p.x + other.x) / 2, (p.y + other.y) / 2, 20, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        // Draw particle
        ctx.fillStyle = p.type === 'A' ? colors.blue : colors.orange;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = colors.bg;
        ctx.font = 'bold 8px system-ui';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.type, p.x, p.y);
      });

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Collision Theory - Reaction Rate', width / 2, 25);

      // Calculate rate constant (Arrhenius approximation)
      const Ea = 50; // kJ/mol (simplified)
      const A = 1e10;
      const R = 8.314;
      const k = A * Math.exp(-Ea * 1000 / (R * temp));
      const rate = k * conc * conc;

      time += 0.016;

      info.innerHTML = `
        <div class="info-item">Collisions: <strong>${collisions}</strong></div>
        <div class="info-item">Rate constant k: <strong>${k.toExponential(2)}</strong></div>
        <div class="info-item">Rate: <strong>${rate.toExponential(2)} M/s</strong></div>
      `;

      requestAnimationFrame(animate);
    };

    const resetBtn = this.createButton(controls, 'Reset', () => {
      collisions = 0;
      particles.forEach(p => {
        p.x = Math.random() * (width - 40) + 20;
        p.y = Math.random() * (height - 80) + 40;
      });
    });

    animate();
  },

  // ============================================
  // ADDITIONAL ANIMATIONS - MEDIUM PRIORITY
  // ============================================

  // Titration Curve
  titrationCurve(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    let titrantVolume = 0;
    let isRunning = false;

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    // Strong acid - strong base titration curve
    const calculatePH = (v) => {
      const Va = 25; // mL of acid
      const Ca = 0.1; // M
      const Cb = 0.1; // M

      if (v === 0) return 1;
      if (v < Va) {
        const nH = Ca * Va - Cb * v;
        const totalV = Va + v;
        return -Math.log10(nH / totalV * 0.001);
      } else if (v === Va) {
        return 7;
      } else {
        const nOH = Cb * (v - Va);
        const totalV = Va + v;
        const pOH = -Math.log10(nOH / totalV * 0.001);
        return 14 - pOH;
      }
    };

    const draw = () => {
      const colors = self.getColors();

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Graph area
      const graphX = 80;
      const graphY = 40;
      const graphW = width - 120;
      const graphH = height - 100;

      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(graphX, graphY);
      ctx.lineTo(graphX, graphY + graphH);
      ctx.lineTo(graphX + graphW, graphY + graphH);
      ctx.stroke();

      // Y-axis labels (pH)
      ctx.fillStyle = colors.textSecondary;
      ctx.font = '11px system-ui';
      ctx.textAlign = 'right';
      for (let pH = 0; pH <= 14; pH += 2) {
        const y = graphY + graphH - (pH / 14) * graphH;
        ctx.fillText(pH.toString(), graphX - 8, y + 4);
        ctx.strokeStyle = colors.grid;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(graphX, y);
        ctx.lineTo(graphX + graphW, y);
        ctx.stroke();
      }

      // X-axis labels (volume)
      ctx.textAlign = 'center';
      for (let v = 0; v <= 50; v += 10) {
        const x = graphX + (v / 50) * graphW;
        ctx.fillText(v + ' mL', x, graphY + graphH + 20);
      }

      // Axis titles
      ctx.font = '12px system-ui';
      ctx.fillStyle = colors.text;
      ctx.save();
      ctx.translate(25, graphY + graphH / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText('pH', 0, 0);
      ctx.restore();
      ctx.fillText('Volume of NaOH', graphX + graphW / 2, graphY + graphH + 40);

      // Draw titration curve
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let v = 0; v <= Math.min(titrantVolume, 50); v += 0.5) {
        const pH = calculatePH(v);
        const x = graphX + (v / 50) * graphW;
        const y = graphY + graphH - (pH / 14) * graphH;
        if (v === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Current point
      if (titrantVolume > 0) {
        const currentPH = calculatePH(titrantVolume);
        const cx = graphX + (titrantVolume / 50) * graphW;
        const cy = graphY + graphH - (currentPH / 14) * graphH;

        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Equivalence point marker
      const eqX = graphX + (25 / 50) * graphW;
      const eqY = graphY + graphH - (7 / 14) * graphH;
      ctx.strokeStyle = colors.green;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(eqX, graphY);
      ctx.lineTo(eqX, graphY + graphH);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = colors.green;
      ctx.font = '10px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Equivalence', eqX, graphY - 5);
      ctx.fillText('Point', eqX, graphY + 8);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('Strong Acid - Strong Base Titration', 10, 20);

      const currentPH = calculatePH(titrantVolume);
      info.innerHTML = `
        <div class="info-item">Volume: <strong>${titrantVolume.toFixed(1)} mL</strong></div>
        <div class="info-item">pH: <strong>${currentPH.toFixed(2)}</strong></div>
        <div class="info-item">Equivalence at 25 mL (pH = 7)</div>
      `;

      if (isRunning && titrantVolume < 50) {
        titrantVolume += 0.2;
      }

      requestAnimationFrame(draw);
    };

    const startBtn = this.createButton(controls, 'Start Titration', () => {
      isRunning = true;
    });

    const resetBtn = this.createButton(controls, 'Reset', () => {
      titrantVolume = 0;
      isRunning = false;
    });

    draw();
  },

  // Orbital Shapes Visualization
  orbitalShapes(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const orbitals = ['1s', '2s', '2p', '3d'];
    let currentOrbital = 0;
    let rotation = 0;

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const orbitalData = {
      '1s': { n: 1, l: 0, description: 'Spherical, closest to nucleus' },
      '2s': { n: 2, l: 0, description: 'Larger spherical with one node' },
      '2p': { n: 2, l: 1, description: 'Dumbbell shaped, 3 orientations' },
      '3d': { n: 3, l: 2, description: 'Complex shapes, 5 orientations' }
    };

    const draw = () => {
      const colors = self.getColors();
      const orbital = orbitals[currentOrbital];
      const data = orbitalData[orbital];

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 20px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(orbital + ' Orbital', centerX, 35);

      // Draw coordinate axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX - 120, centerY);
      ctx.lineTo(centerX + 120, centerY);
      ctx.moveTo(centerX, centerY - 100);
      ctx.lineTo(centerX, centerY + 100);
      ctx.stroke();

      ctx.fillStyle = colors.textSecondary;
      ctx.font = '12px system-ui';
      ctx.fillText('x', centerX + 130, centerY + 4);
      ctx.fillText('y', centerX + 4, centerY - 110);

      // Draw orbital based on type
      if (data.l === 0) {
        // s orbital - spherical
        const radius = data.n === 1 ? 50 : 70;
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        gradient.addColorStop(0, colors.blue);
        gradient.addColorStop(0.5, colors.blue + '80');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();

        if (data.n === 2) {
          // Node for 2s
          ctx.strokeStyle = colors.orange;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.arc(centerX, centerY, 35, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      } else if (data.l === 1) {
        // p orbital - dumbbell
        const lobeSize = 60;
        const offset = 45;

        // Positive lobe
        const grad1 = ctx.createRadialGradient(centerX, centerY - offset, 0, centerX, centerY - offset, lobeSize);
        grad1.addColorStop(0, colors.blue);
        grad1.addColorStop(1, 'transparent');
        ctx.fillStyle = grad1;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY - offset, lobeSize * 0.6, lobeSize, 0, 0, Math.PI * 2);
        ctx.fill();

        // Negative lobe
        const grad2 = ctx.createRadialGradient(centerX, centerY + offset, 0, centerX, centerY + offset, lobeSize);
        grad2.addColorStop(0, colors.orange);
        grad2.addColorStop(1, 'transparent');
        ctx.fillStyle = grad2;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY + offset, lobeSize * 0.6, lobeSize, 0, 0, Math.PI * 2);
        ctx.fill();

        // Labels
        ctx.fillStyle = colors.text;
        ctx.font = '14px system-ui';
        ctx.fillText('+', centerX, centerY - offset);
        ctx.fillText('-', centerX, centerY + offset);
      } else if (data.l === 2) {
        // d orbital - cloverleaf (simplified)
        const lobeSize = 45;
        const positions = [
          { x: -40, y: -40 }, { x: 40, y: -40 },
          { x: -40, y: 40 }, { x: 40, y: 40 }
        ];

        positions.forEach((pos, i) => {
          const grad = ctx.createRadialGradient(
            centerX + pos.x, centerY + pos.y, 0,
            centerX + pos.x, centerY + pos.y, lobeSize
          );
          grad.addColorStop(0, i % 2 === 0 ? colors.blue : colors.orange);
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(centerX + pos.x, centerY + pos.y, lobeSize, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Nucleus
      ctx.fillStyle = colors.yellow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      ctx.fill();

      info.innerHTML = `
        <div class="info-item">n = ${data.n}, l = ${data.l}</div>
        <div class="info-item">${data.description}</div>
      `;

      rotation += 0.02;
      requestAnimationFrame(draw);
    };

    const nextBtn = this.createButton(controls, 'Next Orbital', () => {
      currentOrbital = (currentOrbital + 1) % orbitals.length;
    });

    draw();
  },

  // Mole Concept Visualization
  moleConcept(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const massSlider = this.createSlider(controls, 'Mass', 1, 100, 18, 1, ' g');
    const elements = ['H₂O', 'NaCl', 'CO₂', 'H₂SO₄'];
    let currentElement = 0;

    const molarMass = { 'H₂O': 18, 'NaCl': 58.5, 'CO₂': 44, 'H₂SO₄': 98 };

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    const avogadro = 6.022e23;

    const draw = () => {
      const colors = self.getColors();
      const mass = parseFloat(massSlider.value);
      const element = elements[currentElement];
      const M = molarMass[element];
      const moles = mass / M;
      const molecules = moles * avogadro;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 18px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Mole Concept: ' + element, width / 2, 30);

      // Visual representation
      const boxX = 50;
      const boxY = 60;
      const boxW = 150;
      const boxH = 180;

      // Container
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.strokeRect(boxX, boxY, boxW, boxH);

      // Particles (represent moles visually)
      const particleCount = Math.min(Math.floor(moles * 30), 100);
      ctx.fillStyle = colors.blue;
      for (let i = 0; i < particleCount; i++) {
        const px = boxX + 15 + Math.random() * (boxW - 30);
        const py = boxY + boxH - 15 - Math.random() * (boxH - 30);
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Scale/balance visual
      ctx.fillStyle = colors.axisLabel;
      ctx.fillRect(boxX + 40, boxY + boxH + 10, boxW - 80, 10);
      ctx.fillStyle = colors.text;
      ctx.font = '14px system-ui';
      ctx.fillText(mass + ' g', boxX + boxW / 2, boxY + boxH + 35);

      // Calculation display
      const calcX = 250;
      ctx.fillStyle = colors.text;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'left';

      ctx.fillText('Molar Mass (M):', calcX, 80);
      ctx.fillStyle = colors.blue;
      ctx.fillText(M + ' g/mol', calcX + 130, 80);

      ctx.fillStyle = colors.text;
      ctx.fillText('Given Mass (m):', calcX, 110);
      ctx.fillStyle = colors.orange;
      ctx.fillText(mass + ' g', calcX + 130, 110);

      ctx.fillStyle = colors.text;
      ctx.fillText('Number of Moles:', calcX, 150);
      ctx.fillStyle = colors.green;
      ctx.font = 'bold 16px system-ui';
      ctx.fillText('n = m/M = ' + moles.toFixed(3) + ' mol', calcX, 175);

      ctx.fillStyle = colors.text;
      ctx.font = '14px system-ui';
      ctx.fillText('Number of Molecules:', calcX, 210);
      ctx.fillStyle = colors.purple;
      ctx.fillText('N = n × Nₐ', calcX, 235);
      ctx.fillText('= ' + molecules.toExponential(3), calcX, 255);

      info.innerHTML = `
        <div class="info-item">Nₐ = 6.022 × 10²³</div>
        <div class="info-item">1 mole = Nₐ particles</div>
      `;

      requestAnimationFrame(draw);
    };

    const nextBtn = this.createButton(controls, 'Change Compound', () => {
      currentElement = (currentElement + 1) % elements.length;
    });

    draw();
  },

  // Fluid Flow (Bernoulli)
  fluidFlow(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const velocitySlider = this.createSlider(controls, 'Flow Velocity', 1, 10, 5, 1, ' m/s');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let particles = [];

    // Initialize particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * width,
        y: height / 2 + (Math.random() - 0.5) * 60,
        phase: Math.random() * Math.PI * 2
      });
    }

    const draw = () => {
      const colors = self.getColors();
      const v1 = parseFloat(velocitySlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 16px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText("Bernoulli's Principle - Venturi Effect", width / 2, 25);

      // Pipe shape (venturi)
      const pipeTop = [];
      const pipeBottom = [];

      for (let x = 0; x <= width; x += 5) {
        let radius;
        if (x < 150 || x > 350) {
          radius = 70;
        } else {
          const t = (x - 150) / 200;
          radius = 70 - 35 * Math.sin(t * Math.PI);
        }
        pipeTop.push({ x, y: height / 2 - radius });
        pipeBottom.push({ x, y: height / 2 + radius });
      }

      // Draw pipe
      ctx.fillStyle = colors.bgSecondary;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      pipeTop.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.lineTo(width, 0);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, height);
      pipeBottom.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // Pipe walls
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 3;
      ctx.beginPath();
      pipeTop.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
      ctx.stroke();
      ctx.beginPath();
      pipeBottom.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
      ctx.stroke();

      // Update and draw particles
      particles.forEach(p => {
        // Get local pipe radius
        let localRadius;
        if (p.x < 150 || p.x > 350) {
          localRadius = 70;
        } else {
          const t = (p.x - 150) / 200;
          localRadius = 70 - 35 * Math.sin(t * Math.PI);
        }

        // Velocity increases in narrow section (continuity)
        const localVelocity = v1 * (70 / localRadius);

        p.x += localVelocity;
        if (p.x > width) {
          p.x = 0;
          p.y = height / 2 + (Math.random() - 0.5) * 60;
        }

        // Keep within pipe
        const minY = height / 2 - localRadius + 10;
        const maxY = height / 2 + localRadius - 10;
        p.y = Math.max(minY, Math.min(maxY, p.y));

        // Draw particle
        ctx.fillStyle = colors.blue;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Pressure indicators
      const drawPressureGauge = (x, label, isHigh) => {
        let localRadius;
        if (x < 150 || x > 350) {
          localRadius = 70;
        } else {
          const t = (x - 150) / 200;
          localRadius = 70 - 35 * Math.sin(t * Math.PI);
        }
        const localV = v1 * (70 / localRadius);
        const pressure = isHigh ? 'High P' : 'Low P';
        const pressureVal = (101 - localV * 2).toFixed(0);

        ctx.fillStyle = isHigh ? colors.green : colors.orange;
        ctx.font = '11px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(pressure, x, height / 2 - localRadius - 15);
        ctx.fillText(pressureVal + ' kPa', x, height / 2 - localRadius - 3);
        ctx.fillText('v=' + localV.toFixed(1) + ' m/s', x, height / 2 + localRadius + 15);
      };

      drawPressureGauge(75, 'Wide', true);
      drawPressureGauge(250, 'Narrow', false);
      drawPressureGauge(425, 'Wide', true);

      info.innerHTML = `
        <div class="info-item">P₁ + ½ρv₁² = P₂ + ½ρv₂²</div>
        <div class="info-item">A₁v₁ = A₂v₂ (Continuity)</div>
      `;

      requestAnimationFrame(draw);
    };

    draw();
  },

  // Equilibrium Constant Demo
  equilibriumConstant(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    let reactantA = 100;
    let reactantB = 100;
    let productC = 0;
    let productD = 0;
    let time = 0;
    const Keq = 4;

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const draw = () => {
      const colors = self.getColors();

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 16px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Chemical Equilibrium: A + B ⇌ C + D', width / 2, 25);

      // Calculate Q and adjust concentrations
      const Q = (productC * productD) / (Math.max(reactantA, 0.1) * Math.max(reactantB, 0.1));

      if (Q < Keq && reactantA > 5 && reactantB > 5) {
        reactantA -= 0.3;
        reactantB -= 0.3;
        productC += 0.3;
        productD += 0.3;
      } else if (Q > Keq && productC > 5 && productD > 5) {
        reactantA += 0.2;
        reactantB += 0.2;
        productC -= 0.2;
        productD -= 0.2;
      }

      // Draw beakers
      const beakerY = 80;
      const beakerH = 150;
      const beakerW = 80;

      const drawBeaker = (x, level, color, label) => {
        // Beaker outline
        ctx.strokeStyle = colors.axis;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, beakerY);
        ctx.lineTo(x, beakerY + beakerH);
        ctx.lineTo(x + beakerW, beakerY + beakerH);
        ctx.lineTo(x + beakerW, beakerY);
        ctx.stroke();

        // Liquid
        const liquidH = (level / 100) * (beakerH - 10);
        ctx.fillStyle = color + '80';
        ctx.fillRect(x + 2, beakerY + beakerH - liquidH - 2, beakerW - 4, liquidH);

        // Label
        ctx.fillStyle = colors.text;
        ctx.font = '14px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(label, x + beakerW / 2, beakerY + beakerH + 20);
        ctx.fillText(level.toFixed(0) + '%', x + beakerW / 2, beakerY + beakerH + 38);
      };

      drawBeaker(30, reactantA, colors.blue, 'A');
      drawBeaker(130, reactantB, colors.orange, 'B');
      drawBeaker(290, productC, colors.green, 'C');
      drawBeaker(390, productD, colors.purple, 'D');

      // Arrow
      ctx.fillStyle = colors.text;
      ctx.font = '24px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('⇌', 240, beakerY + beakerH / 2);

      // Current Q value
      const currentQ = (productC * productD) / (Math.max(reactantA, 0.1) * Math.max(reactantB, 0.1));

      info.innerHTML = `
        <div class="info-item">K<sub>eq</sub> = ${Keq}</div>
        <div class="info-item">Q = [C][D]/[A][B] = <strong>${currentQ.toFixed(2)}</strong></div>
        <div class="info-item">${Math.abs(currentQ - Keq) < 0.5 ? 'At Equilibrium!' : currentQ < Keq ? 'Forward reaction favored' : 'Reverse reaction favored'}</div>
      `;

      time += 0.016;
      requestAnimationFrame(draw);
    };

    const resetBtn = this.createButton(controls, 'Reset', () => {
      reactantA = 100;
      reactantB = 100;
      productC = 0;
      productD = 0;
    });

    const addReactant = this.createButton(controls, 'Add Reactants', () => {
      reactantA = Math.min(reactantA + 30, 150);
      reactantB = Math.min(reactantB + 30, 150);
    });

    draw();
  },

  // Enthalpy Diagram
  enthalpyDiagram(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const reactions = ['Exothermic', 'Endothermic'];
    let currentType = 0;
    let progress = 0;

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const draw = () => {
      const colors = self.getColors();
      const isExo = currentType === 0;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 16px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(reactions[currentType] + ' Reaction Energy Diagram', width / 2, 25);

      // Axes
      const axisX = 80;
      const axisY = height - 60;
      const graphW = width - 120;
      const graphH = height - 120;

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(axisX, 50);
      ctx.lineTo(axisX, axisY);
      ctx.lineTo(axisX + graphW, axisY);
      ctx.stroke();

      // Axis labels
      ctx.fillStyle = colors.textSecondary;
      ctx.font = '12px system-ui';
      ctx.save();
      ctx.translate(30, height / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = 'center';
      ctx.fillText('Enthalpy (H)', 0, 0);
      ctx.restore();
      ctx.textAlign = 'center';
      ctx.fillText('Reaction Progress', axisX + graphW / 2, axisY + 25);

      // Energy levels
      const reactantY = isExo ? 120 : 200;
      const productY = isExo ? 200 : 120;
      const activationY = 80;

      // Reactant level
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(axisX + 20, reactantY);
      ctx.lineTo(axisX + 100, reactantY);
      ctx.stroke();
      ctx.fillStyle = colors.blue;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('Reactants', axisX + 105, reactantY + 4);

      // Product level
      ctx.strokeStyle = colors.green;
      ctx.beginPath();
      ctx.moveTo(axisX + graphW - 100, productY);
      ctx.lineTo(axisX + graphW - 20, productY);
      ctx.stroke();
      ctx.fillStyle = colors.green;
      ctx.textAlign = 'right';
      ctx.fillText('Products', axisX + graphW - 105, productY + 4);

      // Activation energy curve
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(axisX + 100, reactantY);

      const peakX = axisX + graphW / 2;
      ctx.bezierCurveTo(
        axisX + 150, reactantY,
        peakX - 50, activationY,
        peakX, activationY
      );
      ctx.bezierCurveTo(
        peakX + 50, activationY,
        axisX + graphW - 150, productY,
        axisX + graphW - 100, productY
      );
      ctx.stroke();

      // Activation energy marker
      ctx.strokeStyle = colors.orange;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(peakX, activationY);
      ctx.lineTo(peakX, reactantY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = colors.orange;
      ctx.font = '11px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Ea', peakX + 15, (activationY + reactantY) / 2);
      ctx.fillText('Transition State', peakX, activationY - 10);

      // Delta H marker
      const dhColor = isExo ? colors.green : colors.orange;
      ctx.strokeStyle = dhColor;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(axisX + graphW - 50, reactantY);
      ctx.lineTo(axisX + graphW - 50, productY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Arrow for ΔH
      const arrowDir = isExo ? 1 : -1;
      ctx.fillStyle = dhColor;
      ctx.beginPath();
      ctx.moveTo(axisX + graphW - 50, productY);
      ctx.lineTo(axisX + graphW - 55, productY - arrowDir * 10);
      ctx.lineTo(axisX + graphW - 45, productY - arrowDir * 10);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = dhColor;
      ctx.textAlign = 'left';
      ctx.fillText('ΔH ' + (isExo ? '< 0' : '> 0'), axisX + graphW - 45, (reactantY + productY) / 2);

      // Moving particle along curve
      const particleT = (progress % 100) / 100;
      let particleX, particleY;

      if (particleT < 0.5) {
        const t = particleT * 2;
        particleX = axisX + 100 + (peakX - axisX - 100) * t;
        particleY = reactantY + (activationY - reactantY) * Math.sin(t * Math.PI / 2) * Math.sin(t * Math.PI / 2);
        particleY = reactantY - (reactantY - activationY) * Math.pow(Math.sin(t * Math.PI / 2), 2);
      } else {
        const t = (particleT - 0.5) * 2;
        particleX = peakX + (axisX + graphW - 100 - peakX) * t;
        particleY = activationY + (productY - activationY) * Math.pow(Math.sin(t * Math.PI / 2), 2);
      }

      ctx.fillStyle = colors.yellow;
      ctx.beginPath();
      ctx.arc(particleX, particleY, 8, 0, Math.PI * 2);
      ctx.fill();

      progress += 0.5;

      info.innerHTML = `
        <div class="info-item">ΔH ${isExo ? '< 0 (heat released)' : '> 0 (heat absorbed)'}</div>
        <div class="info-item">Ea = Activation Energy</div>
      `;

      requestAnimationFrame(draw);
    };

    const toggleBtn = this.createButton(controls, 'Toggle Reaction Type', () => {
      currentType = 1 - currentType;
      progress = 0;
    });

    draw();
  },

  // Work Done Animation
  workDone(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const forceSlider = this.createSlider(controls, 'Force', 10, 100, 50, 5, ' N');
    const angleSlider = this.createSlider(controls, 'Angle', 0, 60, 30, 5, '°');

    let displacement = 0;
    let isMoving = false;

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    const draw = () => {
      const colors = self.getColors();
      const F = parseFloat(forceSlider.value);
      const theta = parseFloat(angleSlider.value) * Math.PI / 180;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 16px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Work Done: W = F·d·cos(θ)', width / 2, 25);

      // Ground
      ctx.fillStyle = colors.axis;
      ctx.fillRect(0, height - 50, width, 50);

      // Grass texture
      ctx.strokeStyle = colors.green + '60';
      for (let i = 0; i < width; i += 10) {
        ctx.beginPath();
        ctx.moveTo(i, height - 50);
        ctx.lineTo(i + 3, height - 55);
        ctx.stroke();
      }

      // Box
      const boxX = 50 + displacement;
      const boxY = height - 90;
      const boxSize = 40;

      ctx.fillStyle = colors.blue;
      ctx.fillRect(boxX, boxY, boxSize, boxSize);
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.strokeRect(boxX, boxY, boxSize, boxSize);

      // Force vector
      const forceLen = F * 0.8;
      const forceEndX = boxX + boxSize + forceLen * Math.cos(theta);
      const forceEndY = boxY + boxSize / 2 - forceLen * Math.sin(theta);

      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(boxX + boxSize, boxY + boxSize / 2);
      ctx.lineTo(forceEndX, forceEndY);
      ctx.stroke();

      // Arrow head
      const arrowAngle = Math.atan2(-(forceEndY - (boxY + boxSize / 2)), forceEndX - (boxX + boxSize));
      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.moveTo(forceEndX, forceEndY);
      ctx.lineTo(forceEndX - 12 * Math.cos(arrowAngle - 0.3), forceEndY + 12 * Math.sin(arrowAngle - 0.3));
      ctx.lineTo(forceEndX - 12 * Math.cos(arrowAngle + 0.3), forceEndY + 12 * Math.sin(arrowAngle + 0.3));
      ctx.closePath();
      ctx.fill();

      // Force label
      ctx.fillStyle = colors.orange;
      ctx.font = '14px system-ui';
      ctx.fillText('F = ' + F + ' N', forceEndX + 10, forceEndY - 10);

      // Angle arc
      ctx.strokeStyle = colors.yellow;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(boxX + boxSize, boxY + boxSize / 2, 30, 0, -theta, true);
      ctx.stroke();
      ctx.fillStyle = colors.yellow;
      ctx.font = '12px system-ui';
      ctx.fillText('θ', boxX + boxSize + 35, boxY + boxSize / 2 - 10);

      // Displacement marker
      if (displacement > 0) {
        ctx.strokeStyle = colors.green;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(50, height - 30);
        ctx.lineTo(50 + displacement, height - 30);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = colors.green;
        ctx.font = '12px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('d = ' + (displacement / 10).toFixed(1) + ' m', 50 + displacement / 2, height - 15);
      }

      // Calculate work
      const d = displacement / 10; // Convert to meters
      const work = F * d * Math.cos(theta);

      info.innerHTML = `
        <div class="info-item">Displacement: <strong>${d.toFixed(1)} m</strong></div>
        <div class="info-item">cos(${(theta * 180 / Math.PI).toFixed(0)}°) = ${Math.cos(theta).toFixed(3)}</div>
        <div class="info-item">Work Done: <strong>${work.toFixed(1)} J</strong></div>
      `;

      if (isMoving && displacement < 300) {
        displacement += 2;
      }

      requestAnimationFrame(draw);
    };

    const pushBtn = this.createButton(controls, 'Apply Force', () => {
      isMoving = true;
    });

    const resetBtn = this.createButton(controls, 'Reset', () => {
      displacement = 0;
      isMoving = false;
    });

    draw();
  },

  // Energy Bar Chart
  energyBar(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const heightSlider = this.createSlider(controls, 'Height', 0, 100, 100, 5, ' m');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    const g = 10;
    const mass = 1;
    const maxHeight = 100;

    const draw = () => {
      const colors = self.getColors();
      const h = parseFloat(heightSlider.value);

      const PE = mass * g * h;
      const KE = mass * g * (maxHeight - h);
      const total = PE + KE;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 16px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Energy Conservation: PE + KE = Constant', width / 2, 25);

      // Bar chart area
      const barX = 80;
      const barY = 60;
      const barW = 80;
      const barH = 180;
      const maxEnergy = mass * g * maxHeight;

      // PE bar
      const peHeight = (PE / maxEnergy) * barH;
      ctx.fillStyle = colors.blue;
      ctx.fillRect(barX, barY + barH - peHeight, barW, peHeight);
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.strokeRect(barX, barY, barW, barH);
      ctx.fillStyle = colors.text;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('PE', barX + barW / 2, barY + barH + 20);
      ctx.fillText(PE.toFixed(0) + ' J', barX + barW / 2, barY + barH + 35);

      // KE bar
      const keHeight = (KE / maxEnergy) * barH;
      ctx.fillStyle = colors.orange;
      ctx.fillRect(barX + 120, barY + barH - keHeight, barW, keHeight);
      ctx.strokeStyle = colors.axis;
      ctx.strokeRect(barX + 120, barY, barW, barH);
      ctx.fillText('KE', barX + 120 + barW / 2, barY + barH + 20);
      ctx.fillText(KE.toFixed(0) + ' J', barX + 120 + barW / 2, barY + barH + 35);

      // Total bar
      const totalHeight = (total / maxEnergy) * barH;
      ctx.fillStyle = colors.green;
      ctx.fillRect(barX + 240, barY + barH - totalHeight, barW, totalHeight);
      ctx.strokeStyle = colors.axis;
      ctx.strokeRect(barX + 240, barY, barW, barH);
      ctx.fillText('Total', barX + 240 + barW / 2, barY + barH + 20);
      ctx.fillText(total.toFixed(0) + ' J', barX + 240 + barW / 2, barY + barH + 35);

      // Object position visualization
      const objX = width - 80;
      const objY = barY + barH - (h / maxHeight) * barH;

      // Reference line
      ctx.strokeStyle = colors.axis;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(objX - 30, barY + barH);
      ctx.lineTo(objX + 30, barY + barH);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = colors.textSecondary;
      ctx.font = '10px system-ui';
      ctx.fillText('h = 0', objX, barY + barH + 15);

      // Object
      ctx.fillStyle = colors.yellow;
      ctx.beginPath();
      ctx.arc(objX, objY, 15, 0, Math.PI * 2);
      ctx.fill();

      // Height marker
      if (h > 0) {
        ctx.strokeStyle = colors.green;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(objX - 20, objY);
        ctx.lineTo(objX - 20, barY + barH);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = colors.green;
        ctx.fillText('h=' + h + 'm', objX - 40, (objY + barY + barH) / 2);
      }

      info.innerHTML = `
        <div class="info-item">PE = mgh = ${PE.toFixed(0)} J</div>
        <div class="info-item">KE = ½mv² = ${KE.toFixed(0)} J</div>
        <div class="info-item">Total Energy = ${total.toFixed(0)} J (constant)</div>
      `;

      requestAnimationFrame(draw);
    };

    draw();
  },

  // Maxwell-Boltzmann Distribution
  maxwellBoltzmann(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const tempSlider = this.createSlider(controls, 'Temperature', 200, 600, 300, 50, ' K');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    // Maxwell-Boltzmann distribution function
    const mbDist = (v, T) => {
      const m = 4.65e-26; // Mass of N2 molecule
      const k = 1.38e-23; // Boltzmann constant
      const factor = 4 * Math.PI * Math.pow(m / (2 * Math.PI * k * T), 1.5);
      return factor * v * v * Math.exp(-m * v * v / (2 * k * T));
    };

    const draw = () => {
      const colors = self.getColors();
      const T = parseFloat(tempSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Maxwell-Boltzmann Speed Distribution', width / 2, 25);

      // Axes
      const axisX = 60;
      const axisY = height - 50;
      const graphW = width - 100;
      const graphH = height - 100;

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(axisX, 50);
      ctx.lineTo(axisX, axisY);
      ctx.lineTo(axisX + graphW, axisY);
      ctx.stroke();

      // Axis labels
      ctx.fillStyle = colors.textSecondary;
      ctx.font = '11px system-ui';
      ctx.save();
      ctx.translate(20, height / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = 'center';
      ctx.fillText('f(v)', 0, 0);
      ctx.restore();
      ctx.textAlign = 'center';
      ctx.fillText('Molecular Speed (m/s)', axisX + graphW / 2, axisY + 35);

      // X-axis ticks
      for (let v = 0; v <= 1000; v += 200) {
        const x = axisX + (v / 1000) * graphW;
        ctx.fillText(v.toString(), x, axisY + 15);
      }

      // Draw distribution curve
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2;
      ctx.beginPath();

      let maxVal = 0;
      const points = [];
      for (let v = 0; v <= 1000; v += 5) {
        const fv = mbDist(v, T);
        if (fv > maxVal) maxVal = fv;
        points.push({ v, fv });
      }

      points.forEach((p, i) => {
        const x = axisX + (p.v / 1000) * graphW;
        const y = axisY - (p.fv / maxVal) * graphH * 0.9;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Find most probable speed
      const vmp = Math.sqrt(2 * 1.38e-23 * T / 4.65e-26);
      const vmpX = axisX + (vmp / 1000) * graphW;
      const vmpY = axisY - (mbDist(vmp, T) / maxVal) * graphH * 0.9;

      // Mark most probable speed
      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(vmpX, vmpY, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = colors.orange;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(vmpX, vmpY);
      ctx.lineTo(vmpX, axisY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = colors.orange;
      ctx.font = '10px system-ui';
      ctx.fillText('v_mp', vmpX, axisY + 25);

      // Calculate average and RMS speeds
      const vavg = Math.sqrt(8 * 1.38e-23 * T / (Math.PI * 4.65e-26));
      const vrms = Math.sqrt(3 * 1.38e-23 * T / 4.65e-26);

      info.innerHTML = `
        <div class="info-item">v<sub>mp</sub> = ${vmp.toFixed(0)} m/s</div>
        <div class="info-item">v<sub>avg</sub> = ${vavg.toFixed(0)} m/s</div>
        <div class="info-item">v<sub>rms</sub> = ${vrms.toFixed(0)} m/s</div>
      `;

      requestAnimationFrame(draw);
    };

    draw();
  },

  // Stress-Strain Curve
  stressStrain(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    let strain = 0;
    let isStretching = false;

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;

    // Stress-strain curve data points
    const curve = (e) => {
      if (e < 0.002) return e * 200000; // Elastic region (E = 200 GPa for steel)
      if (e < 0.02) return 400 + (e - 0.002) * 5000; // Yield plateau
      if (e < 0.15) return 500 + (e - 0.02) * 2000; // Strain hardening
      return 760 - (e - 0.15) * 3000; // Necking
    };

    const draw = () => {
      const colors = self.getColors();

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Stress-Strain Curve (Steel)', width / 2, 25);

      // Axes
      const axisX = 70;
      const axisY = height - 50;
      const graphW = width - 100;
      const graphH = height - 90;

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(axisX, 40);
      ctx.lineTo(axisX, axisY);
      ctx.lineTo(axisX + graphW, axisY);
      ctx.stroke();

      // Axis labels
      ctx.fillStyle = colors.textSecondary;
      ctx.font = '11px system-ui';
      ctx.save();
      ctx.translate(25, height / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = 'center';
      ctx.fillText('Stress (MPa)', 0, 0);
      ctx.restore();
      ctx.textAlign = 'center';
      ctx.fillText('Strain', axisX + graphW / 2, axisY + 25);

      // Draw curve
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let e = 0; e <= Math.min(strain, 0.2); e += 0.001) {
        const stress = curve(e);
        const x = axisX + (e / 0.2) * graphW;
        const y = axisY - (stress / 800) * graphH;
        if (e === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Current point
      if (strain > 0) {
        const currentStress = curve(strain);
        const cx = axisX + (strain / 0.2) * graphW;
        const cy = axisY - (currentStress / 800) * graphH;

        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Region labels
      ctx.fillStyle = colors.textSecondary;
      ctx.font = '10px system-ui';

      // Elastic region
      if (strain > 0.001) {
        ctx.fillText('Elastic', axisX + 30, axisY - graphH * 0.3);
      }

      // Yield point
      const yieldX = axisX + (0.002 / 0.2) * graphW;
      ctx.strokeStyle = colors.green;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(yieldX, axisY);
      ctx.lineTo(yieldX, axisY - graphH * 0.5);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = colors.green;
      ctx.fillText('Yield', yieldX, axisY - graphH * 0.55);

      // Ultimate strength
      if (strain > 0.1) {
        ctx.fillStyle = colors.orange;
        ctx.fillText('Ultimate', axisX + (0.15 / 0.2) * graphW, 50);
      }

      const currentStress = curve(strain);
      let region = 'Elastic';
      if (strain >= 0.002) region = 'Yield';
      if (strain >= 0.02) region = 'Strain Hardening';
      if (strain >= 0.15) region = 'Necking';

      info.innerHTML = `
        <div class="info-item">Strain: <strong>${(strain * 100).toFixed(2)}%</strong></div>
        <div class="info-item">Stress: <strong>${currentStress.toFixed(0)} MPa</strong></div>
        <div class="info-item">Region: <strong>${region}</strong></div>
      `;

      if (isStretching && strain < 0.2) {
        strain += 0.001;
      }

      requestAnimationFrame(draw);
    };

    const stretchBtn = this.createButton(controls, 'Apply Force', () => {
      isStretching = true;
    });

    const resetBtn = this.createButton(controls, 'Reset', () => {
      strain = 0;
      isStretching = false;
    });

    draw();
  },

  // Doppler Effect
  dopplerEffect(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const sourceSpeedSlider = this.createSlider(controls, 'Source Speed', 0, 100, 50, 5, ' m/s');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let sourceX = 100;
    let wavefronts = [];
    let time = 0;
    const soundSpeed = 340;
    const frequency = 440;

    const draw = () => {
      const colors = self.getColors();
      const vs = parseFloat(sourceSpeedSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Doppler Effect', width / 2, 25);

      // Update source position
      sourceX += vs * 0.05;
      if (sourceX > width - 50) sourceX = 50;

      // Emit new wavefront periodically
      if (time % 20 === 0) {
        wavefronts.push({ x: sourceX, y: height / 2, radius: 0, birth: time });
      }

      // Draw and update wavefronts
      wavefronts = wavefronts.filter(w => w.radius < 400);
      wavefronts.forEach(w => {
        w.radius += soundSpeed * 0.05;

        ctx.strokeStyle = colors.blue + '60';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Draw source
      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(sourceX, height / 2, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.bg;
      ctx.font = 'bold 12px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('S', sourceX, height / 2);

      // Draw observers
      const observer1X = 50;
      const observer2X = width - 50;

      ctx.fillStyle = colors.green;
      ctx.beginPath();
      ctx.arc(observer1X, height / 2, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.bg;
      ctx.fillText('O₁', observer1X, height / 2);

      ctx.fillStyle = colors.purple;
      ctx.beginPath();
      ctx.arc(observer2X, height / 2, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.bg;
      ctx.fillText('O₂', observer2X, height / 2);

      // Calculate observed frequencies
      const f1 = frequency * soundSpeed / (soundSpeed + vs); // Receding
      const f2 = frequency * soundSpeed / (soundSpeed - vs); // Approaching

      // Labels
      ctx.fillStyle = colors.green;
      ctx.font = '11px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText('Receding', observer1X, height / 2 + 20);
      ctx.fillText('f = ' + f1.toFixed(0) + ' Hz', observer1X, height / 2 + 35);

      ctx.fillStyle = colors.purple;
      ctx.fillText('Approaching', observer2X, height / 2 + 20);
      ctx.fillText('f = ' + f2.toFixed(0) + ' Hz', observer2X, height / 2 + 35);

      // Direction arrow
      if (vs > 0) {
        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sourceX + 25, height / 2);
        ctx.lineTo(sourceX + 50, height / 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(sourceX + 50, height / 2);
        ctx.lineTo(sourceX + 42, height / 2 - 5);
        ctx.moveTo(sourceX + 50, height / 2);
        ctx.lineTo(sourceX + 42, height / 2 + 5);
        ctx.stroke();
      }

      info.innerHTML = `
        <div class="info-item">Source: f₀ = ${frequency} Hz</div>
        <div class="info-item">v<sub>s</sub> = ${vs} m/s, v<sub>sound</sub> = ${soundSpeed} m/s</div>
        <div class="info-item">f' = f₀ × v/(v ± v<sub>s</sub>)</div>
      `;

      time++;
      requestAnimationFrame(draw);
    };

    draw();
  },

  // Wave Motion Animation
  waveMotion(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 300);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const freqSlider = this.createSlider(controls, 'Frequency', 0.5, 3, 1, 0.1, ' Hz');
    const ampSlider = this.createSlider(controls, 'Amplitude', 20, 60, 40, 5, ' px');
    const waveTypes = ['Transverse', 'Longitudinal'];
    let currentType = 0;

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let time = 0;

    const draw = () => {
      const colors = self.getColors();
      const freq = parseFloat(freqSlider.value);
      const amp = parseFloat(ampSlider.value);
      const wavelength = 100;
      const omega = 2 * Math.PI * freq;
      const k = 2 * Math.PI / wavelength;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(waveTypes[currentType] + ' Wave', width / 2, 25);

      const centerY = height / 2;

      // Draw equilibrium line
      ctx.strokeStyle = colors.axis;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(20, centerY);
      ctx.lineTo(width - 20, centerY);
      ctx.stroke();
      ctx.setLineDash([]);

      if (currentType === 0) {
        // Transverse wave
        ctx.strokeStyle = colors.blue;
        ctx.lineWidth = 3;
        ctx.beginPath();

        for (let x = 20; x < width - 20; x++) {
          const y = centerY + amp * Math.sin(k * x - omega * time);
          if (x === 20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Show particle motion
        const particleX = 150;
        const particleY = centerY + amp * Math.sin(k * particleX - omega * time);

        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.arc(particleX, particleY, 8, 0, Math.PI * 2);
        ctx.fill();

        // Motion arrow
        const vy = -amp * omega * Math.cos(k * particleX - omega * time);
        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(particleX, particleY);
        ctx.lineTo(particleX, particleY - vy * 0.5);
        ctx.stroke();

        ctx.fillStyle = colors.textSecondary;
        ctx.font = '10px system-ui';
        ctx.textAlign = 'left';
        ctx.fillText('Particle motion ↕', particleX + 15, particleY);
      } else {
        // Longitudinal wave (compression/rarefaction)
        const numParticles = 50;
        const spacing = (width - 40) / numParticles;

        for (let i = 0; i < numParticles; i++) {
          const baseX = 20 + i * spacing;
          const displacement = amp * 0.3 * Math.sin(k * baseX - omega * time);
          const x = baseX + displacement;

          // Vary opacity based on density
          const density = 1 - 0.3 * Math.cos(k * baseX - omega * time);
          ctx.fillStyle = colors.blue + Math.floor(density * 255).toString(16).padStart(2, '0');
          ctx.beginPath();
          ctx.arc(x, centerY, 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Labels for compression/rarefaction
        ctx.fillStyle = colors.textSecondary;
        ctx.font = '10px system-ui';
        ctx.textAlign = 'center';

        const compressionX = 20 + (wavelength * 0.25);
        const rarefactionX = 20 + (wavelength * 0.75);
        ctx.fillText('C', compressionX, centerY - 30);
        ctx.fillText('R', rarefactionX, centerY - 30);
      }

      // Wave direction arrow
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(width - 100, centerY + 60);
      ctx.lineTo(width - 50, centerY + 60);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width - 50, centerY + 60);
      ctx.lineTo(width - 58, centerY + 55);
      ctx.moveTo(width - 50, centerY + 60);
      ctx.lineTo(width - 58, centerY + 65);
      ctx.stroke();
      ctx.fillStyle = colors.green;
      ctx.font = '10px system-ui';
      ctx.fillText('Wave propagation →', width - 75, centerY + 80);

      const period = 1 / freq;
      const velocity = wavelength * freq;

      info.innerHTML = `
        <div class="info-item">λ = ${wavelength} px</div>
        <div class="info-item">T = ${period.toFixed(2)} s</div>
        <div class="info-item">v = fλ = ${velocity.toFixed(0)} px/s</div>
      `;

      time += 0.016;
      requestAnimationFrame(draw);
    };

    const toggleBtn = this.createButton(controls, 'Toggle Wave Type', () => {
      currentType = 1 - currentType;
    });

    draw();
  },

  // SHM Energy Visualization
  shmEnergy(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 500, 350);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    const ampSlider = this.createSlider(controls, 'Amplitude', 30, 80, 50, 5, ' px');

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    let time = 0;
    const omega = 2;

    const draw = () => {
      const colors = self.getColors();
      const A = parseFloat(ampSlider.value);

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Energy in Simple Harmonic Motion', width / 2, 20);

      // Calculate current values
      const x = A * Math.cos(omega * time);
      const v = -A * omega * Math.sin(omega * time);
      const PE = 0.5 * x * x; // Simplified (k=1)
      const KE = 0.5 * v * v;
      const totalE = 0.5 * A * A;

      // Draw oscillator
      const centerX = 100;
      const centerY = 100;
      const massX = centerX + x;

      // Wall
      ctx.fillStyle = colors.axis;
      ctx.fillRect(20, centerY - 30, 10, 60);

      // Spring
      ctx.strokeStyle = colors.axisLabel;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(30, centerY);
      const coils = 8;
      const springWidth = 10;
      for (let i = 0; i <= coils; i++) {
        const sx = 30 + (i / coils) * (massX - 50);
        const sy = centerY + (i % 2 === 0 ? springWidth : -springWidth) * (i > 0 && i < coils ? 1 : 0);
        ctx.lineTo(sx, sy);
      }
      ctx.lineTo(massX - 15, centerY);
      ctx.stroke();

      // Mass
      ctx.fillStyle = colors.blue;
      ctx.fillRect(massX - 15, centerY - 15, 30, 30);

      // Equilibrium marker
      ctx.strokeStyle = colors.axis;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - 50);
      ctx.lineTo(centerX, centerY + 50);
      ctx.stroke();
      ctx.setLineDash([]);

      // Energy bar chart
      const barX = 250;
      const barY = 50;
      const barW = 60;
      const barH = 120;
      const scale = barH / totalE;

      // PE bar
      ctx.fillStyle = colors.orange;
      ctx.fillRect(barX, barY + barH - PE * scale, barW, PE * scale);
      ctx.strokeStyle = colors.axis;
      ctx.strokeRect(barX, barY, barW, barH);
      ctx.fillStyle = colors.text;
      ctx.font = '11px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('PE', barX + barW / 2, barY + barH + 15);

      // KE bar
      ctx.fillStyle = colors.green;
      ctx.fillRect(barX + 80, barY + barH - KE * scale, barW, KE * scale);
      ctx.strokeStyle = colors.axis;
      ctx.strokeRect(barX + 80, barY, barW, barH);
      ctx.fillText('KE', barX + 80 + barW / 2, barY + barH + 15);

      // Total bar
      ctx.fillStyle = colors.purple;
      ctx.fillRect(barX + 160, barY + barH - totalE * scale, barW, totalE * scale);
      ctx.strokeStyle = colors.axis;
      ctx.strokeRect(barX + 160, barY, barW, barH);
      ctx.fillText('Total', barX + 160 + barW / 2, barY + barH + 15);

      // Energy vs position graph
      const graphX = 250;
      const graphY = 220;
      const graphW = 200;
      const graphH = 100;

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(graphX, graphY);
      ctx.lineTo(graphX, graphY + graphH);
      ctx.lineTo(graphX + graphW, graphY + graphH);
      ctx.stroke();

      // PE curve (parabola)
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let px = -A; px <= A; px += 2) {
        const gx = graphX + graphW / 2 + (px / A) * (graphW / 2 - 10);
        const gy = graphY + graphH - (0.5 * px * px / totalE) * graphH;
        if (px === -A) ctx.moveTo(gx, gy);
        else ctx.lineTo(gx, gy);
      }
      ctx.stroke();

      // KE curve (inverted parabola)
      ctx.strokeStyle = colors.green;
      ctx.beginPath();
      for (let px = -A; px <= A; px += 2) {
        const keVal = totalE - 0.5 * px * px;
        const gx = graphX + graphW / 2 + (px / A) * (graphW / 2 - 10);
        const gy = graphY + graphH - (keVal / totalE) * graphH;
        if (px === -A) ctx.moveTo(gx, gy);
        else ctx.lineTo(gx, gy);
      }
      ctx.stroke();

      // Total energy line
      ctx.strokeStyle = colors.purple;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(graphX, graphY);
      ctx.lineTo(graphX + graphW, graphY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Current position marker
      const currentGX = graphX + graphW / 2 + (x / A) * (graphW / 2 - 10);
      ctx.fillStyle = colors.yellow;
      ctx.beginPath();
      ctx.arc(currentGX, graphY + graphH, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = colors.textSecondary;
      ctx.font = '10px system-ui';
      ctx.fillText('x', graphX + graphW / 2, graphY + graphH + 15);
      ctx.fillText('E', graphX - 15, graphY + graphH / 2);

      info.innerHTML = `
        <div class="info-item">x = ${x.toFixed(1)} px</div>
        <div class="info-item">PE = ½kx² ∝ ${PE.toFixed(0)}</div>
        <div class="info-item">KE = ½mv² ∝ ${KE.toFixed(0)}</div>
        <div class="info-item">Total E = ${totalE.toFixed(0)} (constant)</div>
      `;

      time += 0.02;
      requestAnimationFrame(draw);
    };

    draw();
  },

  // ============================================
  // VERNIER CALIPER INTERACTIVE ANIMATION
  // ============================================

  vernierCaliper(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const { canvas, ctx, width, height } = this.createCanvas(container, 600, 280);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    container.appendChild(controls);

    // Create measurement slider
    const measurementSlider = this.createSlider(controls, 'Object Size', 0, 50, 23, 1, ' mm');

    // Create zero error slider
    const zeroErrorSlider = this.createSlider(controls, 'Zero Error', -5, 5, 0, 1, '');

    // New measurement button
    this.createButton(controls, 'Random Measurement', () => {
      measurementSlider.value = Math.floor(Math.random() * 45) + 5;
      measurementSlider.dispatchEvent(new Event('input'));
    });

    const info = document.createElement('div');
    info.className = 'anim-info';
    container.appendChild(info);

    const self = this;
    const LC = 0.1; // Least count in mm (0.01 cm)

    const draw = () => {
      const colors = self.getColors();
      const measurement = parseFloat(measurementSlider.value);
      const zeroError = parseFloat(zeroErrorSlider.value) * LC;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Scale: 1 mm = 8 pixels
      const scale = 8;
      const startX = 50;
      const mainScaleY = 80;
      const vernierY = 130;

      // Draw main scale beam
      ctx.fillStyle = '#52525b';
      ctx.fillRect(startX - 10, mainScaleY - 10, 520, 50);

      // Draw main scale markings (0-6 cm)
      ctx.strokeStyle = colors.text;
      ctx.fillStyle = colors.text;
      ctx.font = '11px monospace';
      ctx.textAlign = 'center';

      for (let mm = 0; mm <= 60; mm++) {
        const x = startX + mm * scale;
        const isCm = mm % 10 === 0;
        const isHalfCm = mm % 5 === 0 && !isCm;

        ctx.beginPath();
        ctx.moveTo(x, mainScaleY);
        if (isCm) {
          ctx.lineTo(x, mainScaleY - 20);
          ctx.fillText(mm / 10, x, mainScaleY - 25);
        } else if (isHalfCm) {
          ctx.lineTo(x, mainScaleY - 15);
        } else {
          ctx.lineTo(x, mainScaleY - 10);
        }
        ctx.stroke();
      }

      // "cm" label
      ctx.font = '10px system-ui';
      ctx.fillText('cm', startX + 500, mainScaleY - 25);

      // Calculate vernier position based on measurement
      const vernierOffset = measurement * scale; // Position in pixels

      // Draw vernier scale body
      ctx.fillStyle = '#3f3f46';
      ctx.fillRect(startX + vernierOffset - 5, vernierY - 5, 100, 40);

      // Draw vernier scale markings (10 divisions spanning 9 mm = 72 pixels)
      const vernierDivWidth = 9 * scale / 10; // 7.2 pixels per vernier division

      ctx.strokeStyle = colors.text;
      ctx.fillStyle = colors.text;
      ctx.font = '9px monospace';

      for (let i = 0; i <= 10; i++) {
        const x = startX + vernierOffset + i * vernierDivWidth;
        const isMain = i === 0 || i === 5 || i === 10;

        ctx.beginPath();
        ctx.moveTo(x, vernierY);
        if (isMain) {
          ctx.lineTo(x, vernierY + 15);
          ctx.fillText(i, x, vernierY + 25);
        } else {
          ctx.lineTo(x, vernierY + 10);
        }
        ctx.stroke();
      }

      // Draw jaws
      // Fixed jaw (left)
      ctx.fillStyle = '#71717a';
      ctx.beginPath();
      ctx.moveTo(startX - 5, mainScaleY - 10);
      ctx.lineTo(startX - 5, 30);
      ctx.lineTo(startX + 15, 15);
      ctx.lineTo(startX + 15, mainScaleY - 10);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Movable jaw
      ctx.fillStyle = '#52525b';
      ctx.beginPath();
      ctx.moveTo(startX + vernierOffset - 5, mainScaleY + 40);
      ctx.lineTo(startX + vernierOffset - 5, 30);
      ctx.lineTo(startX + vernierOffset - 25, 15);
      ctx.lineTo(startX + vernierOffset - 25, mainScaleY + 40);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Object being measured (between jaws)
      if (measurement > 0) {
        ctx.fillStyle = colors.orange + '80';
        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 2;
        ctx.fillRect(startX + 16, 20, measurement * scale - 22, 50);
        ctx.strokeRect(startX + 16, 20, measurement * scale - 22, 50);
        ctx.lineWidth = 1;
      }

      // Highlight coinciding vernier division
      const MSR = Math.floor(measurement); // Main scale reading in mm
      const VC = Math.round((measurement - MSR) * 10); // Vernier coincidence

      // Find which vernier line coincides with a main scale line
      const coincideX = startX + vernierOffset + VC * vernierDivWidth;

      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(coincideX, vernierY + 5, 8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.lineWidth = 1;

      // Pointer to coinciding line
      ctx.fillStyle = colors.green;
      ctx.font = '10px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('Coinciding', coincideX + 12, vernierY + 8);

      // Labels
      ctx.fillStyle = colors.blue;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('MAIN SCALE', startX + 200, mainScaleY - 35);
      ctx.fillText('VERNIER SCALE', startX + vernierOffset + 10, vernierY + 50);

      // Show zero mark positions
      ctx.fillStyle = '#34d399';
      ctx.font = '10px system-ui';
      ctx.fillText('0 (MS)', startX - 5, mainScaleY + 55);
      ctx.fillText('0 (VS)', startX + vernierOffset - 5, vernierY - 10);

      // Calculate readings
      const observedReading = measurement;
      const actualReading = observedReading - zeroError;
      const MSRcm = (MSR / 10).toFixed(1);

      // Update info panel
      const zeroErrorStr = zeroError === 0 ? 'None' :
                          (zeroError > 0 ? '+' + zeroError.toFixed(1) + ' mm' : zeroError.toFixed(1) + ' mm');
      const correctionStr = zeroError === 0 ? 'None needed' :
                           (zeroError > 0 ? 'Subtract ' + Math.abs(zeroError).toFixed(1) + ' mm' : 'Add ' + Math.abs(zeroError).toFixed(1) + ' mm');

      info.innerHTML =
        '<div class="info-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">' +
          '<div>' +
            '<div class="info-item"><strong>Step 1: MSR</strong> = ' + MSRcm + ' cm (' + MSR + ' mm)</div>' +
            '<div class="info-item"><strong>Step 2: VC</strong> = ' + VC + ' (' + VC + 'th division coincides)</div>' +
            '<div class="info-item"><strong>Step 3: Reading</strong> = MSR + VC × LC</div>' +
          '</div>' +
          '<div>' +
            '<div class="info-item">= ' + MSR + ' + ' + VC + ' × 0.1 = <strong>' + observedReading.toFixed(1) + ' mm</strong></div>' +
            '<div class="info-item">Zero Error: <strong>' + zeroErrorStr + '</strong></div>' +
            '<div class="info-item">Correction: ' + correctionStr + '</div>' +
            '<div class="info-item" style="color: ' + colors.green + '">Actual = <strong>' + actualReading.toFixed(1) + ' mm</strong> = <strong>' + (actualReading/10).toFixed(2) + ' cm</strong></div>' +
          '</div>' +
        '</div>';
    };

    // Redraw when sliders change
    measurementSlider.addEventListener('input', draw);
    zeroErrorSlider.addEventListener('input', draw);

    // Initial draw
    draw();
  },

  // ============================================
  // INTERACTIVE PENDULUM ANIMATION
  // ============================================

  /**
   * Interactive Simple Pendulum Animation
   * Features:
   * - Drag bob to set initial displacement
   * - Adjustable amplitude and length sliders
   * - Play/Pause and Reset controls
   * - Real-time display of position, velocity, acceleration, period, frequency, phase
   * - Energy bar showing KE vs PE
   * - Synchronized sine wave graph
   */
  interactivePendulum(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container pendulum-animation';

    const self = this;
    const colors = this.getColors();

    // Create main layout
    const mainLayout = document.createElement('div');
    mainLayout.className = 'pendulum-layout';
    mainLayout.style.cssText = 'display: grid; grid-template-columns: 1fr 280px; gap: 20px;';
    container.appendChild(mainLayout);

    // Left side: Canvas area
    const canvasArea = document.createElement('div');
    canvasArea.style.cssText = 'display: flex; flex-direction: column; align-items: center;';
    mainLayout.appendChild(canvasArea);

    // Create main canvas for pendulum
    const canvasWidth = 400;
    const canvasHeight = 350;
    const { canvas, ctx } = this.createCanvas(canvasArea, canvasWidth, canvasHeight);
    canvas.style.cursor = 'grab';

    // Create sine wave canvas below
    const waveCanvasHeight = 100;
    const { canvas: waveCanvas, ctx: waveCtx } = this.createCanvas(canvasArea, canvasWidth, waveCanvasHeight);
    waveCanvas.style.marginTop = '10px';

    // Right side: Controls and Info
    const rightPanel = document.createElement('div');
    rightPanel.style.cssText = 'display: flex; flex-direction: column; gap: 15px;';
    mainLayout.appendChild(rightPanel);

    // Controls section
    const controlsSection = document.createElement('div');
    controlsSection.className = 'anim-controls';
    controlsSection.style.cssText = 'flex-direction: column; align-items: stretch; border-top: none; padding: 0;';
    rightPanel.appendChild(controlsSection);

    // Sliders
    const amplitudeSlider = this.createSlider(controlsSection, 'Amplitude', 5, 45, 30, 1, '\u00B0');
    const lengthSlider = this.createSlider(controlsSection, 'Length', 50, 200, 150, 5, ' px');

    // Buttons
    const buttonRow = document.createElement('div');
    buttonRow.style.cssText = 'display: flex; gap: 10px; justify-content: center; margin-top: 10px;';
    controlsSection.appendChild(buttonRow);

    let isPlaying = false;
    const playBtn = this.createButton(buttonRow, 'Play', () => {
      isPlaying = !isPlaying;
      playBtn.textContent = isPlaying ? 'Pause' : 'Play';
      if (isPlaying) animate();
    });

    const resetBtn = this.createButton(buttonRow, 'Reset', () => {
      isPlaying = false;
      playBtn.textContent = 'Play';
      state.theta = state.amplitude * Math.PI / 180;
      state.omega = 0;
      state.time = 0;
      state.phase = 0;
      waveTrail.length = 0;
      draw();
      drawWave();
    });

    // Energy bar section
    const energySection = document.createElement('div');
    energySection.style.cssText = 'background: var(--bg-tertiary, #18181b); border-radius: 8px; padding: 12px;';
    rightPanel.appendChild(energySection);

    const energyTitle = document.createElement('div');
    energyTitle.style.cssText = 'font-size: 0.85rem; color: var(--text-secondary, #a1a1aa); margin-bottom: 8px; font-weight: 500;';
    energyTitle.textContent = 'Energy Distribution';
    energySection.appendChild(energyTitle);

    const energyBar = document.createElement('div');
    energyBar.style.cssText = 'height: 24px; border-radius: 4px; overflow: hidden; display: flex; background: #27272a;';
    energySection.appendChild(energyBar);

    const keBar = document.createElement('div');
    keBar.style.cssText = 'height: 100%; background: #60a5fa; transition: width 0.05s ease;';
    energyBar.appendChild(keBar);

    const peBar = document.createElement('div');
    peBar.style.cssText = 'height: 100%; background: #34d399; transition: width 0.05s ease;';
    energyBar.appendChild(peBar);

    const energyLabels = document.createElement('div');
    energyLabels.style.cssText = 'display: flex; justify-content: space-between; margin-top: 6px; font-size: 0.75rem;';
    energySection.appendChild(energyLabels);

    const keLabel = document.createElement('span');
    keLabel.style.cssText = 'color: #60a5fa;';
    keLabel.innerHTML = '<span style="display: inline-block; width: 10px; height: 10px; background: #60a5fa; border-radius: 2px; margin-right: 4px;"></span>KE: 0%';
    energyLabels.appendChild(keLabel);

    const peLabel = document.createElement('span');
    peLabel.style.cssText = 'color: #34d399;';
    peLabel.innerHTML = '<span style="display: inline-block; width: 10px; height: 10px; background: #34d399; border-radius: 2px; margin-right: 4px;"></span>PE: 100%';
    energyLabels.appendChild(peLabel);

    // Info section
    const infoSection = document.createElement('div');
    infoSection.className = 'anim-info';
    infoSection.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 8px; padding: 0; margin: 0;';
    rightPanel.appendChild(infoSection);

    // Create info items
    const createInfoItem = (label, id, color = 'var(--accent-primary, #60a5fa)') => {
      const item = document.createElement('div');
      item.className = 'info-item';
      item.style.cssText = 'background: var(--bg-tertiary, #18181b); padding: 6px 10px; border-radius: 6px; font-size: 0.8rem;';
      item.innerHTML = `<span style="color: var(--text-secondary, #a1a1aa);">${label}:</span> <strong id="${id}" style="color: ${color};">0</strong>`;
      infoSection.appendChild(item);
      return item;
    };

    createInfoItem('\u03B8 (pos)', 'pendulum-theta');
    createInfoItem('\u03C9 (vel)', 'pendulum-omega');
    createInfoItem('\u03B1 (acc)', 'pendulum-alpha');
    createInfoItem('\u03D5 (phase)', 'pendulum-phase');
    createInfoItem('T (period)', 'pendulum-period');
    createInfoItem('f (freq)', 'pendulum-freq');
    createInfoItem('KE', 'pendulum-ke', '#60a5fa');
    createInfoItem('PE', 'pendulum-pe', '#34d399');

    // Simulation state
    const g = 9.8; // m/s^2
    const pixelsPerMeter = 100;

    const state = {
      amplitude: 30, // degrees
      length: 150, // pixels
      theta: 30 * Math.PI / 180, // current angle in radians
      omega: 0, // angular velocity
      time: 0,
      phase: 0,
      mass: 1, // kg (for energy calculations)
      isDragging: false
    };

    const waveTrail = [];
    const maxWavePoints = 200;

    // Pivot point
    const pivotX = canvasWidth / 2;
    const pivotY = 50;

    // Get bob position from angle
    const getBobPosition = () => {
      const L = state.length;
      const x = pivotX + L * Math.sin(state.theta);
      const y = pivotY + L * Math.cos(state.theta);
      return { x, y };
    };

    // Calculate physics values
    const calculatePhysics = () => {
      const L = state.length / pixelsPerMeter; // convert to meters
      const omegaNatural = Math.sqrt(g / L); // natural angular frequency
      const T = 2 * Math.PI / omegaNatural; // period
      const f = 1 / T; // frequency

      // Angular acceleration (for small angles: alpha = -g/L * theta)
      const alpha = -g / L * state.theta;

      // Energy calculations (normalized)
      const maxHeight = L * (1 - Math.cos(state.amplitude * Math.PI / 180));
      const currentHeight = L * (1 - Math.cos(state.theta));
      const totalEnergy = state.mass * g * maxHeight;
      const PE = state.mass * g * currentHeight;
      const KE = totalEnergy - PE;

      const kePct = totalEnergy > 0 ? (KE / totalEnergy) * 100 : 0;
      const pePct = totalEnergy > 0 ? (PE / totalEnergy) * 100 : 0;

      return {
        theta: state.theta * 180 / Math.PI,
        omega: state.omega,
        alpha: alpha,
        phase: (state.time * omegaNatural) % (2 * Math.PI),
        T: T,
        f: f,
        KE: KE,
        PE: PE,
        kePct: kePct,
        pePct: pePct,
        omegaNatural: omegaNatural
      };
    };

    // Update info display
    const updateInfo = (physics) => {
      const formatNum = (n, decimals = 2) => {
        if (Math.abs(n) < 0.01 && n !== 0) return n.toExponential(1);
        return n.toFixed(decimals);
      };

      const thetaEl = document.getElementById('pendulum-theta');
      const omegaEl = document.getElementById('pendulum-omega');
      const alphaEl = document.getElementById('pendulum-alpha');
      const phaseEl = document.getElementById('pendulum-phase');
      const periodEl = document.getElementById('pendulum-period');
      const freqEl = document.getElementById('pendulum-freq');
      const keEl = document.getElementById('pendulum-ke');
      const peEl = document.getElementById('pendulum-pe');

      if (thetaEl) {
        const thetaColor = physics.theta >= 0 ? '#34d399' : '#ef4444';
        thetaEl.textContent = formatNum(physics.theta, 1) + '\u00B0';
        thetaEl.style.color = thetaColor;
      }
      if (omegaEl) {
        const omegaColor = physics.omega >= 0 ? '#34d399' : '#ef4444';
        omegaEl.textContent = formatNum(physics.omega, 2) + ' rad/s';
        omegaEl.style.color = omegaColor;
      }
      if (alphaEl) {
        const alphaColor = physics.alpha >= 0 ? '#34d399' : '#ef4444';
        alphaEl.textContent = formatNum(physics.alpha, 2) + ' rad/s\u00B2';
        alphaEl.style.color = alphaColor;
      }
      if (phaseEl) phaseEl.textContent = formatNum(physics.phase, 2) + ' rad';
      if (periodEl) periodEl.textContent = formatNum(physics.T, 2) + ' s';
      if (freqEl) freqEl.textContent = formatNum(physics.f, 2) + ' Hz';
      if (keEl) keEl.textContent = formatNum(physics.KE, 3) + ' J';
      if (peEl) peEl.textContent = formatNum(physics.PE, 3) + ' J';

      // Update energy bar
      keBar.style.width = physics.kePct + '%';
      peBar.style.width = physics.pePct + '%';
      keLabel.innerHTML = '<span style="display: inline-block; width: 10px; height: 10px; background: #60a5fa; border-radius: 2px; margin-right: 4px;"></span>KE: ' + Math.round(physics.kePct) + '%';
      peLabel.innerHTML = '<span style="display: inline-block; width: 10px; height: 10px; background: #34d399; border-radius: 2px; margin-right: 4px;"></span>PE: ' + Math.round(physics.pePct) + '%';
    };

    // Draw pendulum
    const draw = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      const { x: bobX, y: bobY } = getBobPosition();

      // Draw vertical reference line (dashed)
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(pivotX, pivotY);
      ctx.lineTo(pivotX, pivotY + state.length + 50);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw arc showing amplitude range
      ctx.strokeStyle = colors.axis + '60';
      ctx.lineWidth = 1;
      ctx.beginPath();
      const arcRadius = state.length * 0.3;
      const ampRad = state.amplitude * Math.PI / 180;
      ctx.arc(pivotX, pivotY, arcRadius, Math.PI/2 - ampRad, Math.PI/2 + ampRad);
      ctx.stroke();

      // Draw angle indicator
      if (Math.abs(state.theta) > 0.01) {
        ctx.strokeStyle = '#60a5fa' + '80';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const angleRadius = 40;
        const startAngle = Math.PI / 2;
        const endAngle = Math.PI / 2 - state.theta;
        ctx.arc(pivotX, pivotY, angleRadius, Math.min(startAngle, endAngle), Math.max(startAngle, endAngle));
        ctx.stroke();

        // Angle label
        ctx.fillStyle = '#60a5fa';
        ctx.font = '12px system-ui';
        ctx.textAlign = 'center';
        const labelAngle = (startAngle + endAngle) / 2;
        const labelX = pivotX + (angleRadius + 15) * Math.cos(labelAngle);
        const labelY = pivotY + (angleRadius + 15) * Math.sin(labelAngle);
        ctx.fillText('\u03B8', labelX, labelY);
      }

      // Draw rope/string
      ctx.strokeStyle = colors.axisLabel;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(pivotX, pivotY);
      ctx.lineTo(bobX, bobY);
      ctx.stroke();

      // Draw pivot point
      ctx.fillStyle = colors.axis;
      ctx.beginPath();
      ctx.arc(pivotX, pivotY, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.bg;
      ctx.beginPath();
      ctx.arc(pivotX, pivotY, 4, 0, Math.PI * 2);
      ctx.fill();

      // Draw bob with glow effect
      const bobRadius = 25;

      // Glow
      const gradient = ctx.createRadialGradient(bobX, bobY, 0, bobX, bobY, bobRadius * 2);
      gradient.addColorStop(0, '#60a5fa40');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(bobX, bobY, bobRadius * 2, 0, Math.PI * 2);
      ctx.fill();

      // Bob
      ctx.fillStyle = '#60a5fa';
      ctx.beginPath();
      ctx.arc(bobX, bobY, bobRadius, 0, Math.PI * 2);
      ctx.fill();

      // Bob highlight
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.beginPath();
      ctx.arc(bobX - 8, bobY - 8, 8, 0, Math.PI * 2);
      ctx.fill();

      // Draw velocity vector if moving
      if (Math.abs(state.omega) > 0.05) {
        const vScale = 30;
        const vx = state.length * state.omega * Math.cos(state.theta);
        const vy = -state.length * state.omega * Math.sin(state.theta);
        const vMag = Math.sqrt(vx * vx + vy * vy);

        if (vMag > 0) {
          const normalizedVx = (vx / vMag) * Math.min(vMag, 80) * 0.5;
          const normalizedVy = (vy / vMag) * Math.min(vMag, 80) * 0.5;

          ctx.strokeStyle = '#34d399';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(bobX, bobY);
          ctx.lineTo(bobX + normalizedVx, bobY + normalizedVy);
          ctx.stroke();

          // Arrow head
          const arrowAngle = Math.atan2(normalizedVy, normalizedVx);
          ctx.beginPath();
          ctx.moveTo(bobX + normalizedVx, bobY + normalizedVy);
          ctx.lineTo(
            bobX + normalizedVx - 10 * Math.cos(arrowAngle - 0.4),
            bobY + normalizedVy - 10 * Math.sin(arrowAngle - 0.4)
          );
          ctx.lineTo(
            bobX + normalizedVx - 10 * Math.cos(arrowAngle + 0.4),
            bobY + normalizedVy - 10 * Math.sin(arrowAngle + 0.4)
          );
          ctx.closePath();
          ctx.fillStyle = '#34d399';
          ctx.fill();
        }
      }

      // Draw length indicator
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '11px system-ui';
      ctx.textAlign = 'left';
      const midX = (pivotX + bobX) / 2 + 15;
      const midY = (pivotY + bobY) / 2;
      ctx.fillText('L = ' + state.length + ' px', midX, midY);

      // Instructions
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '11px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Drag the bob to set initial position', canvasWidth / 2, canvasHeight - 10);
    };

    // Draw wave graph
    const drawWave = () => {
      const colors = self.getColors();
      waveCtx.fillStyle = colors.bg;
      waveCtx.fillRect(0, 0, canvasWidth, waveCanvasHeight);

      const centerY = waveCanvasHeight / 2;
      const amplitude = (waveCanvasHeight / 2 - 10) * (state.amplitude / 45);

      // Draw axes
      waveCtx.strokeStyle = colors.axis;
      waveCtx.lineWidth = 1;
      waveCtx.beginPath();
      waveCtx.moveTo(0, centerY);
      waveCtx.lineTo(canvasWidth, centerY);
      waveCtx.stroke();

      // Draw grid lines
      waveCtx.strokeStyle = colors.grid;
      waveCtx.setLineDash([3, 3]);
      for (let y of [centerY - amplitude, centerY + amplitude]) {
        waveCtx.beginPath();
        waveCtx.moveTo(0, y);
        waveCtx.lineTo(canvasWidth, y);
        waveCtx.stroke();
      }
      waveCtx.setLineDash([]);

      // Labels
      waveCtx.fillStyle = colors.axisLabel;
      waveCtx.font = '10px system-ui';
      waveCtx.textAlign = 'left';
      waveCtx.fillText('\u03B8(t)', 5, 15);
      waveCtx.textAlign = 'right';
      waveCtx.fillText('t \u2192', canvasWidth - 5, centerY - 5);

      // Draw wave trail
      if (waveTrail.length > 1) {
        waveCtx.strokeStyle = '#60a5fa';
        waveCtx.lineWidth = 2;
        waveCtx.beginPath();

        for (let i = 0; i < waveTrail.length; i++) {
          const x = canvasWidth - (waveTrail.length - i) * (canvasWidth / maxWavePoints);
          const y = centerY - waveTrail[i] * (waveCanvasHeight / 2 - 10) / (45 * Math.PI / 180);

          if (i === 0) waveCtx.moveTo(x, y);
          else waveCtx.lineTo(x, y);
        }
        waveCtx.stroke();

        // Current position marker
        const lastX = canvasWidth;
        const lastY = centerY - waveTrail[waveTrail.length - 1] * (waveCanvasHeight / 2 - 10) / (45 * Math.PI / 180);

        waveCtx.fillStyle = '#60a5fa';
        waveCtx.beginPath();
        waveCtx.arc(lastX - 5, lastY, 5, 0, Math.PI * 2);
        waveCtx.fill();
      }
    };

    // Animation loop
    let lastTime = 0;
    const animate = (timestamp = 0) => {
      if (!isPlaying) return;

      const dt = Math.min((timestamp - lastTime) / 1000, 0.05); // Cap dt to prevent jumps
      lastTime = timestamp;

      if (dt > 0) {
        // Physics simulation using small angle approximation
        // d^2(theta)/dt^2 = -(g/L) * theta
        const L = state.length / pixelsPerMeter;
        const omegaNatural = Math.sqrt(g / L);

        // Simple Euler integration (for small angles this works well)
        const alpha = -omegaNatural * omegaNatural * state.theta;
        state.omega += alpha * dt;
        state.theta += state.omega * dt;
        state.time += dt;

        // Add damping (very small, for realism)
        state.omega *= 0.9995;

        // Store for wave graph
        waveTrail.push(state.theta);
        if (waveTrail.length > maxWavePoints) waveTrail.shift();
      }

      draw();
      drawWave();

      const physics = calculatePhysics();
      updateInfo(physics);

      requestAnimationFrame(animate);
    };

    // Mouse/touch handling for dragging
    const getAngleFromPoint = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left - pivotX;
      const y = clientY - rect.top - pivotY;
      return Math.atan2(x, y);
    };

    const isPointOnBob = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const { x: bobX, y: bobY } = getBobPosition();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const dist = Math.sqrt((x - bobX) ** 2 + (y - bobY) ** 2);
      return dist <= 30;
    };

    canvas.addEventListener('mousedown', (e) => {
      if (isPointOnBob(e.clientX, e.clientY)) {
        state.isDragging = true;
        isPlaying = false;
        playBtn.textContent = 'Play';
        canvas.style.cursor = 'grabbing';
      }
    });

    canvas.addEventListener('mousemove', (e) => {
      if (state.isDragging) {
        const newTheta = getAngleFromPoint(e.clientX, e.clientY);
        // Clamp to max amplitude
        const maxTheta = 60 * Math.PI / 180;
        state.theta = Math.max(-maxTheta, Math.min(maxTheta, newTheta));
        state.amplitude = Math.abs(state.theta) * 180 / Math.PI;
        amplitudeSlider.value = Math.round(state.amplitude);
        amplitudeSlider.dispatchEvent(new Event('input'));
        state.omega = 0;
        draw();
        drawWave();
        updateInfo(calculatePhysics());
      } else if (isPointOnBob(e.clientX, e.clientY)) {
        canvas.style.cursor = 'grab';
      } else {
        canvas.style.cursor = 'default';
      }
    });

    canvas.addEventListener('mouseup', () => {
      if (state.isDragging) {
        state.isDragging = false;
        canvas.style.cursor = 'grab';
      }
    });

    canvas.addEventListener('mouseleave', () => {
      if (state.isDragging) {
        state.isDragging = false;
        canvas.style.cursor = 'default';
      }
    });

    // Touch support
    canvas.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      if (isPointOnBob(touch.clientX, touch.clientY)) {
        e.preventDefault();
        state.isDragging = true;
        isPlaying = false;
        playBtn.textContent = 'Play';
      }
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
      if (state.isDragging) {
        e.preventDefault();
        const touch = e.touches[0];
        const newTheta = getAngleFromPoint(touch.clientX, touch.clientY);
        const maxTheta = 60 * Math.PI / 180;
        state.theta = Math.max(-maxTheta, Math.min(maxTheta, newTheta));
        state.amplitude = Math.abs(state.theta) * 180 / Math.PI;
        amplitudeSlider.value = Math.round(state.amplitude);
        amplitudeSlider.dispatchEvent(new Event('input'));
        state.omega = 0;
        draw();
        drawWave();
        updateInfo(calculatePhysics());
      }
    }, { passive: false });

    canvas.addEventListener('touchend', () => {
      state.isDragging = false;
    });

    // Slider event handlers
    amplitudeSlider.addEventListener('input', () => {
      state.amplitude = parseFloat(amplitudeSlider.value);
      if (!isPlaying) {
        state.theta = state.amplitude * Math.PI / 180;
        state.omega = 0;
        draw();
        drawWave();
        updateInfo(calculatePhysics());
      }
    });

    lengthSlider.addEventListener('input', () => {
      state.length = parseFloat(lengthSlider.value);
      draw();
      drawWave();
      updateInfo(calculatePhysics());
    });

    // Responsive layout for mobile
    const handleResize = () => {
      if (window.innerWidth < 700) {
        mainLayout.style.gridTemplateColumns = '1fr';
        canvasArea.style.order = '1';
        rightPanel.style.order = '2';
      } else {
        mainLayout.style.gridTemplateColumns = '1fr 280px';
        canvasArea.style.order = '';
        rightPanel.style.order = '';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Initial draw
    draw();
    drawWave();
    updateInfo(calculatePhysics());
  },

  // ============================================
  // INTERACTIVE PROJECTILE MOTION ANIMATION
  // Full-featured projectile motion simulator with controls
  // ============================================
  projectileMotionInteractive(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container projectile-animation';

    const self = this;
    const colors = this.getColors();

    // Create main layout
    const mainLayout = document.createElement('div');
    mainLayout.className = 'projectile-layout';
    mainLayout.style.cssText = 'display: grid; grid-template-columns: 1fr 300px; gap: 20px;';
    container.appendChild(mainLayout);

    // Left side: Canvas area
    const canvasArea = document.createElement('div');
    canvasArea.style.cssText = 'display: flex; flex-direction: column; align-items: center;';
    mainLayout.appendChild(canvasArea);

    // Create main canvas for projectile
    const canvasWidth = 550;
    const canvasHeight = 400;
    const { canvas, ctx } = this.createCanvas(canvasArea, canvasWidth, canvasHeight);

    // Right side: Controls and Info
    const rightPanel = document.createElement('div');
    rightPanel.style.cssText = 'display: flex; flex-direction: column; gap: 15px;';
    mainLayout.appendChild(rightPanel);

    // Controls section
    const controlsSection = document.createElement('div');
    controlsSection.className = 'anim-controls';
    controlsSection.style.cssText = 'flex-direction: column; align-items: stretch; border-top: none; padding: 0;';
    rightPanel.appendChild(controlsSection);

    // Sliders
    const velocitySlider = this.createSlider(controlsSection, 'Initial Velocity (u)', 10, 100, 50, 1, ' m/s');
    const angleSlider = this.createSlider(controlsSection, 'Launch Angle (\u03B8)', 0, 90, 45, 1, '\u00B0');

    // Gravity toggle section
    const gravitySection = document.createElement('div');
    gravitySection.style.cssText = 'display: flex; align-items: center; gap: 10px; margin-top: 5px;';
    controlsSection.appendChild(gravitySection);

    const gravityLabel = document.createElement('span');
    gravityLabel.style.cssText = 'font-size: 0.85rem; color: var(--text-secondary, #a1a1aa);';
    gravityLabel.textContent = 'Gravity:';
    gravitySection.appendChild(gravityLabel);

    const earthBtn = document.createElement('button');
    earthBtn.className = 'anim-btn';
    earthBtn.style.cssText = 'font-size: 0.75rem; padding: 4px 12px;';
    earthBtn.textContent = 'Earth (9.8)';
    earthBtn.classList.add('active');
    gravitySection.appendChild(earthBtn);

    const moonBtn = document.createElement('button');
    moonBtn.className = 'anim-btn';
    moonBtn.style.cssText = 'font-size: 0.75rem; padding: 4px 12px;';
    moonBtn.textContent = 'Moon (1.6)';
    gravitySection.appendChild(moonBtn);

    // Control buttons
    const buttonRow = document.createElement('div');
    buttonRow.style.cssText = 'display: flex; gap: 10px; justify-content: center; margin-top: 10px;';
    controlsSection.appendChild(buttonRow);

    let isPlaying = false;
    let animationId = null;

    const playBtn = this.createButton(buttonRow, 'Play', () => {
      if (!isPlaying) {
        isPlaying = true;
        playBtn.textContent = 'Pause';
        animate();
      } else {
        isPlaying = false;
        playBtn.textContent = 'Play';
        if (animationId) cancelAnimationFrame(animationId);
      }
    });

    const resetBtn = this.createButton(buttonRow, 'Reset', () => {
      isPlaying = false;
      playBtn.textContent = 'Play';
      if (animationId) cancelAnimationFrame(animationId);
      state.t = 0;
      state.trail = [];
      state.hasLanded = false;
      state.apexMarked = false;
      calculateTrajectory();
      draw();
      updateInfo();
    });

    // Complementary angles toggle
    const compareSection = document.createElement('div');
    compareSection.style.cssText = 'display: flex; align-items: center; gap: 10px; margin-top: 5px;';
    controlsSection.appendChild(compareSection);

    const compareCheckbox = document.createElement('input');
    compareCheckbox.type = 'checkbox';
    compareCheckbox.id = 'compare-angles';
    compareCheckbox.style.cssText = 'width: 16px; height: 16px;';
    compareSection.appendChild(compareCheckbox);

    const compareLabel = document.createElement('label');
    compareLabel.htmlFor = 'compare-angles';
    compareLabel.style.cssText = 'font-size: 0.85rem; color: var(--text-secondary, #a1a1aa); cursor: pointer;';
    compareLabel.textContent = 'Show complementary angle trajectory';
    compareSection.appendChild(compareLabel);

    // Calculated values display
    const calcSection = document.createElement('div');
    calcSection.style.cssText = 'background: var(--bg-tertiary, #18181b); border-radius: 8px; padding: 12px;';
    rightPanel.appendChild(calcSection);

    const calcTitle = document.createElement('div');
    calcTitle.style.cssText = 'font-size: 0.85rem; color: var(--text-secondary, #a1a1aa); margin-bottom: 8px; font-weight: 500;';
    calcTitle.textContent = 'Calculated Values';
    calcSection.appendChild(calcTitle);

    const calcGrid = document.createElement('div');
    calcGrid.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 0.8rem;';
    calcSection.appendChild(calcGrid);

    const createCalcItem = (label, id, color = '#60a5fa') => {
      const item = document.createElement('div');
      item.style.cssText = 'background: var(--bg-secondary, #09090b); padding: 6px 8px; border-radius: 4px;';
      item.innerHTML = `<span style="color: var(--text-secondary, #a1a1aa); font-size: 0.75rem;">${label}</span><br><strong id="${id}" style="color: ${color};">--</strong>`;
      calcGrid.appendChild(item);
      return item;
    };

    createCalcItem('Max Height (H)', 'proj-max-height', '#34d399');
    createCalcItem('Range (R)', 'proj-range', '#f59e0b');
    createCalcItem('Time of Flight (T)', 'proj-tof', '#60a5fa');
    createCalcItem('u\u2093 (horizontal)', 'proj-ux', '#60a5fa');
    createCalcItem('u\u1D67 (vertical)', 'proj-uy', '#34d399');
    createCalcItem('Angle for Max R', 'proj-max-angle', '#ef4444');

    // Real-time info section
    const infoSection = document.createElement('div');
    infoSection.style.cssText = 'background: var(--bg-tertiary, #18181b); border-radius: 8px; padding: 12px;';
    rightPanel.appendChild(infoSection);

    const infoTitle = document.createElement('div');
    infoTitle.style.cssText = 'font-size: 0.85rem; color: var(--text-secondary, #a1a1aa); margin-bottom: 8px; font-weight: 500;';
    infoTitle.textContent = 'Real-time Values';
    infoSection.appendChild(infoTitle);

    const infoGrid = document.createElement('div');
    infoGrid.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 0.8rem;';
    infoSection.appendChild(infoGrid);

    const createInfoItem = (label, id, color = '#fafafa') => {
      const item = document.createElement('div');
      item.style.cssText = 'background: var(--bg-secondary, #09090b); padding: 6px 8px; border-radius: 4px;';
      item.innerHTML = `<span style="color: var(--text-secondary, #a1a1aa); font-size: 0.75rem;">${label}</span><br><strong id="${id}" style="color: ${color};">0</strong>`;
      infoGrid.appendChild(item);
      return item;
    };

    createInfoItem('Time (t)', 'proj-time', '#fafafa');
    createInfoItem('Position x', 'proj-x', '#f59e0b');
    createInfoItem('Position y', 'proj-y', '#34d399');
    createInfoItem('v\u2093 (const)', 'proj-vx', '#60a5fa');
    createInfoItem('v\u1D67 (changes)', 'proj-vy', '#34d399');
    createInfoItem('Speed |v|', 'proj-speed', '#ef4444');

    // Velocity vector legend
    const legendSection = document.createElement('div');
    legendSection.style.cssText = 'display: flex; gap: 15px; justify-content: center; font-size: 0.75rem; margin-top: 10px;';
    rightPanel.appendChild(legendSection);

    const legendItem = (color, label) => {
      const item = document.createElement('div');
      item.style.cssText = 'display: flex; align-items: center; gap: 5px;';
      item.innerHTML = `<span style="display: inline-block; width: 20px; height: 3px; background: ${color};"></span><span style="color: var(--text-secondary);">${label}</span>`;
      return item;
    };

    legendSection.appendChild(legendItem('#60a5fa', 'v\u2093'));
    legendSection.appendChild(legendItem('#34d399', 'v\u1D67'));
    legendSection.appendChild(legendItem('#ef4444', 'v'));

    // Simulation state
    const state = {
      g: 9.8,
      u: 50,
      angle: 45,
      t: 0,
      trail: [],
      hasLanded: false,
      apexMarked: false,
      maxHeight: 0,
      range: 0,
      timeOfFlight: 0,
      ux: 0,
      uy: 0
    };

    // Canvas coordinates
    const groundY = canvasHeight - 50;
    const launchX = 50;
    const scale = 2.5; // pixels per meter

    // Calculate trajectory parameters
    const calculateTrajectory = () => {
      const angleRad = state.angle * Math.PI / 180;
      state.ux = state.u * Math.cos(angleRad);
      state.uy = state.u * Math.sin(angleRad);
      state.timeOfFlight = (2 * state.uy) / state.g;
      state.maxHeight = (state.uy * state.uy) / (2 * state.g);
      state.range = state.ux * state.timeOfFlight;

      // Adjust scale to fit trajectory on canvas
      const maxX = state.range;
      const maxY = state.maxHeight;
      const availableWidth = canvasWidth - launchX - 50;
      const availableHeight = groundY - 50;

      const scaleX = maxX > 0 ? availableWidth / maxX : 1;
      const scaleY = maxY > 0 ? availableHeight / maxY : 1;

      // Use the smaller scale to ensure both fit
      return Math.min(scaleX, scaleY, 3);
    };

    // Get position at time t
    const getPosition = (t, ux, uy, g) => {
      const x = ux * t;
      const y = uy * t - 0.5 * g * t * t;
      return { x, y };
    };

    // Get velocity at time t
    const getVelocity = (t, ux, uy, g) => {
      const vx = ux;
      const vy = uy - g * t;
      return { vx, vy };
    };

    // Update calculated values display
    const updateCalcDisplay = () => {
      const fmt = (n) => n.toFixed(2);

      const maxHeightEl = document.getElementById('proj-max-height');
      const rangeEl = document.getElementById('proj-range');
      const tofEl = document.getElementById('proj-tof');
      const uxEl = document.getElementById('proj-ux');
      const uyEl = document.getElementById('proj-uy');
      const maxAngleEl = document.getElementById('proj-max-angle');

      if (maxHeightEl) maxHeightEl.textContent = fmt(state.maxHeight) + ' m';
      if (rangeEl) rangeEl.textContent = fmt(state.range) + ' m';
      if (tofEl) tofEl.textContent = fmt(state.timeOfFlight) + ' s';
      if (uxEl) uxEl.textContent = fmt(state.ux) + ' m/s';
      if (uyEl) uyEl.textContent = fmt(state.uy) + ' m/s';
      if (maxAngleEl) maxAngleEl.textContent = '45\u00B0';
    };

    // Update real-time info
    const updateInfo = () => {
      const { vx, vy } = getVelocity(state.t, state.ux, state.uy, state.g);
      const { x, y } = getPosition(state.t, state.ux, state.uy, state.g);
      const speed = Math.sqrt(vx * vx + vy * vy);

      const fmt = (n) => n.toFixed(2);

      const timeEl = document.getElementById('proj-time');
      const xEl = document.getElementById('proj-x');
      const yEl = document.getElementById('proj-y');
      const vxEl = document.getElementById('proj-vx');
      const vyEl = document.getElementById('proj-vy');
      const speedEl = document.getElementById('proj-speed');

      if (timeEl) timeEl.textContent = fmt(state.t) + ' s';
      if (xEl) xEl.textContent = fmt(Math.max(0, x)) + ' m';
      if (yEl) yEl.textContent = fmt(Math.max(0, y)) + ' m';
      if (vxEl) vxEl.textContent = fmt(vx) + ' m/s';
      if (vyEl) {
        vyEl.textContent = fmt(vy) + ' m/s';
        vyEl.style.color = vy >= 0 ? '#34d399' : '#ef4444';
      }
      if (speedEl) speedEl.textContent = fmt(speed) + ' m/s';
    };

    // Draw arrow
    const drawArrow = (x1, y1, x2, y2, color, headLength = 10) => {
      const angle = Math.atan2(y2 - y1, x2 - x1);

      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Arrow head
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - headLength * Math.cos(angle - 0.4), y2 - headLength * Math.sin(angle - 0.4));
      ctx.lineTo(x2 - headLength * Math.cos(angle + 0.4), y2 - headLength * Math.sin(angle + 0.4));
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    // Draw the simulation
    const draw = () => {
      const colors = self.getColors();
      const currentScale = calculateTrajectory();

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Draw grid
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      for (let i = 0; i < canvasWidth; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, groundY);
        ctx.stroke();
      }
      for (let i = groundY; i > 0; i -= 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvasWidth, i);
        ctx.stroke();
      }

      // Draw ground
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(canvasWidth, groundY);
      ctx.stroke();

      // Ground pattern (grass-like)
      ctx.strokeStyle = '#34d399' + '40';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvasWidth; i += 15) {
        ctx.beginPath();
        ctx.moveTo(i, groundY);
        ctx.lineTo(i + 5, groundY + 8);
        ctx.stroke();
      }

      // Draw launch point
      ctx.fillStyle = colors.orange;
      ctx.beginPath();
      ctx.arc(launchX, groundY, 6, 0, Math.PI * 2);
      ctx.fill();

      // Draw launch angle indicator
      const angleRad = state.angle * Math.PI / 180;
      const indicatorLength = 60;
      ctx.strokeStyle = colors.axisLabel;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(launchX, groundY);
      ctx.lineTo(launchX + indicatorLength, groundY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Angle arc
      ctx.strokeStyle = '#f59e0b' + '80';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(launchX, groundY, 30, -angleRad, 0);
      ctx.stroke();

      // Angle label
      ctx.fillStyle = '#f59e0b';
      ctx.font = '12px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('\u03B8 = ' + state.angle + '\u00B0', launchX + 35, groundY - 10);

      // Draw complementary angle trajectory if enabled
      if (compareCheckbox.checked && state.angle !== 45 && state.angle !== 90 && state.angle !== 0) {
        const compAngle = 90 - state.angle;
        const compAngleRad = compAngle * Math.PI / 180;
        const compUx = state.u * Math.cos(compAngleRad);
        const compUy = state.u * Math.sin(compAngleRad);
        const compTof = (2 * compUy) / state.g;

        ctx.strokeStyle = '#a855f7' + '80';
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 4]);
        ctx.beginPath();

        for (let t = 0; t <= compTof; t += 0.02) {
          const pos = getPosition(t, compUx, compUy, state.g);
          const canvasX = launchX + pos.x * currentScale;
          const canvasY = groundY - pos.y * currentScale;

          if (t === 0) ctx.moveTo(canvasX, canvasY);
          else ctx.lineTo(canvasX, canvasY);
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Label for complementary angle
        const compMaxHeight = (compUy * compUy) / (2 * state.g);
        const labelY = groundY - compMaxHeight * currentScale - 10;
        ctx.fillStyle = '#a855f7';
        ctx.font = '11px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(compAngle + '\u00B0 (same range)', launchX + state.range * currentScale / 2, Math.max(30, labelY));
      }

      // Draw full trajectory path (dashed preview)
      if (!isPlaying && state.t === 0) {
        ctx.strokeStyle = colors.blue + '40';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();

        for (let t = 0; t <= state.timeOfFlight; t += 0.02) {
          const pos = getPosition(t, state.ux, state.uy, state.g);
          const canvasX = launchX + pos.x * currentScale;
          const canvasY = groundY - pos.y * currentScale;

          if (t === 0) ctx.moveTo(canvasX, canvasY);
          else ctx.lineTo(canvasX, canvasY);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw trail
      if (state.trail.length > 1) {
        ctx.strokeStyle = colors.blue;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(state.trail[0].canvasX, state.trail[0].canvasY);
        for (let i = 1; i < state.trail.length; i++) {
          ctx.lineTo(state.trail[i].canvasX, state.trail[i].canvasY);
        }
        ctx.stroke();

        // Trail dots
        for (let i = 0; i < state.trail.length; i += 5) {
          ctx.fillStyle = colors.blue + '60';
          ctx.beginPath();
          ctx.arc(state.trail[i].canvasX, state.trail[i].canvasY, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Current position
      const { x, y } = getPosition(state.t, state.ux, state.uy, state.g);
      const canvasX = launchX + x * currentScale;
      const canvasY = groundY - Math.max(0, y) * currentScale;

      // Draw max height marker
      if (state.trail.length > 0 || state.hasLanded) {
        const apexX = launchX + (state.range / 2) * currentScale;
        const apexY = groundY - state.maxHeight * currentScale;

        // Dashed line to apex
        ctx.strokeStyle = '#34d399' + '60';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(apexX, groundY);
        ctx.lineTo(apexX, apexY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Apex marker
        ctx.fillStyle = '#34d399';
        ctx.beginPath();
        ctx.arc(apexX, apexY, 5, 0, Math.PI * 2);
        ctx.fill();

        // H label
        ctx.fillStyle = '#34d399';
        ctx.font = '11px system-ui';
        ctx.textAlign = 'right';
        ctx.fillText('H = ' + state.maxHeight.toFixed(1) + ' m', apexX - 8, apexY - 5);

        // vy = 0 label at apex
        ctx.fillStyle = '#ef4444';
        ctx.font = '10px system-ui';
        ctx.textAlign = 'left';
        ctx.fillText('v\u1D67 = 0', apexX + 8, apexY);
      }

      // Draw range marker
      if (state.hasLanded || state.t > 0) {
        const rangeX = launchX + state.range * currentScale;

        // Range line
        ctx.strokeStyle = '#f59e0b' + '60';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(launchX, groundY + 15);
        ctx.lineTo(rangeX, groundY + 15);
        ctx.stroke();
        ctx.setLineDash([]);

        // Range arrows
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.moveTo(launchX, groundY + 15);
        ctx.lineTo(launchX + 8, groundY + 12);
        ctx.lineTo(launchX + 8, groundY + 18);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(rangeX, groundY + 15);
        ctx.lineTo(rangeX - 8, groundY + 12);
        ctx.lineTo(rangeX - 8, groundY + 18);
        ctx.closePath();
        ctx.fill();

        // R label
        ctx.font = '11px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('R = ' + state.range.toFixed(1) + ' m', (launchX + rangeX) / 2, groundY + 28);
      }

      // Draw projectile if in flight
      if (y >= 0 || state.t === 0) {
        // Glow effect
        const gradient = ctx.createRadialGradient(canvasX, canvasY, 0, canvasX, canvasY, 25);
        gradient.addColorStop(0, colors.orange + '40');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, 25, 0, Math.PI * 2);
        ctx.fill();

        // Projectile ball
        ctx.fillStyle = colors.orange;
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, 10, 0, Math.PI * 2);
        ctx.fill();

        // Highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(canvasX - 3, canvasY - 3, 4, 0, Math.PI * 2);
        ctx.fill();

        // Draw velocity vectors
        const { vx, vy } = getVelocity(state.t, state.ux, state.uy, state.g);
        const vectorScale = 1.5;

        // vx (horizontal) - always constant
        const vxEndX = canvasX + vx * vectorScale;
        const vxEndY = canvasY;
        drawArrow(canvasX, canvasY, vxEndX, vxEndY, '#60a5fa', 8);

        // vy (vertical) - changes with time
        const vyEndX = canvasX;
        const vyEndY = canvasY - vy * vectorScale;
        if (Math.abs(vy) > 0.5) {
          drawArrow(canvasX, canvasY, vyEndX, vyEndY, '#34d399', 8);
        }

        // Resultant velocity vector
        const vEndX = canvasX + vx * vectorScale;
        const vEndY = canvasY - vy * vectorScale;
        const speed = Math.sqrt(vx * vx + vy * vy);
        if (speed > 1) {
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 2]);
          ctx.beginPath();
          ctx.moveTo(canvasX, canvasY);
          ctx.lineTo(vEndX, vEndY);
          ctx.stroke();
          ctx.setLineDash([]);

          // Arrow head for resultant
          const angle = Math.atan2(vEndY - canvasY, vEndX - canvasX);
          ctx.beginPath();
          ctx.moveTo(vEndX, vEndY);
          ctx.lineTo(vEndX - 8 * Math.cos(angle - 0.4), vEndY - 8 * Math.sin(angle - 0.4));
          ctx.lineTo(vEndX - 8 * Math.cos(angle + 0.4), vEndY - 8 * Math.sin(angle + 0.4));
          ctx.closePath();
          ctx.fillStyle = '#ef4444';
          ctx.fill();
        }

        // Vector labels
        ctx.font = '10px system-ui';
        if (vx > 5) {
          ctx.fillStyle = '#60a5fa';
          ctx.textAlign = 'center';
          ctx.fillText('v\u2093', canvasX + vx * vectorScale / 2, canvasY + 15);
        }
        if (Math.abs(vy) > 5) {
          ctx.fillStyle = '#34d399';
          ctx.textAlign = 'left';
          ctx.fillText('v\u1D67', canvasX + 10, canvasY - vy * vectorScale / 2);
        }
      }

      // Draw landing point marker if landed
      if (state.hasLanded) {
        const landX = launchX + state.range * currentScale;
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(landX, groundY, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw scale indicator
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '10px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('Scale: 1 grid = ' + (50 / currentScale).toFixed(1) + ' m', 10, 20);

      // Draw "vx constant" reminder
      ctx.fillStyle = '#60a5fa';
      ctx.font = '11px system-ui';
      ctx.textAlign = 'right';
      ctx.fillText('v\u2093 = constant (no horizontal acceleration)', canvasWidth - 10, 20);

      // Draw "vy changes" reminder
      ctx.fillStyle = '#34d399';
      ctx.fillText('v\u1D67 decreases by g every second', canvasWidth - 10, 35);
    };

    // Animation loop
    let lastTime = 0;
    const animate = (timestamp = 0) => {
      if (!isPlaying) return;

      const dt = Math.min((timestamp - lastTime) / 1000, 0.05);
      lastTime = timestamp;

      if (dt > 0 && !state.hasLanded) {
        state.t += dt;

        const { x, y } = getPosition(state.t, state.ux, state.uy, state.g);
        const currentScale = calculateTrajectory();
        const canvasX = launchX + x * currentScale;
        const canvasY = groundY - Math.max(0, y) * currentScale;

        if (y >= 0) {
          state.trail.push({ canvasX, canvasY, x, y });
        }

        if (y < 0) {
          state.hasLanded = true;
          state.t = state.timeOfFlight;
          isPlaying = false;
          playBtn.textContent = 'Play';
        }
      }

      draw();
      updateInfo();

      if (isPlaying) {
        animationId = requestAnimationFrame(animate);
      }
    };

    // Event handlers for gravity toggle
    earthBtn.addEventListener('click', () => {
      state.g = 9.8;
      earthBtn.classList.add('active');
      moonBtn.classList.remove('active');
      earthBtn.style.background = '#60a5fa';
      earthBtn.style.color = '#09090b';
      moonBtn.style.background = '';
      moonBtn.style.color = '';
      resetBtn.click();
    });

    moonBtn.addEventListener('click', () => {
      state.g = 1.6;
      moonBtn.classList.add('active');
      earthBtn.classList.remove('active');
      moonBtn.style.background = '#60a5fa';
      moonBtn.style.color = '#09090b';
      earthBtn.style.background = '';
      earthBtn.style.color = '';
      resetBtn.click();
    });

    // Slider event handlers
    velocitySlider.addEventListener('input', () => {
      state.u = parseFloat(velocitySlider.value);
      if (!isPlaying) {
        state.t = 0;
        state.trail = [];
        state.hasLanded = false;
        calculateTrajectory();
        updateCalcDisplay();
        draw();
        updateInfo();
      }
    });

    angleSlider.addEventListener('input', () => {
      state.angle = parseFloat(angleSlider.value);
      if (!isPlaying) {
        state.t = 0;
        state.trail = [];
        state.hasLanded = false;
        calculateTrajectory();
        updateCalcDisplay();
        draw();
        updateInfo();
      }
    });

    compareCheckbox.addEventListener('change', () => {
      draw();
    });

    // Responsive layout for mobile
    const handleResize = () => {
      if (window.innerWidth < 800) {
        mainLayout.style.gridTemplateColumns = '1fr';
        canvasArea.style.order = '1';
        rightPanel.style.order = '2';
      } else {
        mainLayout.style.gridTemplateColumns = '1fr 300px';
        canvasArea.style.order = '';
        rightPanel.style.order = '';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Initial setup
    calculateTrajectory();
    updateCalcDisplay();
    draw();
    updateInfo();

    // Set initial button style
    earthBtn.style.background = '#60a5fa';
    earthBtn.style.color = '#09090b';
  },

  // ============================================
  // COLLISIONS INTERACTIVE ANIMATION
  // Full-featured collision simulator with all parameters
  // ============================================
  collisionsInteractive(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const self = this;

    // Main layout
    const mainLayout = document.createElement('div');
    mainLayout.style.cssText = 'display: grid; grid-template-columns: 1fr 320px; gap: 16px; padding: 16px;';
    container.appendChild(mainLayout);

    // Left panel - Canvas area
    const canvasArea = document.createElement('div');
    canvasArea.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    mainLayout.appendChild(canvasArea);

    // Right panel - Controls
    const rightPanel = document.createElement('div');
    rightPanel.style.cssText = 'display: flex; flex-direction: column; gap: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; padding: 16px;';
    mainLayout.appendChild(rightPanel);

    // Create main canvas (collision area)
    const { canvas, ctx, width, height } = this.createCanvas(canvasArea, 520, 280);
    canvas.style.borderRadius = '8px';
    canvas.style.border = '1px solid var(--border-color, #27272a)';

    // Create energy bar canvas
    const energyCanvas = document.createElement('canvas');
    const energyWidth = 520;
    const energyHeight = 100;
    const dpr = window.devicePixelRatio || 1;
    energyCanvas.width = energyWidth * dpr;
    energyCanvas.height = energyHeight * dpr;
    energyCanvas.style.width = energyWidth + 'px';
    energyCanvas.style.height = energyHeight + 'px';
    energyCanvas.style.borderRadius = '8px';
    energyCanvas.style.border = '1px solid var(--border-color, #27272a)';
    const energyCtx = energyCanvas.getContext('2d');
    energyCtx.scale(dpr, dpr);
    canvasArea.appendChild(energyCanvas);

    // Controls panel
    const controlsTitle = document.createElement('h4');
    controlsTitle.textContent = 'Collision Parameters';
    controlsTitle.style.cssText = 'margin: 0 0 8px 0; color: var(--text-primary, #fafafa); font-size: 14px; font-weight: 600;';
    rightPanel.appendChild(controlsTitle);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    controls.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
    rightPanel.appendChild(controls);

    // Object 1 controls
    const obj1Label = document.createElement('div');
    obj1Label.innerHTML = '<span style="color: #60a5fa; font-weight: 600;">Object 1 (Blue)</span>';
    obj1Label.style.cssText = 'font-size: 12px; margin-top: 4px;';
    controls.appendChild(obj1Label);

    const m1Slider = this.createSlider(controls, 'Mass m\u2081', 1, 10, 4, 1, ' kg');
    const v1Slider = this.createSlider(controls, 'Velocity u\u2081', -10, 10, 5, 0.5, ' m/s');

    // Object 2 controls
    const obj2Label = document.createElement('div');
    obj2Label.innerHTML = '<span style="color: #34d399; font-weight: 600;">Object 2 (Green)</span>';
    obj2Label.style.cssText = 'font-size: 12px; margin-top: 8px;';
    controls.appendChild(obj2Label);

    const m2Slider = this.createSlider(controls, 'Mass m\u2082', 1, 10, 2, 1, ' kg');
    const v2Slider = this.createSlider(controls, 'Velocity u\u2082', -10, 10, -3, 0.5, ' m/s');

    // Collision type
    const typeLabel = document.createElement('div');
    typeLabel.textContent = 'Collision Type';
    typeLabel.style.cssText = 'font-size: 12px; margin-top: 12px; color: var(--text-secondary, #a1a1aa);';
    controls.appendChild(typeLabel);

    const typeRow = document.createElement('div');
    typeRow.style.cssText = 'display: flex; gap: 4px; flex-wrap: wrap;';
    controls.appendChild(typeRow);

    let collisionType = 'elastic';

    const typeButtons = [
      { id: 'elastic', label: 'Elastic' },
      { id: 'partial', label: 'Partial' },
      { id: 'inelastic', label: 'Perfectly Inelastic' }
    ];

    const typeBtnElements = {};
    typeButtons.forEach(btn => {
      const el = document.createElement('button');
      el.textContent = btn.label;
      el.className = 'anim-btn';
      el.style.cssText = 'padding: 6px 10px; font-size: 11px; flex: 1; min-width: 70px;';
      if (btn.id === collisionType) {
        el.style.background = 'var(--accent-blue, #60a5fa)';
        el.style.color = '#000';
      }
      el.addEventListener('click', () => {
        collisionType = btn.id;
        Object.keys(typeBtnElements).forEach(k => {
          typeBtnElements[k].style.background = k === btn.id ? 'var(--accent-blue, #60a5fa)' : '';
          typeBtnElements[k].style.color = k === btn.id ? '#000' : '';
        });
        eSlider.disabled = (collisionType !== 'partial');
        eSlider.parentElement.style.opacity = collisionType === 'partial' ? '1' : '0.5';
        reset();
      });
      typeBtnElements[btn.id] = el;
      typeRow.appendChild(el);
    });

    // Coefficient of restitution slider
    const eLabel = document.createElement('div');
    eLabel.textContent = 'Coefficient of Restitution (e)';
    eLabel.style.cssText = 'font-size: 12px; margin-top: 8px; color: var(--text-secondary, #a1a1aa);';
    controls.appendChild(eLabel);

    const eSlider = this.createSlider(controls, 'e', 0, 1, 0.5, 0.05, '');
    eSlider.disabled = true;
    eSlider.parentElement.style.opacity = '0.5';

    // Button row
    const buttonRow = document.createElement('div');
    buttonRow.style.cssText = 'display: flex; gap: 8px; margin-top: 12px;';
    controls.appendChild(buttonRow);

    // Info display
    const infoPanel = document.createElement('div');
    infoPanel.style.cssText = 'background: var(--bg-tertiary, #27272a); border-radius: 6px; padding: 12px; margin-top: 8px;';
    rightPanel.appendChild(infoPanel);

    const infoTitle = document.createElement('div');
    infoTitle.textContent = 'Physics Data';
    infoTitle.style.cssText = 'font-size: 12px; font-weight: 600; color: var(--text-primary, #fafafa); margin-bottom: 8px;';
    infoPanel.appendChild(infoTitle);

    const infoContent = document.createElement('div');
    infoContent.style.cssText = 'font-size: 11px; color: var(--text-secondary, #a1a1aa); line-height: 1.6;';
    infoPanel.appendChild(infoContent);

    // State variables
    const groundY = height - 50;
    let ball1, ball2;
    let animationId = null;
    let isPlaying = false;
    let hasCollided = false;
    let initialState = null;
    let finalState = null;
    let phase = 'before'; // 'before', 'during', 'after'

    const getRadius = (mass) => 15 + mass * 2;

    const reset = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }

      const m1 = parseFloat(m1Slider.value);
      const m2 = parseFloat(m2Slider.value);
      const u1 = parseFloat(v1Slider.value);
      const u2 = parseFloat(v2Slider.value);

      ball1 = {
        x: 100,
        v: u1 * 15, // Scale velocity for animation
        m: m1,
        r: getRadius(m1),
        originalV: u1
      };
      ball2 = {
        x: width - 100,
        v: u2 * 15, // Scale velocity for animation
        m: m2,
        r: getRadius(m2),
        originalV: u2
      };

      initialState = {
        p1: m1 * u1,
        p2: m2 * u2,
        pTotal: m1 * u1 + m2 * u2,
        ke1: 0.5 * m1 * u1 * u1,
        ke2: 0.5 * m2 * u2 * u2,
        keTotal: 0.5 * m1 * u1 * u1 + 0.5 * m2 * u2 * u2
      };

      finalState = null;
      isPlaying = false;
      hasCollided = false;
      phase = 'before';
      playBtn.textContent = 'Play';

      render();
      renderEnergy();
      updateInfo();
    };

    const calculateFinalVelocities = () => {
      const m1 = ball1.m;
      const m2 = ball2.m;
      const u1 = ball1.originalV;
      const u2 = ball2.originalV;

      let v1, v2, e;

      if (collisionType === 'elastic') {
        e = 1;
        v1 = ((m1 - m2) * u1 + 2 * m2 * u2) / (m1 + m2);
        v2 = ((m2 - m1) * u2 + 2 * m1 * u1) / (m1 + m2);
      } else if (collisionType === 'inelastic') {
        e = 0;
        const vCommon = (m1 * u1 + m2 * u2) / (m1 + m2);
        v1 = vCommon;
        v2 = vCommon;
      } else {
        e = parseFloat(eSlider.value);
        // Using momentum conservation and coefficient of restitution
        // m1*u1 + m2*u2 = m1*v1 + m2*v2 (momentum)
        // e = (v2 - v1) / (u1 - u2) (restitution)
        v1 = (m1 * u1 + m2 * u2 - m2 * e * (u1 - u2)) / (m1 + m2);
        v2 = (m1 * u1 + m2 * u2 + m1 * e * (u1 - u2)) / (m1 + m2);
      }

      return { v1, v2, e };
    };

    const render = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw ground
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.stroke();

      // Draw grid lines
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, groundY);
        ctx.stroke();
      }

      // Draw center line
      ctx.strokeStyle = colors.axis;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, groundY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Phase label
      ctx.fillStyle = colors.textSecondary;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'center';
      const phaseText = phase === 'before' ? 'Before Collision' : phase === 'during' ? 'Collision!' : 'After Collision';
      ctx.fillText(phaseText, width / 2, 20);

      // Helper function to draw velocity arrow
      const drawVelocityArrow = (x, y, velocity, color) => {
        if (Math.abs(velocity) < 0.5) return;

        const arrowLength = velocity * 3;
        const arrowY = y - ball1.r - 20;

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(x, arrowY);
        ctx.lineTo(x + arrowLength, arrowY);
        ctx.stroke();

        // Arrow head
        const headSize = 6;
        const dir = velocity > 0 ? 1 : -1;
        ctx.beginPath();
        ctx.moveTo(x + arrowLength, arrowY);
        ctx.lineTo(x + arrowLength - headSize * dir, arrowY - headSize / 2);
        ctx.lineTo(x + arrowLength - headSize * dir, arrowY + headSize / 2);
        ctx.closePath();
        ctx.fill();

        // Velocity label
        ctx.font = '10px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText((velocity / 15).toFixed(1) + ' m/s', x + arrowLength / 2, arrowY - 8);
      };

      // Helper to draw momentum arrow
      const drawMomentumArrow = (x, y, momentum, color, label) => {
        if (Math.abs(momentum) < 0.1) return;

        const arrowLength = momentum * 8;
        const maxLength = 80;
        const scaledLength = Math.sign(arrowLength) * Math.min(Math.abs(arrowLength), maxLength);

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + scaledLength, y);
        ctx.stroke();

        // Arrow head
        if (Math.abs(scaledLength) > 10) {
          const headSize = 8;
          const dir = scaledLength > 0 ? 1 : -1;
          ctx.beginPath();
          ctx.moveTo(x + scaledLength, y);
          ctx.lineTo(x + scaledLength - headSize * dir, y - headSize / 2);
          ctx.lineTo(x + scaledLength - headSize * dir, y + headSize / 2);
          ctx.closePath();
          ctx.fill();
        }

        ctx.font = '9px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(label, x + scaledLength / 2, y - 10);
      };

      // Draw Ball 1
      const ball1Y = groundY - ball1.r;
      ctx.fillStyle = '#60a5fa';
      ctx.shadowColor = 'rgba(96, 165, 250, 0.4)';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(ball1.x, ball1Y, ball1.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Ball 1 label
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 11px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(ball1.m + 'kg', ball1.x, ball1Y + 4);

      // Draw Ball 2 (may be merged with ball1 in inelastic)
      if (!hasCollided || collisionType !== 'inelastic') {
        const ball2Y = groundY - ball2.r;
        ctx.fillStyle = '#34d399';
        ctx.shadowColor = 'rgba(52, 211, 153, 0.4)';
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(ball2.x, ball2Y, ball2.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Ball 2 label
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 11px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(ball2.m + 'kg', ball2.x, ball2Y + 4);

        // Velocity arrows
        drawVelocityArrow(ball1.x, ball1Y, ball1.v, '#60a5fa');
        drawVelocityArrow(ball2.x, ball2Y, ball2.v, '#34d399');
      } else {
        // Merged ball (perfectly inelastic)
        const mergedR = getRadius(ball1.m + ball2.m);
        const mergedY = groundY - mergedR;

        // Gradient fill for merged ball
        const gradient = ctx.createLinearGradient(ball1.x - mergedR, mergedY, ball1.x + mergedR, mergedY);
        gradient.addColorStop(0, '#60a5fa');
        gradient.addColorStop(1, '#34d399');

        ctx.fillStyle = gradient;
        ctx.shadowColor = 'rgba(96, 165, 250, 0.4)';
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(ball1.x, mergedY, mergedR, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#fff';
        ctx.font = 'bold 11px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText((ball1.m + ball2.m) + 'kg', ball1.x, mergedY + 4);

        drawVelocityArrow(ball1.x, mergedY, ball1.v, '#f59e0b');
      }

      // Draw momentum arrows at bottom
      const momentumY = groundY + 25;
      ctx.fillStyle = colors.textSecondary;
      ctx.font = '10px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('Momentum:', 10, momentumY + 4);

      if (!hasCollided || collisionType !== 'inelastic') {
        drawMomentumArrow(100, momentumY, ball1.m * ball1.v / 15, '#60a5fa', 'p\u2081');
        drawMomentumArrow(250, momentumY, ball2.m * ball2.v / 15, '#34d399', 'p\u2082');
      }

      // Total momentum
      const totalP = ball1.m * ball1.v / 15 + (hasCollided && collisionType === 'inelastic' ? 0 : ball2.m * ball2.v / 15);
      drawMomentumArrow(400, momentumY, totalP, '#f59e0b', 'Total');

      ctx.textAlign = 'left';
    };

    const renderEnergy = () => {
      const colors = self.getColors();
      energyCtx.fillStyle = colors.bg;
      energyCtx.fillRect(0, 0, energyWidth, energyHeight);

      const barWidth = 80;
      const maxBarHeight = 60;
      const barY = 75;

      // Calculate current energies
      const m1 = ball1.m;
      const m2 = ball2.m;
      const v1 = ball1.v / 15; // Convert back to m/s
      const v2 = ball2.v / 15;

      const currentKE1 = 0.5 * m1 * v1 * v1;
      const currentKE2 = hasCollided && collisionType === 'inelastic' ? 0 : 0.5 * m2 * v2 * v2;
      const currentKETotal = currentKE1 + currentKE2;

      const maxKE = Math.max(initialState.keTotal, 1);
      const scale = maxBarHeight / maxKE;

      // Title
      energyCtx.fillStyle = colors.text;
      energyCtx.font = '12px system-ui';
      energyCtx.textAlign = 'center';
      energyCtx.fillText('Kinetic Energy Comparison', energyWidth / 2, 18);

      // Draw bars
      const drawBar = (x, height, color, label, value) => {
        const barHeight = Math.max(height * scale, 2);

        energyCtx.fillStyle = color;
        energyCtx.fillRect(x - barWidth / 2, barY - barHeight, barWidth, barHeight);

        // Border
        energyCtx.strokeStyle = color;
        energyCtx.lineWidth = 1;
        energyCtx.strokeRect(x - barWidth / 2, barY - maxBarHeight, barWidth, maxBarHeight);

        // Label
        energyCtx.fillStyle = colors.textSecondary;
        energyCtx.font = '10px system-ui';
        energyCtx.fillText(label, x, barY + 15);

        // Value
        energyCtx.fillStyle = colors.text;
        energyCtx.font = 'bold 11px system-ui';
        energyCtx.fillText(value.toFixed(1) + ' J', x, barY - barHeight - 5);
      };

      // Before collision bars
      drawBar(80, initialState.keTotal, '#60a5fa', 'Initial KE', initialState.keTotal);

      // Current/After collision bars
      const afterColor = hasCollided && collisionType !== 'elastic' ? '#f59e0b' : '#34d399';
      drawBar(200, currentKETotal, afterColor, phase === 'after' ? 'Final KE' : 'Current KE', currentKETotal);

      // KE loss bar (if applicable)
      if (hasCollided && initialState.keTotal > currentKETotal) {
        const keLoss = initialState.keTotal - currentKETotal;
        drawBar(320, keLoss, '#ef4444', 'KE Lost', keLoss);
      }

      // Conservation indicator
      energyCtx.font = '11px system-ui';
      energyCtx.textAlign = 'left';

      const pBefore = initialState.pTotal;
      const pAfter = m1 * v1 + (hasCollided && collisionType === 'inelastic' ? 0 : m2 * v2);

      energyCtx.fillStyle = '#34d399';
      energyCtx.fillText('Momentum: ' + pBefore.toFixed(2) + ' -> ' + pAfter.toFixed(2) + ' kg.m/s', 380, 40);
      energyCtx.fillText('(CONSERVED)', 380, 55);

      if (collisionType === 'elastic') {
        energyCtx.fillStyle = '#34d399';
        energyCtx.fillText('KE: CONSERVED', 380, 75);
      } else if (hasCollided) {
        energyCtx.fillStyle = '#ef4444';
        const loss = ((initialState.keTotal - currentKETotal) / initialState.keTotal * 100).toFixed(1);
        energyCtx.fillText('KE Lost: ' + loss + '%', 380, 75);
      }
    };

    const updateInfo = () => {
      const m1 = ball1.m;
      const m2 = ball2.m;
      const u1 = ball1.originalV;
      const u2 = ball2.originalV;

      let content = '<div style="margin-bottom: 6px;"><strong>Initial State:</strong></div>' +
        '<div>p\u2081 = ' + (m1 * u1).toFixed(2) + ' kg.m/s</div>' +
        '<div>p\u2082 = ' + (m2 * u2).toFixed(2) + ' kg.m/s</div>' +
        '<div>p_total = ' + (m1 * u1 + m2 * u2).toFixed(2) + ' kg.m/s</div>' +
        '<div>KE_initial = ' + (0.5 * m1 * u1 * u1 + 0.5 * m2 * u2 * u2).toFixed(2) + ' J</div>';

      if (finalState) {
        const { v1, v2, e } = calculateFinalVelocities();
        const pTotalF = collisionType === 'inelastic' ? (m1 + m2) * v1 : m1 * v1 + m2 * v2;
        const keF = collisionType === 'inelastic'
          ? 0.5 * (m1 + m2) * v1 * v1
          : 0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2;
        const keLoss = initialState.keTotal - keF;

        content += '<div style="margin-top: 8px; margin-bottom: 6px; border-top: 1px solid #3f3f46; padding-top: 8px;"><strong>Final State:</strong></div>' +
          '<div>v\u2081 = ' + v1.toFixed(2) + ' m/s</div>' +
          (collisionType !== 'inelastic' ? '<div>v\u2082 = ' + v2.toFixed(2) + ' m/s</div>' : '<div>(Bodies merged)</div>') +
          '<div>p_total = ' + pTotalF.toFixed(2) + ' kg.m/s</div>' +
          '<div>KE_final = ' + keF.toFixed(2) + ' J</div>' +
          '<div style="color: ' + (keLoss > 0.01 ? '#ef4444' : '#34d399') + ';">KE_loss = ' + keLoss.toFixed(2) + ' J</div>' +
          '<div style="margin-top: 4px;">e = ' + e.toFixed(2) + '</div>';

        // Special cases
        if (Math.abs(m1 - m2) < 0.1 && collisionType === 'elastic') {
          content += '<div style="color: #f59e0b; margin-top: 6px;">Equal masses: Velocities exchanged!</div>';
        }
      }

      infoContent.innerHTML = content;
    };

    const animate = () => {
      const dt = 0.016;

      // Move balls
      ball1.x += ball1.v * dt;
      ball2.x += ball2.v * dt;

      // Check collision
      const dist = Math.abs(ball1.x - ball2.x);
      const minDist = ball1.r + ball2.r;

      if (!hasCollided && dist <= minDist) {
        hasCollided = true;
        phase = 'during';

        const { v1, v2 } = calculateFinalVelocities();

        if (collisionType === 'inelastic') {
          // Perfectly inelastic - merge
          const vCommon = (ball1.m * ball1.originalV + ball2.m * ball2.originalV) / (ball1.m + ball2.m);
          ball1.v = vCommon * 15;
          ball2.v = vCommon * 15;
          // Position merged ball at collision point
          ball1.x = (ball1.x + ball2.x) / 2;
          ball2.x = ball1.x;
        } else {
          ball1.v = v1 * 15;
          ball2.v = v2 * 15;

          // Separate balls to prevent overlap
          const overlap = minDist - dist;
          ball1.x -= overlap / 2;
          ball2.x += overlap / 2;
        }

        finalState = { v1, v2 };
        updateInfo();

        // Flash effect
        setTimeout(() => {
          phase = 'after';
          render();
        }, 200);
      }

      // Stop if balls are out of bounds or moving apart after collision
      const outOfBounds = ball1.x < -50 || ball1.x > width + 50 || ball2.x < -50 || ball2.x > width + 50;
      const stoppedMoving = hasCollided && Math.abs(ball1.v) < 0.1 && Math.abs(ball2.v) < 0.1;

      render();
      renderEnergy();

      if (!outOfBounds && !stoppedMoving && isPlaying) {
        animationId = requestAnimationFrame(animate);
      } else {
        isPlaying = false;
        playBtn.textContent = 'Play';
      }
    };

    const playBtn = this.createButton(buttonRow, 'Play', () => {
      if (isPlaying) {
        isPlaying = false;
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
        playBtn.textContent = 'Play';
      } else {
        if (hasCollided) {
          reset();
        }
        isPlaying = true;
        playBtn.textContent = 'Pause';
        animate();
      }
    });
    playBtn.style.flex = '1';

    const resetBtn = this.createButton(buttonRow, 'Reset', () => {
      reset();
    });
    resetBtn.style.flex = '1';

    // Slider event handlers
    [m1Slider, v1Slider, m2Slider, v2Slider, eSlider].forEach(slider => {
      slider.addEventListener('input', () => {
        if (!isPlaying) {
          reset();
        }
      });
    });

    // Responsive layout
    const handleResize = () => {
      if (window.innerWidth < 900) {
        mainLayout.style.gridTemplateColumns = '1fr';
        rightPanel.style.order = '2';
      } else {
        mainLayout.style.gridTemplateColumns = '1fr 320px';
        rightPanel.style.order = '';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Initial setup
    reset();
  },

  // ============================================
  // DERIVATIVE AS SLOPE VISUALIZER
  // The Ultimate Calculus "Aha Moment" Tool
  // ============================================

  derivativeVisualizer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container derivative-visualizer';

    const self = this;

    // ========== FUNCTION DEFINITIONS ==========
    const functions = {
      'x^2': {
        f: (x) => x * x,
        fPrime: (x) => 2 * x,
        latex: 'x^2',
        latexPrime: '2x'
      },
      'x^3': {
        f: (x) => x * x * x,
        fPrime: (x) => 3 * x * x,
        latex: 'x^3',
        latexPrime: '3x^2'
      },
      'sin(x)': {
        f: (x) => Math.sin(x),
        fPrime: (x) => Math.cos(x),
        latex: 'sin(x)',
        latexPrime: 'cos(x)'
      },
      'cos(x)': {
        f: (x) => Math.cos(x),
        fPrime: (x) => -Math.sin(x),
        latex: 'cos(x)',
        latexPrime: '-sin(x)'
      },
      'e^x': {
        f: (x) => Math.exp(x),
        fPrime: (x) => Math.exp(x),
        latex: 'e^x',
        latexPrime: 'e^x'
      },
      'ln(x)': {
        f: (x) => x > 0 ? Math.log(x) : NaN,
        fPrime: (x) => x > 0 ? 1 / x : NaN,
        latex: 'ln(x)',
        latexPrime: '1/x'
      },
      '1/x': {
        f: (x) => x !== 0 ? 1 / x : NaN,
        fPrime: (x) => x !== 0 ? -1 / (x * x) : NaN,
        latex: '1/x',
        latexPrime: '-1/x^2'
      },
      'sqrt(x)': {
        f: (x) => x >= 0 ? Math.sqrt(x) : NaN,
        fPrime: (x) => x > 0 ? 1 / (2 * Math.sqrt(x)) : NaN,
        latex: 'sqrt(x)',
        latexPrime: '1/(2*sqrt(x))'
      },
      'x^2 - 4x + 3': {
        f: (x) => x * x - 4 * x + 3,
        fPrime: (x) => 2 * x - 4,
        latex: 'x^2 - 4x + 3',
        latexPrime: '2x - 4'
      },
      'x*sin(x)': {
        f: (x) => x * Math.sin(x),
        fPrime: (x) => Math.sin(x) + x * Math.cos(x),
        latex: 'x*sin(x)',
        latexPrime: 'sin(x) + x*cos(x)'
      }
    };

    // ========== STATE ==========
    let currentFunc = 'x^2';
    let pointA = 1;
    let deltaH = 1;
    let isAnimating = false;
    let animationId = null;
    let showSecant = true;
    let showTangent = true;
    let showDerivative = true;

    // Canvas dimensions
    const mainWidth = 560;
    const mainHeight = 380;
    const derivWidth = 560;
    const derivHeight = 180;

    // ========== CREATE LAYOUT ==========
    const mainContainer = document.createElement('div');
    mainContainer.className = 'deriv-main-container';
    mainContainer.style.cssText = 'display: flex; flex-direction: column; gap: 16px;';

    // Controls panel
    const controlsPanel = document.createElement('div');
    controlsPanel.className = 'deriv-controls-panel';
    controlsPanel.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; padding: 16px; background: var(--bg-secondary, #18181b); border-radius: 12px;';

    // Function selector
    const funcControl = document.createElement('div');
    funcControl.className = 'deriv-control-group';
    funcControl.innerHTML = `
      <label style="display: block; margin-bottom: 6px; color: var(--text-secondary, #a1a1aa); font-size: 13px;">Function f(x)</label>
      <select id="deriv-func-select-${containerId}" style="width: 100%; padding: 8px 12px; border-radius: 8px; background: var(--bg-primary, #09090b); color: var(--text-primary, #fafafa); border: 1px solid var(--border-color, #27272a); font-size: 14px;">
        ${Object.keys(functions).map(key => `<option value="${key}">${key}</option>`).join('')}
      </select>
    `;
    controlsPanel.appendChild(funcControl);

    // Point 'a' slider
    const pointAControl = document.createElement('div');
    pointAControl.className = 'deriv-control-group';
    pointAControl.innerHTML = `
      <label style="display: block; margin-bottom: 6px; color: var(--text-secondary, #a1a1aa); font-size: 13px;">Point a = <span id="point-a-value-${containerId}">${pointA.toFixed(2)}</span></label>
      <input type="range" id="point-a-slider-${containerId}" min="-4" max="4" step="0.1" value="${pointA}" style="width: 100%;">
    `;
    controlsPanel.appendChild(pointAControl);

    // Delta h slider
    const deltaHControl = document.createElement('div');
    deltaHControl.className = 'deriv-control-group';
    deltaHControl.innerHTML = `
      <label style="display: block; margin-bottom: 6px; color: var(--text-secondary, #a1a1aa); font-size: 13px;">h = <span id="delta-h-value-${containerId}">${deltaH.toFixed(3)}</span></label>
      <input type="range" id="delta-h-slider-${containerId}" min="0.001" max="2" step="0.001" value="${deltaH}" style="width: 100%;">
    `;
    controlsPanel.appendChild(deltaHControl);

    // Buttons
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'deriv-button-group';
    buttonGroup.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; align-items: end;';
    buttonGroup.innerHTML = `
      <button id="animate-limit-btn-${containerId}" class="anim-btn" style="padding: 8px 16px; border-radius: 8px; background: linear-gradient(135deg, #60a5fa, #3b82f6); color: white; border: none; cursor: pointer; font-weight: 600; transition: all 0.2s;">Watch h -> 0</button>
      <button id="reset-btn-${containerId}" class="anim-btn" style="padding: 8px 16px; border-radius: 8px; background: var(--bg-primary, #09090b); color: var(--text-primary, #fafafa); border: 1px solid var(--border-color, #27272a); cursor: pointer;">Reset</button>
    `;
    controlsPanel.appendChild(buttonGroup);

    mainContainer.appendChild(controlsPanel);

    // Toggle controls
    const togglePanel = document.createElement('div');
    togglePanel.className = 'deriv-toggle-panel';
    togglePanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 16px; padding: 12px 16px; background: var(--bg-secondary, #18181b); border-radius: 12px;';
    togglePanel.innerHTML = `
      <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; color: var(--text-primary, #fafafa); font-size: 14px;">
        <input type="checkbox" id="show-secant-${containerId}" checked style="width: 16px; height: 16px; accent-color: #f59e0b;">
        <span style="color: #f59e0b;">Secant Line</span>
      </label>
      <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; color: var(--text-primary, #fafafa); font-size: 14px;">
        <input type="checkbox" id="show-tangent-${containerId}" checked style="width: 16px; height: 16px; accent-color: #34d399;">
        <span style="color: #34d399;">Tangent Line</span>
      </label>
      <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; color: var(--text-primary, #fafafa); font-size: 14px;">
        <input type="checkbox" id="show-derivative-${containerId}" checked style="width: 16px; height: 16px; accent-color: #a78bfa;">
        <span style="color: #a78bfa;">f'(x) Curve</span>
      </label>
    `;
    mainContainer.appendChild(togglePanel);

    // Canvas container
    const canvasContainer = document.createElement('div');
    canvasContainer.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';

    // Main canvas for f(x)
    const mainCanvasWrapper = document.createElement('div');
    mainCanvasWrapper.style.cssText = 'position: relative; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color, #27272a);';
    const mainCanvas = document.createElement('canvas');
    mainCanvas.id = 'deriv-main-canvas-' + containerId;
    mainCanvas.style.cssText = 'display: block; width: 100%; max-width: 560px;';
    mainCanvasWrapper.appendChild(mainCanvas);
    canvasContainer.appendChild(mainCanvasWrapper);

    // Derivative canvas
    const derivCanvasWrapper = document.createElement('div');
    derivCanvasWrapper.style.cssText = 'position: relative; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color, #27272a);';
    const derivCanvas = document.createElement('canvas');
    derivCanvas.id = 'deriv-derivative-canvas-' + containerId;
    derivCanvas.style.cssText = 'display: block; width: 100%; max-width: 560px;';
    derivCanvasWrapper.appendChild(derivCanvas);
    canvasContainer.appendChild(derivCanvasWrapper);

    mainContainer.appendChild(canvasContainer);

    // Info panel
    const infoPanel = document.createElement('div');
    infoPanel.id = 'deriv-info-panel-' + containerId;
    infoPanel.className = 'anim-info';
    infoPanel.style.cssText = 'padding: 16px; background: var(--bg-secondary, #18181b); border-radius: 12px; font-family: ui-monospace, monospace;';
    mainContainer.appendChild(infoPanel);

    // Formula display
    const formulaPanel = document.createElement('div');
    formulaPanel.id = 'deriv-formula-panel-' + containerId;
    formulaPanel.style.cssText = 'padding: 16px; background: linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(167, 139, 250, 0.1)); border-radius: 12px; text-align: center; border: 1px solid rgba(96, 165, 250, 0.3);';
    formulaPanel.innerHTML = `
      <div style="font-size: 16px; color: var(--text-primary, #fafafa); margin-bottom: 8px;">
        <strong>Definition of Derivative:</strong>
      </div>
      <div style="font-size: 18px; color: #60a5fa; font-family: ui-monospace, monospace;">
        f'(x) = lim<sub style="font-size: 12px;">h->0</sub> [f(x+h) - f(x)] / h
      </div>
    `;
    mainContainer.appendChild(formulaPanel);

    container.appendChild(mainContainer);

    // ========== SETUP CANVASES ==========
    const dpr = window.devicePixelRatio || 1;

    mainCanvas.width = mainWidth * dpr;
    mainCanvas.height = mainHeight * dpr;
    mainCanvas.style.width = mainWidth + 'px';
    mainCanvas.style.height = mainHeight + 'px';
    const mainCtx = mainCanvas.getContext('2d');
    mainCtx.scale(dpr, dpr);

    derivCanvas.width = derivWidth * dpr;
    derivCanvas.height = derivHeight * dpr;
    derivCanvas.style.width = derivWidth + 'px';
    derivCanvas.style.height = derivHeight + 'px';
    const derivCtx = derivCanvas.getContext('2d');
    derivCtx.scale(dpr, dpr);

    // ========== GET ELEMENTS ==========
    const funcSelect = document.getElementById('deriv-func-select-' + containerId);
    const pointASlider = document.getElementById('point-a-slider-' + containerId);
    const pointAValue = document.getElementById('point-a-value-' + containerId);
    const deltaHSlider = document.getElementById('delta-h-slider-' + containerId);
    const deltaHValue = document.getElementById('delta-h-value-' + containerId);
    const animateLimitBtn = document.getElementById('animate-limit-btn-' + containerId);
    const resetBtn = document.getElementById('reset-btn-' + containerId);
    const showSecantCheck = document.getElementById('show-secant-' + containerId);
    const showTangentCheck = document.getElementById('show-tangent-' + containerId);
    const showDerivativeCheck = document.getElementById('show-derivative-' + containerId);

    // ========== COORDINATE SYSTEM ==========
    const mainXRange = [-5, 5];
    const mainYRange = [-4, 6];
    const derivXRange = [-5, 5];
    const derivYRange = [-4, 4];

    const toMainCanvasX = (x) => {
      return ((x - mainXRange[0]) / (mainXRange[1] - mainXRange[0])) * mainWidth;
    };

    const toMainCanvasY = (y) => {
      return mainHeight - ((y - mainYRange[0]) / (mainYRange[1] - mainYRange[0])) * mainHeight;
    };

    const toDerivCanvasX = (x) => {
      return ((x - derivXRange[0]) / (derivXRange[1] - derivXRange[0])) * derivWidth;
    };

    const toDerivCanvasY = (y) => {
      return derivHeight - ((y - derivYRange[0]) / (derivYRange[1] - derivYRange[0])) * derivHeight;
    };

    // ========== DRAWING FUNCTIONS ==========
    const drawGrid = (ctx, width, height, xRange, yRange, toCanvasX, toCanvasY) => {
      const colors = self.getColors();

      // Background
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 0.5;

      // Vertical grid lines
      for (let x = Math.ceil(xRange[0]); x <= xRange[1]; x++) {
        const cx = toCanvasX(x);
        ctx.beginPath();
        ctx.moveTo(cx, 0);
        ctx.lineTo(cx, height);
        ctx.stroke();
      }

      // Horizontal grid lines
      for (let y = Math.ceil(yRange[0]); y <= yRange[1]; y++) {
        const cy = toCanvasY(y);
        ctx.beginPath();
        ctx.moveTo(0, cy);
        ctx.lineTo(width, cy);
        ctx.stroke();
      }

      // Axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1.5;

      // X-axis
      const yAxisPos = toCanvasY(0);
      if (yAxisPos >= 0 && yAxisPos <= height) {
        ctx.beginPath();
        ctx.moveTo(0, yAxisPos);
        ctx.lineTo(width, yAxisPos);
        ctx.stroke();
      }

      // Y-axis
      const xAxisPos = toCanvasX(0);
      if (xAxisPos >= 0 && xAxisPos <= width) {
        ctx.beginPath();
        ctx.moveTo(xAxisPos, 0);
        ctx.lineTo(xAxisPos, height);
        ctx.stroke();
      }

      // Axis labels
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '11px system-ui';
      ctx.textAlign = 'center';

      for (let x = Math.ceil(xRange[0]); x <= xRange[1]; x++) {
        if (x !== 0) {
          const cx = toCanvasX(x);
          ctx.fillText(x.toString(), cx, Math.min(height - 5, Math.max(15, yAxisPos + 15)));
        }
      }

      ctx.textAlign = 'right';
      for (let y = Math.ceil(yRange[0]); y <= yRange[1]; y++) {
        if (y !== 0) {
          const cy = toCanvasY(y);
          ctx.fillText(y.toString(), Math.min(width - 5, Math.max(20, xAxisPos - 5)), cy + 4);
        }
      }
    };

    const drawFunction = (ctx, func, toCanvasX, toCanvasY, xRange, color, lineWidth = 2.5) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.beginPath();

      let started = false;
      const step = (xRange[1] - xRange[0]) / 400;

      for (let x = xRange[0]; x <= xRange[1]; x += step) {
        const y = func(x);
        if (isNaN(y) || !isFinite(y) || Math.abs(y) > 100) {
          started = false;
          continue;
        }

        const cx = toCanvasX(x);
        const cy = toCanvasY(y);

        if (!started) {
          ctx.moveTo(cx, cy);
          started = true;
        } else {
          ctx.lineTo(cx, cy);
        }
      }

      ctx.stroke();
    };

    const drawPoint = (ctx, x, y, toCanvasX, toCanvasY, color, radius = 8, label = '') => {
      const cx = toCanvasX(x);
      const cy = toCanvasY(y);

      // Glow effect
      ctx.shadowColor = color;
      ctx.shadowBlur = 15;

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Inner white dot
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;

      // Label
      if (label) {
        ctx.fillStyle = color;
        ctx.font = 'bold 14px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(label, cx, cy - radius - 8);
      }
    };

    const drawLine = (ctx, x1, y1, slope, toCanvasX, toCanvasY, xRange, color, lineWidth = 2, dashed = false) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;

      if (dashed) {
        ctx.setLineDash([8, 6]);
      } else {
        ctx.setLineDash([]);
      }

      // Line equation: y - y1 = slope * (x - x1)
      const xStart = xRange[0] - 1;
      const xEnd = xRange[1] + 1;
      const yStart = y1 + slope * (xStart - x1);
      const yEnd = y1 + slope * (xEnd - x1);

      ctx.beginPath();
      ctx.moveTo(toCanvasX(xStart), toCanvasY(yStart));
      ctx.lineTo(toCanvasX(xEnd), toCanvasY(yEnd));
      ctx.stroke();

      ctx.setLineDash([]);
    };

    // ========== MAIN RENDER ==========
    const render = () => {
      const colors = self.getColors();
      const func = functions[currentFunc];
      const f = func.f;
      const fPrime = func.fPrime;

      // Calculate values
      const fa = f(pointA);
      const fah = f(pointA + deltaH);
      const secantSlope = (fah - fa) / deltaH;
      const tangentSlope = fPrime(pointA);
      const slopeDifference = Math.abs(secantSlope - tangentSlope);

      // ========== DRAW MAIN CANVAS ==========
      drawGrid(mainCtx, mainWidth, mainHeight, mainXRange, mainYRange, toMainCanvasX, toMainCanvasY);

      // Draw f(x) curve
      drawFunction(mainCtx, f, toMainCanvasX, toMainCanvasY, mainXRange, '#60a5fa', 3);

      // Draw tangent line (always at point A)
      if (showTangent && !isNaN(tangentSlope) && isFinite(tangentSlope)) {
        drawLine(mainCtx, pointA, fa, tangentSlope, toMainCanvasX, toMainCanvasY, mainXRange, '#34d399', 2.5);
      }

      // Draw secant line (through A and B)
      if (showSecant && !isNaN(secantSlope) && isFinite(secantSlope)) {
        drawLine(mainCtx, pointA, fa, secantSlope, toMainCanvasX, toMainCanvasY, mainXRange, '#f59e0b', 2.5, true);
      }

      // Draw Point B (a+h, f(a+h))
      if (!isNaN(fah) && isFinite(fah) && showSecant) {
        drawPoint(mainCtx, pointA + deltaH, fah, toMainCanvasX, toMainCanvasY, '#f59e0b', 7, 'B');

        // Draw vertical and horizontal lines from B to show coordinates
        mainCtx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
        mainCtx.lineWidth = 1;
        mainCtx.setLineDash([4, 4]);
        mainCtx.beginPath();
        mainCtx.moveTo(toMainCanvasX(pointA + deltaH), toMainCanvasY(fah));
        mainCtx.lineTo(toMainCanvasX(pointA + deltaH), toMainCanvasY(0));
        mainCtx.moveTo(toMainCanvasX(pointA + deltaH), toMainCanvasY(fah));
        mainCtx.lineTo(toMainCanvasX(0), toMainCanvasY(fah));
        mainCtx.stroke();
        mainCtx.setLineDash([]);
      }

      // Draw Point A (a, f(a)) - draw last so it's on top
      if (!isNaN(fa) && isFinite(fa)) {
        drawPoint(mainCtx, pointA, fa, toMainCanvasX, toMainCanvasY, '#60a5fa', 9, 'A');

        // Draw vertical and horizontal lines from A
        mainCtx.strokeStyle = 'rgba(96, 165, 250, 0.4)';
        mainCtx.lineWidth = 1;
        mainCtx.setLineDash([4, 4]);
        mainCtx.beginPath();
        mainCtx.moveTo(toMainCanvasX(pointA), toMainCanvasY(fa));
        mainCtx.lineTo(toMainCanvasX(pointA), toMainCanvasY(0));
        mainCtx.moveTo(toMainCanvasX(pointA), toMainCanvasY(fa));
        mainCtx.lineTo(toMainCanvasX(0), toMainCanvasY(fa));
        mainCtx.stroke();
        mainCtx.setLineDash([]);
      }

      // Draw h arrow between A and B x-coordinates
      if (showSecant && Math.abs(deltaH) > 0.05) {
        const arrowY = toMainCanvasY(0) - 20;
        mainCtx.strokeStyle = '#f59e0b';
        mainCtx.fillStyle = '#f59e0b';
        mainCtx.lineWidth = 2;
        mainCtx.beginPath();
        mainCtx.moveTo(toMainCanvasX(pointA), arrowY);
        mainCtx.lineTo(toMainCanvasX(pointA + deltaH), arrowY);
        mainCtx.stroke();

        // Arrow head
        const arrowDir = deltaH > 0 ? 1 : -1;
        mainCtx.beginPath();
        mainCtx.moveTo(toMainCanvasX(pointA + deltaH), arrowY);
        mainCtx.lineTo(toMainCanvasX(pointA + deltaH) - 8 * arrowDir, arrowY - 5);
        mainCtx.lineTo(toMainCanvasX(pointA + deltaH) - 8 * arrowDir, arrowY + 5);
        mainCtx.closePath();
        mainCtx.fill();

        // h label
        mainCtx.font = 'bold 14px system-ui';
        mainCtx.textAlign = 'center';
        mainCtx.fillText('h', toMainCanvasX(pointA + deltaH / 2), arrowY - 8);
      }

      // Labels
      mainCtx.fillStyle = '#60a5fa';
      mainCtx.font = 'bold 16px system-ui';
      mainCtx.textAlign = 'left';
      mainCtx.fillText('f(x) = ' + func.latex, 15, 25);

      // Legend
      mainCtx.font = '13px system-ui';
      let legendY = 50;

      mainCtx.fillStyle = '#60a5fa';
      mainCtx.fillRect(15, legendY - 8, 20, 3);
      mainCtx.fillText('f(x)', 40, legendY);
      legendY += 20;

      if (showSecant) {
        mainCtx.fillStyle = '#f59e0b';
        mainCtx.strokeStyle = '#f59e0b';
        mainCtx.setLineDash([5, 3]);
        mainCtx.lineWidth = 2;
        mainCtx.beginPath();
        mainCtx.moveTo(15, legendY - 5);
        mainCtx.lineTo(35, legendY - 5);
        mainCtx.stroke();
        mainCtx.setLineDash([]);
        mainCtx.fillText('Secant', 40, legendY);
        legendY += 20;
      }

      if (showTangent) {
        mainCtx.fillStyle = '#34d399';
        mainCtx.fillRect(15, legendY - 8, 20, 3);
        mainCtx.fillText('Tangent', 40, legendY);
      }

      // ========== DRAW DERIVATIVE CANVAS ==========
      drawGrid(derivCtx, derivWidth, derivHeight, derivXRange, derivYRange, toDerivCanvasX, toDerivCanvasY);

      if (showDerivative) {
        // Draw f'(x) curve
        drawFunction(derivCtx, fPrime, toDerivCanvasX, toDerivCanvasY, derivXRange, '#a78bfa', 3);

        // Mark where f'(x) = 0 (extrema points)
        for (let x = derivXRange[0]; x <= derivXRange[1]; x += 0.1) {
          const fp = fPrime(x);
          const fpNext = fPrime(x + 0.1);
          if (!isNaN(fp) && !isNaN(fpNext) && fp * fpNext < 0) {
            // Zero crossing - mark it
            const zeroX = x + 0.1 * Math.abs(fp) / (Math.abs(fp) + Math.abs(fpNext));
            derivCtx.strokeStyle = '#ef4444';
            derivCtx.lineWidth = 2;
            derivCtx.beginPath();
            derivCtx.arc(toDerivCanvasX(zeroX), toDerivCanvasY(0), 6, 0, Math.PI * 2);
            derivCtx.stroke();
          }
        }

        // Show current derivative value as a point
        if (!isNaN(tangentSlope) && isFinite(tangentSlope)) {
          drawPoint(derivCtx, pointA, tangentSlope, toDerivCanvasX, toDerivCanvasY, '#a78bfa', 7);
        }

        // Shade regions
        // f'(x) > 0: increasing (green shading)
        // f'(x) < 0: decreasing (red shading)
        derivCtx.globalAlpha = 0.1;
        const step = 0.05;
        for (let x = derivXRange[0]; x <= derivXRange[1]; x += step) {
          const y = fPrime(x);
          if (!isNaN(y) && isFinite(y)) {
            const cx = toDerivCanvasX(x);
            const cy = toDerivCanvasY(y);
            const zeroY = toDerivCanvasY(0);

            if (y > 0) {
              derivCtx.fillStyle = '#34d399';
            } else {
              derivCtx.fillStyle = '#ef4444';
            }

            derivCtx.fillRect(cx, Math.min(cy, zeroY), step * derivWidth / (derivXRange[1] - derivXRange[0]), Math.abs(cy - zeroY));
          }
        }
        derivCtx.globalAlpha = 1;
      }

      // Labels
      derivCtx.fillStyle = '#a78bfa';
      derivCtx.font = 'bold 14px system-ui';
      derivCtx.textAlign = 'left';
      derivCtx.fillText("f'(x) = " + func.latexPrime, 15, 22);

      // Legend for shading
      derivCtx.font = '12px system-ui';
      derivCtx.fillStyle = '#34d399';
      derivCtx.fillText("f'(x) > 0 : f increasing", derivWidth - 150, 22);
      derivCtx.fillStyle = '#ef4444';
      derivCtx.fillText("f'(x) < 0 : f decreasing", derivWidth - 150, 38);

      // ========== UPDATE INFO PANEL ==========
      const slopeMatch = slopeDifference < 0.01 ? ' (CONVERGED!)' : '';
      const matchColor = slopeDifference < 0.01 ? '#34d399' : '#f59e0b';

      infoPanel.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
          <div style="padding: 12px; background: rgba(96, 165, 250, 0.1); border-radius: 8px; border-left: 3px solid #60a5fa;">
            <div style="color: #60a5fa; font-size: 12px; margin-bottom: 4px;">Point A (a, f(a))</div>
            <div style="color: var(--text-primary, #fafafa); font-size: 15px;">
              a = ${pointA.toFixed(3)}<br>
              f(a) = ${isNaN(fa) ? 'undefined' : fa.toFixed(4)}
            </div>
          </div>
          <div style="padding: 12px; background: rgba(245, 158, 11, 0.1); border-radius: 8px; border-left: 3px solid #f59e0b;">
            <div style="color: #f59e0b; font-size: 12px; margin-bottom: 4px;">Point B (a+h, f(a+h))</div>
            <div style="color: var(--text-primary, #fafafa); font-size: 15px;">
              a+h = ${(pointA + deltaH).toFixed(3)}<br>
              f(a+h) = ${isNaN(fah) ? 'undefined' : fah.toFixed(4)}
            </div>
          </div>
          <div style="padding: 12px; background: rgba(245, 158, 11, 0.1); border-radius: 8px; border-left: 3px solid #f59e0b;">
            <div style="color: #f59e0b; font-size: 12px; margin-bottom: 4px;">Secant Slope</div>
            <div style="color: var(--text-primary, #fafafa); font-size: 15px;">
              [f(a+h) - f(a)] / h<br>
              = <strong>${isNaN(secantSlope) ? 'undefined' : secantSlope.toFixed(6)}</strong>
            </div>
          </div>
          <div style="padding: 12px; background: rgba(52, 211, 153, 0.1); border-radius: 8px; border-left: 3px solid #34d399;">
            <div style="color: #34d399; font-size: 12px; margin-bottom: 4px;">Tangent Slope (Derivative)</div>
            <div style="color: var(--text-primary, #fafafa); font-size: 15px;">
              f'(a) = <strong>${isNaN(tangentSlope) ? 'undefined' : tangentSlope.toFixed(6)}</strong>
            </div>
          </div>
        </div>
        <div style="margin-top: 12px; padding: 12px; background: rgba(167, 139, 250, 0.1); border-radius: 8px; text-align: center;">
          <span style="color: var(--text-secondary, #a1a1aa);">Difference |Secant - Tangent| = </span>
          <span style="color: ${matchColor}; font-weight: bold; font-size: 16px;">${slopeDifference.toFixed(6)}${slopeMatch}</span>
        </div>
      `;
    };

    // ========== ANIMATION ==========
    const animateLimit = () => {
      if (isAnimating) {
        isAnimating = false;
        animateLimitBtn.textContent = 'Watch h -> 0';
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
        return;
      }

      isAnimating = true;
      animateLimitBtn.textContent = 'Stop';

      // Reset h to 2
      deltaH = 2;
      deltaHSlider.value = 2;
      deltaHValue.textContent = deltaH.toFixed(3);

      const animate = () => {
        if (!isAnimating) return;

        // Decrease h exponentially
        deltaH = deltaH * 0.985;

        if (deltaH < 0.001) {
          deltaH = 0.001;
          isAnimating = false;
          animateLimitBtn.textContent = 'Watch h -> 0';
        }

        deltaHSlider.value = deltaH;
        deltaHValue.textContent = deltaH.toFixed(3);
        render();

        if (isAnimating) {
          animationId = requestAnimationFrame(animate);
        }
      };

      animate();
    };

    // ========== EVENT LISTENERS ==========
    funcSelect.addEventListener('change', (e) => {
      currentFunc = e.target.value;

      // Adjust point a for functions with domain restrictions
      if (currentFunc === 'ln(x)' || currentFunc === 'sqrt(x)') {
        if (pointA <= 0) {
          pointA = 1;
          pointASlider.value = 1;
          pointAValue.textContent = '1.00';
        }
      } else if (currentFunc === '1/x') {
        if (Math.abs(pointA) < 0.1) {
          pointA = 1;
          pointASlider.value = 1;
          pointAValue.textContent = '1.00';
        }
      }

      render();
    });

    pointASlider.addEventListener('input', (e) => {
      pointA = parseFloat(e.target.value);
      pointAValue.textContent = pointA.toFixed(2);
      render();
    });

    deltaHSlider.addEventListener('input', (e) => {
      deltaH = parseFloat(e.target.value);
      deltaHValue.textContent = deltaH.toFixed(3);
      render();
    });

    animateLimitBtn.addEventListener('click', animateLimit);

    resetBtn.addEventListener('click', () => {
      isAnimating = false;
      animateLimitBtn.textContent = 'Watch h -> 0';
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }

      currentFunc = 'x^2';
      pointA = 1;
      deltaH = 1;

      funcSelect.value = 'x^2';
      pointASlider.value = 1;
      pointAValue.textContent = '1.00';
      deltaHSlider.value = 1;
      deltaHValue.textContent = '1.000';

      showSecant = true;
      showTangent = true;
      showDerivative = true;
      showSecantCheck.checked = true;
      showTangentCheck.checked = true;
      showDerivativeCheck.checked = true;

      render();
    });

    showSecantCheck.addEventListener('change', (e) => {
      showSecant = e.target.checked;
      render();
    });

    showTangentCheck.addEventListener('change', (e) => {
      showTangent = e.target.checked;
      render();
    });

    showDerivativeCheck.addEventListener('change', (e) => {
      showDerivative = e.target.checked;
      render();
    });

    // ========== INITIAL RENDER ==========
    render();
  },

  // ============================================
  // VSEPR MOLECULAR GEOMETRY VISUALIZATION
  // ============================================

  /**
   * Interactive VSEPR Molecular Geometry Visualization
   * Visualizes electron pair arrangements and molecular shapes
   * with 3D-like perspective and rotation
   */
  vseprGeometry(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    // Create main layout
    const mainLayout = document.createElement('div');
    mainLayout.style.cssText = 'display: grid; grid-template-columns: 1fr 320px; gap: 15px; width: 100%;';
    container.appendChild(mainLayout);

    // Canvas area
    const canvasArea = document.createElement('div');
    mainLayout.appendChild(canvasArea);

    const { canvas, ctx, width, height } = this.createCanvas(canvasArea, 450, 400);

    // Right panel for controls and info
    const rightPanel = document.createElement('div');
    rightPanel.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    mainLayout.appendChild(rightPanel);

    // Controls section
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    controls.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
    rightPanel.appendChild(controls);

    // Preset molecules dropdown
    const presetLabel = document.createElement('label');
    presetLabel.textContent = 'Preset Molecules:';
    presetLabel.style.cssText = 'font-size: 13px; color: var(--text-secondary, #a1a1aa); margin-bottom: 2px;';
    controls.appendChild(presetLabel);

    const presetSelect = document.createElement('select');
    presetSelect.className = 'anim-select';
    presetSelect.style.cssText = 'padding: 8px 12px; background: var(--bg-secondary, #18181b); color: var(--text-primary, #fafafa); border: 1px solid var(--border-primary, #27272a); border-radius: 6px; font-size: 14px; cursor: pointer; width: 100%;';

    const presets = [
      { name: '-- Select Preset --', pairs: 4, lonePairs: 0 },
      { name: 'BeCl2 (Linear)', pairs: 2, lonePairs: 0 },
      { name: 'CO2 (Linear)', pairs: 2, lonePairs: 0 },
      { name: 'BF3 (Trigonal Planar)', pairs: 3, lonePairs: 0 },
      { name: 'SO2 (Bent from 3 EP)', pairs: 3, lonePairs: 1 },
      { name: 'CH4 (Tetrahedral)', pairs: 4, lonePairs: 0 },
      { name: 'NH3 (Trigonal Pyramidal)', pairs: 4, lonePairs: 1 },
      { name: 'H2O (Bent)', pairs: 4, lonePairs: 2 },
      { name: 'PCl5 (Trigonal Bipyramidal)', pairs: 5, lonePairs: 0 },
      { name: 'SF4 (See-saw)', pairs: 5, lonePairs: 1 },
      { name: 'ClF3 (T-shaped)', pairs: 5, lonePairs: 2 },
      { name: 'XeF2 (Linear from 5 EP)', pairs: 5, lonePairs: 3 },
      { name: 'SF6 (Octahedral)', pairs: 6, lonePairs: 0 },
      { name: 'BrF5 (Square Pyramidal)', pairs: 6, lonePairs: 1 },
      { name: 'XeF4 (Square Planar)', pairs: 6, lonePairs: 2 }
    ];

    presets.forEach((preset, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = preset.name;
      presetSelect.appendChild(option);
    });
    controls.appendChild(presetSelect);

    // Separator
    const separator = document.createElement('div');
    separator.style.cssText = 'height: 1px; background: var(--border-primary, #27272a); margin: 8px 0;';
    controls.appendChild(separator);

    // Custom controls label
    const customLabel = document.createElement('div');
    customLabel.textContent = 'Custom Configuration:';
    customLabel.style.cssText = 'font-size: 13px; color: var(--text-secondary, #a1a1aa); font-weight: 500;';
    controls.appendChild(customLabel);

    // Sliders
    const totalPairsSlider = this.createSlider(controls, 'Total Electron Pairs', 2, 6, 4, 1, '');
    const lonePairsSlider = this.createSlider(controls, 'Lone Pairs', 0, 3, 0, 1, '');

    // Rotation control
    const rotateLabel = document.createElement('div');
    rotateLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa); margin-top: 8px;';
    rotateLabel.innerHTML = '<strong>Tip:</strong> Drag on the model to rotate 3D view';
    controls.appendChild(rotateLabel);

    // Auto-rotate toggle
    const autoRotateWrapper = document.createElement('div');
    autoRotateWrapper.style.cssText = 'display: flex; align-items: center; gap: 8px; margin-top: 4px;';
    const autoRotateCheck = document.createElement('input');
    autoRotateCheck.type = 'checkbox';
    autoRotateCheck.checked = true;
    autoRotateCheck.id = 'auto-rotate-' + containerId;
    const autoRotateLabel = document.createElement('label');
    autoRotateLabel.htmlFor = autoRotateCheck.id;
    autoRotateLabel.textContent = 'Auto-rotate';
    autoRotateLabel.style.cssText = 'font-size: 13px; color: var(--text-secondary, #a1a1aa); cursor: pointer;';
    autoRotateWrapper.appendChild(autoRotateCheck);
    autoRotateWrapper.appendChild(autoRotateLabel);
    controls.appendChild(autoRotateWrapper);

    // Info panel
    const info = document.createElement('div');
    info.className = 'anim-info';
    info.style.cssText = 'background: var(--bg-secondary, #18181b); border-radius: 8px; padding: 12px; flex-grow: 1;';
    rightPanel.appendChild(info);

    const self = this;

    // State
    let state = {
      totalPairs: 4,
      lonePairs: 0,
      rotationX: 0.3,
      rotationY: 0,
      autoRotate: true,
      isDragging: false,
      lastMouseX: 0,
      lastMouseY: 0
    };

    // Geometry data for all VSEPR configurations
    const geometryData = {
      // 2 electron pairs - Linear
      '2-0': {
        electronGeometry: 'Linear',
        molecularGeometry: 'Linear',
        bondAngle: '180',
        hybridization: 'sp',
        examples: 'BeCl2, CO2, HCN, C2H2',
        positions: [
          { x: 0, y: 0, z: 1, type: 'bond' },
          { x: 0, y: 0, z: -1, type: 'bond' }
        ]
      },
      // 3 electron pairs - Trigonal Planar base
      '3-0': {
        electronGeometry: 'Trigonal Planar',
        molecularGeometry: 'Trigonal Planar',
        bondAngle: '120',
        hybridization: 'sp2',
        examples: 'BF3, BCl3, AlCl3, CO3^2-',
        positions: [
          { x: 1, y: 0, z: 0, type: 'bond' },
          { x: -0.5, y: 0, z: 0.866, type: 'bond' },
          { x: -0.5, y: 0, z: -0.866, type: 'bond' }
        ]
      },
      '3-1': {
        electronGeometry: 'Trigonal Planar',
        molecularGeometry: 'Bent (V-shaped)',
        bondAngle: '~117-120',
        hybridization: 'sp2',
        examples: 'SO2, O3, NO2^-, SnCl2',
        positions: [
          { x: 1, y: 0, z: 0, type: 'bond' },
          { x: -0.5, y: 0, z: 0.866, type: 'bond' },
          { x: -0.5, y: 0, z: -0.866, type: 'lone' }
        ]
      },
      // 4 electron pairs - Tetrahedral base
      '4-0': {
        electronGeometry: 'Tetrahedral',
        molecularGeometry: 'Tetrahedral',
        bondAngle: '109.5',
        hybridization: 'sp3',
        examples: 'CH4, CCl4, NH4^+, SiH4',
        positions: [
          { x: 0, y: 1, z: 0, type: 'bond' },
          { x: 0.943, y: -0.333, z: 0, type: 'bond' },
          { x: -0.471, y: -0.333, z: 0.816, type: 'bond' },
          { x: -0.471, y: -0.333, z: -0.816, type: 'bond' }
        ]
      },
      '4-1': {
        electronGeometry: 'Tetrahedral',
        molecularGeometry: 'Trigonal Pyramidal',
        bondAngle: '~107',
        hybridization: 'sp3',
        examples: 'NH3, PCl3, PH3, AsH3, NF3',
        positions: [
          { x: 0, y: 1, z: 0, type: 'lone' },
          { x: 0.943, y: -0.333, z: 0, type: 'bond' },
          { x: -0.471, y: -0.333, z: 0.816, type: 'bond' },
          { x: -0.471, y: -0.333, z: -0.816, type: 'bond' }
        ]
      },
      '4-2': {
        electronGeometry: 'Tetrahedral',
        molecularGeometry: 'Bent (V-shaped)',
        bondAngle: '~104.5',
        hybridization: 'sp3',
        examples: 'H2O, H2S, SCl2, OF2',
        positions: [
          { x: 0, y: 1, z: 0, type: 'lone' },
          { x: 0.943, y: -0.333, z: 0, type: 'lone' },
          { x: -0.471, y: -0.333, z: 0.816, type: 'bond' },
          { x: -0.471, y: -0.333, z: -0.816, type: 'bond' }
        ]
      },
      // 5 electron pairs - Trigonal Bipyramidal base
      '5-0': {
        electronGeometry: 'Trigonal Bipyramidal',
        molecularGeometry: 'Trigonal Bipyramidal',
        bondAngle: '90 (axial), 120 (equatorial)',
        hybridization: 'sp3d',
        examples: 'PCl5, PF5, AsF5, SbCl5',
        positions: [
          { x: 0, y: 1, z: 0, type: 'bond' },
          { x: 0, y: -1, z: 0, type: 'bond' },
          { x: 1, y: 0, z: 0, type: 'bond' },
          { x: -0.5, y: 0, z: 0.866, type: 'bond' },
          { x: -0.5, y: 0, z: -0.866, type: 'bond' }
        ]
      },
      '5-1': {
        electronGeometry: 'Trigonal Bipyramidal',
        molecularGeometry: 'See-saw (Distorted Tetrahedral)',
        bondAngle: '~90, ~120 (distorted)',
        hybridization: 'sp3d',
        examples: 'SF4, XeO2F2, TeCl4',
        positions: [
          { x: 0, y: 1, z: 0, type: 'bond' },
          { x: 0, y: -1, z: 0, type: 'bond' },
          { x: 1, y: 0, z: 0, type: 'bond' },
          { x: -0.5, y: 0, z: 0.866, type: 'bond' },
          { x: -0.5, y: 0, z: -0.866, type: 'lone' }
        ]
      },
      '5-2': {
        electronGeometry: 'Trigonal Bipyramidal',
        molecularGeometry: 'T-shaped',
        bondAngle: '~90 (less due to LP)',
        hybridization: 'sp3d',
        examples: 'ClF3, BrF3, ICl3',
        positions: [
          { x: 0, y: 1, z: 0, type: 'bond' },
          { x: 0, y: -1, z: 0, type: 'bond' },
          { x: 1, y: 0, z: 0, type: 'bond' },
          { x: -0.5, y: 0, z: 0.866, type: 'lone' },
          { x: -0.5, y: 0, z: -0.866, type: 'lone' }
        ]
      },
      '5-3': {
        electronGeometry: 'Trigonal Bipyramidal',
        molecularGeometry: 'Linear',
        bondAngle: '180',
        hybridization: 'sp3d',
        examples: 'XeF2, I3^-, ICl2^-',
        positions: [
          { x: 0, y: 1, z: 0, type: 'bond' },
          { x: 0, y: -1, z: 0, type: 'bond' },
          { x: 1, y: 0, z: 0, type: 'lone' },
          { x: -0.5, y: 0, z: 0.866, type: 'lone' },
          { x: -0.5, y: 0, z: -0.866, type: 'lone' }
        ]
      },
      // 6 electron pairs - Octahedral base
      '6-0': {
        electronGeometry: 'Octahedral',
        molecularGeometry: 'Octahedral',
        bondAngle: '90',
        hybridization: 'sp3d2',
        examples: 'SF6, [PF6]^-, [SiF6]^2-',
        positions: [
          { x: 0, y: 1, z: 0, type: 'bond' },
          { x: 0, y: -1, z: 0, type: 'bond' },
          { x: 1, y: 0, z: 0, type: 'bond' },
          { x: -1, y: 0, z: 0, type: 'bond' },
          { x: 0, y: 0, z: 1, type: 'bond' },
          { x: 0, y: 0, z: -1, type: 'bond' }
        ]
      },
      '6-1': {
        electronGeometry: 'Octahedral',
        molecularGeometry: 'Square Pyramidal',
        bondAngle: '~90 (slightly less)',
        hybridization: 'sp3d2',
        examples: 'BrF5, IF5, XeOF4',
        positions: [
          { x: 0, y: 1, z: 0, type: 'bond' },
          { x: 0, y: -1, z: 0, type: 'lone' },
          { x: 1, y: 0, z: 0, type: 'bond' },
          { x: -1, y: 0, z: 0, type: 'bond' },
          { x: 0, y: 0, z: 1, type: 'bond' },
          { x: 0, y: 0, z: -1, type: 'bond' }
        ]
      },
      '6-2': {
        electronGeometry: 'Octahedral',
        molecularGeometry: 'Square Planar',
        bondAngle: '90',
        hybridization: 'sp3d2',
        examples: 'XeF4, [ICl4]^-, [PtCl4]^2-',
        positions: [
          { x: 0, y: 1, z: 0, type: 'lone' },
          { x: 0, y: -1, z: 0, type: 'lone' },
          { x: 1, y: 0, z: 0, type: 'bond' },
          { x: -1, y: 0, z: 0, type: 'bond' },
          { x: 0, y: 0, z: 1, type: 'bond' },
          { x: 0, y: 0, z: -1, type: 'bond' }
        ]
      }
    };

    // Get max lone pairs for given total pairs
    const getMaxLonePairs = (total) => {
      const maxLP = { 2: 0, 3: 1, 4: 2, 5: 3, 6: 2 };
      return maxLP[total] || 0;
    };

    // Update lone pairs slider max
    const updateLonePairsMax = () => {
      const total = parseInt(totalPairsSlider.value);
      const maxLP = getMaxLonePairs(total);
      lonePairsSlider.max = maxLP;
      if (parseInt(lonePairsSlider.value) > maxLP) {
        lonePairsSlider.value = maxLP;
        lonePairsSlider.dispatchEvent(new Event('input'));
      }
      const label = lonePairsSlider.parentElement.querySelector('label');
      if (label) {
        label.innerHTML = `Lone Pairs: <span class="value">${lonePairsSlider.value}</span> (max: ${maxLP})`;
      }
    };

    // 3D rotation matrix application
    const rotate3D = (x, y, z, rotX, rotY) => {
      let x1 = x * Math.cos(rotY) - z * Math.sin(rotY);
      let z1 = x * Math.sin(rotY) + z * Math.cos(rotY);
      let y1 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
      let z2 = y * Math.sin(rotX) + z1 * Math.cos(rotX);
      return { x: x1, y: y1, z: z2 };
    };

    // Project 3D to 2D with perspective
    const project = (x, y, z, scale = 80) => {
      const perspective = 400;
      const factor = perspective / (perspective + z * 50);
      return { x: x * scale * factor, y: y * scale * factor, z: z, scale: factor };
    };

    // Draw the molecule
    const draw = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const key = `${state.totalPairs}-${state.lonePairs}`;
      const geom = geometryData[key];

      if (!geom) {
        ctx.fillStyle = colors.textSecondary;
        ctx.font = '16px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('Invalid combination', cx, cy);
        return;
      }

      // Transform and sort positions for depth ordering
      const transformed = geom.positions.map((pos, i) => {
        const rotated = rotate3D(pos.x, pos.y, pos.z, state.rotationX, state.rotationY);
        const projected = project(rotated.x, rotated.y, rotated.z);
        return { ...pos, ...projected, index: i, screenX: cx + projected.x, screenY: cy - projected.y };
      });
      transformed.sort((a, b) => a.z - b.z);

      // Draw bonds first (behind atoms)
      transformed.forEach(atom => {
        if (atom.type === 'bond') {
          const depth = (atom.z + 1) / 2;
          const alpha = 0.4 + depth * 0.6;
          ctx.strokeStyle = colors.axis;
          ctx.lineWidth = 4 * atom.scale;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(atom.screenX, atom.screenY);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      });

      // Draw central atom
      const centralGradient = ctx.createRadialGradient(cx - 5, cy - 5, 0, cx, cy, 30);
      centralGradient.addColorStop(0, '#7dd3fc');
      centralGradient.addColorStop(0.5, colors.blue);
      centralGradient.addColorStop(1, '#0369a1');
      ctx.fillStyle = centralGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, 28, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('A', cx, cy);

      // Draw outer atoms and lone pairs
      transformed.forEach(atom => {
        const depth = (atom.z + 1) / 2;
        const alpha = 0.5 + depth * 0.5;
        const radius = 20 * atom.scale;

        if (atom.type === 'bond') {
          const atomGradient = ctx.createRadialGradient(
            atom.screenX - 3 * atom.scale, atom.screenY - 3 * atom.scale, 0,
            atom.screenX, atom.screenY, radius
          );
          atomGradient.addColorStop(0, '#86efac');
          atomGradient.addColorStop(0.5, colors.green);
          atomGradient.addColorStop(1, '#15803d');

          ctx.globalAlpha = alpha;
          ctx.fillStyle = atomGradient;
          ctx.beginPath();
          ctx.arc(atom.screenX, atom.screenY, radius, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#fff';
          ctx.font = `bold ${Math.round(12 * atom.scale)}px system-ui`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('X', atom.screenX, atom.screenY);
          ctx.globalAlpha = 1;
        } else {
          // Lone pair - draw as electron cloud
          const lpRadius = 25 * atom.scale;
          const gradient = ctx.createRadialGradient(
            atom.screenX, atom.screenY, 0, atom.screenX, atom.screenY, lpRadius
          );
          gradient.addColorStop(0, 'rgba(167, 139, 250, 0.9)');
          gradient.addColorStop(0.3, 'rgba(167, 139, 250, 0.6)');
          gradient.addColorStop(0.6, 'rgba(167, 139, 250, 0.3)');
          gradient.addColorStop(1, 'rgba(167, 139, 250, 0)');

          ctx.globalAlpha = alpha;
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(atom.screenX, atom.screenY, lpRadius, 0, Math.PI * 2);
          ctx.fill();

          // Draw two dots for lone pair
          ctx.fillStyle = '#c4b5fd';
          const dotOffset = 6 * atom.scale;
          ctx.beginPath();
          ctx.arc(atom.screenX - dotOffset, atom.screenY, 4 * atom.scale, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(atom.screenX + dotOffset, atom.screenY, 4 * atom.scale, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#e9d5ff';
          ctx.font = `${Math.round(10 * atom.scale)}px system-ui`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('LP', atom.screenX, atom.screenY + lpRadius + 8);
          ctx.globalAlpha = 1;
        }
      });

      // Draw bond angle arc
      const bondingPositions = transformed.filter(a => a.type === 'bond');
      if (bondingPositions.length >= 2) {
        const sortedByScreen = [...bondingPositions].sort((a, b) => a.screenX - b.screenX);
        const first = sortedByScreen[0];
        const last = sortedByScreen[sortedByScreen.length - 1];
        const angle1 = Math.atan2(cy - first.screenY, first.screenX - cx);
        const angle2 = Math.atan2(cy - last.screenY, last.screenX - cx);

        ctx.strokeStyle = colors.yellow + '60';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, 45, -angle2, -angle1);
        ctx.stroke();

        const midAngle = (angle1 + angle2) / 2;
        const labelX = cx + 55 * Math.cos(-midAngle);
        const labelY = cy + 55 * Math.sin(-midAngle);
        ctx.fillStyle = colors.yellow;
        ctx.font = '12px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(geom.bondAngle + '\u00B0', labelX, labelY);
      }

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 18px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(geom.molecularGeometry, cx, 30);

      // Legend
      const legendY = height - 30;
      ctx.font = '12px system-ui';

      ctx.fillStyle = colors.blue;
      ctx.beginPath();
      ctx.arc(cx - 100, legendY, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.textSecondary;
      ctx.textAlign = 'left';
      ctx.fillText('Central Atom (A)', cx - 88, legendY + 4);

      ctx.fillStyle = colors.green;
      ctx.beginPath();
      ctx.arc(cx + 20, legendY, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.textSecondary;
      ctx.fillText('Bonded Atom (X)', cx + 32, legendY + 4);

      if (state.lonePairs > 0) {
        ctx.fillStyle = colors.purple;
        ctx.beginPath();
        ctx.arc(cx + 140, legendY, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = colors.textSecondary;
        ctx.fillText('Lone Pair', cx + 152, legendY + 4);
      }

      updateInfo(geom);
    };

    // Update info panel
    const updateInfo = (geom) => {
      const bondingPairs = state.totalPairs - state.lonePairs;
      const formula = `AX${bondingPairs}${state.lonePairs > 0 ? 'E' + (state.lonePairs > 1 ? state.lonePairs : '') : ''}`;

      let repulsionNote = '';
      if (state.lonePairs === 1) {
        repulsionNote = 'Lone pair occupies more space, compressing bond angles';
      } else if (state.lonePairs >= 2) {
        repulsionNote = 'Multiple lone pairs cause significant angle compression';
      }

      info.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 13px;">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-primary, #27272a); padding-bottom: 8px;">
            <span style="color: var(--text-secondary, #a1a1aa);">Formula:</span>
            <strong style="color: var(--anim-yellow, #fbbf24);">${formula}</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-secondary, #a1a1aa);">Electron Geometry:</span>
            <strong>${geom.electronGeometry}</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-secondary, #a1a1aa);">Molecular Geometry:</span>
            <strong style="color: var(--anim-green, #34d399);">${geom.molecularGeometry}</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-secondary, #a1a1aa);">Bond Angle:</span>
            <strong style="color: var(--anim-orange, #f78166);">${geom.bondAngle}\u00B0</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-secondary, #a1a1aa);">Hybridization:</span>
            <strong style="color: var(--anim-cyan, #79c0ff);">${geom.hybridization}</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-secondary, #a1a1aa);">Bonding Pairs:</span>
            <strong>${bondingPairs}</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-secondary, #a1a1aa);">Lone Pairs:</span>
            <strong style="color: var(--anim-purple, #a78bfa);">${state.lonePairs}</strong>
          </div>
          <div style="border-top: 1px solid var(--border-primary, #27272a); padding-top: 8px;">
            <span style="color: var(--text-secondary, #a1a1aa);">Examples:</span>
            <div style="color: var(--text-primary, #fafafa); margin-top: 4px; font-size: 12px;">${geom.examples}</div>
          </div>
          ${repulsionNote ? `
          <div style="background: rgba(167, 139, 250, 0.1); border: 1px solid rgba(167, 139, 250, 0.3); border-radius: 6px; padding: 8px; margin-top: 4px;">
            <div style="color: var(--anim-purple, #a78bfa); font-size: 11px; font-weight: 500;">REPULSION EFFECT</div>
            <div style="color: var(--text-secondary, #a1a1aa); font-size: 11px; margin-top: 2px;">${repulsionNote}</div>
            <div style="color: var(--text-secondary, #a1a1aa); font-size: 10px; margin-top: 4px;">LP-LP > LP-BP > BP-BP</div>
          </div>` : ''}
        </div>
      `;
    };

    // Animation loop
    const animate = () => {
      if (state.autoRotate && !state.isDragging) {
        state.rotationY += 0.008;
      }
      draw();
      requestAnimationFrame(animate);
    };

    // Mouse interaction for rotation
    canvas.addEventListener('mousedown', (e) => {
      state.isDragging = true;
      const rect = canvas.getBoundingClientRect();
      state.lastMouseX = e.clientX - rect.left;
      state.lastMouseY = e.clientY - rect.top;
      canvas.style.cursor = 'grabbing';
    });

    canvas.addEventListener('mousemove', (e) => {
      if (state.isDragging) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const deltaX = mouseX - state.lastMouseX;
        const deltaY = mouseY - state.lastMouseY;
        state.rotationY += deltaX * 0.01;
        state.rotationX += deltaY * 0.01;
        state.rotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, state.rotationX));
        state.lastMouseX = mouseX;
        state.lastMouseY = mouseY;
      }
    });

    canvas.addEventListener('mouseup', () => {
      state.isDragging = false;
      canvas.style.cursor = 'grab';
    });

    canvas.addEventListener('mouseleave', () => {
      state.isDragging = false;
      canvas.style.cursor = 'grab';
    });

    canvas.style.cursor = 'grab';

    // Touch support
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      state.isDragging = true;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      state.lastMouseX = touch.clientX - rect.left;
      state.lastMouseY = touch.clientY - rect.top;
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
      if (state.isDragging) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const mouseX = touch.clientX - rect.left;
        const mouseY = touch.clientY - rect.top;
        const deltaX = mouseX - state.lastMouseX;
        const deltaY = mouseY - state.lastMouseY;
        state.rotationY += deltaX * 0.01;
        state.rotationX += deltaY * 0.01;
        state.rotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, state.rotationX));
        state.lastMouseX = mouseX;
        state.lastMouseY = mouseY;
      }
    }, { passive: false });

    canvas.addEventListener('touchend', () => {
      state.isDragging = false;
    });

    // Event handlers
    totalPairsSlider.addEventListener('input', () => {
      state.totalPairs = parseInt(totalPairsSlider.value);
      updateLonePairsMax();
      state.lonePairs = parseInt(lonePairsSlider.value);
      presetSelect.value = 0;
    });

    lonePairsSlider.addEventListener('input', () => {
      state.lonePairs = parseInt(lonePairsSlider.value);
      presetSelect.value = 0;
    });

    presetSelect.addEventListener('change', () => {
      const idx = parseInt(presetSelect.value);
      if (idx > 0) {
        const preset = presets[idx];
        state.totalPairs = preset.pairs;
        state.lonePairs = preset.lonePairs;
        totalPairsSlider.value = preset.pairs;
        lonePairsSlider.value = preset.lonePairs;
        totalPairsSlider.dispatchEvent(new Event('input'));
        updateLonePairsMax();
        lonePairsSlider.value = preset.lonePairs;
        lonePairsSlider.dispatchEvent(new Event('input'));
      }
    });

    autoRotateCheck.addEventListener('change', () => {
      state.autoRotate = autoRotateCheck.checked;
    });

    // Responsive layout
    const handleResize = () => {
      if (window.innerWidth < 700) {
        mainLayout.style.gridTemplateColumns = '1fr';
        canvasArea.style.order = '1';
        rightPanel.style.order = '2';
      } else {
        mainLayout.style.gridTemplateColumns = '1fr 320px';
        canvasArea.style.order = '';
        rightPanel.style.order = '';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Initialize
    updateLonePairsMax();
    animate();
  },

  // ============================================
  // CONIC SECTIONS EXPLORER
  // ============================================

  /**
   * Interactive Conic Sections Explorer
   * Visualizes Circle, Ellipse, Parabola, and Hyperbola with:
   * - Real-time parameter controls
   * - Focus, directrix, asymptotes visualization
   * - Draggable point showing geometric properties
   * - Eccentricity and equation display
   */
  conicSectionsExplorer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container conic-explorer';

    const self = this;

    // Main layout
    const mainLayout = document.createElement('div');
    mainLayout.style.cssText = 'display: grid; grid-template-columns: 1fr 280px; gap: 15px; width: 100%;';
    container.appendChild(mainLayout);

    // Canvas area
    const canvasArea = document.createElement('div');
    mainLayout.appendChild(canvasArea);

    const { canvas, ctx, width, height } = this.createCanvas(canvasArea, 500, 450);

    // Right panel for controls
    const rightPanel = document.createElement('div');
    rightPanel.style.cssText = 'display: flex; flex-direction: column; gap: 10px;';
    mainLayout.appendChild(rightPanel);

    // Conic type tabs
    const tabsContainer = document.createElement('div');
    tabsContainer.style.cssText = 'display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 10px;';
    rightPanel.appendChild(tabsContainer);

    const conicTypes = ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'];
    let currentConic = 'Ellipse';

    const tabButtons = {};
    conicTypes.forEach(type => {
      const btn = document.createElement('button');
      btn.textContent = type;
      btn.className = 'anim-btn';
      btn.style.cssText = 'flex: 1; min-width: 70px; padding: 8px 12px; font-size: 12px;';
      btn.addEventListener('click', () => {
        currentConic = type;
        updateActiveTab();
        updateControlsVisibility();
        resetDragPoint();
        render();
      });
      tabsContainer.appendChild(btn);
      tabButtons[type] = btn;
    });

    const updateActiveTab = () => {
      Object.entries(tabButtons).forEach(([type, btn]) => {
        btn.style.background = type === currentConic ? '#f59e0b' : '';
        btn.style.color = type === currentConic ? '#000' : '';
      });
    };

    // Controls container
    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'anim-controls';
    controlsDiv.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
    rightPanel.appendChild(controlsDiv);

    // Circle controls
    const circleControls = document.createElement('div');
    circleControls.className = 'control-group';
    controlsDiv.appendChild(circleControls);

    const circleLabel = document.createElement('div');
    circleLabel.innerHTML = '<strong>Circle Parameters</strong>';
    circleLabel.style.cssText = 'margin-bottom: 5px; color: #f59e0b;';
    circleControls.appendChild(circleLabel);

    const radiusSlider = this.createSlider(circleControls, 'Radius (r)', 20, 150, 80, 5, ' px');

    // Ellipse controls
    const ellipseControls = document.createElement('div');
    ellipseControls.className = 'control-group';
    controlsDiv.appendChild(ellipseControls);

    const ellipseLabel = document.createElement('div');
    ellipseLabel.innerHTML = '<strong>Ellipse Parameters</strong>';
    ellipseLabel.style.cssText = 'margin-bottom: 5px; color: #f59e0b;';
    ellipseControls.appendChild(ellipseLabel);

    const aSlider = this.createSlider(ellipseControls, 'Semi-major (a)', 50, 180, 120, 5, ' px');
    const bSlider = this.createSlider(ellipseControls, 'Semi-minor (b)', 30, 150, 70, 5, ' px');

    // Parabola controls
    const parabolaControls = document.createElement('div');
    parabolaControls.className = 'control-group';
    controlsDiv.appendChild(parabolaControls);

    const parabolaLabel = document.createElement('div');
    parabolaLabel.innerHTML = '<strong>Parabola Parameters</strong>';
    parabolaLabel.style.cssText = 'margin-bottom: 5px; color: #f59e0b;';
    parabolaControls.appendChild(parabolaLabel);

    const pSlider = this.createSlider(parabolaControls, 'Parameter (a)', 20, 80, 40, 5, ' px');

    // Parabola orientation
    const orientLabel = document.createElement('div');
    orientLabel.textContent = 'Orientation:';
    orientLabel.style.cssText = 'font-size: 12px; margin-top: 5px;';
    parabolaControls.appendChild(orientLabel);

    const orientContainer = document.createElement('div');
    orientContainer.style.cssText = 'display: flex; gap: 5px; flex-wrap: wrap;';
    parabolaControls.appendChild(orientContainer);

    const parabolaOrientations = ['Right', 'Left', 'Up', 'Down'];
    let parabolaOrientation = 'Right';
    const orientButtons = {};

    parabolaOrientations.forEach(orient => {
      const btn = document.createElement('button');
      btn.textContent = orient;
      btn.className = 'anim-btn';
      btn.style.cssText = 'flex: 1; padding: 5px; font-size: 11px;';
      btn.addEventListener('click', () => {
        parabolaOrientation = orient;
        updateOrientButtons();
        resetDragPoint();
        render();
      });
      orientContainer.appendChild(btn);
      orientButtons[orient] = btn;
    });

    const updateOrientButtons = () => {
      Object.entries(orientButtons).forEach(([orient, btn]) => {
        btn.style.background = orient === parabolaOrientation ? '#60a5fa' : '';
        btn.style.color = orient === parabolaOrientation ? '#000' : '';
      });
    };

    // Hyperbola controls
    const hyperbolaControls = document.createElement('div');
    hyperbolaControls.className = 'control-group';
    controlsDiv.appendChild(hyperbolaControls);

    const hyperbolaLabel = document.createElement('div');
    hyperbolaLabel.innerHTML = '<strong>Hyperbola Parameters</strong>';
    hyperbolaLabel.style.cssText = 'margin-bottom: 5px; color: #f59e0b;';
    hyperbolaControls.appendChild(hyperbolaLabel);

    const haSlider = this.createSlider(hyperbolaControls, 'Semi-transverse (a)', 30, 120, 60, 5, ' px');
    const hbSlider = this.createSlider(hyperbolaControls, 'Semi-conjugate (b)', 30, 120, 45, 5, ' px');

    // Hyperbola orientation
    const hOrientLabel = document.createElement('div');
    hOrientLabel.textContent = 'Orientation:';
    hOrientLabel.style.cssText = 'font-size: 12px; margin-top: 5px;';
    hyperbolaControls.appendChild(hOrientLabel);

    const hOrientContainer = document.createElement('div');
    hOrientContainer.style.cssText = 'display: flex; gap: 5px;';
    hyperbolaControls.appendChild(hOrientContainer);

    let hyperbolaOrientation = 'Horizontal';
    const hOrientButtons = {};

    ['Horizontal', 'Vertical'].forEach(orient => {
      const btn = document.createElement('button');
      btn.textContent = orient;
      btn.className = 'anim-btn';
      btn.style.cssText = 'flex: 1; padding: 5px; font-size: 11px;';
      btn.addEventListener('click', () => {
        hyperbolaOrientation = orient;
        updateHOrientButtons();
        resetDragPoint();
        render();
      });
      hOrientContainer.appendChild(btn);
      hOrientButtons[orient] = btn;
    });

    const updateHOrientButtons = () => {
      Object.entries(hOrientButtons).forEach(([orient, btn]) => {
        btn.style.background = orient === hyperbolaOrientation ? '#60a5fa' : '';
        btn.style.color = orient === hyperbolaOrientation ? '#000' : '';
      });
    };

    // Toggle options
    const togglesDiv = document.createElement('div');
    togglesDiv.style.cssText = 'display: flex; flex-direction: column; gap: 5px; margin-top: 10px; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 8px;';
    rightPanel.appendChild(togglesDiv);

    const toggleLabel = document.createElement('div');
    toggleLabel.innerHTML = '<strong>Display Options</strong>';
    toggleLabel.style.cssText = 'margin-bottom: 5px; color: #34d399;';
    togglesDiv.appendChild(toggleLabel);

    let showFocus = true;
    let showDirectrix = true;
    let showAsymptotes = true;
    let showDistances = true;

    const createToggle = (parent, label, checked, onChange) => {
      const wrapper = document.createElement('label');
      wrapper.style.cssText = 'display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 13px;';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = checked;
      checkbox.addEventListener('change', () => { onChange(checkbox.checked); render(); });
      wrapper.appendChild(checkbox);
      wrapper.appendChild(document.createTextNode(label));
      parent.appendChild(wrapper);
      return checkbox;
    };

    createToggle(togglesDiv, 'Show Focus/Foci', showFocus, (v) => showFocus = v);
    createToggle(togglesDiv, 'Show Directrix', showDirectrix, (v) => showDirectrix = v);
    createToggle(togglesDiv, 'Show Asymptotes', showAsymptotes, (v) => showAsymptotes = v);
    createToggle(togglesDiv, 'Show Distances', showDistances, (v) => showDistances = v);

    // Info display
    const infoDiv = document.createElement('div');
    infoDiv.className = 'anim-info';
    infoDiv.style.cssText = 'margin-top: 10px; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; font-size: 12px;';
    rightPanel.appendChild(infoDiv);

    // Equation display
    const equationDiv = document.createElement('div');
    equationDiv.style.cssText = 'margin-top: 10px; padding: 10px; background: rgba(245, 158, 11, 0.1); border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);';
    rightPanel.appendChild(equationDiv);

    // Draggable point state
    let dragPoint = { x: 0, y: 0, t: 0 };
    let isDragging = false;
    const centerX = width / 2;
    const centerY = height / 2;

    const resetDragPoint = () => { dragPoint.t = Math.PI / 4; updateDragPointPosition(); };

    const updateDragPointPosition = () => {
      const a = parseFloat(aSlider.value), b = parseFloat(bSlider.value);
      const r = parseFloat(radiusSlider.value), p = parseFloat(pSlider.value);
      const ha = parseFloat(haSlider.value), hb = parseFloat(hbSlider.value);

      switch (currentConic) {
        case 'Circle':
          dragPoint.x = centerX + r * Math.cos(dragPoint.t);
          dragPoint.y = centerY - r * Math.sin(dragPoint.t);
          break;
        case 'Ellipse':
          const eA = Math.max(a, b), eB = Math.min(a, b);
          dragPoint.x = centerX + eA * Math.cos(dragPoint.t);
          dragPoint.y = centerY - eB * Math.sin(dragPoint.t);
          break;
        case 'Parabola':
          const t = dragPoint.t * 3 - 4.5;
          switch (parabolaOrientation) {
            case 'Right': dragPoint.x = centerX + p * t * t / 4; dragPoint.y = centerY - p * t; break;
            case 'Left': dragPoint.x = centerX - p * t * t / 4; dragPoint.y = centerY - p * t; break;
            case 'Up': dragPoint.x = centerX + p * t; dragPoint.y = centerY - p * t * t / 4; break;
            case 'Down': dragPoint.x = centerX + p * t; dragPoint.y = centerY + p * t * t / 4; break;
          }
          break;
        case 'Hyperbola':
          const ht = dragPoint.t * 2 - Math.PI;
          const secT = 1 / Math.cos(ht), tanT = Math.tan(ht);
          if (Math.abs(secT) < 10) {
            if (hyperbolaOrientation === 'Horizontal') {
              dragPoint.x = centerX + ha * secT; dragPoint.y = centerY - hb * tanT;
            } else {
              dragPoint.x = centerX + hb * tanT; dragPoint.y = centerY - ha * secT;
            }
          }
          break;
      }
    };

    const updateControlsVisibility = () => {
      circleControls.style.display = currentConic === 'Circle' ? 'block' : 'none';
      ellipseControls.style.display = currentConic === 'Ellipse' ? 'block' : 'none';
      parabolaControls.style.display = currentConic === 'Parabola' ? 'block' : 'none';
      hyperbolaControls.style.display = currentConic === 'Hyperbola' ? 'block' : 'none';
    };

    const drawGrid = (colors) => {
      const gridSpacing = 40;
      ctx.strokeStyle = colors.grid; ctx.lineWidth = 1;
      for (let x = centerX % gridSpacing; x < width; x += gridSpacing) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
      for (let y = centerY % gridSpacing; y < height; y += gridSpacing) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
      ctx.strokeStyle = colors.axis; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, centerY); ctx.lineTo(width, centerY); ctx.moveTo(centerX, 0); ctx.lineTo(centerX, height); ctx.stroke();
      ctx.fillStyle = colors.axis;
      ctx.beginPath(); ctx.moveTo(width - 10, centerY - 5); ctx.lineTo(width, centerY); ctx.lineTo(width - 10, centerY + 5); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(centerX - 5, 10); ctx.lineTo(centerX, 0); ctx.lineTo(centerX + 5, 10); ctx.closePath(); ctx.fill();
      ctx.fillStyle = colors.axisLabel; ctx.font = '14px system-ui';
      ctx.fillText('x', width - 15, centerY + 20); ctx.fillText('y', centerX + 10, 15);
    };

    const drawCircle = (colors) => {
      const r = parseFloat(radiusSlider.value);
      ctx.strokeStyle = colors.orange; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(centerX, centerY, r, 0, Math.PI * 2); ctx.stroke();
      if (showFocus) {
        ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(centerX, centerY, 6, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = colors.text; ctx.font = '12px system-ui'; ctx.fillText('C(0,0)', centerX + 10, centerY - 10);
      }
      infoDiv.innerHTML = `<div><strong>Circle Properties:</strong></div><div>Center: (0, 0)</div><div>Radius: ${r} px</div><div>Eccentricity: e = 0</div><div>Circumference: ${(2 * Math.PI * r).toFixed(1)} px</div>`;
      equationDiv.innerHTML = `<div style="color: #f59e0b; font-weight: bold; margin-bottom: 5px;">Standard Equation:</div><div style="font-family: monospace; font-size: 14px;">x^2 + y^2 = ${r * r}</div>`;
      return { focus: { x: centerX, y: centerY }, r };
    };

    const drawEllipse = (colors) => {
      const a = Math.max(parseFloat(aSlider.value), parseFloat(bSlider.value));
      const b = Math.min(parseFloat(aSlider.value), parseFloat(bSlider.value));
      const c = Math.sqrt(a * a - b * b), e = c / a;
      const isHorizontal = parseFloat(aSlider.value) >= parseFloat(bSlider.value);
      ctx.strokeStyle = colors.orange; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.ellipse(centerX, centerY, isHorizontal ? a : b, isHorizontal ? b : a, 0, 0, Math.PI * 2); ctx.stroke();
      let f1, f2;
      if (isHorizontal) { f1 = { x: centerX - c, y: centerY }; f2 = { x: centerX + c, y: centerY }; }
      else { f1 = { x: centerX, y: centerY + c }; f2 = { x: centerX, y: centerY - c }; }
      if (showFocus) {
        ctx.fillStyle = '#ef4444';
        ctx.beginPath(); ctx.arc(f1.x, f1.y, 6, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(f2.x, f2.y, 6, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = colors.text; ctx.font = '11px system-ui';
        if (isHorizontal) { ctx.fillText(`F1(-${c.toFixed(0)}, 0)`, f1.x - 40, f1.y - 10); ctx.fillText(`F2(${c.toFixed(0)}, 0)`, f2.x + 5, f2.y - 10); }
        else { ctx.fillText(`F1(0, -${c.toFixed(0)})`, f1.x + 10, f1.y); ctx.fillText(`F2(0, ${c.toFixed(0)})`, f2.x + 10, f2.y); }
      }
      if (showDirectrix) {
        const d = a / e; ctx.strokeStyle = '#60a5fa'; ctx.lineWidth = 2; ctx.setLineDash([8, 4]);
        if (isHorizontal) { ctx.beginPath(); ctx.moveTo(centerX - d, 0); ctx.lineTo(centerX - d, height); ctx.stroke(); ctx.beginPath(); ctx.moveTo(centerX + d, 0); ctx.lineTo(centerX + d, height); ctx.stroke(); }
        else { ctx.beginPath(); ctx.moveTo(0, centerY + d); ctx.lineTo(width, centerY + d); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, centerY - d); ctx.lineTo(width, centerY - d); ctx.stroke(); }
        ctx.setLineDash([]);
      }
      ctx.fillStyle = colors.purple;
      if (isHorizontal) { ctx.beginPath(); ctx.arc(centerX - a, centerY, 5, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(centerX + a, centerY, 5, 0, Math.PI * 2); ctx.fill(); }
      else { ctx.beginPath(); ctx.arc(centerX, centerY - a, 5, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(centerX, centerY + a, 5, 0, Math.PI * 2); ctx.fill(); }
      const lr = (2 * b * b) / a;
      infoDiv.innerHTML = `<div><strong>Ellipse Properties:</strong></div><div>Semi-major (a): ${a} px</div><div>Semi-minor (b): ${b} px</div><div>c = sqrt(a^2 - b^2) = ${c.toFixed(1)} px</div><div>Eccentricity: e = ${e.toFixed(3)}</div><div>Latus Rectum: ${lr.toFixed(1)} px</div><div style="color: #34d399; margin-top: 5px;">PF1 + PF2 = 2a = ${2 * a}</div>`;
      equationDiv.innerHTML = isHorizontal ? `<div style="color: #f59e0b; font-weight: bold; margin-bottom: 5px;">Standard Equation:</div><div style="font-family: monospace; font-size: 13px;">x^2/${a * a} + y^2/${b * b} = 1</div>` : `<div style="color: #f59e0b; font-weight: bold; margin-bottom: 5px;">Standard Equation:</div><div style="font-family: monospace; font-size: 13px;">x^2/${b * b} + y^2/${a * a} = 1</div>`;
      return { f1, f2, a, b, c, e, isHorizontal };
    };

    const drawParabola = (colors) => {
      const a = parseFloat(pSlider.value), fourA = 4 * a;
      let focus, directrixX, directrixY;
      ctx.strokeStyle = colors.orange; ctx.lineWidth = 3; ctx.beginPath();
      const drawRange = 200; let started = false;
      switch (parabolaOrientation) {
        case 'Right': focus = { x: centerX + a, y: centerY }; directrixX = centerX - a;
          for (let py = -drawRange; py <= drawRange; py += 2) { const px = (py * py) / fourA; if (px <= drawRange) { if (!started) { ctx.moveTo(centerX + px, centerY + py); started = true; } else ctx.lineTo(centerX + px, centerY + py); } } break;
        case 'Left': focus = { x: centerX - a, y: centerY }; directrixX = centerX + a;
          for (let py = -drawRange; py <= drawRange; py += 2) { const px = -(py * py) / fourA; if (Math.abs(px) <= drawRange) { if (!started) { ctx.moveTo(centerX + px, centerY + py); started = true; } else ctx.lineTo(centerX + px, centerY + py); } } break;
        case 'Up': focus = { x: centerX, y: centerY - a }; directrixY = centerY + a;
          for (let px = -drawRange; px <= drawRange; px += 2) { const py = -(px * px) / fourA; if (Math.abs(py) <= drawRange) { if (!started) { ctx.moveTo(centerX + px, centerY + py); started = true; } else ctx.lineTo(centerX + px, centerY + py); } } break;
        case 'Down': focus = { x: centerX, y: centerY + a }; directrixY = centerY - a;
          for (let px = -drawRange; px <= drawRange; px += 2) { const py = (px * px) / fourA; if (py <= drawRange) { if (!started) { ctx.moveTo(centerX + px, centerY + py); started = true; } else ctx.lineTo(centerX + px, centerY + py); } } break;
      }
      ctx.stroke();
      if (showFocus) { ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(focus.x, focus.y, 6, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = colors.text; ctx.font = '11px system-ui'; ctx.fillText(parabolaOrientation === 'Right' ? `F(${a}, 0)` : parabolaOrientation === 'Left' ? `F(-${a}, 0)` : parabolaOrientation === 'Up' ? `F(0, ${a})` : `F(0, -${a})`, focus.x + 10, focus.y - 10); }
      if (showDirectrix) { ctx.strokeStyle = '#60a5fa'; ctx.lineWidth = 2; ctx.setLineDash([8, 4]); ctx.beginPath(); if (parabolaOrientation === 'Right' || parabolaOrientation === 'Left') { ctx.moveTo(directrixX, 0); ctx.lineTo(directrixX, height); } else { ctx.moveTo(0, directrixY); ctx.lineTo(width, directrixY); } ctx.stroke(); ctx.setLineDash([]); }
      ctx.fillStyle = colors.purple; ctx.beginPath(); ctx.arc(centerX, centerY, 5, 0, Math.PI * 2); ctx.fill();
      infoDiv.innerHTML = `<div><strong>Parabola Properties:</strong></div><div>Parameter (a): ${a} px</div><div>Focus: (${focus.x - centerX}, ${centerY - focus.y})</div><div>Vertex: (0, 0)</div><div>Eccentricity: e = 1</div><div>Latus Rectum: 4a = ${fourA} px</div><div style="color: #34d399; margin-top: 5px;">PF = PM (equidistant)</div>`;
      let eqn = parabolaOrientation === 'Right' ? `y^2 = ${fourA}x` : parabolaOrientation === 'Left' ? `y^2 = -${fourA}x` : parabolaOrientation === 'Up' ? `x^2 = ${fourA}y` : `x^2 = -${fourA}y`;
      equationDiv.innerHTML = `<div style="color: #f59e0b; font-weight: bold; margin-bottom: 5px;">Standard Equation:</div><div style="font-family: monospace; font-size: 14px;">${eqn}</div>`;
      return { focus, directrixX, directrixY, a };
    };

    const drawHyperbola = (colors) => {
      const a = parseFloat(haSlider.value), b = parseFloat(hbSlider.value);
      const c = Math.sqrt(a * a + b * b), e = c / a;
      const isHoriz = hyperbolaOrientation === 'Horizontal';
      if (showAsymptotes) {
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.6)'; ctx.lineWidth = 2; ctx.setLineDash([10, 5]);
        if (isHoriz) { ctx.beginPath(); ctx.moveTo(0, centerY - (b / a) * centerX); ctx.lineTo(width, centerY + (b / a) * (width - centerX)); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, centerY + (b / a) * centerX); ctx.lineTo(width, centerY - (b / a) * (width - centerX)); ctx.stroke(); }
        else { ctx.beginPath(); ctx.moveTo(0, centerY - (a / b) * centerX); ctx.lineTo(width, centerY + (a / b) * (width - centerX)); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, centerY + (a / b) * centerX); ctx.lineTo(width, centerY - (a / b) * (width - centerX)); ctx.stroke(); }
        ctx.setLineDash([]);
      }
      ctx.strokeStyle = colors.orange; ctx.lineWidth = 3;
      if (isHoriz) {
        ctx.beginPath(); for (let t = -1.5; t <= 1.5; t += 0.05) { const x = a / Math.cos(t), y = b * Math.tan(t); if (Math.abs(x) < 250 && Math.abs(y) < 250) { if (t === -1.5) ctx.moveTo(centerX + x, centerY - y); else ctx.lineTo(centerX + x, centerY - y); } } ctx.stroke();
        ctx.beginPath(); for (let t = -1.5; t <= 1.5; t += 0.05) { const x = -a / Math.cos(t), y = b * Math.tan(t); if (Math.abs(x) < 250 && Math.abs(y) < 250) { if (t === -1.5) ctx.moveTo(centerX + x, centerY - y); else ctx.lineTo(centerX + x, centerY - y); } } ctx.stroke();
      } else {
        ctx.beginPath(); for (let t = -1.5; t <= 1.5; t += 0.05) { const y = a / Math.cos(t), x = b * Math.tan(t); if (Math.abs(x) < 250 && Math.abs(y) < 250) { if (t === -1.5) ctx.moveTo(centerX + x, centerY - y); else ctx.lineTo(centerX + x, centerY - y); } } ctx.stroke();
        ctx.beginPath(); for (let t = -1.5; t <= 1.5; t += 0.05) { const y = -a / Math.cos(t), x = b * Math.tan(t); if (Math.abs(x) < 250 && Math.abs(y) < 250) { if (t === -1.5) ctx.moveTo(centerX + x, centerY - y); else ctx.lineTo(centerX + x, centerY - y); } } ctx.stroke();
      }
      let f1, f2;
      if (isHoriz) { f1 = { x: centerX - c, y: centerY }; f2 = { x: centerX + c, y: centerY }; }
      else { f1 = { x: centerX, y: centerY + c }; f2 = { x: centerX, y: centerY - c }; }
      if (showFocus) { ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(f1.x, f1.y, 6, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(f2.x, f2.y, 6, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = colors.text; ctx.font = '11px system-ui'; if (isHoriz) { ctx.fillText(`F1(-${c.toFixed(0)}, 0)`, f1.x - 50, f1.y - 10); ctx.fillText(`F2(${c.toFixed(0)}, 0)`, f2.x + 5, f2.y - 10); } else { ctx.fillText(`F1(0, -${c.toFixed(0)})`, f1.x + 10, f1.y); ctx.fillText(`F2(0, ${c.toFixed(0)})`, f2.x + 10, f2.y); } }
      if (showDirectrix) { const d = a * a / c; ctx.strokeStyle = '#60a5fa'; ctx.lineWidth = 2; ctx.setLineDash([8, 4]); if (isHoriz) { ctx.beginPath(); ctx.moveTo(centerX - d, 0); ctx.lineTo(centerX - d, height); ctx.stroke(); ctx.beginPath(); ctx.moveTo(centerX + d, 0); ctx.lineTo(centerX + d, height); ctx.stroke(); } else { ctx.beginPath(); ctx.moveTo(0, centerY + d); ctx.lineTo(width, centerY + d); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, centerY - d); ctx.lineTo(width, centerY - d); ctx.stroke(); } ctx.setLineDash([]); }
      ctx.fillStyle = colors.purple;
      if (isHoriz) { ctx.beginPath(); ctx.arc(centerX - a, centerY, 5, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(centerX + a, centerY, 5, 0, Math.PI * 2); ctx.fill(); }
      else { ctx.beginPath(); ctx.arc(centerX, centerY - a, 5, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(centerX, centerY + a, 5, 0, Math.PI * 2); ctx.fill(); }
      const lr = (2 * b * b) / a;
      infoDiv.innerHTML = `<div><strong>Hyperbola Properties:</strong></div><div>Semi-transverse (a): ${a} px</div><div>Semi-conjugate (b): ${b} px</div><div>c = sqrt(a^2 + b^2) = ${c.toFixed(1)} px</div><div>Eccentricity: e = ${e.toFixed(3)}</div><div>Latus Rectum: ${lr.toFixed(1)} px</div><div style="color: #34d399; margin-top: 5px;">|PF1 - PF2| = 2a = ${2 * a}</div>`;
      equationDiv.innerHTML = isHoriz ? `<div style="color: #f59e0b; font-weight: bold; margin-bottom: 5px;">Standard Equation:</div><div style="font-family: monospace; font-size: 13px;">x^2/${a * a} - y^2/${b * b} = 1</div><div style="font-size: 11px; color: #a1a1aa; margin-top: 5px;">Asymptotes: y = +/-(${b}/${a})x</div>` : `<div style="color: #f59e0b; font-weight: bold; margin-bottom: 5px;">Standard Equation:</div><div style="font-family: monospace; font-size: 13px;">y^2/${a * a} - x^2/${b * b} = 1</div><div style="font-size: 11px; color: #a1a1aa; margin-top: 5px;">Asymptotes: y = +/-(${a}/${b})x</div>`;
      return { f1, f2, a, b, c, e, isHoriz };
    };

    const drawDragPoint = (colors, conicData) => {
      updateDragPointPosition();
      dragPoint.x = Math.max(10, Math.min(width - 10, dragPoint.x));
      dragPoint.y = Math.max(10, Math.min(height - 10, dragPoint.y));
      ctx.fillStyle = '#34d399'; ctx.beginPath(); ctx.arc(dragPoint.x, dragPoint.y, 8, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(dragPoint.x, dragPoint.y, 8, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = colors.text; ctx.font = 'bold 12px system-ui'; ctx.fillText('P', dragPoint.x + 12, dragPoint.y - 5);
      if (!showDistances) return;
      switch (currentConic) {
        case 'Circle':
          const distR = Math.sqrt((dragPoint.x - centerX) ** 2 + (dragPoint.y - centerY) ** 2);
          ctx.strokeStyle = 'rgba(52, 211, 153, 0.7)'; ctx.lineWidth = 2; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(centerX, centerY); ctx.lineTo(dragPoint.x, dragPoint.y); ctx.stroke(); ctx.setLineDash([]);
          ctx.fillStyle = '#34d399'; ctx.font = '11px system-ui'; ctx.fillText(`r = ${distR.toFixed(1)}`, (centerX + dragPoint.x) / 2 + 5, (centerY + dragPoint.y) / 2 - 5);
          break;
        case 'Ellipse':
          if (conicData && conicData.f1 && conicData.f2) {
            const pf1 = Math.sqrt((dragPoint.x - conicData.f1.x) ** 2 + (dragPoint.y - conicData.f1.y) ** 2);
            const pf2 = Math.sqrt((dragPoint.x - conicData.f2.x) ** 2 + (dragPoint.y - conicData.f2.y) ** 2);
            ctx.strokeStyle = 'rgba(52, 211, 153, 0.7)'; ctx.lineWidth = 2; ctx.setLineDash([4, 4]);
            ctx.beginPath(); ctx.moveTo(conicData.f1.x, conicData.f1.y); ctx.lineTo(dragPoint.x, dragPoint.y); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(conicData.f2.x, conicData.f2.y); ctx.lineTo(dragPoint.x, dragPoint.y); ctx.stroke(); ctx.setLineDash([]);
            ctx.fillStyle = '#34d399'; ctx.font = '11px system-ui';
            ctx.fillText(`PF1 = ${pf1.toFixed(1)}`, (conicData.f1.x + dragPoint.x) / 2 - 20, (conicData.f1.y + dragPoint.y) / 2 - 8);
            ctx.fillText(`PF2 = ${pf2.toFixed(1)}`, (conicData.f2.x + dragPoint.x) / 2 + 5, (conicData.f2.y + dragPoint.y) / 2 - 8);
            ctx.fillStyle = '#fbbf24'; ctx.font = 'bold 12px system-ui'; ctx.fillText(`PF1 + PF2 = ${(pf1 + pf2).toFixed(1)} (2a = ${2 * conicData.a})`, 10, height - 10);
          }
          break;
        case 'Parabola':
          if (conicData && conicData.focus) {
            const pf = Math.sqrt((dragPoint.x - conicData.focus.x) ** 2 + (dragPoint.y - conicData.focus.y) ** 2);
            let pm;
            ctx.strokeStyle = 'rgba(52, 211, 153, 0.7)'; ctx.lineWidth = 2; ctx.setLineDash([4, 4]);
            ctx.beginPath(); ctx.moveTo(conicData.focus.x, conicData.focus.y); ctx.lineTo(dragPoint.x, dragPoint.y); ctx.stroke();
            ctx.strokeStyle = 'rgba(96, 165, 250, 0.7)'; ctx.beginPath();
            if (conicData.directrixX !== undefined) { pm = Math.abs(dragPoint.x - conicData.directrixX); ctx.moveTo(dragPoint.x, dragPoint.y); ctx.lineTo(conicData.directrixX, dragPoint.y); }
            else { pm = Math.abs(dragPoint.y - conicData.directrixY); ctx.moveTo(dragPoint.x, dragPoint.y); ctx.lineTo(dragPoint.x, conicData.directrixY); }
            ctx.stroke(); ctx.setLineDash([]);
            ctx.fillStyle = '#60a5fa'; ctx.beginPath();
            if (conicData.directrixX !== undefined) ctx.arc(conicData.directrixX, dragPoint.y, 4, 0, Math.PI * 2);
            else ctx.arc(dragPoint.x, conicData.directrixY, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#34d399'; ctx.font = '11px system-ui'; ctx.fillText(`PF = ${pf.toFixed(1)}`, (conicData.focus.x + dragPoint.x) / 2 + 5, (conicData.focus.y + dragPoint.y) / 2 - 8);
            ctx.fillStyle = '#60a5fa'; ctx.fillText(`PM = ${pm.toFixed(1)}`, dragPoint.x + 15, dragPoint.y);
            ctx.fillStyle = '#fbbf24'; ctx.font = 'bold 12px system-ui'; ctx.fillText(`PF = ${pf.toFixed(1)}, PM = ${pm.toFixed(1)} (e = 1)`, 10, height - 10);
          }
          break;
        case 'Hyperbola':
          if (conicData && conicData.f1 && conicData.f2) {
            const pf1 = Math.sqrt((dragPoint.x - conicData.f1.x) ** 2 + (dragPoint.y - conicData.f1.y) ** 2);
            const pf2 = Math.sqrt((dragPoint.x - conicData.f2.x) ** 2 + (dragPoint.y - conicData.f2.y) ** 2);
            ctx.strokeStyle = 'rgba(52, 211, 153, 0.7)'; ctx.lineWidth = 2; ctx.setLineDash([4, 4]);
            ctx.beginPath(); ctx.moveTo(conicData.f1.x, conicData.f1.y); ctx.lineTo(dragPoint.x, dragPoint.y); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(conicData.f2.x, conicData.f2.y); ctx.lineTo(dragPoint.x, dragPoint.y); ctx.stroke(); ctx.setLineDash([]);
            ctx.fillStyle = '#34d399'; ctx.font = '11px system-ui';
            ctx.fillText(`PF1 = ${pf1.toFixed(1)}`, (conicData.f1.x + dragPoint.x) / 2 - 20, (conicData.f1.y + dragPoint.y) / 2 - 8);
            ctx.fillText(`PF2 = ${pf2.toFixed(1)}`, (conicData.f2.x + dragPoint.x) / 2 + 5, (conicData.f2.y + dragPoint.y) / 2 - 8);
            ctx.fillStyle = '#fbbf24'; ctx.font = 'bold 12px system-ui'; ctx.fillText(`|PF1 - PF2| = ${Math.abs(pf1 - pf2).toFixed(1)} (2a = ${2 * conicData.a})`, 10, height - 10);
          }
          break;
      }
    };

    const render = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg; ctx.fillRect(0, 0, width, height);
      drawGrid(colors);
      let conicData;
      switch (currentConic) {
        case 'Circle': conicData = drawCircle(colors); break;
        case 'Ellipse': conicData = drawEllipse(colors); break;
        case 'Parabola': conicData = drawParabola(colors); break;
        case 'Hyperbola': conicData = drawHyperbola(colors); break;
      }
      drawDragPoint(colors, conicData);
      ctx.fillStyle = colors.text; ctx.font = 'bold 16px system-ui'; ctx.textAlign = 'center'; ctx.fillText(`${currentConic} Visualization`, width / 2, 25); ctx.textAlign = 'left';
    };

    const getMousePos = (e) => { const rect = canvas.getBoundingClientRect(); return { x: (e.clientX - rect.left) * (width / rect.width), y: (e.clientY - rect.top) * (height / rect.height) }; };
    const isNearDragPoint = (mx, my) => Math.sqrt((mx - dragPoint.x) ** 2 + (my - dragPoint.y) ** 2) < 20;

    canvas.addEventListener('mousedown', (e) => { const pos = getMousePos(e); if (isNearDragPoint(pos.x, pos.y)) { isDragging = true; canvas.style.cursor = 'grabbing'; } });
    canvas.addEventListener('mousemove', (e) => {
      const pos = getMousePos(e);
      if (isDragging) {
        const dx = pos.x - centerX, dy = centerY - pos.y;
        if (currentConic === 'Circle' || currentConic === 'Ellipse') { dragPoint.t = Math.atan2(dy, dx); if (dragPoint.t < 0) dragPoint.t += 2 * Math.PI; }
        else if (currentConic === 'Parabola') { const p = parseFloat(pSlider.value); dragPoint.t = (parabolaOrientation === 'Right' || parabolaOrientation === 'Left') ? ((centerY - pos.y) / p + 4.5) / 3 : ((pos.x - centerX) / p + 4.5) / 3; dragPoint.t = Math.max(0, Math.min(3, dragPoint.t)); }
        else if (currentConic === 'Hyperbola') { dragPoint.t = (Math.atan2(dy, dx) + Math.PI) / 2; dragPoint.t = Math.max(0.1, Math.min(Math.PI - 0.1, dragPoint.t)); }
        render();
      } else canvas.style.cursor = isNearDragPoint(pos.x, pos.y) ? 'grab' : 'default';
    });
    canvas.addEventListener('mouseup', () => { isDragging = false; canvas.style.cursor = 'default'; });
    canvas.addEventListener('mouseleave', () => { isDragging = false; canvas.style.cursor = 'default'; });

    canvas.addEventListener('touchstart', (e) => { const touch = e.touches[0]; const rect = canvas.getBoundingClientRect(); const pos = { x: (touch.clientX - rect.left) * (width / rect.width), y: (touch.clientY - rect.top) * (height / rect.height) }; if (isNearDragPoint(pos.x, pos.y)) { e.preventDefault(); isDragging = true; } }, { passive: false });
    canvas.addEventListener('touchmove', (e) => {
      if (isDragging) {
        e.preventDefault();
        const touch = e.touches[0]; const rect = canvas.getBoundingClientRect();
        const pos = { x: (touch.clientX - rect.left) * (width / rect.width), y: (touch.clientY - rect.top) * (height / rect.height) };
        const dx = pos.x - centerX, dy = centerY - pos.y;
        if (currentConic === 'Circle' || currentConic === 'Ellipse') { dragPoint.t = Math.atan2(dy, dx); if (dragPoint.t < 0) dragPoint.t += 2 * Math.PI; }
        else if (currentConic === 'Parabola') { const p = parseFloat(pSlider.value); dragPoint.t = (parabolaOrientation === 'Right' || parabolaOrientation === 'Left') ? ((centerY - pos.y) / p + 4.5) / 3 : ((pos.x - centerX) / p + 4.5) / 3; dragPoint.t = Math.max(0, Math.min(3, dragPoint.t)); }
        else if (currentConic === 'Hyperbola') { dragPoint.t = (Math.atan2(dy, dx) + Math.PI) / 2; dragPoint.t = Math.max(0.1, Math.min(Math.PI - 0.1, dragPoint.t)); }
        render();
      }
    }, { passive: false });
    canvas.addEventListener('touchend', () => { isDragging = false; });

    [radiusSlider, aSlider, bSlider, pSlider, haSlider, hbSlider].forEach(slider => slider.addEventListener('input', () => render()));

    const handleResize = () => {
      if (window.innerWidth < 800) { mainLayout.style.gridTemplateColumns = '1fr'; canvasArea.style.order = '1'; rightPanel.style.order = '2'; }
      else { mainLayout.style.gridTemplateColumns = '1fr 280px'; canvasArea.style.order = ''; rightPanel.style.order = ''; }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    updateActiveTab(); updateOrientButtons(); updateHOrientButtons(); updateControlsVisibility(); resetDragPoint(); render();
  },

  // ============================================
  // KEPLER'S LAWS AND ORBITAL MOTION VISUALIZATION
  // ============================================
  keplerOrbitalMotion(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container kepler-orbital';

    // Main layout
    const mainLayout = document.createElement('div');
    mainLayout.style.cssText = 'display: grid; grid-template-columns: 1fr 300px; gap: 16px; width: 100%;';
    container.appendChild(mainLayout);

    // Canvas area
    const canvasArea = document.createElement('div');
    canvasArea.style.cssText = 'position: relative; background: #0a0a0f; border-radius: 8px; overflow: hidden;';
    mainLayout.appendChild(canvasArea);

    const { canvas, ctx, width, height } = this.createCanvas(canvasArea, 550, 450);

    // Right panel for controls
    const rightPanel = document.createElement('div');
    rightPanel.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    mainLayout.appendChild(rightPanel);

    // Controls section
    const controlsSection = document.createElement('div');
    controlsSection.style.cssText = 'background: var(--bg-secondary, #18181b); border-radius: 8px; padding: 16px;';
    rightPanel.appendChild(controlsSection);

    const controlsTitle = document.createElement('h4');
    controlsTitle.textContent = 'Orbital Parameters';
    controlsTitle.style.cssText = 'margin: 0 0 12px 0; color: var(--text-primary, #fafafa); font-size: 14px; font-weight: 600;';
    controlsSection.appendChild(controlsTitle);

    const controlsGrid = document.createElement('div');
    controlsGrid.className = 'anim-controls';
    controlsGrid.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
    controlsSection.appendChild(controlsGrid);

    // Sliders
    const aSlider = this.createSlider(controlsGrid, 'Semi-major axis (a)', 60, 180, 120, 5, ' px');
    const eSlider = this.createSlider(controlsGrid, 'Eccentricity (e)', 0, 0.9, 0.5, 0.05, '');
    const speedSlider = this.createSlider(controlsGrid, 'Animation Speed', 0.2, 3, 1, 0.1, 'x');

    // Buttons row
    const buttonsRow = document.createElement('div');
    buttonsRow.style.cssText = 'display: flex; gap: 8px; margin-top: 8px;';
    controlsSection.appendChild(buttonsRow);

    const playBtn = document.createElement('button');
    playBtn.className = 'anim-btn';
    playBtn.textContent = 'Pause';
    playBtn.style.cssText = 'flex: 1; padding: 8px 12px; border-radius: 6px; border: none; background: #3b82f6; color: white; cursor: pointer; font-size: 13px; font-weight: 500;';
    buttonsRow.appendChild(playBtn);

    const resetBtn = document.createElement('button');
    resetBtn.className = 'anim-btn';
    resetBtn.textContent = 'Reset';
    resetBtn.style.cssText = 'flex: 1; padding: 8px 12px; border-radius: 6px; border: none; background: #52525b; color: white; cursor: pointer; font-size: 13px; font-weight: 500;';
    buttonsRow.appendChild(resetBtn);

    // Display toggles section
    const togglesSection = document.createElement('div');
    togglesSection.style.cssText = 'background: var(--bg-secondary, #18181b); border-radius: 8px; padding: 16px;';
    rightPanel.appendChild(togglesSection);

    const togglesTitle = document.createElement('h4');
    togglesTitle.textContent = 'Display Options';
    togglesTitle.style.cssText = 'margin: 0 0 12px 0; color: var(--text-primary, #fafafa); font-size: 14px; font-weight: 600;';
    togglesSection.appendChild(togglesTitle);

    const togglesGrid = document.createElement('div');
    togglesGrid.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
    togglesSection.appendChild(togglesGrid);

    const createToggle = (label, checked = true) => {
      const row = document.createElement('label');
      row.style.cssText = 'display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 13px; color: var(--text-secondary, #a1a1aa);';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = checked;
      checkbox.style.cssText = 'width: 16px; height: 16px; accent-color: #3b82f6;';
      row.appendChild(checkbox);
      row.appendChild(document.createTextNode(label));
      togglesGrid.appendChild(row);
      return checkbox;
    };

    const showOrbitToggle = createToggle('Orbit Path', true);
    const showVelocityToggle = createToggle('Velocity Vector', true);
    const showAreaToggle = createToggle('Area Sweep', true);
    const showMarkersToggle = createToggle('Perihelion/Aphelion', true);
    const showSecondPlanetToggle = createToggle('Second Planet (compare)', false);

    // Preset planets section
    const presetsSection = document.createElement('div');
    presetsSection.style.cssText = 'background: var(--bg-secondary, #18181b); border-radius: 8px; padding: 16px;';
    rightPanel.appendChild(presetsSection);

    const presetsTitle = document.createElement('h4');
    presetsTitle.textContent = 'Planet Presets';
    presetsTitle.style.cssText = 'margin: 0 0 12px 0; color: var(--text-primary, #fafafa); font-size: 14px; font-weight: 600;';
    presetsSection.appendChild(presetsTitle);

    const presetsGrid = document.createElement('div');
    presetsGrid.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 6px;';
    presetsSection.appendChild(presetsGrid);

    // Real planet eccentricities and relative semi-major axes
    const planetPresets = [
      { name: 'Mercury', e: 0.206, aRatio: 0.387, color: '#a1a1aa' },
      { name: 'Venus', e: 0.007, aRatio: 0.723, color: '#fbbf24' },
      { name: 'Earth', e: 0.017, aRatio: 1.0, color: '#60a5fa' },
      { name: 'Mars', e: 0.093, aRatio: 1.524, color: '#f87171' }
    ];

    planetPresets.forEach(planet => {
      const btn = document.createElement('button');
      btn.textContent = planet.name;
      btn.style.cssText = 'padding: 6px 10px; border-radius: 4px; border: 1px solid #3f3f46; background: #27272a; color: #fafafa; cursor: pointer; font-size: 12px; transition: all 0.2s;';
      btn.addEventListener('mouseenter', () => btn.style.background = '#3f3f46');
      btn.addEventListener('mouseleave', () => btn.style.background = '#27272a');
      btn.addEventListener('click', () => {
        eSlider.value = planet.e;
        eSlider.dispatchEvent(new Event('input'));
        const scaledA = 60 + planet.aRatio * 80;
        aSlider.value = Math.min(180, Math.max(60, scaledA));
        aSlider.dispatchEvent(new Event('input'));
      });
      presetsGrid.appendChild(btn);
    });

    // Info display section
    const infoSection = document.createElement('div');
    infoSection.style.cssText = 'background: var(--bg-secondary, #18181b); border-radius: 8px; padding: 16px; flex-grow: 1;';
    rightPanel.appendChild(infoSection);

    const infoTitle = document.createElement('h4');
    infoTitle.textContent = 'Real-time Data';
    infoTitle.style.cssText = 'margin: 0 0 12px 0; color: var(--text-primary, #fafafa); font-size: 14px; font-weight: 600;';
    infoSection.appendChild(infoTitle);

    const infoGrid = document.createElement('div');
    infoGrid.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px;';
    infoSection.appendChild(infoGrid);

    const createInfoItem = (label, id) => {
      const item = document.createElement('div');
      item.style.cssText = 'background: #27272a; padding: 8px; border-radius: 4px;';
      item.innerHTML = `<div style="color: #71717a; margin-bottom: 2px;">${label}</div><div id="${id}" style="color: #fafafa; font-weight: 600; font-family: monospace;">--</div>`;
      infoGrid.appendChild(item);
      return document.getElementById(id) || item.querySelector('div:last-child');
    };

    const radiusDisplay = createInfoItem('Radius (r)', 'kepler-radius');
    const velocityDisplay = createInfoItem('Velocity (v)', 'kepler-velocity');
    const periodDisplay = createInfoItem('Period (T)', 'kepler-period');
    const areaDisplay = createInfoItem('Area Rate', 'kepler-area');

    // Kepler's Law verification
    const lawVerifyDiv = document.createElement('div');
    lawVerifyDiv.style.cssText = 'margin-top: 12px; padding: 10px; background: #1e3a5f; border-radius: 6px; border-left: 3px solid #3b82f6;';
    lawVerifyDiv.innerHTML = `
      <div style="color: #93c5fd; font-size: 11px; margin-bottom: 4px;">Kepler's 3rd Law Verification</div>
      <div id="kepler-law3" style="color: #fafafa; font-size: 13px; font-family: monospace;">T^2/a^3 = --</div>
    `;
    infoSection.appendChild(lawVerifyDiv);

    // Animation state
    const self = this;
    let isPlaying = true;
    let angle = 0;
    let angle2 = Math.PI; // Second planet starts opposite
    let lastTime = performance.now();
    let areaSwept = 0;
    let areaSweptHistory = [];
    const maxAreaHistory = 60;

    // Second planet parameters (relative to first)
    const planet2aRatio = 1.8; // 1.8x the semi-major axis of planet 1

    // Animation loop
    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      const colors = self.getColors();
      const a = parseFloat(aSlider.value);
      const e = parseFloat(eSlider.value);
      const speed = parseFloat(speedSlider.value);
      const showSecondPlanet = showSecondPlanetToggle.checked;

      // Canvas dimensions
      const cx = width / 2;
      const cy = height / 2;

      // Clear canvas with space background
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, width, height);

      // Draw stars
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 50; i++) {
        const sx = (i * 73 + 17) % width;
        const sy = (i * 51 + 29) % height;
        const size = (i % 3 === 0) ? 1.5 : 1;
        ctx.globalAlpha = 0.3 + (i % 5) * 0.1;
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Ellipse parameters
      const b = a * Math.sqrt(1 - e * e); // Semi-minor axis
      const c = a * e; // Distance from center to focus

      // Sun position (at left focus)
      const sunX = cx - c;
      const sunY = cy;

      // Draw orbit path
      if (showOrbitToggle.checked) {
        ctx.strokeStyle = 'rgba(96, 165, 250, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(cx, cy, a, b, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Second planet orbit
        if (showSecondPlanet) {
          const a2 = a * planet2aRatio;
          const b2 = a2 * Math.sqrt(1 - e * e);
          ctx.strokeStyle = 'rgba(251, 191, 36, 0.2)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.ellipse(cx, cy, a2, b2, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Draw perihelion and aphelion markers
      if (showMarkersToggle.checked) {
        const perihelionX = cx - a - c + a;
        const aphelionX = cx + a - c;

        // Perihelion (closest point)
        ctx.fillStyle = '#f87171';
        ctx.beginPath();
        ctx.arc(cx - a, cy, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fafafa';
        ctx.font = '11px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('Perihelion', cx - a, cy + 18);
        ctx.fillText(`r = ${(a * (1 - e)).toFixed(0)}`, cx - a, cy + 30);

        // Aphelion (farthest point)
        ctx.fillStyle = '#60a5fa';
        ctx.beginPath();
        ctx.arc(cx + a, cy, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fafafa';
        ctx.fillText('Aphelion', cx + a, cy + 18);
        ctx.fillText(`r = ${(a * (1 + e)).toFixed(0)}`, cx + a, cy + 30);
      }

      // Calculate planet position using polar form of ellipse
      // r = a(1-e^2) / (1 + e*cos(theta)) where theta is measured from perihelion
      const r = (a * (1 - e * e)) / (1 + e * Math.cos(angle));
      const planetX = sunX + r * Math.cos(angle);
      const planetY = sunY - r * Math.sin(angle);

      // Second planet calculations
      let r2, planet2X, planet2Y;
      if (showSecondPlanet) {
        const a2 = a * planet2aRatio;
        r2 = (a2 * (1 - e * e)) / (1 + e * Math.cos(angle2));
        planet2X = sunX + r2 * Math.cos(angle2);
        planet2Y = sunY - r2 * Math.sin(angle2);
      }

      // Draw area sweep (Kepler's 2nd Law)
      if (showAreaToggle.checked) {
        const sweepAngle = 0.4; // Fixed angular span for visualization
        ctx.fillStyle = 'rgba(168, 85, 247, 0.25)';
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.6)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(sunX, sunY);

        // Draw swept area as a filled sector
        const numSegments = 20;
        for (let i = 0; i <= numSegments; i++) {
          const theta = angle - sweepAngle + (sweepAngle * i / numSegments);
          const rTheta = (a * (1 - e * e)) / (1 + e * Math.cos(theta));
          const px = sunX + rTheta * Math.cos(theta);
          const py = sunY - rTheta * Math.sin(theta);
          ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      // Draw Sun with glow effect
      const sunGradient = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 35);
      sunGradient.addColorStop(0, '#fbbf24');
      sunGradient.addColorStop(0.5, '#f59e0b');
      sunGradient.addColorStop(0.8, 'rgba(251, 191, 36, 0.3)');
      sunGradient.addColorStop(1, 'rgba(251, 191, 36, 0)');
      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(sunX, sunY, 35, 0, Math.PI * 2);
      ctx.fill();

      // Sun core
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(sunX, sunY, 18, 0, Math.PI * 2);
      ctx.fill();

      // Sun label
      ctx.fillStyle = '#fafafa';
      ctx.font = 'bold 12px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Sun', sunX, sunY + 45);
      ctx.font = '10px system-ui';
      ctx.fillStyle = '#a1a1aa';
      ctx.fillText('(Focus)', sunX, sunY + 57);

      // Draw radius vector (line from Sun to planet)
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(sunX, sunY);
      ctx.lineTo(planetX, planetY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw velocity vector
      if (showVelocityToggle.checked) {
        // Velocity is tangent to the ellipse, perpendicular to radius for circular
        // For ellipse: v = sqrt(GM * (2/r - 1/a))
        // Direction is tangent to the orbit

        // Calculate tangent direction (derivative of position)
        const drdtheta = (a * (1 - e * e) * e * Math.sin(angle)) / Math.pow(1 + e * Math.cos(angle), 2);
        const vx = drdtheta * Math.cos(angle) - r * Math.sin(angle);
        const vy = -(drdtheta * Math.sin(angle) + r * Math.cos(angle));

        // Normalize and scale for display
        const vMag = Math.sqrt(vx * vx + vy * vy);
        const vScale = 0.4;
        const vxNorm = (vx / vMag) * r * vScale;
        const vyNorm = (vy / vMag) * r * vScale;

        // Speed is proportional to 1/r for Kepler orbits (approximation for visualization)
        const speedFactor = (a / r) * 40;
        const displayVx = (vx / vMag) * speedFactor;
        const displayVy = (vy / vMag) * speedFactor;

        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(planetX, planetY);
        ctx.lineTo(planetX + displayVx, planetY + displayVy);
        ctx.stroke();

        // Arrow head
        self.drawArrow(ctx, planetX, planetY, planetX + displayVx, planetY + displayVy, '#34d399');
      }

      // Draw planet with glow
      const planetGradient = ctx.createRadialGradient(planetX, planetY, 0, planetX, planetY, 18);
      planetGradient.addColorStop(0, '#60a5fa');
      planetGradient.addColorStop(0.6, '#3b82f6');
      planetGradient.addColorStop(0.9, 'rgba(96, 165, 250, 0.3)');
      planetGradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
      ctx.fillStyle = planetGradient;
      ctx.beginPath();
      ctx.arc(planetX, planetY, 18, 0, Math.PI * 2);
      ctx.fill();

      // Planet core
      ctx.fillStyle = '#60a5fa';
      ctx.beginPath();
      ctx.arc(planetX, planetY, 10, 0, Math.PI * 2);
      ctx.fill();

      // Second planet
      if (showSecondPlanet) {
        // Orange/amber colored second planet
        const planet2Gradient = ctx.createRadialGradient(planet2X, planet2Y, 0, planet2X, planet2Y, 14);
        planet2Gradient.addColorStop(0, '#fbbf24');
        planet2Gradient.addColorStop(0.6, '#f59e0b');
        planet2Gradient.addColorStop(0.9, 'rgba(251, 191, 36, 0.3)');
        planet2Gradient.addColorStop(1, 'rgba(251, 191, 36, 0)');
        ctx.fillStyle = planet2Gradient;
        ctx.beginPath();
        ctx.arc(planet2X, planet2Y, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(planet2X, planet2Y, 7, 0, Math.PI * 2);
        ctx.fill();

        // Radius vector for second planet
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.3)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(sunX, sunY);
        ctx.lineTo(planet2X, planet2Y);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw legend
      ctx.fillStyle = '#fafafa';
      ctx.font = '11px system-ui';
      ctx.textAlign = 'left';
      const legendY = 20;

      ctx.fillStyle = '#60a5fa';
      ctx.fillRect(15, legendY - 8, 12, 12);
      ctx.fillStyle = '#fafafa';
      ctx.fillText('Planet 1', 32, legendY);

      if (showSecondPlanet) {
        ctx.fillStyle = '#fbbf24';
        ctx.fillRect(100, legendY - 8, 12, 12);
        ctx.fillStyle = '#fafafa';
        ctx.fillText('Planet 2', 117, legendY);
      }

      if (showVelocityToggle.checked) {
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(showSecondPlanet ? 190 : 100, legendY - 2);
        ctx.lineTo(showSecondPlanet ? 210 : 120, legendY - 2);
        ctx.stroke();
        ctx.fillStyle = '#fafafa';
        ctx.fillText('Velocity', showSecondPlanet ? 215 : 125, legendY);
      }

      // Update angle based on Kepler's 2nd Law
      // Angular velocity: dtheta/dt = L / (m * r^2) = constant * a^2 * sqrt(1-e^2) / r^2
      // For visualization: omega is proportional to 1/r^2
      if (isPlaying) {
        const baseAngularSpeed = 0.015 * speed;
        // Kepler's 2nd law: equal areas in equal times
        // dA/dt = (1/2) * r^2 * (dtheta/dt) = constant
        // So dtheta/dt proportional to 1/r^2
        const angularSpeed = baseAngularSpeed * Math.pow(a / r, 2);
        angle += angularSpeed;
        if (angle > Math.PI * 2) angle -= Math.PI * 2;

        // Second planet (different period based on a^(3/2))
        if (showSecondPlanet) {
          const a2 = a * planet2aRatio;
          const angularSpeed2 = baseAngularSpeed * Math.pow(a2 / r2, 2) / Math.pow(planet2aRatio, 1.5);
          angle2 += angularSpeed2;
          if (angle2 > Math.PI * 2) angle2 -= Math.PI * 2;
        }

        // Track area swept for display
        const dArea = 0.5 * r * r * angularSpeed;
        areaSweptHistory.push(dArea);
        if (areaSweptHistory.length > maxAreaHistory) areaSweptHistory.shift();
      }

      // Calculate and display real-time data
      const avgArea = areaSweptHistory.length > 0
        ? areaSweptHistory.reduce((sum, val) => sum + val, 0) / areaSweptHistory.length
        : 0;

      // Orbital velocity (vis-viva equation approximation)
      // v = sqrt(GM * (2/r - 1/a)) - simplified for visualization
      const vMagnitude = Math.sqrt(2 / r - 1 / a) * 50; // Arbitrary scaling

      // Period from Kepler's 3rd law: T^2 proportional to a^3
      const T = Math.pow(a / 100, 1.5) * 10; // Arbitrary units

      // Update info displays
      radiusDisplay.textContent = `${r.toFixed(1)} px`;
      velocityDisplay.textContent = `${vMagnitude.toFixed(1)} u`;
      periodDisplay.textContent = `${T.toFixed(2)} s`;
      areaDisplay.textContent = `${(avgArea * 100).toFixed(2)} px^2/s`;

      // Kepler's 3rd Law verification
      const t2a3Ratio = (T * T) / Math.pow(a / 100, 3);
      const law3Display = document.getElementById('kepler-law3');
      if (law3Display) {
        law3Display.innerHTML = `T<sup>2</sup>/a<sup>3</sup> = ${t2a3Ratio.toFixed(2)} (const)`;

        if (showSecondPlanet) {
          const a2 = a * planet2aRatio;
          const T2 = Math.pow(a2 / 100, 1.5) * 10;
          const ratio = (T * T) / (T2 * T2);
          const aRatio = Math.pow(a, 3) / Math.pow(a2, 3);
          law3Display.innerHTML += `<br><span style="font-size: 11px; color: #93c5fd;">T1<sup>2</sup>/T2<sup>2</sup> = ${ratio.toFixed(3)}</span>`;
          law3Display.innerHTML += `<br><span style="font-size: 11px; color: #93c5fd;">a1<sup>3</sup>/a2<sup>3</sup> = ${aRatio.toFixed(3)}</span>`;
        }
      }

      // Draw Kepler's Laws indicators on canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(10, height - 80, 200, 70);
      ctx.strokeStyle = '#3f3f46';
      ctx.lineWidth = 1;
      ctx.strokeRect(10, height - 80, 200, 70);

      ctx.fillStyle = '#fafafa';
      ctx.font = 'bold 11px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText("Kepler's Laws:", 20, height - 63);

      ctx.font = '10px system-ui';
      ctx.fillStyle = '#a1a1aa';
      ctx.fillText('1. Elliptical orbit, Sun at focus', 20, height - 48);
      ctx.fillText('2. Equal areas in equal times', 20, height - 35);
      ctx.fillText('3. T^2 is proportional to a^3', 20, height - 22);

      requestAnimationFrame(animate);
    };

    // Event handlers
    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      playBtn.textContent = isPlaying ? 'Pause' : 'Play';
      playBtn.style.background = isPlaying ? '#3b82f6' : '#22c55e';
    });

    resetBtn.addEventListener('click', () => {
      angle = 0;
      angle2 = Math.PI;
      areaSweptHistory = [];
      aSlider.value = 120;
      aSlider.dispatchEvent(new Event('input'));
      eSlider.value = 0.5;
      eSlider.dispatchEvent(new Event('input'));
      speedSlider.value = 1;
      speedSlider.dispatchEvent(new Event('input'));
    });

    // Responsive layout
    const handleResize = () => {
      if (window.innerWidth < 900) {
        mainLayout.style.gridTemplateColumns = '1fr';
        canvasArea.style.order = '1';
        rightPanel.style.order = '2';
      } else {
        mainLayout.style.gridTemplateColumns = '1fr 300px';
        canvasArea.style.order = '';
        rightPanel.style.order = '';
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Start animation
    animate(performance.now());
  },

  // ============================================
  // RIEMANN SUM VISUALIZER
  // ============================================

  /**
   * Interactive Riemann Sum and Definite Integral Visualizer
   * Demonstrates how Riemann sums approximate definite integrals
   */
  riemannSumVisualizer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const self = this;

    // Create main layout
    const mainLayout = document.createElement('div');
    mainLayout.style.cssText = 'display: grid; grid-template-columns: 1fr 300px; gap: 20px; width: 100%;';
    container.appendChild(mainLayout);

    // Canvas area
    const canvasArea = document.createElement('div');
    canvasArea.style.cssText = 'display: flex; flex-direction: column; gap: 10px;';
    mainLayout.appendChild(canvasArea);

    // Right panel for controls and info
    const rightPanel = document.createElement('div');
    rightPanel.style.cssText = 'display: flex; flex-direction: column; gap: 15px;';
    mainLayout.appendChild(rightPanel);

    const { canvas, ctx, width, height } = this.createCanvas(canvasArea, 550, 400);

    // Available functions with their definitions and exact integrals
    const functions = {
      'x^2': {
        fn: (x) => x * x,
        label: 'f(x) = x^2',
        integral: (a, b) => (b * b * b / 3) - (a * a * a / 3),
        integralLabel: 'x^3/3'
      },
      'x^3': {
        fn: (x) => x * x * x,
        label: 'f(x) = x^3',
        integral: (a, b) => (b * b * b * b / 4) - (a * a * a * a / 4),
        integralLabel: 'x^4/4'
      },
      'sin(x)': {
        fn: (x) => Math.sin(x),
        label: 'f(x) = sin(x)',
        integral: (a, b) => -Math.cos(b) + Math.cos(a),
        integralLabel: '-cos(x)'
      },
      'cos(x)': {
        fn: (x) => Math.cos(x),
        label: 'f(x) = cos(x)',
        integral: (a, b) => Math.sin(b) - Math.sin(a),
        integralLabel: 'sin(x)'
      },
      'e^x': {
        fn: (x) => Math.exp(x),
        label: 'f(x) = e^x',
        integral: (a, b) => Math.exp(b) - Math.exp(a),
        integralLabel: 'e^x'
      },
      '1/x': {
        fn: (x) => x !== 0 ? 1 / x : 0,
        label: 'f(x) = 1/x',
        integral: (a, b) => (a > 0 && b > 0) ? Math.log(b) - Math.log(a) : NaN,
        integralLabel: 'ln|x|'
      },
      'sqrt(x)': {
        fn: (x) => x >= 0 ? Math.sqrt(x) : 0,
        label: 'f(x) = sqrt(x)',
        integral: (a, b) => (a >= 0 && b >= 0) ? (2/3) * (Math.pow(b, 1.5) - Math.pow(a, 1.5)) : NaN,
        integralLabel: '(2/3)x^(3/2)'
      },
      'x': {
        fn: (x) => x,
        label: 'f(x) = x',
        integral: (a, b) => (b * b / 2) - (a * a / 2),
        integralLabel: 'x^2/2'
      },
      '|x|': {
        fn: (x) => Math.abs(x),
        label: 'f(x) = |x|',
        integral: (a, b) => {
          // Integral of |x| depends on sign of a and b
          if (a >= 0) return (b * b / 2) - (a * a / 2);
          if (b <= 0) return (a * a / 2) - (b * b / 2);
          return (a * a / 2) + (b * b / 2); // a < 0 < b
        },
        integralLabel: 'x|x|/2'
      }
    };

    // State
    let currentFunction = 'x^2';
    let lowerBound = 0;
    let upperBound = 2;
    let numRectangles = 10;
    let method = 'left';
    let isAnimating = false;
    let animationId = null;

    // Colors
    const COLORS = {
      function: '#60a5fa',
      positive: 'rgba(52, 211, 153, 0.6)',
      positiveStroke: '#34d399',
      negative: 'rgba(239, 68, 68, 0.6)',
      negativeStroke: '#ef4444',
      trueArea: 'rgba(96, 165, 250, 0.2)',
      grid: '#27272a',
      axis: '#52525b',
      text: '#fafafa',
      textSecondary: '#a1a1aa'
    };

    // Controls section
    const controlsSection = document.createElement('div');
    controlsSection.style.cssText = 'background: var(--bg-secondary, #18181b); border-radius: 12px; padding: 15px; border: 1px solid var(--border-color, #27272a);';
    rightPanel.appendChild(controlsSection);

    const controlsTitle = document.createElement('div');
    controlsTitle.style.cssText = 'font-weight: 600; font-size: 14px; margin-bottom: 12px; color: var(--text-primary, #fafafa);';
    controlsTitle.textContent = 'Controls';
    controlsSection.appendChild(controlsTitle);

    // Function selector
    const funcGroup = document.createElement('div');
    funcGroup.style.cssText = 'margin-bottom: 12px;';
    funcGroup.innerHTML = '<label style="display: block; font-size: 12px; color: var(--text-secondary, #a1a1aa); margin-bottom: 4px;">Function f(x)</label>';
    const funcSelect = document.createElement('select');
    funcSelect.style.cssText = 'width: 100%; padding: 8px 12px; border-radius: 8px; background: var(--bg-primary, #09090b); color: var(--text-primary, #fafafa); border: 1px solid var(--border-color, #27272a); font-size: 14px; cursor: pointer;';
    Object.keys(functions).forEach(key => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = functions[key].label;
      funcSelect.appendChild(option);
    });
    funcGroup.appendChild(funcSelect);
    controlsSection.appendChild(funcGroup);

    // Method selector
    const methodGroup = document.createElement('div');
    methodGroup.style.cssText = 'margin-bottom: 12px;';
    methodGroup.innerHTML = '<label style="display: block; font-size: 12px; color: var(--text-secondary, #a1a1aa); margin-bottom: 4px;">Riemann Sum Method</label>';
    const methodSelect = document.createElement('select');
    methodSelect.style.cssText = 'width: 100%; padding: 8px 12px; border-radius: 8px; background: var(--bg-primary, #09090b); color: var(--text-primary, #fafafa); border: 1px solid var(--border-color, #27272a); font-size: 14px; cursor: pointer;';
    const methods = [
      { value: 'left', label: 'Left Riemann Sum' },
      { value: 'right', label: 'Right Riemann Sum' },
      { value: 'midpoint', label: 'Midpoint Rule' },
      { value: 'trapezoid', label: 'Trapezoidal Rule' }
    ];
    methods.forEach(m => {
      const option = document.createElement('option');
      option.value = m.value;
      option.textContent = m.label;
      methodSelect.appendChild(option);
    });
    methodGroup.appendChild(methodSelect);
    controlsSection.appendChild(methodGroup);

    // Lower bound slider
    const lowerGroup = document.createElement('div');
    lowerGroup.style.cssText = 'margin-bottom: 12px;';
    lowerGroup.innerHTML = '<label style="display: block; font-size: 12px; color: var(--text-secondary, #a1a1aa); margin-bottom: 4px;">Lower Bound (a): <span id="lower-val-' + containerId + '">0</span></label>';
    const lowerSlider = document.createElement('input');
    lowerSlider.type = 'range';
    lowerSlider.min = -5;
    lowerSlider.max = 5;
    lowerSlider.step = 0.1;
    lowerSlider.value = 0;
    lowerSlider.style.cssText = 'width: 100%;';
    lowerGroup.appendChild(lowerSlider);
    controlsSection.appendChild(lowerGroup);

    // Upper bound slider
    const upperGroup = document.createElement('div');
    upperGroup.style.cssText = 'margin-bottom: 12px;';
    upperGroup.innerHTML = '<label style="display: block; font-size: 12px; color: var(--text-secondary, #a1a1aa); margin-bottom: 4px;">Upper Bound (b): <span id="upper-val-' + containerId + '">2</span></label>';
    const upperSlider = document.createElement('input');
    upperSlider.type = 'range';
    upperSlider.min = -5;
    upperSlider.max = 5;
    upperSlider.step = 0.1;
    upperSlider.value = 2;
    upperSlider.style.cssText = 'width: 100%;';
    upperGroup.appendChild(upperSlider);
    controlsSection.appendChild(upperGroup);

    // Number of rectangles slider
    const nGroup = document.createElement('div');
    nGroup.style.cssText = 'margin-bottom: 12px;';
    nGroup.innerHTML = '<label style="display: block; font-size: 12px; color: var(--text-secondary, #a1a1aa); margin-bottom: 4px;">Number of Rectangles (n): <span id="n-val-' + containerId + '">10</span></label>';
    const nSlider = document.createElement('input');
    nSlider.type = 'range';
    nSlider.min = 1;
    nSlider.max = 100;
    nSlider.step = 1;
    nSlider.value = 10;
    nSlider.style.cssText = 'width: 100%;';
    nGroup.appendChild(nSlider);
    controlsSection.appendChild(nGroup);

    // Animate button
    const animateBtn = document.createElement('button');
    animateBtn.style.cssText = 'width: 100%; padding: 10px; border-radius: 8px; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; border: none; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.2s;';
    animateBtn.textContent = 'Watch Convergence';
    animateBtn.onmouseenter = () => animateBtn.style.transform = 'translateY(-1px)';
    animateBtn.onmouseleave = () => animateBtn.style.transform = 'translateY(0)';
    controlsSection.appendChild(animateBtn);

    // Results section
    const resultsSection = document.createElement('div');
    resultsSection.style.cssText = 'background: var(--bg-secondary, #18181b); border-radius: 12px; padding: 15px; border: 1px solid var(--border-color, #27272a);';
    rightPanel.appendChild(resultsSection);

    const resultsTitle = document.createElement('div');
    resultsTitle.style.cssText = 'font-weight: 600; font-size: 14px; margin-bottom: 12px; color: var(--text-primary, #fafafa);';
    resultsTitle.textContent = 'Results';
    resultsSection.appendChild(resultsTitle);

    const resultsContent = document.createElement('div');
    resultsContent.id = 'results-' + containerId;
    resultsContent.style.cssText = 'font-size: 13px; line-height: 1.8;';
    resultsSection.appendChild(resultsContent);

    // Educational info section
    const infoSection = document.createElement('div');
    infoSection.style.cssText = 'background: var(--bg-secondary, #18181b); border-radius: 12px; padding: 15px; border: 1px solid var(--border-color, #27272a); flex: 1;';
    rightPanel.appendChild(infoSection);

    const infoTitle = document.createElement('div');
    infoTitle.style.cssText = 'font-weight: 600; font-size: 14px; margin-bottom: 12px; color: var(--text-primary, #fafafa);';
    infoTitle.textContent = 'Method Explanation';
    infoSection.appendChild(infoTitle);

    const infoContent = document.createElement('div');
    infoContent.id = 'info-' + containerId;
    infoContent.style.cssText = 'font-size: 12px; line-height: 1.6; color: var(--text-secondary, #a1a1aa);';
    infoSection.appendChild(infoContent);

    // Coordinate transformation
    const padding = { left: 50, right: 20, top: 30, bottom: 40 };
    const graphWidth = width - padding.left - padding.right;
    const graphHeight = height - padding.top - padding.bottom;

    // Dynamic scale based on bounds
    const getScale = () => {
      const xMin = Math.min(lowerBound, upperBound) - 1;
      const xMax = Math.max(lowerBound, upperBound) + 1;

      // Sample function to find y range
      const fn = functions[currentFunction].fn;
      let yMin = 0, yMax = 0;
      for (let x = xMin; x <= xMax; x += 0.1) {
        const y = fn(x);
        if (isFinite(y)) {
          yMin = Math.min(yMin, y);
          yMax = Math.max(yMax, y);
        }
      }

      // Add padding to y range
      const yPadding = (yMax - yMin) * 0.2 || 1;
      yMin -= yPadding;
      yMax += yPadding;

      return { xMin, xMax, yMin, yMax };
    };

    const toCanvasX = (x, scale) => {
      return padding.left + ((x - scale.xMin) / (scale.xMax - scale.xMin)) * graphWidth;
    };

    const toCanvasY = (y, scale) => {
      return padding.top + graphHeight - ((y - scale.yMin) / (scale.yMax - scale.yMin)) * graphHeight;
    };

    // Calculate Riemann sum
    const calculateRiemannSum = (a, b, n, sumMethod) => {
      const fn = functions[currentFunction].fn;
      const dx = (b - a) / n;
      let sum = 0;

      for (let i = 0; i < n; i++) {
        let sampleX;
        switch (sumMethod) {
          case 'left':
            sampleX = a + i * dx;
            sum += fn(sampleX) * dx;
            break;
          case 'right':
            sampleX = a + (i + 1) * dx;
            sum += fn(sampleX) * dx;
            break;
          case 'midpoint':
            sampleX = a + (i + 0.5) * dx;
            sum += fn(sampleX) * dx;
            break;
          case 'trapezoid':
            const x1 = a + i * dx;
            const x2 = a + (i + 1) * dx;
            sum += (fn(x1) + fn(x2)) / 2 * dx;
            break;
        }
      }

      return sum;
    };

    // Draw function
    const drawFunction = (scale) => {
      const fn = functions[currentFunction].fn;

      ctx.strokeStyle = COLORS.function;
      ctx.lineWidth = 3;
      ctx.beginPath();

      let started = false;
      for (let px = padding.left; px <= width - padding.right; px++) {
        const x = scale.xMin + ((px - padding.left) / graphWidth) * (scale.xMax - scale.xMin);
        const y = fn(x);

        if (isFinite(y) && y >= scale.yMin && y <= scale.yMax) {
          const cy = toCanvasY(y, scale);
          if (!started) {
            ctx.moveTo(px, cy);
            started = true;
          } else {
            ctx.lineTo(px, cy);
          }
        } else {
          started = false;
        }
      }
      ctx.stroke();
    };

    // Draw rectangles/trapezoids
    const drawRectangles = (scale) => {
      const fn = functions[currentFunction].fn;
      const a = lowerBound;
      const b = upperBound;
      const n = numRectangles;
      const dx = (b - a) / n;

      for (let i = 0; i < n; i++) {
        const x1 = a + i * dx;
        const x2 = a + (i + 1) * dx;

        let h1, h2;

        switch (method) {
          case 'left':
            h1 = h2 = fn(x1);
            break;
          case 'right':
            h1 = h2 = fn(x2);
            break;
          case 'midpoint':
            h1 = h2 = fn((x1 + x2) / 2);
            break;
          case 'trapezoid':
            h1 = fn(x1);
            h2 = fn(x2);
            break;
        }

        if (!isFinite(h1) || !isFinite(h2)) continue;

        const cx1 = toCanvasX(x1, scale);
        const cx2 = toCanvasX(x2, scale);
        const cy0 = toCanvasY(0, scale);
        const cy1 = toCanvasY(h1, scale);
        const cy2 = toCanvasY(h2, scale);

        // Determine if positive or negative area
        const avgH = (h1 + h2) / 2;
        const isPositive = avgH >= 0;

        ctx.fillStyle = isPositive ? COLORS.positive : COLORS.negative;
        ctx.strokeStyle = isPositive ? COLORS.positiveStroke : COLORS.negativeStroke;
        ctx.lineWidth = 1;

        if (method === 'trapezoid') {
          // Draw trapezoid
          ctx.beginPath();
          ctx.moveTo(cx1, cy0);
          ctx.lineTo(cx1, cy1);
          ctx.lineTo(cx2, cy2);
          ctx.lineTo(cx2, cy0);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else {
          // Draw rectangle
          ctx.beginPath();
          ctx.moveTo(cx1, cy0);
          ctx.lineTo(cx1, cy1);
          ctx.lineTo(cx2, cy1);
          ctx.lineTo(cx2, cy0);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Draw sample point
          let sampleX;
          switch (method) {
            case 'left': sampleX = x1; break;
            case 'right': sampleX = x2; break;
            case 'midpoint': sampleX = (x1 + x2) / 2; break;
          }

          ctx.fillStyle = '#fbbf24';
          ctx.beginPath();
          ctx.arc(toCanvasX(sampleX, scale), toCanvasY(fn(sampleX), scale), 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    // Draw grid and axes
    const drawGrid = (scale) => {
      const colors = self.getColors();

      // Grid
      ctx.strokeStyle = COLORS.grid;
      ctx.lineWidth = 1;

      // Vertical grid lines
      const xStep = Math.pow(10, Math.floor(Math.log10(scale.xMax - scale.xMin))) / 2;
      for (let x = Math.ceil(scale.xMin / xStep) * xStep; x <= scale.xMax; x += xStep) {
        const cx = toCanvasX(x, scale);
        ctx.beginPath();
        ctx.moveTo(cx, padding.top);
        ctx.lineTo(cx, height - padding.bottom);
        ctx.stroke();
      }

      // Horizontal grid lines
      const yStep = Math.pow(10, Math.floor(Math.log10(scale.yMax - scale.yMin))) / 2;
      for (let y = Math.ceil(scale.yMin / yStep) * yStep; y <= scale.yMax; y += yStep) {
        const cy = toCanvasY(y, scale);
        ctx.beginPath();
        ctx.moveTo(padding.left, cy);
        ctx.lineTo(width - padding.right, cy);
        ctx.stroke();
      }

      // Axes
      ctx.strokeStyle = COLORS.axis;
      ctx.lineWidth = 2;

      // X-axis
      if (scale.yMin <= 0 && scale.yMax >= 0) {
        const cy = toCanvasY(0, scale);
        ctx.beginPath();
        ctx.moveTo(padding.left, cy);
        ctx.lineTo(width - padding.right, cy);
        ctx.stroke();
      }

      // Y-axis
      if (scale.xMin <= 0 && scale.xMax >= 0) {
        const cx = toCanvasX(0, scale);
        ctx.beginPath();
        ctx.moveTo(cx, padding.top);
        ctx.lineTo(cx, height - padding.bottom);
        ctx.stroke();
      }

      // Axis labels
      ctx.fillStyle = COLORS.textSecondary;
      ctx.font = '11px system-ui';
      ctx.textAlign = 'center';

      // X-axis labels
      for (let x = Math.ceil(scale.xMin / xStep) * xStep; x <= scale.xMax; x += xStep) {
        const cx = toCanvasX(x, scale);
        ctx.fillText(x.toFixed(1), cx, height - padding.bottom + 15);
      }

      // Y-axis labels
      ctx.textAlign = 'right';
      for (let y = Math.ceil(scale.yMin / yStep) * yStep; y <= scale.yMax; y += yStep) {
        const cy = toCanvasY(y, scale);
        ctx.fillText(y.toFixed(1), padding.left - 5, cy + 4);
      }

      // Mark bounds a and b on x-axis
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 12px system-ui';
      ctx.textAlign = 'center';

      const cxa = toCanvasX(lowerBound, scale);
      const cxb = toCanvasX(upperBound, scale);

      // Draw vertical lines at bounds
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);

      ctx.beginPath();
      ctx.moveTo(cxa, padding.top);
      ctx.lineTo(cxa, height - padding.bottom);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(cxb, padding.top);
      ctx.lineTo(cxb, height - padding.bottom);
      ctx.stroke();

      ctx.setLineDash([]);

      // Labels for a and b
      ctx.fillText('a=' + lowerBound.toFixed(1), cxa, height - 5);
      ctx.fillText('b=' + upperBound.toFixed(1), cxb, height - 5);
    };

    // Update results display
    const updateResults = () => {
      const fn = functions[currentFunction];
      const exactValue = fn.integral(lowerBound, upperBound);
      const riemannSum = calculateRiemannSum(lowerBound, upperBound, numRectangles, method);
      const error = Math.abs(riemannSum - exactValue);
      const errorPercent = Math.abs(exactValue) > 0.0001 ? (error / Math.abs(exactValue)) * 100 : 0;

      const resultsEl = document.getElementById('results-' + containerId);
      if (resultsEl) {
        resultsEl.innerHTML = `
          <div style="margin-bottom: 8px; padding: 8px; background: rgba(96, 165, 250, 0.1); border-radius: 6px; border-left: 3px solid #60a5fa;">
            <div style="color: #a1a1aa; font-size: 11px;">Integral Formula</div>
            <div style="color: #60a5fa; font-family: 'JetBrains Mono', monospace;">int[${lowerBound.toFixed(1)}, ${upperBound.toFixed(1)}] ${fn.label.replace('f(x) = ', '')} dx</div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div style="padding: 8px; background: rgba(52, 211, 153, 0.1); border-radius: 6px;">
              <div style="color: #a1a1aa; font-size: 10px;">Riemann Sum</div>
              <div style="color: #34d399; font-size: 16px; font-weight: 600;">${isFinite(riemannSum) ? riemannSum.toFixed(4) : 'N/A'}</div>
            </div>
            <div style="padding: 8px; background: rgba(96, 165, 250, 0.1); border-radius: 6px;">
              <div style="color: #a1a1aa; font-size: 10px;">Exact Integral</div>
              <div style="color: #60a5fa; font-size: 16px; font-weight: 600;">${isFinite(exactValue) ? exactValue.toFixed(4) : 'N/A'}</div>
            </div>
          </div>
          <div style="margin-top: 8px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div style="padding: 8px; background: rgba(239, 68, 68, 0.1); border-radius: 6px;">
              <div style="color: #a1a1aa; font-size: 10px;">Absolute Error</div>
              <div style="color: #ef4444; font-size: 14px; font-weight: 600;">${isFinite(error) ? error.toFixed(6) : 'N/A'}</div>
            </div>
            <div style="padding: 8px; background: rgba(251, 191, 36, 0.1); border-radius: 6px;">
              <div style="color: #a1a1aa; font-size: 10px;">Error %</div>
              <div style="color: #fbbf24; font-size: 14px; font-weight: 600;">${isFinite(errorPercent) ? errorPercent.toFixed(2) + '%' : 'N/A'}</div>
            </div>
          </div>
          <div style="margin-top: 8px; padding: 6px; background: rgba(168, 85, 247, 0.1); border-radius: 6px; text-align: center;">
            <span style="color: #a1a1aa; font-size: 10px;">Antiderivative: </span>
            <span style="color: #a855f7; font-family: 'JetBrains Mono', monospace; font-size: 12px;">[${fn.integralLabel}]</span>
          </div>
        `;
      }
    };

    // Update method explanation
    const updateMethodInfo = () => {
      const infoEl = document.getElementById('info-' + containerId);
      if (!infoEl) return;

      const explanations = {
        'left': {
          title: 'Left Riemann Sum',
          desc: 'Uses the left endpoint of each subinterval to determine rectangle height.',
          formula: 'Sum = sum(f(x_i) * dx) for i = 0 to n-1',
          note: 'For increasing functions: UNDERESTIMATES the integral. For decreasing functions: OVERESTIMATES.'
        },
        'right': {
          title: 'Right Riemann Sum',
          desc: 'Uses the right endpoint of each subinterval to determine rectangle height.',
          formula: 'Sum = sum(f(x_i) * dx) for i = 1 to n',
          note: 'For increasing functions: OVERESTIMATES the integral. For decreasing functions: UNDERESTIMATES.'
        },
        'midpoint': {
          title: 'Midpoint Rule',
          desc: 'Uses the midpoint of each subinterval to determine rectangle height.',
          formula: 'Sum = sum(f((x_i + x_{i+1})/2) * dx)',
          note: 'Generally MORE ACCURATE than left/right sums. Error is O(1/n^2) vs O(1/n) for endpoints.'
        },
        'trapezoid': {
          title: 'Trapezoidal Rule',
          desc: 'Uses trapezoids instead of rectangles, averaging left and right heights.',
          formula: 'Sum = sum((f(x_i) + f(x_{i+1}))/2 * dx)',
          note: 'Equivalent accuracy to midpoint rule. Better for linear functions.'
        }
      };

      const info = explanations[method];
      infoEl.innerHTML = `
        <div style="font-weight: 500; color: #60a5fa; margin-bottom: 6px;">${info.title}</div>
        <p style="margin-bottom: 8px;">${info.desc}</p>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; background: rgba(0,0,0,0.3); padding: 6px; border-radius: 4px; margin-bottom: 8px;">
          ${info.formula}
        </div>
        <div style="padding: 8px; background: rgba(251, 191, 36, 0.1); border-radius: 6px; border-left: 2px solid #fbbf24; font-size: 11px;">
          <strong style="color: #fbbf24;">JEE Tip:</strong> ${info.note}
        </div>
      `;
    };

    // Main render function
    const render = () => {
      const colors = self.getColors();
      const scale = getScale();

      // Clear canvas
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw grid and axes first
      drawGrid(scale);

      // Draw rectangles/trapezoids
      drawRectangles(scale);

      // Draw function curve on top
      drawFunction(scale);

      // Title
      ctx.fillStyle = COLORS.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(`Riemann Sum Visualization: ${functions[currentFunction].label}`, width / 2, 20);
      ctx.textAlign = 'left';

      // Update results
      updateResults();
      updateMethodInfo();
    };

    // Animation function
    const animateConvergence = () => {
      if (isAnimating) {
        clearTimeout(animationId);
        isAnimating = false;
        animateBtn.textContent = 'Watch Convergence';
        animateBtn.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
        return;
      }

      isAnimating = true;
      animateBtn.textContent = 'Stop Animation';
      animateBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';

      let n = 1;
      const animate = () => {
        if (!isAnimating) return;

        numRectangles = n;
        nSlider.value = n;
        document.getElementById('n-val-' + containerId).textContent = n;
        render();

        n++;
        if (n <= 100) {
          // Slow down animation as n increases for better viewing
          const delay = n < 20 ? 150 : n < 50 ? 100 : 50;
          animationId = setTimeout(animate, delay);
        } else {
          isAnimating = false;
          animateBtn.textContent = 'Watch Convergence';
          animateBtn.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
        }
      };

      animate();
    };

    // Event listeners
    funcSelect.addEventListener('change', () => {
      currentFunction = funcSelect.value;
      render();
    });

    methodSelect.addEventListener('change', () => {
      method = methodSelect.value;
      render();
    });

    lowerSlider.addEventListener('input', () => {
      lowerBound = parseFloat(lowerSlider.value);
      document.getElementById('lower-val-' + containerId).textContent = lowerBound.toFixed(1);
      render();
    });

    upperSlider.addEventListener('input', () => {
      upperBound = parseFloat(upperSlider.value);
      document.getElementById('upper-val-' + containerId).textContent = upperBound.toFixed(1);
      render();
    });

    nSlider.addEventListener('input', () => {
      numRectangles = parseInt(nSlider.value);
      document.getElementById('n-val-' + containerId).textContent = numRectangles;
      render();
    });

    animateBtn.addEventListener('click', animateConvergence);

    // Responsive handling
    const handleResize = () => {
      if (window.innerWidth < 800) {
        mainLayout.style.gridTemplateColumns = '1fr';
        canvasArea.style.order = '1';
        rightPanel.style.order = '2';
      } else {
        mainLayout.style.gridTemplateColumns = '1fr 300px';
        canvasArea.style.order = '';
        rightPanel.style.order = '';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Initial render
    render();
  },

  // Gibbs Energy and Spontaneity Calculator
  gibbsEnergyCalculator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';
    container.style.cssText = 'padding: 16px; background: var(--bg-secondary, #18181b); border-radius: 12px;';

    const self = this;

    // Main layout with two columns
    const mainLayout = document.createElement('div');
    mainLayout.style.cssText = 'display: grid; grid-template-columns: 1fr 320px; gap: 16px;';
    container.appendChild(mainLayout);

    // Left panel: Canvas and graphs
    const leftPanel = document.createElement('div');
    leftPanel.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    mainLayout.appendChild(leftPanel);

    // Right panel: Controls and results
    const rightPanel = document.createElement('div');
    rightPanel.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    mainLayout.appendChild(rightPanel);

    // Create main canvas for bar chart
    const canvasWrapper = document.createElement('div');
    canvasWrapper.style.cssText = 'background: var(--bg-primary, #09090b); border-radius: 8px; padding: 8px;';
    leftPanel.appendChild(canvasWrapper);

    const { canvas, ctx, width, height } = this.createCanvas(canvasWrapper, 460, 280);

    // Create secondary canvas for temperature graph
    const graphWrapper = document.createElement('div');
    graphWrapper.style.cssText = 'background: var(--bg-primary, #09090b); border-radius: 8px; padding: 8px;';
    leftPanel.appendChild(graphWrapper);

    const graph2 = this.createCanvas(graphWrapper, 460, 200);
    const ctx2 = graph2.ctx;
    const width2 = 460;
    const height2 = 200;

    // Controls section
    const controls = document.createElement('div');
    controls.style.cssText = 'display: flex; flex-direction: column; gap: 10px; background: var(--bg-primary, #09090b); border-radius: 8px; padding: 12px;';
    rightPanel.appendChild(controls);

    // Title
    const title = document.createElement('div');
    title.style.cssText = 'font-size: 14px; font-weight: 600; color: var(--text-primary, #fafafa); text-align: center; padding-bottom: 8px; border-bottom: 1px solid var(--border-primary, #27272a);';
    title.innerHTML = 'Gibbs Energy Calculator<br><span style="font-size: 12px; font-weight: 400; color: #34d399;">DeltaG = DeltaH - T*DeltaS</span>';
    controls.appendChild(title);

    // Preset reactions dropdown
    const presetLabel = document.createElement('label');
    presetLabel.textContent = 'Preset Reactions:';
    presetLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa); margin-top: 4px;';
    controls.appendChild(presetLabel);

    const presetSelect = document.createElement('select');
    presetSelect.style.cssText = 'padding: 8px 12px; background: var(--bg-secondary, #18181b); color: var(--text-primary, #fafafa); border: 1px solid var(--border-primary, #27272a); border-radius: 6px; font-size: 13px; cursor: pointer; width: 100%;';

    const presets = [
      { name: '-- Custom Values --', deltaH: 0, deltaS: 0 },
      { name: 'Ice melting (0C)', deltaH: 6, deltaS: 22 },
      { name: 'Water freezing (0C)', deltaH: -6, deltaS: -22 },
      { name: 'Combustion of CH4', deltaH: -890, deltaS: -242 },
      { name: 'Photosynthesis', deltaH: 2800, deltaS: -259 },
      { name: 'NH4NO3 dissolution', deltaH: 25, deltaS: 109 },
      { name: 'CaCO3 decomposition', deltaH: 178, deltaS: 160 },
      { name: 'Haber process (N2+3H2)', deltaH: -92, deltaS: -199 },
      { name: 'Rusting of iron', deltaH: -824, deltaS: -270 }
    ];

    presets.forEach((preset, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = preset.name;
      presetSelect.appendChild(option);
    });
    controls.appendChild(presetSelect);

    // Separator
    const sep1 = document.createElement('div');
    sep1.style.cssText = 'height: 1px; background: var(--border-primary, #27272a); margin: 4px 0;';
    controls.appendChild(sep1);

    // Sliders
    const deltaHSlider = this.createSlider(controls, 'DeltaH (Enthalpy)', -500, 500, 0, 10, ' kJ/mol');
    const deltaSSlider = this.createSlider(controls, 'DeltaS (Entropy)', -500, 500, 0, 10, ' J/(mol*K)');
    const tempSlider = this.createSlider(controls, 'Temperature', 200, 800, 298, 1, ' K');

    // Calculate button
    const calcBtn = document.createElement('button');
    calcBtn.textContent = 'Calculate DeltaG';
    calcBtn.style.cssText = 'padding: 10px 16px; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; border: none; border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;';
    calcBtn.addEventListener('mouseover', () => { calcBtn.style.transform = 'scale(1.02)'; });
    calcBtn.addEventListener('mouseout', () => { calcBtn.style.transform = 'scale(1)'; });
    controls.appendChild(calcBtn);

    // Results panel
    const resultsPanel = document.createElement('div');
    resultsPanel.style.cssText = 'background: var(--bg-primary, #09090b); border-radius: 8px; padding: 12px; flex-grow: 1;';
    rightPanel.appendChild(resultsPanel);

    // State
    let deltaH = 0;
    let deltaS = 0;
    let temperature = 298;

    // Colors
    const COLORS = {
      spontaneous: '#34d399',
      nonSpontaneous: '#ef4444',
      equilibrium: '#f59e0b',
      enthalpy: '#60a5fa',
      entropy: '#a855f7',
      gibbs: '#fbbf24',
      text: '#fafafa',
      textSecondary: '#a1a1aa',
      grid: '#27272a',
      axis: '#3f3f46',
      bg: '#09090b'
    };

    // Calculate Gibbs energy
    const calculateDeltaG = (dH, dS, T) => {
      // dH in kJ/mol, dS in J/(mol*K), T in K
      // Convert dS from J to kJ: divide by 1000
      return dH - (T * dS / 1000);
    };

    // Get spontaneity verdict
    const getVerdict = (deltaG) => {
      if (Math.abs(deltaG) < 0.1) return { text: 'At Equilibrium', color: COLORS.equilibrium };
      if (deltaG < 0) return { text: 'Spontaneous', color: COLORS.spontaneous };
      return { text: 'Non-spontaneous', color: COLORS.nonSpontaneous };
    };

    // Get case description
    const getCaseDescription = (dH, dS) => {
      if (dH < 0 && dS > 0) return { case: 'Case 1', desc: 'Always spontaneous at all T', color: COLORS.spontaneous };
      if (dH > 0 && dS < 0) return { case: 'Case 2', desc: 'Never spontaneous at any T', color: COLORS.nonSpontaneous };
      if (dH < 0 && dS < 0) return { case: 'Case 3', desc: 'Spontaneous at LOW temperatures', color: COLORS.enthalpy };
      if (dH > 0 && dS > 0) return { case: 'Case 4', desc: 'Spontaneous at HIGH temperatures', color: COLORS.entropy };
      return { case: 'Edge', desc: 'Special case', color: COLORS.equilibrium };
    };

    // Draw bar chart
    const drawBarChart = () => {
      const colors = self.getColors();

      ctx.fillStyle = COLORS.bg;
      ctx.fillRect(0, 0, width, height);

      const deltaG = calculateDeltaG(deltaH, deltaS, temperature);
      const TdeltaS = temperature * deltaS / 1000; // in kJ/mol
      const verdict = getVerdict(deltaG);

      // Title
      ctx.fillStyle = COLORS.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Energy Components Bar Chart', width / 2, 22);

      // Chart area
      const chartLeft = 80;
      const chartRight = width - 40;
      const chartTop = 50;
      const chartBottom = height - 50;
      const chartHeight = chartBottom - chartTop;
      const chartWidth = chartRight - chartLeft;

      // Find max absolute value for scaling
      const maxVal = Math.max(Math.abs(deltaH), Math.abs(TdeltaS), Math.abs(deltaG), 100);
      const scale = (chartHeight / 2) / maxVal;

      // Zero line
      const zeroY = chartTop + chartHeight / 2;

      // Draw grid lines
      ctx.strokeStyle = COLORS.grid;
      ctx.lineWidth = 1;
      for (let i = -4; i <= 4; i++) {
        const y = zeroY - (i * maxVal / 4) * scale;
        ctx.beginPath();
        ctx.moveTo(chartLeft, y);
        ctx.lineTo(chartRight, y);
        ctx.stroke();

        // Labels
        ctx.fillStyle = COLORS.textSecondary;
        ctx.font = '10px system-ui';
        ctx.textAlign = 'right';
        ctx.fillText((i * maxVal / 4).toFixed(0), chartLeft - 5, y + 3);
      }

      // Y-axis label
      ctx.save();
      ctx.translate(15, height / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillStyle = COLORS.textSecondary;
      ctx.font = '11px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Energy (kJ/mol)', 0, 0);
      ctx.restore();

      // Zero line (darker)
      ctx.strokeStyle = COLORS.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(chartLeft, zeroY);
      ctx.lineTo(chartRight, zeroY);
      ctx.stroke();

      // Bar dimensions
      const barWidth = 60;
      const gap = (chartWidth - 3 * barWidth) / 4;

      // Draw bars
      const bars = [
        { label: 'DeltaH', value: deltaH, color: COLORS.enthalpy, x: chartLeft + gap },
        { label: '-T*DeltaS', value: -TdeltaS, color: COLORS.entropy, x: chartLeft + 2 * gap + barWidth },
        { label: 'DeltaG', value: deltaG, color: verdict.color, x: chartLeft + 3 * gap + 2 * barWidth }
      ];

      bars.forEach(bar => {
        const barHeight = Math.abs(bar.value) * scale;
        const barY = bar.value >= 0 ? zeroY - barHeight : zeroY;

        // Draw bar
        ctx.fillStyle = bar.color;
        ctx.fillRect(bar.x, barY, barWidth, barHeight);

        // Bar border
        ctx.strokeStyle = bar.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(bar.x, barY, barWidth, barHeight);

        // Value label
        ctx.fillStyle = COLORS.text;
        ctx.font = 'bold 12px system-ui';
        ctx.textAlign = 'center';
        const valueY = bar.value >= 0 ? barY - 8 : barY + barHeight + 15;
        ctx.fillText(bar.value.toFixed(1), bar.x + barWidth / 2, valueY);

        // Bar label
        ctx.fillStyle = COLORS.textSecondary;
        ctx.font = '12px system-ui';
        ctx.fillText(bar.label, bar.x + barWidth / 2, chartBottom + 18);
      });

      // Draw spontaneity arrow and label
      const arrowX = bars[2].x + barWidth + 15;
      const arrowStartY = zeroY;
      const arrowEndY = deltaG >= 0 ? zeroY - 30 : zeroY + 30;

      ctx.strokeStyle = verdict.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(arrowX, arrowStartY);
      ctx.lineTo(arrowX, arrowEndY);
      ctx.stroke();

      // Arrow head
      ctx.fillStyle = verdict.color;
      ctx.beginPath();
      if (deltaG >= 0) {
        ctx.moveTo(arrowX, arrowEndY);
        ctx.lineTo(arrowX - 6, arrowEndY + 10);
        ctx.lineTo(arrowX + 6, arrowEndY + 10);
      } else {
        ctx.moveTo(arrowX, arrowEndY);
        ctx.lineTo(arrowX - 6, arrowEndY - 10);
        ctx.lineTo(arrowX + 6, arrowEndY - 10);
      }
      ctx.closePath();
      ctx.fill();

      // Verdict text
      ctx.save();
      ctx.translate(arrowX + 15, height / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillStyle = verdict.color;
      ctx.font = 'bold 12px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(verdict.text, 0, 0);
      ctx.restore();

      // Formula at top
      ctx.fillStyle = COLORS.gibbs;
      ctx.font = '13px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(`DeltaG = ${deltaH.toFixed(1)} - (${temperature} * ${deltaS.toFixed(1)}/1000) = ${deltaG.toFixed(1)} kJ/mol`, width / 2, 40);
    };

    // Draw temperature dependence graph
    const drawTempGraph = () => {
      ctx2.fillStyle = COLORS.bg;
      ctx2.fillRect(0, 0, width2, height2);

      const caseInfo = getCaseDescription(deltaH, deltaS);

      // Title
      ctx2.fillStyle = COLORS.text;
      ctx2.font = 'bold 13px system-ui';
      ctx2.textAlign = 'center';
      ctx2.fillText('DeltaG vs Temperature', width2 / 2, 18);

      // Chart area
      const chartLeft = 60;
      const chartRight = width2 - 30;
      const chartTop = 35;
      const chartBottom = height2 - 35;
      const chartWidth = chartRight - chartLeft;
      const chartHeight = chartBottom - chartTop;

      // Temperature range: 100K to 1000K
      const Tmin = 100;
      const Tmax = 1000;

      // Calculate deltaG values at extremes for scaling
      const deltaG_min = calculateDeltaG(deltaH, deltaS, Tmin);
      const deltaG_max = calculateDeltaG(deltaH, deltaS, Tmax);
      const absMax = Math.max(Math.abs(deltaG_min), Math.abs(deltaG_max), 50);

      const scaleT = chartWidth / (Tmax - Tmin);
      const scaleG = (chartHeight / 2) / absMax;
      const zeroY = chartTop + chartHeight / 2;

      // Draw grid
      ctx2.strokeStyle = COLORS.grid;
      ctx2.lineWidth = 1;

      // Horizontal grid lines
      for (let i = -2; i <= 2; i++) {
        const y = zeroY - (i * absMax / 2) * scaleG;
        ctx2.beginPath();
        ctx2.moveTo(chartLeft, y);
        ctx2.lineTo(chartRight, y);
        ctx2.stroke();

        ctx2.fillStyle = COLORS.textSecondary;
        ctx2.font = '9px system-ui';
        ctx2.textAlign = 'right';
        ctx2.fillText((i * absMax / 2).toFixed(0), chartLeft - 3, y + 3);
      }

      // Vertical grid lines (temperature)
      for (let T = 200; T <= 1000; T += 200) {
        const x = chartLeft + (T - Tmin) * scaleT;
        ctx2.beginPath();
        ctx2.moveTo(x, chartTop);
        ctx2.lineTo(x, chartBottom);
        ctx2.stroke();

        ctx2.fillStyle = COLORS.textSecondary;
        ctx2.font = '9px system-ui';
        ctx2.textAlign = 'center';
        ctx2.fillText(T + 'K', x, chartBottom + 12);
      }

      // Zero line
      ctx2.strokeStyle = COLORS.axis;
      ctx2.lineWidth = 2;
      ctx2.beginPath();
      ctx2.moveTo(chartLeft, zeroY);
      ctx2.lineTo(chartRight, zeroY);
      ctx2.stroke();

      // Calculate equilibrium temperature
      let Teq = null;
      if (deltaS !== 0 && ((deltaH > 0 && deltaS > 0) || (deltaH < 0 && deltaS < 0))) {
        Teq = (deltaH * 1000) / deltaS; // Convert deltaH to J for matching units
      }

      // Shade spontaneous region (where deltaG < 0)
      ctx2.fillStyle = COLORS.spontaneous + '20';
      ctx2.beginPath();

      if (caseInfo.case === 'Case 1') {
        // Always spontaneous - shade entire region below zero
        ctx2.rect(chartLeft, zeroY, chartWidth, chartHeight / 2);
        ctx2.fill();
      } else if (caseInfo.case === 'Case 2') {
        // Never spontaneous - shade nothing (or shade non-spontaneous region in red)
        ctx2.fillStyle = COLORS.nonSpontaneous + '15';
        ctx2.rect(chartLeft, chartTop, chartWidth, chartHeight / 2);
        ctx2.fill();
      } else if (Teq !== null && Teq > Tmin && Teq < Tmax) {
        const xTeq = chartLeft + (Teq - Tmin) * scaleT;

        if (deltaS > 0) {
          // Case 4: Spontaneous at high T (right of Teq)
          ctx2.beginPath();
          ctx2.moveTo(xTeq, zeroY);
          for (let T = Teq; T <= Tmax; T += 10) {
            const x = chartLeft + (T - Tmin) * scaleT;
            const dG = calculateDeltaG(deltaH, deltaS, T);
            const y = zeroY - dG * scaleG;
            ctx2.lineTo(x, Math.max(y, zeroY));
          }
          ctx2.lineTo(chartRight, zeroY);
          ctx2.closePath();
          ctx2.fill();
        } else {
          // Case 3: Spontaneous at low T (left of Teq)
          ctx2.beginPath();
          ctx2.moveTo(chartLeft, zeroY);
          for (let T = Tmin; T <= Teq; T += 10) {
            const x = chartLeft + (T - Tmin) * scaleT;
            const dG = calculateDeltaG(deltaH, deltaS, T);
            const y = zeroY - dG * scaleG;
            ctx2.lineTo(x, Math.min(y, zeroY));
          }
          ctx2.lineTo(chartLeft + (Teq - Tmin) * scaleT, zeroY);
          ctx2.closePath();
          ctx2.fill();
        }
      }

      // Draw DeltaG vs T line
      ctx2.strokeStyle = COLORS.gibbs;
      ctx2.lineWidth = 2;
      ctx2.beginPath();
      let firstPoint = true;
      for (let T = Tmin; T <= Tmax; T += 5) {
        const x = chartLeft + (T - Tmin) * scaleT;
        const dG = calculateDeltaG(deltaH, deltaS, T);
        const y = zeroY - dG * scaleG;

        // Clamp y to chart bounds
        const clampedY = Math.max(chartTop, Math.min(chartBottom, y));

        if (firstPoint) {
          ctx2.moveTo(x, clampedY);
          firstPoint = false;
        } else {
          ctx2.lineTo(x, clampedY);
        }
      }
      ctx2.stroke();

      // Mark equilibrium temperature
      if (Teq !== null && Teq > Tmin && Teq < Tmax) {
        const xTeq = chartLeft + (Teq - Tmin) * scaleT;

        // Vertical dashed line at Teq
        ctx2.strokeStyle = COLORS.equilibrium;
        ctx2.lineWidth = 2;
        ctx2.setLineDash([5, 5]);
        ctx2.beginPath();
        ctx2.moveTo(xTeq, chartTop);
        ctx2.lineTo(xTeq, chartBottom);
        ctx2.stroke();
        ctx2.setLineDash([]);

        // Label
        ctx2.fillStyle = COLORS.equilibrium;
        ctx2.font = 'bold 10px system-ui';
        ctx2.textAlign = 'center';
        ctx2.fillText('T_eq=' + Teq.toFixed(0) + 'K', xTeq, chartTop - 5);

        // Circle at intersection
        ctx2.fillStyle = COLORS.equilibrium;
        ctx2.beginPath();
        ctx2.arc(xTeq, zeroY, 5, 0, Math.PI * 2);
        ctx2.fill();
      }

      // Mark current temperature
      const xCurrent = chartLeft + (temperature - Tmin) * scaleT;
      const deltaG_current = calculateDeltaG(deltaH, deltaS, temperature);
      const yCurrent = zeroY - deltaG_current * scaleG;
      const clampedYCurrent = Math.max(chartTop, Math.min(chartBottom, yCurrent));

      if (temperature >= Tmin && temperature <= Tmax) {
        // Vertical line at current T
        ctx2.strokeStyle = COLORS.enthalpy;
        ctx2.lineWidth = 1;
        ctx2.setLineDash([3, 3]);
        ctx2.beginPath();
        ctx2.moveTo(xCurrent, chartTop);
        ctx2.lineTo(xCurrent, chartBottom);
        ctx2.stroke();
        ctx2.setLineDash([]);

        // Point on curve
        ctx2.fillStyle = COLORS.enthalpy;
        ctx2.beginPath();
        ctx2.arc(xCurrent, clampedYCurrent, 6, 0, Math.PI * 2);
        ctx2.fill();
        ctx2.strokeStyle = COLORS.text;
        ctx2.lineWidth = 2;
        ctx2.stroke();
      }

      // Case label
      ctx2.fillStyle = caseInfo.color;
      ctx2.font = 'bold 11px system-ui';
      ctx2.textAlign = 'left';
      ctx2.fillText(caseInfo.case + ': ' + caseInfo.desc, chartLeft, height2 - 5);

      // Axis labels
      ctx2.fillStyle = COLORS.textSecondary;
      ctx2.font = '10px system-ui';
      ctx2.textAlign = 'center';
      ctx2.fillText('Temperature (K)', width2 / 2, height2 - 18);

      ctx2.save();
      ctx2.translate(12, height2 / 2);
      ctx2.rotate(-Math.PI / 2);
      ctx2.fillText('DeltaG (kJ/mol)', 0, 0);
      ctx2.restore();
    };

    // Update results panel
    const updateResults = () => {
      const deltaG = calculateDeltaG(deltaH, deltaS, temperature);
      const verdict = getVerdict(deltaG);
      const caseInfo = getCaseDescription(deltaH, deltaS);

      // Calculate equilibrium temperature
      let TeqHtml = '<span style="color: #a1a1aa;">Not applicable</span>';
      if (deltaS !== 0) {
        const Teq = (deltaH * 1000) / deltaS;
        if (Teq > 0) {
          TeqHtml = `<span style="color: ${COLORS.equilibrium}; font-weight: 600;">${Teq.toFixed(1)} K</span>`;
        }
      }

      resultsPanel.innerHTML = `
        <div style="text-align: center; padding-bottom: 8px; border-bottom: 1px solid #27272a; margin-bottom: 10px;">
          <div style="font-size: 12px; color: #a1a1aa;">Gibbs Free Energy</div>
          <div style="font-size: 24px; font-weight: 700; color: ${verdict.color};">${deltaG.toFixed(2)} kJ/mol</div>
          <div style="font-size: 14px; font-weight: 600; color: ${verdict.color}; margin-top: 4px;">${verdict.text}</div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;">
          <div style="padding: 8px; background: rgba(96, 165, 250, 0.1); border-radius: 6px; border-left: 3px solid ${COLORS.enthalpy};">
            <div style="font-size: 10px; color: #a1a1aa;">Enthalpy (DeltaH)</div>
            <div style="font-size: 14px; font-weight: 600; color: ${COLORS.enthalpy};">${deltaH} kJ/mol</div>
          </div>
          <div style="padding: 8px; background: rgba(168, 85, 247, 0.1); border-radius: 6px; border-left: 3px solid ${COLORS.entropy};">
            <div style="font-size: 10px; color: #a1a1aa;">-T*DeltaS</div>
            <div style="font-size: 14px; font-weight: 600; color: ${COLORS.entropy};">${(-temperature * deltaS / 1000).toFixed(2)} kJ/mol</div>
          </div>
        </div>

        <div style="padding: 10px; background: rgba(251, 191, 36, 0.1); border-radius: 6px; border: 1px solid rgba(251, 191, 36, 0.3); margin-bottom: 10px;">
          <div style="font-size: 11px; color: #a1a1aa; margin-bottom: 4px;">Equilibrium Temperature (T_eq = DeltaH/DeltaS)</div>
          <div style="font-size: 16px;">${TeqHtml}</div>
        </div>

        <div style="padding: 10px; background: ${caseInfo.color}15; border-radius: 6px; border-left: 3px solid ${caseInfo.color};">
          <div style="font-size: 12px; font-weight: 600; color: ${caseInfo.color};">${caseInfo.case}</div>
          <div style="font-size: 11px; color: #a1a1aa; margin-top: 2px;">${caseInfo.desc}</div>
        </div>

        <div style="margin-top: 10px; padding: 8px; background: #18181b; border-radius: 6px;">
          <div style="font-size: 10px; color: #a1a1aa; margin-bottom: 6px;">The Four Cases Summary:</div>
          <div style="font-size: 10px; line-height: 1.6;">
            <div style="color: ${COLORS.spontaneous};">Case 1: DH<0, DS>0 -> Always spontaneous</div>
            <div style="color: ${COLORS.nonSpontaneous};">Case 2: DH>0, DS<0 -> Never spontaneous</div>
            <div style="color: ${COLORS.enthalpy};">Case 3: DH<0, DS<0 -> Low T spontaneous</div>
            <div style="color: ${COLORS.entropy};">Case 4: DH>0, DS>0 -> High T spontaneous</div>
          </div>
        </div>
      `;
    };

    // Main render function
    const render = () => {
      deltaH = parseFloat(deltaHSlider.value);
      deltaS = parseFloat(deltaSSlider.value);
      temperature = parseFloat(tempSlider.value);

      drawBarChart();
      drawTempGraph();
      updateResults();
    };

    // Event listeners
    presetSelect.addEventListener('change', () => {
      const preset = presets[presetSelect.value];
      if (preset && presetSelect.value !== '0') {
        deltaHSlider.value = preset.deltaH;
        deltaSSlider.value = preset.deltaS;
        deltaHSlider.dispatchEvent(new Event('input'));
        deltaSSlider.dispatchEvent(new Event('input'));
      }
      render();
    });

    deltaHSlider.addEventListener('input', render);
    deltaSSlider.addEventListener('input', render);
    tempSlider.addEventListener('input', render);
    calcBtn.addEventListener('click', render);

    // Responsive handling
    const handleResize = () => {
      if (window.innerWidth < 800) {
        mainLayout.style.gridTemplateColumns = '1fr';
        rightPanel.style.order = '1';
        leftPanel.style.order = '2';
      } else {
        mainLayout.style.gridTemplateColumns = '1fr 320px';
        rightPanel.style.order = '';
        leftPanel.style.order = '';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Initial render
    render();
  },

  // Wave Motion and Superposition Visualizer
  waveMotionVisualizer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container wave-motion-visualizer';

    const self = this;

    // Main layout
    const mainWrapper = document.createElement('div');
    mainWrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px; width: 100%;';
    container.appendChild(mainWrapper);

    // Canvas container
    const canvasContainer = document.createElement('div');
    canvasContainer.style.cssText = 'position: relative; border-radius: 8px; overflow: hidden;';
    mainWrapper.appendChild(canvasContainer);

    const { canvas, ctx, width, height } = this.createCanvas(canvasContainer, 700, 400);
    canvas.style.cssText = 'display: block; border-radius: 8px;';

    // Controls panel - Wave 1
    const wave1Panel = document.createElement('div');
    wave1Panel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 12px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; align-items: center;';
    mainWrapper.appendChild(wave1Panel);

    const wave1Title = document.createElement('span');
    wave1Title.style.cssText = 'font-size: 14px; font-weight: bold; color: #60a5fa; min-width: 80px;';
    wave1Title.textContent = 'Wave 1:';
    wave1Panel.appendChild(wave1Title);

    const createSliderGroup = (parent, label, min, max, value, step, unit, color) => {
      const group = document.createElement('div');
      group.style.cssText = 'display: flex; flex-direction: column; gap: 2px; min-width: 100px;';
      const labelEl = document.createElement('label');
      labelEl.style.cssText = `font-size: 11px; color: ${color || 'var(--text-secondary, #a1a1aa)'};`;
      labelEl.innerHTML = `${label}: <span class="val" style="color: var(--text-primary, #fafafa); font-weight: bold;">${value}${unit}</span>`;
      const slider = document.createElement('input');
      slider.type = 'range';
      slider.min = min;
      slider.max = max;
      slider.value = value;
      slider.step = step;
      slider.style.cssText = 'width: 100%;';
      slider.addEventListener('input', () => {
        labelEl.querySelector('.val').textContent = parseFloat(slider.value).toFixed(step < 1 ? 1 : 0) + unit;
      });
      group.appendChild(labelEl);
      group.appendChild(slider);
      parent.appendChild(group);
      return slider;
    };

    const amp1Slider = createSliderGroup(wave1Panel, 'A\u2081', 10, 60, 40, 5, 'px', '#60a5fa');
    const lambda1Slider = createSliderGroup(wave1Panel, '\u03BB\u2081', 40, 200, 100, 10, 'px', '#60a5fa');
    const freq1Slider = createSliderGroup(wave1Panel, 'f\u2081', 0.5, 3, 1, 0.1, 'Hz', '#60a5fa');

    // Wave 1 enable toggle
    const wave1Toggle = document.createElement('label');
    wave1Toggle.style.cssText = 'display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-secondary); cursor: pointer; margin-left: auto;';
    const wave1Check = document.createElement('input');
    wave1Check.type = 'checkbox';
    wave1Check.checked = true;
    wave1Toggle.appendChild(wave1Check);
    wave1Toggle.appendChild(document.createTextNode('Show'));
    wave1Panel.appendChild(wave1Toggle);

    // Controls panel - Wave 2
    const wave2Panel = document.createElement('div');
    wave2Panel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 12px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; align-items: center;';
    mainWrapper.appendChild(wave2Panel);

    const wave2Title = document.createElement('span');
    wave2Title.style.cssText = 'font-size: 14px; font-weight: bold; color: #f59e0b; min-width: 80px;';
    wave2Title.textContent = 'Wave 2:';
    wave2Panel.appendChild(wave2Title);

    const amp2Slider = createSliderGroup(wave2Panel, 'A\u2082', 10, 60, 40, 5, 'px', '#f59e0b');
    const lambda2Slider = createSliderGroup(wave2Panel, '\u03BB\u2082', 40, 200, 100, 10, 'px', '#f59e0b');
    const freq2Slider = createSliderGroup(wave2Panel, 'f\u2082', 0.5, 3, 1, 0.1, 'Hz', '#f59e0b');

    // Wave 2 enable toggle
    const wave2Toggle = document.createElement('label');
    wave2Toggle.style.cssText = 'display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-secondary); cursor: pointer; margin-left: auto;';
    const wave2Check = document.createElement('input');
    wave2Check.type = 'checkbox';
    wave2Check.checked = true;
    wave2Toggle.appendChild(wave2Check);
    wave2Toggle.appendChild(document.createTextNode('Show'));
    wave2Panel.appendChild(wave2Toggle);

    // Phase and mode controls
    const modePanel = document.createElement('div');
    modePanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 12px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; align-items: center;';
    mainWrapper.appendChild(modePanel);

    // Phase difference slider
    const phaseGroup = document.createElement('div');
    phaseGroup.style.cssText = 'display: flex; flex-direction: column; gap: 2px; min-width: 150px;';
    const phaseLabel = document.createElement('label');
    phaseLabel.style.cssText = 'font-size: 11px; color: var(--text-secondary);';
    phaseLabel.innerHTML = 'Phase \u03C6: <span class="val" style="color: var(--text-primary); font-weight: bold;">0\u00B0 (0\u03C0)</span>';
    const phaseSlider = document.createElement('input');
    phaseSlider.type = 'range';
    phaseSlider.min = 0;
    phaseSlider.max = 360;
    phaseSlider.value = 0;
    phaseSlider.step = 15;
    phaseSlider.addEventListener('input', () => {
      const deg = parseFloat(phaseSlider.value);
      const piVal = (deg / 180).toFixed(2);
      phaseLabel.querySelector('.val').textContent = `${deg}\u00B0 (${piVal}\u03C0)`;
    });
    phaseGroup.appendChild(phaseLabel);
    phaseGroup.appendChild(phaseSlider);
    modePanel.appendChild(phaseGroup);

    // Wave type selector
    const typeGroup = document.createElement('div');
    typeGroup.style.cssText = 'display: flex; align-items: center; gap: 8px;';
    const typeLabel = document.createElement('span');
    typeLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary);';
    typeLabel.textContent = 'Type:';
    const typeSelect = document.createElement('select');
    typeSelect.style.cssText = 'padding: 4px 8px; border-radius: 4px; background: #27272a; color: #fafafa; border: 1px solid #3f3f46; font-size: 12px;';
    typeSelect.innerHTML = '<option value="transverse">Transverse</option><option value="longitudinal">Longitudinal</option>';
    typeGroup.appendChild(typeLabel);
    typeGroup.appendChild(typeSelect);
    modePanel.appendChild(typeGroup);

    // Superposition mode
    const modeGroup = document.createElement('div');
    modeGroup.style.cssText = 'display: flex; align-items: center; gap: 8px;';
    const modeLabel = document.createElement('span');
    modeLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary);';
    modeLabel.textContent = 'Mode:';
    const modeSelect = document.createElement('select');
    modeSelect.style.cssText = 'padding: 4px 8px; border-radius: 4px; background: #27272a; color: #fafafa; border: 1px solid #3f3f46; font-size: 12px;';
    modeSelect.innerHTML = '<option value="same">Same Direction</option><option value="opposite">Opposite (Standing)</option><option value="beats">Beats</option>';
    modeGroup.appendChild(modeLabel);
    modeGroup.appendChild(modeSelect);
    modePanel.appendChild(modeGroup);

    // Show resultant toggle
    const resultantToggle = document.createElement('label');
    resultantToggle.style.cssText = 'display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-secondary); cursor: pointer;';
    const resultantCheck = document.createElement('input');
    resultantCheck.type = 'checkbox';
    resultantCheck.checked = true;
    resultantToggle.appendChild(resultantCheck);
    resultantToggle.appendChild(document.createTextNode('Show Resultant'));
    modePanel.appendChild(resultantToggle);

    // Show particles toggle
    const particlesToggle = document.createElement('label');
    particlesToggle.style.cssText = 'display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-secondary); cursor: pointer;';
    const particlesCheck = document.createElement('input');
    particlesCheck.type = 'checkbox';
    particlesCheck.checked = true;
    particlesToggle.appendChild(particlesCheck);
    particlesToggle.appendChild(document.createTextNode('Show Particles'));
    modePanel.appendChild(particlesToggle);

    // Show markers toggle
    const markersToggle = document.createElement('label');
    markersToggle.style.cssText = 'display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-secondary); cursor: pointer;';
    const markersCheck = document.createElement('input');
    markersCheck.type = 'checkbox';
    markersCheck.checked = true;
    markersToggle.appendChild(markersCheck);
    markersToggle.appendChild(document.createTextNode('Show Markers'));
    modePanel.appendChild(markersToggle);

    // Play/Pause button
    const playBtn = document.createElement('button');
    playBtn.className = 'anim-btn';
    playBtn.textContent = 'Pause';
    playBtn.style.cssText = 'padding: 6px 16px; font-size: 13px; margin-left: auto;';
    modePanel.appendChild(playBtn);

    // Presets panel
    const presetsPanel = document.createElement('div');
    presetsPanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; padding: 10px 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; align-items: center;';
    mainWrapper.appendChild(presetsPanel);

    const presetsLabel = document.createElement('span');
    presetsLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary); margin-right: 8px;';
    presetsLabel.textContent = 'Presets:';
    presetsPanel.appendChild(presetsLabel);

    const presets = {
      'Constructive (\u03C6=0)': { phase: 0, mode: 'same' },
      'Destructive (\u03C6=\u03C0)': { phase: 180, mode: 'same' },
      'Standing Wave': { phase: 0, mode: 'opposite', f1: 1, f2: 1, lambda1: 100, lambda2: 100 },
      'Beats (f close)': { phase: 0, mode: 'beats', f1: 1.0, f2: 1.1 },
      'Quarter Phase': { phase: 90, mode: 'same' }
    };

    Object.entries(presets).forEach(([name, config]) => {
      const btn = document.createElement('button');
      btn.className = 'anim-btn';
      btn.textContent = name;
      btn.style.cssText = 'padding: 4px 10px; font-size: 11px;';
      btn.addEventListener('click', () => {
        phaseSlider.value = config.phase;
        phaseSlider.dispatchEvent(new Event('input'));
        modeSelect.value = config.mode;
        if (config.f1 !== undefined) { freq1Slider.value = config.f1; freq1Slider.dispatchEvent(new Event('input')); }
        if (config.f2 !== undefined) { freq2Slider.value = config.f2; freq2Slider.dispatchEvent(new Event('input')); }
        if (config.lambda1 !== undefined) { lambda1Slider.value = config.lambda1; lambda1Slider.dispatchEvent(new Event('input')); }
        if (config.lambda2 !== undefined) { lambda2Slider.value = config.lambda2; lambda2Slider.dispatchEvent(new Event('input')); }
      });
      presetsPanel.appendChild(btn);
    });

    // Info panel
    const infoPanel = document.createElement('div');
    infoPanel.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; font-size: 12px;';
    mainWrapper.appendChild(infoPanel);

    const createInfoBox = (title, color) => {
      const box = document.createElement('div');
      box.style.cssText = `padding: 8px; background: #27272a; border-radius: 6px; border-left: 3px solid ${color};`;
      const titleEl = document.createElement('div');
      titleEl.style.cssText = `font-weight: bold; color: ${color}; margin-bottom: 4px; font-size: 13px;`;
      titleEl.textContent = title;
      const content = document.createElement('div');
      content.className = 'info-content';
      content.style.cssText = 'font-family: monospace; font-size: 11px; color: var(--text-primary);';
      box.appendChild(titleEl);
      box.appendChild(content);
      return box;
    };

    const wave1Info = createInfoBox('Wave 1', '#60a5fa');
    const wave2Info = createInfoBox('Wave 2', '#f59e0b');
    const resultInfo = createInfoBox('Resultant', '#34d399');
    const physicsInfo = createInfoBox('Physics', '#a78bfa');

    infoPanel.appendChild(wave1Info);
    infoPanel.appendChild(wave2Info);
    infoPanel.appendChild(resultInfo);
    infoPanel.appendChild(physicsInfo);

    // Animation state
    let t = 0;
    let isPlaying = true;
    let animationId = null;

    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      playBtn.textContent = isPlaying ? 'Pause' : 'Play';
    });

    // Render function
    const render = () => {
      const colors = self.getColors();

      // Get parameters
      const A1 = parseFloat(amp1Slider.value);
      const A2 = parseFloat(amp2Slider.value);
      const lambda1 = parseFloat(lambda1Slider.value);
      const lambda2 = parseFloat(lambda2Slider.value);
      const f1 = parseFloat(freq1Slider.value);
      const f2 = parseFloat(freq2Slider.value);
      const phi = parseFloat(phaseSlider.value) * Math.PI / 180;
      const waveType = typeSelect.value;
      const mode = modeSelect.value;
      const showWave1 = wave1Check.checked;
      const showWave2 = wave2Check.checked;
      const showResultant = resultantCheck.checked;
      const showParticles = particlesCheck.checked;
      const showMarkers = markersCheck.checked;

      // Calculate wave parameters
      const k1 = 2 * Math.PI / lambda1;
      const k2 = 2 * Math.PI / lambda2;
      const omega1 = 2 * Math.PI * f1;
      const omega2 = 2 * Math.PI * f2;
      const v1 = f1 * lambda1;
      const v2 = f2 * lambda2;

      // Clear canvas
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw grid
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const centerY1 = height * 0.22;
      const centerY2 = height * 0.50;
      const centerYR = height * 0.78;
      const marginX = 30;

      // Draw center lines
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      [centerY1, centerY2, centerYR].forEach(y => {
        ctx.beginPath();
        ctx.moveTo(marginX, y);
        ctx.lineTo(width - marginX, y);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // Labels
      ctx.font = 'bold 12px system-ui';
      ctx.fillStyle = '#60a5fa';
      ctx.fillText('Wave 1', 5, centerY1 - 50);
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('Wave 2', 5, centerY2 - 50);
      ctx.fillStyle = '#34d399';
      ctx.fillText('Resultant', 5, centerYR - 50);

      // Wave calculation functions
      const getWave1 = (x) => {
        if (mode === 'opposite') {
          // Standing wave: superposition of waves traveling in opposite directions
          return A1 * Math.sin(k1 * x - omega1 * t);
        }
        return A1 * Math.sin(k1 * x - omega1 * t);
      };

      const getWave2 = (x) => {
        if (mode === 'opposite') {
          // Wave traveling in opposite direction
          return A2 * Math.sin(k2 * x + omega2 * t + phi);
        }
        if (mode === 'beats') {
          return A2 * Math.sin(k2 * x - omega2 * t + phi);
        }
        return A2 * Math.sin(k2 * x - omega2 * t + phi);
      };

      // Draw waves
      const drawWave = (getY, centerY, color, showIt) => {
        if (!showIt) return;

        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.beginPath();

        for (let px = marginX; px < width - marginX; px++) {
          const x = px - marginX;
          let y;

          if (waveType === 'longitudinal') {
            y = getY(x) * 0.3; // Displacement shown smaller for longitudinal
          } else {
            y = getY(x);
          }

          if (px === marginX) {
            ctx.moveTo(px, centerY - y);
          } else {
            ctx.lineTo(px, centerY - y);
          }
        }
        ctx.stroke();
      };

      // Draw Wave 1
      drawWave(getWave1, centerY1, '#60a5fa', showWave1);

      // Draw Wave 2
      drawWave(getWave2, centerY2, '#f59e0b', showWave2);

      // Draw Resultant
      if (showResultant && (showWave1 || showWave2)) {
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 3;
        ctx.beginPath();

        for (let px = marginX; px < width - marginX; px++) {
          const x = px - marginX;
          let y1 = showWave1 ? getWave1(x) : 0;
          let y2 = showWave2 ? getWave2(x) : 0;
          let y = y1 + y2;

          if (waveType === 'longitudinal') {
            y = y * 0.3;
          }

          if (px === marginX) {
            ctx.moveTo(px, centerYR - y);
          } else {
            ctx.lineTo(px, centerYR - y);
          }
        }
        ctx.stroke();
      }

      // Draw particles
      if (showParticles) {
        const particleSpacing = 30;
        const particleRadius = 4;

        const drawParticles = (getY, centerY, color, showIt) => {
          if (!showIt) return;

          ctx.fillStyle = color;
          for (let px = marginX; px < width - marginX; px += particleSpacing) {
            const x = px - marginX;
            const y = getY(x);

            if (waveType === 'longitudinal') {
              // Particles move horizontally
              const displacement = y * 0.3;
              ctx.beginPath();
              ctx.arc(px + displacement, centerY, particleRadius, 0, Math.PI * 2);
              ctx.fill();

              // Draw compression/rarefaction indicator
              if (Math.abs(displacement) > 5) {
                ctx.strokeStyle = color + '66';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(px, centerY - 10);
                ctx.lineTo(px + displacement, centerY - 10);
                ctx.stroke();
              }
            } else {
              // Particles move vertically (transverse)
              ctx.beginPath();
              ctx.arc(px, centerY - y, particleRadius, 0, Math.PI * 2);
              ctx.fill();

              // Draw vertical displacement line
              ctx.strokeStyle = color + '44';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(px, centerY);
              ctx.lineTo(px, centerY - y);
              ctx.stroke();
            }
          }
        };

        drawParticles(getWave1, centerY1, '#60a5fa', showWave1);
        drawParticles(getWave2, centerY2, '#f59e0b', showWave2);

        // Resultant particles
        if (showResultant && (showWave1 || showWave2)) {
          ctx.fillStyle = '#34d399';
          for (let px = marginX; px < width - marginX; px += particleSpacing) {
            const x = px - marginX;
            const y1 = showWave1 ? getWave1(x) : 0;
            const y2 = showWave2 ? getWave2(x) : 0;
            const y = y1 + y2;

            if (waveType === 'longitudinal') {
              const displacement = y * 0.3;
              ctx.beginPath();
              ctx.arc(px + displacement, centerYR, particleRadius, 0, Math.PI * 2);
              ctx.fill();
            } else {
              ctx.beginPath();
              ctx.arc(px, centerYR - y, particleRadius, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Draw markers (wavelength, amplitude, nodes/antinodes)
      if (showMarkers) {
        // Wavelength marker for Wave 1
        if (showWave1) {
          ctx.strokeStyle = '#60a5fa';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([3, 3]);
          ctx.beginPath();
          ctx.moveTo(marginX, centerY1 - A1 - 15);
          ctx.lineTo(marginX + lambda1, centerY1 - A1 - 15);
          ctx.stroke();
          ctx.setLineDash([]);

          // Arrow heads
          ctx.beginPath();
          ctx.moveTo(marginX, centerY1 - A1 - 15);
          ctx.lineTo(marginX + 8, centerY1 - A1 - 20);
          ctx.lineTo(marginX + 8, centerY1 - A1 - 10);
          ctx.closePath();
          ctx.fillStyle = '#60a5fa';
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(marginX + lambda1, centerY1 - A1 - 15);
          ctx.lineTo(marginX + lambda1 - 8, centerY1 - A1 - 20);
          ctx.lineTo(marginX + lambda1 - 8, centerY1 - A1 - 10);
          ctx.closePath();
          ctx.fill();

          ctx.font = '10px system-ui';
          ctx.fillText('\u03BB\u2081', marginX + lambda1 / 2 - 5, centerY1 - A1 - 20);

          // Amplitude marker
          ctx.strokeStyle = '#60a5fa88';
          ctx.setLineDash([2, 2]);
          ctx.beginPath();
          ctx.moveTo(width - marginX - 30, centerY1);
          ctx.lineTo(width - marginX - 30, centerY1 - A1);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.font = '9px system-ui';
          ctx.fillStyle = '#60a5fa';
          ctx.fillText('A\u2081', width - marginX - 25, centerY1 - A1 / 2);
        }

        // Nodes and antinodes for standing wave
        if (mode === 'opposite' && showResultant) {
          // Find nodes (where sin(kx) = 0) for standing wave pattern
          for (let i = 0; i < 15; i++) {
            const nodeX = marginX + (i * lambda1 / 2);
            if (nodeX > width - marginX) break;

            if (i % 2 === 0) {
              // Node
              ctx.fillStyle = '#ef4444';
              ctx.beginPath();
              ctx.arc(nodeX, centerYR, 5, 0, Math.PI * 2);
              ctx.fill();
              ctx.font = '9px system-ui';
              ctx.fillText('N', nodeX - 3, centerYR + 18);
            } else {
              // Antinode
              ctx.fillStyle = '#22c55e';
              ctx.beginPath();
              ctx.arc(nodeX, centerYR, 5, 0, Math.PI * 2);
              ctx.fill();
              ctx.font = '9px system-ui';
              ctx.fillText('A', nodeX - 3, centerYR + 18);
            }
          }
        }
      }

      // Draw wave equation on canvas
      ctx.font = '11px monospace';
      ctx.fillStyle = colors.text;

      if (mode === 'opposite') {
        ctx.fillText('Standing: y = 2A sin(kx) cos(\u03C9t)', width - 200, 20);
      } else if (mode === 'beats') {
        const beatFreq = Math.abs(f1 - f2).toFixed(2);
        ctx.fillText(`Beat freq: |f\u2081 - f\u2082| = ${beatFreq} Hz`, width - 180, 20);
      } else {
        ctx.fillText('y = A sin(kx - \u03C9t + \u03C6)', width - 160, 20);
      }

      // Update info panels
      wave1Info.querySelector('.info-content').innerHTML = `
        y\u2081 = ${A1} sin(${(k1).toFixed(3)}x - ${omega1.toFixed(2)}t)<br>
        k\u2081 = ${k1.toFixed(3)} rad/m<br>
        \u03C9\u2081 = ${omega1.toFixed(2)} rad/s<br>
        v\u2081 = ${v1.toFixed(1)} px/s
      `;

      wave2Info.querySelector('.info-content').innerHTML = `
        y\u2082 = ${A2} sin(${(k2).toFixed(3)}x - ${omega2.toFixed(2)}t + ${(phi).toFixed(2)})<br>
        k\u2082 = ${k2.toFixed(3)} rad/m<br>
        \u03C9\u2082 = ${omega2.toFixed(2)} rad/s<br>
        v\u2082 = ${v2.toFixed(1)} px/s
      `;

      // Calculate resultant info
      let resultText = '';
      if (mode === 'opposite') {
        resultText = `Standing Wave<br>Nodes: y = 0<br>Antinodes: y = \u00B1${(A1 + A2).toFixed(0)}px<br>Node spacing: \u03BB/2 = ${(lambda1/2).toFixed(0)}px`;
      } else if (mode === 'beats') {
        const beatFreq = Math.abs(f1 - f2);
        const beatPeriod = beatFreq > 0 ? 1 / beatFreq : Infinity;
        resultText = `Beat Frequency: ${beatFreq.toFixed(2)} Hz<br>Beat Period: ${beatPeriod.toFixed(2)}s<br>Carrier: ${((f1+f2)/2).toFixed(2)} Hz`;
      } else {
        // Same direction - interference
        const resultAmp = Math.sqrt(A1*A1 + A2*A2 + 2*A1*A2*Math.cos(phi));
        const interfType = phi < 0.1 ? 'Constructive' : (Math.abs(phi - Math.PI) < 0.1 ? 'Destructive' : 'Partial');
        resultText = `${interfType} Interference<br>A\u1D63 = ${resultAmp.toFixed(1)}px<br>\u0394\u03C6 = ${(phi * 180 / Math.PI).toFixed(0)}\u00B0`;
        if (interfType === 'Constructive') {
          resultText += '<br>A\u1D63 = A\u2081 + A\u2082';
        } else if (interfType === 'Destructive') {
          resultText += '<br>A\u1D63 = |A\u2081 - A\u2082|';
        }
      }
      resultInfo.querySelector('.info-content').innerHTML = resultText;

      // Physics insights
      let physicsText = `v = f\u03BB (wave equation)<br>`;
      if (waveType === 'transverse') {
        physicsText += 'Particle motion \u22A5 propagation<br>';
      } else {
        physicsText += 'Particle motion \u2225 propagation<br>';
      }
      physicsText += `Path diff = \u03BB\u0394\u03C6/2\u03C0<br>`;
      if (mode === 'opposite') {
        physicsText += 'Nodes: fixed points<br>Antinodes: max oscillation';
      }
      physicsInfo.querySelector('.info-content').innerHTML = physicsText;

      // Update time
      if (isPlaying) {
        t += 0.016;
      }

      animationId = requestAnimationFrame(render);
    };

    // Cleanup on container removal
    const observer = new MutationObserver((mutations) => {
      if (!document.body.contains(container)) {
        if (animationId) cancelAnimationFrame(animationId);
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Start animation
    render();

    // Handle responsive layout
    const handleResize = () => {
      if (window.innerWidth < 700) {
        wave1Panel.style.flexDirection = 'column';
        wave2Panel.style.flexDirection = 'column';
        modePanel.style.flexDirection = 'column';
      } else {
        wave1Panel.style.flexDirection = 'row';
        wave2Panel.style.flexDirection = 'row';
        modePanel.style.flexDirection = 'row';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
  },

  // ============================================
  // VECTOR OPERATIONS VISUALIZER
  // Comprehensive dot and cross product visualization
  // ============================================
  vectorOperations(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    // Create main layout
    const mainLayout = document.createElement('div');
    mainLayout.style.cssText = 'display: grid; grid-template-columns: 1fr 280px; gap: 15px; width: 100%;';
    container.appendChild(mainLayout);

    // Canvas area
    const canvasArea = document.createElement('div');
    canvasArea.style.cssText = 'position: relative; min-height: 400px;';
    mainLayout.appendChild(canvasArea);

    const { canvas, ctx, width, height } = this.createCanvas(canvasArea, 520, 400);
    canvas.style.cssText = 'border-radius: 8px; display: block;';

    // Right panel for controls
    const rightPanel = document.createElement('div');
    rightPanel.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    mainLayout.appendChild(rightPanel);

    const self = this;

    // State variables
    let mode = '2D';
    let operation = 'addition';

    // Vector state (in mathematical coordinates)
    let vecA = { x: 60, y: 40, z: 0 };
    let vecB = { x: 40, y: 80, z: 0 };

    // 3D rotation for visualization
    let rotationY = 0.3;
    let rotationX = 0.2;

    // Origin in canvas coordinates
    const originX = 260;
    const originY = 200;
    const scale = 1.5;

    // Operation tabs
    const tabsContainer = document.createElement('div');
    tabsContainer.style.cssText = 'display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 10px;';
    rightPanel.appendChild(tabsContainer);

    const operations = [
      { id: 'addition', label: 'A + B' },
      { id: 'subtraction', label: 'A - B' },
      { id: 'dot', label: 'A . B' },
      { id: 'cross', label: 'A x B' }
    ];

    const tabButtons = {};
    operations.forEach(op => {
      const btn = document.createElement('button');
      btn.textContent = op.label;
      btn.style.cssText = `
        flex: 1; min-width: 60px; padding: 8px 12px; border: none; border-radius: 6px;
        font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;
        background: ${operation === op.id ? 'linear-gradient(135deg, #3b82f6, #2563eb)' : '#27272a'};
        color: ${operation === op.id ? '#fff' : '#a1a1aa'};
      `;
      btn.addEventListener('click', () => {
        operation = op.id;
        Object.keys(tabButtons).forEach(k => {
          tabButtons[k].style.background = k === op.id ? 'linear-gradient(135deg, #3b82f6, #2563eb)' : '#27272a';
          tabButtons[k].style.color = k === op.id ? '#fff' : '#a1a1aa';
        });
        render();
      });
      tabButtons[op.id] = btn;
      tabsContainer.appendChild(btn);
    });

    // 2D/3D toggle
    const modeToggle = document.createElement('div');
    modeToggle.style.cssText = 'display: flex; gap: 5px; margin-bottom: 10px;';
    rightPanel.appendChild(modeToggle);

    ['2D', '3D'].forEach(m => {
      const btn = document.createElement('button');
      btn.textContent = m;
      btn.id = `mode-${m}-${containerId}`;
      btn.style.cssText = `
        flex: 1; padding: 8px; border: none; border-radius: 6px; font-size: 13px;
        font-weight: 600; cursor: pointer; transition: all 0.2s;
        background: ${mode === m ? 'linear-gradient(135deg, #10b981, #059669)' : '#27272a'};
        color: ${mode === m ? '#fff' : '#a1a1aa'};
      `;
      btn.addEventListener('click', () => {
        mode = m;
        document.getElementById(`mode-2D-${containerId}`).style.background = m === '2D' ? 'linear-gradient(135deg, #10b981, #059669)' : '#27272a';
        document.getElementById(`mode-3D-${containerId}`).style.background = m === '3D' ? 'linear-gradient(135deg, #10b981, #059669)' : '#27272a';
        document.getElementById(`mode-2D-${containerId}`).style.color = m === '2D' ? '#fff' : '#a1a1aa';
        document.getElementById(`mode-3D-${containerId}`).style.color = m === '3D' ? '#fff' : '#a1a1aa';
        zControlsA.style.display = m === '3D' ? 'block' : 'none';
        zControlsB.style.display = m === '3D' ? 'block' : 'none';
        render();
      });
      modeToggle.appendChild(btn);
    });

    // Vector A controls
    const vecAPanel = document.createElement('div');
    vecAPanel.innerHTML = '<div style="font-weight: 600; color: #60a5fa; margin-bottom: 8px; font-size: 14px;">Vector A (Blue)</div>';
    vecAPanel.style.cssText = 'background: #18181b; padding: 12px; border-radius: 8px; border-left: 3px solid #60a5fa;';
    rightPanel.appendChild(vecAPanel);

    const createComponentSlider = (parent, label, min, max, value, onChange) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'margin-bottom: 8px;';
      const lbl = document.createElement('div');
      lbl.style.cssText = 'display: flex; justify-content: space-between; font-size: 12px; color: #a1a1aa; margin-bottom: 4px;';
      lbl.innerHTML = `<span>${label}</span><span class="val">${value}</span>`;
      const slider = document.createElement('input');
      slider.type = 'range';
      slider.min = min;
      slider.max = max;
      slider.value = value;
      slider.step = 5;
      slider.style.cssText = 'width: 100%; height: 6px; cursor: pointer;';
      slider.addEventListener('input', () => {
        lbl.querySelector('.val').textContent = slider.value;
        onChange(parseFloat(slider.value));
      });
      wrapper.appendChild(lbl);
      wrapper.appendChild(slider);
      parent.appendChild(wrapper);
      return slider;
    };

    const axSlider = createComponentSlider(vecAPanel, 'Ax', -100, 100, vecA.x, v => { vecA.x = v; render(); });
    const aySlider = createComponentSlider(vecAPanel, 'Ay', -100, 100, vecA.y, v => { vecA.y = v; render(); });
    const zControlsA = document.createElement('div');
    zControlsA.style.display = 'none';
    vecAPanel.appendChild(zControlsA);
    const azSlider = createComponentSlider(zControlsA, 'Az', -100, 100, vecA.z, v => { vecA.z = v; render(); });

    // Vector B controls
    const vecBPanel = document.createElement('div');
    vecBPanel.innerHTML = '<div style="font-weight: 600; color: #34d399; margin-bottom: 8px; font-size: 14px;">Vector B (Green)</div>';
    vecBPanel.style.cssText = 'background: #18181b; padding: 12px; border-radius: 8px; border-left: 3px solid #34d399;';
    rightPanel.appendChild(vecBPanel);

    const bxSlider = createComponentSlider(vecBPanel, 'Bx', -100, 100, vecB.x, v => { vecB.x = v; render(); });
    const bySlider = createComponentSlider(vecBPanel, 'By', -100, 100, vecB.y, v => { vecB.y = v; render(); });
    const zControlsB = document.createElement('div');
    zControlsB.style.display = 'none';
    vecBPanel.appendChild(zControlsB);
    const bzSlider = createComponentSlider(zControlsB, 'Bz', -100, 100, vecB.z, v => { vecB.z = v; render(); });

    // Presets
    const presetsPanel = document.createElement('div');
    presetsPanel.innerHTML = '<div style="font-weight: 600; color: #fbbf24; margin-bottom: 8px; font-size: 14px;">Presets</div>';
    presetsPanel.style.cssText = 'background: #18181b; padding: 12px; border-radius: 8px;';
    rightPanel.appendChild(presetsPanel);

    const presetsGrid = document.createElement('div');
    presetsGrid.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 6px;';
    presetsPanel.appendChild(presetsGrid);

    const presets = [
      { name: 'Unit i, j', a: { x: 50, y: 0, z: 0 }, b: { x: 0, y: 50, z: 0 } },
      { name: 'Perpendicular', a: { x: 60, y: 0, z: 0 }, b: { x: 0, y: 60, z: 0 } },
      { name: 'Parallel', a: { x: 60, y: 40, z: 0 }, b: { x: 30, y: 20, z: 0 } },
      { name: '3D Example', a: { x: 50, y: 30, z: 40 }, b: { x: 30, y: 50, z: -20 } }
    ];

    presets.forEach(preset => {
      const btn = document.createElement('button');
      btn.textContent = preset.name;
      btn.style.cssText = 'padding: 6px 8px; border: 1px solid #3f3f46; border-radius: 4px; background: #27272a; color: #e4e4e7; font-size: 11px; cursor: pointer; transition: all 0.2s;';
      btn.addEventListener('mouseenter', () => { btn.style.background = '#3f3f46'; });
      btn.addEventListener('mouseleave', () => { btn.style.background = '#27272a'; });
      btn.addEventListener('click', () => {
        vecA = { ...preset.a };
        vecB = { ...preset.b };
        axSlider.value = vecA.x; axSlider.previousElementSibling.querySelector('.val').textContent = vecA.x;
        aySlider.value = vecA.y; aySlider.previousElementSibling.querySelector('.val').textContent = vecA.y;
        azSlider.value = vecA.z; azSlider.previousElementSibling.querySelector('.val').textContent = vecA.z;
        bxSlider.value = vecB.x; bxSlider.previousElementSibling.querySelector('.val').textContent = vecB.x;
        bySlider.value = vecB.y; bySlider.previousElementSibling.querySelector('.val').textContent = vecB.y;
        bzSlider.value = vecB.z; bzSlider.previousElementSibling.querySelector('.val').textContent = vecB.z;
        if (preset.name === '3D Example') {
          mode = '3D';
          document.getElementById(`mode-2D-${containerId}`).style.background = '#27272a';
          document.getElementById(`mode-3D-${containerId}`).style.background = 'linear-gradient(135deg, #10b981, #059669)';
          document.getElementById(`mode-2D-${containerId}`).style.color = '#a1a1aa';
          document.getElementById(`mode-3D-${containerId}`).style.color = '#fff';
          zControlsA.style.display = 'block';
          zControlsB.style.display = 'block';
        }
        render();
      });
      presetsGrid.appendChild(btn);
    });

    // Info panel
    const infoPanel = document.createElement('div');
    infoPanel.style.cssText = 'background: linear-gradient(135deg, #1e1b4b, #312e81); padding: 12px; border-radius: 8px; font-size: 12px;';
    rightPanel.appendChild(infoPanel);

    // Helper functions for 3D projection
    const project3D = (x, y, z) => {
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      let x1 = x * cosY + z * sinY;
      let z1 = -x * sinY + z * cosY;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      let y1 = y * cosX - z1 * sinX;
      let z2 = y * sinX + z1 * cosX;

      const perspective = 500;
      const factor = perspective / (perspective + z2);

      return {
        x: originX + x1 * factor * scale,
        y: originY - y1 * factor * scale,
        z: z2
      };
    };

    // Draw arrow function
    const drawArrow = (x1, y1, x2, y2, color, lineWidth = 3, dashed = false) => {
      const angle = Math.atan2(y2 - y1, x2 - x1);
      const headLen = 12;

      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      if (dashed) ctx.setLineDash([5, 5]);
      else ctx.setLineDash([]);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      if (!dashed) {
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - headLen * Math.cos(angle - 0.35), y2 - headLen * Math.sin(angle - 0.35));
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - headLen * Math.cos(angle + 0.35), y2 - headLen * Math.sin(angle + 0.35));
        ctx.stroke();
      }
      ctx.setLineDash([]);
    };

    // Draw 3D arrow
    const drawArrow3D = (start, end, color, lineWidth = 3, dashed = false) => {
      const p1 = project3D(start.x, start.y, start.z);
      const p2 = project3D(end.x, end.y, end.z);
      drawArrow(p1.x, p1.y, p2.x, p2.y, color, lineWidth, dashed);
    };

    // Calculate vector operations
    const dotProduct = (a, b) => a.x * b.x + a.y * b.y + a.z * b.z;

    const crossProduct = (a, b) => ({
      x: a.y * b.z - a.z * b.y,
      y: a.z * b.x - a.x * b.z,
      z: a.x * b.y - a.y * b.x
    });

    const magnitude = (v) => Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);

    const angleBetween = (a, b) => {
      const magA = magnitude(a);
      const magB = magnitude(b);
      if (magA === 0 || magB === 0) return 0;
      const dot = dotProduct(a, b);
      return Math.acos(Math.max(-1, Math.min(1, dot / (magA * magB))));
    };

    // Main render function
    const render = () => {
      const colors = self.getColors();

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw grid
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      for (let i = -200; i <= 200; i += 40) {
        if (mode === '2D') {
          ctx.beginPath();
          ctx.moveTo(originX + i * scale, 20);
          ctx.lineTo(originX + i * scale, height - 20);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(20, originY - i * scale);
          ctx.lineTo(width - 20, originY - i * scale);
          ctx.stroke();
        }
      }

      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;

      if (mode === '2D') {
        ctx.beginPath();
        ctx.moveTo(20, originY);
        ctx.lineTo(width - 20, originY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(originX, height - 20);
        ctx.lineTo(originX, 20);
        ctx.stroke();

        ctx.fillStyle = colors.axisLabel;
        ctx.font = 'bold 14px system-ui';
        ctx.fillText('x', width - 30, originY - 10);
        ctx.fillText('y', originX + 10, 30);
      } else {
        const axisLen = 120;
        const xEnd = project3D(axisLen, 0, 0);
        const yEnd = project3D(0, axisLen, 0);
        const zEnd = project3D(0, 0, axisLen);
        const origin3D = project3D(0, 0, 0);

        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(origin3D.x, origin3D.y);
        ctx.lineTo(xEnd.x, xEnd.y);
        ctx.stroke();
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 14px system-ui';
        ctx.fillText('x', xEnd.x + 5, xEnd.y);

        ctx.strokeStyle = '#22c55e';
        ctx.beginPath();
        ctx.moveTo(origin3D.x, origin3D.y);
        ctx.lineTo(yEnd.x, yEnd.y);
        ctx.stroke();
        ctx.fillStyle = '#22c55e';
        ctx.fillText('y', yEnd.x + 5, yEnd.y);

        ctx.strokeStyle = '#3b82f6';
        ctx.beginPath();
        ctx.moveTo(origin3D.x, origin3D.y);
        ctx.lineTo(zEnd.x, zEnd.y);
        ctx.stroke();
        ctx.fillStyle = '#3b82f6';
        ctx.fillText('z', zEnd.x + 5, zEnd.y);
      }

      // Calculate results
      const magA = magnitude(vecA);
      const magB = magnitude(vecB);
      const theta = angleBetween(vecA, vecB);
      const dot = dotProduct(vecA, vecB);
      const cross = crossProduct(vecA, vecB);
      const magCross = magnitude(cross);

      if (mode === '2D') {
        const ax = originX + vecA.x * scale;
        const ay = originY - vecA.y * scale;
        drawArrow(originX, originY, ax, ay, '#60a5fa', 3);
        ctx.fillStyle = '#60a5fa';
        ctx.font = 'bold 14px system-ui';
        ctx.fillText('A', ax + 8, ay - 8);

        const bx = originX + vecB.x * scale;
        const by = originY - vecB.y * scale;
        drawArrow(originX, originY, bx, by, '#34d399', 3);
        ctx.fillStyle = '#34d399';
        ctx.fillText('B', bx + 8, by - 8);

        // Draw angle arc
        if (theta > 0.01 && theta < Math.PI - 0.01) {
          const arcRadius = 30;
          const startAngle = -Math.atan2(vecA.y, vecA.x);
          const endAngle = -Math.atan2(vecB.y, vecB.x);
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(originX, originY, arcRadius, startAngle, endAngle, startAngle > endAngle);
          ctx.stroke();
          const midAngle = (startAngle + endAngle) / 2;
          ctx.fillStyle = '#f59e0b';
          ctx.font = '13px system-ui';
          ctx.fillText('\u03B8', originX + 40 * Math.cos(midAngle), originY + 40 * Math.sin(midAngle));
        }

        if (operation === 'addition') {
          const rx = originX + (vecA.x + vecB.x) * scale;
          const ry = originY - (vecA.y + vecB.y) * scale;
          drawArrow(originX, originY, rx, ry, '#f59e0b', 4);
          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 14px system-ui';
          ctx.fillText('A+B', rx + 8, ry - 8);

          ctx.strokeStyle = colors.axisLabel;
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(rx, ry);
          ctx.moveTo(bx, by);
          ctx.lineTo(rx, ry);
          ctx.stroke();
          ctx.setLineDash([]);

        } else if (operation === 'subtraction') {
          const rx = originX + (vecA.x - vecB.x) * scale;
          const ry = originY - (vecA.y - vecB.y) * scale;
          drawArrow(originX, originY, rx, ry, '#f59e0b', 4);
          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 14px system-ui';
          ctx.fillText('A-B', rx + 8, ry - 8);

          drawArrow(originX, originY, originX - vecB.x * scale, originY + vecB.y * scale, '#34d399', 2, true);
          ctx.fillStyle = '#34d399';
          ctx.font = '12px system-ui';
          ctx.fillText('-B', originX - vecB.x * scale + 8, originY + vecB.y * scale - 8);

        } else if (operation === 'dot') {
          const projScalar = magB > 0 ? dot / (magB * magB) : 0;
          const projX = vecB.x * projScalar;
          const projY = vecB.y * projScalar;
          const projCanvasX = originX + projX * scale;
          const projCanvasY = originY - projY * scale;

          ctx.strokeStyle = '#a855f7';
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(projCanvasX, projCanvasY);
          ctx.stroke();
          ctx.setLineDash([]);

          drawArrow(originX, originY, projCanvasX, projCanvasY, '#a855f7', 3);
          ctx.fillStyle = '#a855f7';
          ctx.font = '12px system-ui';
          ctx.fillText('proj', projCanvasX + 5, projCanvasY + 15);

          if (Math.abs(dot) < 0.1) {
            ctx.fillStyle = '#22c55e';
            ctx.font = 'bold 16px system-ui';
            ctx.fillText('PERPENDICULAR!', width / 2 - 70, 30);
            ctx.font = '14px system-ui';
            ctx.fillText('A . B = 0', width / 2 - 30, 50);
          }

        } else if (operation === 'cross') {
          ctx.fillStyle = 'rgba(249, 115, 22, 0.2)';
          ctx.beginPath();
          ctx.moveTo(originX, originY);
          ctx.lineTo(ax, ay);
          ctx.lineTo(ax + vecB.x * scale, ay - vecB.y * scale);
          ctx.lineTo(bx, by);
          ctx.closePath();
          ctx.fill();

          ctx.strokeStyle = '#f97316';
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(ax + vecB.x * scale, ay - vecB.y * scale);
          ctx.lineTo(bx, by);
          ctx.stroke();
          ctx.setLineDash([]);

          if (cross.z !== 0) {
            const centerX = originX + (vecA.x + vecB.x) * scale / 2;
            const centerY = originY - (vecA.y + vecB.y) * scale / 2;
            ctx.fillStyle = '#f59e0b';
            ctx.strokeStyle = '#f59e0b';
            if (cross.z > 0) {
              ctx.beginPath();
              ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
              ctx.stroke();
              ctx.beginPath();
              ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
              ctx.fill();
              ctx.font = '12px system-ui';
              ctx.fillText('A x B (out)', centerX + 20, centerY);
            } else {
              ctx.beginPath();
              ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(centerX - 8, centerY - 8);
              ctx.lineTo(centerX + 8, centerY + 8);
              ctx.moveTo(centerX + 8, centerY - 8);
              ctx.lineTo(centerX - 8, centerY + 8);
              ctx.stroke();
              ctx.font = '12px system-ui';
              ctx.fillText('A x B (in)', centerX + 20, centerY);
            }
          }

          ctx.fillStyle = '#f97316';
          ctx.font = '13px system-ui';
          ctx.fillText('Area = |A x B|', width - 120, height - 30);
        }

      } else {
        // 3D mode
        const origin = { x: 0, y: 0, z: 0 };

        drawArrow3D(origin, vecA, '#60a5fa', 3);
        const aEnd = project3D(vecA.x, vecA.y, vecA.z);
        ctx.fillStyle = '#60a5fa';
        ctx.font = 'bold 14px system-ui';
        ctx.fillText('A', aEnd.x + 8, aEnd.y - 8);

        drawArrow3D(origin, vecB, '#34d399', 3);
        const bEnd = project3D(vecB.x, vecB.y, vecB.z);
        ctx.fillStyle = '#34d399';
        ctx.fillText('B', bEnd.x + 8, bEnd.y - 8);

        if (operation === 'addition') {
          const result = { x: vecA.x + vecB.x, y: vecA.y + vecB.y, z: vecA.z + vecB.z };
          drawArrow3D(origin, result, '#f59e0b', 4);
          const rEnd = project3D(result.x, result.y, result.z);
          ctx.fillStyle = '#f59e0b';
          ctx.fillText('A+B', rEnd.x + 8, rEnd.y - 8);

          ctx.setLineDash([4, 4]);
          drawArrow3D(vecA, result, colors.axisLabel, 1, true);
          drawArrow3D(vecB, result, colors.axisLabel, 1, true);
          ctx.setLineDash([]);

        } else if (operation === 'subtraction') {
          const result = { x: vecA.x - vecB.x, y: vecA.y - vecB.y, z: vecA.z - vecB.z };
          drawArrow3D(origin, result, '#f59e0b', 4);
          const rEnd = project3D(result.x, result.y, result.z);
          ctx.fillStyle = '#f59e0b';
          ctx.fillText('A-B', rEnd.x + 8, rEnd.y - 8);

        } else if (operation === 'dot') {
          const projScalar = magB > 0 ? dot / (magB * magB) : 0;
          const proj = { x: vecB.x * projScalar, y: vecB.y * projScalar, z: vecB.z * projScalar };
          drawArrow3D(origin, proj, '#a855f7', 3);
          const projEnd = project3D(proj.x, proj.y, proj.z);
          ctx.fillStyle = '#a855f7';
          ctx.font = '12px system-ui';
          ctx.fillText('proj', projEnd.x + 5, projEnd.y + 15);

          ctx.setLineDash([5, 5]);
          drawArrow3D(vecA, proj, '#a855f7', 2, true);
          ctx.setLineDash([]);

          if (Math.abs(dot) < 0.1) {
            ctx.fillStyle = '#22c55e';
            ctx.font = 'bold 16px system-ui';
            ctx.fillText('PERPENDICULAR!', width / 2 - 70, 30);
          }

        } else if (operation === 'cross') {
          if (magCross > 0.1) {
            const crossScale = Math.min(1, 80 / magCross);
            const crossVec = { x: cross.x * crossScale, y: cross.y * crossScale, z: cross.z * crossScale };
            drawArrow3D(origin, crossVec, '#f59e0b', 4);
            const crossEnd = project3D(crossVec.x, crossVec.y, crossVec.z);
            ctx.fillStyle = '#f59e0b';
            ctx.font = 'bold 14px system-ui';
            ctx.fillText('AxB', crossEnd.x + 8, crossEnd.y - 8);
          }

          const p1 = project3D(0, 0, 0);
          const p2 = project3D(vecA.x, vecA.y, vecA.z);
          const p3 = project3D(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
          const p4 = project3D(vecB.x, vecB.y, vecB.z);

          ctx.fillStyle = 'rgba(249, 115, 22, 0.15)';
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.lineTo(p4.x, p4.y);
          ctx.closePath();
          ctx.fill();
        }
      }

      // Update info panel
      let infoHTML = `
        <div style="color: #60a5fa; margin-bottom: 6px;">
          <strong>A</strong> = (${vecA.x}, ${vecA.y}${mode === '3D' ? ', ' + vecA.z : ''})
          <span style="color: #a1a1aa; margin-left: 8px;">|A| = ${magA.toFixed(2)}</span>
        </div>
        <div style="color: #34d399; margin-bottom: 6px;">
          <strong>B</strong> = (${vecB.x}, ${vecB.y}${mode === '3D' ? ', ' + vecB.z : ''})
          <span style="color: #a1a1aa; margin-left: 8px;">|B| = ${magB.toFixed(2)}</span>
        </div>
        <div style="color: #fbbf24; margin-bottom: 8px;">
          <strong>\u03B8</strong> = ${(theta * 180 / Math.PI).toFixed(1)}\u00B0
        </div>
        <div style="border-top: 1px solid #4c1d95; padding-top: 8px; margin-top: 4px;">
      `;

      if (operation === 'addition') {
        const result = { x: vecA.x + vecB.x, y: vecA.y + vecB.y, z: vecA.z + vecB.z };
        const magR = magnitude(result);
        infoHTML += `
          <div style="color: #f59e0b;">
            <strong>A + B</strong> = (${result.x}, ${result.y}${mode === '3D' ? ', ' + result.z : ''})
          </div>
          <div style="color: #a1a1aa; margin-top: 4px;">|A + B| = ${magR.toFixed(2)}</div>
        `;
      } else if (operation === 'subtraction') {
        const result = { x: vecA.x - vecB.x, y: vecA.y - vecB.y, z: vecA.z - vecB.z };
        const magR = magnitude(result);
        infoHTML += `
          <div style="color: #f59e0b;">
            <strong>A - B</strong> = (${result.x}, ${result.y}${mode === '3D' ? ', ' + result.z : ''})
          </div>
          <div style="color: #a1a1aa; margin-top: 4px;">|A - B| = ${magR.toFixed(2)}</div>
        `;
      } else if (operation === 'dot') {
        infoHTML += `
          <div style="color: #a855f7;">
            <strong>A . B</strong> = ${dot.toFixed(2)}
          </div>
          <div style="color: #a1a1aa; margin-top: 4px; font-size: 11px;">
            = |A||B|cos(\u03B8)<br>
            = ${magA.toFixed(2)} \u00D7 ${magB.toFixed(2)} \u00D7 cos(${(theta * 180 / Math.PI).toFixed(1)}\u00B0)
          </div>
          ${Math.abs(dot) < 0.1 ? '<div style="color: #22c55e; margin-top: 6px; font-weight: 600;">Vectors are Perpendicular!</div>' : ''}
        `;
      } else if (operation === 'cross') {
        infoHTML += `
          <div style="color: #f59e0b;">
            <strong>A x B</strong> = (${cross.x.toFixed(1)}, ${cross.y.toFixed(1)}, ${cross.z.toFixed(1)})
          </div>
          <div style="color: #a1a1aa; margin-top: 4px;">
            |A x B| = ${magCross.toFixed(2)}<br>
            <span style="font-size: 11px;">= |A||B|sin(\u03B8) = Area of parallelogram</span>
          </div>
          ${Math.abs(magCross) < 0.1 ? '<div style="color: #ef4444; margin-top: 6px; font-weight: 600;">Vectors are Parallel!</div>' : ''}
        `;
      }

      infoHTML += '</div>';
      infoPanel.innerHTML = infoHTML;
    };

    // Mouse drag for 3D rotation
    let isRotating = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    canvas.addEventListener('mousedown', (e) => {
      if (mode === '3D') {
        isRotating = true;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        canvas.style.cursor = 'grabbing';
      }
    });

    canvas.addEventListener('mousemove', (e) => {
      if (isRotating && mode === '3D') {
        const dx = e.clientX - lastMouseX;
        const dy = e.clientY - lastMouseY;
        rotationY += dx * 0.01;
        rotationX += dy * 0.01;
        rotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotationX));
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        render();
      }
    });

    canvas.addEventListener('mouseup', () => {
      isRotating = false;
      canvas.style.cursor = mode === '3D' ? 'grab' : 'default';
    });

    canvas.addEventListener('mouseleave', () => {
      isRotating = false;
      canvas.style.cursor = 'default';
    });

    // Touch support for 3D rotation
    canvas.addEventListener('touchstart', (e) => {
      if (mode === '3D' && e.touches.length === 1) {
        isRotating = true;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
        e.preventDefault();
      }
    });

    canvas.addEventListener('touchmove', (e) => {
      if (isRotating && mode === '3D' && e.touches.length === 1) {
        const dx = e.touches[0].clientX - lastMouseX;
        const dy = e.touches[0].clientY - lastMouseY;
        rotationY += dx * 0.01;
        rotationX += dy * 0.01;
        rotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotationX));
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
        render();
        e.preventDefault();
      }
    });

    canvas.addEventListener('touchend', () => {
      isRotating = false;
    });

    // Responsive handling
    const handleResize = () => {
      if (window.innerWidth < 700) {
        mainLayout.style.gridTemplateColumns = '1fr';
        canvasArea.style.order = '1';
        rightPanel.style.order = '2';
      } else {
        mainLayout.style.gridTemplateColumns = '1fr 280px';
        canvasArea.style.order = '';
        rightPanel.style.order = '';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Initial render
    render();
  },

  // ============================================
  // LORENTZ FORCE AND CHARGED PARTICLE MOTION VISUALIZER
  // ============================================

  lorentzForceVisualizer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const self = this;

    // Create main wrapper with modern styling
    const mainWrapper = document.createElement('div');
    mainWrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px; padding: 16px; background: var(--bg-primary, #09090b); border-radius: 12px; font-family: system-ui, -apple-system, sans-serif;';
    container.appendChild(mainWrapper);

    // Canvas container for 3D-like view
    const canvasContainer = document.createElement('div');
    canvasContainer.style.cssText = 'position: relative; background: linear-gradient(135deg, #0a0a0f 0%, #111118 100%); border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);';
    mainWrapper.appendChild(canvasContainer);

    const { canvas, ctx, width, height } = this.createCanvas(canvasContainer, 700, 450);
    canvas.style.cssText = 'display: block; width: 100%; height: auto;';

    // Controls panel
    const controlsPanel = document.createElement('div');
    controlsPanel.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;';
    mainWrapper.appendChild(controlsPanel);

    // Left control group - Particle properties
    const leftGroup = document.createElement('div');
    leftGroup.style.cssText = 'display: flex; flex-direction: column; gap: 12px; background: var(--bg-secondary, #18181b); padding: 16px; border-radius: 10px;';
    controlsPanel.appendChild(leftGroup);

    const leftTitle = document.createElement('h4');
    leftTitle.textContent = 'Particle & Velocity';
    leftTitle.style.cssText = 'margin: 0; font-size: 14px; color: var(--text-primary, #fafafa); font-weight: 600;';
    leftGroup.appendChild(leftTitle);

    // Velocity magnitude slider
    const velocityControl = document.createElement('div');
    velocityControl.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';
    velocityControl.innerHTML = `
      <label style="font-size: 12px; color: var(--text-secondary, #a1a1aa);">Velocity: <span id="vel-val-${containerId}">50</span> units</label>
      <input type="range" id="vel-slider-${containerId}" min="10" max="100" value="50" step="5" style="width: 100%; accent-color: #34d399;">
    `;
    leftGroup.appendChild(velocityControl);

    // Velocity angle slider
    const angleControl = document.createElement('div');
    angleControl.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';
    angleControl.innerHTML = `
      <label style="font-size: 12px; color: var(--text-secondary, #a1a1aa);">Angle to B-field: <span id="angle-val-${containerId}">90</span> degrees</label>
      <input type="range" id="angle-slider-${containerId}" min="0" max="90" value="90" step="5" style="width: 100%; accent-color: #34d399;">
    `;
    leftGroup.appendChild(angleControl);

    // Charge sign toggle
    const chargeControl = document.createElement('div');
    chargeControl.style.cssText = 'display: flex; align-items: center; gap: 12px;';
    chargeControl.innerHTML = `
      <span style="font-size: 12px; color: var(--text-secondary, #a1a1aa);">Charge:</span>
      <button id="charge-toggle-${containerId}" style="padding: 6px 16px; border-radius: 6px; font-weight: bold; cursor: pointer; border: none; background: linear-gradient(135deg, #ef4444, #dc2626); color: white; font-size: 14px;">+ Positive</button>
    `;
    leftGroup.appendChild(chargeControl);

    // Right control group - Field properties
    const rightGroup = document.createElement('div');
    rightGroup.style.cssText = 'display: flex; flex-direction: column; gap: 12px; background: var(--bg-secondary, #18181b); padding: 16px; border-radius: 10px;';
    controlsPanel.appendChild(rightGroup);

    const rightTitle = document.createElement('h4');
    rightTitle.textContent = 'Magnetic Field';
    rightTitle.style.cssText = 'margin: 0; font-size: 14px; color: var(--text-primary, #fafafa); font-weight: 600;';
    rightGroup.appendChild(rightTitle);

    // B-field strength slider
    const bFieldControl = document.createElement('div');
    bFieldControl.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';
    bFieldControl.innerHTML = `
      <label style="font-size: 12px; color: var(--text-secondary, #a1a1aa);">B-field Strength: <span id="bfield-val-${containerId}">50</span> units</label>
      <input type="range" id="bfield-slider-${containerId}" min="10" max="100" value="50" step="5" style="width: 100%; accent-color: #60a5fa;">
    `;
    rightGroup.appendChild(bFieldControl);

    // View rotation slider
    const viewControl = document.createElement('div');
    viewControl.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';
    viewControl.innerHTML = `
      <label style="font-size: 12px; color: var(--text-secondary, #a1a1aa);">3D View Rotation: <span id="view-val-${containerId}">30</span> degrees</label>
      <input type="range" id="view-slider-${containerId}" min="0" max="60" value="30" step="5" style="width: 100%; accent-color: #a78bfa;">
    `;
    rightGroup.appendChild(viewControl);

    // Display toggles
    const togglesRow = document.createElement('div');
    togglesRow.style.cssText = 'display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px;';
    rightGroup.appendChild(togglesRow);

    const createDisplayToggle = (label, id, checked, color) => {
      const wrapper = document.createElement('label');
      wrapper.style.cssText = `display: flex; align-items: center; gap: 6px; font-size: 12px; color: ${color}; cursor: pointer;`;
      wrapper.innerHTML = `<input type="checkbox" id="${id}" ${checked ? 'checked' : ''} style="accent-color: ${color};"> ${label}`;
      return wrapper;
    };

    togglesRow.appendChild(createDisplayToggle('Velocity (v)', `show-v-${containerId}`, true, '#34d399'));
    togglesRow.appendChild(createDisplayToggle('Force (F)', `show-f-${containerId}`, true, '#f59e0b'));
    togglesRow.appendChild(createDisplayToggle('B-field', `show-b-${containerId}`, true, '#60a5fa'));
    togglesRow.appendChild(createDisplayToggle('Trail', `show-trail-${containerId}`, true, '#a78bfa'));

    // Button controls row
    const buttonRow = document.createElement('div');
    buttonRow.style.cssText = 'display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;';
    mainWrapper.appendChild(buttonRow);

    const createControlBtn = (text, color, id) => {
      const btn = document.createElement('button');
      btn.id = id;
      btn.textContent = text;
      btn.style.cssText = `padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; border: none; background: linear-gradient(135deg, ${color}); color: white; font-size: 13px; transition: transform 0.1s, box-shadow 0.1s;`;
      btn.addEventListener('mouseenter', () => { btn.style.transform = 'scale(1.05)'; btn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)'; });
      btn.addEventListener('mouseleave', () => { btn.style.transform = 'scale(1)'; btn.style.boxShadow = 'none'; });
      return btn;
    };

    const playBtn = createControlBtn('Play', '#22c55e, #16a34a', `play-btn-${containerId}`);
    const pauseBtn = createControlBtn('Pause', '#f59e0b, #d97706', `pause-btn-${containerId}`);
    const resetBtn = createControlBtn('Reset', '#ef4444, #dc2626', `reset-btn-${containerId}`);
    buttonRow.appendChild(playBtn);
    buttonRow.appendChild(pauseBtn);
    buttonRow.appendChild(resetBtn);

    // Presets row
    const presetsRow = document.createElement('div');
    presetsRow.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 10px;';
    mainWrapper.appendChild(presetsRow);

    const presetsLabel = document.createElement('span');
    presetsLabel.textContent = 'Presets:';
    presetsLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa); display: flex; align-items: center; margin-right: 8px;';
    presetsRow.appendChild(presetsLabel);

    const createPresetBtn = (text, id) => {
      const btn = document.createElement('button');
      btn.id = id;
      btn.textContent = text;
      btn.style.cssText = 'padding: 6px 14px; border-radius: 6px; font-size: 11px; cursor: pointer; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: var(--text-primary, #fafafa); transition: all 0.2s;';
      btn.addEventListener('mouseenter', () => { btn.style.background = 'rgba(255,255,255,0.1)'; });
      btn.addEventListener('mouseleave', () => { btn.style.background = 'transparent'; });
      return btn;
    };

    const presetCircular = createPresetBtn('Circular (v perpendicular to B)', `preset-circular-${containerId}`);
    const presetHelical = createPresetBtn('Helical (45 degrees)', `preset-helical-${containerId}`);
    const presetStraight = createPresetBtn('Straight (v parallel to B)', `preset-straight-${containerId}`);
    const presetCyclotron = createPresetBtn('Cyclotron Demo', `preset-cyclotron-${containerId}`);
    presetsRow.appendChild(presetCircular);
    presetsRow.appendChild(presetHelical);
    presetsRow.appendChild(presetStraight);
    presetsRow.appendChild(presetCyclotron);

    // Info panel
    const infoPanel = document.createElement('div');
    infoPanel.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; padding: 16px; background: var(--bg-secondary, #18181b); border-radius: 10px;';
    mainWrapper.appendChild(infoPanel);

    const createInfoBox = (label, id, color) => {
      const box = document.createElement('div');
      box.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';
      box.innerHTML = `
        <span style="font-size: 11px; color: ${color}; text-transform: uppercase; letter-spacing: 0.5px;">${label}</span>
        <span id="${id}" style="font-size: 16px; font-weight: bold; color: var(--text-primary, #fafafa); font-family: 'JetBrains Mono', monospace;">-</span>
      `;
      return box;
    };

    infoPanel.appendChild(createInfoBox('v parallel', `info-vpar-${containerId}`, '#34d399'));
    infoPanel.appendChild(createInfoBox('v perpendicular', `info-vperp-${containerId}`, '#34d399'));
    infoPanel.appendChild(createInfoBox('Force F = qvB sin(theta)', `info-force-${containerId}`, '#f59e0b'));
    infoPanel.appendChild(createInfoBox('Radius r = mv/(qB)', `info-radius-${containerId}`, '#60a5fa'));
    infoPanel.appendChild(createInfoBox('Period T = 2 pi m/(qB)', `info-period-${containerId}`, '#a78bfa'));
    infoPanel.appendChild(createInfoBox('Helix Pitch', `info-pitch-${containerId}`, '#ec4899'));

    // Educational notes panel
    const eduPanel = document.createElement('div');
    eduPanel.style.cssText = 'padding: 16px; background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1)); border-radius: 10px; border: 1px solid rgba(59,130,246,0.3);';
    eduPanel.innerHTML = `
      <h4 style="margin: 0 0 12px 0; color: #60a5fa; font-size: 14px;">Key Physics Insights</h4>
      <div id="edu-content-${containerId}" style="display: grid; gap: 8px; font-size: 12px; color: var(--text-secondary, #a1a1aa);">
        <div style="display: flex; align-items: flex-start; gap: 8px;">
          <span style="color: #f59e0b; font-weight: bold;">1.</span>
          <span>Force F is ALWAYS perpendicular to velocity v - hence NO WORK is done by magnetic force!</span>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 8px;">
          <span style="color: #f59e0b; font-weight: bold;">2.</span>
          <span>Right-hand rule: Point fingers along v, curl toward B, thumb gives F direction (for +q)</span>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 8px;">
          <span style="color: #f59e0b; font-weight: bold;">3.</span>
          <span>Cyclotron frequency f = qB/(2 pi m) is INDEPENDENT of velocity - key to cyclotron operation!</span>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 8px;">
          <span style="color: #f59e0b; font-weight: bold;">4.</span>
          <span id="motion-type-${containerId}">Current motion: Circular (v perpendicular to B)</span>
        </div>
      </div>
    `;
    mainWrapper.appendChild(eduPanel);

    // Simulation state
    let isPlaying = false;
    let animationId = null;
    let time = 0;
    let trail = [];
    const maxTrailLength = 500;

    // Parameters
    let velocity = 50;
    let angle = 90; // degrees
    let chargeSign = 1; // +1 or -1
    let bFieldStrength = 50;
    let viewRotation = 30; // degrees for 3D perspective

    // Display toggles
    let showVelocity = true;
    let showForce = true;
    let showBField = true;
    let showTrail = true;

    // Particle state
    let particlePos = { x: 0, y: 0, z: 0 };
    let particleVel = { x: 0, y: 0, z: 0 };

    // Physics constants (normalized for visualization)
    const mass = 1;
    const dt = 0.016; // time step

    // Get DOM elements
    const velSlider = document.getElementById(`vel-slider-${containerId}`);
    const angleSlider = document.getElementById(`angle-slider-${containerId}`);
    const bfieldSlider = document.getElementById(`bfield-slider-${containerId}`);
    const viewSlider = document.getElementById(`view-slider-${containerId}`);
    const chargeToggle = document.getElementById(`charge-toggle-${containerId}`);
    const showVCheck = document.getElementById(`show-v-${containerId}`);
    const showFCheck = document.getElementById(`show-f-${containerId}`);
    const showBCheck = document.getElementById(`show-b-${containerId}`);
    const showTrailCheck = document.getElementById(`show-trail-${containerId}`);

    // 3D projection helper
    const project3D = (x, y, z, viewAngle) => {
      const rad = viewAngle * Math.PI / 180;
      const cosA = Math.cos(rad);
      const sinA = Math.sin(rad);

      // Rotate around x-axis for tilt view
      const y2 = y * cosA - z * sinA;
      const z2 = y * sinA + z * cosA;

      // Simple perspective
      const scale = 1 + z2 * 0.001;

      return {
        x: width / 2 + x * scale,
        y: height / 2 - y2 * scale,
        z: z2,
        scale: scale
      };
    };

    // Draw arrow helper
    const drawArrow = (fromX, fromY, toX, toY, color, lineWidth = 2, headSize = 10) => {
      const dx = toX - fromX;
      const dy = toY - fromY;
      const len = Math.sqrt(dx * dx + dy * dy);
      if (len < 1) return;

      const arrowAngle = Math.atan2(dy, dx);

      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = lineWidth;

      // Line
      ctx.beginPath();
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.stroke();

      // Arrow head
      ctx.beginPath();
      ctx.moveTo(toX, toY);
      ctx.lineTo(toX - headSize * Math.cos(arrowAngle - Math.PI / 6), toY - headSize * Math.sin(arrowAngle - Math.PI / 6));
      ctx.lineTo(toX - headSize * Math.cos(arrowAngle + Math.PI / 6), toY - headSize * Math.sin(arrowAngle + Math.PI / 6));
      ctx.closePath();
      ctx.fill();
    };

    // Draw 3D arrow
    const draw3DArrow = (from, to, color, lineWidth = 2) => {
      const p1 = project3D(from.x, from.y, from.z, viewRotation);
      const p2 = project3D(to.x, to.y, to.z, viewRotation);
      drawArrow(p1.x, p1.y, p2.x, p2.y, color, lineWidth);
    };

    // Initialize particle
    const initParticle = () => {
      const angleRad = angle * Math.PI / 180;

      // B-field is along z-axis (vertical in 3D view)
      // Initial velocity: perpendicular component in x-y plane, parallel component along z
      particlePos = { x: 0, y: 0, z: -80 };

      // v_perp is in x direction initially, v_parallel is in z direction
      const vPerp = velocity * Math.sin(angleRad);
      const vPar = velocity * Math.cos(angleRad);

      particleVel = { x: vPerp, y: 0, z: vPar };

      trail = [];
      time = 0;
    };

    // Update physics
    const updatePhysics = () => {
      if (!isPlaying) return;

      // Lorentz force: F = q(v x B)
      // B is along z-axis: B = (0, 0, B)
      // F = q(vy*Bz - vz*By, vz*Bx - vx*Bz, vx*By - vy*Bx)
      // F = q(vy*B, -vx*B, 0) for B along z

      const B = bFieldStrength * 0.01; // scale for visualization
      const q = chargeSign;

      const Fx = q * particleVel.y * B;
      const Fy = -q * particleVel.x * B;
      const Fz = 0; // No force along B direction

      // Update velocity
      particleVel.x += (Fx / mass) * dt * 50;
      particleVel.y += (Fy / mass) * dt * 50;
      particleVel.z += (Fz / mass) * dt * 50;

      // Update position
      particlePos.x += particleVel.x * dt * 2;
      particlePos.y += particleVel.y * dt * 2;
      particlePos.z += particleVel.z * dt * 2;

      // Store trail
      trail.push({ ...particlePos });
      if (trail.length > maxTrailLength) trail.shift();

      time += dt;
    };

    // Calculate physics values for display
    const calculateDisplayValues = () => {
      const angleRad = angle * Math.PI / 180;
      const vPerp = velocity * Math.sin(angleRad);
      const vPar = velocity * Math.cos(angleRad);
      const B = bFieldStrength;
      const q = 1; // magnitude

      // Force magnitude
      const force = q * velocity * B * Math.sin(angleRad) * 0.01;

      // Radius of circular motion (for perpendicular component)
      const radius = vPerp > 0.1 ? (mass * vPerp) / (q * B * 0.01) : Infinity;

      // Period
      const period = (2 * Math.PI * mass) / (q * B * 0.01);

      // Pitch of helix
      const pitch = vPar * period;

      return { vPerp, vPar, force, radius, period, pitch };
    };

    // Update info display
    const updateInfo = () => {
      const vals = calculateDisplayValues();

      document.getElementById(`info-vpar-${containerId}`).textContent = vals.vPar.toFixed(1);
      document.getElementById(`info-vperp-${containerId}`).textContent = vals.vPerp.toFixed(1);
      document.getElementById(`info-force-${containerId}`).textContent = vals.force.toFixed(2);
      document.getElementById(`info-radius-${containerId}`).textContent = isFinite(vals.radius) ? vals.radius.toFixed(1) : 'N/A';
      document.getElementById(`info-period-${containerId}`).textContent = vals.period.toFixed(2);
      document.getElementById(`info-pitch-${containerId}`).textContent = angle > 0 && angle < 90 ? vals.pitch.toFixed(1) : (angle === 0 ? 'N/A (straight)' : 'N/A (circular)');

      // Update motion type
      let motionType = '';
      if (angle === 90) {
        motionType = 'Current motion: CIRCULAR (v perpendicular to B) - Particle moves in a perfect circle';
      } else if (angle === 0) {
        motionType = 'Current motion: STRAIGHT LINE (v parallel to B) - No magnetic force, particle undeflected';
      } else {
        motionType = `Current motion: HELICAL (v at ${angle} degrees to B) - Combination of circular + linear motion`;
      }
      document.getElementById(`motion-type-${containerId}`).textContent = motionType;
    };

    // Main render function
    const render = () => {
      const colors = self.getColors();

      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#0a0a12');
      gradient.addColorStop(1, '#12121a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw 3D coordinate axes
      const axisLength = 120;
      const origin = project3D(0, 0, 0, viewRotation);

      // X-axis (red)
      const xEnd = project3D(axisLength, 0, 0, viewRotation);
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.6)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(xEnd.x, xEnd.y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#ef4444';
      ctx.font = '12px system-ui';
      ctx.fillText('x', xEnd.x + 5, xEnd.y);

      // Y-axis (green)
      const yEnd = project3D(0, axisLength, 0, viewRotation);
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.6)';
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(yEnd.x, yEnd.y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#22c55e';
      ctx.fillText('y', yEnd.x + 5, yEnd.y);

      // Z-axis (blue) - B-field direction
      const zEnd = project3D(0, 0, axisLength, viewRotation);
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(zEnd.x, zEnd.y);
      ctx.stroke();
      ctx.fillStyle = '#3b82f6';
      ctx.font = 'bold 14px system-ui';
      ctx.fillText('B (z-axis)', zEnd.x + 5, zEnd.y - 5);

      // Draw magnetic field indicators
      if (showBField) {
        ctx.fillStyle = 'rgba(96, 165, 250, 0.4)';
        ctx.strokeStyle = 'rgba(96, 165, 250, 0.6)';
        ctx.lineWidth = 1;

        // Draw B-field arrows at various positions
        for (let gx = -150; gx <= 150; gx += 75) {
          for (let gy = -100; gy <= 100; gy += 75) {
            const p1 = project3D(gx, gy, -100, viewRotation);
            const p2 = project3D(gx, gy, -60, viewRotation);

            // Draw small arrow indicating B direction
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Arrow head
            ctx.beginPath();
            ctx.arc(p2.x, p2.y, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // B-field direction label
        ctx.fillStyle = '#60a5fa';
        ctx.font = 'bold 12px system-ui';
        ctx.fillText('B-field direction (out of screen when theta=0)', 20, 30);
      }

      // Draw particle trail
      if (showTrail && trail.length > 1) {
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < trail.length; i++) {
          const alpha = i / trail.length;
          const p1 = project3D(trail[i - 1].x, trail[i - 1].y, trail[i - 1].z, viewRotation);
          const p2 = project3D(trail[i].x, trail[i].y, trail[i].z, viewRotation);

          ctx.strokeStyle = chargeSign > 0
            ? `rgba(239, 68, 68, ${alpha * 0.8})`  // Red for positive
            : `rgba(96, 165, 250, ${alpha * 0.8})`; // Blue for negative

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Draw particle
      const pProj = project3D(particlePos.x, particlePos.y, particlePos.z, viewRotation);
      const particleRadius = 12 * pProj.scale;

      // Particle glow
      const glowGradient = ctx.createRadialGradient(pProj.x, pProj.y, 0, pProj.x, pProj.y, particleRadius * 2);
      if (chargeSign > 0) {
        glowGradient.addColorStop(0, 'rgba(239, 68, 68, 0.8)');
        glowGradient.addColorStop(0.5, 'rgba(239, 68, 68, 0.3)');
        glowGradient.addColorStop(1, 'rgba(239, 68, 68, 0)');
      } else {
        glowGradient.addColorStop(0, 'rgba(96, 165, 250, 0.8)');
        glowGradient.addColorStop(0.5, 'rgba(96, 165, 250, 0.3)');
        glowGradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
      }
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(pProj.x, pProj.y, particleRadius * 2, 0, Math.PI * 2);
      ctx.fill();

      // Particle body
      const particleGradient = ctx.createRadialGradient(
        pProj.x - particleRadius * 0.3, pProj.y - particleRadius * 0.3, 0,
        pProj.x, pProj.y, particleRadius
      );
      if (chargeSign > 0) {
        particleGradient.addColorStop(0, '#ff6b6b');
        particleGradient.addColorStop(1, '#dc2626');
      } else {
        particleGradient.addColorStop(0, '#93c5fd');
        particleGradient.addColorStop(1, '#2563eb');
      }
      ctx.fillStyle = particleGradient;
      ctx.beginPath();
      ctx.arc(pProj.x, pProj.y, particleRadius, 0, Math.PI * 2);
      ctx.fill();

      // Charge symbol
      ctx.fillStyle = 'white';
      ctx.font = `bold ${Math.max(12, particleRadius)}px system-ui`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(chargeSign > 0 ? '+' : '-', pProj.x, pProj.y);

      // Draw velocity vector
      if (showVelocity) {
        const velScale = 1.5;
        const velEnd = {
          x: particlePos.x + particleVel.x * velScale,
          y: particlePos.y + particleVel.y * velScale,
          z: particlePos.z + particleVel.z * velScale
        };
        draw3DArrow(particlePos, velEnd, '#34d399', 3);

        // Label
        const vProj = project3D(velEnd.x, velEnd.y, velEnd.z, viewRotation);
        ctx.fillStyle = '#34d399';
        ctx.font = 'bold 12px system-ui';
        ctx.textAlign = 'left';
        ctx.fillText('v', vProj.x + 8, vProj.y);
      }

      // Draw force vector (F = q * v x B)
      if (showForce && angle > 0) {
        const B = bFieldStrength * 0.01;
        const Fx = chargeSign * particleVel.y * B * 30;
        const Fy = -chargeSign * particleVel.x * B * 30;

        if (Math.abs(Fx) > 0.1 || Math.abs(Fy) > 0.1) {
          const forceEnd = {
            x: particlePos.x + Fx,
            y: particlePos.y + Fy,
            z: particlePos.z
          };
          draw3DArrow(particlePos, forceEnd, '#f59e0b', 3);

          // Label
          const fProj = project3D(forceEnd.x, forceEnd.y, forceEnd.z, viewRotation);
          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 12px system-ui';
          ctx.fillText('F', fProj.x + 8, fProj.y);
        }
      }

      // Legend
      ctx.textAlign = 'left';
      ctx.font = '11px system-ui';
      let legendY = height - 80;

      ctx.fillStyle = '#34d399';
      ctx.fillText('Green arrow: Velocity (v)', 20, legendY);
      legendY += 16;

      ctx.fillStyle = '#f59e0b';
      ctx.fillText('Orange arrow: Lorentz Force (F = qv x B)', 20, legendY);
      legendY += 16;

      ctx.fillStyle = '#60a5fa';
      ctx.fillText('Blue: Magnetic field direction (B along z-axis)', 20, legendY);
      legendY += 16;

      ctx.fillStyle = chargeSign > 0 ? '#ef4444' : '#60a5fa';
      ctx.fillText(`${chargeSign > 0 ? 'Red' : 'Blue'}: ${chargeSign > 0 ? 'Positive' : 'Negative'} charge particle`, 20, legendY);

      // Time display
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = '12px JetBrains Mono, monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`t = ${time.toFixed(2)}s`, width - 20, 30);

      // Update info panel
      updateInfo();
    };

    // Animation loop
    const animate = () => {
      updatePhysics();
      render();
      if (isPlaying) {
        animationId = requestAnimationFrame(animate);
      }
    };

    // Event listeners
    velSlider.addEventListener('input', (e) => {
      velocity = parseFloat(e.target.value);
      document.getElementById(`vel-val-${containerId}`).textContent = velocity;
      initParticle();
      render();
    });

    angleSlider.addEventListener('input', (e) => {
      angle = parseFloat(e.target.value);
      document.getElementById(`angle-val-${containerId}`).textContent = angle;
      initParticle();
      render();
    });

    bfieldSlider.addEventListener('input', (e) => {
      bFieldStrength = parseFloat(e.target.value);
      document.getElementById(`bfield-val-${containerId}`).textContent = bFieldStrength;
      render();
    });

    viewSlider.addEventListener('input', (e) => {
      viewRotation = parseFloat(e.target.value);
      document.getElementById(`view-val-${containerId}`).textContent = viewRotation;
      render();
    });

    chargeToggle.addEventListener('click', () => {
      chargeSign *= -1;
      if (chargeSign > 0) {
        chargeToggle.textContent = '+ Positive';
        chargeToggle.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
      } else {
        chargeToggle.textContent = '- Negative';
        chargeToggle.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
      }
      initParticle();
      render();
    });

    showVCheck.addEventListener('change', (e) => { showVelocity = e.target.checked; render(); });
    showFCheck.addEventListener('change', (e) => { showForce = e.target.checked; render(); });
    showBCheck.addEventListener('change', (e) => { showBField = e.target.checked; render(); });
    showTrailCheck.addEventListener('change', (e) => { showTrail = e.target.checked; render(); });

    playBtn.addEventListener('click', () => {
      if (!isPlaying) {
        isPlaying = true;
        animate();
      }
    });

    pauseBtn.addEventListener('click', () => {
      isPlaying = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    });

    resetBtn.addEventListener('click', () => {
      isPlaying = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      initParticle();
      render();
    });

    // Preset handlers
    presetCircular.addEventListener('click', () => {
      angleSlider.value = 90;
      angle = 90;
      document.getElementById(`angle-val-${containerId}`).textContent = '90';
      velSlider.value = 50;
      velocity = 50;
      document.getElementById(`vel-val-${containerId}`).textContent = '50';
      initParticle();
      render();
    });

    presetHelical.addEventListener('click', () => {
      angleSlider.value = 45;
      angle = 45;
      document.getElementById(`angle-val-${containerId}`).textContent = '45';
      velSlider.value = 50;
      velocity = 50;
      document.getElementById(`vel-val-${containerId}`).textContent = '50';
      initParticle();
      render();
    });

    presetStraight.addEventListener('click', () => {
      angleSlider.value = 0;
      angle = 0;
      document.getElementById(`angle-val-${containerId}`).textContent = '0';
      velSlider.value = 50;
      velocity = 50;
      document.getElementById(`vel-val-${containerId}`).textContent = '50';
      initParticle();
      render();
    });

    presetCyclotron.addEventListener('click', () => {
      angleSlider.value = 90;
      angle = 90;
      document.getElementById(`angle-val-${containerId}`).textContent = '90';
      velSlider.value = 30;
      velocity = 30;
      document.getElementById(`vel-val-${containerId}`).textContent = '30';
      bfieldSlider.value = 80;
      bFieldStrength = 80;
      document.getElementById(`bfield-val-${containerId}`).textContent = '80';
      chargeSign = 1;
      chargeToggle.textContent = '+ Positive';
      chargeToggle.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
      initParticle();
      isPlaying = true;
      animate();
    });

    // Initialize
    initParticle();
    render();
  },

  // ============================================
  // CRYSTAL FIELD THEORY VISUALIZER
  // ============================================
  crystalFieldTheory(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container';

    const metalIons = {
      'Fe2+': { name: 'Fe2+', dElectrons: 6, displayName: 'Fe2+' },
      'Fe3+': { name: 'Fe3+', dElectrons: 5, displayName: 'Fe3+' },
      'Co2+': { name: 'Co2+', dElectrons: 7, displayName: 'Co2+' },
      'Co3+': { name: 'Co3+', dElectrons: 6, displayName: 'Co3+' },
      'Ni2+': { name: 'Ni2+', dElectrons: 8, displayName: 'Ni2+' },
      'Cu2+': { name: 'Cu2+', dElectrons: 9, displayName: 'Cu2+' },
      'Mn2+': { name: 'Mn2+', dElectrons: 5, displayName: 'Mn2+' },
      'Cr3+': { name: 'Cr3+', dElectrons: 3, displayName: 'Cr3+' },
      'Ti3+': { name: 'Ti3+', dElectrons: 1, displayName: 'Ti3+' },
      'V3+': { name: 'V3+', dElectrons: 2, displayName: 'V3+' }
    };

    const ligands = {
      'I-': { name: 'I-', strength: 10, displayName: 'I-' },
      'Br-': { name: 'Br-', strength: 20, displayName: 'Br-' },
      'Cl-': { name: 'Cl-', strength: 30, displayName: 'Cl-' },
      'F-': { name: 'F-', strength: 40, displayName: 'F-' },
      'OH-': { name: 'OH-', strength: 45, displayName: 'OH-' },
      'H2O': { name: 'H2O', strength: 50, displayName: 'H2O' },
      'NH3': { name: 'NH3', strength: 65, displayName: 'NH3' },
      'en': { name: 'en', strength: 75, displayName: 'en' },
      'NO2-': { name: 'NO2-', strength: 82, displayName: 'NO2-' },
      'CN-': { name: 'CN-', strength: 95, displayName: 'CN-' }
    };

    const colorData = {
      getObservedColor: (deltaValue) => {
        const wavenumber = 10000 + deltaValue * 250;
        const wavelength = 10000000 / wavenumber;
        if (wavelength > 700) return { absorbed: 'Red', observed: 'Green', hex: '#22c55e', absorbedHex: '#ef4444' };
        if (wavelength > 620) return { absorbed: 'Orange', observed: 'Blue', hex: '#3b82f6', absorbedHex: '#f97316' };
        if (wavelength > 580) return { absorbed: 'Yellow', observed: 'Violet', hex: '#8b5cf6', absorbedHex: '#eab308' };
        if (wavelength > 530) return { absorbed: 'Green', observed: 'Purple/Red', hex: '#d946ef', absorbedHex: '#22c55e' };
        if (wavelength > 490) return { absorbed: 'Cyan', observed: 'Red-Orange', hex: '#f97316', absorbedHex: '#06b6d4' };
        if (wavelength > 450) return { absorbed: 'Blue', observed: 'Orange', hex: '#fb923c', absorbedHex: '#3b82f6' };
        if (wavelength > 400) return { absorbed: 'Violet', observed: 'Yellow-Green', hex: '#a3e635', absorbedHex: '#8b5cf6' };
        return { absorbed: 'UV', observed: 'Colorless', hex: '#ffffff', absorbedHex: '#a855f7' };
      }
    };

    const mainLayout = document.createElement('div');
    mainLayout.style.cssText = 'display: grid; grid-template-columns: 1fr 340px; gap: 20px; width: 100%;';
    container.appendChild(mainLayout);

    const canvasArea = document.createElement('div');
    canvasArea.style.cssText = 'display: flex; flex-direction: column; gap: 10px;';
    mainLayout.appendChild(canvasArea);

    const { canvas, ctx, width, height } = this.createCanvas(canvasArea, 520, 450);

    const rightPanel = document.createElement('div');
    rightPanel.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    mainLayout.appendChild(rightPanel);

    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    controls.style.cssText = 'display: flex; flex-direction: column; gap: 10px;';
    rightPanel.appendChild(controls);

    const metalLabel = document.createElement('label');
    metalLabel.textContent = 'Metal Ion:';
    metalLabel.style.cssText = 'font-size: 13px; color: var(--text-secondary, #a1a1aa); margin-bottom: 2px;';
    controls.appendChild(metalLabel);

    const metalSelect = document.createElement('select');
    metalSelect.className = 'anim-select';
    metalSelect.style.cssText = 'padding: 8px 12px; background: var(--bg-secondary, #18181b); color: var(--text-primary, #fafafa); border: 1px solid var(--border-primary, #27272a); border-radius: 6px; font-size: 14px; cursor: pointer; width: 100%;';
    Object.keys(metalIons).forEach(key => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = metalIons[key].displayName + ' (d' + metalIons[key].dElectrons + ')';
      metalSelect.appendChild(option);
    });
    metalSelect.value = 'Fe2+';
    controls.appendChild(metalSelect);

    const geomLabel = document.createElement('label');
    geomLabel.textContent = 'Geometry:';
    geomLabel.style.cssText = 'font-size: 13px; color: var(--text-secondary, #a1a1aa); margin-bottom: 2px; margin-top: 8px;';
    controls.appendChild(geomLabel);

    const geomSelect = document.createElement('select');
    geomSelect.className = 'anim-select';
    geomSelect.style.cssText = 'padding: 8px 12px; background: var(--bg-secondary, #18181b); color: var(--text-primary, #fafafa); border: 1px solid var(--border-primary, #27272a); border-radius: 6px; font-size: 14px; cursor: pointer; width: 100%;';
    ['Octahedral', 'Tetrahedral', 'Square Planar'].forEach(geom => {
      const option = document.createElement('option');
      option.value = geom;
      option.textContent = geom;
      geomSelect.appendChild(option);
    });
    controls.appendChild(geomSelect);

    const ligandLabel = document.createElement('label');
    ligandLabel.textContent = 'Ligand (Spectrochemical Series):';
    ligandLabel.style.cssText = 'font-size: 13px; color: var(--text-secondary, #a1a1aa); margin-bottom: 2px; margin-top: 8px;';
    controls.appendChild(ligandLabel);

    const ligandSelect = document.createElement('select');
    ligandSelect.className = 'anim-select';
    ligandSelect.style.cssText = 'padding: 8px 12px; background: var(--bg-secondary, #18181b); color: var(--text-primary, #fafafa); border: 1px solid var(--border-primary, #27272a); border-radius: 6px; font-size: 14px; cursor: pointer; width: 100%;';
    Object.keys(ligands).forEach(key => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = ligands[key].displayName;
      ligandSelect.appendChild(option);
    });
    ligandSelect.value = 'H2O';
    controls.appendChild(ligandSelect);

    const strengthWrapper = document.createElement('div');
    strengthWrapper.style.cssText = 'margin-top: 8px;';
    const strengthLabel = document.createElement('label');
    strengthLabel.innerHTML = 'Field Strength: <span id="strength-val-' + containerId + '" style="color: var(--text-primary);">50</span>%';
    strengthLabel.style.cssText = 'font-size: 13px; color: var(--text-secondary, #a1a1aa); display: block; margin-bottom: 4px;';
    strengthWrapper.appendChild(strengthLabel);

    const strengthSlider = document.createElement('input');
    strengthSlider.type = 'range';
    strengthSlider.min = 5;
    strengthSlider.max = 100;
    strengthSlider.value = 50;
    strengthSlider.style.cssText = 'width: 100%; cursor: pointer;';
    strengthWrapper.appendChild(strengthSlider);

    const strengthRange = document.createElement('div');
    strengthRange.style.cssText = 'display: flex; justify-content: space-between; font-size: 11px; color: var(--text-secondary, #71717a);';
    strengthRange.innerHTML = '<span>Weak Field</span><span>Strong Field</span>';
    strengthWrapper.appendChild(strengthRange);
    controls.appendChild(strengthWrapper);

    const spinWrapper = document.createElement('div');
    spinWrapper.style.cssText = 'display: flex; align-items: center; gap: 10px; margin-top: 10px; padding: 10px; background: var(--bg-tertiary, #27272a); border-radius: 6px;';

    const spinLabel = document.createElement('span');
    spinLabel.textContent = 'Force Spin State:';
    spinLabel.style.cssText = 'font-size: 13px; color: var(--text-secondary, #a1a1aa);';
    spinWrapper.appendChild(spinLabel);

    const spinAuto = document.createElement('button');
    spinAuto.textContent = 'Auto';
    spinAuto.style.cssText = 'padding: 4px 10px; background: var(--anim-blue, #60a5fa); color: #000; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 500;';
    spinWrapper.appendChild(spinAuto);

    const spinHigh = document.createElement('button');
    spinHigh.textContent = 'High';
    spinHigh.style.cssText = 'padding: 4px 10px; background: var(--bg-secondary, #18181b); color: var(--text-primary); border: 1px solid var(--border-primary, #27272a); border-radius: 4px; cursor: pointer; font-size: 12px;';
    spinWrapper.appendChild(spinHigh);

    const spinLow = document.createElement('button');
    spinLow.textContent = 'Low';
    spinLow.style.cssText = 'padding: 4px 10px; background: var(--bg-secondary, #18181b); color: var(--text-primary); border: 1px solid var(--border-primary, #27272a); border-radius: 4px; cursor: pointer; font-size: 12px;';
    spinWrapper.appendChild(spinLow);

    controls.appendChild(spinWrapper);

    const info = document.createElement('div');
    info.className = 'anim-info';
    info.style.cssText = 'background: var(--bg-secondary, #18181b); border-radius: 8px; padding: 14px; flex-grow: 1; font-size: 13px;';
    rightPanel.appendChild(info);

    const colorWheel = document.createElement('div');
    colorWheel.style.cssText = 'background: var(--bg-secondary, #18181b); border-radius: 8px; padding: 12px; margin-top: auto;';
    colorWheel.innerHTML = '<div style="font-size: 12px; color: var(--text-secondary, #a1a1aa); margin-bottom: 8px; font-weight: 500;">Color Prediction</div>';
    rightPanel.appendChild(colorWheel);

    const self = this;

    let state = {
      metalIon: 'Fe2+',
      geometry: 'Octahedral',
      ligand: 'H2O',
      fieldStrength: 50,
      spinMode: 'auto'
    };

    const updateSpinButtons = () => {
      const activeStyle = 'padding: 4px 10px; background: var(--anim-blue, #60a5fa); color: #000; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 500;';
      const inactiveStyle = 'padding: 4px 10px; background: var(--bg-secondary, #18181b); color: var(--text-primary); border: 1px solid var(--border-primary, #27272a); border-radius: 4px; cursor: pointer; font-size: 12px;';
      spinAuto.style.cssText = state.spinMode === 'auto' ? activeStyle : inactiveStyle;
      spinHigh.style.cssText = state.spinMode === 'high' ? activeStyle : inactiveStyle;
      spinLow.style.cssText = state.spinMode === 'low' ? activeStyle : inactiveStyle;
    };

    const calculateConfig = () => {
      const metal = metalIons[state.metalIon];
      const dElectrons = metal.dElectrons;
      const geometry = state.geometry;
      const strength = state.fieldStrength;
      const pairingThreshold = 48;
      let isHighSpin;

      if (state.spinMode === 'auto') {
        if (geometry === 'Octahedral' && dElectrons >= 4 && dElectrons <= 7) {
          isHighSpin = strength < pairingThreshold;
        } else if (geometry === 'Tetrahedral') {
          isHighSpin = true;
        } else if (geometry === 'Square Planar') {
          isHighSpin = false;
        } else {
          isHighSpin = true;
        }
      } else {
        isHighSpin = state.spinMode === 'high';
      }

      let t2g = [0, 0, 0], eg = [0, 0], e = [0, 0], t2 = [0, 0, 0], sqPlanar = [0, 0, 0, 0, 0];

      if (geometry === 'Octahedral') {
        let remaining = dElectrons;
        if (isHighSpin) {
          for (let i = 0; i < 3 && remaining > 0; i++) { t2g[i] = 1; remaining--; }
          for (let i = 0; i < 2 && remaining > 0; i++) { eg[i] = 1; remaining--; }
          for (let i = 0; i < 3 && remaining > 0; i++) { if (t2g[i] === 1) { t2g[i] = 2; remaining--; } }
          for (let i = 0; i < 2 && remaining > 0; i++) { if (eg[i] === 1) { eg[i] = 2; remaining--; } }
        } else {
          for (let i = 0; i < 3 && remaining > 0; i++) { t2g[i] = 1; remaining--; }
          for (let i = 0; i < 3 && remaining > 0; i++) { if (t2g[i] === 1) { t2g[i] = 2; remaining--; } }
          for (let i = 0; i < 2 && remaining > 0; i++) { eg[i] = 1; remaining--; }
          for (let i = 0; i < 2 && remaining > 0; i++) { if (eg[i] === 1) { eg[i] = 2; remaining--; } }
        }
      } else if (geometry === 'Tetrahedral') {
        let remaining = dElectrons;
        for (let i = 0; i < 2 && remaining > 0; i++) { e[i] = 1; remaining--; }
        for (let i = 0; i < 3 && remaining > 0; i++) { t2[i] = 1; remaining--; }
        for (let i = 0; i < 2 && remaining > 0; i++) { if (e[i] === 1) { e[i] = 2; remaining--; } }
        for (let i = 0; i < 3 && remaining > 0; i++) { if (t2[i] === 1) { t2[i] = 2; remaining--; } }
      } else if (geometry === 'Square Planar') {
        let remaining = dElectrons;
        for (let i = 0; i < 4 && remaining > 0; i++) { sqPlanar[0]++; remaining--; }
        for (let i = 0; i < 2 && remaining > 0; i++) { sqPlanar[1]++; remaining--; }
        for (let i = 0; i < 2 && remaining > 0; i++) { sqPlanar[2]++; remaining--; }
        for (let i = 0; i < 2 && remaining > 0; i++) { sqPlanar[3]++; remaining--; }
      }

      let unpaired = 0;
      if (geometry === 'Octahedral') {
        t2g.forEach(el => { if (el === 1) unpaired++; });
        eg.forEach(el => { if (el === 1) unpaired++; });
      } else if (geometry === 'Tetrahedral') {
        e.forEach(el => { if (el === 1) unpaired++; });
        t2.forEach(el => { if (el === 1) unpaired++; });
      } else {
        if (sqPlanar[0] === 1 || sqPlanar[0] === 3) unpaired++;
        if (sqPlanar[1] === 1) unpaired++;
        if (sqPlanar[2] === 1) unpaired++;
        if (sqPlanar[3] === 1) unpaired++;
      }

      let cfse = 0, pairingPenalty = 0;
      if (geometry === 'Octahedral') {
        const t2gElectrons = t2g.reduce((a, b) => a + b, 0);
        const egElectrons = eg.reduce((a, b) => a + b, 0);
        cfse = (-0.4 * t2gElectrons + 0.6 * egElectrons);
        if (!isHighSpin && dElectrons >= 4 && dElectrons <= 7) {
          const extraPairs = dElectrons - 3 - egElectrons;
          if (extraPairs > 0) pairingPenalty = extraPairs;
        }
      } else if (geometry === 'Tetrahedral') {
        const eElectrons = e.reduce((a, b) => a + b, 0);
        const t2Electrons = t2.reduce((a, b) => a + b, 0);
        cfse = (-0.6 * eElectrons + 0.4 * t2Electrons) * (4/9);
      } else {
        cfse = -0.5 * (strength / 100);
      }

      return { t2g, eg, e, t2, sqPlanar, isHighSpin, unpaired, cfse, pairingPenalty, dElectrons,
        magnetic: unpaired > 0 ? 'Paramagnetic' : 'Diamagnetic',
        magneticMoment: Math.sqrt(unpaired * (unpaired + 2)).toFixed(2) };
    };

    const draw = () => {
      const colors = self.getColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      const config = calculateConfig();
      const geometry = state.geometry;
      const delta = state.fieldStrength;

      const marginLeft = 80, marginRight = 40, marginTop = 60, marginBottom = 80;
      const diagramWidth = width - marginLeft - marginRight;
      const diagramHeight = height - marginTop - marginBottom;
      const baseY = marginTop + diagramHeight / 2;
      const splitAmount = (delta / 100) * 80;

      ctx.fillStyle = colors.text;
      ctx.font = 'bold 16px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Crystal Field Splitting - ' + geometry, width / 2, 28);

      ctx.font = '13px system-ui';
      ctx.fillStyle = colors.textSecondary;
      ctx.fillText(metalIons[state.metalIon].displayName + ' with ' + ligands[state.ligand].displayName + ' ligands', width / 2, 48);

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(marginLeft, baseY);
      ctx.lineTo(width - marginRight, baseY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = colors.textSecondary;
      ctx.font = '11px system-ui';
      ctx.textAlign = 'right';
      ctx.fillText('Barycenter', marginLeft - 8, baseY + 4);

      const freeIonX = marginLeft + 50;
      ctx.strokeStyle = colors.text;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(freeIonX - 30, baseY);
      ctx.lineTo(freeIonX + 30, baseY);
      ctx.stroke();

      ctx.fillStyle = colors.textSecondary;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('Free Ion', freeIonX, baseY + 25);
      ctx.fillText('(5 degenerate', freeIonX, baseY + 40);
      ctx.fillText('d orbitals)', freeIonX, baseY + 55);

      const drawOrbital = (x, y, electrons, label, color) => {
        const boxWidth = 32, boxHeight = 36;
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.strokeRect(x - boxWidth/2, y - boxHeight/2, boxWidth, boxHeight);
        if (electrons >= 1) {
          ctx.fillStyle = colors.text;
          ctx.font = '18px system-ui';
          ctx.textAlign = 'center';
          ctx.fillText('\u2191', electrons === 2 ? x - 6 : x, y + 5);
        }
        if (electrons === 2) { ctx.fillText('\u2193', x + 6, y + 5); }
        ctx.fillStyle = colors.textSecondary;
        ctx.font = '10px system-ui';
        ctx.fillText(label, x, y + boxHeight/2 + 14);
      };

      const splitX = marginLeft + diagramWidth * 0.65;

      if (geometry === 'Octahedral') {
        const egY = baseY - splitAmount * 0.6;
        const t2gY = baseY + splitAmount * 0.4;

        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(splitX - 60, egY);
        ctx.lineTo(splitX + 60, egY);
        ctx.stroke();

        ctx.strokeStyle = '#60a5fa';
        ctx.beginPath();
        ctx.moveTo(splitX - 80, t2gY);
        ctx.lineTo(splitX + 80, t2gY);
        ctx.stroke();

        drawOrbital(splitX - 25, egY, config.eg[0], 'dx\u00B2-y\u00B2', '#ef4444');
        drawOrbital(splitX + 25, egY, config.eg[1], 'dz\u00B2', '#ef4444');
        drawOrbital(splitX - 45, t2gY, config.t2g[0], 'dxy', '#60a5fa');
        drawOrbital(splitX, t2gY, config.t2g[1], 'dyz', '#60a5fa');
        drawOrbital(splitX + 45, t2gY, config.t2g[2], 'dxz', '#60a5fa');

        ctx.strokeStyle = colors.yellow;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(splitX + 95, t2gY);
        ctx.lineTo(splitX + 95, egY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(splitX + 95, egY);
        ctx.lineTo(splitX + 90, egY + 8);
        ctx.lineTo(splitX + 100, egY + 8);
        ctx.closePath();
        ctx.fillStyle = colors.yellow;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(splitX + 95, t2gY);
        ctx.lineTo(splitX + 90, t2gY - 8);
        ctx.lineTo(splitX + 100, t2gY - 8);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = colors.yellow;
        ctx.font = 'bold 14px system-ui';
        ctx.textAlign = 'left';
        ctx.fillText('\u0394\u2080', splitX + 105, baseY + 5);
        ctx.font = '12px system-ui';
        ctx.fillText('(10Dq)', splitX + 103, baseY + 22);

        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 13px system-ui';
        ctx.fillText('e\u2099 (+0.6\u0394\u2080)', splitX + 70, egY - 15);
        ctx.fillStyle = '#60a5fa';
        ctx.fillText('t\u2082\u2099 (-0.4\u0394\u2080)', splitX + 90, t2gY + 50);

      } else if (geometry === 'Tetrahedral') {
        const t2Y = baseY - splitAmount * 0.4 * (4/9);
        const eY = baseY + splitAmount * 0.6 * (4/9);

        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(splitX - 80, t2Y);
        ctx.lineTo(splitX + 80, t2Y);
        ctx.stroke();

        ctx.strokeStyle = '#60a5fa';
        ctx.beginPath();
        ctx.moveTo(splitX - 50, eY);
        ctx.lineTo(splitX + 50, eY);
        ctx.stroke();

        drawOrbital(splitX - 45, t2Y, config.t2[0], 'dxy', '#ef4444');
        drawOrbital(splitX, t2Y, config.t2[1], 'dyz', '#ef4444');
        drawOrbital(splitX + 45, t2Y, config.t2[2], 'dxz', '#ef4444');
        drawOrbital(splitX - 25, eY, config.e[0], 'dx\u00B2-y\u00B2', '#60a5fa');
        drawOrbital(splitX + 25, eY, config.e[1], 'dz\u00B2', '#60a5fa');

        ctx.strokeStyle = colors.yellow;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(splitX + 95, eY);
        ctx.lineTo(splitX + 95, t2Y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(splitX + 95, t2Y);
        ctx.lineTo(splitX + 90, t2Y + 8);
        ctx.lineTo(splitX + 100, t2Y + 8);
        ctx.closePath();
        ctx.fillStyle = colors.yellow;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(splitX + 95, eY);
        ctx.lineTo(splitX + 90, eY - 8);
        ctx.lineTo(splitX + 100, eY - 8);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = colors.yellow;
        ctx.font = 'bold 14px system-ui';
        ctx.textAlign = 'left';
        ctx.fillText('\u0394\u209C', splitX + 105, baseY - 5);
        ctx.font = '11px system-ui';
        ctx.fillText('(\u2248 4/9\u0394\u2080)', splitX + 103, baseY + 12);

        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 13px system-ui';
        ctx.fillText('t\u2082 (+0.4\u0394\u209C)', splitX + 90, t2Y - 15);
        ctx.fillStyle = '#60a5fa';
        ctx.fillText('e (-0.6\u0394\u209C)', splitX + 55, eY + 45);

      } else if (geometry === 'Square Planar') {
        const levels = [
          { y: baseY + splitAmount * 0.6, electrons: Math.min(config.sqPlanar[0], 4), label: 'dxz, dyz', color: '#60a5fa', double: true },
          { y: baseY + splitAmount * 0.2, electrons: Math.min(config.sqPlanar[1], 2), label: 'dz\u00B2', color: '#22c55e', double: false },
          { y: baseY - splitAmount * 0.2, electrons: Math.min(config.sqPlanar[2], 2), label: 'dxy', color: '#f59e0b', double: false },
          { y: baseY - splitAmount * 0.7, electrons: Math.min(config.sqPlanar[3], 2), label: 'dx\u00B2-y\u00B2', color: '#ef4444', double: false }
        ];

        levels.forEach((level) => {
          ctx.strokeStyle = level.color;
          ctx.lineWidth = 2;
          const lineWidth = level.double ? 80 : 40;
          ctx.beginPath();
          ctx.moveTo(splitX - lineWidth/2, level.y);
          ctx.lineTo(splitX + lineWidth/2, level.y);
          ctx.stroke();

          if (level.double) {
            const e1 = Math.min(level.electrons, 2);
            const e2 = Math.max(0, level.electrons - 2);
            drawOrbital(splitX - 22, level.y, e1, '', level.color);
            drawOrbital(splitX + 22, level.y, e2, '', level.color);
          } else {
            drawOrbital(splitX, level.y, level.electrons, '', level.color);
          }

          ctx.fillStyle = level.color;
          ctx.font = '11px system-ui';
          ctx.textAlign = 'left';
          ctx.fillText(level.label, splitX + (level.double ? 55 : 30), level.y + 4);
        });

        ctx.fillStyle = colors.yellow;
        ctx.font = 'bold 12px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('Large \u0394', splitX + 100, baseY);
        ctx.font = '10px system-ui';
        ctx.fillText('(Strong field)', splitX + 100, baseY + 14);
      }

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.moveTo(freeIonX + 35, baseY);
      ctx.lineTo(splitX - 90, baseY);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;

      const colorInfo = colorData.getObservedColor(state.fieldStrength);

      info.innerHTML = '<div style="display: grid; gap: 8px;">' +
        '<div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-primary, #27272a); padding-bottom: 8px;"><span style="color: var(--text-secondary);">Metal Ion:</span><span style="color: var(--text-primary); font-weight: 500;">' + metalIons[state.metalIon].displayName + '</span></div>' +
        '<div style="display: flex; justify-content: space-between;"><span style="color: var(--text-secondary);">d-Electrons:</span><span style="color: var(--text-primary); font-weight: 500;">d<sup>' + config.dElectrons + '</sup></span></div>' +
        '<div style="display: flex; justify-content: space-between;"><span style="color: var(--text-secondary);">Spin State:</span><span style="color: ' + (config.isHighSpin ? '#f97316' : '#22c55e') + '; font-weight: 500;">' + (config.isHighSpin ? 'High Spin' : 'Low Spin') + '</span></div>' +
        '<div style="display: flex; justify-content: space-between;"><span style="color: var(--text-secondary);">Unpaired e<sup>-</sup>:</span><span style="color: var(--text-primary); font-weight: 500;">' + config.unpaired + '</span></div>' +
        '<div style="display: flex; justify-content: space-between;"><span style="color: var(--text-secondary);">Magnetic:</span><span style="color: ' + (config.unpaired > 0 ? '#f97316' : '#22c55e') + '; font-weight: 500;">' + config.magnetic + '</span></div>' +
        '<div style="display: flex; justify-content: space-between;"><span style="color: var(--text-secondary);">\u03BC (B.M.):</span><span style="color: var(--text-primary); font-weight: 500;">' + config.magneticMoment + '</span></div>' +
        '<div style="display: flex; justify-content: space-between; border-top: 1px solid var(--border-primary, #27272a); padding-top: 8px; margin-top: 4px;"><span style="color: var(--text-secondary);">CFSE:</span><span style="color: var(--anim-blue, #60a5fa); font-weight: 500;">' + config.cfse.toFixed(2) + '\u0394' + (geometry === 'Tetrahedral' ? '\u209C' : '\u2080') + (config.pairingPenalty > 0 ? ' + ' + config.pairingPenalty + 'P' : '') + '</span></div>' +
        '</div>';

      colorWheel.innerHTML = '<div style="font-size: 12px; color: var(--text-secondary, #a1a1aa); margin-bottom: 10px; font-weight: 500;">Color Prediction</div>' +
        '<div style="display: flex; gap: 12px; align-items: center;">' +
        '<div style="text-align: center;"><div style="width: 40px; height: 40px; border-radius: 50%; background: ' + colorInfo.absorbedHex + '; margin: 0 auto 4px; border: 2px solid var(--border-primary, #27272a);"></div><div style="font-size: 10px; color: var(--text-secondary);">Absorbed</div><div style="font-size: 11px; color: var(--text-primary);">' + colorInfo.absorbed + '</div></div>' +
        '<div style="color: var(--text-secondary); font-size: 18px;">\u2192</div>' +
        '<div style="text-align: center;"><div style="width: 40px; height: 40px; border-radius: 50%; background: ' + colorInfo.hex + '; margin: 0 auto 4px; border: 2px solid var(--border-primary, #27272a);"></div><div style="font-size: 10px; color: var(--text-secondary);">Observed</div><div style="font-size: 11px; color: var(--text-primary); font-weight: 500;">' + colorInfo.observed + '</div></div>' +
        '</div>' +
        (config.dElectrons === 0 || config.dElectrons === 10 ? '<div style="margin-top: 8px; font-size: 11px; color: #f59e0b;">d\u2070 or d\u00B9\u2070: No d-d transition possible - colorless!</div>' : '');
    };

    const eduNote = document.createElement('div');
    eduNote.style.cssText = 'grid-column: 1 / -1; background: var(--bg-tertiary, #1f1f23); border-radius: 8px; padding: 12px 16px; margin-top: 8px; font-size: 12px; color: var(--text-secondary, #a1a1aa);';
    eduNote.innerHTML = '<div style="display: flex; gap: 20px; flex-wrap: wrap;">' +
      '<div><strong style="color: var(--text-primary);">Octahedral:</strong> t\u2082g (lower) - dxy, dyz, dxz point <em>between</em> axes</div>' +
      '<div><strong style="color: var(--text-primary);">Tetrahedral:</strong> \u0394t \u2248 4/9 \u0394\u2080 (always high spin)</div>' +
      '<div><strong style="color: var(--text-primary);">Spectrochemical Series:</strong> I\u207B < Br\u207B < Cl\u207B < F\u207B < OH\u207B < H\u2082O < NH\u2083 < en < NO\u2082\u207B < CN\u207B</div>' +
      '</div>';
    mainLayout.appendChild(eduNote);

    metalSelect.addEventListener('change', () => { state.metalIon = metalSelect.value; draw(); });
    geomSelect.addEventListener('change', () => { state.geometry = geomSelect.value; draw(); });
    ligandSelect.addEventListener('change', () => {
      state.ligand = ligandSelect.value;
      state.fieldStrength = ligands[ligandSelect.value].strength;
      strengthSlider.value = state.fieldStrength;
      document.getElementById('strength-val-' + containerId).textContent = state.fieldStrength;
      draw();
    });
    strengthSlider.addEventListener('input', () => {
      state.fieldStrength = parseInt(strengthSlider.value);
      document.getElementById('strength-val-' + containerId).textContent = state.fieldStrength;
      draw();
    });
    spinAuto.addEventListener('click', () => { state.spinMode = 'auto'; updateSpinButtons(); draw(); });
    spinHigh.addEventListener('click', () => { state.spinMode = 'high'; updateSpinButtons(); draw(); });
    spinLow.addEventListener('click', () => { state.spinMode = 'low'; updateSpinButtons(); draw(); });

    const handleResize = () => {
      if (window.innerWidth < 900) {
        mainLayout.style.gridTemplateColumns = '1fr';
        canvasArea.style.order = '1';
        rightPanel.style.order = '2';
      } else {
        mainLayout.style.gridTemplateColumns = '1fr 340px';
        canvasArea.style.order = '';
        rightPanel.style.order = '';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    draw();
  },

  // ============================================
  // SLOPE FIELD (DIRECTION FIELD) VISUALIZER
  // Interactive slope field for differential equations
  // ============================================
  slopeField(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    container.className = 'animation-container slope-field-visualizer';

    const self = this;

    // Main layout
    const mainWrapper = document.createElement('div');
    mainWrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px; width: 100%;';
    container.appendChild(mainWrapper);

    // Canvas container
    const canvasContainer = document.createElement('div');
    canvasContainer.style.cssText = 'position: relative; border-radius: 8px; overflow: hidden;';
    mainWrapper.appendChild(canvasContainer);

    const { canvas, ctx, width, height } = this.createCanvas(canvasContainer, 600, 450);
    canvas.style.cssText = 'display: block; cursor: crosshair; border-radius: 8px;';

    // Equation display
    const equationDisplay = document.createElement('div');
    equationDisplay.style.cssText = 'padding: 12px 16px; background: linear-gradient(135deg, #1e3a5f, #0f172a); border-radius: 8px; text-align: center; font-size: 18px; font-family: "Times New Roman", serif; color: #fafafa;';
    mainWrapper.appendChild(equationDisplay);

    // Controls panel
    const controlsPanel = document.createElement('div');
    controlsPanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 10px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; align-items: center;';
    mainWrapper.appendChild(controlsPanel);

    // DE selector
    const deGroup = document.createElement('div');
    deGroup.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';
    const deLabel = document.createElement('label');
    deLabel.style.cssText = 'font-size: 11px; color: var(--text-secondary, #a1a1aa);';
    deLabel.textContent = 'Differential Equation';
    const deSelect = document.createElement('select');
    deSelect.style.cssText = 'padding: 6px 10px; border-radius: 6px; background: #27272a; color: #fafafa; border: 1px solid #3f3f46; font-size: 13px; min-width: 160px;';

    const equations = [
      { id: 'y', label: 'dy/dx = y', fn: (x, y) => y },
      { id: 'x+y', label: 'dy/dx = x + y', fn: (x, y) => x + y },
      { id: 'x2-y', label: 'dy/dx = x\u00B2 - y', fn: (x, y) => x * x - y },
      { id: 'sinx', label: 'dy/dx = sin(x)', fn: (x, y) => Math.sin(x) },
      { id: 'y-x', label: 'dy/dx = y - x', fn: (x, y) => y - x },
      { id: 'xy', label: 'dy/dx = xy', fn: (x, y) => x * y },
      { id: '-y/x', label: 'dy/dx = -y/x', fn: (x, y) => x !== 0 ? -y / x : 0 },
      { id: 'cosx', label: 'dy/dx = cos(x)', fn: (x, y) => Math.cos(x) },
      { id: '1+y2', label: 'dy/dx = 1 + y\u00B2', fn: (x, y) => 1 + y * y },
      { id: 'x-y2', label: 'dy/dx = x - y\u00B2', fn: (x, y) => x - y * y }
    ];

    equations.forEach(eq => {
      const option = document.createElement('option');
      option.value = eq.id;
      option.textContent = eq.label;
      deSelect.appendChild(option);
    });

    deGroup.appendChild(deLabel);
    deGroup.appendChild(deSelect);
    controlsPanel.appendChild(deGroup);

    // Grid density slider
    const densityGroup = document.createElement('div');
    densityGroup.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';
    const densityLabel = document.createElement('label');
    densityLabel.style.cssText = 'font-size: 11px; color: var(--text-secondary, #a1a1aa);';
    densityLabel.innerHTML = 'Grid Density: <span id="density-val-' + containerId + '">15</span>';
    const densitySlider = document.createElement('input');
    densitySlider.type = 'range';
    densitySlider.min = '8';
    densitySlider.max = '30';
    densitySlider.value = '15';
    densitySlider.style.cssText = 'width: 120px;';
    densityGroup.appendChild(densityLabel);
    densityGroup.appendChild(densitySlider);
    controlsPanel.appendChild(densityGroup);

    // Segment length slider
    const segLenGroup = document.createElement('div');
    segLenGroup.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';
    const segLenLabel = document.createElement('label');
    segLenLabel.style.cssText = 'font-size: 11px; color: var(--text-secondary, #a1a1aa);';
    segLenLabel.innerHTML = 'Segment Length: <span id="seglen-val-' + containerId + '">12</span>';
    const segLenSlider = document.createElement('input');
    segLenSlider.type = 'range';
    segLenSlider.min = '5';
    segLenSlider.max = '25';
    segLenSlider.value = '12';
    segLenSlider.style.cssText = 'width: 100px;';
    segLenGroup.appendChild(segLenLabel);
    segLenGroup.appendChild(segLenSlider);
    controlsPanel.appendChild(segLenGroup);

    // Buttons
    const btnGroup = document.createElement('div');
    btnGroup.style.cssText = 'display: flex; gap: 8px; margin-left: auto;';

    const clearBtn = document.createElement('button');
    clearBtn.className = 'anim-btn';
    clearBtn.textContent = 'Clear Curves';
    clearBtn.style.cssText = 'padding: 8px 14px; font-size: 12px; background: #3f3f46;';
    btnGroup.appendChild(clearBtn);

    const toggleGridBtn = document.createElement('button');
    toggleGridBtn.className = 'anim-btn';
    toggleGridBtn.textContent = 'Toggle Grid';
    toggleGridBtn.style.cssText = 'padding: 8px 14px; font-size: 12px; background: #3f3f46;';
    btnGroup.appendChild(toggleGridBtn);

    controlsPanel.appendChild(btnGroup);

    // Info panel
    const infoPanel = document.createElement('div');
    infoPanel.style.cssText = 'display: flex; gap: 16px; padding: 10px 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; font-size: 12px; color: var(--text-secondary, #a1a1aa);';
    mainWrapper.appendChild(infoPanel);

    const clickInfo = document.createElement('span');
    clickInfo.innerHTML = '<strong style="color: #34d399;">Click</strong> anywhere to draw solution curve through that point';
    infoPanel.appendChild(clickInfo);

    const curveCount = document.createElement('span');
    curveCount.id = 'curve-count-' + containerId;
    curveCount.style.cssText = 'margin-left: auto;';
    curveCount.textContent = 'Curves: 0';
    infoPanel.appendChild(curveCount);

    // State
    let gridDensity = 15;
    let segmentLength = 12;
    let showGrid = true;
    let solutionCurves = [];
    let currentEquation = equations[0];

    // Coordinate system
    const margin = 40;
    const xMin = -5, xMax = 5;
    const yMin = -4, yMax = 4;

    const toCanvasX = (x) => margin + (x - xMin) / (xMax - xMin) * (width - 2 * margin);
    const toCanvasY = (y) => margin + (yMax - y) / (yMax - yMin) * (height - 2 * margin);
    const fromCanvasX = (cx) => xMin + (cx - margin) / (width - 2 * margin) * (xMax - xMin);
    const fromCanvasY = (cy) => yMax - (cy - margin) / (height - 2 * margin) * (yMax - yMin);

    // Get slope color based on value
    const getSlopeColor = (slope) => {
      const maxSlope = 5;
      const normalized = Math.max(-1, Math.min(1, slope / maxSlope));

      if (Math.abs(normalized) < 0.1) {
        // Near zero - green
        return '#34d399';
      } else if (normalized > 0) {
        // Positive - orange to red
        const intensity = Math.min(1, normalized);
        const r = Math.round(245 + (239 - 245) * intensity);
        const g = Math.round(158 - 90 * intensity);
        const b = Math.round(11 + (68 - 11) * intensity);
        return `rgb(${r}, ${g}, ${b})`;
      } else {
        // Negative - blue
        const intensity = Math.min(1, -normalized);
        const r = Math.round(96 - 36 * intensity);
        const g = Math.round(165 - 40 * intensity);
        const b = Math.round(250);
        return `rgb(${r}, ${g}, ${b})`;
      }
    };

    // Compute solution curve using Euler's method
    const computeSolutionCurve = (x0, y0) => {
      const points = [];
      const dt = 0.02;
      const maxSteps = 500;

      // Forward integration
      let x = x0, y = y0;
      for (let i = 0; i < maxSteps; i++) {
        if (x < xMin - 1 || x > xMax + 1 || y < yMin - 2 || y > yMax + 2) break;
        if (!isFinite(y) || Math.abs(y) > 100) break;
        points.push({ x, y });
        const slope = currentEquation.fn(x, y);
        if (!isFinite(slope)) break;
        x += dt;
        y += slope * dt;
      }

      // Backward integration
      const backPoints = [];
      x = x0; y = y0;
      for (let i = 0; i < maxSteps; i++) {
        if (x < xMin - 1 || x > xMax + 1 || y < yMin - 2 || y > yMax + 2) break;
        if (!isFinite(y) || Math.abs(y) > 100) break;
        backPoints.unshift({ x, y });
        const slope = currentEquation.fn(x, y);
        if (!isFinite(slope)) break;
        x -= dt;
        y -= slope * dt;
      }

      // Combine (avoid duplicate at x0, y0)
      return [...backPoints.slice(0, -1), ...points];
    };

    // Curve colors for multiple solutions
    const curveColors = ['#34d399', '#f59e0b', '#a855f7', '#ef4444', '#06b6d4', '#ec4899', '#84cc16', '#f97316'];

    const render = () => {
      const colors = self.getColors();

      // Clear canvas
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Draw grid if enabled
      if (showGrid) {
        ctx.strokeStyle = colors.grid;
        ctx.lineWidth = 1;

        // Vertical grid lines
        for (let x = Math.ceil(xMin); x <= xMax; x++) {
          ctx.beginPath();
          ctx.moveTo(toCanvasX(x), margin);
          ctx.lineTo(toCanvasX(x), height - margin);
          ctx.stroke();
        }

        // Horizontal grid lines
        for (let y = Math.ceil(yMin); y <= yMax; y++) {
          ctx.beginPath();
          ctx.moveTo(margin, toCanvasY(y));
          ctx.lineTo(width - margin, toCanvasY(y));
          ctx.stroke();
        }
      }

      // Draw axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;

      // X-axis
      if (yMin <= 0 && yMax >= 0) {
        ctx.beginPath();
        ctx.moveTo(margin, toCanvasY(0));
        ctx.lineTo(width - margin, toCanvasY(0));
        ctx.stroke();
      }

      // Y-axis
      if (xMin <= 0 && xMax >= 0) {
        ctx.beginPath();
        ctx.moveTo(toCanvasX(0), margin);
        ctx.lineTo(toCanvasX(0), height - margin);
        ctx.stroke();
      }

      // Axis labels
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '12px system-ui';
      ctx.textAlign = 'center';

      // X-axis labels
      for (let x = Math.ceil(xMin); x <= xMax; x++) {
        if (x !== 0) {
          ctx.fillText(x.toString(), toCanvasX(x), height - margin + 18);
        }
      }

      // Y-axis labels
      ctx.textAlign = 'right';
      for (let y = Math.ceil(yMin); y <= yMax; y++) {
        if (y !== 0) {
          ctx.fillText(y.toString(), margin - 8, toCanvasY(y) + 4);
        }
      }

      // Origin label
      ctx.textAlign = 'right';
      ctx.fillText('0', toCanvasX(0) - 8, toCanvasY(0) + 15);

      // Axis names
      ctx.fillStyle = colors.text;
      ctx.font = 'italic 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('x', width - margin + 20, toCanvasY(0) + 4);
      ctx.fillText('y', toCanvasX(0), margin - 15);

      // Draw slope field
      const stepX = (xMax - xMin) / gridDensity;
      const stepY = (yMax - yMin) / gridDensity;

      for (let i = 0; i <= gridDensity; i++) {
        for (let j = 0; j <= gridDensity; j++) {
          const x = xMin + i * stepX;
          const y = yMin + j * stepY;
          const slope = currentEquation.fn(x, y);

          if (!isFinite(slope)) continue;

          const cx = toCanvasX(x);
          const cy = toCanvasY(y);

          // Calculate segment direction
          const angle = Math.atan(slope);
          const halfLen = segmentLength / 2;

          const dx = halfLen * Math.cos(angle);
          const dy = halfLen * Math.sin(angle);

          // Get color based on slope
          ctx.strokeStyle = getSlopeColor(slope);
          ctx.lineWidth = 1.5;

          ctx.beginPath();
          ctx.moveTo(cx - dx, cy + dy);
          ctx.lineTo(cx + dx, cy - dy);
          ctx.stroke();
        }
      }

      // Draw solution curves
      solutionCurves.forEach((curve, index) => {
        if (curve.points.length < 2) return;

        ctx.strokeStyle = curveColors[index % curveColors.length];
        ctx.lineWidth = 2.5;
        ctx.beginPath();

        let started = false;
        curve.points.forEach(pt => {
          const cx = toCanvasX(pt.x);
          const cy = toCanvasY(pt.y);

          if (cx >= margin && cx <= width - margin && cy >= margin && cy <= height - margin) {
            if (!started) {
              ctx.moveTo(cx, cy);
              started = true;
            } else {
              ctx.lineTo(cx, cy);
            }
          } else if (started) {
            // If we go out of bounds, start a new segment next time
            ctx.stroke();
            ctx.beginPath();
            started = false;
          }
        });

        ctx.stroke();

        // Draw starting point
        const startCx = toCanvasX(curve.x0);
        const startCy = toCanvasY(curve.y0);
        if (startCx >= margin && startCx <= width - margin && startCy >= margin && startCy <= height - margin) {
          ctx.fillStyle = curveColors[index % curveColors.length];
          ctx.beginPath();
          ctx.arc(startCx, startCy, 5, 0, Math.PI * 2);
          ctx.fill();

          // White border
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      // Draw legend for slope colors
      const legendX = width - margin - 80;
      const legendY = margin + 10;

      ctx.fillStyle = colors.bgSecondary + 'cc';
      ctx.fillRect(legendX - 10, legendY - 5, 90, 60);

      ctx.font = '10px system-ui';
      ctx.textAlign = 'left';
      ctx.fillStyle = colors.text;
      ctx.fillText('Slope:', legendX, legendY + 8);

      // Positive indicator
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(legendX, legendY + 15, 12, 10);
      ctx.fillStyle = colors.text;
      ctx.fillText('> 0', legendX + 18, legendY + 23);

      // Zero indicator
      ctx.fillStyle = '#34d399';
      ctx.fillRect(legendX, legendY + 28, 12, 10);
      ctx.fillStyle = colors.text;
      ctx.fillText('= 0', legendX + 18, legendY + 36);

      // Negative indicator
      ctx.fillStyle = '#60a5fa';
      ctx.fillRect(legendX, legendY + 41, 12, 10);
      ctx.fillStyle = colors.text;
      ctx.fillText('< 0', legendX + 18, legendY + 49);
    };

    const updateEquationDisplay = () => {
      const eq = currentEquation;
      equationDisplay.innerHTML = `<span style="font-style: italic;">dy/dx</span> = <span style="color: #60a5fa;">${eq.label.split('= ')[1]}</span>`;
    };

    // Event listeners
    deSelect.addEventListener('change', () => {
      const selected = equations.find(e => e.id === deSelect.value);
      if (selected) {
        currentEquation = selected;
        solutionCurves = [];
        document.getElementById('curve-count-' + containerId).textContent = 'Curves: 0';
        updateEquationDisplay();
        render();
      }
    });

    densitySlider.addEventListener('input', () => {
      gridDensity = parseInt(densitySlider.value);
      document.getElementById('density-val-' + containerId).textContent = gridDensity;
      render();
    });

    segLenSlider.addEventListener('input', () => {
      segmentLength = parseInt(segLenSlider.value);
      document.getElementById('seglen-val-' + containerId).textContent = segmentLength;
      render();
    });

    clearBtn.addEventListener('click', () => {
      solutionCurves = [];
      document.getElementById('curve-count-' + containerId).textContent = 'Curves: 0';
      render();
    });

    toggleGridBtn.addEventListener('click', () => {
      showGrid = !showGrid;
      toggleGridBtn.style.background = showGrid ? '#3f3f46' : 'linear-gradient(135deg, #3b82f6, #2563eb)';
      render();
    });

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      // Check if click is within the plot area
      if (cx < margin || cx > width - margin || cy < margin || cy > height - margin) return;

      const x0 = fromCanvasX(cx);
      const y0 = fromCanvasY(cy);

      const points = computeSolutionCurve(x0, y0);
      solutionCurves.push({ x0, y0, points });

      document.getElementById('curve-count-' + containerId).textContent = 'Curves: ' + solutionCurves.length;
      render();
    });

    // Initial render
    updateEquationDisplay();
    render();
  }
};

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Auto-initialize any animation containers
  document.querySelectorAll('[data-animation]').forEach(el => {
    const type = el.dataset.animation;
    if (JEEAnimations[type]) {
      // Check for new wrapper structure with content div
      const contentDiv = el.querySelector('.animation-content');
      if (contentDiv) {
        // New structure: wrapper -> header + content
        // Give content div a unique ID and initialize there
        contentDiv.id = el.id + '-content';
        JEEAnimations[type](contentDiv.id);
      } else {
        // Legacy structure: direct container
        JEEAnimations[type](el.id);
      }
    }
  });
});


// Add complexPlaneVisualizer to JEEAnimations
JEEAnimations.complexPlaneVisualizer = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  container.className = 'animation-container complex-plane-visualizer';

  const self = this;

  const mainWrapper = document.createElement('div');
  mainWrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px; width: 100%;';
  container.appendChild(mainWrapper);

  const canvasContainer = document.createElement('div');
  canvasContainer.style.cssText = 'position: relative; border-radius: 8px; overflow: hidden;';
  mainWrapper.appendChild(canvasContainer);

  const { canvas, ctx, width, height } = this.createCanvas(canvasContainer, 600, 500);
  canvas.style.cssText = 'display: block; cursor: crosshair; border-radius: 8px;';

  const inputModePanel = document.createElement('div');
  inputModePanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; align-items: center;';
  mainWrapper.appendChild(inputModePanel);

  const inputModeLabel = document.createElement('span');
  inputModeLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa); margin-right: 8px;';
  inputModeLabel.textContent = 'Input Mode:';
  inputModePanel.appendChild(inputModeLabel);

  let inputMode = 'cartesian';

  const cartesianBtn = document.createElement('button');
  cartesianBtn.className = 'anim-btn';
  cartesianBtn.textContent = 'Cartesian (a + bi)';
  cartesianBtn.style.cssText = 'padding: 6px 14px; font-size: 12px; background: linear-gradient(135deg, #3b82f6, #2563eb);';
  inputModePanel.appendChild(cartesianBtn);

  const polarBtn = document.createElement('button');
  polarBtn.className = 'anim-btn';
  polarBtn.textContent = 'Polar (r, theta)';
  polarBtn.style.cssText = 'padding: 6px 14px; font-size: 12px; background: #3f3f46;';
  inputModePanel.appendChild(polarBtn);

  const unitCircleToggle = document.createElement('label');
  unitCircleToggle.style.cssText = 'display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-secondary, #a1a1aa); cursor: pointer; margin-left: auto;';
  const unitCircleCheckbox = document.createElement('input');
  unitCircleCheckbox.type = 'checkbox';
  unitCircleCheckbox.checked = true;
  unitCircleToggle.appendChild(unitCircleCheckbox);
  unitCircleToggle.appendChild(document.createTextNode('Show Unit Circle'));
  inputModePanel.appendChild(unitCircleToggle);

  const cartesianControls = document.createElement('div');
  cartesianControls.style.cssText = 'display: flex; flex-wrap: wrap; gap: 16px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px;';
  mainWrapper.appendChild(cartesianControls);

  const realGroup = document.createElement('div');
  realGroup.style.cssText = 'display: flex; flex-direction: column; gap: 4px; min-width: 200px; flex: 1;';
  const realLabel = document.createElement('label');
  realLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa);';
  realLabel.innerHTML = 'Real part (a): <span id="cpv-real-val-' + containerId + '" style="color: var(--text-primary, #fafafa); font-weight: bold;">1</span>';
  const realSlider = document.createElement('input');
  realSlider.type = 'range'; realSlider.min = '-3'; realSlider.max = '3'; realSlider.step = '0.1'; realSlider.value = '1';
  realGroup.appendChild(realLabel); realGroup.appendChild(realSlider);
  cartesianControls.appendChild(realGroup);

  const imagGroup = document.createElement('div');
  imagGroup.style.cssText = 'display: flex; flex-direction: column; gap: 4px; min-width: 200px; flex: 1;';
  const imagLabel = document.createElement('label');
  imagLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa);';
  imagLabel.innerHTML = 'Imaginary part (b): <span id="cpv-imag-val-' + containerId + '" style="color: var(--text-primary, #fafafa); font-weight: bold;">1</span>';
  const imagSlider = document.createElement('input');
  imagSlider.type = 'range'; imagSlider.min = '-3'; imagSlider.max = '3'; imagSlider.step = '0.1'; imagSlider.value = '1';
  imagGroup.appendChild(imagLabel); imagGroup.appendChild(imagSlider);
  cartesianControls.appendChild(imagGroup);

  const polarControls = document.createElement('div');
  polarControls.style.cssText = 'display: none; flex-wrap: wrap; gap: 16px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px;';
  mainWrapper.appendChild(polarControls);

  const modGroup = document.createElement('div');
  modGroup.style.cssText = 'display: flex; flex-direction: column; gap: 4px; min-width: 200px; flex: 1;';
  const modLabel = document.createElement('label');
  modLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa);';
  modLabel.innerHTML = 'Modulus (r): <span id="cpv-mod-val-' + containerId + '" style="color: var(--text-primary, #fafafa); font-weight: bold;">1.41</span>';
  const modSlider = document.createElement('input');
  modSlider.type = 'range'; modSlider.min = '0'; modSlider.max = '3'; modSlider.step = '0.05'; modSlider.value = '1.41';
  modGroup.appendChild(modLabel); modGroup.appendChild(modSlider);
  polarControls.appendChild(modGroup);

  const argGroup = document.createElement('div');
  argGroup.style.cssText = 'display: flex; flex-direction: column; gap: 4px; min-width: 200px; flex: 1;';
  const argLabel = document.createElement('label');
  argLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa);';
  argLabel.innerHTML = 'Argument (theta): <span id="cpv-arg-val-' + containerId + '" style="color: var(--text-primary, #fafafa); font-weight: bold;">45</span> deg';
  const argSlider = document.createElement('input');
  argSlider.type = 'range'; argSlider.min = '-180'; argSlider.max = '180'; argSlider.step = '5'; argSlider.value = '45';
  argGroup.appendChild(argLabel); argGroup.appendChild(argSlider);
  polarControls.appendChild(argGroup);

  const demoivrePanel = document.createElement('div');
  demoivrePanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 12px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; align-items: center;';
  mainWrapper.appendChild(demoivrePanel);

  const demoivreLabel = document.createElement('span');
  demoivreLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa);';
  demoivreLabel.textContent = "De Moivre's Theorem:";
  demoivrePanel.appendChild(demoivreLabel);

  const powerGroup = document.createElement('div');
  powerGroup.style.cssText = 'display: flex; align-items: center; gap: 8px;';
  const powerLabel = document.createElement('span');
  powerLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa);';
  powerLabel.innerHTML = 'z<sup>n</sup>, n = ';
  const powerValue = document.createElement('span');
  powerValue.id = 'cpv-power-val-' + containerId;
  powerValue.style.cssText = 'font-size: 12px; color: var(--text-primary, #fafafa); font-weight: bold; min-width: 20px;';
  powerValue.textContent = '1';
  const powerSlider = document.createElement('input');
  powerSlider.type = 'range'; powerSlider.min = '1'; powerSlider.max = '8'; powerSlider.step = '1'; powerSlider.value = '1';
  powerSlider.style.cssText = 'width: 100px;';
  powerGroup.appendChild(powerLabel); powerGroup.appendChild(powerSlider); powerGroup.appendChild(powerValue);
  demoivrePanel.appendChild(powerGroup);

  const rootGroup = document.createElement('div');
  rootGroup.style.cssText = 'display: flex; align-items: center; gap: 8px;';
  const rootLabel = document.createElement('span');
  rootLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa);';
  rootLabel.innerHTML = 'z<sup>1/n</sup>, n = ';
  const rootValue = document.createElement('span');
  rootValue.id = 'cpv-root-val-' + containerId;
  rootValue.style.cssText = 'font-size: 12px; color: var(--text-primary, #fafafa); font-weight: bold; min-width: 20px;';
  rootValue.textContent = '1';
  const rootSlider = document.createElement('input');
  rootSlider.type = 'range'; rootSlider.min = '1'; rootSlider.max = '8'; rootSlider.step = '1'; rootSlider.value = '1';
  rootSlider.style.cssText = 'width: 100px;';
  rootGroup.appendChild(rootLabel); rootGroup.appendChild(rootSlider); rootGroup.appendChild(rootValue);
  demoivrePanel.appendChild(rootGroup);

  const animatePowerBtn = document.createElement('button');
  animatePowerBtn.className = 'anim-btn';
  animatePowerBtn.textContent = 'Animate z^n';
  animatePowerBtn.style.cssText = 'padding: 6px 14px; font-size: 12px;';
  demoivrePanel.appendChild(animatePowerBtn);

  const opsPanel = document.createElement('div');
  opsPanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; align-items: center;';
  mainWrapper.appendChild(opsPanel);

  const opsLabel = document.createElement('span');
  opsLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa); margin-right: 8px;';
  opsLabel.textContent = 'Operations:';
  opsPanel.appendChild(opsLabel);

  const conjugateBtn = document.createElement('button');
  conjugateBtn.className = 'anim-btn';
  conjugateBtn.textContent = 'Conjugate (z*)';
  conjugateBtn.style.cssText = 'padding: 6px 12px; font-size: 11px;';
  opsPanel.appendChild(conjugateBtn);

  const negativeBtn = document.createElement('button');
  negativeBtn.className = 'anim-btn';
  negativeBtn.textContent = 'Negative (-z)';
  negativeBtn.style.cssText = 'padding: 6px 12px; font-size: 11px;';
  opsPanel.appendChild(negativeBtn);

  const reciprocalBtn = document.createElement('button');
  reciprocalBtn.className = 'anim-btn';
  reciprocalBtn.textContent = 'Reciprocal (1/z)';
  reciprocalBtn.style.cssText = 'padding: 6px 12px; font-size: 11px;';
  opsPanel.appendChild(reciprocalBtn);

  const clearOpsBtn = document.createElement('button');
  clearOpsBtn.className = 'anim-btn';
  clearOpsBtn.textContent = 'Clear';
  clearOpsBtn.style.cssText = 'padding: 6px 12px; font-size: 11px; background: #3f3f46;';
  opsPanel.appendChild(clearOpsBtn);

  const presetsPanel = document.createElement('div');
  presetsPanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; align-items: center;';
  mainWrapper.appendChild(presetsPanel);

  const presetsLabel = document.createElement('span');
  presetsLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa); margin-right: 8px;';
  presetsLabel.textContent = 'Presets:';
  presetsPanel.appendChild(presetsLabel);

  const presets = { '1 + i': { a: 1, b: 1 }, 'sqrt(3) + i': { a: Math.sqrt(3), b: 1 }, '-1 + i': { a: -1, b: 1 }, 'i': { a: 0, b: 1 }, '-1': { a: -1, b: 0 }, 'Cube Roots of 1': { special: 'cubeRootsUnity' }, '4th Roots of 1': { special: 'fourthRootsUnity' }, '5th Roots of 1': { special: 'fifthRootsUnity' } };

  Object.entries(presets).forEach(([name, config]) => {
    const btn = document.createElement('button');
    btn.className = 'anim-btn';
    btn.textContent = name;
    btn.style.cssText = 'padding: 4px 10px; font-size: 11px;';
    btn.addEventListener('click', () => loadPreset(name, config));
    presetsPanel.appendChild(btn);
  });

  const infoPanel = document.createElement('div');
  infoPanel.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; font-size: 12px;';
  mainWrapper.appendChild(infoPanel);

  const createInfoItem = (label, id) => {
    const item = document.createElement('div');
    item.style.cssText = 'display: flex; flex-direction: column;';
    const labelEl = document.createElement('span');
    labelEl.style.cssText = 'color: var(--text-secondary, #a1a1aa); font-size: 11px;';
    labelEl.textContent = label;
    const valueEl = document.createElement('span');
    valueEl.id = id + '-' + containerId;
    valueEl.style.cssText = 'color: var(--text-primary, #fafafa); font-weight: bold; font-family: "JetBrains Mono", monospace; font-size: 13px;';
    valueEl.textContent = '-';
    item.appendChild(labelEl);
    item.appendChild(valueEl);
    return item;
  };

  infoPanel.appendChild(createInfoItem('Cartesian Form', 'cpv-cartesian'));
  infoPanel.appendChild(createInfoItem('Polar Form', 'cpv-polar'));
  infoPanel.appendChild(createInfoItem('Exponential Form', 'cpv-exponential'));
  infoPanel.appendChild(createInfoItem('Modulus |z|', 'cpv-modulus'));
  infoPanel.appendChild(createInfoItem('Argument arg(z)', 'cpv-argument'));
  infoPanel.appendChild(createInfoItem("De Moivre Result", 'cpv-demoivre'));

  let z = { a: 1, b: 1 };
  let showConjugate = false, showNegative = false, showReciprocal = false, showUnitCircle = true;
  let powerN = 1, rootN = 1, specialMode = null, isAnimating = false, animationFrame = null;

  const scale = 80, originX = width / 2, originY = height / 2;
  const zColor = '#60a5fa', conjColor = '#f59e0b', negColor = '#ef4444', recipColor = '#a855f7', rootColor = '#34d399', powerColor = '#ec4899';

  const toCanvas = (a, b) => ({ x: originX + a * scale, y: originY - b * scale });
  const fromCanvas = (x, y) => ({ a: (x - originX) / scale, b: (originY - y) / scale });
  const getModulus = (a, b) => Math.sqrt(a * a + b * b);
  const getArgument = (a, b) => Math.atan2(b, a);
  const complexPower = (a, b, n) => { const r = getModulus(a, b), theta = getArgument(a, b), rn = Math.pow(r, n), nTheta = n * theta; return { a: rn * Math.cos(nTheta), b: rn * Math.sin(nTheta) }; };
  const complexRoots = (a, b, n) => { const r = getModulus(a, b), theta = getArgument(a, b), rootR = Math.pow(r, 1 / n), roots = []; for (let k = 0; k < n; k++) { const rootTheta = (theta + 2 * Math.PI * k) / n; roots.push({ a: rootR * Math.cos(rootTheta), b: rootR * Math.sin(rootTheta) }); } return roots; };
  const formatNumber = (x, decimals = 2) => Math.abs(x) < 0.001 ? '0' : x.toFixed(decimals);
  const formatComplex = (a, b) => { const aStr = formatNumber(a), bStr = formatNumber(Math.abs(b)); if (Math.abs(b) < 0.001) return aStr; if (Math.abs(a) < 0.001) return b >= 0 ? bStr + 'i' : '-' + bStr + 'i'; return aStr + (b >= 0 ? ' + ' : ' - ') + bStr + 'i'; };

  const render = () => {
    const colors = self.getColors();
    ctx.fillStyle = colors.bg; ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = colors.grid; ctx.lineWidth = 1;
    for (let i = -4; i <= 4; i++) { const x = originX + i * scale; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
    for (let i = -3; i <= 3; i++) { const y = originY + i * scale; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
    ctx.strokeStyle = colors.axis; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, originY); ctx.lineTo(width, originY); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(originX, 0); ctx.lineTo(originX, height); ctx.stroke();
    ctx.fillStyle = colors.axisLabel; ctx.font = '14px system-ui'; ctx.textAlign = 'center';
    ctx.fillText('Re', width - 20, originY - 10); ctx.fillText('Im', originX + 15, 20);
    ctx.font = '11px system-ui';
    for (let i = -4; i <= 4; i++) { if (i === 0) continue; const x = originX + i * scale; ctx.beginPath(); ctx.moveTo(x, originY - 5); ctx.lineTo(x, originY + 5); ctx.strokeStyle = colors.axis; ctx.stroke(); ctx.textAlign = 'center'; ctx.fillText(i.toString(), x, originY + 18); }
    for (let i = -3; i <= 3; i++) { if (i === 0) continue; const y = originY - i * scale; ctx.beginPath(); ctx.moveTo(originX - 5, y); ctx.lineTo(originX + 5, y); ctx.strokeStyle = colors.axis; ctx.stroke(); ctx.textAlign = 'right'; ctx.fillText(i.toString() + 'i', originX - 10, y + 4); }
    if (showUnitCircle) { ctx.strokeStyle = colors.axisLabel + '88'; ctx.lineWidth = 1; ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.arc(originX, originY, scale, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]); }

    if (specialMode) {
      let n = specialMode === 'fourthRootsUnity' ? 4 : specialMode === 'fifthRootsUnity' ? 5 : 3;
      const roots = complexRoots(1, 0, n);
      ctx.strokeStyle = rootColor + 'aa'; ctx.lineWidth = 2; ctx.beginPath();
      const firstPoint = toCanvas(roots[0].a, roots[0].b); ctx.moveTo(firstPoint.x, firstPoint.y);
      for (let i = 1; i <= n; i++) { const point = toCanvas(roots[i % n].a, roots[i % n].b); ctx.lineTo(point.x, point.y); } ctx.stroke();
      roots.forEach((root, i) => {
        const point = toCanvas(root.a, root.b);
        ctx.strokeStyle = rootColor; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(point.x, point.y); ctx.stroke();
        const angle = Math.atan2(-root.b, root.a); ctx.beginPath(); ctx.moveTo(point.x, point.y); ctx.lineTo(point.x - 10 * Math.cos(angle - 0.3), point.y + 10 * Math.sin(angle - 0.3)); ctx.moveTo(point.x, point.y); ctx.lineTo(point.x - 10 * Math.cos(angle + 0.3), point.y + 10 * Math.sin(angle + 0.3)); ctx.stroke();
        ctx.fillStyle = rootColor; ctx.beginPath(); ctx.arc(point.x, point.y, 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = colors.text; ctx.font = '12px system-ui'; ctx.textAlign = 'center';
        const labelR = getModulus(root.a, root.b) + 0.3, labelTheta = getArgument(root.a, root.b);
        const labelPoint = toCanvas(labelR * Math.cos(labelTheta), labelR * Math.sin(labelTheta));
        ctx.fillText(i === 0 ? '1' : (n === 3 ? (i === 1 ? 'omega' : 'omega^2') : 'omega^' + i), labelPoint.x, labelPoint.y);
      });
      ctx.fillStyle = colors.text; ctx.font = '14px system-ui'; ctx.textAlign = 'left';
      ctx.fillText('Sum of all roots = 0 (vectors cancel)', 20, 30);
      ctx.fillText('Vertices form a regular ' + n + '-gon', 20, 50);
      updateInfo(); return;
    }

    const pointZ = toCanvas(z.a, z.b);
    if (powerN > 1 && !isAnimating) {
      const zPower = complexPower(z.a, z.b, powerN), pointPower = toCanvas(zPower.a, zPower.b);
      ctx.strokeStyle = powerColor; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(pointPower.x, pointPower.y); ctx.stroke();
      const angle = Math.atan2(-zPower.b, zPower.a); ctx.beginPath(); ctx.moveTo(pointPower.x, pointPower.y); ctx.lineTo(pointPower.x - 10 * Math.cos(angle - 0.3), pointPower.y + 10 * Math.sin(angle - 0.3)); ctx.moveTo(pointPower.x, pointPower.y); ctx.lineTo(pointPower.x - 10 * Math.cos(angle + 0.3), pointPower.y + 10 * Math.sin(angle + 0.3)); ctx.stroke();
      ctx.fillStyle = powerColor; ctx.beginPath(); ctx.arc(pointPower.x, pointPower.y, 8, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = colors.text; ctx.font = '12px system-ui'; ctx.textAlign = 'left'; ctx.fillText('z^' + powerN, pointPower.x + 12, pointPower.y - 5);
    }
    if (rootN > 1) {
      const roots = complexRoots(z.a, z.b, rootN), rootRadius = Math.pow(getModulus(z.a, z.b), 1 / rootN);
      ctx.strokeStyle = rootColor + '44'; ctx.lineWidth = 1; ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.arc(originX, originY, rootRadius * scale, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
      roots.forEach((root, i) => {
        const point = toCanvas(root.a, root.b);
        ctx.strokeStyle = rootColor + 'aa'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(point.x, point.y); ctx.stroke();
        ctx.fillStyle = rootColor; ctx.beginPath(); ctx.arc(point.x, point.y, 6, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = colors.text; ctx.font = '10px system-ui'; ctx.textAlign = 'left'; ctx.fillText('root ' + (i + 1), point.x + 8, point.y - 3);
      });
    }
    if (showConjugate) {
      const conj = { a: z.a, b: -z.b }, pointConj = toCanvas(conj.a, conj.b);
      ctx.strokeStyle = conjColor + '66'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(pointZ.x, pointZ.y); ctx.lineTo(pointConj.x, pointConj.y); ctx.stroke(); ctx.setLineDash([]);
      ctx.strokeStyle = conjColor; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(pointConj.x, pointConj.y); ctx.stroke();
      const angle = Math.atan2(-conj.b, conj.a); ctx.beginPath(); ctx.moveTo(pointConj.x, pointConj.y); ctx.lineTo(pointConj.x - 10 * Math.cos(angle - 0.3), pointConj.y + 10 * Math.sin(angle - 0.3)); ctx.moveTo(pointConj.x, pointConj.y); ctx.lineTo(pointConj.x - 10 * Math.cos(angle + 0.3), pointConj.y + 10 * Math.sin(angle + 0.3)); ctx.stroke();
      ctx.fillStyle = conjColor; ctx.beginPath(); ctx.arc(pointConj.x, pointConj.y, 7, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = colors.text; ctx.font = '12px system-ui'; ctx.textAlign = 'left'; ctx.fillText('z* = ' + formatComplex(conj.a, conj.b), pointConj.x + 12, pointConj.y - 5);
    }
    if (showNegative) {
      const neg = { a: -z.a, b: -z.b }, pointNeg = toCanvas(neg.a, neg.b);
      ctx.strokeStyle = negColor + '66'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(pointZ.x, pointZ.y); ctx.lineTo(pointNeg.x, pointNeg.y); ctx.stroke(); ctx.setLineDash([]);
      ctx.strokeStyle = negColor; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(pointNeg.x, pointNeg.y); ctx.stroke();
      const angle = Math.atan2(-neg.b, neg.a); ctx.beginPath(); ctx.moveTo(pointNeg.x, pointNeg.y); ctx.lineTo(pointNeg.x - 10 * Math.cos(angle - 0.3), pointNeg.y + 10 * Math.sin(angle - 0.3)); ctx.moveTo(pointNeg.x, pointNeg.y); ctx.lineTo(pointNeg.x - 10 * Math.cos(angle + 0.3), pointNeg.y + 10 * Math.sin(angle + 0.3)); ctx.stroke();
      ctx.fillStyle = negColor; ctx.beginPath(); ctx.arc(pointNeg.x, pointNeg.y, 7, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = colors.text; ctx.font = '12px system-ui'; ctx.textAlign = 'left'; ctx.fillText('-z = ' + formatComplex(neg.a, neg.b), pointNeg.x + 12, pointNeg.y - 5);
    }
    if (showReciprocal) {
      const r2 = z.a * z.a + z.b * z.b;
      if (r2 > 0.01) {
        const recip = { a: z.a / r2, b: -z.b / r2 }, pointRecip = toCanvas(recip.a, recip.b);
        ctx.strokeStyle = recipColor; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(pointRecip.x, pointRecip.y); ctx.stroke();
        const angle = Math.atan2(-recip.b, recip.a); ctx.beginPath(); ctx.moveTo(pointRecip.x, pointRecip.y); ctx.lineTo(pointRecip.x - 10 * Math.cos(angle - 0.3), pointRecip.y + 10 * Math.sin(angle - 0.3)); ctx.moveTo(pointRecip.x, pointRecip.y); ctx.lineTo(pointRecip.x - 10 * Math.cos(angle + 0.3), pointRecip.y + 10 * Math.sin(angle + 0.3)); ctx.stroke();
        ctx.fillStyle = recipColor; ctx.beginPath(); ctx.arc(pointRecip.x, pointRecip.y, 7, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = colors.text; ctx.font = '12px system-ui'; ctx.textAlign = 'left'; ctx.fillText('1/z = ' + formatComplex(recip.a, recip.b), pointRecip.x + 12, pointRecip.y - 5);
      }
    }

    ctx.strokeStyle = zColor; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(pointZ.x, pointZ.y); ctx.stroke();
    const zAngle = Math.atan2(-z.b, z.a); ctx.beginPath(); ctx.moveTo(pointZ.x, pointZ.y); ctx.lineTo(pointZ.x - 12 * Math.cos(zAngle - 0.3), pointZ.y + 12 * Math.sin(zAngle - 0.3)); ctx.moveTo(pointZ.x, pointZ.y); ctx.lineTo(pointZ.x - 12 * Math.cos(zAngle + 0.3), pointZ.y + 12 * Math.sin(zAngle + 0.3)); ctx.stroke();
    const gradient = ctx.createRadialGradient(pointZ.x, pointZ.y, 0, pointZ.x, pointZ.y, 20); gradient.addColorStop(0, zColor + '66'); gradient.addColorStop(1, 'transparent'); ctx.fillStyle = gradient; ctx.beginPath(); ctx.arc(pointZ.x, pointZ.y, 20, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = zColor; ctx.beginPath(); ctx.arc(pointZ.x, pointZ.y, 8, 0, Math.PI * 2); ctx.fill();
    const arcRadius = 30, theta = getArgument(z.a, z.b);
    if (Math.abs(theta) > 0.1) { ctx.strokeStyle = zColor + 'aa'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(originX, originY, arcRadius, 0, -theta, theta > 0); ctx.stroke(); ctx.fillStyle = colors.text; ctx.font = '11px system-ui'; ctx.textAlign = 'center'; ctx.fillText('theta', originX + (arcRadius + 15) * Math.cos(-theta / 2), originY + (arcRadius + 15) * Math.sin(-theta / 2)); }
    ctx.fillStyle = colors.text; ctx.font = 'bold 13px system-ui'; ctx.textAlign = 'left'; ctx.fillText('z = ' + formatComplex(z.a, z.b), pointZ.x + 12, pointZ.y - 8);
    ctx.strokeStyle = colors.axisLabel + '88'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(pointZ.x, pointZ.y); ctx.lineTo(pointZ.x, originY); ctx.stroke(); ctx.beginPath(); ctx.moveTo(pointZ.x, pointZ.y); ctx.lineTo(originX, pointZ.y); ctx.stroke(); ctx.setLineDash([]);
    updateInfo();
  };

  const updateInfo = () => {
    const cid = containerId;
    if (specialMode) {
      let n = specialMode === 'fourthRootsUnity' ? 4 : specialMode === 'fifthRootsUnity' ? 5 : 3;
      document.getElementById('cpv-cartesian-' + cid).textContent = 'Roots of z^' + n + ' = 1';
      document.getElementById('cpv-polar-' + cid).textContent = 'omega_k = e^(2*pi*i*k/' + n + ')';
      document.getElementById('cpv-exponential-' + cid).textContent = 'k = 0, 1, ..., ' + (n - 1);
      document.getElementById('cpv-modulus-' + cid).textContent = '|omega| = 1';
      document.getElementById('cpv-argument-' + cid).textContent = '2*pi*k/' + n;
      document.getElementById('cpv-demoivre-' + cid).textContent = '1 + omega + ... + omega^' + (n - 1) + ' = 0';
      return;
    }
    const r = getModulus(z.a, z.b), theta = getArgument(z.a, z.b), thetaDeg = theta * 180 / Math.PI;
    document.getElementById('cpv-cartesian-' + cid).textContent = formatComplex(z.a, z.b);
    document.getElementById('cpv-polar-' + cid).textContent = formatNumber(r) + '(cos ' + formatNumber(thetaDeg, 0) + 'deg + i sin ' + formatNumber(thetaDeg, 0) + 'deg)';
    document.getElementById('cpv-exponential-' + cid).textContent = formatNumber(r) + ' * e^(i * ' + formatNumber(theta) + ')';
    document.getElementById('cpv-modulus-' + cid).textContent = formatNumber(r);
    document.getElementById('cpv-argument-' + cid).textContent = formatNumber(thetaDeg, 1) + 'deg = ' + formatNumber(theta) + ' rad';
    if (powerN > 1) { const zPower = complexPower(z.a, z.b, powerN); document.getElementById('cpv-demoivre-' + cid).textContent = 'z^' + powerN + ' = ' + formatComplex(zPower.a, zPower.b); }
    else if (rootN > 1) { document.getElementById('cpv-demoivre-' + cid).textContent = rootN + ' roots shown (equally spaced)'; }
    else { document.getElementById('cpv-demoivre-' + cid).textContent = '(cos theta + i sin theta)^n = cos(n*theta) + i sin(n*theta)'; }
  };

  const loadPreset = (name, config) => {
    specialMode = null; showConjugate = false; showNegative = false; showReciprocal = false;
    conjugateBtn.style.background = ''; negativeBtn.style.background = ''; reciprocalBtn.style.background = '';
    powerN = 1; rootN = 1; powerSlider.value = 1; rootSlider.value = 1;
    document.getElementById('cpv-power-val-' + containerId).textContent = '1';
    document.getElementById('cpv-root-val-' + containerId).textContent = '1';
    if (config.special) { specialMode = config.special; render(); return; }
    z.a = config.a; z.b = config.b;
    realSlider.value = z.a; imagSlider.value = z.b;
    document.getElementById('cpv-real-val-' + containerId).textContent = formatNumber(z.a);
    document.getElementById('cpv-imag-val-' + containerId).textContent = formatNumber(z.b);
    const r = getModulus(z.a, z.b), theta = getArgument(z.a, z.b) * 180 / Math.PI;
    modSlider.value = r; argSlider.value = theta;
    document.getElementById('cpv-mod-val-' + containerId).textContent = formatNumber(r);
    document.getElementById('cpv-arg-val-' + containerId).textContent = formatNumber(theta, 0);
    render();
  };

  const animatePower = () => {
    if (isAnimating) { isAnimating = false; animatePowerBtn.textContent = 'Animate z^n'; animatePowerBtn.style.background = ''; if (animationFrame) cancelAnimationFrame(animationFrame); render(); return; }
    isAnimating = true; animatePowerBtn.textContent = 'Stop'; animatePowerBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    const startTheta = getArgument(z.a, z.b), endTheta = startTheta * powerN, startR = getModulus(z.a, z.b), endR = Math.pow(startR, powerN), duration = 1500, startTime = performance.now();
    const animate = (currentTime) => {
      if (!isAnimating) return;
      let progress = (currentTime - startTime) / duration;
      if (progress >= 1) { progress = 1; isAnimating = false; animatePowerBtn.textContent = 'Animate z^n'; animatePowerBtn.style.background = ''; }
      const t = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      const currentTheta = startTheta + (endTheta - startTheta) * t, currentR = startR + (endR - startR) * t;
      const colors = self.getColors(); ctx.fillStyle = colors.bg; ctx.fillRect(0, 0, width, height);
      ctx.strokeStyle = colors.grid; ctx.lineWidth = 1;
      for (let i = -4; i <= 4; i++) { const x = originX + i * scale; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
      for (let i = -3; i <= 3; i++) { const y = originY + i * scale; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
      ctx.strokeStyle = colors.axis; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(0, originY); ctx.lineTo(width, originY); ctx.stroke(); ctx.beginPath(); ctx.moveTo(originX, 0); ctx.lineTo(originX, height); ctx.stroke();
      if (showUnitCircle) { ctx.strokeStyle = colors.axisLabel + '88'; ctx.lineWidth = 1; ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.arc(originX, originY, scale, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]); }
      const pointZ = toCanvas(z.a, z.b); ctx.strokeStyle = zColor + '44'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(pointZ.x, pointZ.y); ctx.stroke(); ctx.fillStyle = zColor + '44'; ctx.beginPath(); ctx.arc(pointZ.x, pointZ.y, 6, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = powerColor + '66'; ctx.lineWidth = 1; ctx.beginPath();
      for (let i = 0; i <= progress * 50; i++) { const trailT = i / 50, trailTheta = startTheta + (endTheta - startTheta) * trailT, trailR = startR + (endR - startR) * trailT, trailPoint = toCanvas(trailR * Math.cos(trailTheta), trailR * Math.sin(trailTheta)); if (i === 0) ctx.moveTo(trailPoint.x, trailPoint.y); else ctx.lineTo(trailPoint.x, trailPoint.y); } ctx.stroke();
      const animA = currentR * Math.cos(currentTheta), animB = currentR * Math.sin(currentTheta), pointAnim = toCanvas(animA, animB);
      ctx.strokeStyle = powerColor; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(pointAnim.x, pointAnim.y); ctx.stroke();
      const gradient = ctx.createRadialGradient(pointAnim.x, pointAnim.y, 0, pointAnim.x, pointAnim.y, 25); gradient.addColorStop(0, powerColor + '88'); gradient.addColorStop(1, 'transparent'); ctx.fillStyle = gradient; ctx.beginPath(); ctx.arc(pointAnim.x, pointAnim.y, 25, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = powerColor; ctx.beginPath(); ctx.arc(pointAnim.x, pointAnim.y, 8, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = colors.text; ctx.font = '14px system-ui'; ctx.textAlign = 'left';
      ctx.fillText('Rotating: angle x ' + powerN + ', modulus ^ ' + powerN, 20, 30);
      ctx.fillText('Current angle: ' + formatNumber(currentTheta * 180 / Math.PI, 0) + ' deg', 20, 50);
      ctx.fillText('Current modulus: ' + formatNumber(currentR), 20, 70);
      if (progress < 1) animationFrame = requestAnimationFrame(animate); else render();
    };
    animationFrame = requestAnimationFrame(animate);
  };

  cartesianBtn.addEventListener('click', () => { inputMode = 'cartesian'; cartesianBtn.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)'; polarBtn.style.background = '#3f3f46'; cartesianControls.style.display = 'flex'; polarControls.style.display = 'none'; });
  polarBtn.addEventListener('click', () => { inputMode = 'polar'; polarBtn.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)'; cartesianBtn.style.background = '#3f3f46'; cartesianControls.style.display = 'none'; polarControls.style.display = 'flex'; });
  unitCircleCheckbox.addEventListener('change', () => { showUnitCircle = unitCircleCheckbox.checked; render(); });
  realSlider.addEventListener('input', () => { specialMode = null; z.a = parseFloat(realSlider.value); document.getElementById('cpv-real-val-' + containerId).textContent = formatNumber(z.a); const r = getModulus(z.a, z.b), theta = getArgument(z.a, z.b) * 180 / Math.PI; modSlider.value = r; argSlider.value = theta; document.getElementById('cpv-mod-val-' + containerId).textContent = formatNumber(r); document.getElementById('cpv-arg-val-' + containerId).textContent = formatNumber(theta, 0); render(); });
  imagSlider.addEventListener('input', () => { specialMode = null; z.b = parseFloat(imagSlider.value); document.getElementById('cpv-imag-val-' + containerId).textContent = formatNumber(z.b); const r = getModulus(z.a, z.b), theta = getArgument(z.a, z.b) * 180 / Math.PI; modSlider.value = r; argSlider.value = theta; document.getElementById('cpv-mod-val-' + containerId).textContent = formatNumber(r); document.getElementById('cpv-arg-val-' + containerId).textContent = formatNumber(theta, 0); render(); });
  modSlider.addEventListener('input', () => { specialMode = null; const r = parseFloat(modSlider.value), theta = parseFloat(argSlider.value) * Math.PI / 180; z.a = r * Math.cos(theta); z.b = r * Math.sin(theta); document.getElementById('cpv-mod-val-' + containerId).textContent = formatNumber(r); realSlider.value = z.a; imagSlider.value = z.b; document.getElementById('cpv-real-val-' + containerId).textContent = formatNumber(z.a); document.getElementById('cpv-imag-val-' + containerId).textContent = formatNumber(z.b); render(); });
  argSlider.addEventListener('input', () => { specialMode = null; const r = parseFloat(modSlider.value), theta = parseFloat(argSlider.value) * Math.PI / 180; z.a = r * Math.cos(theta); z.b = r * Math.sin(theta); document.getElementById('cpv-arg-val-' + containerId).textContent = formatNumber(parseFloat(argSlider.value), 0); realSlider.value = z.a; imagSlider.value = z.b; document.getElementById('cpv-real-val-' + containerId).textContent = formatNumber(z.a); document.getElementById('cpv-imag-val-' + containerId).textContent = formatNumber(z.b); render(); });
  powerSlider.addEventListener('input', () => { powerN = parseInt(powerSlider.value); document.getElementById('cpv-power-val-' + containerId).textContent = powerN; rootN = 1; rootSlider.value = 1; document.getElementById('cpv-root-val-' + containerId).textContent = '1'; specialMode = null; render(); });
  rootSlider.addEventListener('input', () => { rootN = parseInt(rootSlider.value); document.getElementById('cpv-root-val-' + containerId).textContent = rootN; powerN = 1; powerSlider.value = 1; document.getElementById('cpv-power-val-' + containerId).textContent = '1'; specialMode = null; render(); });
  animatePowerBtn.addEventListener('click', () => { if (powerN <= 1) { powerN = 3; powerSlider.value = 3; document.getElementById('cpv-power-val-' + containerId).textContent = '3'; } specialMode = null; animatePower(); });
  conjugateBtn.addEventListener('click', () => { showConjugate = !showConjugate; conjugateBtn.style.background = showConjugate ? 'linear-gradient(135deg, #f59e0b, #d97706)' : ''; specialMode = null; render(); });
  negativeBtn.addEventListener('click', () => { showNegative = !showNegative; negativeBtn.style.background = showNegative ? 'linear-gradient(135deg, #ef4444, #dc2626)' : ''; specialMode = null; render(); });
  reciprocalBtn.addEventListener('click', () => { showReciprocal = !showReciprocal; reciprocalBtn.style.background = showReciprocal ? 'linear-gradient(135deg, #a855f7, #9333ea)' : ''; specialMode = null; render(); });
  clearOpsBtn.addEventListener('click', () => { showConjugate = false; showNegative = false; showReciprocal = false; conjugateBtn.style.background = ''; negativeBtn.style.background = ''; reciprocalBtn.style.background = ''; render(); });
  canvas.addEventListener('click', (e) => { const rect = canvas.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top, complex = fromCanvas(x, y), snapThreshold = 0.15; if (Math.abs(complex.a - Math.round(complex.a)) < snapThreshold) complex.a = Math.round(complex.a); if (Math.abs(complex.b - Math.round(complex.b)) < snapThreshold) complex.b = Math.round(complex.b); complex.a = Math.max(-3, Math.min(3, complex.a)); complex.b = Math.max(-3, Math.min(3, complex.b)); z.a = complex.a; z.b = complex.b; specialMode = null; realSlider.value = z.a; imagSlider.value = z.b; document.getElementById('cpv-real-val-' + containerId).textContent = formatNumber(z.a); document.getElementById('cpv-imag-val-' + containerId).textContent = formatNumber(z.b); const r = getModulus(z.a, z.b), theta = getArgument(z.a, z.b) * 180 / Math.PI; modSlider.value = Math.min(3, r); argSlider.value = theta; document.getElementById('cpv-mod-val-' + containerId).textContent = formatNumber(Math.min(3, r)); document.getElementById('cpv-arg-val-' + containerId).textContent = formatNumber(theta, 0); render(); });
  let isDragging = false;
  canvas.addEventListener('mousedown', (e) => { const rect = canvas.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top, pointZ = toCanvas(z.a, z.b); if (Math.sqrt((x - pointZ.x) ** 2 + (y - pointZ.y) ** 2) < 20) { isDragging = true; canvas.style.cursor = 'grabbing'; } });
  canvas.addEventListener('mousemove', (e) => { if (!isDragging) return; const rect = canvas.getBoundingClientRect(), x = e.clientX - rect.left, y = e.clientY - rect.top, complex = fromCanvas(x, y); complex.a = Math.max(-3, Math.min(3, complex.a)); complex.b = Math.max(-3, Math.min(3, complex.b)); z.a = complex.a; z.b = complex.b; specialMode = null; realSlider.value = z.a; imagSlider.value = z.b; document.getElementById('cpv-real-val-' + containerId).textContent = formatNumber(z.a); document.getElementById('cpv-imag-val-' + containerId).textContent = formatNumber(z.b); const r = getModulus(z.a, z.b), theta = getArgument(z.a, z.b) * 180 / Math.PI; modSlider.value = Math.min(3, r); argSlider.value = theta; document.getElementById('cpv-mod-val-' + containerId).textContent = formatNumber(Math.min(3, r)); document.getElementById('cpv-arg-val-' + containerId).textContent = formatNumber(theta, 0); render(); });
  canvas.addEventListener('mouseup', () => { isDragging = false; canvas.style.cursor = 'crosshair'; });
  canvas.addEventListener('mouseleave', () => { isDragging = false; canvas.style.cursor = 'crosshair'; });

  render();
};

// Interactive Probability Tree & Bayes Theorem Visualizer
JEEAnimations.probabilityTree = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  container.className = 'animation-container probability-tree-visualizer';

  const self = this;

  // Main layout container
  const mainWrapper = document.createElement('div');
  mainWrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px; width: 100%;';
  container.appendChild(mainWrapper);

  // Canvas container
  const canvasContainer = document.createElement('div');
  canvasContainer.style.cssText = 'position: relative; border-radius: 8px; overflow: hidden;';
  mainWrapper.appendChild(canvasContainer);

  const { canvas, ctx, width, height } = this.createCanvas(canvasContainer, 600, 400);
  canvas.style.cssText = 'display: block; cursor: pointer; border-radius: 8px;';

  // Controls panel
  const controlsPanel = document.createElement('div');
  controlsPanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 12px; padding: 14px; background: var(--bg-secondary, #18181b); border-radius: 8px;';
  mainWrapper.appendChild(controlsPanel);

  // Probability sliders group
  const slidersGroup = document.createElement('div');
  slidersGroup.style.cssText = 'display: flex; flex-wrap: wrap; gap: 16px; flex: 1; min-width: 300px;';
  controlsPanel.appendChild(slidersGroup);

  // Create custom slider with value display
  const createProbSlider = (parent, label, id, initialValue, color) => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 4px; min-width: 140px;';

    const labelRow = document.createElement('div');
    labelRow.style.cssText = 'display: flex; justify-content: space-between; align-items: center;';

    const labelEl = document.createElement('span');
    labelEl.style.cssText = 'font-size: 13px; color: ' + color + '; font-weight: 600;';
    labelEl.textContent = label;

    const valueEl = document.createElement('span');
    valueEl.id = id + '-val';
    valueEl.style.cssText = 'font-size: 13px; color: var(--text-primary, #fafafa); font-weight: bold;';
    valueEl.textContent = initialValue.toFixed(2);

    labelRow.appendChild(labelEl);
    labelRow.appendChild(valueEl);

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.id = id;
    slider.min = '0.01';
    slider.max = '0.99';
    slider.step = '0.01';
    slider.value = initialValue;
    slider.style.cssText = 'width: 100%; accent-color: ' + color + ';';

    wrapper.appendChild(labelRow);
    wrapper.appendChild(slider);
    parent.appendChild(wrapper);

    return slider;
  };

  // Probability parameters
  let pA = 0.3;      // P(A) - Prior probability
  let pB_A = 0.8;    // P(B|A) - Likelihood given A
  let pB_notA = 0.1; // P(B|A') - False positive rate

  const blueColor = '#60a5fa';
  const greenColor = '#34d399';
  const orangeColor = '#f59e0b';
  const redColor = '#ef4444';
  const purpleColor = '#a855f7';

  // Create sliders
  const pASlider = createProbSlider(slidersGroup, 'P(A) Prior', 'pA-' + containerId, pA, blueColor);
  const pB_ASlider = createProbSlider(slidersGroup, 'P(B|A) Likelihood', 'pBA-' + containerId, pB_A, greenColor);
  const pB_notASlider = createProbSlider(slidersGroup, "P(B|A') False Pos", 'pBnotA-' + containerId, pB_notA, orangeColor);

  // Presets group
  const presetsGroup = document.createElement('div');
  presetsGroup.style.cssText = 'display: flex; flex-direction: column; gap: 6px;';
  controlsPanel.appendChild(presetsGroup);

  const presetsLabel = document.createElement('span');
  presetsLabel.style.cssText = 'font-size: 11px; color: var(--text-secondary, #a1a1aa); text-transform: uppercase; letter-spacing: 0.5px;';
  presetsLabel.textContent = 'Presets';
  presetsGroup.appendChild(presetsLabel);

  const presetBtnsRow = document.createElement('div');
  presetBtnsRow.style.cssText = 'display: flex; flex-wrap: wrap; gap: 6px;';
  presetsGroup.appendChild(presetBtnsRow);

  const presets = [
    { name: 'Medical Test', pA: 0.02, pB_A: 0.95, pB_notA: 0.05 },
    { name: 'Spam Filter', pA: 0.10, pB_A: 0.90, pB_notA: 0.03 },
    { name: 'Quality Control', pA: 0.05, pB_A: 0.98, pB_notA: 0.02 },
    { name: 'Bag Problem', pA: 0.33, pB_A: 0.60, pB_notA: 0.40 }
  ];

  presets.forEach(preset => {
    const btn = document.createElement('button');
    btn.className = 'anim-btn';
    btn.textContent = preset.name;
    btn.style.cssText = 'padding: 5px 10px; font-size: 11px; background: #3f3f46;';
    btn.addEventListener('click', () => {
      pA = preset.pA;
      pB_A = preset.pB_A;
      pB_notA = preset.pB_notA;
      pASlider.value = pA;
      pB_ASlider.value = pB_A;
      pB_notASlider.value = pB_notA;
      document.getElementById('pA-' + containerId + '-val').textContent = pA.toFixed(2);
      document.getElementById('pBA-' + containerId + '-val').textContent = pB_A.toFixed(2);
      document.getElementById('pBnotA-' + containerId + '-val').textContent = pB_notA.toFixed(2);
      render();
    });
    presetBtnsRow.appendChild(btn);
  });

  // Info panel for Bayes calculation
  const infoPanel = document.createElement('div');
  infoPanel.style.cssText = 'padding: 14px; background: var(--bg-secondary, #18181b); border-radius: 8px; font-family: system-ui, sans-serif;';
  mainWrapper.appendChild(infoPanel);

  // Tree node positions (will be calculated in render)
  let nodes = {};
  let highlightPath = null; // 'A_B', 'A_notB', 'notA_B', 'notA_notB'

  // Calculate derived probabilities
  const calculate = () => {
    const pNotA = 1 - pA;
    const pNotB_A = 1 - pB_A;
    const pNotB_notA = 1 - pB_notA;

    // Joint probabilities
    const pA_and_B = pA * pB_A;
    const pA_and_notB = pA * pNotB_A;
    const pNotA_and_B = pNotA * pB_notA;
    const pNotA_and_notB = pNotA * pNotB_notA;

    // Total probability of B
    const pB = pA_and_B + pNotA_and_B;

    // Bayes' theorem: P(A|B)
    const pA_given_B = pB > 0 ? pA_and_B / pB : 0;

    return {
      pA, pNotA, pB_A, pNotB_A, pB_notA, pNotB_notA,
      pA_and_B, pA_and_notB, pNotA_and_B, pNotA_and_notB,
      pB, pA_given_B
    };
  };

  // Render the probability tree
  const render = () => {
    const colors = self.getColors();
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, width, height);

    const calc = calculate();

    // Tree layout parameters
    const startX = 60;
    const level1X = 200;
    const level2X = 380;
    const centerY = height / 2;
    const spread1 = 120;
    const spread2 = 55;

    // Node positions
    nodes = {
      root: { x: startX, y: centerY },
      A: { x: level1X, y: centerY - spread1 },
      notA: { x: level1X, y: centerY + spread1 },
      A_B: { x: level2X, y: centerY - spread1 - spread2 },
      A_notB: { x: level2X, y: centerY - spread1 + spread2 },
      notA_B: { x: level2X, y: centerY + spread1 - spread2 },
      notA_notB: { x: level2X, y: centerY + spread1 + spread2 }
    };

    // Draw connections with probabilities
    const drawBranch = (from, to, prob, label, color, isHighlighted) => {
      ctx.strokeStyle = isHighlighted ? color : (colors.axis + '88');
      ctx.lineWidth = isHighlighted ? 3.5 : 2;
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();

      // Draw arrow head
      const angle = Math.atan2(to.y - from.y, to.x - from.x);
      const arrowLen = 10;
      ctx.beginPath();
      ctx.moveTo(to.x - 15 * Math.cos(angle), to.y - 15 * Math.sin(angle));
      ctx.lineTo(to.x - 15 * Math.cos(angle) - arrowLen * Math.cos(angle - 0.3),
                 to.y - 15 * Math.sin(angle) - arrowLen * Math.sin(angle - 0.3));
      ctx.moveTo(to.x - 15 * Math.cos(angle), to.y - 15 * Math.sin(angle));
      ctx.lineTo(to.x - 15 * Math.cos(angle) - arrowLen * Math.cos(angle + 0.3),
                 to.y - 15 * Math.sin(angle) - arrowLen * Math.sin(angle + 0.3));
      ctx.stroke();

      // Draw probability label
      const midX = (from.x + to.x) / 2;
      const midY = (from.y + to.y) / 2;
      const offsetX = (to.y - from.y) > 0 ? -35 : 10;
      const offsetY = (to.y - from.y) > 0 ? 5 : -5;

      ctx.fillStyle = isHighlighted ? color : colors.axisLabel;
      ctx.font = isHighlighted ? 'bold 13px system-ui' : '12px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(label, midX + offsetX, midY + offsetY);
      ctx.fillText(prob.toFixed(3), midX + offsetX, midY + offsetY + 14);
    };

    // Draw node
    const drawNode = (node, label, color, isHighlighted, jointProb) => {
      // Glow effect for highlighted nodes
      if (isHighlighted) {
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 35);
        gradient.addColorStop(0, color + '44');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 35, 0, Math.PI * 2);
        ctx.fill();
      }

      // Node circle
      ctx.fillStyle = isHighlighted ? color : (colors.bgSecondary || '#27272a');
      ctx.strokeStyle = isHighlighted ? color : colors.axis;
      ctx.lineWidth = isHighlighted ? 3 : 2;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Node label
      ctx.fillStyle = isHighlighted ? '#fff' : colors.text;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, node.x, node.y);

      // Joint probability below leaf nodes
      if (jointProb !== undefined && jointProb !== null) {
        ctx.fillStyle = isHighlighted ? color : colors.axisLabel;
        ctx.font = '11px system-ui';
        ctx.textBaseline = 'alphabetic';
        ctx.fillText('P = ' + jointProb.toFixed(4), node.x + 50, node.y);
      }
    };

    // Determine which paths to highlight
    const highlightA = highlightPath && (highlightPath === 'A_B' || highlightPath === 'A_notB');
    const highlightNotA = highlightPath && (highlightPath === 'notA_B' || highlightPath === 'notA_notB');
    const highlightA_B = highlightPath === 'A_B';
    const highlightA_notB = highlightPath === 'A_notB';
    const highlightNotA_B = highlightPath === 'notA_B';
    const highlightNotA_notB = highlightPath === 'notA_notB';

    // Draw branches (level 1: root to A/A')
    drawBranch(nodes.root, nodes.A, calc.pA, 'P(A)', blueColor, highlightA);
    drawBranch(nodes.root, nodes.notA, calc.pNotA, "P(A')", orangeColor, highlightNotA);

    // Draw branches (level 2: A to B/B', A' to B/B')
    drawBranch(nodes.A, nodes.A_B, calc.pB_A, 'P(B|A)', greenColor, highlightA_B);
    drawBranch(nodes.A, nodes.A_notB, calc.pNotB_A, "P(B'|A)", colors.axisLabel, highlightA_notB);
    drawBranch(nodes.notA, nodes.notA_B, calc.pB_notA, "P(B|A')", greenColor, highlightNotA_B);
    drawBranch(nodes.notA, nodes.notA_notB, calc.pNotB_notA, "P(B'|A')", colors.axisLabel, highlightNotA_notB);

    // Draw nodes
    ctx.textBaseline = 'middle';
    drawNode(nodes.root, 'S', colors.text, false);
    drawNode(nodes.A, 'A', blueColor, highlightA);
    drawNode(nodes.notA, "A'", orangeColor, highlightNotA);
    drawNode(nodes.A_B, 'B', greenColor, highlightA_B, calc.pA_and_B);
    drawNode(nodes.A_notB, "B'", colors.axisLabel, highlightA_notB, calc.pA_and_notB);
    drawNode(nodes.notA_B, 'B', greenColor, highlightNotA_B, calc.pNotA_and_B);
    drawNode(nodes.notA_notB, "B'", colors.axisLabel, highlightNotA_notB, calc.pNotA_and_notB);

    // Draw title
    ctx.fillStyle = colors.text;
    ctx.font = 'bold 16px system-ui';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText("Probability Tree for Bayes' Theorem", 15, 15);

    // Draw legend
    ctx.font = '12px system-ui';
    ctx.fillStyle = colors.axisLabel;
    ctx.fillText('Click leaf nodes to highlight path', 15, height - 20);

    // Draw P(B) total at the right
    ctx.fillStyle = greenColor;
    ctx.font = 'bold 14px system-ui';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    const pbY = (nodes.A_B.y + nodes.notA_B.y) / 2;
    ctx.fillText('P(B) = ' + calc.pB.toFixed(4), level2X + 90, pbY);

    // Draw brace connecting B outcomes
    ctx.strokeStyle = greenColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(level2X + 75, nodes.A_B.y);
    ctx.quadraticCurveTo(level2X + 85, pbY, level2X + 75, nodes.notA_B.y);
    ctx.stroke();

    // Update info panel with Bayes calculation
    const posteriorColor = calc.pA_given_B > calc.pA ? greenColor : (calc.pA_given_B < calc.pA ? redColor : colors.text);
    const changeArrow = calc.pA_given_B > calc.pA ? ' (increased from prior)' : (calc.pA_given_B < calc.pA ? ' (decreased from prior)' : '');

    infoPanel.innerHTML =
      '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">' +
        '<div>' +
          '<div style="font-size: 13px; color: ' + colors.axisLabel + '; margin-bottom: 8px; font-weight: 600;">Bayes\' Theorem Formula:</div>' +
          '<div style="font-size: 14px; color: ' + colors.text + '; background: #27272a; padding: 12px; border-radius: 6px; font-family: JetBrains Mono, monospace;">' +
            'P(A|B) = <span style="color: ' + blueColor + ';">P(A)</span> * <span style="color: ' + greenColor + ';">P(B|A)</span> / <span style="color: ' + purpleColor + ';">P(B)</span>' +
          '</div>' +
          '<div style="margin-top: 12px; font-size: 13px; color: ' + colors.text + '; background: #27272a; padding: 12px; border-radius: 6px; font-family: JetBrains Mono, monospace;">' +
            'P(A|B) = <span style="color: ' + blueColor + ';">' + calc.pA.toFixed(3) + '</span> * <span style="color: ' + greenColor + ';">' + calc.pB_A.toFixed(3) + '</span> / <span style="color: ' + purpleColor + ';">' + calc.pB.toFixed(4) + '</span>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<div style="font-size: 13px; color: ' + colors.axisLabel + '; margin-bottom: 8px; font-weight: 600;">Results:</div>' +
          '<div style="background: #27272a; padding: 12px; border-radius: 6px;">' +
            '<div style="display: flex; justify-content: space-between; margin-bottom: 6px;">' +
              '<span style="color: ' + colors.axisLabel + ';">Prior P(A):</span>' +
              '<span style="color: ' + blueColor + '; font-weight: bold;">' + (calc.pA * 100).toFixed(1) + '%</span>' +
            '</div>' +
            '<div style="display: flex; justify-content: space-between; margin-bottom: 6px;">' +
              '<span style="color: ' + colors.axisLabel + ';">Total P(B):</span>' +
              '<span style="color: ' + purpleColor + '; font-weight: bold;">' + (calc.pB * 100).toFixed(2) + '%</span>' +
            '</div>' +
            '<div style="display: flex; justify-content: space-between; padding-top: 6px; border-top: 1px solid #3f3f46;">' +
              '<span style="color: ' + colors.text + '; font-weight: 600;">Posterior P(A|B):</span>' +
              '<span style="color: ' + posteriorColor + '; font-weight: bold; font-size: 16px;">' + (calc.pA_given_B * 100).toFixed(2) + '%</span>' +
            '</div>' +
            '<div style="font-size: 11px; color: ' + posteriorColor + '; text-align: right; margin-top: 4px;">' + changeArrow + '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="margin-top: 12px; padding: 10px; background: linear-gradient(135deg, ' + blueColor + '22, ' + greenColor + '22); border-radius: 6px; border-left: 3px solid ' + purpleColor + ';">' +
        '<div style="font-size: 12px; color: ' + colors.text + ';">' +
          '<strong>Interpretation:</strong> Given that event B occurred, the probability that it came from A is ' +
          '<strong style="color: ' + posteriorColor + ';">' + (calc.pA_given_B * 100).toFixed(2) + '%</strong>, ' +
          'compared to the prior probability of <strong style="color: ' + blueColor + ';">' + (calc.pA * 100).toFixed(1) + '%</strong>.' +
        '</div>' +
      '</div>';
  };

  // Handle click on canvas to highlight paths
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if clicked on a leaf node
    const checkNode = (node, path) => {
      const dx = x - node.x;
      const dy = y - node.y;
      if (dx * dx + dy * dy < 400) { // radius 20
        highlightPath = highlightPath === path ? null : path;
        render();
        return true;
      }
      return false;
    };

    if (!checkNode(nodes.A_B, 'A_B') &&
        !checkNode(nodes.A_notB, 'A_notB') &&
        !checkNode(nodes.notA_B, 'notA_B') &&
        !checkNode(nodes.notA_notB, 'notA_notB')) {
      // Clicked elsewhere, clear highlight
      if (highlightPath) {
        highlightPath = null;
        render();
      }
    }
  });

  // Slider event listeners
  pASlider.addEventListener('input', () => {
    pA = parseFloat(pASlider.value);
    document.getElementById('pA-' + containerId + '-val').textContent = pA.toFixed(2);
    render();
  });

  pB_ASlider.addEventListener('input', () => {
    pB_A = parseFloat(pB_ASlider.value);
    document.getElementById('pBA-' + containerId + '-val').textContent = pB_A.toFixed(2);
    render();
  });

  pB_notASlider.addEventListener('input', () => {
    pB_notA = parseFloat(pB_notASlider.value);
    document.getElementById('pBnotA-' + containerId + '-val').textContent = pB_notA.toFixed(2);
    render();
  });

  // Initial render
  render();
};

// Matrix Transformations Visualizer
JEEAnimations.matrixTransform = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  container.className = 'animation-container matrix-transform-visualizer';

  const self = this;

  // Main layout
  const mainWrapper = document.createElement('div');
  mainWrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px; width: 100%;';
  container.appendChild(mainWrapper);

  // Canvas container
  const canvasContainer = document.createElement('div');
  canvasContainer.style.cssText = 'position: relative; border-radius: 8px; overflow: hidden;';
  mainWrapper.appendChild(canvasContainer);

  const { canvas, ctx, width, height } = this.createCanvas(canvasContainer, 600, 450);
  canvas.style.cssText = 'display: block; border-radius: 8px;';

  // Matrix state
  let matrix = { a: 1, b: 0, c: 0, d: 1 };
  let targetMatrix = { a: 1, b: 0, c: 0, d: 1 };
  let animationProgress = 1;
  let isAnimating = false;
  let animationFrame = null;

  // Coordinate system settings
  const originX = width / 2;
  const originY = height / 2;
  const scale = 50;

  // Control panel
  const controlsPanel = document.createElement('div');
  controlsPanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 12px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px;';
  mainWrapper.appendChild(controlsPanel);

  // Matrix input section
  const matrixSection = document.createElement('div');
  matrixSection.style.cssText = 'display: flex; flex-direction: column; gap: 8px; flex: 1; min-width: 250px;';
  controlsPanel.appendChild(matrixSection);

  const matrixLabel = document.createElement('div');
  matrixLabel.style.cssText = 'font-size: 13px; color: var(--text-secondary, #a1a1aa); margin-bottom: 4px;';
  matrixLabel.innerHTML = 'Transformation Matrix <span style="font-family: monospace;">[a b; c d]</span>';
  matrixSection.appendChild(matrixLabel);

  const matrixGrid = document.createElement('div');
  matrixGrid.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 8px;';
  matrixSection.appendChild(matrixGrid);

  const createMatrixSlider = (label, key, min, max, value) => {
    const group = document.createElement('div');
    group.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';

    const labelEl = document.createElement('label');
    labelEl.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa);';
    labelEl.innerHTML = label + ': <span id="mt-' + key + '-val-' + containerId + '" style="color: var(--text-primary, #fafafa); font-weight: bold;">' + value.toFixed(2) + '</span>';

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = min;
    slider.max = max;
    slider.step = '0.1';
    slider.value = value;
    slider.id = 'mt-' + key + '-slider-' + containerId;

    group.appendChild(labelEl);
    group.appendChild(slider);
    return { group, slider };
  };

  const { group: aGroup, slider: aSlider } = createMatrixSlider('a', 'a', -3, 3, 1);
  const { group: bGroup, slider: bSlider } = createMatrixSlider('b', 'b', -3, 3, 0);
  const { group: cGroup, slider: cSlider } = createMatrixSlider('c', 'c', -3, 3, 0);
  const { group: dGroup, slider: dSlider } = createMatrixSlider('d', 'd', -3, 3, 1);

  matrixGrid.appendChild(aGroup);
  matrixGrid.appendChild(bGroup);
  matrixGrid.appendChild(cGroup);
  matrixGrid.appendChild(dGroup);

  // Preset buttons section
  const presetSection = document.createElement('div');
  presetSection.style.cssText = 'display: flex; flex-direction: column; gap: 8px; flex: 1; min-width: 300px;';
  controlsPanel.appendChild(presetSection);

  const presetLabel = document.createElement('div');
  presetLabel.style.cssText = 'font-size: 13px; color: var(--text-secondary, #a1a1aa); margin-bottom: 4px;';
  presetLabel.textContent = 'Preset Transformations';
  presetSection.appendChild(presetLabel);

  const presetGrid = document.createElement('div');
  presetGrid.style.cssText = 'display: flex; flex-wrap: wrap; gap: 6px;';
  presetSection.appendChild(presetGrid);

  const presets = [
    { name: 'Identity', matrix: { a: 1, b: 0, c: 0, d: 1 } },
    { name: 'Rotate 45', matrix: { a: Math.cos(Math.PI/4), b: -Math.sin(Math.PI/4), c: Math.sin(Math.PI/4), d: Math.cos(Math.PI/4) } },
    { name: 'Rotate 90', matrix: { a: 0, b: -1, c: 1, d: 0 } },
    { name: 'Scale 2x', matrix: { a: 2, b: 0, c: 0, d: 2 } },
    { name: 'Scale 0.5x', matrix: { a: 0.5, b: 0, c: 0, d: 0.5 } },
    { name: 'Reflect X', matrix: { a: 1, b: 0, c: 0, d: -1 } },
    { name: 'Reflect Y', matrix: { a: -1, b: 0, c: 0, d: 1 } },
    { name: 'Reflect y=x', matrix: { a: 0, b: 1, c: 1, d: 0 } },
    { name: 'Shear X', matrix: { a: 1, b: 0.5, c: 0, d: 1 } },
    { name: 'Shear Y', matrix: { a: 1, b: 0, c: 0.5, d: 1 } },
    { name: 'Projection X', matrix: { a: 1, b: 0, c: 0, d: 0 } },
    { name: 'Projection Y', matrix: { a: 0, b: 0, c: 0, d: 1 } },
  ];

  presets.forEach(preset => {
    const btn = document.createElement('button');
    btn.className = 'anim-btn';
    btn.textContent = preset.name;
    btn.style.cssText = 'padding: 5px 10px; font-size: 11px;';
    btn.addEventListener('click', () => applyPreset(preset.matrix));
    presetGrid.appendChild(btn);
  });

  // Info panel
  const infoPanel = document.createElement('div');
  infoPanel.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px;';
  mainWrapper.appendChild(infoPanel);

  const createInfoBox = (title, id) => {
    const box = document.createElement('div');
    box.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';

    const titleEl = document.createElement('div');
    titleEl.style.cssText = 'font-size: 11px; color: var(--text-secondary, #a1a1aa); text-transform: uppercase; letter-spacing: 0.5px;';
    titleEl.textContent = title;

    const valueEl = document.createElement('div');
    valueEl.id = 'mt-' + id + '-' + containerId;
    valueEl.style.cssText = 'font-size: 14px; color: var(--text-primary, #fafafa); font-weight: bold; font-family: monospace;';
    valueEl.textContent = '--';

    box.appendChild(titleEl);
    box.appendChild(valueEl);
    return box;
  };

  infoPanel.appendChild(createInfoBox('Determinant (Area Factor)', 'det'));
  infoPanel.appendChild(createInfoBox('Eigenvalues', 'eigenvalues'));
  infoPanel.appendChild(createInfoBox('Transformation Type', 'type'));
  infoPanel.appendChild(createInfoBox('Matrix Display', 'matrix-display'));

  // Helper functions
  const lerp = (a, b, t) => a + (b - a) * t;
  const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const transformPoint = (x, y, m) => ({
    x: m.a * x + m.b * y,
    y: m.c * x + m.d * y
  });

  const toCanvas = (x, y) => ({
    x: originX + x * scale,
    y: originY - y * scale
  });

  const calculateEigenvalues = (m) => {
    const trace = m.a + m.d;
    const det = m.a * m.d - m.b * m.c;
    const discriminant = trace * trace - 4 * det;

    if (discriminant >= 0) {
      const sqrt = Math.sqrt(discriminant);
      return {
        real: true,
        lambda1: (trace + sqrt) / 2,
        lambda2: (trace - sqrt) / 2
      };
    } else {
      const sqrt = Math.sqrt(-discriminant);
      return {
        real: false,
        realPart: trace / 2,
        imagPart: sqrt / 2
      };
    }
  };

  const calculateEigenvectors = (m, eigenvalues) => {
    if (!eigenvalues.real) return null;

    const getEigenvector = (lambda) => {
      const a = m.a - lambda;
      const b = m.b;
      const c = m.c;
      const d = m.d - lambda;

      if (Math.abs(a) > 0.001 || Math.abs(b) > 0.001) {
        if (Math.abs(b) > 0.001) {
          return { x: -b, y: a };
        } else {
          return { x: 1, y: 0 };
        }
      } else if (Math.abs(c) > 0.001 || Math.abs(d) > 0.001) {
        if (Math.abs(d) > 0.001) {
          return { x: -d, y: c };
        } else {
          return { x: 0, y: 1 };
        }
      }
      return null;
    };

    const v1 = getEigenvector(eigenvalues.lambda1);
    const v2 = getEigenvector(eigenvalues.lambda2);

    const normalize = (v) => {
      if (!v) return null;
      const mag = Math.sqrt(v.x * v.x + v.y * v.y);
      if (mag < 0.001) return null;
      return { x: v.x / mag, y: v.y / mag };
    };

    return {
      v1: normalize(v1),
      v2: normalize(v2)
    };
  };

  const getTransformationType = (m) => {
    const det = m.a * m.d - m.b * m.c;
    const isIdentity = Math.abs(m.a - 1) < 0.01 && Math.abs(m.d - 1) < 0.01 && Math.abs(m.b) < 0.01 && Math.abs(m.c) < 0.01;

    if (isIdentity) return 'Identity';
    if (Math.abs(det) < 0.01) return 'Singular (Projection)';
    if (det < 0) return 'Reflection (det < 0)';

    if (Math.abs(m.a - m.d) < 0.01 && Math.abs(m.b + m.c) < 0.01 && Math.abs(m.a*m.a + m.b*m.b - 1) < 0.01) {
      const angle = Math.atan2(m.c, m.a) * 180 / Math.PI;
      return 'Rotation (' + angle.toFixed(0) + ' deg)';
    }

    if (Math.abs(m.b) < 0.01 && Math.abs(m.c) < 0.01) {
      if (Math.abs(m.a - m.d) < 0.01) return 'Uniform Scale (' + m.a.toFixed(2) + 'x)';
      return 'Non-uniform Scale';
    }

    if ((Math.abs(m.a - 1) < 0.01 && Math.abs(m.d - 1) < 0.01) && (Math.abs(m.b) > 0.01 || Math.abs(m.c) > 0.01)) {
      return 'Shear';
    }

    return 'General Linear';
  };

  const updateInfo = (m) => {
    const det = m.a * m.d - m.b * m.c;
    const eigenvalues = calculateEigenvalues(m);
    const type = getTransformationType(m);

    document.getElementById('mt-det-' + containerId).textContent = det.toFixed(3);
    document.getElementById('mt-det-' + containerId).style.color = det < 0 ? '#ef4444' : (det === 0 ? '#f59e0b' : '#34d399');

    if (eigenvalues.real) {
      document.getElementById('mt-eigenvalues-' + containerId).textContent =
        eigenvalues.lambda1.toFixed(2) + ', ' + eigenvalues.lambda2.toFixed(2);
    } else {
      document.getElementById('mt-eigenvalues-' + containerId).textContent =
        eigenvalues.realPart.toFixed(2) + ' +/- ' + eigenvalues.imagPart.toFixed(2) + 'i';
    }

    document.getElementById('mt-type-' + containerId).textContent = type;
    document.getElementById('mt-matrix-display-' + containerId).innerHTML =
      '[' + m.a.toFixed(2) + ', ' + m.b.toFixed(2) + ']<br>[' + m.c.toFixed(2) + ', ' + m.d.toFixed(2) + ']';
  };

  const updateSliders = (m) => {
    aSlider.value = m.a;
    bSlider.value = m.b;
    cSlider.value = m.c;
    dSlider.value = m.d;
    document.getElementById('mt-a-val-' + containerId).textContent = m.a.toFixed(2);
    document.getElementById('mt-b-val-' + containerId).textContent = m.b.toFixed(2);
    document.getElementById('mt-c-val-' + containerId).textContent = m.c.toFixed(2);
    document.getElementById('mt-d-val-' + containerId).textContent = m.d.toFixed(2);
  };

  const applyPreset = (newMatrix) => {
    targetMatrix = { a: newMatrix.a, b: newMatrix.b, c: newMatrix.c, d: newMatrix.d };
    animationProgress = 0;
    isAnimating = true;
  };

  const render = () => {
    const colors = self.getColors();

    let currentMatrix = matrix;
    if (isAnimating) {
      animationProgress += 0.02;
      if (animationProgress >= 1) {
        animationProgress = 1;
        isAnimating = false;
        matrix = { a: targetMatrix.a, b: targetMatrix.b, c: targetMatrix.c, d: targetMatrix.d };
      }
      const t = easeInOutCubic(animationProgress);
      currentMatrix = {
        a: lerp(matrix.a, targetMatrix.a, t),
        b: lerp(matrix.b, targetMatrix.b, t),
        c: lerp(matrix.c, targetMatrix.c, t),
        d: lerp(matrix.d, targetMatrix.d, t)
      };
      if (!isAnimating) {
        updateSliders(matrix);
      }
    }

    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;
    for (let i = -10; i <= 10; i++) {
      const x = originX + i * scale;
      const y = originY + i * scale;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.strokeStyle = colors.axis;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    ctx.fillStyle = colors.axisLabel;
    ctx.font = '12px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('x', width - 15, originY - 10);
    ctx.fillText('y', originX + 15, 15);

    const originalPoints = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 1 }
    ];

    ctx.strokeStyle = colors.axisLabel + '66';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    originalPoints.forEach((p, i) => {
      const cp = toCanvas(p.x, p.y);
      if (i === 0) ctx.moveTo(cp.x, cp.y);
      else ctx.lineTo(cp.x, cp.y);
    });
    ctx.closePath();
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = colors.blue + '66';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + scale, originY);
    ctx.stroke();
    ctx.strokeStyle = colors.green + '66';
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX, originY - scale);
    ctx.stroke();
    ctx.setLineDash([]);

    const transformedPoints = originalPoints.map(p => transformPoint(p.x, p.y, currentMatrix));

    ctx.fillStyle = colors.purple + '22';
    ctx.beginPath();
    transformedPoints.forEach((p, i) => {
      const cp = toCanvas(p.x, p.y);
      if (i === 0) ctx.moveTo(cp.x, cp.y);
      else ctx.lineTo(cp.x, cp.y);
    });
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = colors.purple;
    ctx.lineWidth = 2;
    ctx.beginPath();
    transformedPoints.forEach((p, i) => {
      const cp = toCanvas(p.x, p.y);
      if (i === 0) ctx.moveTo(cp.x, cp.y);
      else ctx.lineTo(cp.x, cp.y);
    });
    ctx.closePath();
    ctx.stroke();

    const iHat = transformPoint(1, 0, currentMatrix);
    const jHat = transformPoint(0, 1, currentMatrix);

    const drawArrow = (from, to, color, label) => {
      const fromCanvas = toCanvas(from.x, from.y);
      const toCanvas2 = toCanvas(to.x, to.y);

      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(fromCanvas.x, fromCanvas.y);
      ctx.lineTo(toCanvas2.x, toCanvas2.y);
      ctx.stroke();

      const angle = Math.atan2(fromCanvas.y - toCanvas2.y, toCanvas2.x - fromCanvas.x);
      const headLen = 12;
      ctx.beginPath();
      ctx.moveTo(toCanvas2.x, toCanvas2.y);
      ctx.lineTo(toCanvas2.x - headLen * Math.cos(angle - 0.3), toCanvas2.y + headLen * Math.sin(angle - 0.3));
      ctx.moveTo(toCanvas2.x, toCanvas2.y);
      ctx.lineTo(toCanvas2.x - headLen * Math.cos(angle + 0.3), toCanvas2.y + headLen * Math.sin(angle + 0.3));
      ctx.stroke();

      ctx.fillStyle = color;
      ctx.font = 'bold 14px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(label, toCanvas2.x + 15 * Math.cos(angle + Math.PI/2), toCanvas2.y - 15 * Math.sin(angle + Math.PI/2));
    };

    drawArrow({ x: 0, y: 0 }, iHat, colors.blue, "i'");
    drawArrow({ x: 0, y: 0 }, jHat, colors.green, "j'");

    const eigenvalues = calculateEigenvalues(currentMatrix);
    if (eigenvalues.real && Math.abs(eigenvalues.lambda1 - eigenvalues.lambda2) > 0.01) {
      const eigenvectors = calculateEigenvectors(currentMatrix, eigenvalues);

      if (eigenvectors && eigenvectors.v1 && eigenvectors.v2) {
        const drawEigenvector = (v, lambda, color) => {
          const scaleFactor = 2;
          const from = { x: -v.x * scaleFactor, y: -v.y * scaleFactor };
          const to = { x: v.x * scaleFactor, y: v.y * scaleFactor };
          const fromCanvas = toCanvas(from.x, from.y);
          const toCanvas2 = toCanvas(to.x, to.y);

          ctx.strokeStyle = color;
          ctx.lineWidth = 2;
          ctx.setLineDash([8, 4]);
          ctx.beginPath();
          ctx.moveTo(fromCanvas.x, fromCanvas.y);
          ctx.lineTo(toCanvas2.x, toCanvas2.y);
          ctx.stroke();
          ctx.setLineDash([]);

          ctx.fillStyle = color;
          ctx.font = '11px system-ui';
          const labelPos = toCanvas(v.x * 2.2, v.y * 2.2);
          ctx.fillText('lambda=' + lambda.toFixed(2), labelPos.x, labelPos.y);
        };

        drawEigenvector(eigenvectors.v1, eigenvalues.lambda1, colors.orange);
        if (Math.abs(eigenvalues.lambda1 - eigenvalues.lambda2) > 0.1) {
          drawEigenvector(eigenvectors.v2, eigenvalues.lambda2, colors.cyan);
        }
      }
    }

    ctx.fillStyle = colors.text;
    ctx.beginPath();
    ctx.arc(originX, originY, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = '11px system-ui';
    ctx.textAlign = 'left';
    const legendY = 25;
    const legendX = 15;

    ctx.fillStyle = colors.blue;
    ctx.fillRect(legendX, legendY - 8, 12, 12);
    ctx.fillStyle = colors.text;
    ctx.fillText("i' = (a, c)", legendX + 18, legendY + 2);

    ctx.fillStyle = colors.green;
    ctx.fillRect(legendX, legendY + 12, 12, 12);
    ctx.fillStyle = colors.text;
    ctx.fillText("j' = (b, d)", legendX + 18, legendY + 22);

    ctx.fillStyle = colors.purple;
    ctx.fillRect(legendX, legendY + 32, 12, 12);
    ctx.fillStyle = colors.text;
    ctx.fillText("Transformed area", legendX + 18, legendY + 42);

    if (eigenvalues.real) {
      ctx.fillStyle = colors.orange;
      ctx.fillRect(legendX, legendY + 52, 12, 3);
      ctx.fillStyle = colors.text;
      ctx.fillText("Eigenvectors", legendX + 18, legendY + 56);
    }

    updateInfo(currentMatrix);

    animationFrame = requestAnimationFrame(render);
  };

  const onSliderChange = () => {
    if (isAnimating) {
      isAnimating = false;
      animationProgress = 1;
    }
    matrix.a = parseFloat(aSlider.value);
    matrix.b = parseFloat(bSlider.value);
    matrix.c = parseFloat(cSlider.value);
    matrix.d = parseFloat(dSlider.value);
    targetMatrix = { a: matrix.a, b: matrix.b, c: matrix.c, d: matrix.d };

    document.getElementById('mt-a-val-' + containerId).textContent = matrix.a.toFixed(2);
    document.getElementById('mt-b-val-' + containerId).textContent = matrix.b.toFixed(2);
    document.getElementById('mt-c-val-' + containerId).textContent = matrix.c.toFixed(2);
    document.getElementById('mt-d-val-' + containerId).textContent = matrix.d.toFixed(2);
  };

  aSlider.addEventListener('input', onSliderChange);
  bSlider.addEventListener('input', onSliderChange);
  cSlider.addEventListener('input', onSliderChange);
  dSlider.addEventListener('input', onSliderChange);

  render();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.removedNodes.forEach((node) => {
        if (node === container || (node.contains && node.contains(container))) {
          if (animationFrame) cancelAnimationFrame(animationFrame);
          observer.disconnect();
        }
      });
    });
  });
  if (container.parentNode) {
    observer.observe(container.parentNode, { childList: true });
  }
};

// ============================================
// EPSILON-DELTA LIMIT DEFINITION VISUALIZER
// ============================================

JEEAnimations.epsilonDelta = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  container.className = 'animation-container epsilon-delta-visualizer';

  const self = this;

  // ========== FUNCTION DEFINITIONS ==========
  const functions = {
    'x^2': {
      f: (x) => x * x,
      name: 'x^2',
      defaultA: 2,
      defaultL: 4
    },
    'x^3': {
      f: (x) => x * x * x,
      name: 'x^3',
      defaultA: 1.5,
      defaultL: 3.375
    },
    '2x + 1': {
      f: (x) => 2 * x + 1,
      name: '2x + 1',
      defaultA: 2,
      defaultL: 5
    },
    'sin(x)/x': {
      f: (x) => x === 0 ? 1 : Math.sin(x) / x,
      name: 'sin(x)/x',
      defaultA: 0,
      defaultL: 1
    },
    '(x^2 - 4)/(x - 2)': {
      f: (x) => x === 2 ? 4 : (x * x - 4) / (x - 2),
      name: '(x^2 - 4)/(x - 2)',
      defaultA: 2,
      defaultL: 4
    },
    'sqrt(x)': {
      f: (x) => x >= 0 ? Math.sqrt(x) : NaN,
      name: 'sqrt(x)',
      defaultA: 4,
      defaultL: 2
    }
  };

  // ========== STATE ==========
  let currentFunc = 'x^2';
  let pointA = functions[currentFunc].defaultA;
  let limitL = functions[currentFunc].defaultL;
  let epsilon = 0.5;
  let delta = 0.5;
  let autoAdjustDelta = false;

  // Canvas dimensions
  const width = 600;
  const height = 420;

  // Dynamic ranges
  let xRange = [-1, 6];
  let yRange = [-1, 8];

  // ========== CREATE LAYOUT ==========
  const mainContainer = document.createElement('div');
  mainContainer.style.cssText = 'display: flex; flex-direction: column; gap: 16px;';

  // Function selector panel
  const funcPanel = document.createElement('div');
  funcPanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 12px; align-items: center;';

  const funcLabel = document.createElement('span');
  funcLabel.style.cssText = 'color: var(--text-secondary, #a1a1aa); font-size: 13px; margin-right: 8px;';
  funcLabel.textContent = 'Function:';
  funcPanel.appendChild(funcLabel);

  const funcSelect = document.createElement('select');
  funcSelect.style.cssText = 'padding: 8px 12px; border-radius: 8px; background: var(--bg-primary, #09090b); color: var(--text-primary, #fafafa); border: 1px solid var(--border-color, #27272a); font-size: 14px;';
  Object.keys(functions).forEach(key => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = 'f(x) = ' + key;
    funcSelect.appendChild(option);
  });
  funcPanel.appendChild(funcSelect);

  mainContainer.appendChild(funcPanel);

  // Controls panel
  const controlsPanel = document.createElement('div');
  controlsPanel.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; padding: 16px; background: var(--bg-secondary, #18181b); border-radius: 12px;';

  // Epsilon control
  const epsilonControl = document.createElement('div');
  epsilonControl.innerHTML = `
    <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; color: #34d399; font-size: 14px; font-weight: 600;">
      <span style="font-size: 18px;">epsilon</span> (tolerance around L)
      <span id="epsilon-value-${containerId}" style="background: rgba(52, 211, 153, 0.2); padding: 2px 8px; border-radius: 4px;">${epsilon.toFixed(2)}</span>
    </label>
    <input type="range" id="epsilon-slider-${containerId}" min="0.05" max="2" step="0.01" value="${epsilon}" style="width: 100%;">
  `;
  controlsPanel.appendChild(epsilonControl);

  // Delta control
  const deltaControl = document.createElement('div');
  deltaControl.innerHTML = `
    <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; color: #60a5fa; font-size: 14px; font-weight: 600;">
      <span style="font-size: 18px;">delta</span> (distance from a)
      <span id="delta-value-${containerId}" style="background: rgba(96, 165, 250, 0.2); padding: 2px 8px; border-radius: 4px;">${delta.toFixed(2)}</span>
    </label>
    <input type="range" id="delta-slider-${containerId}" min="0.05" max="2" step="0.01" value="${delta}" style="width: 100%;">
  `;
  controlsPanel.appendChild(deltaControl);

  mainContainer.appendChild(controlsPanel);

  // Auto-adjust toggle
  const togglePanel = document.createElement('div');
  togglePanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 16px; padding: 12px 16px; background: var(--bg-secondary, #18181b); border-radius: 12px; align-items: center;';
  togglePanel.innerHTML = `
    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; color: var(--text-primary, #fafafa); font-size: 14px;">
      <input type="checkbox" id="auto-delta-${containerId}" style="width: 16px; height: 16px; accent-color: #f59e0b;">
      <span>Auto-adjust delta to satisfy condition</span>
    </label>
    <div id="condition-status-${containerId}" style="margin-left: auto; padding: 6px 16px; border-radius: 20px; font-weight: 600; font-size: 13px;"></div>
  `;
  mainContainer.appendChild(togglePanel);

  // Canvas container
  const canvasContainer = document.createElement('div');
  canvasContainer.style.cssText = 'position: relative; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color, #27272a);';

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'display: block; width: 100%; max-width: 600px;';
  canvasContainer.appendChild(canvas);
  mainContainer.appendChild(canvasContainer);

  // Formal definition panel
  const definitionPanel = document.createElement('div');
  definitionPanel.style.cssText = 'padding: 16px; background: linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(52, 211, 153, 0.1)); border-radius: 12px; text-align: center; border: 1px solid rgba(96, 165, 250, 0.3);';
  definitionPanel.innerHTML = `
    <div style="font-size: 14px; color: var(--text-secondary, #a1a1aa); margin-bottom: 8px;">
      <strong>Formal Definition of Limit:</strong>
    </div>
    <div style="font-size: 16px; color: var(--text-primary, #fafafa); font-family: ui-monospace, monospace;">
      For every <span style="color: #34d399;">epsilon</span> > 0, there exists <span style="color: #60a5fa;">delta</span> > 0 such that:
    </div>
    <div style="font-size: 18px; color: #f59e0b; font-family: ui-monospace, monospace; margin-top: 8px;">
      0 < |x - a| < <span style="color: #60a5fa;">delta</span> => |f(x) - L| < <span style="color: #34d399;">epsilon</span>
    </div>
  `;
  mainContainer.appendChild(definitionPanel);

  // Info panel
  const infoPanel = document.createElement('div');
  infoPanel.id = 'epsilon-delta-info-' + containerId;
  infoPanel.className = 'anim-info';
  infoPanel.style.cssText = 'padding: 16px; background: var(--bg-secondary, #18181b); border-radius: 12px;';
  mainContainer.appendChild(infoPanel);

  container.appendChild(mainContainer);

  // ========== SETUP CANVAS ==========
  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  // ========== GET ELEMENTS ==========
  const epsilonSlider = document.getElementById('epsilon-slider-' + containerId);
  const epsilonValue = document.getElementById('epsilon-value-' + containerId);
  const deltaSlider = document.getElementById('delta-slider-' + containerId);
  const deltaValue = document.getElementById('delta-value-' + containerId);
  const autoDeltaCheck = document.getElementById('auto-delta-' + containerId);
  const conditionStatus = document.getElementById('condition-status-' + containerId);

  // ========== COORDINATE SYSTEM ==========
  const padding = 50;
  const graphWidth = width - 2 * padding;
  const graphHeight = height - 2 * padding;

  const toCanvasX = (x) => padding + ((x - xRange[0]) / (xRange[1] - xRange[0])) * graphWidth;
  const toCanvasY = (y) => height - padding - ((y - yRange[0]) / (yRange[1] - yRange[0])) * graphHeight;

  // ========== FIND OPTIMAL DELTA ==========
  const findOptimalDelta = (a, L, eps, f) => {
    // Binary search for the largest delta that works
    let lo = 0.001;
    let hi = 2;
    let result = lo;

    for (let iter = 0; iter < 50; iter++) {
      const mid = (lo + hi) / 2;
      let works = true;

      // Check many points in the delta neighborhood
      const step = mid / 50;
      for (let dx = -mid; dx <= mid; dx += step) {
        if (Math.abs(dx) < 0.0001) continue; // Skip x = a
        const x = a + dx;
        const fx = f(x);
        if (isNaN(fx) || !isFinite(fx)) continue;
        if (Math.abs(fx - L) >= eps) {
          works = false;
          break;
        }
      }

      if (works) {
        result = mid;
        lo = mid;
      } else {
        hi = mid;
      }
    }

    return Math.min(result, 2);
  };

  // ========== CHECK CONDITION ==========
  const checkCondition = () => {
    const f = functions[currentFunc].f;
    const step = delta / 20;

    for (let dx = -delta; dx <= delta; dx += step) {
      if (Math.abs(dx) < 0.0001) continue;
      const x = pointA + dx;
      const fx = f(x);
      if (isNaN(fx) || !isFinite(fx)) continue;
      if (Math.abs(fx - limitL) >= epsilon) {
        return false;
      }
    }
    return true;
  };

  // ========== RENDER ==========
  const render = () => {
    const colors = self.getColors();
    const f = functions[currentFunc].f;
    const isSatisfied = checkCondition();

    // Clear canvas
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 0.5;

    for (let x = Math.ceil(xRange[0]); x <= xRange[1]; x++) {
      const cx = toCanvasX(x);
      ctx.beginPath();
      ctx.moveTo(cx, padding);
      ctx.lineTo(cx, height - padding);
      ctx.stroke();
    }

    for (let y = Math.ceil(yRange[0]); y <= yRange[1]; y++) {
      const cy = toCanvasY(y);
      ctx.beginPath();
      ctx.moveTo(padding, cy);
      ctx.lineTo(width - padding, cy);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = colors.axis;
    ctx.lineWidth = 1.5;

    // X-axis
    const yAxisPos = toCanvasY(0);
    ctx.beginPath();
    ctx.moveTo(padding, yAxisPos);
    ctx.lineTo(width - padding, yAxisPos);
    ctx.stroke();

    // Y-axis
    const xAxisPos = toCanvasX(0);
    ctx.beginPath();
    ctx.moveTo(xAxisPos, padding);
    ctx.lineTo(xAxisPos, height - padding);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = colors.axisLabel;
    ctx.font = '12px system-ui';
    ctx.textAlign = 'center';

    for (let x = Math.ceil(xRange[0]); x <= xRange[1]; x++) {
      if (x !== 0) {
        ctx.fillText(x.toString(), toCanvasX(x), yAxisPos + 18);
      }
    }

    ctx.textAlign = 'right';
    for (let y = Math.ceil(yRange[0]); y <= yRange[1]; y++) {
      if (y !== 0) {
        ctx.fillText(y.toString(), xAxisPos - 8, toCanvasY(y) + 4);
      }
    }

    // ========== DRAW EPSILON BAND (horizontal around L) ==========
    const epsilonColor = isSatisfied ? '#34d399' : '#ef4444';
    const epsilonBandTop = toCanvasY(limitL + epsilon);
    const epsilonBandBottom = toCanvasY(limitL - epsilon);

    ctx.fillStyle = epsilonColor + '20';
    ctx.fillRect(padding, epsilonBandTop, graphWidth, epsilonBandBottom - epsilonBandTop);

    // Epsilon band boundaries
    ctx.strokeStyle = epsilonColor;
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);

    ctx.beginPath();
    ctx.moveTo(padding, epsilonBandTop);
    ctx.lineTo(width - padding, epsilonBandTop);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(padding, epsilonBandBottom);
    ctx.lineTo(width - padding, epsilonBandBottom);
    ctx.stroke();

    ctx.setLineDash([]);

    // Epsilon labels
    ctx.fillStyle = epsilonColor;
    ctx.font = 'bold 12px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('L + epsilon', width - padding + 5, epsilonBandTop + 4);
    ctx.fillText('L - epsilon', width - padding + 5, epsilonBandBottom + 4);

    // ========== DRAW DELTA BAND (vertical around a) ==========
    const deltaColor = '#60a5fa';
    const deltaBandLeft = toCanvasX(pointA - delta);
    const deltaBandRight = toCanvasX(pointA + delta);

    ctx.fillStyle = deltaColor + '20';
    ctx.fillRect(deltaBandLeft, padding, deltaBandRight - deltaBandLeft, graphHeight);

    // Delta band boundaries
    ctx.strokeStyle = deltaColor;
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);

    ctx.beginPath();
    ctx.moveTo(deltaBandLeft, padding);
    ctx.lineTo(deltaBandLeft, height - padding);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(deltaBandRight, padding);
    ctx.lineTo(deltaBandRight, height - padding);
    ctx.stroke();

    ctx.setLineDash([]);

    // Delta labels
    ctx.fillStyle = deltaColor;
    ctx.font = 'bold 12px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('a - delta', deltaBandLeft, height - padding + 35);
    ctx.fillText('a + delta', deltaBandRight, height - padding + 35);

    // ========== DRAW FUNCTION CURVE ==========
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    let started = false;
    const step = (xRange[1] - xRange[0]) / 300;

    for (let x = xRange[0]; x <= xRange[1]; x += step) {
      const y = f(x);
      if (isNaN(y) || !isFinite(y) || y < yRange[0] - 1 || y > yRange[1] + 1) {
        started = false;
        continue;
      }

      const cx = toCanvasX(x);
      const cy = toCanvasY(y);

      if (!started) {
        ctx.moveTo(cx, cy);
        started = true;
      } else {
        ctx.lineTo(cx, cy);
      }
    }
    ctx.stroke();

    // ========== HIGHLIGHT CURVE IN DELTA NEIGHBORHOOD ==========
    const highlightColor = isSatisfied ? '#34d399' : '#ef4444';
    ctx.strokeStyle = highlightColor;
    ctx.lineWidth = 4;
    ctx.beginPath();

    started = false;
    for (let x = pointA - delta; x <= pointA + delta; x += step / 2) {
      if (Math.abs(x - pointA) < 0.001) continue; // Skip exactly a
      const y = f(x);
      if (isNaN(y) || !isFinite(y)) continue;

      const cx = toCanvasX(x);
      const cy = toCanvasY(y);

      if (!started) {
        ctx.moveTo(cx, cy);
        started = true;
      } else {
        ctx.lineTo(cx, cy);
      }
    }
    ctx.stroke();

    // ========== DRAW LIMIT POINT (a, L) ==========
    const aX = toCanvasX(pointA);
    const lY = toCanvasY(limitL);

    // Draw horizontal dashed line from y-axis to (a, L)
    ctx.strokeStyle = colors.axisLabel + '88';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(xAxisPos, lY);
    ctx.lineTo(aX, lY);
    ctx.stroke();

    // Draw vertical dashed line from x-axis to (a, L)
    ctx.beginPath();
    ctx.moveTo(aX, yAxisPos);
    ctx.lineTo(aX, lY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw the limit point
    ctx.fillStyle = '#a855f7';
    ctx.beginPath();
    ctx.arc(aX, lY, 8, 0, Math.PI * 2);
    ctx.fill();

    // Add glow
    const gradient = ctx.createRadialGradient(aX, lY, 0, aX, lY, 20);
    gradient.addColorStop(0, '#a855f7' + '66');
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(aX, lY, 20, 0, Math.PI * 2);
    ctx.fill();

    // Label the point
    ctx.fillStyle = colors.text;
    ctx.font = 'bold 14px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('(a, L)', aX + 15, lY - 10);

    // ========== DRAW L LABEL ON Y-AXIS ==========
    ctx.fillStyle = '#a855f7';
    ctx.font = 'bold 14px system-ui';
    ctx.textAlign = 'right';
    ctx.fillText('L = ' + limitL.toFixed(2), xAxisPos - 10, lY + 4);

    // ========== DRAW A LABEL ON X-AXIS ==========
    ctx.fillStyle = '#a855f7';
    ctx.textAlign = 'center';
    ctx.fillText('a = ' + pointA.toFixed(1), aX, yAxisPos + 35);

    // ========== DRAW FUNCTION NAME ==========
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 16px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('f(x) = ' + functions[currentFunc].name, padding + 10, padding + 25);

    // ========== UPDATE STATUS ==========
    if (isSatisfied) {
      conditionStatus.textContent = 'Condition SATISFIED';
      conditionStatus.style.cssText = 'margin-left: auto; padding: 6px 16px; border-radius: 20px; font-weight: 600; font-size: 13px; background: rgba(52, 211, 153, 0.2); color: #34d399; border: 1px solid #34d399;';
    } else {
      conditionStatus.textContent = 'Condition VIOLATED';
      conditionStatus.style.cssText = 'margin-left: auto; padding: 6px 16px; border-radius: 20px; font-weight: 600; font-size: 13px; background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid #ef4444;';
    }

    // ========== UPDATE INFO PANEL ==========
    const fAtA = f(pointA);
    const displayFAtA = isNaN(fAtA) || !isFinite(fAtA) ? 'undefined' : fAtA.toFixed(4);

    infoPanel.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
        <div>
          <div style="color: var(--text-secondary, #a1a1aa); font-size: 12px; margin-bottom: 4px;">Limit Point</div>
          <div style="color: var(--text-primary, #fafafa); font-size: 16px;">
            <strong>a = ${pointA.toFixed(2)}</strong>, <strong>L = ${limitL.toFixed(4)}</strong>
          </div>
        </div>
        <div>
          <div style="color: var(--text-secondary, #a1a1aa); font-size: 12px; margin-bottom: 4px;">f(a)</div>
          <div style="color: var(--text-primary, #fafafa); font-size: 16px;">
            <strong>${displayFAtA}</strong>
          </div>
        </div>
        <div>
          <div style="color: #34d399; font-size: 12px; margin-bottom: 4px;">epsilon (tolerance around L)</div>
          <div style="color: var(--text-primary, #fafafa); font-size: 16px;">
            <strong>${epsilon.toFixed(3)}</strong>
          </div>
        </div>
        <div>
          <div style="color: #60a5fa; font-size: 12px; margin-bottom: 4px;">delta (distance from a)</div>
          <div style="color: var(--text-primary, #fafafa); font-size: 16px;">
            <strong>${delta.toFixed(3)}</strong>
          </div>
        </div>
      </div>
      <div style="margin-top: 16px; padding: 12px; background: ${isSatisfied ? 'rgba(52, 211, 153, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; border-radius: 8px; border: 1px solid ${isSatisfied ? '#34d399' : '#ef4444'}33;">
        <div style="color: ${isSatisfied ? '#34d399' : '#ef4444'}; font-size: 14px;">
          ${isSatisfied
            ? 'For all x with 0 < |x - ' + pointA.toFixed(1) + '| < ' + delta.toFixed(3) + ', we have |f(x) - ' + limitL.toFixed(2) + '| < ' + epsilon.toFixed(3)
            : 'There exists x with 0 < |x - ' + pointA.toFixed(1) + '| < ' + delta.toFixed(3) + ' where |f(x) - ' + limitL.toFixed(2) + '| >= ' + epsilon.toFixed(3)}
        </div>
      </div>
    `;
  };

  // ========== EVENT LISTENERS ==========
  funcSelect.addEventListener('change', () => {
    currentFunc = funcSelect.value;
    pointA = functions[currentFunc].defaultA;
    limitL = functions[currentFunc].defaultL;

    // Adjust ranges based on function
    if (currentFunc === 'sin(x)/x') {
      xRange[0] = -4;
      xRange[1] = 4;
      yRange[0] = -0.5;
      yRange[1] = 1.5;
    } else if (currentFunc === 'sqrt(x)') {
      xRange[0] = -1;
      xRange[1] = 8;
      yRange[0] = -1;
      yRange[1] = 4;
    } else {
      xRange[0] = -1;
      xRange[1] = 6;
      yRange[0] = -1;
      yRange[1] = 8;
    }

    if (autoAdjustDelta) {
      delta = findOptimalDelta(pointA, limitL, epsilon, functions[currentFunc].f);
      deltaSlider.value = delta;
      deltaValue.textContent = delta.toFixed(2);
    }

    render();
  });

  epsilonSlider.addEventListener('input', () => {
    epsilon = parseFloat(epsilonSlider.value);
    epsilonValue.textContent = epsilon.toFixed(2);

    if (autoAdjustDelta) {
      delta = findOptimalDelta(pointA, limitL, epsilon, functions[currentFunc].f);
      deltaSlider.value = delta;
      deltaValue.textContent = delta.toFixed(2);
    }

    render();
  });

  deltaSlider.addEventListener('input', () => {
    delta = parseFloat(deltaSlider.value);
    deltaValue.textContent = delta.toFixed(2);
    render();
  });

  autoDeltaCheck.addEventListener('change', () => {
    autoAdjustDelta = autoDeltaCheck.checked;
    if (autoAdjustDelta) {
      delta = findOptimalDelta(pointA, limitL, epsilon, functions[currentFunc].f);
      deltaSlider.value = delta;
      deltaValue.textContent = delta.toFixed(2);
      deltaSlider.disabled = true;
      deltaSlider.style.opacity = '0.5';
    } else {
      deltaSlider.disabled = false;
      deltaSlider.style.opacity = '1';
    }
    render();
  });

  // Initial render
  render();
};

// 3D Lines and Planes Intersection Visualization
JEEAnimations.threeDGeometry = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  container.className = 'animation-container three-d-geometry';

  const self = this;

  // Create main layout
  const mainWrapper = document.createElement('div');
  mainWrapper.style.cssText = 'display: flex; flex-direction: column; gap: 16px; width: 100%;';
  container.appendChild(mainWrapper);

  // Canvas container
  const canvasContainer = document.createElement('div');
  canvasContainer.style.cssText = 'position: relative; border-radius: 8px; overflow: hidden; touch-action: none;';
  mainWrapper.appendChild(canvasContainer);

  const { canvas, ctx, width, height } = this.createCanvas(canvasContainer, 600, 450);
  canvas.style.cursor = 'grab';

  // Controls container
  const controlsWrapper = document.createElement('div');
  controlsWrapper.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;';
  mainWrapper.appendChild(controlsWrapper);

  // Plane controls
  const planeControls = document.createElement('div');
  planeControls.className = 'anim-controls';
  planeControls.innerHTML = '<div style="font-weight: 600; margin-bottom: 8px; color: #34d399;">Plane: ax + by + cz = d</div>';
  controlsWrapper.appendChild(planeControls);

  const planeASlider = this.createSlider(planeControls, 'a', -3, 3, 1, 0.5, '');
  const planeBSlider = this.createSlider(planeControls, 'b', -3, 3, 1, 0.5, '');
  const planeCSlider = this.createSlider(planeControls, 'c', -3, 3, 1, 0.5, '');
  const planeDSlider = this.createSlider(planeControls, 'd', -5, 5, 2, 0.5, '');

  // Line controls
  const lineControls = document.createElement('div');
  lineControls.className = 'anim-controls';
  lineControls.innerHTML = '<div style="font-weight: 600; margin-bottom: 8px; color: #60a5fa;">Line: r = a + lambda * b</div>';
  controlsWrapper.appendChild(lineControls);

  // Line point (a)
  const lineX0Slider = this.createSlider(lineControls, 'Point x0', -3, 3, 0, 0.5, '');
  const lineY0Slider = this.createSlider(lineControls, 'Point y0', -3, 3, 0, 0.5, '');
  const lineZ0Slider = this.createSlider(lineControls, 'Point z0', -3, 3, 0, 0.5, '');

  // Line direction (b)
  const lineDxSlider = this.createSlider(lineControls, 'Dir l', -3, 3, 1, 0.5, '');
  const lineDySlider = this.createSlider(lineControls, 'Dir m', -3, 3, 2, 0.5, '');
  const lineDzSlider = this.createSlider(lineControls, 'Dir n', -3, 3, 1, 0.5, '');

  // Info panel
  const infoPanel = document.createElement('div');
  infoPanel.className = 'anim-info';
  infoPanel.style.cssText = 'background: rgba(0,0,0,0.3); padding: 16px; border-radius: 8px; font-family: system-ui;';
  mainWrapper.appendChild(infoPanel);

  // State variables
  let rotationX = 25;
  let rotationY = 45;
  let isDragging = false;
  let lastMouseX = 0;
  let lastMouseY = 0;

  // 3D projection function
  const project3D = (x, y, z) => {
    const radX = rotationX * Math.PI / 180;
    const radY = rotationY * Math.PI / 180;

    // Rotate around X axis
    let y1 = y * Math.cos(radX) - z * Math.sin(radX);
    let z1 = y * Math.sin(radX) + z * Math.cos(radX);

    // Rotate around Y axis
    let x2 = x * Math.cos(radY) + z1 * Math.sin(radY);
    let z2 = -x * Math.sin(radY) + z1 * Math.cos(radY);

    // Orthographic projection with scale
    const scale = 50;
    const offsetX = width / 2;
    const offsetY = height / 2;

    return {
      x: offsetX + x2 * scale,
      y: offsetY - y1 * scale,
      z: z2
    };
  };

  // Draw arrow head
  const drawArrowHead = (fromX, fromY, toX, toY, color) => {
    const angle = Math.atan2(toY - fromY, toX - fromX);
    const headLength = 10;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headLength * Math.cos(angle - 0.3), toY - headLength * Math.sin(angle - 0.3));
    ctx.lineTo(toX - headLength * Math.cos(angle + 0.3), toY - headLength * Math.sin(angle + 0.3));
    ctx.closePath();
    ctx.fill();
  };

  // Calculate intersection of line and plane
  const calculateIntersection = (linePoint, lineDir, planeNormal, planeD) => {
    const dotND = planeNormal.x * lineDir.x + planeNormal.y * lineDir.y + planeNormal.z * lineDir.z;
    const dotNP0 = planeNormal.x * linePoint.x + planeNormal.y * linePoint.y + planeNormal.z * linePoint.z;

    if (Math.abs(dotND) < 0.0001) {
      if (Math.abs(planeD - dotNP0) < 0.0001) {
        return { type: 'in_plane' };
      }
      return { type: 'parallel' };
    }

    const t = (planeD - dotNP0) / dotND;
    return {
      type: 'intersection',
      point: {
        x: linePoint.x + t * lineDir.x,
        y: linePoint.y + t * lineDir.y,
        z: linePoint.z + t * lineDir.z
      },
      t: t
    };
  };

  // Calculate angle between line and plane
  const calculateAngle = (lineDir, planeNormal) => {
    const dotProduct = lineDir.x * planeNormal.x + lineDir.y * planeNormal.y + lineDir.z * planeNormal.z;
    const lineMag = Math.sqrt(lineDir.x * lineDir.x + lineDir.y * lineDir.y + lineDir.z * lineDir.z);
    const planeMag = Math.sqrt(planeNormal.x * planeNormal.x + planeNormal.y * planeNormal.y + planeNormal.z * planeNormal.z);

    if (lineMag < 0.0001 || planeMag < 0.0001) return 0;

    const sinTheta = Math.abs(dotProduct) / (lineMag * planeMag);
    return Math.asin(Math.min(1, sinTheta)) * 180 / Math.PI;
  };

  // Check relationship between line and plane
  const getRelationship = (lineDir, planeNormal, angle) => {
    const dotProduct = lineDir.x * planeNormal.x + lineDir.y * planeNormal.y + lineDir.z * planeNormal.z;

    if (Math.abs(dotProduct) < 0.0001) {
      return 'parallel';
    }

    if (angle > 89) {
      return 'perpendicular';
    }

    return 'intersecting';
  };

  const render = () => {
    const colors = self.getColors();

    const planeA = parseFloat(planeASlider.value);
    const planeB = parseFloat(planeBSlider.value);
    const planeC = parseFloat(planeCSlider.value);
    const planeD = parseFloat(planeDSlider.value);

    const linePoint = {
      x: parseFloat(lineX0Slider.value),
      y: parseFloat(lineY0Slider.value),
      z: parseFloat(lineZ0Slider.value)
    };

    const lineDir = {
      x: parseFloat(lineDxSlider.value),
      y: parseFloat(lineDySlider.value),
      z: parseFloat(lineDzSlider.value)
    };

    const planeNormal = { x: planeA, y: planeB, z: planeC };

    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, width, height);

    // Draw grid on XY plane (z=0)
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 0.5;
    for (let i = -4; i <= 4; i++) {
      const p1 = project3D(-4, i, 0);
      const p2 = project3D(4, i, 0);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      const p3 = project3D(i, -4, 0);
      const p4 = project3D(i, 4, 0);
      ctx.beginPath();
      ctx.moveTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
      ctx.stroke();
    }

    // Draw axes
    const origin = project3D(0, 0, 0);
    const axisLength = 4;

    // X axis (orange)
    const xEnd = project3D(axisLength, 0, 0);
    ctx.strokeStyle = colors.orange;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(xEnd.x, xEnd.y);
    ctx.stroke();
    drawArrowHead(origin.x, origin.y, xEnd.x, xEnd.y, colors.orange);
    ctx.fillStyle = colors.orange;
    ctx.font = 'bold 14px system-ui';
    ctx.fillText('X', xEnd.x + 10, xEnd.y);

    // Y axis (green)
    const yEnd = project3D(0, axisLength, 0);
    ctx.strokeStyle = colors.green;
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(yEnd.x, yEnd.y);
    ctx.stroke();
    drawArrowHead(origin.x, origin.y, yEnd.x, yEnd.y, colors.green);
    ctx.fillStyle = colors.green;
    ctx.fillText('Y', yEnd.x + 10, yEnd.y);

    // Z axis (cyan)
    const zEnd = project3D(0, 0, axisLength);
    ctx.strokeStyle = colors.cyan;
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(zEnd.x, zEnd.y);
    ctx.stroke();
    drawArrowHead(origin.x, origin.y, zEnd.x, zEnd.y, colors.cyan);
    ctx.fillStyle = colors.cyan;
    ctx.fillText('Z', zEnd.x + 10, zEnd.y - 5);

    // Draw plane
    const planeMag = Math.sqrt(planeA * planeA + planeB * planeB + planeC * planeC);
    if (planeMag > 0.01) {
      const size = 3.5;

      let u, v;
      if (Math.abs(planeC) > 0.01) {
        u = { x: 1, y: 0, z: -planeA / planeC };
        v = { x: 0, y: 1, z: -planeB / planeC };
      } else if (Math.abs(planeB) > 0.01) {
        u = { x: 1, y: -planeA / planeB, z: 0 };
        v = { x: 0, y: -planeC / planeB, z: 1 };
      } else if (Math.abs(planeA) > 0.01) {
        u = { x: -planeB / planeA, y: 1, z: 0 };
        v = { x: -planeC / planeA, y: 0, z: 1 };
      } else {
        u = { x: 1, y: 0, z: 0 };
        v = { x: 0, y: 1, z: 0 };
      }

      const uMag = Math.sqrt(u.x * u.x + u.y * u.y + u.z * u.z);
      const vMag = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
      u = { x: u.x / uMag, y: u.y / uMag, z: u.z / uMag };
      v = { x: v.x / vMag, y: v.y / vMag, z: v.z / vMag };

      let centerPoint;
      if (Math.abs(planeC) > 0.01) {
        centerPoint = { x: 0, y: 0, z: planeD / planeC };
      } else if (Math.abs(planeB) > 0.01) {
        centerPoint = { x: 0, y: planeD / planeB, z: 0 };
      } else if (Math.abs(planeA) > 0.01) {
        centerPoint = { x: planeD / planeA, y: 0, z: 0 };
      } else {
        centerPoint = { x: 0, y: 0, z: 0 };
      }

      const corners = [
        { x: centerPoint.x - size * u.x - size * v.x, y: centerPoint.y - size * u.y - size * v.y, z: centerPoint.z - size * u.z - size * v.z },
        { x: centerPoint.x + size * u.x - size * v.x, y: centerPoint.y + size * u.y - size * v.y, z: centerPoint.z + size * u.z - size * v.z },
        { x: centerPoint.x + size * u.x + size * v.x, y: centerPoint.y + size * u.y + size * v.y, z: centerPoint.z + size * u.z + size * v.z },
        { x: centerPoint.x - size * u.x + size * v.x, y: centerPoint.y - size * u.y + size * v.y, z: centerPoint.z - size * u.z + size * v.z }
      ];

      const projectedCorners = corners.map(c => project3D(c.x, c.y, c.z));

      ctx.fillStyle = 'rgba(52, 211, 153, 0.25)';
      ctx.strokeStyle = colors.green;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(projectedCorners[0].x, projectedCorners[0].y);
      for (let i = 1; i < projectedCorners.length; i++) {
        ctx.lineTo(projectedCorners[i].x, projectedCorners[i].y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw plane normal
      const normalScale = 1.5;
      const normalEnd = project3D(
        centerPoint.x + planeA / planeMag * normalScale,
        centerPoint.y + planeB / planeMag * normalScale,
        centerPoint.z + planeC / planeMag * normalScale
      );
      const centerProj = project3D(centerPoint.x, centerPoint.y, centerPoint.z);

      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(centerProj.x, centerProj.y);
      ctx.lineTo(normalEnd.x, normalEnd.y);
      ctx.stroke();
      ctx.setLineDash([]);
      drawArrowHead(centerProj.x, centerProj.y, normalEnd.x, normalEnd.y, '#22c55e');
      ctx.fillStyle = '#22c55e';
      ctx.font = '12px system-ui';
      ctx.fillText('n', normalEnd.x + 5, normalEnd.y - 5);
    }

    // Draw line
    const lineDirMag = Math.sqrt(lineDir.x * lineDir.x + lineDir.y * lineDir.y + lineDir.z * lineDir.z);
    if (lineDirMag > 0.01) {
      const tRange = 5;
      const lineStart = project3D(
        linePoint.x - tRange * lineDir.x,
        linePoint.y - tRange * lineDir.y,
        linePoint.z - tRange * lineDir.z
      );
      const lineEnd = project3D(
        linePoint.x + tRange * lineDir.x,
        linePoint.y + tRange * lineDir.y,
        linePoint.z + tRange * lineDir.z
      );

      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(lineStart.x, lineStart.y);
      ctx.lineTo(lineEnd.x, lineEnd.y);
      ctx.stroke();

      const pointProj = project3D(linePoint.x, linePoint.y, linePoint.z);
      ctx.fillStyle = colors.blue;
      ctx.beginPath();
      ctx.arc(pointProj.x, pointProj.y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = colors.text;
      ctx.font = '12px system-ui';
      ctx.fillText('P0', pointProj.x + 10, pointProj.y - 5);

      const dirEnd = project3D(
        linePoint.x + lineDir.x,
        linePoint.y + lineDir.y,
        linePoint.z + lineDir.z
      );
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(pointProj.x, pointProj.y);
      ctx.lineTo(dirEnd.x, dirEnd.y);
      ctx.stroke();
      ctx.setLineDash([]);
      drawArrowHead(pointProj.x, pointProj.y, dirEnd.x, dirEnd.y, '#3b82f6');
      ctx.fillStyle = '#3b82f6';
      ctx.fillText('b', dirEnd.x + 5, dirEnd.y - 5);
    }

    // Calculate and draw intersection
    const intersection = calculateIntersection(linePoint, lineDir, planeNormal, planeD);
    const angle = calculateAngle(lineDir, planeNormal);
    const relationship = getRelationship(lineDir, planeNormal, angle);

    if (intersection.type === 'intersection') {
      const intProj = project3D(intersection.point.x, intersection.point.y, intersection.point.z);

      const gradient = ctx.createRadialGradient(intProj.x, intProj.y, 0, intProj.x, intProj.y, 20);
      gradient.addColorStop(0, 'rgba(239, 68, 68, 0.5)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(intProj.x, intProj.y, 20, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(intProj.x, intProj.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = colors.text;
      ctx.font = 'bold 12px system-ui';
      ctx.fillText('Intersection', intProj.x + 12, intProj.y + 4);
    }

    ctx.fillStyle = colors.text;
    ctx.font = '12px system-ui';
    ctx.fillText('Drag to rotate view', 10, 20);

    let relationColor, relationText;
    if (relationship === 'parallel') {
      relationColor = colors.yellow;
      relationText = 'PARALLEL';
    } else if (relationship === 'perpendicular') {
      relationColor = colors.purple || '#a855f7';
      relationText = 'PERPENDICULAR';
    } else {
      relationColor = colors.orange;
      relationText = 'INTERSECTING';
    }

    ctx.fillStyle = relationColor;
    ctx.font = 'bold 14px system-ui';
    ctx.textAlign = 'right';
    ctx.fillText(relationText, width - 10, 25);
    ctx.textAlign = 'left';

    // Update info panel
    let infoHTML = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">';
    infoHTML += '<div><div style="font-weight: 600; color: ' + colors.green + '; margin-bottom: 4px;">Plane Equation</div>';
    infoHTML += '<div>' + planeA + 'x + ' + planeB + 'y + ' + planeC + 'z = ' + planeD + '</div>';
    infoHTML += '<div style="color: ' + colors.textSecondary + '; font-size: 12px;">Normal: (' + planeA + ', ' + planeB + ', ' + planeC + ')</div></div>';
    infoHTML += '<div><div style="font-weight: 600; color: ' + colors.blue + '; margin-bottom: 4px;">Line Equation</div>';
    infoHTML += '<div>r = (' + linePoint.x + ', ' + linePoint.y + ', ' + linePoint.z + ') + lambda(' + lineDir.x + ', ' + lineDir.y + ', ' + lineDir.z + ')</div>';
    infoHTML += '<div style="color: ' + colors.textSecondary + '; font-size: 12px;">Point: P0, Direction: b</div></div>';
    infoHTML += '<div><div style="font-weight: 600; color: ' + relationColor + '; margin-bottom: 4px;">Relationship</div>';
    infoHTML += '<div>' + relationText + '</div>';
    infoHTML += '<div style="color: ' + colors.textSecondary + '; font-size: 12px;">Angle with plane: ' + angle.toFixed(1) + ' degrees</div></div>';
    infoHTML += '<div><div style="font-weight: 600; color: #ef4444; margin-bottom: 4px;">Intersection</div>';

    if (intersection.type === 'intersection') {
      infoHTML += '<div>(' + intersection.point.x.toFixed(2) + ', ' + intersection.point.y.toFixed(2) + ', ' + intersection.point.z.toFixed(2) + ')</div>';
      infoHTML += '<div style="color: ' + colors.textSecondary + '; font-size: 12px;">lambda = ' + intersection.t.toFixed(2) + '</div>';
    } else if (intersection.type === 'parallel') {
      infoHTML += '<div>No intersection</div>';
      infoHTML += '<div style="color: ' + colors.textSecondary + '; font-size: 12px;">Line is parallel to plane</div>';
    } else {
      infoHTML += '<div>Line lies in plane</div>';
      infoHTML += '<div style="color: ' + colors.textSecondary + '; font-size: 12px;">Infinite intersection points</div>';
    }

    infoHTML += '</div></div>';
    infoHTML += '<div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid ' + colors.grid + ';">';
    infoHTML += '<div style="font-size: 12px; color: ' + colors.textSecondary + ';">';
    infoHTML += '<strong>Formula:</strong> sin(theta) = |a*l + b*m + c*n| / (sqrt(a^2+b^2+c^2) * sqrt(l^2+m^2+n^2))</div></div>';

    infoPanel.innerHTML = infoHTML;
  };

  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    canvas.style.cursor = 'grabbing';
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMouseX;
    const deltaY = e.clientY - lastMouseY;
    rotationY += deltaX * 0.5;
    rotationX -= deltaY * 0.5;
    rotationX = Math.max(-90, Math.min(90, rotationX));
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    render();
  });

  canvas.addEventListener('mouseup', () => {
    isDragging = false;
    canvas.style.cursor = 'grab';
  });

  canvas.addEventListener('mouseleave', () => {
    isDragging = false;
    canvas.style.cursor = 'grab';
  });

  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
      e.preventDefault();
    }
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - lastMouseX;
    const deltaY = e.touches[0].clientY - lastMouseY;
    rotationY += deltaX * 0.5;
    rotationX -= deltaY * 0.5;
    rotationX = Math.max(-90, Math.min(90, rotationX));
    lastMouseX = e.touches[0].clientX;
    lastMouseY = e.touches[0].clientY;
    render();
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener('touchend', () => {
    isDragging = false;
  });

  [planeASlider, planeBSlider, planeCSlider, planeDSlider,
   lineX0Slider, lineY0Slider, lineZ0Slider,
   lineDxSlider, lineDySlider, lineDzSlider].forEach(slider => {
    slider.addEventListener('input', render);
  });

  render();
};

// GP Convergence Visualization - Interactive Geometric Progression Convergence
JEEAnimations.gpConvergence = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  container.className = 'animation-container gp-convergence-visualizer';

  const self = this;

  // Main layout
  const mainWrapper = document.createElement('div');
  mainWrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px; width: 100%;';
  container.appendChild(mainWrapper);

  // Canvas container
  const canvasContainer = document.createElement('div');
  canvasContainer.style.cssText = 'position: relative; border-radius: 8px; overflow: hidden;';
  mainWrapper.appendChild(canvasContainer);

  const { canvas, ctx, width, height } = this.createCanvas(canvasContainer, 600, 400);
  canvas.style.cssText = 'display: block; border-radius: 8px;';

  // Controls panel
  const controlsPanel = document.createElement('div');
  controlsPanel.style.cssText = 'display: flex; flex-wrap: wrap; gap: 16px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px; align-items: flex-start;';
  mainWrapper.appendChild(controlsPanel);

  // First term control
  const aGroup = document.createElement('div');
  aGroup.style.cssText = 'display: flex; flex-direction: column; gap: 4px; min-width: 150px; flex: 1;';
  const aLabel = document.createElement('label');
  aLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa);';
  aLabel.innerHTML = 'First term (a): <span id="gp-a-val-' + containerId + '" style="color: #60a5fa; font-weight: bold;">2</span>';
  aGroup.appendChild(aLabel);
  const aSlider = document.createElement('input');
  aSlider.type = 'range';
  aSlider.min = '0.5';
  aSlider.max = '5';
  aSlider.step = '0.5';
  aSlider.value = '2';
  aSlider.style.cssText = 'width: 100%; cursor: pointer;';
  aGroup.appendChild(aSlider);
  controlsPanel.appendChild(aGroup);

  // Common ratio control
  const rGroup = document.createElement('div');
  rGroup.style.cssText = 'display: flex; flex-direction: column; gap: 4px; min-width: 180px; flex: 1;';
  const rLabel = document.createElement('label');
  rLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa);';
  rLabel.innerHTML = 'Common ratio (r): <span id="gp-r-val-' + containerId + '" style="color: #34d399; font-weight: bold;">0.5</span>';
  rGroup.appendChild(rLabel);
  const rSlider = document.createElement('input');
  rSlider.type = 'range';
  rSlider.min = '-1.5';
  rSlider.max = '1.5';
  rSlider.step = '0.05';
  rSlider.value = '0.5';
  rSlider.style.cssText = 'width: 100%; cursor: pointer;';
  rGroup.appendChild(rSlider);
  controlsPanel.appendChild(rGroup);

  // Number of terms control
  const nGroup = document.createElement('div');
  nGroup.style.cssText = 'display: flex; flex-direction: column; gap: 4px; min-width: 150px; flex: 1;';
  const nLabel = document.createElement('label');
  nLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa);';
  nLabel.innerHTML = 'Terms shown (n): <span id="gp-n-val-' + containerId + '" style="color: #f59e0b; font-weight: bold;">10</span>';
  nGroup.appendChild(nLabel);
  const nSlider = document.createElement('input');
  nSlider.type = 'range';
  nSlider.min = '3';
  nSlider.max = '20';
  nSlider.step = '1';
  nSlider.value = '10';
  nSlider.style.cssText = 'width: 100%; cursor: pointer;';
  nGroup.appendChild(nSlider);
  controlsPanel.appendChild(nGroup);

  // View mode buttons
  const viewGroup = document.createElement('div');
  viewGroup.style.cssText = 'display: flex; gap: 8px; align-items: center;';
  const viewLabel = document.createElement('span');
  viewLabel.style.cssText = 'font-size: 12px; color: var(--text-secondary, #a1a1aa);';
  viewLabel.textContent = 'View:';
  viewGroup.appendChild(viewLabel);

  let viewMode = 'bars';

  const barsBtn = document.createElement('button');
  barsBtn.className = 'anim-btn';
  barsBtn.textContent = 'Bar Chart';
  barsBtn.style.cssText = 'padding: 6px 12px; font-size: 11px; background: linear-gradient(135deg, #3b82f6, #2563eb);';
  viewGroup.appendChild(barsBtn);

  const lineBtn = document.createElement('button');
  lineBtn.className = 'anim-btn';
  lineBtn.textContent = 'Number Line';
  lineBtn.style.cssText = 'padding: 6px 12px; font-size: 11px; background: #3f3f46;';
  viewGroup.appendChild(lineBtn);

  controlsPanel.appendChild(viewGroup);

  // Info panel
  const infoPanel = document.createElement('div');
  infoPanel.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; padding: 12px; background: var(--bg-secondary, #18181b); border-radius: 8px;';
  mainWrapper.appendChild(infoPanel);

  const formulaBox = document.createElement('div');
  formulaBox.style.cssText = 'padding: 10px; background: rgba(52, 211, 153, 0.1); border-radius: 6px; border-left: 3px solid #34d399;';
  infoPanel.appendChild(formulaBox);

  const valuesBox = document.createElement('div');
  valuesBox.style.cssText = 'padding: 10px; background: rgba(96, 165, 250, 0.1); border-radius: 6px; border-left: 3px solid #60a5fa;';
  infoPanel.appendChild(valuesBox);

  const statusBox = document.createElement('div');
  statusBox.style.cssText = 'padding: 10px; background: rgba(251, 191, 36, 0.1); border-radius: 6px; border-left: 3px solid #fbbf24;';
  infoPanel.appendChild(statusBox);

  const updateViewButtons = () => {
    if (viewMode === 'bars') {
      barsBtn.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
      lineBtn.style.background = '#3f3f46';
    } else {
      barsBtn.style.background = '#3f3f46';
      lineBtn.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
    }
  };

  barsBtn.addEventListener('click', () => { viewMode = 'bars'; updateViewButtons(); render(); });
  lineBtn.addEventListener('click', () => { viewMode = 'numberLine'; updateViewButtons(); render(); });

  const render = () => {
    const colors = self.getColors();
    const a = parseFloat(aSlider.value);
    const r = parseFloat(rSlider.value);
    const n = parseInt(nSlider.value);

    document.getElementById('gp-a-val-' + containerId).textContent = a.toFixed(1);
    document.getElementById('gp-r-val-' + containerId).textContent = r.toFixed(2);
    document.getElementById('gp-n-val-' + containerId).textContent = n;

    const terms = [];
    const partialSums = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const term = a * Math.pow(r, i);
      terms.push(term);
      sum += term;
      partialSums.push(sum);
    }

    const absR = Math.abs(r);
    const converges = absR < 1;
    const limit = converges ? a / (1 - r) : null;

    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, width, height);

    if (viewMode === 'bars') {
      drawBarChart(colors, a, r, n, terms, partialSums, converges, limit);
    } else {
      drawNumberLine(colors, a, r, n, terms, partialSums, converges, limit);
    }

    updateInfoPanels(a, r, n, terms, partialSums, converges, limit);
  };

  const drawBarChart = (colors, a, r, n, terms, partialSums, converges, limit) => {
    const padding = { top: 50, bottom: 80, left: 60, right: 40 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    let maxVal = Math.max(...terms.map(Math.abs), ...partialSums.map(Math.abs));
    if (converges && limit !== null) maxVal = Math.max(maxVal, Math.abs(limit));
    maxVal = maxVal * 1.2 || 1;

    const minVal = Math.min(...terms, ...partialSums, 0);
    const hasNegative = minVal < 0;

    const zeroY = hasNegative
      ? padding.top + chartHeight * (maxVal / (maxVal - minVal))
      : padding.top + chartHeight;

    const scale = chartHeight / (maxVal - minVal);

    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;
    const numGridLines = 6;
    for (let i = 0; i <= numGridLines; i++) {
      const y = padding.top + (i / numGridLines) * chartHeight;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      const val = maxVal - (i / numGridLines) * (maxVal - minVal);
      ctx.fillStyle = colors.axisLabel;
      ctx.font = '10px system-ui';
      ctx.textAlign = 'right';
      ctx.fillText(val.toFixed(1), padding.left - 8, y + 4);
    }

    ctx.strokeStyle = colors.axis;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, height - padding.bottom);
    ctx.lineTo(width - padding.right, height - padding.bottom);
    ctx.stroke();

    if (hasNegative) {
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(padding.left, zeroY);
      ctx.lineTo(width - padding.right, zeroY);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    const barWidth = (chartWidth / n) * 0.35;
    const barGap = chartWidth / n;

    if (converges && limit !== null) {
      const limitY = zeroY - limit * scale;
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 4]);
      ctx.beginPath();
      ctx.moveTo(padding.left, limitY);
      ctx.lineTo(width - padding.right, limitY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 12px system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('S_inf = ' + limit.toFixed(3), width - padding.right - 80, limitY - 8);
    }

    for (let i = 0; i < n; i++) {
      const x = padding.left + i * barGap + barGap * 0.1;
      const termHeight = terms[i] * scale;
      const barY = terms[i] >= 0 ? zeroY - termHeight : zeroY;
      const absHeight = Math.abs(termHeight);

      const alpha = converges ? Math.max(0.3, 1 - i * 0.07) : 1;

      ctx.fillStyle = 'rgba(96, 165, 250, ' + alpha + ')';
      if (absHeight > 0.5) {
        ctx.fillRect(x, barY, barWidth, absHeight);
      } else {
        ctx.beginPath();
        ctx.arc(x + barWidth / 2, zeroY, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      const sumHeight = partialSums[i] * scale;
      const sumY = partialSums[i] >= 0 ? zeroY - sumHeight : zeroY;
      const sumX = x + barWidth + 2;
      ctx.fillStyle = 'rgba(52, 211, 153, ' + alpha + ')';
      ctx.fillRect(sumX, sumY, barWidth, Math.abs(sumHeight));

      if (i < 4 || i === n - 1) {
        ctx.fillStyle = colors.axisLabel;
        ctx.font = '9px system-ui';
        ctx.textAlign = 'center';
        const labelX = x + barWidth;
        ctx.fillText('T' + (i + 1), labelX, height - padding.bottom + 15);

        if (i < 3) {
          ctx.font = '8px system-ui';
          ctx.fillText(terms[i].toFixed(2), x + barWidth / 2, barY - 3);
        }
      }
      if (i === 4 && n > 6) {
        ctx.fillStyle = colors.axisLabel;
        ctx.font = '12px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('...', padding.left + 4.5 * barGap, height - padding.bottom + 15);
      }
    }

    ctx.font = '11px system-ui';
    ctx.textAlign = 'left';

    ctx.fillStyle = '#60a5fa';
    ctx.fillRect(padding.left + 10, padding.top - 35, 15, 10);
    ctx.fillStyle = colors.text;
    ctx.fillText('Terms (ar^n)', padding.left + 30, padding.top - 26);

    ctx.fillStyle = '#34d399';
    ctx.fillRect(padding.left + 130, padding.top - 35, 15, 10);
    ctx.fillStyle = colors.text;
    ctx.fillText('Partial Sum (S_n)', padding.left + 150, padding.top - 26);

    if (converges) {
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 3]);
      ctx.beginPath();
      ctx.moveTo(padding.left + 280, padding.top - 30);
      ctx.lineTo(padding.left + 295, padding.top - 30);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = colors.text;
      ctx.fillText('Limit S_inf', padding.left + 300, padding.top - 26);
    }

    ctx.fillStyle = colors.text;
    ctx.font = 'bold 14px system-ui';
    ctx.textAlign = 'center';
    const statusText = converges ? 'CONVERGES (|r| < 1)' : 'DIVERGES (|r| >= 1)';
    const statusColor = converges ? '#34d399' : '#ef4444';
    ctx.fillStyle = statusColor;
    ctx.fillText(statusText, width / 2, 20);
  };

  const drawNumberLine = (colors, a, r, n, terms, partialSums, converges, limit) => {
    const padding = { top: 100, bottom: 60, left: 60, right: 60 };
    const lineY = height / 2 + 20;

    let minVal = Math.min(...partialSums, ...terms, 0);
    let maxVal = Math.max(...partialSums, ...terms);
    if (converges && limit !== null) {
      minVal = Math.min(minVal, limit);
      maxVal = Math.max(maxVal, limit);
    }
    const range = maxVal - minVal || 1;
    minVal -= range * 0.1;
    maxVal += range * 0.1;
    const totalRange = maxVal - minVal;

    const toX = (val) => padding.left + ((val - minVal) / totalRange) * (width - padding.left - padding.right);

    ctx.strokeStyle = colors.axis;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding.left, lineY);
    ctx.lineTo(width - padding.right, lineY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width - padding.right, lineY);
    ctx.lineTo(width - padding.right - 10, lineY - 6);
    ctx.moveTo(width - padding.right, lineY);
    ctx.lineTo(width - padding.right - 10, lineY + 6);
    ctx.stroke();

    const tickCount = 8;
    ctx.fillStyle = colors.axisLabel;
    ctx.font = '10px system-ui';
    ctx.textAlign = 'center';
    for (let i = 0; i <= tickCount; i++) {
      const val = minVal + (i / tickCount) * totalRange;
      const x = toX(val);
      ctx.beginPath();
      ctx.moveTo(x, lineY - 5);
      ctx.lineTo(x, lineY + 5);
      ctx.stroke();
      ctx.fillText(val.toFixed(1), x, lineY + 20);
    }

    if (minVal <= 0 && maxVal >= 0) {
      const zeroX = toX(0);
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(zeroX, lineY - 12);
      ctx.lineTo(zeroX, lineY + 12);
      ctx.stroke();
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 11px system-ui';
      ctx.fillText('0', zeroX, lineY + 30);
    }

    if (converges && limit !== null) {
      const limitX = toX(limit);
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(limitX, lineY - 60);
      ctx.lineTo(limitX, lineY + 40);
      ctx.stroke();

      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 12px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('S_inf = ' + limit.toFixed(3), limitX, lineY - 70);

      ctx.beginPath();
      ctx.moveTo(limitX - 30, lineY - 85);
      ctx.lineTo(limitX, lineY - 75);
      ctx.lineTo(limitX + 30, lineY - 85);
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    const termY = lineY - 35;
    for (let i = 0; i < n; i++) {
      const x = toX(terms[i]);
      const alpha = converges ? Math.max(0.3, 1 - i * 0.06) : 1;
      const radius = Math.max(3, 8 - i * 0.4);

      ctx.fillStyle = 'rgba(96, 165, 250, ' + alpha + ')';
      ctx.beginPath();
      ctx.arc(x, termY, radius, 0, Math.PI * 2);
      ctx.fill();

      if (i > 0) {
        const prevX = toX(terms[i - 1]);
        ctx.strokeStyle = 'rgba(96, 165, 250, ' + (alpha * 0.5) + ')';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(prevX, termY);
        ctx.lineTo(x, termY);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      if (i < 3) {
        ctx.fillStyle = colors.axisLabel;
        ctx.font = '9px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('T' + (i + 1), x, termY - 12);
      }
    }

    const sumY = lineY + 45;
    for (let i = 0; i < n; i++) {
      const x = toX(partialSums[i]);
      const alpha = converges ? Math.max(0.4, 1 - i * 0.05) : 1;
      const radius = Math.max(4, 10 - i * 0.4);

      ctx.fillStyle = 'rgba(52, 211, 153, ' + alpha + ')';
      ctx.beginPath();
      ctx.arc(x, sumY, radius, 0, Math.PI * 2);
      ctx.fill();

      if (i > 0) {
        const prevX = toX(partialSums[i - 1]);
        ctx.strokeStyle = 'rgba(52, 211, 153, ' + (alpha * 0.7) + ')';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(prevX + radius, sumY);
        ctx.lineTo(x - radius, sumY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x - radius, sumY);
        ctx.lineTo(x - radius - 5, sumY - 3);
        ctx.lineTo(x - radius - 5, sumY + 3);
        ctx.closePath();
        ctx.fillStyle = 'rgba(52, 211, 153, ' + (alpha * 0.7) + ')';
        ctx.fill();
      }

      if (i < 2 || i === n - 1) {
        ctx.fillStyle = colors.axisLabel;
        ctx.font = '9px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('S' + (i + 1), x, sumY + 18);
      }
    }

    ctx.font = '11px system-ui';
    ctx.textAlign = 'left';

    ctx.fillStyle = '#60a5fa';
    ctx.beginPath();
    ctx.arc(padding.left + 15, 25, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = colors.text;
    ctx.fillText('Terms (ar^n)', padding.left + 30, 29);

    ctx.fillStyle = '#34d399';
    ctx.beginPath();
    ctx.arc(padding.left + 135, 25, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = colors.text;
    ctx.fillText('Partial Sums (S_n)', padding.left + 150, 29);

    if (converges) {
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(padding.left + 285, 20);
      ctx.lineTo(padding.left + 285, 30);
      ctx.stroke();
      ctx.fillStyle = colors.text;
      ctx.fillText('Limit S_inf', padding.left + 295, 29);
    }

    ctx.fillStyle = colors.text;
    ctx.font = 'bold 14px system-ui';
    ctx.textAlign = 'center';
    const statusText = converges ? 'CONVERGES (|r| < 1)' : 'DIVERGES (|r| >= 1)';
    const statusColor = converges ? '#34d399' : '#ef4444';
    ctx.fillStyle = statusColor;
    ctx.fillText(statusText, width / 2, 55);

    ctx.fillStyle = colors.text;
    ctx.font = '12px system-ui';
    const seqText = 'GP: ' + a.toFixed(1) + ', ' + (a*r).toFixed(2) + ', ' + (a*r*r).toFixed(2) + ', ' + (a*r*r*r).toFixed(2) + ', ...';
    ctx.fillText(seqText, width / 2, 75);
  };

  const updateInfoPanels = (a, r, n, terms, partialSums, converges, limit) => {
    const absR = Math.abs(r);
    const lastSum = partialSums[n - 1];

    if (converges) {
      formulaBox.innerHTML = '<div style="font-size: 11px; color: var(--text-secondary, #a1a1aa); margin-bottom: 4px;">Sum Formula (|r| < 1)</div>' +
        '<div style="font-size: 14px; color: #34d399; font-weight: bold;">S<sub>infinity</sub> = a / (1 - r)</div>' +
        '<div style="font-size: 12px; color: var(--text-primary, #fafafa); margin-top: 6px;">= ' + a.toFixed(1) + ' / (1 - ' + r.toFixed(2) + ')</div>' +
        '<div style="font-size: 14px; color: #34d399; font-weight: bold; margin-top: 4px;">= ' + limit.toFixed(4) + '</div>';
    } else {
      formulaBox.innerHTML = '<div style="font-size: 11px; color: var(--text-secondary, #a1a1aa); margin-bottom: 4px;">No Finite Sum</div>' +
        '<div style="font-size: 14px; color: #ef4444; font-weight: bold;">|r| = ' + absR.toFixed(2) + ' >= 1</div>' +
        '<div style="font-size: 12px; color: var(--text-primary, #fafafa); margin-top: 6px;">Series ' + (r >= 1 ? 'grows to infinity' : r <= -1 ? 'oscillates divergently' : 'diverges') + '</div>' +
        '<div style="font-size: 11px; color: #ef4444; margin-top: 4px;">S<sub>infinity</sub> = a/(1-r) only valid when |r| < 1</div>';
    }

    valuesBox.innerHTML = '<div style="font-size: 11px; color: var(--text-secondary, #a1a1aa); margin-bottom: 4px;">Current Values</div>' +
      '<div style="font-size: 12px; color: var(--text-primary, #fafafa);">' +
      '<div>First term: <strong style="color: #60a5fa;">a = ' + a.toFixed(1) + '</strong></div>' +
      '<div>Common ratio: <strong style="color: #34d399;">r = ' + r.toFixed(2) + '</strong></div>' +
      '<div>|r| = <strong style="color: ' + (absR < 1 ? '#34d399' : '#ef4444') + ';">' + absR.toFixed(2) + '</strong></div>' +
      '<div style="margin-top: 6px;">S<sub>' + n + '</sub> = <strong style="color: #f59e0b;">' + lastSum.toFixed(4) + '</strong></div>' +
      (converges ? '<div>Error: |S<sub>inf</sub> - S<sub>' + n + '</sub>| = <strong>' + Math.abs(limit - lastSum).toFixed(6) + '</strong></div>' : '') +
      '</div>';

    if (converges) {
      const percentComplete = (lastSum / limit * 100).toFixed(1);
      statusBox.innerHTML = '<div style="font-size: 11px; color: var(--text-secondary, #a1a1aa); margin-bottom: 4px;">Convergence Progress</div>' +
        '<div style="font-size: 12px; color: var(--text-primary, #fafafa);">' +
        '<div>S<sub>' + n + '</sub> captures <strong style="color: #34d399;">' + percentComplete + '%</strong> of S<sub>infinity</sub></div>' +
        '<div style="margin-top: 4px; background: #27272a; border-radius: 4px; height: 12px; overflow: hidden;">' +
        '<div style="width: ' + Math.min(100, Math.abs(parseFloat(percentComplete))) + '%; height: 100%; background: linear-gradient(90deg, #34d399, #10b981);"></div>' +
        '</div>' +
        '<div style="margin-top: 6px; font-size: 11px; color: #34d399;">As n -> infinity, S<sub>n</sub> -> ' + limit.toFixed(4) + '</div>' +
        '</div>';
    } else {
      var behavior = r > 1 ? 'grows exponentially to +infinity'
                     : r < -1 ? 'oscillates with increasing magnitude'
                     : r === 1 ? 'grows linearly (sum = na)'
                     : 'oscillates between two values';
      statusBox.innerHTML = '<div style="font-size: 11px; color: var(--text-secondary, #a1a1aa); margin-bottom: 4px;">Divergence Behavior</div>' +
        '<div style="font-size: 12px; color: var(--text-primary, #fafafa);">' +
        '<div style="color: #ef4444; font-weight: bold;">Series ' + behavior + '</div>' +
        '<div style="margin-top: 6px; font-size: 11px;">' +
        (r > 1 ? 'Each term is larger than the previous' : '') +
        (r < -1 ? 'Terms alternate sign and grow in magnitude' : '') +
        (r === 1 ? 'All terms equal to a, sum grows linearly' : '') +
        (r === -1 ? 'S_n alternates between a and 0' : '') +
        '</div>' +
        '<div style="margin-top: 6px; font-size: 11px; color: #fbbf24;">The formula S = a/(1-r) does NOT apply here!</div>' +
        '</div>';
    }
  };

  aSlider.addEventListener('input', render);
  rSlider.addEventListener('input', render);
  nSlider.addEventListener('input', render);

  render();
};
