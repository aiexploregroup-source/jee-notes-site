// Le Chatelier's Principle Simulator - Standalone module
// This will be integrated into animations.js

(function() {
  // Wait for JEEAnimations to be available
  const checkAndAdd = () => {
    if (typeof JEEAnimations !== 'undefined') {
      JEEAnimations.leChatelierSimulator = function(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';
        container.className = 'animation-container le-chatelier-sim';

        // Preset reactions data
        const presetReactions = {
          haber: {
            name: 'N2 + 3H2 = 2NH3 (Haber Process)',
            equation: 'N2 + 3H2 <=> 2NH3',
            equationDisplay: 'N\u2082 + 3H\u2082 \u21CC 2NH\u2083',
            deltaH: -92,
            deltaNG: -2,
            K: 0.5,
            reactants: [
              { symbol: 'N\u2082', coeff: 1, color: '#60a5fa', initial: 1.0 },
              { symbol: 'H\u2082', coeff: 3, color: '#818cf8', initial: 3.0 }
            ],
            products: [
              { symbol: 'NH\u2083', coeff: 2, color: '#34d399', initial: 0.5 }
            ],
            colorChange: false
          },
          no2n2o4: {
            name: '2NO2 = N2O4 (Brown/Colorless)',
            equation: '2NO2 <=> N2O4',
            equationDisplay: '2NO\u2082 \u21CC N\u2082O\u2084',
            deltaH: -57,
            deltaNG: -1,
            K: 4.0,
            reactants: [
              { symbol: 'NO\u2082', coeff: 2, color: '#b45309', initial: 1.0 }
            ],
            products: [
              { symbol: 'N\u2082O\u2084', coeff: 1, color: '#e5e7eb', initial: 0.5 }
            ],
            colorChange: true,
            brownSpecies: 'NO\u2082'
          },
          pcl5: {
            name: 'PCl5 = PCl3 + Cl2 (Dissociation)',
            equation: 'PCl5 <=> PCl3 + Cl2',
            equationDisplay: 'PCl\u2085 \u21CC PCl\u2083 + Cl\u2082',
            deltaH: 93,
            deltaNG: 1,
            K: 0.8,
            reactants: [
              { symbol: 'PCl\u2085', coeff: 1, color: '#f472b6', initial: 1.0 }
            ],
            products: [
              { symbol: 'PCl\u2083', coeff: 1, color: '#fb923c', initial: 0.3 },
              { symbol: 'Cl\u2082', coeff: 1, color: '#a3e635', initial: 0.3 }
            ],
            colorChange: false
          },
          h2i2: {
            name: 'H2 + I2 = 2HI (No Pressure Effect)',
            equation: 'H2 + I2 <=> 2HI',
            equationDisplay: 'H\u2082 + I\u2082 \u21CC 2HI',
            deltaH: -53,
            deltaNG: 0,
            K: 54,
            reactants: [
              { symbol: 'H\u2082', coeff: 1, color: '#60a5fa', initial: 1.0 },
              { symbol: 'I\u2082', coeff: 1, color: '#a855f7', initial: 1.0 }
            ],
            products: [
              { symbol: 'HI', coeff: 2, color: '#34d399', initial: 2.0 }
            ],
            colorChange: false
          }
        };

        // State management
        let state = {
          reaction: 'haber',
          concentrations: {},
          temperature: 300,
          pressure: 1.0,
          volume: 1.0,
          K: 0.5,
          baseK: 0.5,
          particles: [],
          shiftDirection: 0,
          shiftMessage: '',
          isAnimating: false,
          lastAction: null
        };

        const self = this;

        // Create main layout
        const mainLayout = document.createElement('div');
        mainLayout.style.cssText = 'display: grid; grid-template-columns: 1fr 320px; gap: 16px;';
        container.appendChild(mainLayout);

        // Canvas area
        const canvasArea = document.createElement('div');
        mainLayout.appendChild(canvasArea);

        const { canvas, ctx, width, height } = this.createCanvas(canvasArea, 480, 400);

        // Controls panel
        const controlPanel = document.createElement('div');
        controlPanel.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
        mainLayout.appendChild(controlPanel);

        // Reaction selector
        const selectorDiv = document.createElement('div');
        selectorDiv.className = 'anim-control';
        selectorDiv.innerHTML = '<label style="font-size: 12px; color: #a1a1aa;">Select Reaction:</label>';
        const reactionSelect = document.createElement('select');
        reactionSelect.style.cssText = 'width: 100%; padding: 8px; background: #27272a; color: #fafafa; border: 1px solid #3f3f46; border-radius: 6px; margin-top: 4px; cursor: pointer;';
        Object.keys(presetReactions).forEach(key => {
          const opt = document.createElement('option');
          opt.value = key;
          opt.textContent = presetReactions[key].name;
          reactionSelect.appendChild(opt);
        });
        selectorDiv.appendChild(reactionSelect);
        controlPanel.appendChild(selectorDiv);

        // Action buttons section
        const actionSection = document.createElement('div');
        actionSection.innerHTML = '<div style="font-size: 12px; color: #a1a1aa; margin-bottom: 6px;">Concentration Changes:</div>';
        actionSection.style.cssText = 'display: flex; flex-direction: column; gap: 6px;';

        const createActionBtn = (text, color) => {
          const btn = document.createElement('button');
          btn.textContent = text;
          btn.style.cssText = 'padding: 8px 12px; background: ' + color + '22; color: ' + color + '; border: 1px solid ' + color + '44; border-radius: 6px; cursor: pointer; font-size: 12px; transition: all 0.2s;';
          btn.addEventListener('mouseenter', () => { btn.style.background = color + '44'; });
          btn.addEventListener('mouseleave', () => { btn.style.background = color + '22'; });
          return btn;
        };

        const addReactantBtn = createActionBtn('+ Add Reactant', '#60a5fa');
        const removeReactantBtn = createActionBtn('- Remove Reactant', '#60a5fa');
        const addProductBtn = createActionBtn('+ Add Product', '#34d399');
        const removeProductBtn = createActionBtn('- Remove Product', '#34d399');

        const btnRow1 = document.createElement('div');
        btnRow1.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 6px;';
        btnRow1.appendChild(addReactantBtn);
        btnRow1.appendChild(removeReactantBtn);

        const btnRow2 = document.createElement('div');
        btnRow2.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 6px;';
        btnRow2.appendChild(addProductBtn);
        btnRow2.appendChild(removeProductBtn);

        actionSection.appendChild(btnRow1);
        actionSection.appendChild(btnRow2);
        controlPanel.appendChild(actionSection);

        // Sliders section
        const slidersSection = document.createElement('div');
        slidersSection.style.cssText = 'display: flex; flex-direction: column; gap: 8px; padding: 10px; background: #27272a; border-radius: 8px;';

        const createLabeledSlider = (label, min, max, value, step, unit, onChange) => {
          const wrapper = document.createElement('div');
          wrapper.className = 'anim-control';
          wrapper.style.marginBottom = '4px';

          const labelEl = document.createElement('label');
          labelEl.style.cssText = 'display: flex; justify-content: space-between; font-size: 12px;';
          labelEl.innerHTML = '<span>' + label + '</span><span class="value" style="color: #60a5fa;">' + value + unit + '</span>';

          const slider = document.createElement('input');
          slider.type = 'range';
          slider.min = min;
          slider.max = max;
          slider.value = value;
          slider.step = step;
          slider.style.cssText = 'width: 100%; margin-top: 4px;';

          slider.addEventListener('input', () => {
            labelEl.querySelector('.value').textContent = parseFloat(slider.value).toFixed(step < 1 ? 1 : 0) + unit;
            onChange(parseFloat(slider.value));
          });

          wrapper.appendChild(labelEl);
          wrapper.appendChild(slider);
          return { wrapper, slider };
        };

        const tempSlider = createLabeledSlider('Temperature', 200, 600, 300, 10, ' K', (val) => {
          const oldTemp = state.temperature;
          state.temperature = val;
          applyTemperatureChange(oldTemp, val);
        });

        const pressureSlider = createLabeledSlider('Pressure', 0.1, 5, 1, 0.1, ' atm', (val) => {
          const oldPressure = state.pressure;
          state.pressure = val;
          applyPressureChange(oldPressure, val);
        });

        const volumeSlider = createLabeledSlider('Volume', 0.5, 3, 1, 0.1, ' L', (val) => {
          const oldVolume = state.volume;
          state.volume = val;
          applyVolumeChange(oldVolume, val);
        });

        slidersSection.appendChild(tempSlider.wrapper);
        slidersSection.appendChild(pressureSlider.wrapper);
        slidersSection.appendChild(volumeSlider.wrapper);
        controlPanel.appendChild(slidersSection);

        // Special actions
        const specialSection = document.createElement('div');
        specialSection.innerHTML = '<div style="font-size: 12px; color: #a1a1aa; margin-bottom: 6px;">Special Tests:</div>';

        const inertGasBtn = createActionBtn('Add Inert Gas (const V)', '#a855f7');
        inertGasBtn.style.width = '100%';
        specialSection.appendChild(inertGasBtn);

        const resetBtn = createActionBtn('Reset to Equilibrium', '#f59e0b');
        resetBtn.style.width = '100%';
        resetBtn.style.marginTop = '6px';
        specialSection.appendChild(resetBtn);

        controlPanel.appendChild(specialSection);

        // Info display
        const infoPanel = document.createElement('div');
        infoPanel.style.cssText = 'background: #18181b; border: 1px solid #3f3f46; border-radius: 8px; padding: 12px; font-size: 12px;';
        controlPanel.appendChild(infoPanel);

        // Initialize state for a reaction
        const initReaction = (reactionKey) => {
          const reaction = presetReactions[reactionKey];
          state.reaction = reactionKey;
          state.baseK = reaction.K;
          state.K = reaction.K;
          state.temperature = 300;
          state.pressure = 1.0;
          state.volume = 1.0;
          state.shiftDirection = 0;
          state.shiftMessage = 'At Equilibrium';
          state.lastAction = null;

          state.concentrations = {};
          reaction.reactants.forEach(r => {
            state.concentrations[r.symbol] = r.initial;
          });
          reaction.products.forEach(p => {
            state.concentrations[p.symbol] = p.initial;
          });

          tempSlider.slider.value = 300;
          tempSlider.slider.dispatchEvent(new Event('input'));
          pressureSlider.slider.value = 1;
          pressureSlider.slider.dispatchEvent(new Event('input'));
          volumeSlider.slider.value = 1;
          volumeSlider.slider.dispatchEvent(new Event('input'));

          initParticles();
        };

        // Initialize particles for visualization
        const initParticles = () => {
          state.particles = [];
          const reaction = presetReactions[state.reaction];

          const containerLeft = 40;
          const containerRight = width - 40;
          const containerTop = 80;
          const containerBottom = 280;

          const allSpecies = [...reaction.reactants, ...reaction.products];
          allSpecies.forEach(species => {
            const conc = state.concentrations[species.symbol];
            const count = Math.round(conc * 15);
            for (let i = 0; i < count; i++) {
              state.particles.push({
                symbol: species.symbol,
                color: species.color,
                isProduct: reaction.products.some(p => p.symbol === species.symbol),
                x: containerLeft + 30 + Math.random() * (containerRight - containerLeft - 60),
                y: containerTop + 20 + Math.random() * (containerBottom - containerTop - 40),
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                radius: 8
              });
            }
          });
        };

        // Calculate reaction quotient Q
        const calculateQ = () => {
          const reaction = presetReactions[state.reaction];
          let numerator = 1;
          let denominator = 1;

          reaction.products.forEach(p => {
            numerator *= Math.pow(state.concentrations[p.symbol] || 0.001, p.coeff);
          });

          reaction.reactants.forEach(r => {
            denominator *= Math.pow(state.concentrations[r.symbol] || 0.001, r.coeff);
          });

          return denominator > 0 ? numerator / denominator : 0;
        };

        // Apply equilibrium shift
        const applyShift = (direction, amount) => {
          amount = amount || 0.15;
          const reaction = presetReactions[state.reaction];

          if (direction > 0) {
            reaction.reactants.forEach(r => {
              state.concentrations[r.symbol] = Math.max(0.05, state.concentrations[r.symbol] - amount * r.coeff);
            });
            reaction.products.forEach(p => {
              state.concentrations[p.symbol] = Math.min(5, state.concentrations[p.symbol] + amount * p.coeff);
            });
          } else if (direction < 0) {
            reaction.reactants.forEach(r => {
              state.concentrations[r.symbol] = Math.min(5, state.concentrations[r.symbol] + amount * r.coeff);
            });
            reaction.products.forEach(p => {
              state.concentrations[p.symbol] = Math.max(0.05, state.concentrations[p.symbol] - amount * p.coeff);
            });
          }

          initParticles();
        };

        // Action handlers
        const handleAddReactant = () => {
          const reaction = presetReactions[state.reaction];
          reaction.reactants.forEach(r => {
            state.concentrations[r.symbol] = Math.min(5, state.concentrations[r.symbol] + 0.5);
          });
          state.shiftDirection = 1;
          state.shiftMessage = 'Q < K: Shifts FORWARD to consume added reactant';
          state.lastAction = 'Added Reactant';
          setTimeout(() => applyShift(1), 300);
        };

        const handleRemoveReactant = () => {
          const reaction = presetReactions[state.reaction];
          reaction.reactants.forEach(r => {
            state.concentrations[r.symbol] = Math.max(0.1, state.concentrations[r.symbol] - 0.3);
          });
          state.shiftDirection = -1;
          state.shiftMessage = 'Q > K: Shifts BACKWARD to replace removed reactant';
          state.lastAction = 'Removed Reactant';
          setTimeout(() => applyShift(-1), 300);
        };

        const handleAddProduct = () => {
          const reaction = presetReactions[state.reaction];
          reaction.products.forEach(p => {
            state.concentrations[p.symbol] = Math.min(5, state.concentrations[p.symbol] + 0.5);
          });
          state.shiftDirection = -1;
          state.shiftMessage = 'Q > K: Shifts BACKWARD to consume added product';
          state.lastAction = 'Added Product';
          setTimeout(() => applyShift(-1), 300);
        };

        const handleRemoveProduct = () => {
          const reaction = presetReactions[state.reaction];
          reaction.products.forEach(p => {
            state.concentrations[p.symbol] = Math.max(0.1, state.concentrations[p.symbol] - 0.3);
          });
          state.shiftDirection = 1;
          state.shiftMessage = 'Q < K: Shifts FORWARD to replace removed product';
          state.lastAction = 'Removed Product';
          setTimeout(() => applyShift(1), 300);
        };

        const applyTemperatureChange = (oldTemp, newTemp) => {
          const reaction = presetReactions[state.reaction];
          const deltaH = reaction.deltaH;

          const R = 8.314;
          const factor = Math.exp((-deltaH * 1000 / R) * (1/newTemp - 1/oldTemp));
          state.K = state.baseK * factor;

          if (newTemp > oldTemp) {
            if (deltaH < 0) {
              state.shiftDirection = -1;
              state.shiftMessage = 'Exothermic: Heat added shifts BACKWARD, K decreases';
              state.lastAction = 'Increased Temperature';
              applyShift(-1, 0.1);
            } else {
              state.shiftDirection = 1;
              state.shiftMessage = 'Endothermic: Heat added shifts FORWARD, K increases';
              state.lastAction = 'Increased Temperature';
              applyShift(1, 0.1);
            }
          } else if (newTemp < oldTemp) {
            if (deltaH < 0) {
              state.shiftDirection = 1;
              state.shiftMessage = 'Exothermic: Heat removed shifts FORWARD, K increases';
              state.lastAction = 'Decreased Temperature';
              applyShift(1, 0.1);
            } else {
              state.shiftDirection = -1;
              state.shiftMessage = 'Endothermic: Heat removed shifts BACKWARD, K decreases';
              state.lastAction = 'Decreased Temperature';
              applyShift(-1, 0.1);
            }
          }
        };

        const applyPressureChange = (oldP, newP) => {
          const reaction = presetReactions[state.reaction];
          const deltaNG = reaction.deltaNG;

          if (deltaNG === 0) {
            state.shiftDirection = 0;
            state.shiftMessage = 'Delta n = 0: Pressure has NO EFFECT on equilibrium!';
            state.lastAction = 'Changed Pressure';
            return;
          }

          if (newP > oldP) {
            if (deltaNG < 0) {
              state.shiftDirection = 1;
              state.shiftMessage = 'Delta n = ' + deltaNG + ': High P shifts FORWARD (fewer moles)';
              applyShift(1, 0.08);
            } else {
              state.shiftDirection = -1;
              state.shiftMessage = 'Delta n = ' + deltaNG + ': High P shifts BACKWARD (fewer moles)';
              applyShift(-1, 0.08);
            }
            state.lastAction = 'Increased Pressure';
          } else if (newP < oldP) {
            if (deltaNG < 0) {
              state.shiftDirection = -1;
              state.shiftMessage = 'Delta n = ' + deltaNG + ': Low P shifts BACKWARD (more moles)';
              applyShift(-1, 0.08);
            } else {
              state.shiftDirection = 1;
              state.shiftMessage = 'Delta n = ' + deltaNG + ': Low P shifts FORWARD (more moles)';
              applyShift(1, 0.08);
            }
            state.lastAction = 'Decreased Pressure';
          }
        };

        const applyVolumeChange = (oldV, newV) => {
          const reaction = presetReactions[state.reaction];
          const deltaNG = reaction.deltaNG;

          if (deltaNG === 0) {
            state.shiftDirection = 0;
            state.shiftMessage = 'Delta n = 0: Volume has NO EFFECT on equilibrium!';
            state.lastAction = 'Changed Volume';
            return;
          }

          if (newV > oldV) {
            if (deltaNG > 0) {
              state.shiftDirection = 1;
              state.shiftMessage = 'Delta n = ' + deltaNG + ': Larger V shifts FORWARD (more moles)';
              applyShift(1, 0.08);
            } else {
              state.shiftDirection = -1;
              state.shiftMessage = 'Delta n = ' + deltaNG + ': Larger V shifts BACKWARD (more moles)';
              applyShift(-1, 0.08);
            }
            state.lastAction = 'Increased Volume';
          } else if (newV < oldV) {
            if (deltaNG > 0) {
              state.shiftDirection = -1;
              state.shiftMessage = 'Delta n = ' + deltaNG + ': Smaller V shifts BACKWARD (fewer moles)';
              applyShift(-1, 0.08);
            } else {
              state.shiftDirection = 1;
              state.shiftMessage = 'Delta n = ' + deltaNG + ': Smaller V shifts FORWARD (fewer moles)';
              applyShift(1, 0.08);
            }
            state.lastAction = 'Decreased Volume';
          }
        };

        const handleInertGas = () => {
          state.shiftDirection = 0;
          state.shiftMessage = 'Inert gas at constant V: Partial pressures unchanged, NO EFFECT!';
          state.lastAction = 'Added Inert Gas';
          for (let i = 0; i < 5; i++) {
            state.particles.push({
              symbol: 'Ar',
              color: '#71717a',
              isProduct: false,
              x: 60 + Math.random() * (width - 120),
              y: 100 + Math.random() * 160,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              radius: 6
            });
          }
        };

        const handleReset = () => {
          initReaction(state.reaction);
        };

        // Event listeners
        addReactantBtn.addEventListener('click', handleAddReactant);
        removeReactantBtn.addEventListener('click', handleRemoveReactant);
        addProductBtn.addEventListener('click', handleAddProduct);
        removeProductBtn.addEventListener('click', handleRemoveProduct);
        inertGasBtn.addEventListener('click', handleInertGas);
        resetBtn.addEventListener('click', handleReset);
        reactionSelect.addEventListener('change', () => initReaction(reactionSelect.value));

        // Animation loop
        const animate = () => {
          const colors = self.getColors();
          const reaction = presetReactions[state.reaction];

          ctx.fillStyle = colors.bg;
          ctx.fillRect(0, 0, width, height);

          // Draw title/equation
          ctx.fillStyle = colors.text;
          ctx.font = 'bold 16px system-ui';
          ctx.textAlign = 'center';
          ctx.fillText(reaction.equationDisplay, width / 2, 25);

          // Draw reaction type indicator
          ctx.font = '12px system-ui';
          ctx.fillStyle = reaction.deltaH < 0 ? '#f87171' : '#60a5fa';
          const thermoText = reaction.deltaH < 0 ?
            'Exothermic (\u0394H = ' + reaction.deltaH + ' kJ)' :
            'Endothermic (\u0394H = +' + reaction.deltaH + ' kJ)';
          ctx.fillText(thermoText, width / 2, 45);

          // Draw Delta n indicator
          ctx.fillStyle = colors.textSecondary;
          ctx.fillText('\u0394n(gas) = ' + reaction.deltaNG, width / 2, 62);

          // Draw container
          const containerLeft = 40;
          const containerRight = width - 40;
          const containerTop = 80;
          const containerBottom = 280;
          const containerWidth = (containerRight - containerLeft) * state.volume;

          ctx.strokeStyle = '#3f3f46';
          ctx.lineWidth = 3;
          ctx.strokeRect(containerLeft, containerTop, containerWidth, containerBottom - containerTop);

          // Draw piston
          ctx.fillStyle = '#52525b';
          ctx.fillRect(containerLeft + containerWidth - 5, containerTop - 10, 10, containerBottom - containerTop + 20);

          // Color background for NO2/N2O4 reaction
          if (reaction.colorChange) {
            const no2Conc = state.concentrations['NO\u2082'] || 0;
            const brownIntensity = Math.min(1, no2Conc / 2);
            ctx.fillStyle = 'rgba(180, 83, 9, ' + (brownIntensity * 0.3) + ')';
            ctx.fillRect(containerLeft + 2, containerTop + 2, containerWidth - 4, containerBottom - containerTop - 4);
          }

          // Update and draw particles
          state.particles.forEach(p => {
            p.x += p.vx * (state.temperature / 300);
            p.y += p.vy * (state.temperature / 300);

            const maxX = containerLeft + containerWidth - p.radius - 5;
            if (p.x < containerLeft + p.radius + 5) { p.x = containerLeft + p.radius + 5; p.vx *= -1; }
            if (p.x > maxX) { p.x = maxX; p.vx *= -1; }
            if (p.y < containerTop + p.radius + 5) { p.y = containerTop + p.radius + 5; p.vy *= -1; }
            if (p.y > containerBottom - p.radius - 5) { p.y = containerBottom - p.radius - 5; p.vy *= -1; }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            ctx.strokeStyle = 'rgba(255,255,255,0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
          });

          // Draw equilibrium position bar
          const barY = 300;
          const barWidth = width - 80;
          const barHeight = 20;
          const barX = 40;

          ctx.fillStyle = '#27272a';
          ctx.fillRect(barX, barY, barWidth, barHeight);

          const Q = calculateQ();
          const ratio = Q / state.K;
          const position = Math.min(Math.max(ratio / 2, 0.1), 0.9);

          const gradient = ctx.createLinearGradient(barX, 0, barX + barWidth, 0);
          gradient.addColorStop(0, '#60a5fa');
          gradient.addColorStop(0.5, '#fbbf24');
          gradient.addColorStop(1, '#34d399');
          ctx.fillStyle = gradient;
          ctx.fillRect(barX, barY, barWidth, barHeight);

          const indicatorX = barX + position * barWidth;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.moveTo(indicatorX, barY - 5);
          ctx.lineTo(indicatorX - 8, barY - 15);
          ctx.lineTo(indicatorX + 8, barY - 15);
          ctx.closePath();
          ctx.fill();

          ctx.font = '11px system-ui';
          ctx.textAlign = 'left';
          ctx.fillStyle = '#60a5fa';
          ctx.fillText('Reactants', barX, barY + barHeight + 15);
          ctx.textAlign = 'center';
          ctx.fillStyle = '#fbbf24';
          ctx.fillText('Equilibrium', barX + barWidth / 2, barY + barHeight + 15);
          ctx.textAlign = 'right';
          ctx.fillStyle = '#34d399';
          ctx.fillText('Products', barX + barWidth, barY + barHeight + 15);

          // Draw shift arrow
          if (state.shiftDirection !== 0) {
            const arrowY = 340;
            const arrowLen = 60;
            ctx.strokeStyle = state.shiftDirection > 0 ? '#34d399' : '#60a5fa';
            ctx.lineWidth = 4;
            ctx.beginPath();

            if (state.shiftDirection > 0) {
              ctx.moveTo(width / 2 - arrowLen, arrowY);
              ctx.lineTo(width / 2 + arrowLen, arrowY);
              ctx.moveTo(width / 2 + arrowLen, arrowY);
              ctx.lineTo(width / 2 + arrowLen - 15, arrowY - 10);
              ctx.moveTo(width / 2 + arrowLen, arrowY);
              ctx.lineTo(width / 2 + arrowLen - 15, arrowY + 10);
            } else {
              ctx.moveTo(width / 2 + arrowLen, arrowY);
              ctx.lineTo(width / 2 - arrowLen, arrowY);
              ctx.moveTo(width / 2 - arrowLen, arrowY);
              ctx.lineTo(width / 2 - arrowLen + 15, arrowY - 10);
              ctx.moveTo(width / 2 - arrowLen, arrowY);
              ctx.lineTo(width / 2 - arrowLen + 15, arrowY + 10);
            }
            ctx.stroke();

            ctx.font = 'bold 12px system-ui';
            ctx.textAlign = 'center';
            ctx.fillStyle = state.shiftDirection > 0 ? '#34d399' : '#60a5fa';
            ctx.fillText(state.shiftDirection > 0 ? 'FORWARD SHIFT' : 'BACKWARD SHIFT', width / 2, arrowY + 25);
          } else {
            ctx.font = 'bold 12px system-ui';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#fbbf24';
            ctx.fillText('AT EQUILIBRIUM', width / 2, 350);
          }

          // Draw message
          ctx.font = '11px system-ui';
          ctx.fillStyle = colors.textSecondary;
          ctx.fillText(state.shiftMessage, width / 2, 375);

          // Update info panel
          const Q_display = calculateQ();
          const allSpecies = [...reaction.reactants, ...reaction.products];
          let concHTML = allSpecies.map(s =>
            '<span style="color: ' + s.color + '">[' + s.symbol + '] = ' + state.concentrations[s.symbol].toFixed(2) + ' M</span>'
          ).join(' | ');

          const comparison = Q_display < state.K * 0.9 ? 'Q < K (Forward)' :
                            (Q_display > state.K * 1.1 ? 'Q > K (Backward)' : 'Q \u2248 K (Equilibrium)');
          const compColor = Q_display < state.K * 0.9 ? '#34d399' :
                           (Q_display > state.K * 1.1 ? '#60a5fa' : '#fbbf24');

          infoPanel.innerHTML =
            '<div style="margin-bottom: 8px; font-size: 11px; line-height: 1.6;">' + concHTML + '</div>' +
            '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 11px;">' +
              '<div>Q = <strong>' + Q_display.toFixed(3) + '</strong></div>' +
              '<div>K = <strong>' + state.K.toFixed(3) + '</strong></div>' +
            '</div>' +
            '<div style="margin-top: 8px; padding: 6px; background: ' + compColor + '22; border-radius: 4px; text-align: center; color: ' + compColor + '; font-weight: bold;">' +
              comparison +
            '</div>' +
            (state.lastAction ? '<div style="margin-top: 8px; font-size: 10px; color: #71717a;">Last Action: ' + state.lastAction + '</div>' : '') +
            '<div style="margin-top: 8px; padding: 6px; background: #3f3f4622; border-radius: 4px; font-size: 10px; color: #a1a1aa;">' +
              '<strong>Key Insight:</strong> K only changes with temperature!' +
            '</div>';

          requestAnimationFrame(animate);
        };

        // Responsive layout
        const handleResize = () => {
          if (window.innerWidth < 850) {
            mainLayout.style.gridTemplateColumns = '1fr';
            controlPanel.style.order = '2';
            canvasArea.style.order = '1';
          } else {
            mainLayout.style.gridTemplateColumns = '1fr 320px';
            controlPanel.style.order = '';
            canvasArea.style.order = '';
          }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        // Initialize and start
        initReaction('haber');
        animate();
      };
    } else {
      setTimeout(checkAndAdd, 100);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAndAdd);
  } else {
    checkAndAdd();
  }
})();
