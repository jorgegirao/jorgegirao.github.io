// Examen Final Global del Curso de Inversiones
class FinalExam {
    constructor() {
        this.questions = this.initializeFinalExamQuestions();
        this.currentQuestion = 0;
        this.answers = [];
        this.timeStarted = null;
        this.timeLimit = 90; // 90 minutos
        this.passingScore = 80; // 80% para aprobar
        this.currentTimer = null;
    }

    initializeFinalExamQuestions() {
        return [
            // Pregunta 1: Conceptos básicos integrados
            {
                id: 1,
                type: 'comprehensive-scenario',
                difficulty: 'medium',
                module: 'integration',
                question: `
                    <div class="scenario-question">
                        <h4>Escenario Integral: Planificación Financiera</h4>
                        <p><strong>Situación:</strong> María, de 28 años, acaba de conseguir su primer trabajo bien remunerado ($60,000 anuales). Tiene $5,000 en ahorros y quiere comenzar a invertir para su retiro y comprar una casa en 5 años.</p>
                        
                        <p><strong>Objetivos:</strong></p>
                        <ul>
                            <li>Retiro cómodo a los 65 años</li>
                            <li>Enganche para casa ($30,000) en 5 años</li>
                            <li>Fondo de emergencia de 6 meses de gastos</li>
                        </ul>
                        
                        <p><strong>Pregunta:</strong> ¿Cuál sería la estrategia más apropiada para María?</p>
                    </div>
                `,
                options: [
                    'Invertir todo en acciones de crecimiento para maximizar rendimientos',
                    'Crear fondo de emergencia primero, luego dividir inversiones entre objetivos de corto y largo plazo',
                    'Comprar solo bonos para garantizar seguridad',
                    'Esperar a tener más dinero antes de comenzar a invertir'
                ],
                correct: 1,
                explanation: `
                    La estrategia correcta es establecer prioridades: 1) Fondo de emergencia (seguridad), 2) Objetivo de corto plazo (casa) en instrumentos conservadores, 3) Retiro en instrumentos de crecimiento. Esta aproximación balancea seguridad y crecimiento según el horizonte temporal de cada objetivo.
                `,
                points: 5
            },

            // Pregunta 2: Análisis de mercados y actores
            {
                id: 2,
                type: 'market-analysis',
                difficulty: 'hard',
                module: 'markets',
                question: `
                    <div class="market-scenario">
                        <h4>Análisis de Mercado</h4>
                        <p><strong>Situación actual:</strong></p>
                        <ul>
                            <li>La Fed acaba de subir tasas de interés 0.75%</li>
                            <li>La inflación está en 8% anual</li>
                            <li>El desempleo está en 3.5%</li>
                            <li>Los bonos a 10 años rinden 4.5%</li>
                            <li>El P/E del S&P 500 está en 22</li>
                        </ul>
                        
                        <p><strong>Pregunta:</strong> ¿Cuál sería el efecto más probable en los próximos 6 meses?</p>
                    </div>
                `,
                options: [
                    'Las acciones subirán porque las tasas altas indican economía fuerte',
                    'Los bonos existentes bajarán de precio y las acciones enfrentarán presión bajista',
                    'No habrá efecto significativo en los mercados',
                    'Las acciones de crecimiento se beneficiarán más que las de valor'
                ],
                correct: 1,
                explanation: `
                    Cuando la Fed sube tasas agresivamente: 1) Los bonos existentes bajan de precio (relación inversa), 2) Las acciones enfrentan presión por mayor costo de capital y competencia de bonos, 3) Las acciones de crecimiento sufren más que las de valor por su sensibilidad a tasas.
                `,
                points: 4
            },

            // Pregunta 3: Instrumentos financieros complejos
            {
                id: 3,
                type: 'instrument-comparison',
                difficulty: 'medium',
                module: 'instruments',
                question: `
                    <div class="instrument-question">
                        <h4>Comparación de Instrumentos</h4>
                        <p>Un inversionista quiere exposición al mercado de acciones estadounidenses con las siguientes opciones:</p>
                        
                        <div class="options-table">
                            <table>
                                <tr>
                                    <th>Opción</th>
                                    <th>Expense Ratio</th>
                                    <th>Mínimo</th>
                                    <th>Liquidez</th>
                                </tr>
                                <tr>
                                    <td>Fondo Mutuo S&P 500</td>
                                    <td>0.75%</td>
                                    <td>$3,000</td>
                                    <td>Diaria</td>
                                </tr>
                                <tr>
                                    <td>ETF S&P 500 (SPY)</td>
                                    <td>0.09%</td>
                                    <td>1 acción (~$400)</td>
                                    <td>Intraday</td>
                                </tr>
                                <tr>
                                    <td>Acciones individuales</td>
                                    <td>0%</td>
                                    <td>1 acción</td>
                                    <td>Intraday</td>
                                </tr>
                            </table>
                        </div>
                        
                        <p><strong>Para un inversionista principiante con $1,000, ¿cuál es la mejor opción?</strong></p>
                    </div>
                `,
                options: [
                    'Fondo mutuo por su gestión profesional',
                    'ETF por su bajo costo, liquidez y diversificación instantánea',
                    'Acciones individuales para evitar comisiones',
                    'Esperar hasta tener $3,000 para el fondo mutuo'
                ],
                correct: 1,
                explanation: `
                    El ETF es la mejor opción: bajo costo (0.09% vs 0.75%), accesible con $400, diversificación instantánea (500 empresas), y liquidez intraday. Las acciones individuales requieren más conocimiento y no ofrecen diversificación con $1,000.
                `,
                points: 3
            },

            // Pregunta 4: Estrategias avanzadas
            {
                id: 4,
                type: 'portfolio-optimization',
                difficulty: 'hard',
                module: 'strategies',
                question: `
                    <div class="portfolio-question">
                        <h4>Optimización de Portafolio</h4>
                        <p><strong>Datos del portafolio actual:</strong></p>
                        <ul>
                            <li>60% Acciones estadounidenses (Rendimiento: 10%, Volatilidad: 15%)</li>
                            <li>40% Bonos (Rendimiento: 4%, Volatilidad: 5%)</li>
                            <li>Correlación entre acciones y bonos: -0.2</li>
                        </ul>
                        
                        <p><strong>Métricas calculadas:</strong></p>
                        <ul>
                            <li>Rendimiento esperado del portafolio: 7.6%</li>
                            <li>Volatilidad del portafolio: 9.2%</li>
                            <li>Ratio Sharpe (asumiendo tasa libre de riesgo 2%): 0.61</li>
                        </ul>
                        
                        <p><strong>¿Qué modificación mejoraría más el ratio Sharpe?</strong></p>
                    </div>
                `,
                options: [
                    'Aumentar acciones a 80% para mayor rendimiento',
                    'Aumentar bonos a 60% para menor volatilidad',
                    'Agregar 10% en REITs (Rendimiento: 8%, Volatilidad: 18%, Correlación con acciones: 0.7)',
                    'Agregar 10% en oro (Rendimiento: 3%, Volatilidad: 18%, Correlación con acciones: -0.1)'
                ],
                correct: 3,
                explanation: `
                    Agregar oro mejoraría el ratio Sharpe porque: 1) Su correlación negativa (-0.1) con acciones reduce la volatilidad del portafolio más de lo que reduce el rendimiento, 2) Actúa como diversificador, 3) Aunque su rendimiento es bajo, el beneficio de diversificación compensa.
                `,
                points: 5
            },

            // Pregunta 5: Historia y lecciones
            {
                id: 5,
                type: 'historical-analysis',
                difficulty: 'medium',
                module: 'history',
                question: `
                    <div class="historical-question">
                        <h4>Lecciones Históricas</h4>
                        <p><strong>Escenario:</strong> Estamos en 2006. Los precios de las casas han subido 40% en 3 años. Los bancos ofrecen hipotecas NINJA (No Income, No Job, No Assets) y todos dicen que "los precios de las casas nunca bajan a nivel nacional".</p>
                        
                        <p><strong>Como inversionista educado en historia financiera, ¿qué harías?</strong></p>
                    </div>
                `,
                options: [
                    'Comprar más propiedades porque "esta vez es diferente"',
                    'Reconocer señales de burbuja y reducir exposición a bienes raíces',
                    'Ignorar las señales porque es imposible predecir el timing',
                    'Invertir más agresivamente en acciones bancarias'
                ],
                correct: 1,
                explanation: `
                    Las señales clásicas de burbuja estaban presentes: precios desconectados de fundamentos, crédito fácil, euforia generalizada, y la frase peligrosa "esta vez es diferente". Un inversionista educado reconocería estos patrones históricos y reduciría riesgo.
                `,
                points: 4
            },

            // Pregunta 6: Cálculo de rendimientos
            {
                id: 6,
                type: 'calculation',
                difficulty: 'medium',
                module: 'math',
                question: `
                    <div class="calculation-question">
                        <h4>Cálculo de Rendimientos</h4>
                        <p><strong>Situación:</strong> Inviertes $10,000 en un ETF. Después de un año:</p>
                        <ul>
                            <li>El ETF subió 15% en precio</li>
                            <li>Recibiste $200 en dividendos</li>
                            <li>Pagaste $25 en comisiones</li>
                        </ul>
                        
                        <p><strong>¿Cuál fue tu rendimiento total neto?</strong></p>
                    </div>
                `,
                answer: 16.75,
                tolerance: 0.25,
                explanation: `
                    Cálculo: 
                    - Ganancia de capital: $10,000 × 15% = $1,500
                    - Dividendos: $200
                    - Comisiones: -$25
                    - Ganancia neta: $1,500 + $200 - $25 = $1,675
                    - Rendimiento: $1,675 ÷ $10,000 = 16.75%
                `,
                points: 3
            },

            // Pregunta 7: Gestión de riesgo
            {
                id: 7,
                type: 'risk-management',
                difficulty: 'hard',
                module: 'risk',
                question: `
                    <div class="risk-question">
                        <h4>Gestión de Riesgo</h4>
                        <p><strong>Tu portafolio de $100,000 tiene las siguientes características:</strong></p>
                        <ul>
                            <li>Beta: 1.2</li>
                            <li>Volatilidad anual: 18%</li>
                            <li>VaR al 95% (1 día): -$2,500</li>
                            <li>Maximum Drawdown histórico: -35%</li>
                        </ul>
                        
                        <p><strong>¿Qué significa el VaR de -$2,500?</strong></p>
                    </div>
                `,
                options: [
                    'Perderás exactamente $2,500 en el 95% de los días',
                    'Hay 5% de probabilidad de perder más de $2,500 en un día',
                    'Tu pérdida promedio diaria será $2,500',
                    'Tu pérdida máxima posible es $2,500'
                ],
                correct: 1,
                explanation: `
                    VaR (Value at Risk) al 95% significa que hay 5% de probabilidad de que las pérdidas excedan el valor especificado en el período dado. En este caso, 5% de probabilidad de perder más de $2,500 en un día.
                `,
                points: 4
            },

            // Pregunta 8: Análisis fundamental
            {
                id: 8,
                type: 'fundamental-analysis',
                difficulty: 'hard',
                module: 'analysis',
                question: `
                    <div class="fundamental-question">
                        <h4>Análisis Fundamental</h4>
                        <p><strong>Empresa ABC:</strong></p>
                        <ul>
                            <li>Precio por acción: $50</li>
                            <li>Ganancias por acción (EPS): $2.50</li>
                            <li>Valor en libros por acción: $20</li>
                            <li>ROE: 12.5%</li>
                            <li>Crecimiento de ganancias (5 años): 8% anual</li>
                            <li>Dividend yield: 3%</li>
                            <li>Deuda/Patrimonio: 0.4</li>
                        </ul>
                        
                        <p><strong>¿Cuál es la evaluación más precisa?</strong></p>
                    </div>
                `,
                options: [
                    'Empresa sobrevalorada con P/E de 20 muy alto',
                    'Empresa razonablemente valorada con fundamentos sólidos',
                    'Empresa infravalorada que debería comprarse inmediatamente',
                    'Empresa riesgosa por su alta deuda'
                ],
                correct: 1,
                explanation: `
                    Análisis: P/E = 20 (razonable para crecimiento 8%), ROE = 12.5% (sólido), P/B = 2.5 (aceptable), Deuda/Patrimonio = 0.4 (conservadora), Dividend yield = 3% (atractivo). Los fundamentos son sólidos y la valuación es razonable.
                `,
                points: 4
            },

            // Pregunta 9: Psicología del inversionista
            {
                id: 9,
                type: 'behavioral-finance',
                difficulty: 'medium',
                module: 'psychology',
                question: `
                    <div class="psychology-question">
                        <h4>Psicología del Inversionista</h4>
                        <p><strong>Escenario:</strong> Compraste acciones de XYZ a $100. Ahora están en $80 (-20%). Las noticias sugieren que podrían caer más, pero también podrían recuperarse. Tienes dos opciones:</p>
                        
                        <div class="options-scenario">
                            <p><strong>Opción A:</strong> Vender ahora y asegurar una pérdida de $20 por acción</p>
                            <p><strong>Opción B:</strong> Mantener y arriesgarte a perder más (o recuperarte)</p>
                        </div>
                        
                        <p><strong>¿Qué sesgo psicológico hace que la mayoría prefiera la Opción B?</strong></p>
                    </div>
                `,
                options: [
                    'Exceso de confianza',
                    'Aversión a la pérdida',
                    'Sesgo de confirmación',
                    'Efecto manada'
                ],
                correct: 1,
                explanation: `
                    Aversión a la pérdida: las personas sienten más dolor por las pérdidas que placer por ganancias equivalentes. Esto lleva a mantener posiciones perdedoras esperando "empatar" y evitar cristalizar la pérdida, incluso cuando lo racional sería vender.
                `,
                points: 3
            },

            // Pregunta 10: Integración global
            {
                id: 10,
                type: 'global-integration',
                difficulty: 'hard',
                module: 'integration',
                question: `
                    <div class="global-question">
                        <h4>Integración Global de Conceptos</h4>
                        <p><strong>Situación compleja:</strong> Eres el CIO de un fondo de pensiones con $1 mil millones. Debes recomendar cambios estratégicos considerando:</p>
                        
                        <ul>
                            <li>Los beneficiarios se retirarán en promedio en 15 años</li>
                            <li>La inflación está subiendo globalmente</li>
                            <li>Las tasas de interés están en mínimos históricos</li>
                            <li>Los mercados desarrollados están caros (P/E altos)</li>
                            <li>Hay incertidumbre geopolítica creciente</li>
                        </ul>
                        
                        <p><strong>¿Cuál sería la asignación estratégica más apropiada?</strong></p>
                    </div>
                `,
                options: [
                    '70% Bonos, 30% Acciones (conservador por la incertidumbre)',
                    '40% Acciones desarrolladas, 20% Emergentes, 20% REITs, 10% Commodities, 10% Bonos indexados a inflación',
                    '90% Acciones para maximizar crecimiento en 15 años',
                    '50% Efectivo hasta que pase la incertidumbre'
                ],
                correct: 1,
                explanation: `
                    La asignación diversificada es óptima porque: 1) 15 años permite riesgo moderado-alto, 2) REITs y commodities protegen contra inflación, 3) Emergentes ofrecen valuaciones atractivas, 4) TIPS protegen contra inflación, 5) Diversificación reduce riesgo geopolítico.
                `,
                points: 6
            },

            // Pregunta 11: Ética y regulación
            {
                id: 11,
                type: 'ethics-regulation',
                difficulty: 'medium',
                module: 'ethics',
                question: `
                    <div class="ethics-question">
                        <h4>Ética y Regulación</h4>
                        <p><strong>Situación:</strong> Trabajas en una firma de inversión y descubres que tu jefe está usando información privilegiada sobre una fusión próxima para beneficio personal.</p>
                        
                        <p><strong>¿Cuál es la acción más apropiada?</strong></p>
                    </div>
                `,
                options: [
                    'Ignorarlo porque no es tu responsabilidad',
                    'Reportarlo a las autoridades regulatorias (SEC)',
                    'Confrontar directamente a tu jefe',
                    'Usar la información tú también para no quedarte atrás'
                ],
                correct: 1,
                explanation: `
                    El insider trading es ilegal y debe reportarse a las autoridades. Como profesional financiero, tienes la obligación ética y legal de reportar violaciones que conozcas. Usar la información sería complicidad en el delito.
                `,
                points: 3
            },

            // Pregunta 12: Tecnología y futuro
            {
                id: 12,
                type: 'technology-future',
                difficulty: 'medium',
                module: 'future',
                question: `
                    <div class="technology-question">
                        <h4>Tecnología y Futuro de las Inversiones</h4>
                        <p><strong>¿Cuál de estas tendencias tecnológicas tendrá el mayor impacto en las inversiones en los próximos 10 años?</strong></p>
                    </div>
                `,
                options: [
                    'Inteligencia Artificial en gestión de portafolios',
                    'Blockchain y tokenización de activos',
                    'Computación cuántica en análisis de riesgo',
                    'Todas las anteriores tendrán impacto significativo'
                ],
                correct: 3,
                explanation: `
                    Todas las tecnologías mencionadas están transformando las finanzas: AI mejora análisis y gestión, blockchain permite nuevos activos y transparencia, computación cuántica revolucionará modelado de riesgo. El impacto será integral, no aislado.
                `,
                points: 3
            }
        ];
    }

    startExam() {
        this.currentQuestion = 0;
        this.answers = [];
        this.timeStarted = new Date();
        
        this.renderExamInterface();
        this.startTimer();
    }

    renderExamInterface() {
        const container = document.getElementById('final-exam-container');
        if (!container) return;

        container.innerHTML = `
            <div class="final-exam">
                <div class="exam-header">
                    <div class="exam-title">
                        <h2><i class="fas fa-graduation-cap"></i> Examen Final: Curso de Inversiones Financieras</h2>
                        <p>Evaluación integral de todos los módulos del curso</p>
                    </div>
                    
                    <div class="exam-progress">
                        <div class="progress-info">
                            <span class="question-counter">${this.currentQuestion + 1} de ${this.questions.length}</span>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${(this.currentQuestion / this.questions.length) * 100}%"></div>
                            </div>
                        </div>
                        
                        <div class="exam-timer" id="exam-timer">
                            <i class="fas fa-clock"></i>
                            <span id="timer-display">90:00</span>
                        </div>
                    </div>
                </div>

                <div class="exam-content">
                    ${this.renderQuestion(this.questions[this.currentQuestion])}
                </div>

                <div class="exam-navigation">
                    <button id="prev-question" class="nav-btn" ${this.currentQuestion === 0 ? 'disabled' : ''}>
                        <i class="fas fa-arrow-left"></i> Anterior
                    </button>
                    
                    <div class="question-map">
                        ${this.renderQuestionMap()}
                    </div>
                    
                    <button id="next-question" class="nav-btn primary">
                        ${this.currentQuestion === this.questions.length - 1 ? 
                            '<i class="fas fa-check"></i> Finalizar Examen' : 
                            'Siguiente <i class="fas fa-arrow-right"></i>'}
                    </button>
                </div>

                <div class="exam-info">
                    <div class="info-cards">
                        <div class="info-card">
                            <i class="fas fa-target"></i>
                            <span>Puntuación mínima: ${this.passingScore}%</span>
                        </div>
                        <div class="info-card">
                            <i class="fas fa-clock"></i>
                            <span>Tiempo límite: ${this.timeLimit} minutos</span>
                        </div>
                        <div class="info-card">
                            <i class="fas fa-question-circle"></i>
                            <span>Total preguntas: ${this.questions.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.attachExamEventListeners();
    }

    renderQuestion(question) {
        const difficultyColors = {
            'easy': '#4CAF50',
            'medium': '#FF9800',
            'hard': '#F44336'
        };

        return `
            <div class="question-container final-exam-question">
                <div class="question-header">
                    <div class="question-meta">
                        <span class="question-number">Pregunta ${question.id}</span>
                        <span class="difficulty-badge" style="background-color: ${difficultyColors[question.difficulty]}">
                            ${question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                        </span>
                        <span class="points-badge">${question.points} puntos</span>
                    </div>
                </div>

                <div class="question-content">
                    ${question.question}
                </div>

                <div class="question-answer">
                    ${this.renderAnswerOptions(question)}
                </div>

                <div class="question-footer">
                    <div class="question-tips">
                        <i class="fas fa-lightbulb"></i>
                        <span>Tip: Lee cuidadosamente toda la información antes de responder</span>
                    </div>
                </div>
            </div>
        `;
    }

    renderAnswerOptions(question) {
        switch (question.type) {
            case 'calculation':
                return `
                    <div class="calculation-answer">
                        <label for="calc-answer">Tu respuesta (en %):</label>
                        <input type="number" id="calc-answer" step="0.01" placeholder="Ej: 16.75" />
                        <div class="calc-hint">
                            <i class="fas fa-calculator"></i>
                            <span>Puedes usar calculadora. Redondea a 2 decimales.</span>
                        </div>
                    </div>
                `;
            
            default:
                return `
                    <div class="multiple-choice-options">
                        ${question.options.map((option, index) => `
                            <label class="option-label">
                                <input type="radio" name="question-${question.id}" value="${index}" />
                                <div class="option-content">
                                    <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                                    <span class="option-text">${option}</span>
                                </div>
                            </label>
                        `).join('')}
                    </div>
                `;
        }
    }

    renderQuestionMap() {
        return `
            <div class="question-map-container">
                <span class="map-label">Progreso:</span>
                <div class="question-dots">
                    ${this.questions.map((_, index) => {
                        let status = 'unanswered';
                        if (index < this.currentQuestion) {
                            status = this.answers[index] !== undefined ? 'answered' : 'skipped';
                        } else if (index === this.currentQuestion) {
                            status = 'current';
                        }
                        
                        return `
                            <div class="question-dot ${status}" data-question="${index}" title="Pregunta ${index + 1}">
                                ${index + 1}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    attachExamEventListeners() {
        // Navegación
        document.getElementById('prev-question')?.addEventListener('click', () => {
            if (this.currentQuestion > 0) {
                this.saveCurrentAnswer();
                this.currentQuestion--;
                this.renderExamInterface();
            }
        });

        document.getElementById('next-question')?.addEventListener('click', () => {
            this.saveCurrentAnswer();
            if (this.currentQuestion < this.questions.length - 1) {
                this.currentQuestion++;
                this.renderExamInterface();
            } else {
                this.showSubmitConfirmation();
            }
        });

        // Mapa de preguntas
        document.querySelectorAll('.question-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                const questionIndex = parseInt(e.target.dataset.question);
                this.saveCurrentAnswer();
                this.currentQuestion = questionIndex;
                this.renderExamInterface();
            });
        });

        // Auto-save cada 30 segundos
        setInterval(() => {
            this.saveCurrentAnswer();
            this.autoSaveProgress();
        }, 30000);
    }

    saveCurrentAnswer() {
        const question = this.questions[this.currentQuestion];
        let answer = null;

        if (question.type === 'calculation') {
            const input = document.getElementById('calc-answer');
            answer = input ? parseFloat(input.value) : null;
        } else {
            const selected = document.querySelector(`input[name="question-${question.id}"]:checked`);
            answer = selected ? parseInt(selected.value) : null;
        }

        this.answers[this.currentQuestion] = answer;
    }

    showSubmitConfirmation() {
        const unanswered = this.answers.filter(answer => answer === undefined || answer === null).length;
        
        const modal = document.createElement('div');
        modal.className = 'exam-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-exclamation-triangle"></i> Confirmar Envío</h3>
                </div>
                
                <div class="modal-body">
                    <p>¿Estás seguro de que quieres enviar tu examen?</p>
                    
                    <div class="exam-summary">
                        <div class="summary-item">
                            <span>Preguntas respondidas:</span>
                            <span><strong>${this.questions.length - unanswered} de ${this.questions.length}</strong></span>
                        </div>
                        ${unanswered > 0 ? `
                            <div class="summary-item warning">
                                <span>Preguntas sin responder:</span>
                                <span><strong>${unanswered}</strong></span>
                            </div>
                        ` : ''}
                        <div class="summary-item">
                            <span>Tiempo transcurrido:</span>
                            <span><strong>${this.getElapsedTime()}</strong></span>
                        </div>
                    </div>
                    
                    ${unanswered > 0 ? `
                        <div class="warning-message">
                            <i class="fas fa-exclamation-triangle"></i>
                            <p>Tienes ${unanswered} pregunta(s) sin responder. Las preguntas sin responder se calificarán como incorrectas.</p>
                        </div>
                    ` : ''}
                </div>
                
                <div class="modal-actions">
                    <button class="btn-secondary" onclick="this.parentElement.parentElement.parentElement.remove()">
                        <i class="fas fa-arrow-left"></i> Revisar
                    </button>
                    <button class="btn-primary" onclick="finalExam.submitExam(); this.parentElement.parentElement.parentElement.remove()">
                        <i class="fas fa-check"></i> Enviar Examen
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    submitExam() {
        this.saveCurrentAnswer();
        
        if (this.currentTimer) {
            clearInterval(this.currentTimer);
        }

        const results = this.calculateFinalResults();
        this.showFinalResults(results);
        this.saveFinalResults(results);
    }

    calculateFinalResults() {
        let totalPoints = 0;
        let earnedPoints = 0;
        const questionResults = [];

        this.questions.forEach((question, index) => {
            const userAnswer = this.answers[index];
            let isCorrect = false;
            let pointsEarned = 0;

            totalPoints += question.points;

            if (userAnswer !== null && userAnswer !== undefined) {
                if (question.type === 'calculation') {
                    isCorrect = Math.abs(userAnswer - question.answer) <= (question.tolerance || 0);
                } else {
                    isCorrect = userAnswer === question.correct;
                }

                if (isCorrect) {
                    pointsEarned = question.points;
                    earnedPoints += question.points;
                }
            }

            questionResults.push({
                question: question.question,
                userAnswer,
                correctAnswer: question.correct || question.answer,
                isCorrect,
                pointsEarned,
                maxPoints: question.points,
                explanation: question.explanation,
                difficulty: question.difficulty,
                module: question.module
            });
        });

        const percentage = Math.round((earnedPoints / totalPoints) * 100);
        const timeElapsed = Math.round((new Date() - this.timeStarted) / 1000 / 60);
        const passed = percentage >= this.passingScore;

        return {
            percentage,
            earnedPoints,
            totalPoints,
            timeElapsed,
            passed,
            questionResults,
            moduleBreakdown: this.calculateModuleBreakdown(questionResults)
        };
    }

    calculateModuleBreakdown(questionResults) {
        const modules = {};
        
        questionResults.forEach(result => {
            if (!modules[result.module]) {
                modules[result.module] = {
                    earned: 0,
                    total: 0,
                    questions: 0,
                    correct: 0
                };
            }
            
            modules[result.module].earned += result.pointsEarned;
            modules[result.module].total += result.maxPoints;
            modules[result.module].questions++;
            if (result.isCorrect) modules[result.module].correct++;
        });

        Object.keys(modules).forEach(module => {
            modules[module].percentage = Math.round((modules[module].earned / modules[module].total) * 100);
        });

        return modules;
    }

    showFinalResults(results) {
        const container = document.getElementById('final-exam-container');
        
        container.innerHTML = `
            <div class="final-results">
                <div class="results-header ${results.passed ? 'passed' : 'failed'}">
                    <div class="results-icon">
                        <i class="fas ${results.passed ? 'fa-trophy' : 'fa-times-circle'}"></i>
                    </div>
                    
                    <div class="results-title">
                        <h2>${results.passed ? '¡Felicitaciones!' : 'Examen No Aprobado'}</h2>
                        <p>${results.passed ? 
                            'Has completado exitosamente el Curso de Inversiones Financieras' : 
                            'Necesitas estudiar más para aprobar el examen'}</p>
                    </div>
                    
                    <div class="final-score">
                        <div class="score-circle ${results.passed ? 'passed' : 'failed'}">
                            <span class="score-number">${results.percentage}%</span>
                            <span class="score-label">Puntuación Final</span>
                        </div>
                    </div>
                </div>

                <div class="results-summary">
                    <div class="summary-cards">
                        <div class="summary-card">
                            <i class="fas fa-star"></i>
                            <div class="card-content">
                                <span class="card-value">${results.earnedPoints}/${results.totalPoints}</span>
                                <span class="card-label">Puntos Obtenidos</span>
                            </div>
                        </div>
                        
                        <div class="summary-card">
                            <i class="fas fa-clock"></i>
                            <div class="card-content">
                                <span class="card-value">${results.timeElapsed} min</span>
                                <span class="card-label">Tiempo Utilizado</span>
                            </div>
                        </div>
                        
                        <div class="summary-card">
                            <i class="fas fa-target"></i>
                            <div class="card-content">
                                <span class="card-value">${this.passingScore}%</span>
                                <span class="card-label">Requerido</span>
                            </div>
                        </div>
                        
                        <div class="summary-card">
                            <i class="fas fa-chart-bar"></i>
                            <div class="card-content">
                                <span class="card-value">${results.questionResults.filter(r => r.isCorrect).length}/${this.questions.length}</span>
                                <span class="card-label">Correctas</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-breakdown">
                    <h3><i class="fas fa-chart-pie"></i> Rendimiento por Módulo</h3>
                    <div class="module-grid">
                        ${Object.entries(results.moduleBreakdown).map(([module, data]) => `
                            <div class="module-card">
                                <div class="module-header">
                                    <span class="module-name">${this.getModuleName(module)}</span>
                                    <span class="module-score ${data.percentage >= 70 ? 'good' : 'needs-improvement'}">${data.percentage}%</span>
                                </div>
                                <div class="module-details">
                                    <span>${data.correct}/${data.questions} correctas</span>
                                    <span>${data.earned}/${data.total} puntos</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="detailed-review">
                    <h3><i class="fas fa-list-check"></i> Revisión Detallada</h3>
                    <div class="review-questions">
                        ${results.questionResults.map((result, index) => `
                            <div class="review-question ${result.isCorrect ? 'correct' : 'incorrect'}">
                                <div class="review-header">
                                    <div class="question-info">
                                        <span class="question-number">Pregunta ${index + 1}</span>
                                        <span class="difficulty-badge ${result.difficulty}">${result.difficulty}</span>
                                        <span class="points-info">${result.pointsEarned}/${result.maxPoints} pts</span>
                                    </div>
                                    <div class="result-icon">
                                        <i class="fas ${result.isCorrect ? 'fa-check' : 'fa-times'}"></i>
                                    </div>
                                </div>
                                
                                <div class="review-content">
                                    <div class="question-text">${result.question}</div>
                                    
                                    ${!result.isCorrect ? `
                                        <div class="answer-comparison">
                                            <div class="user-answer">
                                                <strong>Tu respuesta:</strong> ${this.formatAnswer(result.userAnswer)}
                                            </div>
                                            <div class="correct-answer">
                                                <strong>Respuesta correcta:</strong> ${this.formatAnswer(result.correctAnswer)}
                                            </div>
                                        </div>
                                    ` : ''}
                                    
                                    <div class="explanation">
                                        <strong>Explicación:</strong>
                                        <p>${result.explanation}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="results-actions">
                    ${!results.passed ? `
                        <button class="btn-primary" onclick="finalExam.retakeExam()">
                            <i class="fas fa-redo"></i> Reintentar Examen
                        </button>
                    ` : `
                        <button class="btn-success" onclick="finalExam.downloadCertificate()">
                            <i class="fas fa-download"></i> Descargar Certificado
                        </button>
                    `}
                    
                    <button class="btn-secondary" onclick="finalExam.returnToCourse()">
                        <i class="fas fa-arrow-left"></i> Volver al Curso
                    </button>
                    
                    <button class="btn-secondary" onclick="finalExam.shareResults()">
                        <i class="fas fa-share"></i> Compartir Resultados
                    </button>
                </div>

                ${results.passed ? `
                    <div class="congratulations-message">
                        <div class="celebration-animation">🎉</div>
                        <h4>¡Has completado el Curso de Inversiones Financieras!</h4>
                        <p>Ahora tienes las herramientas y conocimientos necesarios para tomar decisiones de inversión informadas. ¡Continúa aprendiendo y aplicando estos conceptos en tu vida financiera!</p>
                    </div>
                ` : `
                    <div class="encouragement-message">
                        <h4>No te desanimes</h4>
                        <p>El aprendizaje es un proceso. Revisa los módulos donde tuviste más dificultades y vuelve a intentarlo. ¡Puedes lograrlo!</p>
                        
                        <div class="study-recommendations">
                            <h5>Recomendaciones de estudio:</h5>
                            <ul>
                                ${Object.entries(results.moduleBreakdown)
                                    .filter(([_, data]) => data.percentage < 70)
                                    .map(([module, _]) => `<li>Revisar ${this.getModuleName(module)}</li>`)
                                    .join('')}
                            </ul>
                        </div>
                    </div>
                `}
            </div>
        `;
    }

    getModuleName(moduleId) {
        const moduleNames = {
            'integration': 'Integración de Conceptos',
            'markets': 'Mercados y Actores',
            'instruments': 'Instrumentos Financieros',
            'strategies': 'Estrategias Avanzadas',
            'history': 'Historia y Lecciones',
            'math': 'Cálculos Financieros',
            'risk': 'Gestión de Riesgo',
            'analysis': 'Análisis Fundamental',
            'psychology': 'Psicología del Inversionista',
            'ethics': 'Ética y Regulación',
            'future': 'Tecnología y Futuro'
        };
        
        return moduleNames[moduleId] || moduleId;
    }

    formatAnswer(answer) {
        if (answer === null || answer === undefined) {
            return 'Sin respuesta';
        }
        
        if (typeof answer === 'number') {
            return `${answer}%`;
        }
        
        const options = ['A', 'B', 'C', 'D'];
        return options[answer] || answer;
    }

    startTimer() {
        const timerDisplay = document.getElementById('timer-display');
        if (!timerDisplay) return;

        let timeRemaining = this.timeLimit * 60; // convertir a segundos

        this.currentTimer = setInterval(() => {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            
            timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

            // Cambiar color según tiempo restante
            const timerElement = document.getElementById('exam-timer');
            if (timeRemaining <= 300) { // 5 minutos
                timerElement.classList.add('warning');
            }
            if (timeRemaining <= 60) { // 1 minuto
                timerElement.classList.add('critical');
            }

            if (timeRemaining <= 0) {
                clearInterval(this.currentTimer);
                this.submitExam();
                return;
            }

            timeRemaining--;
        }, 1000);
    }

    getElapsedTime() {
        const elapsed = Math.round((new Date() - this.timeStarted) / 1000 / 60);
        return `${elapsed} minutos`;
    }

    autoSaveProgress() {
        const progress = {
            currentQuestion: this.currentQuestion,
            answers: this.answers,
            timeStarted: this.timeStarted.toISOString()
        };
        
        localStorage.setItem('finalExamProgress', JSON.stringify(progress));
    }

    loadSavedProgress() {
        const saved = localStorage.getItem('finalExamProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.currentQuestion = progress.currentQuestion;
            this.answers = progress.answers;
            this.timeStarted = new Date(progress.timeStarted);
            return true;
        }
        return false;
    }

    saveFinalResults(results) {
        const examHistory = JSON.parse(localStorage.getItem('examHistory') || '[]');
        
        examHistory.push({
            timestamp: new Date().toISOString(),
            score: results.percentage,
            passed: results.passed,
            timeElapsed: results.timeElapsed,
            earnedPoints: results.earnedPoints,
            totalPoints: results.totalPoints
        });

        localStorage.setItem('examHistory', JSON.stringify(examHistory));
        
        // Actualizar progreso del curso
        const courseProgress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
        courseProgress.finalExam = {
            completed: true,
            passed: results.passed,
            score: results.percentage,
            completionDate: new Date().toISOString()
        };
        
        localStorage.setItem('courseProgress', JSON.stringify(courseProgress));
    }

    retakeExam() {
        localStorage.removeItem('finalExamProgress');
        this.startExam();
    }

    returnToCourse() {
        window.location.href = '#course-home';
    }

    downloadCertificate() {
        // Implementar generación de certificado
        alert('Funcionalidad de certificado en desarrollo');
    }

    shareResults() {
        // Implementar compartir en redes sociales
        alert('Funcionalidad de compartir en desarrollo');
    }
}

// Inicializar examen final
const finalExam = new FinalExam();

// Exportar para uso global
window.finalExam = finalExam;

