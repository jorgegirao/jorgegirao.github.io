// Interactive exercises system
class ExerciseManager {
    constructor() {
        this.exercises = this.initializeExercises();
        this.currentExercise = null;
        this.userAnswers = {};
        this.score = 0;
    }

    initializeExercises() {
        return {
            // Module 1 Exercises
            module1_exercise1: {
                id: 'module1_exercise1',
                title: 'Conceptos Básicos de Inversión',
                type: 'multiple_choice',
                questions: [
                    {
                        id: 1,
                        question: '¿Cuál es la principal diferencia entre ahorrar e invertir?',
                        options: [
                            'No hay diferencia, son lo mismo',
                            'Ahorrar es guardar dinero, invertir es buscar que crezca',
                            'Ahorrar es más riesgoso que invertir',
                            'Invertir es solo para personas ricas'
                        ],
                        correct: 1,
                        explanation: 'Ahorrar es guardar dinero de forma segura, mientras que invertir busca hacer crecer ese dinero asumiendo cierto riesgo.'
                    },
                    {
                        id: 2,
                        question: '¿Qué es el interés compuesto?',
                        options: [
                            'Interés que se paga solo una vez',
                            'Interés que se calcula sobre el capital inicial más los intereses acumulados',
                            'Un tipo de préstamo bancario',
                            'Una forma de ahorrar dinero'
                        ],
                        correct: 1,
                        explanation: 'El interés compuesto es el interés calculado sobre el capital inicial más todos los intereses acumulados de períodos anteriores.'
                    }
                ]
            },

            module1_evaluation: {
                id: 'module1_evaluation',
                title: 'Evaluación Módulo 1: Introducción a las Inversiones',
                type: 'evaluation',
                passingScore: 70,
                questions: [
                    {
                        id: 1,
                        question: '¿Cuál de estos factores NO afecta el riesgo de una inversión?',
                        options: [
                            'La volatilidad del mercado',
                            'El color del logo de la empresa',
                            'La situación económica del país',
                            'La diversificación de la cartera'
                        ],
                        correct: 1,
                        explanation: 'El color del logo no tiene ningún impacto en el riesgo financiero de una inversión.'
                    },
                    {
                        id: 2,
                        question: '¿Qué significa "perfil de riesgo conservador"?',
                        options: [
                            'Buscar las inversiones más arriesgadas',
                            'Preferir inversiones seguras con menor rentabilidad',
                            'No invertir nunca',
                            'Invertir solo en acciones'
                        ],
                        correct: 1,
                        explanation: 'Un perfil conservador prefiere la seguridad del capital sobre altos rendimientos, aceptando menor rentabilidad.'
                    },
                    {
                        id: 3,
                        question: '¿Por qué es importante empezar a invertir temprano?',
                        options: [
                            'Porque las inversiones son más baratas',
                            'Para aprovechar el poder del interés compuesto',
                            'Porque es obligatorio por ley',
                            'Para impresionar a los amigos'
                        ],
                        correct: 1,
                        explanation: 'Empezar temprano permite que el interés compuesto trabaje durante más tiempo, multiplicando los resultados.'
                    }
                ]
            },

            // Module 2 Exercises
            module2_exercise1: {
                id: 'module2_exercise1',
                title: 'Identificar Actores del Mercado',
                type: 'drag_drop',
                instructions: 'Arrastra cada actor a su función correspondiente',
                items: [
                    { id: 'fed', text: 'Reserva Federal (Fed)', category: 'central_bank' },
                    { id: 'broker', text: 'Casa de Bolsa', category: 'intermediary' },
                    { id: 'sec', text: 'SEC', category: 'regulator' },
                    { id: 'hedge_fund', text: 'Hedge Fund', category: 'investor' }
                ],
                categories: [
                    { id: 'central_bank', label: 'Banco Central', description: 'Controla la política monetaria' },
                    { id: 'intermediary', label: 'Intermediario', description: 'Facilita las transacciones' },
                    { id: 'regulator', label: 'Regulador', description: 'Supervisa el mercado' },
                    { id: 'investor', label: 'Inversor Institucional', description: 'Invierte grandes capitales' }
                ]
            },

            // Module 3 Exercises
            module3_exercise1: {
                id: 'module3_exercise1',
                title: 'Tipos de Instrumentos Financieros',
                type: 'flip_cards',
                cards: [
                    {
                        id: 1,
                        front: 'Acciones (Stocks)',
                        back: 'Representan propiedad parcial de una empresa. El valor fluctúa según el desempeño de la compañía.'
                    },
                    {
                        id: 2,
                        front: 'Bonos (Bonds)',
                        back: 'Instrumentos de deuda que pagan intereses periódicos. Más seguros que las acciones pero con menor rentabilidad potencial.'
                    },
                    {
                        id: 3,
                        front: 'ETF',
                        back: 'Fondo cotizado que replica un índice. Combina diversificación con facilidad de negociación.'
                    },
                    {
                        id: 4,
                        front: 'Commodities',
                        back: 'Materias primas como oro, petróleo o trigo. Sirven como cobertura contra la inflación.'
                    }
                ]
            },

            // Module 4 Simulation
            module4_simulation: {
                id: 'module4_simulation',
                title: 'Simulador de Portfolio',
                type: 'portfolio_simulation',
                budget: 100000,
                assets: [
                    { id: 'stocks', name: 'Acciones', risk: 'Alto', return: '8-12%', minInvestment: 1000 },
                    { id: 'bonds', name: 'Bonos', risk: 'Bajo', return: '3-5%', minInvestment: 500 },
                    { id: 'etfs', name: 'ETFs', risk: 'Medio', return: '5-8%', minInvestment: 100 },
                    { id: 'commodities', name: 'Commodities', risk: 'Alto', return: '6-15%', minInvestment: 1000 },
                    { id: 'cash', name: 'Efectivo', risk: 'Nulo', return: '1-2%', minInvestment: 1 }
                ]
            }
        };
    }

    loadExercise(exerciseId, container) {
        const exercise = this.exercises[exerciseId];
        if (!exercise) {
            console.error(`Exercise ${exerciseId} not found`);
            return;
        }

        this.currentExercise = exercise;
        this.userAnswers = {};
        this.score = 0;

        const exerciseContainer = container || document.getElementById('sectionContent');
        if (!exerciseContainer) return;

        switch (exercise.type) {
            case 'multiple_choice':
                this.renderMultipleChoice(exercise, exerciseContainer);
                break;
            case 'evaluation':
                this.renderEvaluation(exercise, exerciseContainer);
                break;
            case 'drag_drop':
                this.renderDragDrop(exercise, exerciseContainer);
                break;
            case 'flip_cards':
                this.renderFlipCards(exercise, exerciseContainer);
                break;
            case 'portfolio_simulation':
                this.renderPortfolioSimulation(exercise, exerciseContainer);
                break;
            default:
                exerciseContainer.innerHTML = '<p>Tipo de ejercicio no reconocido.</p>';
        }
    }

    renderMultipleChoice(exercise, container) {
        const html = `
            <div class="exercise-container">
                <div class="exercise-header">
                    <h3><i class="fas fa-gamepad"></i> ${exercise.title}</h3>
                    <div class="exercise-progress">
                        <span id="questionCounter">Pregunta 1 de ${exercise.questions.length}</span>
                    </div>
                </div>
                
                <div class="question-container" id="questionContainer">
                    ${this.renderQuestion(exercise.questions[0], 0)}
                </div>
                
                <div class="exercise-controls">
                    <button id="prevQuestion" class="btn-secondary" disabled>
                        <i class="fas fa-chevron-left"></i> Anterior
                    </button>
                    <button id="nextQuestion" class="btn-primary">
                        Siguiente <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        `;

        container.innerHTML = html;
        this.setupMultipleChoiceEvents(exercise);
    }

    renderQuestion(question, index) {
        return `
            <div class="question" data-question="${index}">
                <h4>Pregunta ${index + 1}</h4>
                <p class="question-text">${question.question}</p>
                <div class="options">
                    ${question.options.map((option, optionIndex) => `
                        <label class="option">
                            <input type="radio" name="question_${question.id}" value="${optionIndex}">
                            <span class="option-text">${option}</span>
                            <span class="option-indicator"></span>
                        </label>
                    `).join('')}
                </div>
                <div class="question-feedback" id="feedback_${question.id}" style="display: none;">
                    <div class="feedback-content">
                        <p class="explanation">${question.explanation}</p>
                    </div>
                </div>
            </div>
        `;
    }

    setupMultipleChoiceEvents(exercise) {
        let currentQuestionIndex = 0;
        
        const prevBtn = document.getElementById('prevQuestion');
        const nextBtn = document.getElementById('nextQuestion');
        const questionContainer = document.getElementById('questionContainer');
        const questionCounter = document.getElementById('questionCounter');

        const updateQuestion = () => {
            const question = exercise.questions[currentQuestionIndex];
            questionContainer.innerHTML = this.renderQuestion(question, currentQuestionIndex);
            questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${exercise.questions.length}`;
            
            prevBtn.disabled = currentQuestionIndex === 0;
            nextBtn.textContent = currentQuestionIndex === exercise.questions.length - 1 ? 'Finalizar' : 'Siguiente';
            nextBtn.innerHTML = currentQuestionIndex === exercise.questions.length - 1 ? 
                'Finalizar <i class="fas fa-check"></i>' : 
                'Siguiente <i class="fas fa-chevron-right"></i>';

            // Restore previous answer if exists
            const savedAnswer = this.userAnswers[question.id];
            if (savedAnswer !== undefined) {
                const radio = document.querySelector(`input[name="question_${question.id}"][value="${savedAnswer}"]`);
                if (radio) radio.checked = true;
            }

            // Add event listener for answer selection
            const radios = document.querySelectorAll(`input[name="question_${question.id}"]`);
            radios.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    this.userAnswers[question.id] = parseInt(e.target.value);
                });
            });
        };

        prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                updateQuestion();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentQuestionIndex < exercise.questions.length - 1) {
                currentQuestionIndex++;
                updateQuestion();
            } else {
                this.finishExercise(exercise);
            }
        });

        updateQuestion();
    }

    renderDragDrop(exercise, container) {
        const html = `
            <div class="exercise-container">
                <div class="exercise-header">
                    <h3><i class="fas fa-hand-rock"></i> ${exercise.title}</h3>
                    <p class="instructions">${exercise.instructions}</p>
                </div>
                
                <div class="drag-drop-area">
                    <div class="items-pool">
                        <h4>Elementos a clasificar:</h4>
                        <div class="draggable-items">
                            ${exercise.items.map(item => `
                                <div class="draggable-item" draggable="true" data-id="${item.id}" data-category="${item.category}">
                                    ${item.text}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="drop-zones">
                        ${exercise.categories.map(category => `
                            <div class="drop-zone" data-category="${category.id}">
                                <h4>${category.label}</h4>
                                <p class="category-description">${category.description}</p>
                                <div class="dropped-items" id="zone_${category.id}"></div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="exercise-controls">
                    <button id="checkAnswers" class="btn-primary">
                        <i class="fas fa-check"></i> Verificar Respuestas
                    </button>
                    <button id="resetExercise" class="btn-secondary">
                        <i class="fas fa-redo"></i> Reiniciar
                    </button>
                </div>
            </div>
        `;

        container.innerHTML = html;
        this.setupDragDropEvents(exercise);
    }

    setupDragDropEvents(exercise) {
        const draggableItems = document.querySelectorAll('.draggable-item');
        const dropZones = document.querySelectorAll('.drop-zone');
        const checkBtn = document.getElementById('checkAnswers');
        const resetBtn = document.getElementById('resetExercise');

        // Drag and drop functionality
        draggableItems.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.dataset.id);
                e.target.classList.add('dragging');
            });

            item.addEventListener('dragend', (e) => {
                e.target.classList.remove('dragging');
            });
        });

        dropZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                zone.classList.add('drag-over');
            });

            zone.addEventListener('dragleave', () => {
                zone.classList.remove('drag-over');
            });

            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                zone.classList.remove('drag-over');
                
                const itemId = e.dataTransfer.getData('text/plain');
                const item = document.querySelector(`[data-id="${itemId}"]`);
                const droppedArea = zone.querySelector('.dropped-items');
                
                if (item && droppedArea) {
                    droppedArea.appendChild(item);
                }
            });
        });

        checkBtn.addEventListener('click', () => this.checkDragDropAnswers(exercise));
        resetBtn.addEventListener('click', () => this.resetDragDrop(exercise));
    }

    checkDragDropAnswers(exercise) {
        let correct = 0;
        const total = exercise.items.length;

        exercise.items.forEach(item => {
            const element = document.querySelector(`[data-id="${item.id}"]`);
            const currentZone = element.closest('.drop-zone');
            
            if (currentZone && currentZone.dataset.category === item.category) {
                element.classList.add('correct');
                correct++;
            } else {
                element.classList.add('incorrect');
            }
        });

        const score = Math.round((correct / total) * 100);
        this.showExerciseResult(score, `${correct} de ${total} respuestas correctas`);
    }

    renderFlipCards(exercise, container) {
        const html = `
            <div class="exercise-container">
                <div class="exercise-header">
                    <h3><i class="fas fa-clone"></i> ${exercise.title}</h3>
                    <p class="instructions">Haz clic en las tarjetas para ver las definiciones</p>
                </div>
                
                <div class="flip-cards-grid">
                    ${exercise.cards.map(card => `
                        <div class="flip-card" data-card="${card.id}">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <h4>${card.front}</h4>
                                    <i class="fas fa-mouse-pointer"></i>
                                </div>
                                <div class="flip-card-back">
                                    <p>${card.back}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="exercise-controls">
                    <button id="flipAll" class="btn-secondary">
                        <i class="fas fa-sync-alt"></i> Voltear Todas
                    </button>
                    <button id="completeCards" class="btn-primary">
                        <i class="fas fa-check"></i> Completar Ejercicio
                    </button>
                </div>
            </div>
        `;

        container.innerHTML = html;
        this.setupFlipCardsEvents();
    }

    setupFlipCardsEvents() {
        const flipCards = document.querySelectorAll('.flip-card');
        const flipAllBtn = document.getElementById('flipAll');
        const completeBtn = document.getElementById('completeCards');

        flipCards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        });

        flipAllBtn.addEventListener('click', () => {
            flipCards.forEach(card => {
                card.classList.toggle('flipped');
            });
        });

        completeBtn.addEventListener('click', () => {
            this.showExerciseResult(100, 'Ejercicio de tarjetas completado');
        });
    }

    renderPortfolioSimulation(exercise, container) {
        const html = `
            <div class="exercise-container">
                <div class="exercise-header">
                    <h3><i class="fas fa-chart-pie"></i> ${exercise.title}</h3>
                    <div class="budget-info">
                        <span>Presupuesto: $<span id="remainingBudget">${exercise.budget.toLocaleString()}</span></span>
                    </div>
                </div>
                
                <div class="portfolio-simulation">
                    <div class="assets-panel">
                        <h4>Activos Disponibles</h4>
                        <div class="assets-list">
                            ${exercise.assets.map(asset => `
                                <div class="asset-card" data-asset="${asset.id}">
                                    <h5>${asset.name}</h5>
                                    <div class="asset-info">
                                        <span class="risk risk-${asset.risk.toLowerCase()}">Riesgo: ${asset.risk}</span>
                                        <span class="return">Retorno: ${asset.return}</span>
                                        <span class="min-investment">Mín: $${asset.minInvestment.toLocaleString()}</span>
                                    </div>
                                    <div class="investment-controls">
                                        <input type="number" class="investment-amount" placeholder="Cantidad" min="${asset.minInvestment}" step="${asset.minInvestment}">
                                        <button class="btn-primary add-to-portfolio">Agregar</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="portfolio-panel">
                        <h4>Tu Portfolio</h4>
                        <div class="portfolio-summary" id="portfolioSummary">
                            <p>Agrega activos para comenzar a construir tu portfolio</p>
                        </div>
                        <div class="portfolio-chart" id="portfolioChart">
                            <!-- Chart will be rendered here -->
                        </div>
                    </div>
                </div>
                
                <div class="exercise-controls">
                    <button id="analyzePortfolio" class="btn-primary">
                        <i class="fas fa-analytics"></i> Analizar Portfolio
                    </button>
                    <button id="resetPortfolio" class="btn-secondary">
                        <i class="fas fa-trash"></i> Limpiar Portfolio
                    </button>
                </div>
            </div>
        `;

        container.innerHTML = html;
        this.setupPortfolioSimulation(exercise);
    }

    setupPortfolioSimulation(exercise) {
        let portfolio = {};
        let remainingBudget = exercise.budget;

        const updateBudget = () => {
            document.getElementById('remainingBudget').textContent = remainingBudget.toLocaleString();
        };

        const updatePortfolioSummary = () => {
            const summaryContainer = document.getElementById('portfolioSummary');
            
            if (Object.keys(portfolio).length === 0) {
                summaryContainer.innerHTML = '<p>Agrega activos para comenzar a construir tu portfolio</p>';
                return;
            }

            const totalInvested = Object.values(portfolio).reduce((sum, amount) => sum + amount, 0);
            const summaryHTML = `
                <div class="portfolio-stats">
                    <div class="stat">
                        <span class="label">Total Invertido:</span>
                        <span class="value">$${totalInvested.toLocaleString()}</span>
                    </div>
                    <div class="stat">
                        <span class="label">Efectivo Restante:</span>
                        <span class="value">$${remainingBudget.toLocaleString()}</span>
                    </div>
                </div>
                <div class="portfolio-breakdown">
                    ${Object.entries(portfolio).map(([assetId, amount]) => {
                        const asset = exercise.assets.find(a => a.id === assetId);
                        const percentage = ((amount / totalInvested) * 100).toFixed(1);
                        return `
                            <div class="portfolio-item">
                                <span>${asset.name}: $${amount.toLocaleString()} (${percentage}%)</span>
                                <button class="remove-asset" data-asset="${assetId}">×</button>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
            
            summaryContainer.innerHTML = summaryHTML;

            // Add remove functionality
            document.querySelectorAll('.remove-asset').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const assetId = e.target.dataset.asset;
                    remainingBudget += portfolio[assetId];
                    delete portfolio[assetId];
                    updateBudget();
                    updatePortfolioSummary();
                });
            });
        };

        // Add to portfolio functionality
        document.querySelectorAll('.add-to-portfolio').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const assetCard = e.target.closest('.asset-card');
                const assetId = assetCard.dataset.asset;
                const amountInput = assetCard.querySelector('.investment-amount');
                const amount = parseInt(amountInput.value);
                
                const asset = exercise.assets.find(a => a.id === assetId);
                
                if (!amount || amount < asset.minInvestment) {
                    alert(`La inversión mínima para ${asset.name} es $${asset.minInvestment.toLocaleString()}`);
                    return;
                }
                
                if (amount > remainingBudget) {
                    alert('No tienes suficiente presupuesto disponible');
                    return;
                }
                
                portfolio[assetId] = (portfolio[assetId] || 0) + amount;
                remainingBudget -= amount;
                amountInput.value = '';
                
                updateBudget();
                updatePortfolioSummary();
            });
        });

        // Analyze portfolio
        document.getElementById('analyzePortfolio').addEventListener('click', () => {
            if (Object.keys(portfolio).length === 0) {
                alert('Agrega al menos un activo a tu portfolio para analizarlo');
                return;
            }
            
            this.analyzePortfolio(portfolio, exercise);
        });

        // Reset portfolio
        document.getElementById('resetPortfolio').addEventListener('click', () => {
            portfolio = {};
            remainingBudget = exercise.budget;
            updateBudget();
            updatePortfolioSummary();
        });
    }

    analyzePortfolio(portfolio, exercise) {
        const totalInvested = Object.values(portfolio).reduce((sum, amount) => sum + amount, 0);
        let riskScore = 0;
        let expectedReturn = 0;
        
        Object.entries(portfolio).forEach(([assetId, amount]) => {
            const asset = exercise.assets.find(a => a.id === assetId);
            const weight = amount / totalInvested;
            
            // Simple risk scoring
            const riskScores = { 'Nulo': 0, 'Bajo': 1, 'Medio': 2, 'Alto': 3 };
            riskScore += riskScores[asset.risk] * weight;
            
            // Expected return (using middle of range)
            const returnRange = asset.return.match(/(\d+)-(\d+)%/);
            if (returnRange) {
                const avgReturn = (parseInt(returnRange[1]) + parseInt(returnRange[2])) / 2;
                expectedReturn += avgReturn * weight;
            }
        });

        const riskLevel = riskScore <= 0.5 ? 'Muy Bajo' : 
                         riskScore <= 1.5 ? 'Bajo' : 
                         riskScore <= 2.5 ? 'Medio' : 'Alto';

        const analysis = `
            <div class="portfolio-analysis">
                <h4>Análisis de tu Portfolio</h4>
                <div class="analysis-results">
                    <div class="metric">
                        <span class="label">Nivel de Riesgo:</span>
                        <span class="value risk-${riskLevel.toLowerCase().replace(' ', '-')}">${riskLevel}</span>
                    </div>
                    <div class="metric">
                        <span class="label">Retorno Esperado:</span>
                        <span class="value">${expectedReturn.toFixed(1)}% anual</span>
                    </div>
                    <div class="metric">
                        <span class="label">Diversificación:</span>
                        <span class="value">${Object.keys(portfolio).length} activos</span>
                    </div>
                </div>
                <div class="recommendations">
                    <h5>Recomendaciones:</h5>
                    <ul>
                        ${this.getPortfolioRecommendations(portfolio, exercise, riskScore)}
                    </ul>
                </div>
            </div>
        `;

        const analysisModal = document.createElement('div');
        analysisModal.className = 'modal active';
        analysisModal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Análisis de Portfolio</h3>
                    <button class="modal-close">×</button>
                </div>
                <div class="modal-body">
                    ${analysis}
                    <button class="btn-primary" onclick="this.closest('.modal').remove()">
                        Entendido
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(analysisModal);

        analysisModal.querySelector('.modal-close').addEventListener('click', () => {
            analysisModal.remove();
        });
    }

    getPortfolioRecommendations(portfolio, exercise, riskScore) {
        const recommendations = [];
        const assetCount = Object.keys(portfolio).length;
        
        if (assetCount < 3) {
            recommendations.push('Considera diversificar más tu portfolio agregando diferentes tipos de activos');
        }
        
        if (riskScore > 2.5) {
            recommendations.push('Tu portfolio tiene un riesgo alto. Considera agregar bonos o efectivo para balancearlo');
        }
        
        if (riskScore < 1) {
            recommendations.push('Tu portfolio es muy conservador. Podrías considerar agregar algunos activos con mayor potencial de crecimiento');
        }
        
        if (!portfolio.bonds && !portfolio.cash) {
            recommendations.push('Considera agregar bonos o mantener algo de efectivo para estabilidad');
        }
        
        if (recommendations.length === 0) {
            recommendations.push('¡Buen trabajo! Tu portfolio muestra un balance adecuado entre riesgo y diversificación');
        }
        
        return recommendations.map(rec => `<li>${rec}</li>`).join('');
    }

    finishExercise(exercise) {
        let correct = 0;
        const total = exercise.questions.length;

        exercise.questions.forEach(question => {
            const userAnswer = this.userAnswers[question.id];
            if (userAnswer === question.correct) {
                correct++;
            }
        });

        const score = Math.round((correct / total) * 100);
        this.score = score;

        if (exercise.type === 'evaluation') {
            const passed = score >= exercise.passingScore;
            this.showEvaluationResult(score, correct, total, passed, exercise.passingScore);
        } else {
            this.showExerciseResult(score, `${correct} de ${total} respuestas correctas`);
        }
    }

    showExerciseResult(score, message) {
        const resultHTML = `
            <div class="exercise-result">
                <div class="result-icon">
                    <i class="fas fa-${score >= 70 ? 'check-circle' : 'times-circle'}"></i>
                </div>
                <h3>${score >= 70 ? '¡Bien hecho!' : 'Sigue practicando'}</h3>
                <div class="score">
                    <span class="score-number">${score}%</span>
                </div>
                <p>${message}</p>
                <button class="btn-primary" onclick="moduleManager.completeSection()">
                    Continuar
                </button>
            </div>
        `;

        const container = document.getElementById('sectionContent');
        if (container) {
            container.innerHTML = resultHTML;
        }
    }

    showEvaluationResult(score, correct, total, passed, passingScore) {
        const resultHTML = `
            <div class="evaluation-result">
                <div class="result-header">
                    <div class="result-icon ${passed ? 'passed' : 'failed'}">
                        <i class="fas fa-${passed ? 'trophy' : 'redo'}"></i>
                    </div>
                    <h3>${passed ? '¡Evaluación Aprobada!' : 'Evaluación No Aprobada'}</h3>
                </div>
                
                <div class="result-details">
                    <div class="score-display">
                        <span class="score-number">${score}%</span>
                        <span class="score-label">Puntuación Final</span>
                    </div>
                    
                    <div class="result-stats">
                        <div class="stat">
                            <span class="label">Respuestas Correctas:</span>
                            <span class="value">${correct} de ${total}</span>
                        </div>
                        <div class="stat">
                            <span class="label">Puntuación Mínima:</span>
                            <span class="value">${passingScore}%</span>
                        </div>
                    </div>
                </div>
                
                <div class="result-actions">
                    ${passed ? `
                        <button class="btn-primary" onclick="moduleManager.completeModule()">
                            <i class="fas fa-arrow-right"></i>
                            Continuar al Siguiente Módulo
                        </button>
                    ` : `
                        <button class="btn-secondary" onclick="location.reload()">
                            <i class="fas fa-redo"></i>
                            Repetir Evaluación
                        </button>
                        <button class="btn-primary" onclick="moduleManager.showCourseNav()">
                            <i class="fas fa-book"></i>
                            Repasar Contenido
                        </button>
                    `}
                </div>
            </div>
        `;

        const container = document.getElementById('sectionContent');
        if (container) {
            container.innerHTML = resultHTML;
        }

        // Save result if passed
        if (passed && window.course) {
            window.course.completeModule(this.currentExercise.moduleId || 1, score);
        }
    }
}

// Add exercise-specific styles
const exerciseStyles = `
.exercise-container {
    max-width: 800px;
    margin: 0 auto;
}

.exercise-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--border-light);
}

.exercise-header h3 {
    font-size: 1.5rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.instructions {
    color: var(--text-secondary);
    font-size: 1rem;
}

.exercise-progress {
    margin-top: 1rem;
}

.question-container {
    margin-bottom: 2rem;
}

.question {
    background: var(--bg-secondary);
    padding: 2rem;
    border-radius: 1rem;
    border-left: 4px solid var(--primary-color);
}

.question h4 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.125rem;
}

.question-text {
    font-size: 1.125rem;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.options {
    display: grid;
    gap: 0.75rem;
}

.option {
    display: flex;
    align-items: center;
    padding: 1rem;
    background: var(--bg-primary);
    border: 2px solid var(--border-light);
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    position: relative;
}

.option:hover {
    border-color: var(--primary-light);
    transform: translateX(4px);
}

.option input[type="radio"] {
    display: none;
}

.option input[type="radio"]:checked + .option-text {
    color: var(--primary-color);
    font-weight: 600;
}

.option input[type="radio"]:checked ~ .option-indicator {
    background: var(--primary-color);
    border-color: var(--primary-color);
}

.option input[type="radio"]:checked ~ .option-indicator::after {
    opacity: 1;
}

.option-text {
    flex: 1;
    margin-left: 0.75rem;
}

.option-indicator {
    width: 20px;
    height: 20px;
    border: 2px solid var(--border-color);
    border-radius: 50%;
    position: relative;
    transition: all 0.2s ease-in-out;
}

.option-indicator::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
}

.exercise-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
}

/* Drag and Drop Styles */
.drag-drop-area {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    margin-bottom: 2rem;
}

.items-pool {
    background: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 1rem;
}

.draggable-items {
    display: grid;
    gap: 0.75rem;
    margin-top: 1rem;
}

.draggable-item {
    padding: 0.75rem;
    background: var(--bg-primary);
    border: 2px solid var(--border-light);
    border-radius: 0.5rem;
    cursor: grab;
    transition: all 0.2s ease-in-out;
    text-align: center;
    font-weight: 500;
}

.draggable-item:hover {
    border-color: var(--primary-light);
    transform: scale(1.02);
}

.draggable-item.dragging {
    opacity: 0.5;
    cursor: grabbing;
}

.draggable-item.correct {
    border-color: var(--success-color);
    background: #f0fdf4;
    color: var(--success-color);
}

.draggable-item.incorrect {
    border-color: var(--error-color);
    background: #fef2f2;
    color: var(--error-color);
}

.drop-zones {
    display: grid;
    gap: 1rem;
}

.drop-zone {
    background: var(--bg-primary);
    border: 2px dashed var(--border-color);
    border-radius: 1rem;
    padding: 1.5rem;
    min-height: 120px;
    transition: all 0.2s ease-in-out;
}

.drop-zone.drag-over {
    border-color: var(--primary-color);
    background: var(--bg-secondary);
}

.drop-zone h4 {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.category-description {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin-bottom: 1rem;
}

.dropped-items {
    display: grid;
    gap: 0.5rem;
}

/* Flip Cards Styles */
.flip-cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.flip-card {
    background: transparent;
    width: 100%;
    height: 200px;
    perspective: 1000px;
    cursor: pointer;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    box-shadow: var(--shadow-md);
}

.flip-card-front {
    background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
    color: white;
}

.flip-card-back {
    background: var(--bg-primary);
    color: var(--text-primary);
    border: 2px solid var(--border-light);
    transform: rotateY(180deg);
}

.flip-card-front h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.flip-card-front i {
    font-size: 1.5rem;
    opacity: 0.7;
}

.flip-card-back p {
    line-height: 1.6;
    font-size: 0.95rem;
}

/* Portfolio Simulation Styles */
.portfolio-simulation {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
}

.assets-panel, .portfolio-panel {
    background: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 1rem;
}

.assets-list {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
}

.asset-card {
    background: var(--bg-primary);
    padding: 1rem;
    border-radius: 0.75rem;
    border: 1px solid var(--border-light);
}

.asset-card h5 {
    color: var(--text-primary);
    margin-bottom: 0.75rem;
}

.asset-info {
    display: grid;
    gap: 0.25rem;
    margin-bottom: 1rem;
    font-size: 0.875rem;
}

.risk {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.75rem;
}

.risk-nulo { background: #f0f9ff; color: #0369a1; }
.risk-bajo { background: #f0fdf4; color: #166534; }
.risk-medio { background: #fef3c7; color: #92400e; }
.risk-alto { background: #fef2f2; color: #dc2626; }

.investment-controls {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.investment-amount {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid var(--border-color);
    border-radius: 0.375rem;
    font-size: 0.875rem;
}

.portfolio-stats {
    display: grid;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    background: var(--bg-primary);
    border-radius: 0.5rem;
}

.portfolio-breakdown {
    display: grid;
    gap: 0.5rem;
}

.portfolio-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background: var(--bg-primary);
    border-radius: 0.375rem;
    font-size: 0.875rem;
}

.remove-asset {
    background: var(--error-color);
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    font-size: 0.875rem;
}

/* Result Styles */
.exercise-result, .evaluation-result {
    text-align: center;
    padding: 2rem;
    background: var(--bg-secondary);
    border-radius: 1rem;
    max-width: 500px;
    margin: 0 auto;
}

.result-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.result-icon.passed {
    color: var(--success-color);
}

.result-icon.failed {
    color: var(--warning-color);
}

.result-icon i.fa-check-circle {
    color: var(--success-color);
}

.result-icon i.fa-times-circle {
    color: var(--error-color);
}

.score-number {
    font-size: 3rem;
    font-weight: 700;
    color: var(--primary-color);
}

.result-details {
    margin: 2rem 0;
}

.score-display {
    margin-bottom: 1.5rem;
}

.score-label {
    display: block;
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin-top: 0.5rem;
}

.result-stats {
    display: grid;
    gap: 0.75rem;
}

.result-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    .drag-drop-area,
    .portfolio-simulation {
        grid-template-columns: 1fr;
    }
    
    .flip-cards-grid {
        grid-template-columns: 1fr;
    }
    
    .exercise-controls {
        flex-direction: column;
        gap: 1rem;
    }
    
    .result-actions {
        flex-direction: column;
    }
}
`;

// Add styles to head
const exerciseStyleSheet = document.createElement('style');
exerciseStyleSheet.textContent = exerciseStyles;
document.head.appendChild(exerciseStyleSheet);

// Initialize exercise manager
let exerciseManager;
document.addEventListener('DOMContentLoaded', () => {
    exerciseManager = new ExerciseManager();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ExerciseManager;
}

