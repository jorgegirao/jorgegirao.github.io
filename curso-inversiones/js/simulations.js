// Simulaciones Interactivas de Inversión
class InvestmentSimulations {
    constructor() {
        this.simulations = {
            portfolioBuilder: new PortfolioBuilderSimulation(),
            compoundInterest: new CompoundInterestSimulation(),
            riskReturn: new RiskReturnSimulation(),
            dollarCostAveraging: new DollarCostAveragingSimulation(),
            marketCrash: new MarketCrashSimulation()
        };
    }

    startSimulation(type, containerId) {
        const simulation = this.simulations[type];
        if (simulation) {
            simulation.render(containerId);
        }
    }
}

// Simulación de Constructor de Portafolios
class PortfolioBuilderSimulation {
    constructor() {
        this.assets = [
            { name: 'Acciones S&P 500', symbol: 'SPY', expectedReturn: 10, volatility: 15, allocation: 0 },
            { name: 'Bonos Gubernamentales', symbol: 'TLT', expectedReturn: 4, volatility: 8, allocation: 0 },
            { name: 'Bienes Raíces (REITs)', symbol: 'VNQ', expectedReturn: 8, volatility: 20, allocation: 0 },
            { name: 'Mercados Emergentes', symbol: 'EEM', expectedReturn: 12, volatility: 25, allocation: 0 },
            { name: 'Oro', symbol: 'GLD', expectedReturn: 3, volatility: 18, allocation: 0 },
            { name: 'Efectivo', symbol: 'CASH', expectedReturn: 1, volatility: 0, allocation: 0 }
        ];
        this.totalAllocation = 0;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = `
            <div class="simulation-container portfolio-builder">
                <div class="simulation-header">
                    <h3><i class="fas fa-chart-pie"></i> Constructor de Portafolios</h3>
                    <p>Construye tu portafolio ideal ajustando las asignaciones. Observa cómo cambian el riesgo y rendimiento esperado.</p>
                </div>

                <div class="portfolio-controls">
                    <div class="asset-allocations">
                        ${this.assets.map((asset, index) => `
                            <div class="asset-control">
                                <div class="asset-info">
                                    <span class="asset-name">${asset.name}</span>
                                    <span class="asset-details">Ret: ${asset.expectedReturn}% | Vol: ${asset.volatility}%</span>
                                </div>
                                <div class="allocation-control">
                                    <input type="range" min="0" max="100" value="0" 
                                           class="allocation-slider" data-index="${index}" />
                                    <span class="allocation-value">0%</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="portfolio-summary">
                        <div class="total-allocation">
                            <span>Asignación Total: </span>
                            <span id="total-allocation" class="total-value">0%</span>
                        </div>
                        <div class="portfolio-metrics">
                            <div class="metric">
                                <span class="metric-label">Rendimiento Esperado:</span>
                                <span id="expected-return" class="metric-value">0.0%</span>
                            </div>
                            <div class="metric">
                                <span class="metric-label">Volatilidad Estimada:</span>
                                <span id="portfolio-volatility" class="metric-value">0.0%</span>
                            </div>
                            <div class="metric">
                                <span class="metric-label">Ratio Sharpe:</span>
                                <span id="sharpe-ratio" class="metric-value">0.0</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="portfolio-visualization">
                    <div class="pie-chart-container">
                        <canvas id="portfolio-pie-chart" width="300" height="300"></canvas>
                    </div>
                    <div class="risk-return-chart">
                        <canvas id="risk-return-chart" width="400" height="300"></canvas>
                    </div>
                </div>

                <div class="preset-portfolios">
                    <h4>Portafolios Predefinidos:</h4>
                    <div class="preset-buttons">
                        <button class="preset-btn" data-preset="conservative">Conservador</button>
                        <button class="preset-btn" data-preset="moderate">Moderado</button>
                        <button class="preset-btn" data-preset="aggressive">Agresivo</button>
                        <button class="preset-btn" data-preset="retirement">Retiro (60 años)</button>
                    </div>
                </div>

                <div class="simulation-insights">
                    <div id="portfolio-insights" class="insights-content">
                        <p>Ajusta las asignaciones para ver insights sobre tu portafolio.</p>
                    </div>
                </div>
            </div>
        `;

        this.attachEventListeners();
        this.initializeCharts();
    }

    attachEventListeners() {
        // Sliders de asignación
        document.querySelectorAll('.allocation-slider').forEach(slider => {
            slider.addEventListener('input', (e) => {
                this.updateAllocation(parseInt(e.target.dataset.index), parseInt(e.target.value));
            });
        });

        // Botones de portafolios predefinidos
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.loadPresetPortfolio(e.target.dataset.preset);
            });
        });
    }

    updateAllocation(assetIndex, value) {
        this.assets[assetIndex].allocation = value;
        
        // Actualizar display del slider
        const slider = document.querySelector(`[data-index="${assetIndex}"]`);
        slider.nextElementSibling.textContent = `${value}%`;
        
        // Calcular total
        this.totalAllocation = this.assets.reduce((sum, asset) => sum + asset.allocation, 0);
        
        // Actualizar UI
        this.updatePortfolioMetrics();
        this.updateCharts();
        this.updateInsights();
    }

    updatePortfolioMetrics() {
        const totalElement = document.getElementById('total-allocation');
        totalElement.textContent = `${this.totalAllocation}%`;
        
        // Color coding
        if (this.totalAllocation === 100) {
            totalElement.className = 'total-value valid';
        } else if (this.totalAllocation > 100) {
            totalElement.className = 'total-value over';
        } else {
            totalElement.className = 'total-value under';
        }

        if (this.totalAllocation > 0) {
            const expectedReturn = this.calculateExpectedReturn();
            const volatility = this.calculatePortfolioVolatility();
            const sharpeRatio = this.calculateSharpeRatio(expectedReturn, volatility);

            document.getElementById('expected-return').textContent = `${expectedReturn.toFixed(1)}%`;
            document.getElementById('portfolio-volatility').textContent = `${volatility.toFixed(1)}%`;
            document.getElementById('sharpe-ratio').textContent = sharpeRatio.toFixed(2);
        }
    }

    calculateExpectedReturn() {
        return this.assets.reduce((sum, asset) => {
            return sum + (asset.allocation / 100) * asset.expectedReturn;
        }, 0);
    }

    calculatePortfolioVolatility() {
        // Simplificación: asumimos correlaciones promedio
        const correlationMatrix = this.getCorrelationMatrix();
        let variance = 0;

        for (let i = 0; i < this.assets.length; i++) {
            for (let j = 0; j < this.assets.length; j++) {
                const weight_i = this.assets[i].allocation / 100;
                const weight_j = this.assets[j].allocation / 100;
                const vol_i = this.assets[i].volatility / 100;
                const vol_j = this.assets[j].volatility / 100;
                const correlation = correlationMatrix[i][j];
                
                variance += weight_i * weight_j * vol_i * vol_j * correlation;
            }
        }

        return Math.sqrt(variance) * 100;
    }

    getCorrelationMatrix() {
        // Matriz de correlación simplificada
        return [
            [1.0, -0.2, 0.7, 0.8, -0.1, 0.0], // SPY
            [-0.2, 1.0, -0.1, -0.3, 0.2, 0.1], // TLT
            [0.7, -0.1, 1.0, 0.6, 0.1, 0.0], // VNQ
            [0.8, -0.3, 0.6, 1.0, 0.0, 0.0], // EEM
            [-0.1, 0.2, 0.1, 0.0, 1.0, 0.0], // GLD
            [0.0, 0.1, 0.0, 0.0, 0.0, 1.0]  // CASH
        ];
    }

    calculateSharpeRatio(expectedReturn, volatility) {
        const riskFreeRate = 2; // 2% tasa libre de riesgo
        return volatility > 0 ? (expectedReturn - riskFreeRate) / volatility : 0;
    }

    loadPresetPortfolio(preset) {
        const presets = {
            conservative: [20, 60, 5, 0, 10, 5],
            moderate: [50, 30, 10, 5, 5, 0],
            aggressive: [70, 10, 10, 10, 0, 0],
            retirement: [30, 50, 10, 0, 5, 5]
        };

        const allocations = presets[preset];
        if (allocations) {
            allocations.forEach((allocation, index) => {
                const slider = document.querySelector(`[data-index="${index}"]`);
                slider.value = allocation;
                this.updateAllocation(index, allocation);
            });
        }
    }

    updateInsights() {
        const insights = document.getElementById('portfolio-insights');
        
        if (this.totalAllocation !== 100) {
            insights.innerHTML = `
                <div class="insight warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>La asignación total debe ser 100% para obtener insights precisos.</p>
                </div>
            `;
            return;
        }

        const expectedReturn = this.calculateExpectedReturn();
        const volatility = this.calculatePortfolioVolatility();
        const sharpeRatio = this.calculateSharpeRatio(expectedReturn, volatility);

        let riskLevel, recommendation;
        
        if (volatility < 8) {
            riskLevel = "Conservador";
            recommendation = "Portafolio de bajo riesgo, apropiado para preservación de capital.";
        } else if (volatility < 15) {
            riskLevel = "Moderado";
            recommendation = "Portafolio balanceado con riesgo moderado y potencial de crecimiento.";
        } else {
            riskLevel = "Agresivo";
            recommendation = "Portafolio de alto riesgo con mayor potencial de rendimiento.";
        }

        insights.innerHTML = `
            <div class="insight-grid">
                <div class="insight">
                    <h5><i class="fas fa-chart-line"></i> Perfil de Riesgo</h5>
                    <p><strong>${riskLevel}</strong> - ${recommendation}</p>
                </div>
                <div class="insight">
                    <h5><i class="fas fa-balance-scale"></i> Análisis Sharpe</h5>
                    <p>Ratio Sharpe de <strong>${sharpeRatio.toFixed(2)}</strong> 
                    ${sharpeRatio > 1 ? '(Excelente)' : sharpeRatio > 0.5 ? '(Bueno)' : '(Mejorable)'}</p>
                </div>
                <div class="insight">
                    <h5><i class="fas fa-clock"></i> Horizonte Temporal</h5>
                    <p>${volatility > 15 ? 'Largo plazo (5+ años)' : volatility > 8 ? 'Mediano plazo (2-5 años)' : 'Corto plazo (1-2 años)'}</p>
                </div>
            </div>
        `;
    }

    initializeCharts() {
        // Inicializar gráficos (implementación simplificada)
        this.updateCharts();
    }

    updateCharts() {
        this.updatePieChart();
        this.updateRiskReturnChart();
    }

    updatePieChart() {
        const canvas = document.getElementById('portfolio-pie-chart');
        const ctx = canvas.getContext('2d');
        
        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (this.totalAllocation === 0) return;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 120;
        
        let currentAngle = -Math.PI / 2;
        const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];
        
        this.assets.forEach((asset, index) => {
            if (asset.allocation > 0) {
                const sliceAngle = (asset.allocation / this.totalAllocation) * 2 * Math.PI;
                
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
                ctx.closePath();
                ctx.fillStyle = colors[index];
                ctx.fill();
                
                // Etiqueta
                const labelAngle = currentAngle + sliceAngle / 2;
                const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
                const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
                
                ctx.fillStyle = 'white';
                ctx.font = '12px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(`${asset.allocation}%`, labelX, labelY);
                
                currentAngle += sliceAngle;
            }
        });
    }

    updateRiskReturnChart() {
        const canvas = document.getElementById('risk-return-chart');
        const ctx = canvas.getContext('2d');
        
        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dibujar ejes
        ctx.strokeStyle = '#ccc';
        ctx.beginPath();
        ctx.moveTo(50, canvas.height - 50);
        ctx.lineTo(canvas.width - 20, canvas.height - 50);
        ctx.moveTo(50, canvas.height - 50);
        ctx.lineTo(50, 20);
        ctx.stroke();
        
        // Etiquetas de ejes
        ctx.fillStyle = '#666';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Riesgo (Volatilidad %)', canvas.width / 2, canvas.height - 10);
        
        ctx.save();
        ctx.translate(15, canvas.height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Rendimiento Esperado %', 0, 0);
        ctx.restore();
        
        // Plotear activos individuales
        this.assets.forEach((asset, index) => {
            const x = 50 + (asset.volatility / 30) * (canvas.width - 70);
            const y = canvas.height - 50 - (asset.expectedReturn / 15) * (canvas.height - 70);
            
            ctx.fillStyle = asset.allocation > 0 ? '#FF6384' : '#ccc';
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.fill();
            
            // Etiqueta del activo
            ctx.fillStyle = '#333';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(asset.symbol, x, y - 10);
        });
        
        // Plotear portafolio actual
        if (this.totalAllocation === 100) {
            const portfolioReturn = this.calculateExpectedReturn();
            const portfolioVol = this.calculatePortfolioVolatility();
            
            const x = 50 + (portfolioVol / 30) * (canvas.width - 70);
            const y = canvas.height - 50 - (portfolioReturn / 15) * (canvas.height - 70);
            
            ctx.fillStyle = '#00FF00';
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, 2 * Math.PI);
            ctx.fill();
            
            ctx.fillStyle = '#000';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Tu Portafolio', x, y - 15);
        }
    }
}

// Simulación de Interés Compuesto
class CompoundInterestSimulation {
    constructor() {
        this.initialAmount = 10000;
        this.monthlyContribution = 500;
        this.annualReturn = 7;
        this.years = 30;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = `
            <div class="simulation-container compound-interest">
                <div class="simulation-header">
                    <h3><i class="fas fa-seedling"></i> Simulador de Interés Compuesto</h3>
                    <p>Descubre el poder del interés compuesto ajustando los parámetros.</p>
                </div>

                <div class="simulation-controls">
                    <div class="control-group">
                        <label>Inversión Inicial: $<span id="initial-display">10,000</span></label>
                        <input type="range" id="initial-slider" min="1000" max="100000" step="1000" value="10000" />
                    </div>
                    
                    <div class="control-group">
                        <label>Contribución Mensual: $<span id="monthly-display">500</span></label>
                        <input type="range" id="monthly-slider" min="0" max="2000" step="50" value="500" />
                    </div>
                    
                    <div class="control-group">
                        <label>Rendimiento Anual: <span id="return-display">7</span>%</label>
                        <input type="range" id="return-slider" min="1" max="15" step="0.5" value="7" />
                    </div>
                    
                    <div class="control-group">
                        <label>Años de Inversión: <span id="years-display">30</span></label>
                        <input type="range" id="years-slider" min="1" max="50" step="1" value="30" />
                    </div>
                </div>

                <div class="simulation-results">
                    <div class="result-cards">
                        <div class="result-card">
                            <h4>Total Invertido</h4>
                            <div class="result-value" id="total-invested">$190,000</div>
                        </div>
                        <div class="result-card">
                            <h4>Valor Final</h4>
                            <div class="result-value" id="final-value">$678,146</div>
                        </div>
                        <div class="result-card">
                            <h4>Ganancias por Interés</h4>
                            <div class="result-value" id="interest-earned">$488,146</div>
                        </div>
                    </div>
                    
                    <div class="growth-chart">
                        <canvas id="compound-chart" width="600" height="300"></canvas>
                    </div>
                </div>

                <div class="simulation-insights">
                    <div class="insight-tabs">
                        <button class="tab-btn active" data-tab="power">El Poder del Tiempo</button>
                        <button class="tab-btn" data-tab="contributions">Contribuciones Regulares</button>
                        <button class="tab-btn" data-tab="returns">Impacto del Rendimiento</button>
                    </div>
                    
                    <div class="tab-content">
                        <div id="power-tab" class="tab-panel active">
                            <h4>El Poder del Tiempo</h4>
                            <p>El tiempo es tu mejor aliado en las inversiones. Cada año adicional tiene un impacto exponencial en tu riqueza final.</p>
                            <div id="time-comparison"></div>
                        </div>
                        
                        <div id="contributions-tab" class="tab-panel">
                            <h4>Contribuciones Regulares</h4>
                            <p>Las contribuciones consistentes aprovechan el dollar-cost averaging y aceleran el crecimiento.</p>
                            <div id="contribution-comparison"></div>
                        </div>
                        
                        <div id="returns-tab" class="tab-panel">
                            <h4>Impacto del Rendimiento</h4>
                            <p>Pequeñas diferencias en rendimiento tienen efectos dramáticos a largo plazo.</p>
                            <div id="return-comparison"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.attachEventListeners();
        this.updateSimulation();
    }

    attachEventListeners() {
        // Sliders
        document.getElementById('initial-slider').addEventListener('input', (e) => {
            this.initialAmount = parseInt(e.target.value);
            document.getElementById('initial-display').textContent = this.formatCurrency(this.initialAmount);
            this.updateSimulation();
        });

        document.getElementById('monthly-slider').addEventListener('input', (e) => {
            this.monthlyContribution = parseInt(e.target.value);
            document.getElementById('monthly-display').textContent = this.formatCurrency(this.monthlyContribution);
            this.updateSimulation();
        });

        document.getElementById('return-slider').addEventListener('input', (e) => {
            this.annualReturn = parseFloat(e.target.value);
            document.getElementById('return-display').textContent = this.annualReturn;
            this.updateSimulation();
        });

        document.getElementById('years-slider').addEventListener('input', (e) => {
            this.years = parseInt(e.target.value);
            document.getElementById('years-display').textContent = this.years;
            this.updateSimulation();
        });

        // Tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
    }

    updateSimulation() {
        const results = this.calculateCompoundGrowth();
        
        // Actualizar tarjetas de resultados
        document.getElementById('total-invested').textContent = this.formatCurrency(results.totalInvested);
        document.getElementById('final-value').textContent = this.formatCurrency(results.finalValue);
        document.getElementById('interest-earned').textContent = this.formatCurrency(results.interestEarned);
        
        // Actualizar gráfico
        this.updateChart(results.yearlyData);
        
        // Actualizar insights
        this.updateInsights(results);
    }

    calculateCompoundGrowth() {
        const monthlyRate = this.annualReturn / 100 / 12;
        const totalMonths = this.years * 12;
        
        let balance = this.initialAmount;
        const yearlyData = [{year: 0, balance: this.initialAmount, invested: this.initialAmount}];
        let totalInvested = this.initialAmount;
        
        for (let month = 1; month <= totalMonths; month++) {
            balance = balance * (1 + monthlyRate) + this.monthlyContribution;
            totalInvested += this.monthlyContribution;
            
            // Guardar datos anuales
            if (month % 12 === 0) {
                yearlyData.push({
                    year: month / 12,
                    balance: balance,
                    invested: totalInvested
                });
            }
        }
        
        return {
            finalValue: balance,
            totalInvested: totalInvested,
            interestEarned: balance - totalInvested,
            yearlyData: yearlyData
        };
    }

    updateChart(data) {
        const canvas = document.getElementById('compound-chart');
        const ctx = canvas.getContext('2d');
        
        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const padding = 60;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;
        
        // Encontrar valores máximos
        const maxValue = Math.max(...data.map(d => d.balance));
        const maxYear = Math.max(...data.map(d => d.year));
        
        // Dibujar ejes
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, canvas.height - padding);
        ctx.lineTo(canvas.width - padding, canvas.height - padding);
        ctx.stroke();
        
        // Dibujar línea de balance total
        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        data.forEach((point, index) => {
            const x = padding + (point.year / maxYear) * chartWidth;
            const y = canvas.height - padding - (point.balance / maxValue) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        
        // Dibujar línea de inversión total
        ctx.strokeStyle = '#FF9800';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        data.forEach((point, index) => {
            const x = padding + (point.year / maxYear) * chartWidth;
            const y = canvas.height - padding - (point.invested / maxValue) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        
        // Etiquetas
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Años', canvas.width / 2, canvas.height - 20);
        
        // Leyenda
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(canvas.width - 200, 30, 15, 15);
        ctx.fillStyle = '#333';
        ctx.textAlign = 'left';
        ctx.fillText('Valor Total', canvas.width - 180, 42);
        
        ctx.fillStyle = '#FF9800';
        ctx.fillRect(canvas.width - 200, 50, 15, 15);
        ctx.fillStyle = '#333';
        ctx.fillText('Total Invertido', canvas.width - 180, 62);
    }

    switchTab(tabName) {
        // Actualizar botones
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Actualizar contenido
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`).classList.add('active');
        
        // Actualizar contenido específico del tab
        this.updateTabContent(tabName);
    }

    updateTabContent(tabName) {
        switch (tabName) {
            case 'power':
                this.updateTimePowerTab();
                break;
            case 'contributions':
                this.updateContributionsTab();
                break;
            case 'returns':
                this.updateReturnsTab();
                break;
        }
    }

    updateTimePowerTab() {
        const container = document.getElementById('time-comparison');
        const scenarios = [
            {years: this.years - 10, label: `${this.years - 10} años`},
            {years: this.years, label: `${this.years} años`},
            {years: this.years + 10, label: `${this.years + 10} años`}
        ];
        
        const comparisons = scenarios.map(scenario => {
            const tempYears = this.years;
            this.years = scenario.years;
            const result = this.calculateCompoundGrowth();
            this.years = tempYears;
            return {
                ...scenario,
                finalValue: result.finalValue
            };
        });
        
        container.innerHTML = `
            <div class="comparison-grid">
                ${comparisons.map(comp => `
                    <div class="comparison-item">
                        <h5>${comp.label}</h5>
                        <div class="comparison-value">${this.formatCurrency(comp.finalValue)}</div>
                    </div>
                `).join('')}
            </div>
            <p class="insight-text">
                Invertir por ${comparisons[2].years} años en lugar de ${comparisons[0].years} años 
                resulta en <strong>${this.formatCurrency(comparisons[2].finalValue - comparisons[0].finalValue)}</strong> 
                adicionales, ¡solo por esperar 10 años más!
            </p>
        `;
    }

    updateContributionsTab() {
        const container = document.getElementById('contribution-comparison');
        const scenarios = [
            {monthly: 0, label: 'Sin contribuciones'},
            {monthly: this.monthlyContribution / 2, label: `$${this.monthlyContribution / 2}/mes`},
            {monthly: this.monthlyContribution, label: `$${this.monthlyContribution}/mes`},
            {monthly: this.monthlyContribution * 2, label: `$${this.monthlyContribution * 2}/mes`}
        ];
        
        const comparisons = scenarios.map(scenario => {
            const tempMonthly = this.monthlyContribution;
            this.monthlyContribution = scenario.monthly;
            const result = this.calculateCompoundGrowth();
            this.monthlyContribution = tempMonthly;
            return {
                ...scenario,
                finalValue: result.finalValue
            };
        });
        
        container.innerHTML = `
            <div class="comparison-grid">
                ${comparisons.map(comp => `
                    <div class="comparison-item">
                        <h5>${comp.label}</h5>
                        <div class="comparison-value">${this.formatCurrency(comp.finalValue)}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    updateReturnsTab() {
        const container = document.getElementById('return-comparison');
        const scenarios = [
            {return: 5, label: '5% anual'},
            {return: 7, label: '7% anual'},
            {return: 9, label: '9% anual'},
            {return: 11, label: '11% anual'}
        ];
        
        const comparisons = scenarios.map(scenario => {
            const tempReturn = this.annualReturn;
            this.annualReturn = scenario.return;
            const result = this.calculateCompoundGrowth();
            this.annualReturn = tempReturn;
            return {
                ...scenario,
                finalValue: result.finalValue
            };
        });
        
        container.innerHTML = `
            <div class="comparison-grid">
                ${comparisons.map(comp => `
                    <div class="comparison-item">
                        <h5>${comp.label}</h5>
                        <div class="comparison-value">${this.formatCurrency(comp.finalValue)}</div>
                    </div>
                `).join('')}
            </div>
            <p class="insight-text">
                La diferencia entre 5% y 11% anual es de 
                <strong>${this.formatCurrency(comparisons[3].finalValue - comparisons[0].finalValue)}</strong> 
                después de ${this.years} años. ¡Cada punto porcentual cuenta!
            </p>
        `;
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }

    updateInsights(results) {
        // Actualizar insights basados en los resultados actuales
        const multiplier = results.finalValue / results.totalInvested;
        
        // Lógica adicional para insights dinámicos
    }
}

// Simulación de Dollar Cost Averaging
class DollarCostAveragingSimulation {
    constructor() {
        this.monthlyInvestment = 1000;
        this.volatileMarket = true;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = `
            <div class="simulation-container dca-simulation">
                <div class="simulation-header">
                    <h3><i class="fas fa-chart-area"></i> Dollar Cost Averaging vs. Lump Sum</h3>
                    <p>Compara las estrategias de inversión gradual vs. inversión única.</p>
                </div>

                <div class="simulation-controls">
                    <div class="control-group">
                        <label>Inversión Mensual: $<span id="dca-monthly-display">1,000</span></label>
                        <input type="range" id="dca-monthly-slider" min="100" max="5000" step="100" value="1000" />
                    </div>
                    
                    <div class="control-group">
                        <label>Tipo de Mercado:</label>
                        <select id="market-type">
                            <option value="volatile">Volátil (realista)</option>
                            <option value="trending-up">Tendencia alcista</option>
                            <option value="trending-down">Tendencia bajista</option>
                            <option value="sideways">Lateral</option>
                        </select>
                    </div>
                </div>

                <div class="simulation-results">
                    <div class="strategy-comparison">
                        <div class="strategy-card dca">
                            <h4><i class="fas fa-calendar-alt"></i> Dollar Cost Averaging</h4>
                            <div class="strategy-metrics">
                                <div class="metric">
                                    <span class="metric-label">Valor Final:</span>
                                    <span class="metric-value" id="dca-final-value">$0</span>
                                </div>
                                <div class="metric">
                                    <span class="metric-label">Precio Promedio:</span>
                                    <span class="metric-value" id="dca-avg-price">$0</span>
                                </div>
                                <div class="metric">
                                    <span class="metric-label">Acciones Compradas:</span>
                                    <span class="metric-value" id="dca-shares">0</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="strategy-card lump-sum">
                            <h4><i class="fas fa-hand-holding-usd"></i> Inversión Única</h4>
                            <div class="strategy-metrics">
                                <div class="metric">
                                    <span class="metric-label">Valor Final:</span>
                                    <span class="metric-value" id="lump-final-value">$0</span>
                                </div>
                                <div class="metric">
                                    <span class="metric-label">Precio de Compra:</span>
                                    <span class="metric-value" id="lump-price">$0</span>
                                </div>
                                <div class="metric">
                                    <span class="metric-label">Acciones Compradas:</span>
                                    <span class="metric-value" id="lump-shares">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="winner-display">
                        <div id="strategy-winner" class="winner-card">
                            <h4>Calculando...</h4>
                        </div>
                    </div>
                    
                    <div class="dca-chart">
                        <canvas id="dca-chart" width="700" height="400"></canvas>
                    </div>
                </div>

                <div class="dca-insights">
                    <div class="insight-cards">
                        <div class="insight-card">
                            <h5><i class="fas fa-shield-alt"></i> Ventajas del DCA</h5>
                            <ul>
                                <li>Reduce el riesgo de timing del mercado</li>
                                <li>Suaviza la volatilidad</li>
                                <li>Disciplina de inversión automática</li>
                                <li>Menor estrés emocional</li>
                            </ul>
                        </div>
                        
                        <div class="insight-card">
                            <h5><i class="fas fa-rocket"></i> Ventajas del Lump Sum</h5>
                            <ul>
                                <li>Más tiempo en el mercado</li>
                                <li>Aprovecha tendencias alcistas</li>
                                <li>Potencialmente mayor rendimiento</li>
                                <li>Simplicidad de ejecución</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.attachEventListeners();
        this.runSimulation();
    }

    attachEventListeners() {
        document.getElementById('dca-monthly-slider').addEventListener('input', (e) => {
            this.monthlyInvestment = parseInt(e.target.value);
            document.getElementById('dca-monthly-display').textContent = this.formatCurrency(this.monthlyInvestment);
            this.runSimulation();
        });

        document.getElementById('market-type').addEventListener('change', (e) => {
            this.marketType = e.target.value;
            this.runSimulation();
        });
    }

    runSimulation() {
        const months = 24; // 2 años de simulación
        const initialPrice = 100;
        
        // Generar precios según el tipo de mercado
        const prices = this.generateMarketPrices(months, initialPrice);
        
        // Calcular DCA
        const dcaResults = this.calculateDCA(prices);
        
        // Calcular Lump Sum
        const lumpSumResults = this.calculateLumpSum(prices);
        
        // Actualizar UI
        this.updateResults(dcaResults, lumpSumResults);
        this.updateChart(prices, dcaResults, lumpSumResults);
    }

    generateMarketPrices(months, initialPrice) {
        const prices = [initialPrice];
        let currentPrice = initialPrice;
        
        for (let i = 1; i <= months; i++) {
            let change;
            
            switch (this.marketType) {
                case 'volatile':
                    change = (Math.random() - 0.5) * 0.3; // ±15% mensual
                    break;
                case 'trending-up':
                    change = 0.02 + Math.random() * 0.1; // 2-12% mensual
                    break;
                case 'trending-down':
                    change = -0.02 - Math.random() * 0.1; // -2% a -12% mensual
                    break;
                case 'sideways':
                    change = (Math.random() - 0.5) * 0.1; // ±5% mensual
                    break;
                default:
                    change = (Math.random() - 0.5) * 0.2;
            }
            
            currentPrice *= (1 + change);
            prices.push(Math.max(currentPrice, 10)); // Precio mínimo de $10
        }
        
        return prices;
    }

    calculateDCA(prices) {
        let totalShares = 0;
        let totalInvested = 0;
        const purchases = [];
        
        // Comprar cada mes (excepto el primer mes que es el precio inicial)
        for (let i = 1; i < prices.length; i++) {
            const shares = this.monthlyInvestment / prices[i];
            totalShares += shares;
            totalInvested += this.monthlyInvestment;
            
            purchases.push({
                month: i,
                price: prices[i],
                shares: shares,
                investment: this.monthlyInvestment
            });
        }
        
        const finalValue = totalShares * prices[prices.length - 1];
        const avgPrice = totalInvested / totalShares;
        
        return {
            totalShares,
            totalInvested,
            finalValue,
            avgPrice,
            purchases,
            return: ((finalValue - totalInvested) / totalInvested) * 100
        };
    }

    calculateLumpSum(prices) {
        const totalInvestment = this.monthlyInvestment * (prices.length - 1);
        const initialPrice = prices[0];
        const finalPrice = prices[prices.length - 1];
        
        const shares = totalInvestment / initialPrice;
        const finalValue = shares * finalPrice;
        
        return {
            totalShares: shares,
            totalInvested: totalInvestment,
            finalValue,
            purchasePrice: initialPrice,
            return: ((finalValue - totalInvestment) / totalInvestment) * 100
        };
    }

    updateResults(dcaResults, lumpSumResults) {
        // Actualizar métricas DCA
        document.getElementById('dca-final-value').textContent = this.formatCurrency(dcaResults.finalValue);
        document.getElementById('dca-avg-price').textContent = this.formatCurrency(dcaResults.avgPrice);
        document.getElementById('dca-shares').textContent = dcaResults.totalShares.toFixed(2);
        
        // Actualizar métricas Lump Sum
        document.getElementById('lump-final-value').textContent = this.formatCurrency(lumpSumResults.finalValue);
        document.getElementById('lump-price').textContent = this.formatCurrency(lumpSumResults.purchasePrice);
        document.getElementById('lump-shares').textContent = lumpSumResults.totalShares.toFixed(2);
        
        // Determinar ganador
        const winner = dcaResults.finalValue > lumpSumResults.finalValue ? 'DCA' : 'Lump Sum';
        const difference = Math.abs(dcaResults.finalValue - lumpSumResults.finalValue);
        const winnerCard = document.getElementById('strategy-winner');
        
        winnerCard.innerHTML = `
            <h4><i class="fas fa-trophy"></i> Ganador: ${winner}</h4>
            <p>Ventaja de <strong>${this.formatCurrency(difference)}</strong></p>
            <div class="return-comparison">
                <span>DCA: ${dcaResults.return.toFixed(1)}%</span>
                <span>Lump Sum: ${lumpSumResults.return.toFixed(1)}%</span>
            </div>
        `;
        
        winnerCard.className = `winner-card ${winner.toLowerCase().replace(' ', '-')}`;
    }

    updateChart(prices, dcaResults, lumpSumResults) {
        const canvas = document.getElementById('dca-chart');
        const ctx = canvas.getContext('2d');
        
        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const padding = 60;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;
        
        const maxPrice = Math.max(...prices);
        const minPrice = Math.min(...prices);
        const priceRange = maxPrice - minPrice;
        
        // Dibujar ejes
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, canvas.height - padding);
        ctx.lineTo(canvas.width - padding, canvas.height - padding);
        ctx.stroke();
        
        // Dibujar línea de precios
        ctx.strokeStyle = '#2196F3';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        prices.forEach((price, index) => {
            const x = padding + (index / (prices.length - 1)) * chartWidth;
            const y = padding + ((maxPrice - price) / priceRange) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        
        // Marcar compras DCA
        ctx.fillStyle = '#4CAF50';
        dcaResults.purchases.forEach(purchase => {
            const x = padding + (purchase.month / (prices.length - 1)) * chartWidth;
            const y = padding + ((maxPrice - purchase.price) / priceRange) * chartHeight;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        });
        
        // Marcar compra Lump Sum
        ctx.fillStyle = '#FF5722';
        const lumpX = padding;
        const lumpY = padding + ((maxPrice - lumpSumResults.purchasePrice) / priceRange) * chartHeight;
        ctx.beginPath();
        ctx.arc(lumpX, lumpY, 8, 0, 2 * Math.PI);
        ctx.fill();
        
        // Leyenda
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        
        ctx.fillStyle = '#2196F3';
        ctx.fillRect(canvas.width - 200, 30, 15, 15);
        ctx.fillStyle = '#333';
        ctx.fillText('Precio de la Acción', canvas.width - 180, 42);
        
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(canvas.width - 200, 50, 15, 15);
        ctx.fillStyle = '#333';
        ctx.fillText('Compras DCA', canvas.width - 180, 62);
        
        ctx.fillStyle = '#FF5722';
        ctx.fillRect(canvas.width - 200, 70, 15, 15);
        ctx.fillStyle = '#333';
        ctx.fillText('Compra Lump Sum', canvas.width - 180, 82);
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }
}

// Simulación de Crisis de Mercado
class MarketCrashSimulation {
    constructor() {
        this.portfolioValue = 100000;
        this.crashSeverity = 40; // 40% caída
        this.recoveryTime = 24; // 24 meses
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = `
            <div class="simulation-container crash-simulation">
                <div class="simulation-header">
                    <h3><i class="fas fa-chart-line-down"></i> Simulador de Crisis de Mercado</h3>
                    <p>Experimenta diferentes estrategias durante una crisis financiera.</p>
                </div>

                <div class="simulation-controls">
                    <div class="control-group">
                        <label>Valor Inicial del Portafolio: $<span id="portfolio-display">100,000</span></label>
                        <input type="range" id="portfolio-slider" min="10000" max="1000000" step="10000" value="100000" />
                    </div>
                    
                    <div class="control-group">
                        <label>Severidad de la Crisis: <span id="crash-display">40</span>%</label>
                        <input type="range" id="crash-slider" min="10" max="80" step="5" value="40" />
                    </div>
                    
                    <div class="control-group">
                        <label>Tiempo de Recuperación: <span id="recovery-display">24</span> meses</label>
                        <input type="range" id="recovery-slider" min="6" max="60" step="6" value="24" />
                    </div>
                </div>

                <div class="strategy-selector">
                    <h4>Elige tu estrategia durante la crisis:</h4>
                    <div class="strategy-options">
                        <button class="strategy-btn" data-strategy="panic-sell">
                            <i class="fas fa-exclamation-triangle"></i>
                            <span>Vender en Pánico</span>
                            <small>Vender todo al 50% de la caída</small>
                        </button>
                        
                        <button class="strategy-btn" data-strategy="hold">
                            <i class="fas fa-hand-paper"></i>
                            <span>Mantener Posiciones</span>
                            <small>No hacer nada, esperar</small>
                        </button>
                        
                        <button class="strategy-btn" data-strategy="buy-dip">
                            <i class="fas fa-shopping-cart"></i>
                            <span>Comprar en la Caída</span>
                            <small>Invertir más durante la crisis</small>
                        </button>
                        
                        <button class="strategy-btn" data-strategy="dca-through">
                            <i class="fas fa-calendar-check"></i>
                            <span>DCA Continuo</span>
                            <small>Seguir invirtiendo regularmente</small>
                        </button>
                    </div>
                </div>

                <div class="simulation-results">
                    <div class="crisis-timeline">
                        <canvas id="crisis-chart" width="800" height="400"></canvas>
                    </div>
                    
                    <div class="strategy-outcomes">
                        <div id="outcomes-grid" class="outcomes-grid">
                            <!-- Los resultados se llenarán dinámicamente -->
                        </div>
                    </div>
                </div>

                <div class="crisis-lessons">
                    <div class="lesson-cards">
                        <div class="lesson-card">
                            <h5><i class="fas fa-brain"></i> Lecciones Psicológicas</h5>
                            <ul>
                                <li>El pánico es el enemigo del inversionista</li>
                                <li>Las emociones llevan a decisiones costosas</li>
                                <li>La perspectiva a largo plazo es crucial</li>
                                <li>La disciplina supera a la inteligencia</li>
                            </ul>
                        </div>
                        
                        <div class="lesson-card">
                            <h5><i class="fas fa-history"></i> Lecciones Históricas</h5>
                            <ul>
                                <li>Todas las crisis han sido temporales</li>
                                <li>Los mercados siempre se recuperan</li>
                                <li>Las oportunidades surgen en las crisis</li>
                                <li>El tiempo cura las heridas del mercado</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.attachEventListeners();
        this.runAllStrategies();
    }

    attachEventListeners() {
        // Controles de simulación
        document.getElementById('portfolio-slider').addEventListener('input', (e) => {
            this.portfolioValue = parseInt(e.target.value);
            document.getElementById('portfolio-display').textContent = this.formatCurrency(this.portfolioValue);
            this.runAllStrategies();
        });

        document.getElementById('crash-slider').addEventListener('input', (e) => {
            this.crashSeverity = parseInt(e.target.value);
            document.getElementById('crash-display').textContent = this.crashSeverity;
            this.runAllStrategies();
        });

        document.getElementById('recovery-slider').addEventListener('input', (e) => {
            this.recoveryTime = parseInt(e.target.value);
            document.getElementById('recovery-display').textContent = this.recoveryTime;
            this.runAllStrategies();
        });

        // Botones de estrategia
        document.querySelectorAll('.strategy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remover selección anterior
                document.querySelectorAll('.strategy-btn').forEach(b => b.classList.remove('selected'));
                // Seleccionar actual
                btn.classList.add('selected');
                
                const strategy = btn.dataset.strategy;
                this.highlightStrategy(strategy);
            });
        });
    }

    runAllStrategies() {
        const strategies = ['panic-sell', 'hold', 'buy-dip', 'dca-through'];
        const results = {};
        
        strategies.forEach(strategy => {
            results[strategy] = this.simulateStrategy(strategy);
        });
        
        this.updateChart(results);
        this.updateOutcomes(results);
    }

    simulateStrategy(strategy) {
        const totalMonths = 60; // 5 años de simulación
        const crashStart = 6; // Crisis empieza en mes 6
        const crashEnd = crashStart + 6; // Crisis dura 6 meses
        const recoveryEnd = crashEnd + this.recoveryTime;
        
        let portfolioValue = this.portfolioValue;
        let cashPosition = 0;
        let monthlyInvestment = 1000; // Para estrategias DCA
        const timeline = [];
        
        for (let month = 0; month <= totalMonths; month++) {
            let marketReturn = 0;
            
            // Determinar rendimiento del mercado
            if (month < crashStart) {
                // Pre-crisis: mercado normal
                marketReturn = 0.007; // 0.7% mensual (~8.5% anual)
            } else if (month >= crashStart && month < crashEnd) {
                // Durante la crisis
                const crashProgress = (month - crashStart) / (crashEnd - crashStart);
                const monthlyDecline = -this.crashSeverity / 100 / (crashEnd - crashStart);
                marketReturn = monthlyDecline;
            } else if (month >= crashEnd && month < recoveryEnd) {
                // Recuperación
                const recoveryProgress = (month - crashEnd) / (recoveryEnd - crashEnd);
                const monthlyRecovery = (this.crashSeverity / 100) / (recoveryEnd - crashEnd);
                marketReturn = monthlyRecovery;
            } else {
                // Post-recuperación: mercado normal
                marketReturn = 0.007;
            }
            
            // Aplicar estrategia
            switch (strategy) {
                case 'panic-sell':
                    if (month === crashStart + 3) { // Vende a mitad de la crisis
                        cashPosition = portfolioValue;
                        portfolioValue = 0;
                    }
                    if (portfolioValue > 0) {
                        portfolioValue *= (1 + marketReturn);
                    }
                    break;
                    
                case 'hold':
                    portfolioValue *= (1 + marketReturn);
                    break;
                    
                case 'buy-dip':
                    if (month >= crashStart && month < crashEnd) {
                        // Invierte extra durante la crisis
                        portfolioValue += monthlyInvestment * 2;
                    }
                    portfolioValue *= (1 + marketReturn);
                    break;
                    
                case 'dca-through':
                    // Invierte regularmente sin importar las condiciones
                    portfolioValue += monthlyInvestment;
                    portfolioValue *= (1 + marketReturn);
                    break;
            }
            
            timeline.push({
                month,
                portfolioValue: portfolioValue + cashPosition,
                marketReturn,
                phase: this.getMarketPhase(month, crashStart, crashEnd, recoveryEnd)
            });
        }
        
        return {
            timeline,
            finalValue: portfolioValue + cashPosition,
            maxDrawdown: this.calculateMaxDrawdown(timeline),
            recoveryMonth: this.findRecoveryMonth(timeline)
        };
    }

    getMarketPhase(month, crashStart, crashEnd, recoveryEnd) {
        if (month < crashStart) return 'normal';
        if (month < crashEnd) return 'crash';
        if (month < recoveryEnd) return 'recovery';
        return 'normal';
    }

    calculateMaxDrawdown(timeline) {
        let peak = timeline[0].portfolioValue;
        let maxDrawdown = 0;
        
        timeline.forEach(point => {
            if (point.portfolioValue > peak) {
                peak = point.portfolioValue;
            }
            const drawdown = (peak - point.portfolioValue) / peak;
            maxDrawdown = Math.max(maxDrawdown, drawdown);
        });
        
        return maxDrawdown * 100;
    }

    findRecoveryMonth(timeline) {
        const initialValue = timeline[0].portfolioValue;
        
        for (let i = 1; i < timeline.length; i++) {
            if (timeline[i].portfolioValue >= initialValue) {
                return i;
            }
        }
        
        return null; // No se recuperó
    }

    updateChart(results) {
        const canvas = document.getElementById('crisis-chart');
        const ctx = canvas.getContext('2d');
        
        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const padding = 60;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;
        
        // Encontrar valores máximos y mínimos
        const allValues = Object.values(results).flatMap(r => r.timeline.map(t => t.portfolioValue));
        const maxValue = Math.max(...allValues);
        const minValue = Math.min(...allValues);
        const valueRange = maxValue - minValue;
        
        const maxMonth = Math.max(...Object.values(results).map(r => r.timeline.length));
        
        // Dibujar fondo de fases del mercado
        this.drawMarketPhases(ctx, padding, chartWidth, chartHeight, maxMonth);
        
        // Dibujar ejes
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, canvas.height - padding);
        ctx.lineTo(canvas.width - padding, canvas.height - padding);
        ctx.stroke();
        
        // Colores para cada estrategia
        const colors = {
            'panic-sell': '#F44336',
            'hold': '#2196F3',
            'buy-dip': '#4CAF50',
            'dca-through': '#FF9800'
        };
        
        // Dibujar líneas de estrategias
        Object.entries(results).forEach(([strategy, result]) => {
            ctx.strokeStyle = colors[strategy];
            ctx.lineWidth = 3;
            ctx.beginPath();
            
            result.timeline.forEach((point, index) => {
                const x = padding + (point.month / (maxMonth - 1)) * chartWidth;
                const y = canvas.height - padding - ((point.portfolioValue - minValue) / valueRange) * chartHeight;
                
                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
            
            ctx.stroke();
        });
        
        // Leyenda
        this.drawLegend(ctx, colors, canvas.width, canvas.height);
        
        // Etiquetas de ejes
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Meses', canvas.width / 2, canvas.height - 20);
        
        ctx.save();
        ctx.translate(20, canvas.height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Valor del Portafolio', 0, 0);
        ctx.restore();
    }

    drawMarketPhases(ctx, padding, chartWidth, chartHeight, maxMonth) {
        const crashStart = 6;
        const crashEnd = 12;
        const recoveryEnd = 12 + this.recoveryTime;
        
        // Fase normal (pre-crisis)
        ctx.fillStyle = 'rgba(76, 175, 80, 0.1)';
        ctx.fillRect(padding, padding, (crashStart / maxMonth) * chartWidth, chartHeight);
        
        // Fase de crisis
        ctx.fillStyle = 'rgba(244, 67, 54, 0.1)';
        const crashWidth = ((crashEnd - crashStart) / maxMonth) * chartWidth;
        ctx.fillRect(padding + (crashStart / maxMonth) * chartWidth, padding, crashWidth, chartHeight);
        
        // Fase de recuperación
        ctx.fillStyle = 'rgba(255, 152, 0, 0.1)';
        const recoveryWidth = ((recoveryEnd - crashEnd) / maxMonth) * chartWidth;
        ctx.fillRect(padding + (crashEnd / maxMonth) * chartWidth, padding, recoveryWidth, chartHeight);
        
        // Fase normal (post-recuperación)
        ctx.fillStyle = 'rgba(76, 175, 80, 0.1)';
        const postWidth = ((maxMonth - recoveryEnd) / maxMonth) * chartWidth;
        ctx.fillRect(padding + (recoveryEnd / maxMonth) * chartWidth, padding, postWidth, chartHeight);
    }

    drawLegend(ctx, colors, canvasWidth, canvasHeight) {
        const legendLabels = {
            'panic-sell': 'Vender en Pánico',
            'hold': 'Mantener',
            'buy-dip': 'Comprar en Caída',
            'dca-through': 'DCA Continuo'
        };
        
        let y = 50;
        Object.entries(colors).forEach(([strategy, color]) => {
            ctx.fillStyle = color;
            ctx.fillRect(canvasWidth - 200, y, 15, 15);
            
            ctx.fillStyle = '#333';
            ctx.font = '12px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(legendLabels[strategy], canvasWidth - 180, y + 12);
            
            y += 25;
        });
    }

    updateOutcomes(results) {
        const container = document.getElementById('outcomes-grid');
        
        const strategyLabels = {
            'panic-sell': 'Vender en Pánico',
            'hold': 'Mantener Posiciones',
            'buy-dip': 'Comprar en la Caída',
            'dca-through': 'DCA Continuo'
        };
        
        const strategyIcons = {
            'panic-sell': 'fas fa-exclamation-triangle',
            'hold': 'fas fa-hand-paper',
            'buy-dip': 'fas fa-shopping-cart',
            'dca-through': 'fas fa-calendar-check'
        };
        
        // Ordenar por valor final
        const sortedResults = Object.entries(results).sort((a, b) => b[1].finalValue - a[1].finalValue);
        
        container.innerHTML = sortedResults.map(([strategy, result], index) => {
            const returnPercent = ((result.finalValue - this.portfolioValue) / this.portfolioValue) * 100;
            const rankClass = index === 0 ? 'best' : index === sortedResults.length - 1 ? 'worst' : 'middle';
            
            return `
                <div class="outcome-card ${rankClass}" data-strategy="${strategy}">
                    <div class="outcome-header">
                        <i class="${strategyIcons[strategy]}"></i>
                        <h5>${strategyLabels[strategy]}</h5>
                        ${index === 0 ? '<span class="winner-badge">🏆</span>' : ''}
                    </div>
                    
                    <div class="outcome-metrics">
                        <div class="metric">
                            <span class="metric-label">Valor Final:</span>
                            <span class="metric-value">${this.formatCurrency(result.finalValue)}</span>
                        </div>
                        
                        <div class="metric">
                            <span class="metric-label">Rendimiento:</span>
                            <span class="metric-value ${returnPercent >= 0 ? 'positive' : 'negative'}">
                                ${returnPercent.toFixed(1)}%
                            </span>
                        </div>
                        
                        <div class="metric">
                            <span class="metric-label">Máxima Caída:</span>
                            <span class="metric-value negative">${result.maxDrawdown.toFixed(1)}%</span>
                        </div>
                        
                        ${result.recoveryMonth ? `
                            <div class="metric">
                                <span class="metric-label">Recuperación:</span>
                                <span class="metric-value">${result.recoveryMonth} meses</span>
                            </div>
                        ` : `
                            <div class="metric">
                                <span class="metric-label">Recuperación:</span>
                                <span class="metric-value negative">No se recuperó</span>
                            </div>
                        `}
                    </div>
                </div>
            `;
        }).join('');
    }

    highlightStrategy(strategy) {
        // Resaltar la estrategia seleccionada en el gráfico y resultados
        document.querySelectorAll('.outcome-card').forEach(card => {
            card.classList.remove('highlighted');
        });
        
        document.querySelector(`[data-strategy="${strategy}"]`)?.classList.add('highlighted');
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }
}

// Simulación de Riesgo vs Rendimiento
class RiskReturnSimulation {
    render(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = `
            <div class="simulation-container risk-return">
                <div class="simulation-header">
                    <h3><i class="fas fa-balance-scale"></i> Explorador de Riesgo vs Rendimiento</h3>
                    <p>Visualiza la relación entre riesgo y rendimiento de diferentes activos.</p>
                </div>

                <div class="risk-return-chart">
                    <canvas id="risk-return-scatter" width="600" height="400"></canvas>
                </div>

                <div class="asset-selector">
                    <h4>Selecciona activos para comparar:</h4>
                    <div class="asset-checkboxes">
                        <label><input type="checkbox" value="cash" checked> Efectivo</label>
                        <label><input type="checkbox" value="bonds" checked> Bonos</label>
                        <label><input type="checkbox" value="stocks" checked> Acciones</label>
                        <label><input type="checkbox" value="reits" checked> REITs</label>
                        <label><input type="checkbox" value="commodities"> Commodities</label>
                        <label><input type="checkbox" value="crypto"> Criptomonedas</label>
                    </div>
                </div>
            </div>
        `;

        this.renderRiskReturnChart();
    }

    renderRiskReturnChart() {
        // Implementación del gráfico de dispersión riesgo-rendimiento
        const canvas = document.getElementById('risk-return-scatter');
        const ctx = canvas.getContext('2d');
        
        const assets = [
            { name: 'Efectivo', return: 1, risk: 0, color: '#9E9E9E' },
            { name: 'Bonos', return: 4, risk: 5, color: '#2196F3' },
            { name: 'Acciones', return: 10, risk: 15, color: '#4CAF50' },
            { name: 'REITs', return: 8, risk: 18, color: '#FF9800' },
            { name: 'Commodities', return: 6, risk: 20, color: '#795548' },
            { name: 'Crypto', return: 15, risk: 50, color: '#9C27B0' }
        ];
        
        // Limpiar y dibujar
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dibujar ejes y puntos
        assets.forEach(asset => {
            const x = 50 + (asset.risk / 60) * (canvas.width - 100);
            const y = canvas.height - 50 - (asset.return / 20) * (canvas.height - 100);
            
            ctx.fillStyle = asset.color;
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, 2 * Math.PI);
            ctx.fill();
            
            ctx.fillStyle = '#333';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(asset.name, x, y - 15);
        });
    }
}

// Inicializar sistema de simulaciones
const investmentSimulations = new InvestmentSimulations();

// Exportar para uso global
window.investmentSimulations = investmentSimulations;

