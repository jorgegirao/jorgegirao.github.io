// Sistema de Quizzes Interactivos
class QuizSystem {
    constructor() {
        this.currentQuiz = null;
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = [];
        this.timeStarted = null;
        this.quizzes = this.initializeQuizzes();
    }

    initializeQuizzes() {
        return {
            module1: {
                title: 'Evaluación Módulo 1: Introducción al Mundo de las Inversiones',
                description: 'Evalúa tu comprensión de los conceptos básicos de inversión',
                timeLimit: 15, // minutos
                passingScore: 70,
                questions: [
                    {
                        id: 1,
                        type: 'multiple-choice',
                        question: '¿Cuál es la principal diferencia entre ahorro e inversión?',
                        options: [
                            'El ahorro es para el corto plazo, la inversión para el largo plazo',
                            'El ahorro no tiene riesgo, la inversión sí tiene riesgo',
                            'El ahorro busca preservar capital, la inversión busca crecimiento',
                            'Todas las anteriores son correctas'
                        ],
                        correct: 3,
                        explanation: 'Todas las opciones son correctas. El ahorro se enfoca en preservar capital a corto plazo sin riesgo, mientras que la inversión busca crecimiento a largo plazo asumiendo cierto nivel de riesgo.'
                    },
                    {
                        id: 2,
                        type: 'multiple-choice',
                        question: '¿Qué es la inflación y cómo afecta a tus ahorros?',
                        options: [
                            'Es el aumento general de precios que reduce el poder adquisitivo',
                            'Es una medida de la volatilidad del mercado',
                            'Es el interés que pagan los bancos por los depósitos',
                            'Es la diferencia entre ingresos y gastos'
                        ],
                        correct: 0,
                        explanation: 'La inflación es el aumento sostenido del nivel general de precios, lo que significa que con la misma cantidad de dinero puedes comprar menos cosas con el tiempo.'
                    },
                    {
                        id: 3,
                        type: 'drag-drop',
                        question: 'Ordena estos instrumentos de inversión de menor a mayor riesgo:',
                        items: ['Cuenta de ahorros', 'Bonos gubernamentales', 'Acciones blue-chip', 'Criptomonedas'],
                        correctOrder: [0, 1, 2, 3],
                        explanation: 'El orden correcto es: Cuenta de ahorros (menor riesgo), Bonos gubernamentales, Acciones blue-chip, Criptomonedas (mayor riesgo).'
                    },
                    {
                        id: 4,
                        type: 'fill-blank',
                        question: 'El principio fundamental de las inversiones es que a mayor _____, mayor _____ esperado.',
                        blanks: ['riesgo', 'rendimiento'],
                        explanation: 'A mayor riesgo, mayor rendimiento esperado. Esta es la relación fundamental riesgo-rendimiento en las inversiones.'
                    },
                    {
                        id: 5,
                        type: 'true-false',
                        question: 'Es posible eliminar completamente el riesgo de una inversión diversificando adecuadamente.',
                        correct: false,
                        explanation: 'Falso. La diversificación puede reducir el riesgo específico, pero no puede eliminar el riesgo sistemático o de mercado.'
                    }
                ]
            },
            module2: {
                title: 'Evaluación Módulo 2: Actores y Roles en los Mercados',
                description: 'Evalúa tu conocimiento sobre los participantes del mercado financiero',
                timeLimit: 20,
                passingScore: 70,
                questions: [
                    {
                        id: 1,
                        type: 'multiple-choice',
                        question: '¿Cuál es la función principal de un banco central?',
                        options: [
                            'Maximizar las ganancias de los bancos comerciales',
                            'Controlar la política monetaria y mantener la estabilidad financiera',
                            'Competir con los bancos privados en préstamos',
                            'Invertir en el mercado de valores'
                        ],
                        correct: 1,
                        explanation: 'Los bancos centrales tienen como función principal controlar la política monetaria, regular el sistema financiero y mantener la estabilidad económica.'
                    },
                    {
                        id: 2,
                        type: 'matching',
                        question: 'Relaciona cada tipo de broker con su característica principal:',
                        leftColumn: ['Full-Service Broker', 'Discount Broker', 'Robo-Advisor'],
                        rightColumn: ['Comisiones bajas, servicios básicos', 'Gestión automatizada con algoritmos', 'Asesoría personalizada, comisiones altas'],
                        correctMatches: [2, 0, 1],
                        explanation: 'Full-Service: asesoría personalizada con comisiones altas; Discount: comisiones bajas con servicios básicos; Robo-Advisor: gestión automatizada.'
                    },
                    {
                        id: 3,
                        type: 'multiple-choice',
                        question: '¿Qué significa "2 y 20" en el contexto de hedge funds?',
                        options: [
                            '2% de comisión de gestión y 20% de comisión de performance',
                            '2 años de lock-up y 20% de rendimiento mínimo',
                            '2% de rendimiento garantizado y 20% de volatilidad máxima',
                            '2 socios mínimos y 20 millones de capital inicial'
                        ],
                        correct: 0,
                        explanation: '"2 y 20" se refiere a la estructura típica de comisiones: 2% anual de comisión de gestión sobre activos administrados y 20% de comisión sobre ganancias.'
                    },
                    {
                        id: 4,
                        type: 'scenario',
                        question: 'Escenario: El Fed anuncia que subirá las tasas de interés. ¿Cuál sería el efecto más probable?',
                        options: [
                            'Los bonos suben de precio',
                            'Las acciones de crecimiento se benefician',
                            'El dólar se fortalece',
                            'La inflación aumenta inmediatamente'
                        ],
                        correct: 2,
                        explanation: 'Cuando el Fed sube tasas, típicamente el dólar se fortalece porque ofrece mayor rendimiento a inversionistas extranjeros.'
                    }
                ]
            },
            module3: {
                title: 'Evaluación Módulo 3: Instrumentos Financieros Básicos',
                description: 'Evalúa tu comprensión de acciones, bonos y ETFs',
                timeLimit: 25,
                passingScore: 70,
                questions: [
                    {
                        id: 1,
                        type: 'multiple-choice',
                        question: '¿Qué derechos obtiene un accionista común?',
                        options: [
                            'Solo derecho a dividendos',
                            'Solo derecho de voto',
                            'Derechos de voto y participación en ganancias',
                            'Garantía de recuperar la inversión inicial'
                        ],
                        correct: 2,
                        explanation: 'Los accionistas comunes tienen derecho de voto en decisiones corporativas y derecho a participar en las ganancias vía dividendos o apreciación.'
                    },
                    {
                        id: 2,
                        type: 'calculation',
                        question: 'Si compras un bono de $1,000 con cupón de 5% anual, ¿cuánto recibirás en pagos de intereses cada año?',
                        answer: 50,
                        tolerance: 0,
                        explanation: '$1,000 × 5% = $50 anuales en pagos de cupón.'
                    },
                    {
                        id: 3,
                        type: 'multiple-choice',
                        question: '¿Cuál es la principal ventaja de los ETFs sobre los fondos mutuos tradicionales?',
                        options: [
                            'Siempre tienen mejor rendimiento',
                            'Se pueden comprar y vender durante el horario de mercado',
                            'No tienen riesgo de pérdida',
                            'Garantizan dividendos fijos'
                        ],
                        correct: 1,
                        explanation: 'Los ETFs se negocian en bolsa como acciones, permitiendo compra/venta durante horario de mercado, a diferencia de fondos mutuos que solo se valúan al cierre.'
                    },
                    {
                        id: 4,
                        type: 'scenario',
                        question: 'Las tasas de interés suben significativamente. ¿Qué pasa con el precio de los bonos existentes?',
                        options: [
                            'Suben porque pagan más interés',
                            'Bajan porque nuevos bonos ofrecen mejores tasas',
                            'Se mantienen igual',
                            'Depende del emisor del bono'
                        ],
                        correct: 1,
                        explanation: 'Existe una relación inversa entre tasas de interés y precios de bonos. Cuando las tasas suben, los bonos existentes bajan de precio.'
                    },
                    {
                        id: 5,
                        type: 'portfolio-builder',
                        question: 'Construye un portafolio básico para un inversionista conservador de 60 años:',
                        assets: ['Acciones', 'Bonos', 'Efectivo', 'REITs'],
                        targetAllocation: [30, 60, 10, 0],
                        tolerance: 5,
                        explanation: 'Para un inversionista conservador de 60 años, una asignación típica sería: 60% bonos, 30% acciones, 10% efectivo.'
                    }
                ]
            },
            module4: {
                title: 'Evaluación Módulo 4: Estrategias Avanzadas',
                description: 'Evalúa tu comprensión de análisis y estrategias de inversión',
                timeLimit: 30,
                passingScore: 75,
                questions: [
                    {
                        id: 1,
                        type: 'multiple-choice',
                        question: '¿Qué mide el ratio de Sharpe?',
                        options: [
                            'El rendimiento total de una inversión',
                            'La volatilidad de una inversión',
                            'El rendimiento ajustado por riesgo',
                            'La correlación entre dos activos'
                        ],
                        correct: 2,
                        explanation: 'El ratio de Sharpe mide el rendimiento excesivo por unidad de riesgo, es decir, el rendimiento ajustado por riesgo.'
                    },
                    {
                        id: 2,
                        type: 'analysis',
                        question: 'Analiza esta empresa: P/E = 25, ROE = 15%, Debt/Equity = 0.3. ¿Qué tipo de empresa es probablemente?',
                        options: [
                            'Empresa de valor (value) con problemas',
                            'Empresa de crecimiento (growth) saludable',
                            'Empresa cíclica en pico',
                            'Empresa en dificultades financieras'
                        ],
                        correct: 1,
                        explanation: 'P/E alto (25) sugiere crecimiento, ROE sólido (15%) indica rentabilidad, y deuda moderada (0.3) muestra salud financiera.'
                    },
                    {
                        id: 3,
                        type: 'strategy-matching',
                        question: 'Relaciona cada estrategia con su descripción:',
                        strategies: ['Dollar Cost Averaging', 'Value Investing', 'Momentum Investing'],
                        descriptions: [
                            'Comprar activos que han subido recientemente',
                            'Invertir cantidades fijas regularmente',
                            'Comprar activos infravalorados'
                        ],
                        correctMatches: [1, 2, 0],
                        explanation: 'DCA: inversión regular; Value: activos baratos; Momentum: seguir tendencias alcistas.'
                    },
                    {
                        id: 4,
                        type: 'risk-assessment',
                        question: 'Un portafolio tiene Volatilidad = 15%, Rendimiento = 8%, Tasa libre de riesgo = 2%. ¿Cuál es el Sharpe Ratio?',
                        answer: 0.4,
                        tolerance: 0.05,
                        explanation: 'Sharpe Ratio = (8% - 2%) / 15% = 6% / 15% = 0.4'
                    }
                ]
            },
            module5: {
                title: 'Evaluación Módulo 5: Historia y Casos Reales',
                description: 'Evalúa tu conocimiento de historia financiera y grandes inversionistas',
                timeLimit: 25,
                passingScore: 70,
                questions: [
                    {
                        id: 1,
                        type: 'timeline',
                        question: 'Ordena cronológicamente estas crisis financieras:',
                        events: ['Gran Depresión', 'Tulipomanía', 'Crisis Subprime', 'Burbuja Dot-com'],
                        correctOrder: [1, 0, 3, 2],
                        explanation: 'Orden cronológico: Tulipomanía (1637), Gran Depresión (1929), Burbuja Dot-com (2000), Crisis Subprime (2008).'
                    },
                    {
                        id: 2,
                        type: 'multiple-choice',
                        question: '¿Cuál es el principio de inversión más famoso de Warren Buffett?',
                        options: [
                            'Comprar alto y vender más alto',
                            'Diversificar en 100+ acciones',
                            'Comprar empresas excelentes a precios razonables',
                            'Hacer trading diario activo'
                        ],
                        correct: 2,
                        explanation: 'Buffett se enfoca en comprar empresas de calidad con ventajas competitivas duraderas a precios razonables y mantenerlas largo plazo.'
                    },
                    {
                        id: 3,
                        type: 'pattern-recognition',
                        question: '¿Qué patrón común tienen todas las burbujas financieras?',
                        options: [
                            'Siempre involucran tecnología nueva',
                            'Expansión de crédito y apalancamiento excesivo',
                            'Solo afectan a inversionistas institucionales',
                            'Duran exactamente 3 años'
                        ],
                        correct: 1,
                        explanation: 'Todas las burbujas comparten: crédito fácil, apalancamiento excesivo, euforia ("esta vez es diferente") y eventual colapso.'
                    },
                    {
                        id: 4,
                        type: 'lesson-application',
                        question: 'Basándote en la historia, ¿cuál es la mejor estrategia durante una crisis financiera?',
                        options: [
                            'Vender todo y esperar en efectivo',
                            'Comprar con apalancamiento máximo',
                            'Mantener calma y comprar gradualmente activos de calidad',
                            'Cambiar completamente de estrategia'
                        ],
                        correct: 2,
                        explanation: 'La historia muestra que mantener perspectiva a largo plazo y comprar gradualmente durante crisis ha sido la estrategia más exitosa.'
                    }
                ]
            },
            final: {
                title: 'Examen Final: Curso Completo de Inversiones',
                description: 'Evaluación integral de todos los módulos del curso',
                timeLimit: 60,
                passingScore: 80,
                questions: [
                    // Mezcla de preguntas de todos los módulos
                    {
                        id: 1,
                        type: 'comprehensive-scenario',
                        question: 'Escenario integral: Eres un asesor financiero. Un cliente de 35 años quiere invertir $50,000 para su retiro. Tiene tolerancia moderada al riesgo. ¿Qué estrategia recomendarías?',
                        options: [
                            '100% en acciones de crecimiento',
                            '70% acciones, 25% bonos, 5% efectivo con rebalancing anual',
                            '100% en bonos gubernamentales',
                            '50% en criptomonedas, 50% en startups'
                        ],
                        correct: 1,
                        explanation: 'Para 35 años con tolerancia moderada, una asignación balanceada con mayoría en acciones aprovecha el tiempo hasta retiro, con bonos para estabilidad.'
                    },
                    {
                        id: 2,
                        type: 'crisis-response',
                        question: 'Durante una crisis como 2008, los mercados caen 40%. Tu portafolio vale ahora $60,000 en lugar de $100,000. ¿Qué haces?',
                        options: [
                            'Vendo todo para evitar más pérdidas',
                            'Mantengo posiciones y considero comprar más gradualmente',
                            'Cambio a day trading para recuperar rápido',
                            'Pido prestado para comprar más inmediatamente'
                        ],
                        correct: 1,
                        explanation: 'La historia muestra que mantener posiciones y comprar gradualmente durante crisis ha sido la estrategia más exitosa a largo plazo.'
                    },
                    {
                        id: 3,
                        type: 'multi-concept',
                        question: 'Una empresa tiene P/E = 15, ROE = 20%, paga dividendo de 3%, y está en una industria creciente. El mercado está en máximos históricos. ¿Cómo la evaluarías?',
                        options: [
                            'Sobrevalorada por el mercado alto',
                            'Potencialmente atractiva por fundamentos sólidos',
                            'Evitar por pagar dividendos',
                            'Comprar solo si cae 50%'
                        ],
                        correct: 1,
                        explanation: 'P/E razonable (15), ROE excelente (20%), dividendo atractivo (3%) y industria creciente sugieren fundamentos sólidos independientemente del nivel del mercado.'
                    }
                ]
            }
        };
    }

    startQuiz(moduleId) {
        this.currentQuiz = this.quizzes[moduleId];
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = [];
        this.timeStarted = new Date();
        
        this.renderQuizInterface();
    }

    renderQuizInterface() {
        const container = document.getElementById('quiz-container');
        if (!container) return;

        container.innerHTML = `
            <div class="quiz-header">
                <h3>${this.currentQuiz.title}</h3>
                <div class="quiz-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(this.currentQuestion / this.currentQuiz.questions.length) * 100}%"></div>
                    </div>
                    <span class="progress-text">${this.currentQuestion + 1} de ${this.currentQuiz.questions.length}</span>
                </div>
                <div class="quiz-timer" id="quiz-timer"></div>
            </div>
            <div class="quiz-content">
                ${this.renderQuestion(this.currentQuiz.questions[this.currentQuestion])}
            </div>
            <div class="quiz-navigation">
                <button id="prev-question" ${this.currentQuestion === 0 ? 'disabled' : ''}>Anterior</button>
                <button id="next-question">
                    ${this.currentQuestion === this.currentQuiz.questions.length - 1 ? 'Finalizar' : 'Siguiente'}
                </button>
            </div>
        `;

        this.attachQuizEventListeners();
        this.startTimer();
    }

    renderQuestion(question) {
        switch (question.type) {
            case 'multiple-choice':
                return this.renderMultipleChoice(question);
            case 'drag-drop':
                return this.renderDragDrop(question);
            case 'fill-blank':
                return this.renderFillBlank(question);
            case 'true-false':
                return this.renderTrueFalse(question);
            case 'matching':
                return this.renderMatching(question);
            case 'calculation':
                return this.renderCalculation(question);
            case 'scenario':
                return this.renderScenario(question);
            case 'portfolio-builder':
                return this.renderPortfolioBuilder(question);
            default:
                return '<p>Tipo de pregunta no soportado</p>';
        }
    }

    renderMultipleChoice(question) {
        return `
            <div class="question-container">
                <h4 class="question-text">${question.question}</h4>
                <div class="options-container">
                    ${question.options.map((option, index) => `
                        <label class="option-label">
                            <input type="radio" name="answer" value="${index}" />
                            <span class="option-text">${option}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderDragDrop(question) {
        return `
            <div class="question-container">
                <h4 class="question-text">${question.question}</h4>
                <div class="drag-drop-container">
                    <div class="drag-items">
                        ${question.items.map((item, index) => `
                            <div class="drag-item" draggable="true" data-index="${index}">
                                ${item}
                            </div>
                        `).join('')}
                    </div>
                    <div class="drop-zones">
                        ${question.items.map((_, index) => `
                            <div class="drop-zone" data-position="${index}">
                                Posición ${index + 1}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderFillBlank(question) {
        let questionText = question.question;
        question.blanks.forEach((blank, index) => {
            questionText = questionText.replace('_____', `<input type="text" class="fill-blank" data-index="${index}" placeholder="Respuesta ${index + 1}">`);
        });

        return `
            <div class="question-container">
                <h4 class="question-text">${questionText}</h4>
            </div>
        `;
    }

    renderTrueFalse(question) {
        return `
            <div class="question-container">
                <h4 class="question-text">${question.question}</h4>
                <div class="true-false-container">
                    <label class="option-label">
                        <input type="radio" name="answer" value="true" />
                        <span class="option-text">Verdadero</span>
                    </label>
                    <label class="option-label">
                        <input type="radio" name="answer" value="false" />
                        <span class="option-text">Falso</span>
                    </label>
                </div>
            </div>
        `;
    }

    renderMatching(question) {
        return `
            <div class="question-container">
                <h4 class="question-text">${question.question}</h4>
                <div class="matching-container">
                    <div class="left-column">
                        ${question.leftColumn.map((item, index) => `
                            <div class="match-item left" data-index="${index}">
                                ${item}
                            </div>
                        `).join('')}
                    </div>
                    <div class="right-column">
                        ${question.rightColumn.map((item, index) => `
                            <div class="match-item right" data-index="${index}">
                                ${item}
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="matches-display" id="matches-display"></div>
            </div>
        `;
    }

    renderCalculation(question) {
        return `
            <div class="question-container">
                <h4 class="question-text">${question.question}</h4>
                <div class="calculation-container">
                    <input type="number" id="calculation-answer" placeholder="Ingresa tu respuesta" step="0.01" />
                    <div class="calculator-hint">
                        <p>💡 Tip: Puedes usar la calculadora de tu dispositivo</p>
                    </div>
                </div>
            </div>
        `;
    }

    renderScenario(question) {
        return `
            <div class="question-container scenario">
                <div class="scenario-header">
                    <i class="fas fa-lightbulb"></i>
                    <span>Análisis de Escenario</span>
                </div>
                <h4 class="question-text">${question.question}</h4>
                <div class="options-container">
                    ${question.options.map((option, index) => `
                        <label class="option-label scenario-option">
                            <input type="radio" name="answer" value="${index}" />
                            <span class="option-text">${option}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderPortfolioBuilder(question) {
        return `
            <div class="question-container">
                <h4 class="question-text">${question.question}</h4>
                <div class="portfolio-builder">
                    ${question.assets.map((asset, index) => `
                        <div class="asset-allocation">
                            <label>${asset}:</label>
                            <input type="range" min="0" max="100" value="0" 
                                   class="allocation-slider" data-asset="${index}" />
                            <span class="allocation-value">0%</span>
                        </div>
                    `).join('')}
                    <div class="total-allocation">
                        Total: <span id="total-allocation">0%</span>
                    </div>
                </div>
            </div>
        `;
    }

    attachQuizEventListeners() {
        // Navegación
        document.getElementById('prev-question')?.addEventListener('click', () => {
            if (this.currentQuestion > 0) {
                this.saveCurrentAnswer();
                this.currentQuestion--;
                this.renderQuizInterface();
            }
        });

        document.getElementById('next-question')?.addEventListener('click', () => {
            this.saveCurrentAnswer();
            if (this.currentQuestion < this.currentQuiz.questions.length - 1) {
                this.currentQuestion++;
                this.renderQuizInterface();
            } else {
                this.finishQuiz();
            }
        });

        // Eventos específicos por tipo de pregunta
        this.attachQuestionSpecificListeners();
    }

    attachQuestionSpecificListeners() {
        const question = this.currentQuiz.questions[this.currentQuestion];
        
        switch (question.type) {
            case 'drag-drop':
                this.setupDragAndDrop();
                break;
            case 'matching':
                this.setupMatching();
                break;
            case 'portfolio-builder':
                this.setupPortfolioBuilder();
                break;
        }
    }

    setupDragAndDrop() {
        const dragItems = document.querySelectorAll('.drag-item');
        const dropZones = document.querySelectorAll('.drop-zone');

        dragItems.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.dataset.index);
            });
        });

        dropZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                const draggedIndex = e.dataTransfer.getData('text/plain');
                const draggedItem = document.querySelector(`[data-index="${draggedIndex}"]`);
                
                // Clear zone and add item
                zone.innerHTML = '';
                zone.appendChild(draggedItem.cloneNode(true));
                zone.dataset.itemIndex = draggedIndex;
            });
        });
    }

    setupMatching() {
        let selectedLeft = null;
        let matches = [];

        document.querySelectorAll('.match-item.left').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.match-item.left').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                selectedLeft = item.dataset.index;
            });
        });

        document.querySelectorAll('.match-item.right').forEach(item => {
            item.addEventListener('click', () => {
                if (selectedLeft !== null) {
                    matches.push([selectedLeft, item.dataset.index]);
                    this.updateMatchesDisplay(matches);
                    selectedLeft = null;
                    document.querySelectorAll('.match-item.left').forEach(i => i.classList.remove('selected'));
                }
            });
        });
    }

    setupPortfolioBuilder() {
        const sliders = document.querySelectorAll('.allocation-slider');
        
        sliders.forEach(slider => {
            slider.addEventListener('input', () => {
                this.updatePortfolioAllocation();
            });
        });
    }

    updatePortfolioAllocation() {
        const sliders = document.querySelectorAll('.allocation-slider');
        let total = 0;
        
        sliders.forEach(slider => {
            const value = parseInt(slider.value);
            total += value;
            slider.nextElementSibling.textContent = `${value}%`;
        });
        
        document.getElementById('total-allocation').textContent = `${total}%`;
        
        // Color coding for total
        const totalElement = document.getElementById('total-allocation');
        if (total === 100) {
            totalElement.style.color = 'green';
        } else if (total > 100) {
            totalElement.style.color = 'red';
        } else {
            totalElement.style.color = 'orange';
        }
    }

    updateMatchesDisplay(matches) {
        const display = document.getElementById('matches-display');
        display.innerHTML = matches.map(match => 
            `<div class="match-pair">Conexión: ${match[0]} ↔ ${match[1]}</div>`
        ).join('');
    }

    saveCurrentAnswer() {
        const question = this.currentQuiz.questions[this.currentQuestion];
        let answer = null;

        switch (question.type) {
            case 'multiple-choice':
            case 'scenario':
                const selected = document.querySelector('input[name="answer"]:checked');
                answer = selected ? parseInt(selected.value) : null;
                break;
            
            case 'true-false':
                const tfSelected = document.querySelector('input[name="answer"]:checked');
                answer = tfSelected ? tfSelected.value === 'true' : null;
                break;
            
            case 'fill-blank':
                const blanks = document.querySelectorAll('.fill-blank');
                answer = Array.from(blanks).map(blank => blank.value.trim().toLowerCase());
                break;
            
            case 'calculation':
                const calcInput = document.getElementById('calculation-answer');
                answer = calcInput ? parseFloat(calcInput.value) : null;
                break;
            
            case 'drag-drop':
                const dropZones = document.querySelectorAll('.drop-zone');
                answer = Array.from(dropZones).map(zone => 
                    zone.dataset.itemIndex ? parseInt(zone.dataset.itemIndex) : null
                );
                break;
            
            case 'portfolio-builder':
                const sliders = document.querySelectorAll('.allocation-slider');
                answer = Array.from(sliders).map(slider => parseInt(slider.value));
                break;
        }

        this.answers[this.currentQuestion] = answer;
    }

    finishQuiz() {
        this.saveCurrentAnswer();
        const results = this.calculateResults();
        this.showResults(results);
        this.saveQuizResults(results);
    }

    calculateResults() {
        let correctAnswers = 0;
        const questionResults = [];

        this.currentQuiz.questions.forEach((question, index) => {
            const userAnswer = this.answers[index];
            let isCorrect = false;

            switch (question.type) {
                case 'multiple-choice':
                case 'scenario':
                    isCorrect = userAnswer === question.correct;
                    break;
                
                case 'true-false':
                    isCorrect = userAnswer === question.correct;
                    break;
                
                case 'fill-blank':
                    isCorrect = userAnswer && question.blanks.every((blank, i) => 
                        userAnswer[i] && userAnswer[i].includes(blank.toLowerCase())
                    );
                    break;
                
                case 'calculation':
                    isCorrect = userAnswer !== null && 
                        Math.abs(userAnswer - question.answer) <= (question.tolerance || 0);
                    break;
                
                case 'drag-drop':
                    isCorrect = userAnswer && 
                        JSON.stringify(userAnswer) === JSON.stringify(question.correctOrder);
                    break;
                
                case 'portfolio-builder':
                    isCorrect = userAnswer && question.targetAllocation.every((target, i) => 
                        Math.abs(userAnswer[i] - target) <= (question.tolerance || 5)
                    );
                    break;
            }

            if (isCorrect) correctAnswers++;
            
            questionResults.push({
                question: question.question,
                userAnswer,
                correctAnswer: question.correct || question.answer || question.correctOrder,
                isCorrect,
                explanation: question.explanation
            });
        });

        const percentage = Math.round((correctAnswers / this.currentQuiz.questions.length) * 100);
        const timeElapsed = Math.round((new Date() - this.timeStarted) / 1000 / 60); // minutos

        return {
            score: percentage,
            correctAnswers,
            totalQuestions: this.currentQuiz.questions.length,
            timeElapsed,
            passed: percentage >= this.currentQuiz.passingScore,
            questionResults
        };
    }

    showResults(results) {
        const container = document.getElementById('quiz-container');
        
        container.innerHTML = `
            <div class="quiz-results">
                <div class="results-header ${results.passed ? 'passed' : 'failed'}">
                    <div class="results-icon">
                        <i class="fas ${results.passed ? 'fa-trophy' : 'fa-times-circle'}"></i>
                    </div>
                    <h3>${results.passed ? '¡Felicitaciones!' : 'Necesitas estudiar más'}</h3>
                    <div class="score-display">
                        <span class="score-number">${results.score}%</span>
                        <span class="score-details">${results.correctAnswers} de ${results.totalQuestions} correctas</span>
                    </div>
                </div>

                <div class="results-stats">
                    <div class="stat">
                        <i class="fas fa-clock"></i>
                        <span>Tiempo: ${results.timeElapsed} minutos</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-target"></i>
                        <span>Requerido: ${this.currentQuiz.passingScore}%</span>
                    </div>
                </div>

                <div class="results-breakdown">
                    <h4>Revisión de respuestas:</h4>
                    ${results.questionResults.map((result, index) => `
                        <div class="question-result ${result.isCorrect ? 'correct' : 'incorrect'}">
                            <div class="question-header">
                                <span class="question-number">Pregunta ${index + 1}</span>
                                <i class="fas ${result.isCorrect ? 'fa-check' : 'fa-times'}"></i>
                            </div>
                            <p class="question-text">${result.question}</p>
                            <div class="explanation">
                                <strong>Explicación:</strong> ${result.explanation}
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="results-actions">
                    ${!results.passed ? `
                        <button class="btn-retry" onclick="quizSystem.retakeQuiz()">
                            <i class="fas fa-redo"></i> Reintentar
                        </button>
                    ` : ''}
                    <button class="btn-continue" onclick="quizSystem.returnToModule()">
                        <i class="fas fa-arrow-left"></i> Volver al módulo
                    </button>
                </div>
            </div>
        `;
    }

    startTimer() {
        const timerElement = document.getElementById('quiz-timer');
        if (!timerElement) return;

        const timeLimit = this.currentQuiz.timeLimit * 60; // convertir a segundos
        let timeRemaining = timeLimit;

        const timer = setInterval(() => {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            
            timerElement.innerHTML = `
                <i class="fas fa-clock"></i>
                ${minutes}:${seconds.toString().padStart(2, '0')}
            `;

            if (timeRemaining <= 300) { // 5 minutos restantes
                timerElement.classList.add('warning');
            }
            
            if (timeRemaining <= 60) { // 1 minuto restante
                timerElement.classList.add('critical');
            }

            if (timeRemaining <= 0) {
                clearInterval(timer);
                this.finishQuiz();
            }

            timeRemaining--;
        }, 1000);

        // Guardar referencia del timer para poder limpiarlo
        this.currentTimer = timer;
    }

    retakeQuiz() {
        if (this.currentTimer) {
            clearInterval(this.currentTimer);
        }
        this.startQuiz(this.getCurrentModuleId());
    }

    returnToModule() {
        if (this.currentTimer) {
            clearInterval(this.currentTimer);
        }
        document.getElementById('quiz-container').innerHTML = '';
        // Lógica para volver al módulo actual
    }

    saveQuizResults(results) {
        const quizHistory = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        
        quizHistory.push({
            moduleId: this.getCurrentModuleId(),
            timestamp: new Date().toISOString(),
            score: results.score,
            passed: results.passed,
            timeElapsed: results.timeElapsed
        });

        localStorage.setItem('quizHistory', JSON.stringify(quizHistory));
        
        // Actualizar progreso del curso
        this.updateCourseProgress(results);
    }

    updateCourseProgress(results) {
        const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
        const moduleId = this.getCurrentModuleId();
        
        if (!progress[moduleId]) {
            progress[moduleId] = {};
        }
        
        progress[moduleId].quizCompleted = true;
        progress[moduleId].quizPassed = results.passed;
        progress[moduleId].bestScore = Math.max(
            progress[moduleId].bestScore || 0, 
            results.score
        );
        
        localStorage.setItem('courseProgress', JSON.stringify(progress));
        
        // Disparar evento para actualizar UI
        window.dispatchEvent(new CustomEvent('progressUpdated', { 
            detail: { moduleId, progress: progress[moduleId] } 
        }));
    }

    getCurrentModuleId() {
        // Lógica para determinar el módulo actual
        return window.currentModule || 'module1';
    }

    getQuizHistory() {
        return JSON.parse(localStorage.getItem('quizHistory') || '[]');
    }

    getModuleProgress(moduleId) {
        const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
        return progress[moduleId] || {};
    }
}

// Inicializar sistema de quizzes
const quizSystem = new QuizSystem();

// Exportar para uso global
window.quizSystem = quizSystem;

