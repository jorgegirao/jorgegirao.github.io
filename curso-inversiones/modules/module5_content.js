// Module 5: Historia de los Mercados y Casos Reales
const module5Content = {
    id: 5,
    title: 'Historia de los Mercados y Casos Reales',
    sections: {
        section1: {
            title: 'Historia de los Mercados Financieros',
            content: `
                <div class="content-section">
                    <h3>Historia de los Mercados Financieros</h3>
                    
                    <div class="intro-analogy">
                        <p>Imagina que los mercados financieros son como un río que ha estado fluyendo durante siglos. A veces es tranquilo y predecible, otras veces se convierte en rápidos turbulentos que arrastran todo a su paso. Pero siempre, siempre sigue fluyendo hacia adelante.</p>
                        
                        <p>Para navegar este río exitosamente, necesitas entender su historia: dónde han estado las rocas peligrosas, cuándo han ocurrido las inundaciones más grandes, y cómo otros navegantes han sobrevivido y prosperado a lo largo del tiempo.</p>
                        
                        <p>La historia de los mercados financieros no es solo una colección de fechas y números - es la historia de la humanidad: nuestros miedos, nuestra codicia, nuestros sueños, y nuestra increíble capacidad para innovar y adaptarnos.</p>
                    </div>

                    <div class="timeline-overview">
                        <h4><i class="fas fa-clock"></i> Línea de tiempo de los mercados financieros</h4>
                        
                        <div class="timeline">
                            <div class="timeline-period ancient">
                                <div class="period-header">
                                    <i class="fas fa-landmark"></i>
                                    <h5>Orígenes Antiguos (3000 AC - 1600 DC)</h5>
                                </div>
                                <div class="period-content">
                                    <div class="milestone">
                                        <strong>3000 AC - Mesopotamia:</strong> Primeros contratos de préstamo en tablillas de arcilla
                                    </div>
                                    <div class="milestone">
                                        <strong>2000 AC - Babilonia:</strong> Código de Hammurabi regula préstamos e intereses
                                    </div>
                                    <div class="milestone">
                                        <strong>600 AC - Grecia:</strong> Primeras monedas acuñadas, facilitando el comercio
                                    </div>
                                    <div class="milestone">
                                        <strong>1200s - Italia:</strong> Bancos medievales en Florencia y Venecia
                                    </div>
                                    <div class="milestone">
                                        <strong>1602 - Holanda:</strong> Compañía Holandesa de las Indias Orientales, primera empresa pública
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-period early-modern">
                                <div class="period-header">
                                    <i class="fas fa-ship"></i>
                                    <h5>Era Moderna Temprana (1600-1800)</h5>
                                </div>
                                <div class="period-content">
                                    <div class="milestone">
                                        <strong>1611:</strong> Bolsa de Ámsterdam, primer mercado de valores organizado
                                    </div>
                                    <div class="milestone">
                                        <strong>1637:</strong> Tulipomanía en Holanda - primera burbuja especulativa documentada
                                    </div>
                                    <div class="milestone">
                                        <strong>1694:</strong> Banco de Inglaterra, primer banco central moderno
                                    </div>
                                    <div class="milestone">
                                        <strong>1720:</strong> Burbuja del Mar del Sur en Inglaterra
                                    </div>
                                    <div class="milestone">
                                        <strong>1792:</strong> Acuerdo de Buttonwood - origen de la Bolsa de Nueva York
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-period industrial">
                                <div class="period-header">
                                    <i class="fas fa-cogs"></i>
                                    <h5>Era Industrial (1800-1900)</h5>
                                </div>
                                <div class="period-content">
                                    <div class="milestone">
                                        <strong>1817:</strong> NYSE se formaliza con constitución escrita
                                    </div>
                                    <div class="milestone">
                                        <strong>1844:</strong> Primer telégrafo conecta mercados distantes
                                    </div>
                                    <div class="milestone">
                                        <strong>1869:</strong> Pánico de oro del "Viernes Negro"
                                    </div>
                                    <div class="milestone">
                                        <strong>1884:</strong> Charles Dow crea el primer índice bursátil
                                    </div>
                                    <div class="milestone">
                                        <strong>1896:</strong> Dow Jones Industrial Average con 12 empresas
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-period modern">
                                <div class="period-header">
                                    <i class="fas fa-chart-line"></i>
                                    <h5>Era Moderna (1900-2000)</h5>
                                </div>
                                <div class="period-content">
                                    <div class="milestone">
                                        <strong>1929:</strong> Gran Depresión - crash más famoso de la historia
                                    </div>
                                    <div class="milestone">
                                        <strong>1934:</strong> SEC creada para regular mercados
                                    </div>
                                    <div class="milestone">
                                        <strong>1952:</strong> Harry Markowitz publica teoría moderna de portafolios
                                    </div>
                                    <div class="milestone">
                                        <strong>1971:</strong> NASDAQ, primer mercado electrónico
                                    </div>
                                    <div class="milestone">
                                        <strong>1973:</strong> Modelo Black-Scholes para opciones
                                    </div>
                                    <div class="milestone">
                                        <strong>1975:</strong> Primeros fondos indexados (Vanguard)
                                    </div>
                                    <div class="milestone">
                                        <strong>1987:</strong> "Lunes Negro" - caída de 22% en un día
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-period digital">
                                <div class="period-header">
                                    <i class="fas fa-laptop"></i>
                                    <h5>Era Digital (2000-presente)</h5>
                                </div>
                                <div class="period-content">
                                    <div class="milestone">
                                        <strong>2000-2002:</strong> Burbuja dot-com
                                    </div>
                                    <div class="milestone">
                                        <strong>2008:</strong> Crisis financiera global
                                    </div>
                                    <div class="milestone">
                                        <strong>2009:</strong> Bitcoin - primera criptomoneda
                                    </div>
                                    <div class="milestone">
                                        <strong>2010:</strong> "Flash Crash" - algoritmos causan caída instantánea
                                    </div>
                                    <div class="milestone">
                                        <strong>2020:</strong> Pandemia COVID-19 y respuesta sin precedentes
                                    </div>
                                    <div class="milestone">
                                        <strong>2021:</strong> Fenómeno GameStop y "meme stocks"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="key-innovations">
                        <h4><i class="fas fa-lightbulb"></i> Innovaciones que cambiaron los mercados</h4>
                        
                        <div class="innovation joint-stock">
                            <h5><i class="fas fa-handshake"></i> Sociedades Anónimas (Joint-Stock Companies)</h5>
                            <div class="innovation-content">
                                <div class="innovation-story">
                                    <p><strong>El problema:</strong> En el siglo XVII, los viajes comerciales a Asia eran extremadamente costosos y riesgosos. Un solo barco podía costar más de lo que cualquier individuo podía permitirse, y si se hundía, la pérdida era total.</p>
                                    
                                    <p><strong>La solución:</strong> La Compañía Holandesa de las Indias Orientales (VOC) en 1602 permitió que múltiples inversionistas compraran "acciones" de la empresa. Si un barco se hundía, la pérdida se repartía entre todos.</p>
                                </div>
                                
                                <div class="innovation-impact">
                                    <h6>Impacto revolucionario:</h6>
                                    <ul>
                                        <li><strong>Democratización del capital:</strong> Personas comunes podían invertir en grandes empresas</li>
                                        <li><strong>Diversificación del riesgo:</strong> Un inversionista podía tener acciones en múltiples barcos</li>
                                        <li><strong>Liquidez:</strong> Las acciones podían venderse a otros inversionistas</li>
                                        <li><strong>Crecimiento económico:</strong> Permitió financiar proyectos masivos</li>
                                    </ul>
                                </div>
                                
                                <div class="innovation-legacy">
                                    <p><strong>Legado moderno:</strong> Todas las empresas públicas actuales (Apple, Microsoft, Tesla) son descendientes directos de esta innovación de hace 400 años.</p>
                                </div>
                            </div>
                        </div>

                        <div class="innovation central-banking">
                            <h5><i class="fas fa-university"></i> Banca Central</h5>
                            <div class="innovation-content">
                                <div class="innovation-story">
                                    <p><strong>El problema:</strong> En el siglo XVII, Inglaterra necesitaba financiar guerras costosas pero no tenía un sistema confiable de crédito. Los bancos privados eran inestables y las crisis bancarias eran frecuentes.</p>
                                    
                                    <p><strong>La solución:</strong> El Banco de Inglaterra (1694) se convirtió en el "banco de los bancos", prestando al gobierno y regulando el sistema monetario.</p>
                                </div>
                                
                                <div class="innovation-evolution">
                                    <h6>Evolución de la banca central:</h6>
                                    <div class="evolution-stage">
                                        <strong>Siglo XVIII:</strong> Bancos centrales como prestamistas del gobierno
                                    </div>
                                    <div class="evolution-stage">
                                        <strong>Siglo XIX:</strong> Prestamistas de última instancia para bancos privados
                                    </div>
                                    <div class="evolution-stage">
                                        <strong>Siglo XX:</strong> Controladores de política monetaria e inflación
                                    </div>
                                    <div class="evolution-stage">
                                        <strong>Siglo XXI:</strong> Estabilizadores de crisis sistémicas globales
                                    </div>
                                </div>
                                
                                <div class="modern-central-banks">
                                    <h6>Bancos centrales modernos clave:</h6>
                                    <ul>
                                        <li><strong>Federal Reserve (Fed):</strong> Controla el dólar, moneda de reserva mundial</li>
                                        <li><strong>Banco Central Europeo (BCE):</strong> Gestiona el euro para 19 países</li>
                                        <li><strong>Banco de Japón (BoJ):</strong> Pionero en tasas negativas y QE</li>
                                        <li><strong>Banco Popular de China (PBoC):</strong> Controla la segunda economía mundial</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="innovation portfolio-theory">
                            <h5><i class="fas fa-chart-pie"></i> Teoría Moderna de Portafolios</h5>
                            <div class="innovation-content">
                                <div class="innovation-story">
                                    <p><strong>El problema:</strong> Hasta 1950, la inversión era más arte que ciencia. Los inversionistas elegían acciones basándose en intuición, rumores o análisis superficial.</p>
                                    
                                    <p><strong>La solución:</strong> Harry Markowitz (1952) demostró matemáticamente que la diversificación podía reducir riesgo sin sacrificar rendimiento esperado.</p>
                                </div>
                                
                                <div class="markowitz-insight">
                                    <h6>El insight revolucionario de Markowitz:</h6>
                                    <div class="insight-explanation">
                                        <p>No importa solo qué tan buena es cada inversión individual, sino cómo se correlacionan entre sí. Dos inversiones mediocres que se mueven en direcciones opuestas pueden crear un portafolio superior a dos inversiones excelentes que se mueven juntas.</p>
                                    </div>
                                    
                                    <div class="mathematical-foundation">
                                        <strong>Fundamento matemático:</strong>
                                        <p>Riesgo del portafolio = √(w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ₁₂)</p>
                                        <p>Donde ρ₁₂ es la correlación entre activos. Si ρ₁₂ < 1, el riesgo total es menor que la suma de riesgos individuales.</p>
                                    </div>
                                </div>
                                
                                <div class="modern-applications">
                                    <h6>Aplicaciones modernas:</h6>
                                    <ul>
                                        <li><strong>Fondos indexados:</strong> Diversificación instantánea y de bajo costo</li>
                                        <li><strong>ETFs:</strong> Implementación práctica de la teoría de Markowitz</li>
                                        <li><strong>Robo-advisors:</strong> Algoritmos que optimizan portafolios automáticamente</li>
                                        <li><strong>Risk parity:</strong> Estrategias que igualan contribución de riesgo</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="innovation electronic-trading">
                            <h5><i class="fas fa-computer"></i> Trading Electrónico</h5>
                            <div class="innovation-content">
                                <div class="innovation-story">
                                    <p><strong>El problema:</strong> Hasta los 1970s, todo el trading se hacía físicamente en pisos de remate con personas gritando órdenes. Era lento, costoso y propenso a errores.</p>
                                    
                                    <p><strong>La solución:</strong> NASDAQ (1971) se convirtió en el primer mercado completamente electrónico, permitiendo trading por computadora.</p>
                                </div>
                                
                                <div class="electronic-evolution">
                                    <h6>Evolución del trading electrónico:</h6>
                                    
                                    <div class="evolution-phase">
                                        <strong>1970s-1980s:</strong> Primeros sistemas electrónicos básicos
                                        <ul>
                                            <li>NASDAQ para acciones OTC</li>
                                            <li>Sistemas de cotización en tiempo real</li>
                                            <li>Reducción de spreads bid-ask</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="evolution-phase">
                                        <strong>1990s-2000s:</strong> Internet democratiza el trading
                                        <ul>
                                            <li>Brokers online (E*Trade, Charles Schwab)</li>
                                            <li>Comisiones caen de $100+ a $10-20</li>
                                            <li>Acceso retail a mercados globales</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="evolution-phase">
                                        <strong>2000s-2010s:</strong> Algoritmos dominan los mercados
                                        <ul>
                                            <li>High-frequency trading (HFT)</li>
                                            <li>Algoritmos ejecutan 70%+ del volumen</li>
                                            <li>Velocidad medida en microsegundos</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="evolution-phase">
                                        <strong>2010s-presente:</strong> Trading móvil y democratización
                                        <ul>
                                            <li>Apps como Robinhood eliminan comisiones</li>
                                            <li>Trading desde smartphones</li>
                                            <li>Acceso a mercados 24/7</li>
                                            <li>Fractional shares y micro-inversiones</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="electronic-impact">
                                    <h6>Impacto en los mercados:</h6>
                                    <div class="impact-positive">
                                        <strong>✅ Beneficios:</strong>
                                        <ul>
                                            <li>Costos de transacción 99% más bajos</li>
                                            <li>Spreads más estrechos</li>
                                            <li>Ejecución más rápida y precisa</li>
                                            <li>Acceso global democratizado</li>
                                            <li>Mayor liquidez</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="impact-negative">
                                        <strong>⚠️ Riesgos:</strong>
                                        <ul>
                                            <li>Flash crashes por algoritmos</li>
                                            <li>Ventaja injusta para HFT</li>
                                            <li>Mayor volatilidad intraday</li>
                                            <li>Riesgo de fallas sistémicas</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="innovation derivatives">
                            <h5><i class="fas fa-layer-group"></i> Instrumentos Derivados</h5>
                            <div class="innovation-content">
                                <div class="innovation-story">
                                    <p><strong>El problema:</strong> Los agricultores no sabían qué precio recibirían por sus cosechas meses después de plantar. Los compradores no sabían qué precios pagarían. Esta incertidumbre dificultaba la planificación.</p>
                                    
                                    <p><strong>La solución:</strong> Contratos de futuros (Chicago Board of Trade, 1848) permitieron fijar precios por adelantado.</p>
                                </div>
                                
                                <div class="derivatives-evolution">
                                    <h6>Evolución de los derivados:</h6>
                                    
                                    <div class="derivative-era">
                                        <strong>1848-1900: Futuros agrícolas</strong>
                                        <ul>
                                            <li>Trigo, maíz, soja en Chicago</li>
                                            <li>Estandarización de contratos</li>
                                            <li>Cámaras de compensación</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="derivative-era">
                                        <strong>1970s: Futuros financieros</strong>
                                        <ul>
                                            <li>Futuros de divisas (1972)</li>
                                            <li>Futuros de tasas de interés (1975)</li>
                                            <li>Futuros de índices bursátiles (1982)</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="derivative-era">
                                        <strong>1973: Revolución de opciones</strong>
                                        <ul>
                                            <li>Chicago Board Options Exchange (CBOE)</li>
                                            <li>Modelo Black-Scholes para pricing</li>
                                            <li>Opciones estandarizadas y líquidas</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="derivative-era">
                                        <strong>1980s-2000s: Derivados OTC</strong>
                                        <ul>
                                            <li>Swaps de tasas de interés</li>
                                            <li>Credit default swaps (CDS)</li>
                                            <li>Productos estructurados complejos</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="derivatives-impact">
                                    <h6>Impacto dual de los derivados:</h6>
                                    
                                    <div class="positive-impact">
                                        <strong>🛡️ Gestión de riesgo:</strong>
                                        <ul>
                                            <li>Agricultores pueden asegurar precios</li>
                                            <li>Aerolíneas pueden fijar costos de combustible</li>
                                            <li>Bancos pueden gestionar riesgo de tasas</li>
                                            <li>Inversionistas pueden proteger portafolios</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="negative-impact">
                                        <strong>⚠️ Amplificación de riesgo:</strong>
                                        <ul>
                                            <li>Apalancamiento extremo (100:1 o más)</li>
                                            <li>Riesgo de contraparte</li>
                                            <li>Complejidad que oculta riesgos</li>
                                            <li>Contribución a crisis sistémicas</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="derivatives-crisis">
                                    <h6>Derivados y la Crisis 2008:</h6>
                                    <p>Los derivados de crédito (CDOs, CDS) amplificaron la crisis hipotecaria subprime, convirtiendo un problema de bienes raíces estadounidense en una crisis financiera global. Warren Buffett los llamó "armas de destrucción masiva financiera".</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="market-structure-evolution">
                        <h4><i class="fas fa-building"></i> Evolución de la estructura de mercados</h4>
                        
                        <div class="structure-timeline">
                            <div class="structure-era physical">
                                <h5><i class="fas fa-users"></i> Era Física (1792-1970)</h5>
                                <div class="era-characteristics">
                                    <div class="characteristic">
                                        <strong>Ubicación:</strong> Pisos de remate físicos (NYSE, LSE)
                                    </div>
                                    <div class="characteristic">
                                        <strong>Participantes:</strong> Especialistas y market makers humanos
                                    </div>
                                    <div class="characteristic">
                                        <strong>Comunicación:</strong> Gritos, señales de mano, teléfonos
                                    </div>
                                    <div class="characteristic">
                                        <strong>Velocidad:</strong> Minutos a horas para ejecutar órdenes
                                    </div>
                                    <div class="characteristic">
                                        <strong>Costos:</strong> Comisiones altas ($100+ por trade)
                                    </div>
                                    <div class="characteristic">
                                        <strong>Acceso:</strong> Limitado a instituciones y ricos
                                    </div>
                                </div>
                                
                                <div class="era-example">
                                    <strong>Ejemplo típico (1960):</strong>
                                    <p>Un inversionista llama a su broker, quien llama al piso de NYSE, donde un especialista ejecuta manualmente la orden. El proceso toma 30+ minutos y cuesta $50-100 en comisiones.</p>
                                </div>
                            </div>

                            <div class="structure-era electronic">
                                <h5><i class="fas fa-desktop"></i> Era Electrónica Temprana (1970-2000)</h5>
                                <div class="era-characteristics">
                                    <div class="characteristic">
                                        <strong>Ubicación:</strong> Sistemas computarizados (NASDAQ)
                                    </div>
                                    <div class="characteristic">
                                        <strong>Participantes:</strong> Market makers electrónicos
                                    </div>
                                    <div class="characteristic">
                                        <strong>Comunicación:</strong> Redes de computadoras
                                    </div>
                                    <div class="characteristic">
                                        <strong>Velocidad:</strong> Segundos a minutos
                                    </div>
                                    <div class="characteristic">
                                        <strong>Costos:</strong> Comisiones moderadas ($20-50)
                                    </div>
                                    <div class="characteristic">
                                        <strong>Acceso:</strong> Expansión a inversionistas retail
                                    </div>
                                </div>
                                
                                <div class="era-innovations">
                                    <strong>Innovaciones clave:</strong>
                                    <ul>
                                        <li>NASDAQ (1971): Primer mercado totalmente electrónico</li>
                                        <li>Sistemas de routing automático</li>
                                        <li>Pantallas de cotización en tiempo real</li>
                                        <li>Primeros brokers online (1990s)</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="structure-era internet">
                                <h5><i class="fas fa-globe"></i> Era Internet (2000-2010)</h5>
                                <div class="era-characteristics">
                                    <div class="characteristic">
                                        <strong>Ubicación:</strong> Múltiples centros de datos
                                    </div>
                                    <div class="characteristic">
                                        <strong>Participantes:</strong> ECNs, dark pools, algoritmos
                                    </div>
                                    <div class="characteristic">
                                        <strong>Comunicación:</strong> Internet de alta velocidad
                                    </div>
                                    <div class="characteristic">
                                        <strong>Velocidad:</strong> Milisegundos
                                    </div>
                                    <div class="characteristic">
                                        <strong>Costos:</strong> Comisiones bajas ($5-15)
                                    </div>
                                    <div class="characteristic">
                                        <strong>Acceso:</strong> Democratización masiva
                                    </div>
                                </div>
                                
                                <div class="era-changes">
                                    <strong>Cambios fundamentales:</strong>
                                    <ul>
                                        <li><strong>Fragmentación:</strong> Múltiples venues compiten</li>
                                        <li><strong>Regulación NMS:</strong> Mejor ejecución obligatoria</li>
                                        <li><strong>Decimalization:</strong> Spreads más estrechos</li>
                                        <li><strong>Algorithmic trading:</strong> Computadoras dominan</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="structure-era modern">
                                <h5><i class="fas fa-rocket"></i> Era Moderna (2010-presente)</h5>
                                <div class="era-characteristics">
                                    <div class="characteristic">
                                        <strong>Ubicación:</strong> Centros de datos co-localizados
                                    </div>
                                    <div class="characteristic">
                                        <strong>Participantes:</strong> HFT, AI, retail masivo
                                    </div>
                                    <div class="characteristic">
                                        <strong>Comunicación:</strong> Fibra óptica, microondas
                                    </div>
                                    <div class="characteristic">
                                        <strong>Velocidad:</strong> Microsegundos, nanosegundos
                                    </div>
                                    <div class="characteristic">
                                        <strong>Costos:</strong> Comisiones cero
                                    </div>
                                    <div class="characteristic">
                                        <strong>Acceso:</strong> Universal vía smartphones
                                    </div>
                                </div>
                                
                                <div class="era-features">
                                    <strong>Características actuales:</strong>
                                    <ul>
                                        <li><strong>HFT dominance:</strong> 50-70% del volumen</li>
                                        <li><strong>Zero commissions:</strong> Robinhood disrupts</li>
                                        <li><strong>Mobile trading:</strong> Inversión desde el teléfono</li>
                                        <li><strong>Social trading:</strong> Reddit, Discord influencian mercados</li>
                                        <li><strong>Fractional shares:</strong> Acceso a acciones caras</li>
                                        <li><strong>24/7 markets:</strong> Crypto nunca cierra</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="regulatory-evolution">
                        <h4><i class="fas fa-gavel"></i> Evolución regulatoria</h4>
                        
                        <div class="regulatory-timeline">
                            <div class="regulatory-period pre-regulation">
                                <h5><i class="fas fa-exclamation-triangle"></i> Era Pre-Regulación (1792-1929)</h5>
                                <div class="period-description">
                                    <p><strong>Filosofía:</strong> "Laissez-faire" - mínima intervención gubernamental</p>
                                    
                                    <div class="period-problems">
                                        <strong>Problemas resultantes:</strong>
                                        <ul>
                                            <li><strong>Manipulación rampante:</strong> "Pump and dump" schemes</li>
                                            <li><strong>Información asimétrica:</strong> Insiders vs. público</li>
                                            <li><strong>Pánicos bancarios:</strong> Corridas sin protección</li>
                                            <li><strong>Monopolios:</strong> Trusts controlan industrias</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="famous-manipulations">
                                        <strong>Manipulaciones famosas:</strong>
                                        <ul>
                                            <li><strong>Jay Gould (1869):</strong> Intentó acaparar todo el oro de EE.UU.</li>
                                            <li><strong>Pools de acciones:</strong> Grupos coordinados manipulaban precios</li>
                                            <li><strong>"Watered stock":</strong> Emisión de acciones sin valor real</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="regulatory-period new-deal">
                                <h5><i class="fas fa-shield-alt"></i> Era New Deal (1933-1940)</h5>
                                <div class="period-description">
                                    <p><strong>Catalizador:</strong> Gran Depresión expone fallas sistémicas</p>
                                    
                                    <div class="major-legislation">
                                        <strong>Legislación clave:</strong>
                                        
                                        <div class="legislation">
                                            <h6>Securities Act of 1933</h6>
                                            <ul>
                                                <li>Requiere registro de nuevas emisiones</li>
                                                <li>Disclosure obligatorio de información material</li>
                                                <li>Responsabilidad civil por información falsa</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="legislation">
                                            <h6>Securities Exchange Act of 1934</h6>
                                            <ul>
                                                <li>Crea la SEC (Securities and Exchange Commission)</li>
                                                <li>Regula mercados secundarios</li>
                                                <li>Prohíbe manipulación e insider trading</li>
                                                <li>Requiere reportes periódicos de empresas públicas</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="legislation">
                                            <h6>Glass-Steagall Act (1933)</h6>
                                            <ul>
                                                <li>Separa banca comercial de banca de inversión</li>
                                                <li>Crea FDIC (seguro de depósitos)</li>
                                                <li>Previene conflictos de interés</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="regulatory-period modern-expansion">
                                <h5><i class="fas fa-expand-arrows-alt"></i> Expansión Moderna (1960-2000)</h5>
                                <div class="period-description">
                                    <div class="regulatory-waves">
                                        <div class="wave">
                                            <strong>1960s-1970s: Protección al inversionista</strong>
                                            <ul>
                                                <li><strong>Investment Company Act (1940):</strong> Regula fondos mutuos</li>
                                                <li><strong>ERISA (1974):</strong> Protege pensiones de empleados</li>
                                                <li><strong>CFTC (1974):</strong> Regula futuros y commodities</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="wave">
                                            <strong>1980s-1990s: Desregulación y competencia</strong>
                                            <ul>
                                                <li><strong>May Day (1975):</strong> Fin de comisiones fijas</li>
                                                <li><strong>Shelf Registration (1982):</strong> Emisiones más eficientes</li>
                                                <li><strong>NSMIA (1996):</strong> Clarifica jurisdicciones federal/estatal</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="regulatory-period post-crisis">
                                <h5><i class="fas fa-hammer"></i> Era Post-Crisis (2008-presente)</h5>
                                <div class="period-description">
                                    <p><strong>Catalizador:</strong> Crisis financiera 2008 revela nuevas vulnerabilidades</p>
                                    
                                    <div class="post-crisis-reforms">
                                        <div class="reform dodd-frank">
                                            <h6>Dodd-Frank Act (2010)</h6>
                                            <ul>
                                                <li><strong>Volcker Rule:</strong> Limita proprietary trading de bancos</li>
                                                <li><strong>CFPB:</strong> Protege consumidores financieros</li>
                                                <li><strong>Stress tests:</strong> Bancos deben pasar pruebas de estrés</li>
                                                <li><strong>SIFI designation:</strong> Supervisión especial para instituciones sistémicas</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="reform basel-iii">
                                            <h6>Basel III (2010-2019)</h6>
                                            <ul>
                                                <li>Mayores requerimientos de capital</li>
                                                <li>Ratios de liquidez obligatorios</li>
                                                <li>Límites al apalancamiento</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="reform mifid-ii">
                                            <h6>MiFID II (Europa, 2018)</h6>
                                            <ul>
                                                <li>Mayor transparencia en costos</li>
                                                <li>Mejor protección al inversionista retail</li>
                                                <li>Regulación de dark pools</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="regulatory-challenges">
                            <h5><i class="fas fa-question-circle"></i> Desafíos regulatorios actuales</h5>
                            
                            <div class="challenge crypto">
                                <h6><i class="fas fa-coins"></i> Criptomonedas</h6>
                                <div class="challenge-description">
                                    <p><strong>Problema:</strong> Activos digitales descentralizados no encajan en marcos regulatorios tradicionales</p>
                                    <div class="regulatory-questions">
                                        <ul>
                                            <li>¿Son securities, commodities, o una nueva clase de activo?</li>
                                            <li>¿Cómo regular exchanges descentralizados?</li>
                                            <li>¿Cómo prevenir lavado de dinero sin KYC tradicional?</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="challenge ai-trading">
                                <h6><i class="fas fa-robot"></i> AI y Algorithmic Trading</h6>
                                <div class="challenge-description">
                                    <p><strong>Problema:</strong> Algoritmos de IA pueden crear riesgos sistémicos impredecibles</p>
                                    <div class="regulatory-questions">
                                        <ul>
                                            <li>¿Cómo auditar algoritmos de "black box"?</li>
                                            <li>¿Quién es responsable por decisiones de IA?</li>
                                            <li>¿Cómo prevenir flash crashes algorítmicos?</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="challenge social-media">
                                <h6><i class="fas fa-share-alt"></i> Social Media y Mercados</h6>
                                <div class="challenge-description">
                                    <p><strong>Problema:</strong> Redes sociales pueden mover mercados instantáneamente</p>
                                    <div class="regulatory-questions">
                                        <ul>
                                            <li>¿Cómo regular "meme stocks" y coordinación retail?</li>
                                            <li>¿Son tweets de influencers manipulación de mercado?</li>
                                            <li>¿Cómo proteger a inversionistas novatos?</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="globalization-impact">
                        <h4><i class="fas fa-globe-americas"></i> Globalización de los mercados</h4>
                        
                        <div class="globalization-timeline">
                            <div class="global-era bretton-woods">
                                <h5><i class="fas fa-handshake"></i> Sistema Bretton Woods (1944-1971)</h5>
                                <div class="era-content">
                                    <p><strong>Establecimiento:</strong> 44 países crean nuevo orden monetario internacional</p>
                                    
                                    <div class="bretton-woods-features">
                                        <strong>Características clave:</strong>
                                        <ul>
                                            <li><strong>Dólar como ancla:</strong> Todas las monedas fijas al dólar</li>
                                            <li><strong>Dólar respaldado por oro:</strong> $35 por onza</li>
                                            <li><strong>FMI y Banco Mundial:</strong> Instituciones de estabilidad</li>
                                            <li><strong>Controles de capital:</strong> Flujos internacionales limitados</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="bretton-woods-collapse">
                                        <strong>Colapso (1971):</strong>
                                        <p>Nixon termina convertibilidad oro-dólar debido a déficits crecientes y presión sobre reservas de oro de EE.UU.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="global-era floating-rates">
                                <h5><i class="fas fa-water"></i> Era de Tipos de Cambio Flotantes (1971-presente)</h5>
                                <div class="era-content">
                                    <div class="floating-consequences">
                                        <strong>Consecuencias del sistema flotante:</strong>
                                        <ul>
                                            <li><strong>Volatilidad cambiaria:</strong> Nuevos riesgos para comercio internacional</li>
                                            <li><strong>Mercados de divisas:</strong> Se convierten en los más grandes del mundo</li>
                                            <li><strong>Petrodólares:</strong> Crisis del petróleo crea flujos masivos de capital</li>
                                            <li><strong>Eurodólares:</strong> Dólares depositados fuera de EE.UU.</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="capital-liberalization">
                                        <h6>Liberalización de capitales (1980s-1990s):</h6>
                                        <ul>
                                            <li><strong>Reino Unido (1979):</strong> Elimina controles de cambio</li>
                                            <li><strong>Japón (1980s):</strong> Liberaliza mercados financieros</li>
                                            <li><strong>Mercados emergentes (1990s):</strong> Abren a inversión extranjera</li>
                                            <li><strong>Unión Europea (1990s):</strong> Mercado único de capitales</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="global-era modern-integration">
                                <h5><i class="fas fa-network-wired"></i> Integración Moderna (2000-presente)</h5>
                                <div class="era-content">
                                    <div class="integration-drivers">
                                        <strong>Impulsores de integración:</strong>
                                        <ul>
                                            <li><strong>Tecnología:</strong> Internet permite trading global 24/7</li>
                                            <li><strong>ETFs internacionales:</strong> Acceso fácil a mercados extranjeros</li>
                                            <li><strong>Regulación armonizada:</strong> Estándares internacionales (Basel, IFRS)</li>
                                            <li><strong>Instituciones globales:</strong> Fondos soberanos, pension funds</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="global-correlations">
                                        <h6>Aumento de correlaciones:</h6>
                                        <p>Los mercados globales se mueven cada vez más juntos, especialmente durante crisis. La diversificación geográfica es menos efectiva que antes.</p>
                                        
                                        <div class="correlation-examples">
                                            <strong>Ejemplos de contagio:</strong>
                                            <ul>
                                                <li><strong>Crisis asiática (1997):</strong> Tailandia → toda Asia → Rusia → Brasil</li>
                                                <li><strong>Crisis subprime (2008):</strong> EE.UU. → Europa → mundo entero</li>
                                                <li><strong>COVID-19 (2020):</strong> Caída sincronizada global en marzo</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="major-global-markets">
                            <h5><i class="fas fa-map-marked-alt"></i> Principales mercados globales</h5>
                            
                            <div class="market-regions">
                                <div class="region americas">
                                    <h6><i class="fas fa-flag-usa"></i> Américas</h6>
                                    <div class="region-markets">
                                        <div class="market usa">
                                            <strong>Estados Unidos:</strong>
                                            <ul>
                                                <li>NYSE: $25+ trillones en capitalización</li>
                                                <li>NASDAQ: Líder en tecnología</li>
                                                <li>40%+ de capitalización bursátil mundial</li>
                                                <li>Dólar: 60% de reservas mundiales</li>
                                            </ul>
                                        </div>
                                        <div class="market canada">
                                            <strong>Canadá (TSX):</strong> Recursos naturales, bancos
                                        </div>
                                        <div class="market brazil">
                                            <strong>Brasil (B3):</strong> Mayor mercado de Latinoamérica
                                        </div>
                                        <div class="market mexico">
                                            <strong>México (BMV):</strong> Gateway a Latinoamérica
                                        </div>
                                    </div>
                                </div>

                                <div class="region europe">
                                    <h6><i class="fas fa-flag"></i> Europa</h6>
                                    <div class="region-markets">
                                        <div class="market uk">
                                            <strong>Reino Unido (LSE):</strong>
                                            <ul>
                                                <li>Centro financiero global</li>
                                                <li>Mercado de divisas más grande</li>
                                                <li>Hub para mercados emergentes</li>
                                            </ul>
                                        </div>
                                        <div class="market germany">
                                            <strong>Alemania (Xetra):</strong> Manufactura, exportación
                                        </div>
                                        <div class="market france">
                                            <strong>Francia (Euronext):</strong> Lujo, energía, telecoms
                                        </div>
                                        <div class="market switzerland">
                                            <strong>Suiza (SIX):</strong> Banca privada, farmacéuticas
                                        </div>
                                    </div>
                                </div>

                                <div class="region asia-pacific">
                                    <h6><i class="fas fa-yin-yang"></i> Asia-Pacífico</h6>
                                    <div class="region-markets">
                                        <div class="market japan">
                                            <strong>Japón (TSE):</strong>
                                            <ul>
                                                <li>Tercer mercado más grande</li>
                                                <li>Tecnología, automotriz</li>
                                                <li>Yen: Moneda de refugio seguro</li>
                                            </ul>
                                        </div>
                                        <div class="market china">
                                            <strong>China (SSE, SZSE):</strong>
                                            <ul>
                                                <li>Segundo mercado más grande</li>
                                                <li>Acceso limitado para extranjeros</li>
                                                <li>Crecimiento económico más rápido</li>
                                            </ul>
                                        </div>
                                        <div class="market hong-kong">
                                            <strong>Hong Kong (HKEX):</strong> Gateway a China
                                        </div>
                                        <div class="market singapore">
                                            <strong>Singapur (SGX):</strong> Hub del sudeste asiático
                                        </div>
                                        <div class="market australia">
                                            <strong>Australia (ASX):</strong> Recursos naturales, bancos
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="time-zones-trading">
                            <h5><i class="fas fa-clock"></i> Trading 24 horas: El sol nunca se pone</h5>
                            
                            <div class="trading-sessions">
                                <div class="session asian">
                                    <h6>Sesión Asiática (21:00-06:00 EST)</h6>
                                    <ul>
                                        <li><strong>Mercados principales:</strong> Tokio, Hong Kong, Singapur, Sydney</li>
                                        <li><strong>Características:</strong> Menor volatilidad, enfoque en noticias asiáticas</li>
                                        <li><strong>Pares de divisas activos:</strong> USD/JPY, AUD/USD, NZD/USD</li>
                                    </ul>
                                </div>

                                <div class="session european">
                                    <h6>Sesión Europea (02:00-12:00 EST)</h6>
                                    <ul>
                                        <li><strong>Mercados principales:</strong> Londres, Frankfurt, París, Zurich</li>
                                        <li><strong>Características:</strong> Alta liquidez, overlap con Asia y América</li>
                                        <li><strong>Pares de divisas activos:</strong> EUR/USD, GBP/USD, USD/CHF</li>
                                    </ul>
                                </div>

                                <div class="session american">
                                    <h6>Sesión Americana (08:00-17:00 EST)</h6>
                                    <ul>
                                        <li><strong>Mercados principales:</strong> Nueva York, Toronto, São Paulo</li>
                                        <li><strong>Características:</strong> Mayor volumen, noticias económicas de EE.UU.</li>
                                        <li><strong>Pares de divisas activos:</strong> Todos los pares con USD</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="overlap-periods">
                                <h6>Períodos de overlap (mayor actividad):</h6>
                                <ul>
                                    <li><strong>Asia-Europa (02:00-06:00 EST):</strong> Moderada actividad</li>
                                    <li><strong>Europa-América (08:00-12:00 EST):</strong> Máxima actividad y volatilidad</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="key-lessons">
                        <h4><i class="fas fa-graduation-cap"></i> Lecciones clave de la historia</h4>
                        
                        <div class="lesson cycles">
                            <h5><i class="fas fa-sync-alt"></i> Los mercados son cíclicos</h5>
                            <div class="lesson-content">
                                <p><strong>Patrón histórico:</strong> Expansión → Euforia → Crisis → Depresión → Recuperación</p>
                                
                                <div class="cycle-examples">
                                    <strong>Ejemplos de ciclos:</strong>
                                    <ul>
                                        <li><strong>Tulipomanía (1637):</strong> Primera burbuja especulativa documentada</li>
                                        <li><strong>Ferrocarriles (1840s):</strong> Tecnología revolucionaria → sobreinversión → crash</li>
                                        <li><strong>Dot-com (1990s):</strong> Internet → valoraciones absurdas → realidad</li>
                                        <li><strong>Bienes raíces (2000s):</strong> "Los precios nunca bajan" → 2008</li>
                                    </ul>
                                </div>
                                
                                <div class="cycle-wisdom">
                                    <strong>Sabiduría:</strong> "Esta vez es diferente" son las cuatro palabras más peligrosas en finanzas.
                                </div>
                            </div>
                        </div>

                        <div class="lesson innovation">
                            <h5><i class="fas fa-lightbulb"></i> La innovación impulsa el progreso</h5>
                            <div class="lesson-content">
                                <p>Cada innovación financiera ha democratizado el acceso al capital y mejorado la eficiencia de mercados.</p>
                                
                                <div class="innovation-progression">
                                    <ul>
                                        <li><strong>Sociedades anónimas:</strong> Permitieron grandes proyectos</li>
                                        <li><strong>Bolsas organizadas:</strong> Crearon liquidez y transparencia</li>
                                        <li><strong>Fondos mutuos:</strong> Diversificación para pequeños inversionistas</li>
                                        <li><strong>ETFs:</strong> Diversificación barata y líquida</li>
                                        <li><strong>Trading online:</strong> Eliminó intermediarios costosos</li>
                                        <li><strong>Robo-advisors:</strong> Gestión profesional automatizada</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="lesson regulation">
                            <h5><i class="fas fa-balance-scale"></i> La regulación evoluciona con las crisis</h5>
                            <div class="lesson-content">
                                <p>Cada crisis mayor ha resultado en nueva regulación para prevenir su repetición.</p>
                                
                                <div class="regulation-pattern">
                                    <div class="pattern-step">
                                        <strong>1. Crisis expone vulnerabilidades</strong>
                                    </div>
                                    <div class="pattern-arrow">→</div>
                                    <div class="pattern-step">
                                        <strong>2. Indignación pública</strong>
                                    </div>
                                    <div class="pattern-arrow">→</div>
                                    <div class="pattern-step">
                                        <strong>3. Nueva regulación</strong>
                                    </div>
                                    <div class="pattern-arrow">→</div>
                                    <div class="pattern-step">
                                        <strong>4. Período de estabilidad</strong>
                                    </div>
                                    <div class="pattern-arrow">→</div>
                                    <div class="pattern-step">
                                        <strong>5. Innovación encuentra nuevas vulnerabilidades</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="lesson resilience">
                            <h5><i class="fas fa-phoenix-rising"></i> Los mercados son resilientes</h5>
                            <div class="lesson-content">
                                <p>A pesar de guerras, pandemias, crisis y crashes, los mercados siempre se han recuperado y alcanzado nuevos máximos.</p>
                                
                                <div class="resilience-examples">
                                    <strong>Recuperaciones históricas:</strong>
                                    <ul>
                                        <li><strong>Gran Depresión:</strong> 25 años para recuperarse completamente</li>
                                        <li><strong>Segunda Guerra Mundial:</strong> Mercados subieron durante la guerra</li>
                                        <li><strong>Crisis petroleras (1970s):</strong> 7 años de recuperación</li>
                                        <li><strong>Lunes Negro (1987):</strong> 2 años de recuperación</li>
                                        <li><strong>Dot-com crash:</strong> 7 años de recuperación</li>
                                        <li><strong>Crisis 2008:</strong> 5 años de recuperación</li>
                                        <li><strong>COVID-19:</strong> 5 meses de recuperación</li>
                                    </ul>
                                </div>
                                
                                <div class="resilience-lesson">
                                    <strong>Lección:</strong> El tiempo en el mercado supera al timing del mercado.
                                </div>
                            </div>
                        </div>

                        <div class="lesson globalization">
                            <h5><i class="fas fa-globe"></i> La globalización aumenta oportunidades y riesgos</h5>
                            <div class="lesson-content">
                                <p>Los mercados globales ofrecen más oportunidades de diversificación, pero también aumentan el contagio durante crisis.</p>
                                
                                <div class="globalization-tradeoffs">
                                    <div class="tradeoff-benefits">
                                        <strong>✅ Beneficios:</strong>
                                        <ul>
                                            <li>Acceso a crecimiento global</li>
                                            <li>Diversificación geográfica</li>
                                            <li>Arbitraje de valuaciones</li>
                                            <li>Mayor liquidez</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="tradeoff-risks">
                                        <strong>⚠️ Riesgos:</strong>
                                        <ul>
                                            <li>Contagio de crisis</li>
                                            <li>Correlaciones aumentan en crisis</li>
                                            <li>Riesgo cambiario</li>
                                            <li>Complejidad regulatoria</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="future-trends">
                        <h4><i class="fas fa-crystal-ball"></i> Tendencias futuras</h4>
                        
                        <div class="trend digitalization">
                            <h5><i class="fas fa-digital-tachograph"></i> Digitalización total</h5>
                            <div class="trend-content">
                                <ul>
                                    <li><strong>CBDCs:</strong> Monedas digitales de bancos centrales</li>
                                    <li><strong>DeFi:</strong> Finanzas descentralizadas sin intermediarios</li>
                                    <li><strong>Tokenización:</strong> Activos reales como tokens digitales</li>
                                    <li><strong>AI trading:</strong> Algoritmos cada vez más sofisticados</li>
                                </ul>
                            </div>
                        </div>

                        <div class="trend sustainability">
                            <h5><i class="fas fa-leaf"></i> Inversión sostenible</h5>
                            <div class="trend-content">
                                <ul>
                                    <li><strong>ESG mainstream:</strong> Factores ambientales, sociales y de gobernanza</li>
                                    <li><strong>Climate risk:</strong> Riesgo climático en valuaciones</li>
                                    <li><strong>Green bonds:</strong> Financiamiento de proyectos sostenibles</li>
                                    <li><strong>Impact investing:</strong> Rendimiento + impacto social</li>
                                </ul>
                            </div>
                        </div>

                        <div class="trend democratization">
                            <h5><i class="fas fa-users"></i> Democratización continua</h5>
                            <div class="trend-content">
                                <ul>
                                    <li><strong>Fractional investing:</strong> Acceso a cualquier activo</li>
                                    <li><strong>Social trading:</strong> Seguir a inversionistas exitosos</li>
                                    <li><strong>Micro-investing:</strong> Invertir centavos automáticamente</li>
                                    <li><strong>Financial education:</strong> Educación financiera masiva</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="video-resources">
                        <h4><i class="fas fa-play-circle"></i> Videos recomendados</h4>
                        <div class="video-links">
                            <a href="https://www.youtube.com/watch?v=F3QpgXBtDeo" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                History of Stock Markets
                            </a>
                            <a href="https://www.youtube.com/watch?v=PHe0bXAIuk0" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                Evolution of Financial Markets
                            </a>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h4><i class="fas fa-key"></i> Puntos clave para recordar</h4>
                        <div class="takeaway-grid">
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los mercados financieros han evolucionado durante siglos, siempre adaptándose</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Cada innovación ha democratizado el acceso al capital</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Las crisis impulsan la regulación y la innovación</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los mercados son cíclicos pero resilientes a largo plazo</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>La globalización aumenta oportunidades y riesgos</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>El futuro será más digital, sostenible y democrático</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        section2: {
            title: 'Grandes Crisis y Burbujas Históricas',
            content: `
                <div class="content-section">
                    <h3>Grandes Crisis y Burbujas Históricas</h3>
                    
                    <div class="intro-analogy">
                        <p>Las crisis financieras son como los terremotos: inevitables, impredecibles en su timing exacto, pero con patrones reconocibles. Así como los geólogos estudian terremotos pasados para entender las fallas tectónicas, los inversionistas inteligentes estudian crisis pasadas para reconocer las "fallas" en los mercados.</p>
                        
                        <p>Cada crisis tiene su propia personalidad, pero todas comparten elementos comunes: euforia inicial, negación de riesgos, apalancamiento excesivo, y el inevitable momento cuando la realidad golpea como un tsunami.</p>
                        
                        <p>Estudiar estas crisis no es masoquismo financiero - es preparación. Como dijo Mark Twain: "La historia no se repite, pero rima."</p>
                    </div>

                    <div class="crisis-anatomy">
                        <h4><i class="fas fa-dna"></i> Anatomía de una crisis financiera</h4>
                        
                        <div class="crisis-stages">
                            <div class="stage displacement">
                                <div class="stage-number">1</div>
                                <div class="stage-content">
                                    <h5><i class="fas fa-rocket"></i> Displacement (Desplazamiento)</h5>
                                    <p><strong>¿Qué es?</strong> Un evento o innovación cambia las perspectivas económicas</p>
                                    <div class="stage-examples">
                                        <strong>Ejemplos:</strong>
                                        <ul>
                                            <li>Nueva tecnología (Internet, ferrocarriles)</li>
                                            <li>Cambio de política (desregulación, tasas bajas)</li>
                                            <li>Descubrimiento de recursos (oro, petróleo)</li>
                                            <li>Innovación financiera (hipotecas subprime, CDOs)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="stage boom">
                                <div class="stage-number">2</div>
                                <div class="stage-content">
                                    <h5><i class="fas fa-chart-line"></i> Boom (Auge)</h5>
                                    <p><strong>¿Qué es?</strong> Optimismo creciente impulsa precios al alza</p>
                                    <div class="stage-characteristics">
                                        <strong>Características:</strong>
                                        <ul>
                                            <li>Precios suben consistentemente</li>
                                            <li>Nuevos inversionistas entran al mercado</li>
                                            <li>Medios celebran las ganancias</li>
                                            <li>Crédito se vuelve más disponible</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="stage euphoria">
                                <div class="stage-number">3</div>
                                <div class="stage-content">
                                    <h5><i class="fas fa-star"></i> Euphoria (Euforia)</h5>
                                    <p><strong>¿Qué es?</strong> Optimismo extremo, "esta vez es diferente"</p>
                                    <div class="stage-characteristics">
                                        <strong>Señales de peligro:</strong>
                                        <ul>
                                            <li>"Los precios nunca bajarán"</li>
                                            <li>Apalancamiento extremo</li>
                                            <li>Nuevos "expertos" aparecen</li>
                                            <li>Valoraciones desconectadas de fundamentos</li>
                                            <li>FOMO (Fear of Missing Out) masivo</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="stage profit-taking">
                                <div class="stage-number">4</div>
                                <div class="stage-content">
                                    <h5><i class="fas fa-hand-holding-usd"></i> Profit Taking (Toma de ganancias)</h5>
                                    <p><strong>¿Qué es?</strong> Inversionistas sofisticados comienzan a vender</p>
                                    <div class="stage-characteristics">
                                        <strong>Señales:</strong>
                                        <ul>
                                            <li>Insiders venden acciones</li>
                                            <li>Volumen aumenta en días de caída</li>
                                            <li>Primeras grietas en la narrativa</li>
                                            <li>Algunos analistas se vuelven cautelosos</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="stage panic">
                                <div class="stage-number">5</div>
                                <div class="stage-content">
                                    <h5><i class="fas fa-exclamation-triangle"></i> Panic (Pánico)</h5>
                                    <p><strong>¿Qué es?</strong> Venta masiva, colapso de precios</p>
                                    <div class="stage-characteristics">
                                        <strong>Características:</strong>
                                        <ul>
                                            <li>Caídas de 20%+ en días</li>
                                            <li>Liquidez desaparece</li>
                                            <li>Margin calls en cascada</li>
                                            <li>Bancos dejan de prestar</li>
                                            <li>"Vender a cualquier precio"</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="minsky-moment">
                            <h5><i class="fas fa-bomb"></i> El "Minsky Moment"</h5>
                            <div class="minsky-explanation">
                                <p><strong>Concepto:</strong> Hyman Minsky describió el momento cuando el apalancamiento excesivo causa un colapso súbito de precios de activos.</p>
                                
                                <div class="minsky-stages">
                                    <div class="minsky-stage hedge">
                                        <strong>1. Hedge financing:</strong> Deudores pueden pagar principal e intereses
                                    </div>
                                    <div class="minsky-stage speculative">
                                        <strong>2. Speculative financing:</strong> Deudores solo pueden pagar intereses
                                    </div>
                                    <div class="minsky-stage ponzi">
                                        <strong>3. Ponzi financing:</strong> Deudores necesitan endeudarse más para pagar
                                    </div>
                                </div>
                                
                                <p><strong>El momento Minsky:</strong> Cuando la mayoría está en "Ponzi financing" y algo interrumpe el flujo de crédito.</p>
                            </div>
                        </div>
                    </div>

                    <div class="historical-crises">
                        <h4><i class="fas fa-history"></i> Grandes crisis históricas</h4>
                        
                        <div class="crisis tulip-mania">
                            <h5><i class="fas fa-seedling"></i> Tulipomanía (1634-1637) - La primera burbuja documentada</h5>
                            
                            <div class="crisis-context">
                                <h6>Contexto histórico:</h6>
                                <p>Holanda en el siglo XVII era la potencia comercial mundial. Los tulipanes, importados de Turquía, se volvieron símbolos de estatus entre la clase mercante próspera.</p>
                            </div>

                            <div class="crisis-development">
                                <h6>Desarrollo de la burbuja:</h6>
                                
                                <div class="timeline-crisis">
                                    <div class="crisis-event">
                                        <strong>1593:</strong> Primeros tulipanes llegan a Holanda
                                    </div>
                                    <div class="crisis-event">
                                        <strong>1634:</strong> Comienza la especulación seria
                                    </div>
                                    <div class="crisis-event">
                                        <strong>1636:</strong> Mercado de futuros de tulipanes en tabernas
                                    </div>
                                    <div class="crisis-event">
                                        <strong>Feb 1637:</strong> Colapso súbito, precios caen 99%
                                    </div>
                                </div>
                            </div>

                            <div class="crisis-peak">
                                <h6>En el pico de la locura:</h6>
                                <div class="tulip-prices">
                                    <p><strong>Un bulbo de "Semper Augustus"</strong> (la variedad más codiciada) costaba:</p>
                                    <ul>
                                        <li>10,000 florines (salario de 10 años de un artesano)</li>
                                        <li>Equivalente a una casa lujosa en Ámsterdam</li>
                                        <li>12 acres de tierra</li>
                                    </ul>
                                </div>
                                
                                <div class="famous-trade">
                                    <strong>Intercambio famoso documentado:</strong>
                                    <p>Un bulbo de "Viceroy" se intercambió por:</p>
                                    <ul>
                                        <li>2 cargas de trigo</li>
                                        <li>4 cargas de centeno</li>
                                        <li>4 bueyes gordos</li>
                                        <li>8 cerdos gordos</li>
                                        <li>12 ovejas</li>
                                        <li>2 barriles de vino</li>
                                        <li>4 barriles de cerveza</li>
                                        <li>2 barriles de mantequilla</li>
                                        <li>1,000 libras de queso</li>
                                        <li>Una cama completa</li>
                                        <li>Un traje de ropa</li>
                                        <li>Una copa de plata</li>
                                    </ul>
                                    <p><strong>Valor total:</strong> 2,500 florines</p>
                                </div>
                            </div>

                            <div class="crisis-collapse">
                                <h6>El colapso:</h6>
                                <p><strong>3 de febrero de 1637:</strong> En una subasta en Haarlem, nadie apareció a comprar. El pánico se extendió por todo el país en días.</p>
                                
                                <div class="collapse-consequences">
                                    <strong>Consecuencias:</strong>
                                    <ul>
                                        <li>Precios cayeron 99% en semanas</li>
                                        <li>Miles de contratos de futuros incumplidos</li>
                                        <li>Muchos comerciantes arruinados</li>
                                        <li>Litigios duraron años</li>
                                        <li>Gobierno declaró contratos "apuestas" (no ejecutables)</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-lessons">
                                <h6>Lecciones eternas:</h6>
                                <ul>
                                    <li><strong>Especulación vs. inversión:</strong> Cuando el precio se desconecta del valor intrínseco</li>
                                    <li><strong>FOMO es peligroso:</strong> "Todos se están haciendo ricos"</li>
                                    <li><strong>Apalancamiento amplifica:</strong> Contratos de futuros magnificaron pérdidas</li>
                                    <li><strong>Liquidez desaparece:</strong> En pánico, no hay compradores</li>
                                    <li><strong>Regulación post-crisis:</strong> Gobierno interviene después del daño</li>
                                </ul>
                            </div>
                        </div>

                        <div class="crisis south-sea">
                            <h5><i class="fas fa-ship"></i> Burbuja del Mar del Sur (1720) - Ingeniería financiera temprana</h5>
                            
                            <div class="crisis-context">
                                <h6>Contexto:</h6>
                                <p>Inglaterra tenía una deuda nacional masiva por guerras. La South Sea Company propuso una solución "innovadora": convertir deuda gubernamental en acciones de la empresa.</p>
                            </div>

                            <div class="crisis-scheme">
                                <h6>El esquema:</h6>
                                <div class="scheme-mechanics">
                                    <ol>
                                        <li><strong>Propuesta:</strong> South Sea Company compraría £30 millones de deuda nacional</li>
                                        <li><strong>A cambio:</strong> Monopolio comercial con América del Sur</li>
                                        <li><strong>Financiamiento:</strong> Emisión de nuevas acciones</li>
                                        <li><strong>Promesa:</strong> Ganancias enormes del comercio con colonias españolas</li>
                                    </ol>
                                </div>
                                
                                <div class="scheme-problems">
                                    <strong>Problemas ocultos:</strong>
                                    <ul>
                                        <li>España controlaba el comercio, no Inglaterra</li>
                                        <li>Tratados limitaban comercio a un barco por año</li>
                                        <li>Guerras frecuentes interrumpían comercio</li>
                                        <li>Ganancias reales eran mínimas</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-promotion">
                                <h6>Promoción y manipulación:</h6>
                                <div class="promotion-tactics">
                                    <ul>
                                        <li><strong>Sobornos:</strong> Políticos y nobles recibieron acciones gratis</li>
                                        <li><strong>Préstamos fáciles:</strong> Compra acciones con solo 10% de enganche</li>
                                        <li><strong>Propaganda:</strong> Historias de riquezas sudamericanas</li>
                                        <li><strong>FOMO artificial:</strong> Listas de espera "exclusivas"</li>
                                        <li><strong>Competencia:</strong> Múltiples emisiones crearon urgencia</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-peak-collapse">
                                <h6>Pico y colapso:</h6>
                                <div class="price-movement">
                                    <ul>
                                        <li><strong>Enero 1720:</strong> £128 por acción</li>
                                        <li><strong>Agosto 1720:</strong> £1,000 por acción (pico)</li>
                                        <li><strong>Diciembre 1720:</strong> £124 por acción</li>
                                        <li><strong>Caída total:</strong> 87% desde el pico</li>
                                    </ul>
                                </div>
                                
                                <div class="famous-victims">
                                    <strong>Víctimas famosas:</strong>
                                    <ul>
                                        <li><strong>Isaac Newton:</strong> Perdió £20,000 (fortuna enorme). Dijo: "Puedo calcular el movimiento de los cuerpos celestes, pero no la locura de las multitudes"</li>
                                        <li><strong>Nobles y políticos:</strong> Muchos arruinados completamente</li>
                                        <li><strong>Clase media emergente:</strong> Ahorros de vida perdidos</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-aftermath">
                                <h6>Consecuencias:</h6>
                                <ul>
                                    <li><strong>Bubble Act (1720):</strong> Prohibió sociedades anónimas sin autorización real</li>
                                    <li><strong>Investigación parlamentaria:</strong> Reveló corrupción masiva</li>
                                    <li><strong>Desconfianza duradera:</strong> Mercados de valores sospechosos por décadas</li>
                                    <li><strong>Lecciones ignoradas:</strong> Patrones similares se repetirían</li>
                                </ul>
                            </div>
                        </div>

                        <div class="crisis great-depression">
                            <h5><i class="fas fa-chart-line-down"></i> Gran Depresión (1929-1939) - La madre de todas las crisis</h5>
                            
                            <div class="crisis-buildup">
                                <h6>Los "Roaring Twenties" (1920-1929):</h6>
                                <div class="twenties-characteristics">
                                    <ul>
                                        <li><strong>Innovación tecnológica:</strong> Radio, automóviles, electricidad</li>
                                        <li><strong>Prosperidad económica:</strong> PIB creció 42% en la década</li>
                                        <li><strong>Nuevos inversionistas:</strong> Clase media entra a Wall Street</li>
                                        <li><strong>Crédito fácil:</strong> Comprar acciones con 10% de enganche</li>
                                        <li><strong>Optimismo extremo:</strong> "Prosperity is permanent"</li>
                                    </ul>
                                </div>
                                
                                <div class="margin-buying">
                                    <h6>Compra con margen descontrolada:</h6>
                                    <p><strong>Mecánica:</strong> Inversionistas podían comprar $1,000 en acciones con solo $100 propios, pidiendo prestado $900.</p>
                                    
                                    <div class="margin-example">
                                        <strong>Ejemplo típico:</strong>
                                        <ol>
                                            <li>Inversionista pone $1,000, pide prestado $9,000</li>
                                            <li>Compra $10,000 en acciones</li>
                                            <li>Si acciones suben 10%, gana $1,000 (100% de retorno)</li>
                                            <li>Si acciones bajan 10%, pierde $1,000 (100% de pérdida)</li>
                                        </ol>
                                    </div>
                                    
                                    <p><strong>Problema:</strong> En 1929, préstamos para compra de acciones alcanzaron $8.5 mil millones (equivalente a $140 mil millones hoy).</p>
                                </div>
                            </div>

                            <div class="crisis-warning-signs">
                                <h6>Señales de advertencia (ignoradas):</h6>
                                <ul>
                                    <li><strong>Valuaciones extremas:</strong> P/E del mercado >30</li>
                                    <li><strong>Especulación rampante:</strong> "Shoe shine boys" dando consejos de acciones</li>
                                    <li><strong>Nuevas emisiones dudosas:</strong> Empresas sin ganancias cotizando</li>
                                    <li><strong>Concentración de riqueza:</strong> 1% más rico poseía 40% de la riqueza</li>
                                    <li><strong>Debilidad económica subyacente:</strong> Agricultura en recesión, desigualdad creciente</li>
                                </ul>
                            </div>

                            <div class="crisis-crash">
                                <h6>El Crash de 1929:</h6>
                                <div class="crash-timeline">
                                    <div class="crash-day">
                                        <strong>Jueves Negro (24 Oct):</strong> Dow cae 11%, pánico inicial
                                    </div>
                                    <div class="crash-day">
                                        <strong>Lunes Negro (28 Oct):</strong> Dow cae 13%, margin calls masivos
                                    </div>
                                    <div class="crash-day">
                                        <strong>Martes Negro (29 Oct):</strong> Dow cae 12%, volumen récord
                                    </div>
                                </div>
                                
                                <div class="crash-statistics">
                                    <strong>Estadísticas del crash:</strong>
                                    <ul>
                                        <li><strong>Caída inicial:</strong> 25% en 4 días</li>
                                        <li><strong>Caída total (1929-1932):</strong> 89%</li>
                                        <li><strong>Duración del bear market:</strong> 34 meses</li>
                                        <li><strong>Tiempo de recuperación:</strong> 25 años</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-depression">
                                <h6>La Gran Depresión (1930-1939):</h6>
                                <div class="depression-causes">
                                    <strong>Causas del empeoramiento:</strong>
                                    <ul>
                                        <li><strong>Política monetaria contractiva:</strong> Fed subió tasas durante recesión</li>
                                        <li><strong>Quiebras bancarias:</strong> 9,000 bancos cerraron</li>
                                        <li><strong>Proteccionismo:</strong> Smoot-Hawley Tariff Act redujo comercio global</li>
                                        <li><strong>Deflación:</strong> Precios cayeron 25%, aumentando carga de deuda real</li>
                                        <li><strong>Círculo vicioso:</strong> Menos consumo → menos producción → más desempleo</li>
                                    </ul>
                                </div>
                                
                                <div class="depression-impact">
                                    <strong>Impacto social:</strong>
                                    <ul>
                                        <li><strong>Desempleo:</strong> 25% en EE.UU., 33% en Alemania</li>
                                        <li><strong>PIB:</strong> Cayó 30% en EE.UU.</li>
                                        <li><strong>Deflación:</strong> Precios cayeron 25%</li>
                                        <li><strong>Migración masiva:</strong> "Dust Bowl" desplazó millones</li>
                                        <li><strong>Radicalización política:</strong> Ascenso de extremismos</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-response">
                                <h6>Respuesta gubernamental - New Deal:</h6>
                                <div class="new-deal-programs">
                                    <strong>Programas clave:</strong>
                                    <ul>
                                        <li><strong>FDIC:</strong> Seguro de depósitos bancarios</li>
                                        <li><strong>SEC:</strong> Regulación de mercados de valores</li>
                                        <li><strong>Social Security:</strong> Red de seguridad social</li>
                                        <li><strong>Works Progress Administration:</strong> Empleos públicos</li>
                                        <li><strong>Glass-Steagall:</strong> Separación banca comercial/inversión</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-lessons-depression">
                                <h6>Lecciones fundamentales:</h6>
                                <ul>
                                    <li><strong>Apalancamiento sistémico es peligroso:</strong> Margin buying amplificó la caída</li>
                                    <li><strong>Política monetaria importa:</strong> Fed empeoró la crisis</li>
                                    <li><strong>Regulación es necesaria:</strong> Mercados no se autorregulan</li>
                                    <li><strong>Respuesta fiscal puede ayudar:</strong> Gasto gubernamental estimula demanda</li>
                                    <li><strong>Confianza es frágil:</strong> Pánico bancario destruye sistema financiero</li>
                                    <li><strong>Desigualdad es desestabilizadora:</strong> Concentración de riqueza reduce demanda</li>
                                </ul>
                            </div>
                        </div>

                        <div class="crisis dotcom">
                            <h5><i class="fas fa-globe"></i> Burbuja Dot-com (1995-2001) - Cuando el futuro llegó demasiado pronto</h5>
                            
                            <div class="crisis-context-dotcom">
                                <h6>El amanecer de Internet:</h6>
                                <p>Internet pasó de ser una red académica a una revolución comercial. Las posibilidades parecían infinitas, y Wall Street se enamoró del futuro digital.</p>
                            </div>

                            <div class="crisis-buildup-dotcom">
                                <h6>Construcción de la burbuja (1995-2000):</h6>
                                
                                <div class="dotcom-factors">
                                    <strong>Factores impulsores:</strong>
                                    <ul>
                                        <li><strong>Adopción masiva de Internet:</strong> Usuarios crecieron de 16M a 400M</li>
                                        <li><strong>Nuevos modelos de negocio:</strong> E-commerce, publicidad online</li>
                                        <li><strong>Capital de riesgo abundante:</strong> VCs invirtieron $100 mil millones</li>
                                        <li><strong>IPOs fáciles:</strong> Empresas sin ganancias cotizaron públicamente</li>
                                        <li><strong>Métricas nuevas:</strong> "Eyeballs" y "clicks" reemplazaron ganancias</li>
                                    </ul>
                                </div>
                                
                                <div class="dotcom-mentality">
                                    <h6>Mentalidad de la época:</h6>
                                    <div class="famous-quotes">
                                        <ul>
                                            <li><strong>"Get big fast":</strong> Crecimiento a cualquier costo</li>
                                            <li><strong>"First mover advantage":</strong> Ser primero era todo</li>
                                            <li><strong>"Network effects":</strong> El ganador se lleva todo</li>
                                            <li><strong>"The new economy":</strong> Reglas tradicionales no aplican</li>
                                            <li><strong>"Profits are for wimps":</strong> Ganancias son para débiles</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="crisis-absurdities">
                                <h6>Absurdidades de la burbuja:</h6>
                                
                                <div class="absurd-valuations">
                                    <strong>Valuaciones absurdas:</strong>
                                    <ul>
                                        <li><strong>Pets.com:</strong> $300M de valuación, vendía comida para mascotas online</li>
                                        <li><strong>Webvan:</strong> $1.2 mil millones, entrega de groceries</li>
                                        <li><strong>Kozmo.com:</strong> Entrega de videos y snacks en 1 hora</li>
                                        <li><strong>eToys:</strong> Valuada más que Toys"R"Us establecida</li>
                                    </ul>
                                </div>
                                
                                <div class="absurd-business-models">
                                    <strong>Modelos de negocio cuestionables:</strong>
                                    <ul>
                                        <li><strong>Vender a pérdida:</strong> "Ganaremos en volumen"</li>
                                        <li><strong>Quemar efectivo:</strong> $100M+ gastados en marketing</li>
                                        <li><strong>Super Bowl ads:</strong> Startups gastaron $2M+ en comerciales</li>
                                        <li><strong>Dot-com parties:</strong> Fiestas extravagantes con dinero de inversionistas</li>
                                    </ul>
                                </div>
                                
                                <div class="nasdaq-peak">
                                    <strong>NASDAQ en el pico:</strong>
                                    <ul>
                                        <li><strong>Marzo 2000:</strong> 5,048 puntos</li>
                                        <li><strong>P/E promedio:</strong> >100</li>
                                        <li><strong>Empresas sin ganancias:</strong> 51% del índice</li>
                                        <li><strong>IPOs diarios:</strong> Múltiples empresas cotizando cada día</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-collapse-dotcom">
                                <h6>El colapso (2000-2002):</h6>
                                
                                <div class="collapse-triggers">
                                    <strong>Catalizadores:</strong>
                                    <ul>
                                        <li><strong>Fed sube tasas:</strong> 6 aumentos en 1999-2000</li>
                                        <li><strong>Primeras quiebras:</strong> Boo.com, Pets.com cierran</li>
                                        <li><strong>Realidad golpea:</strong> Ganancias importan después de todo</li>
                                        <li><strong>Funding se seca:</strong> VCs se vuelven cautelosos</li>
                                    </ul>
                                </div>
                                
                                <div class="collapse-statistics">
                                    <strong>Estadísticas del colapso:</strong>
                                    <ul>
                                        <li><strong>NASDAQ:</strong> Cayó 78% (5,048 → 1,114)</li>
                                        <li><strong>Duración:</strong> 30 meses de bear market</li>
                                        <li><strong>Empresas quebradas:</strong> 200+ dot-coms cerraron</li>
                                        <li><strong>Empleos perdidos:</strong> 1M+ en tecnología</li>
                                        <li><strong>Valor destruido:</strong> $5 trillones</li>
                                    </ul>
                                </div>
                                
                                <div class="famous-casualties">
                                    <strong>Víctimas famosas:</strong>
                                    <ul>
                                        <li><strong>Pets.com:</strong> De $300M a $0 en 18 meses</li>
                                        <li><strong>Webvan:</strong> Quemó $1.2 mil millones</li>
                                        <li><strong>Global Crossing:</strong> Fraude contable, bancarrota</li>
                                        <li><strong>WorldCom:</strong> $11 mil millones en fraude</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-survivors">
                                <h6>Los supervivientes que cambiaron el mundo:</h6>
                                <div class="survivor-companies">
                                    <ul>
                                        <li><strong>Amazon:</strong> De $107 a $6, ahora vale $1+ trillón</li>
                                        <li><strong>Google:</strong> IPO en 2004, aprendió de errores dot-com</li>
                                        <li><strong>eBay:</strong> Modelo de negocio real desde el inicio</li>
                                        <li><strong>Priceline:</strong> Pivotó y se reinventó</li>
                                    </ul>
                                </div>
                                
                                <div class="survival-factors">
                                    <strong>Factores de supervivencia:</strong>
                                    <ul>
                                        <li>Modelos de negocio reales</li>
                                        <li>Gestión conservadora de efectivo</li>
                                        <li>Enfoque en ganancias, no solo crecimiento</li>
                                        <li>Adaptabilidad y pivoting</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-lessons-dotcom">
                                <h6>Lecciones de la burbuja dot-com:</h6>
                                <ul>
                                    <li><strong>La tecnología era real, el timing estaba mal:</strong> Internet sí cambió el mundo, pero tomó más tiempo</li>
                                    <li><strong>Los fundamentos importan:</strong> Ganancias y flujo de efectivo no son obsoletos</li>
                                    <li><strong>Nuevas métricas necesitan validación:</strong> "Eyeballs" no pagan las cuentas</li>
                                    <li><strong>First mover advantage es un mito:</strong> Google venció a Yahoo, Facebook a MySpace</li>
                                    <li><strong>El dinero fácil corrompe:</strong> Abundancia de capital lleva a desperdicio</li>
                                    <li><strong>Las burbujas pueden tener valor:</strong> Infraestructura de Internet se construyó durante la burbuja</li>
                                </ul>
                            </div>
                        </div>

                        <div class="crisis subprime">
                            <h5><i class="fas fa-home"></i> Crisis Subprime (2007-2009) - Cuando la vivienda casi destruye el mundo</h5>
                            
                            <div class="crisis-origins">
                                <h6>Orígenes de la crisis:</h6>
                                
                                <div class="policy-backdrop">
                                    <strong>Trasfondo de política:</strong>
                                    <ul>
                                        <li><strong>Homeownership push:</strong> "Ownership society" de Bush</li>
                                        <li><strong>CRA expansion:</strong> Presión para prestar a minorías</li>
                                        <li><strong>GSE mandates:</strong> Fannie/Freddie debían comprar hipotecas subprime</li>
                                        <li><strong>Fed policy:</strong> Tasas bajas post dot-com (1% en 2003-2004)</li>
                                    </ul>
                                </div>
                                
                                <div class="financial-innovation">
                                    <strong>Innovación financiera peligrosa:</strong>
                                    <ul>
                                        <li><strong>Securitización:</strong> Hipotecas empaquetadas en MBS</li>
                                        <li><strong>CDOs:</strong> MBS reempaquetados en productos más complejos</li>
                                        <li><strong>Synthetic CDOs:</strong> Apuestas sobre apuestas</li>
                                        <li><strong>CDS:</strong> Seguros sobre hipotecas sin poseer las hipotecas</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-mortgage-madness">
                                <h6>La locura hipotecaria (2003-2006):</h6>
                                
                                <div class="crazy-products">
                                    <strong>Productos hipotecarios exóticos:</strong>
                                    <ul>
                                        <li><strong>NINJA loans:</strong> No Income, No Job, No Assets</li>
                                        <li><strong>SISA loans:</strong> Stated Income, Stated Assets (mentir era fácil)</li>
                                        <li><strong>Interest-only:</strong> Solo pagar intereses por años</li>
                                        <li><strong>Option ARMs:</strong> Elegir cuánto pagar cada mes</li>
                                        <li><strong>Negative amortization:</strong> Deuda crece cada mes</li>
                                        <li><strong>Teaser rates:</strong> 1% inicial, luego salta a 8%+</li>
                                    </ul>
                                </div>
                                
                                <div class="originate-distribute">
                                    <h6>Modelo "Originate-to-Distribute":</h6>
                                    <div class="model-chain">
                                        <ol>
                                            <li><strong>Mortgage brokers:</strong> Originan préstamos (comisión por volumen)</li>
                                            <li><strong>Bancos:</strong> Compran y empaquetan hipotecas</li>
                                            <li><strong>Investment banks:</strong> Crean MBS y CDOs</li>
                                            <li><strong>Rating agencies:</strong> Dan AAA a productos tóxicos</li>
                                            <li><strong>Inversionistas:</strong> Compran productos "seguros"</li>
                                        </ol>
                                    </div>
                                    
                                    <p><strong>Problema:</strong> Nadie tenía incentivo para verificar calidad crediticia.</p>
                                </div>
                                
                                <div class="housing-bubble-stats">
                                    <strong>Estadísticas de la burbuja:</strong>
                                    <ul>
                                        <li><strong>Precios de vivienda:</strong> Subieron 125% (2000-2006)</li>
                                        <li><strong>Hipotecas subprime:</strong> 20% de todas las hipotecas</li>
                                        <li><strong>Homeownership rate:</strong> Récord histórico de 69%</li>
                                        <li><strong>Debt-to-income:</strong> Familias con 130%+ de deuda vs. ingresos</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-warning-signs-subprime">
                                <h6>Señales de advertencia (ignoradas):</h6>
                                <ul>
                                    <li><strong>Ratio precio/ingreso:</strong> 40% por encima de promedio histórico</li>
                                    <li><strong>Construcción excesiva:</strong> Inventario de casas en máximos</li>
                                    <li><strong>Fraud rampante:</strong> Aplicaciones de hipotecas falsificadas</li>
                                    <li><strong>Fed warnings:</strong> Bernanke advirtió sobre "froth" en 2005</li>
                                    <li><strong>Inversión especulativa:</strong> 40% de compras eran para inversión/segunda casa</li>
                                </ul>
                            </div>

                            <div class="crisis-collapse-subprime">
                                <h6>El colapso (2007-2009):</h6>
                                
                                <div class="collapse-timeline">
                                    <div class="collapse-event">
                                        <strong>2006:</strong> Precios de vivienda comienzan a caer
                                    </div>
                                    <div class="collapse-event">
                                        <strong>Feb 2007:</strong> New Century Financial (subprime lender) quiebra
                                    </div>
                                    <div class="collapse-event">
                                        <strong>Jun 2007:</strong> Bear Stearns hedge funds colapsan
                                    </div>
                                    <div class="collapse-event">
                                        <strong>Aug 2007:</strong> Crisis de liquidez, mercados se congelan
                                    </div>
                                    <div class="collapse-event">
                                        <strong>Mar 2008:</strong> Bear Stearns rescatado por JPMorgan
                                    </div>
                                    <div class="collapse-event">
                                        <strong>Sep 2008:</strong> Lehman Brothers quiebra
                                    </div>
                                    <div class="collapse-event">
                                        <strong>Sep 2008:</strong> AIG rescatado por $85 mil millones
                                    </div>
                                    <div class="collapse-event">
                                        <strong>Oct 2008:</strong> TARP - $700 mil millones para rescatar bancos
                                    </div>
                                </div>
                                
                                <div class="lehman-weekend">
                                    <h6>El fin de semana de Lehman (13-15 Sep 2008):</h6>
                                    <p><strong>Viernes:</strong> Lehman busca desesperadamente comprador</p>
                                    <p><strong>Sábado:</strong> Bank of America elige Merrill Lynch</p>
                                    <p><strong>Domingo:</strong> Gobierno decide no rescatar Lehman</p>
                                    <p><strong>Lunes:</strong> Lehman se declara en bancarrota, pánico global</p>
                                    
                                    <div class="lehman-consequences">
                                        <strong>Consecuencias inmediatas:</strong>
                                        <ul>
                                            <li>Credit markets se congelan completamente</li>
                                            <li>Money market funds "break the buck"</li>
                                            <li>Commercial paper market colapsa</li>
                                            <li>Bancos dejan de prestarse entre sí</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="crisis-global-impact">
                                <h6>Impacto global:</h6>
                                
                                <div class="financial-impact">
                                    <strong>Mercados financieros:</strong>
                                    <ul>
                                        <li><strong>S&P 500:</strong> Cayó 57% (Oct 2007 - Mar 2009)</li>
                                        <li><strong>Bancos globales:</strong> Pérdidas de $2.8 trillones</li>
                                        <li><strong>Vivienda:</strong> Precios cayeron 30% nacionalmente</li>
                                        <li><strong>Foreclosures:</strong> 6 millones de familias perdieron casas</li>
                                    </ul>
                                </div>
                                
                                <div class="economic-impact">
                                    <strong>Economía real:</strong>
                                    <ul>
                                        <li><strong>Recesión:</strong> PIB cayó 4.3%</li>
                                        <li><strong>Desempleo:</strong> Subió de 5% a 10%</li>
                                        <li><strong>Empleos perdidos:</strong> 8.8 millones</li>
                                        <li><strong>Riqueza destruida:</strong> $11 trillones en valor neto de hogares</li>
                                    </ul>
                                </div>
                                
                                <div class="international-spread">
                                    <strong>Contagio internacional:</strong>
                                    <ul>
                                        <li><strong>Europa:</strong> Bancos tenían $1+ trillón en MBS tóxicos</li>
                                        <li><strong>Islandia:</strong> Sistema bancario colapsó completamente</li>
                                        <li><strong>Irlanda:</strong> Garantizó todos los depósitos bancarios</li>
                                        <li><strong>Mercados emergentes:</strong> Fuga de capitales masiva</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-response-subprime">
                                <h6>Respuesta gubernamental sin precedentes:</h6>
                                
                                <div class="monetary-policy">
                                    <strong>Política monetaria:</strong>
                                    <ul>
                                        <li><strong>Fed funds rate:</strong> De 5.25% a 0% en 15 meses</li>
                                        <li><strong>Quantitative Easing:</strong> Fed compró $3+ trillones en bonos</li>
                                        <li><strong>Forward guidance:</strong> Promesas de tasas bajas por años</li>
                                        <li><strong>Swap lines:</strong> Dólares para bancos centrales extranjeros</li>
                                    </ul>
                                </div>
                                
                                <div class="fiscal-policy">
                                    <strong>Política fiscal:</strong>
                                    <ul>
                                        <li><strong>TARP:</strong> $700 mil millones para rescatar bancos</li>
                                        <li><strong>ARRA:</strong> $787 mil millones en estímulo</li>
                                        <li><strong>Auto bailout:</strong> $80 mil millones para GM y Chrysler</li>
                                        <li><strong>HARP/HAMP:</strong> Programas de refinanciamiento hipotecario</li>
                                    </ul>
                                </div>
                                
                                <div class="regulatory-response">
                                    <strong>Reforma regulatoria:</strong>
                                    <ul>
                                        <li><strong>Dodd-Frank:</strong> Regulación financiera más estricta</li>
                                        <li><strong>Volcker Rule:</strong> Bancos no pueden hacer proprietary trading</li>
                                        <li><strong>Basel III:</strong> Mayores requerimientos de capital</li>
                                        <li><strong>Stress tests:</strong> Pruebas anuales de resistencia bancaria</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="crisis-lessons-subprime">
                                <h6>Lecciones de la crisis subprime:</h6>
                                <ul>
                                    <li><strong>Incentivos importan:</strong> Cuando nadie tiene skin in the game, el riesgo se acumula</li>
                                    <li><strong>Complejidad oculta riesgo:</strong> CDOs y derivados eran "armas de destrucción masiva"</li>
                                    <li><strong>Rating agencies fallan:</strong> Conflictos de interés llevaron a ratings inflados</li>
                                    <li><strong>Too big to fail es real:</strong> Instituciones sistémicas necesitan supervisión especial</li>
                                    <li><strong>Apalancamiento sistémico es peligroso:</strong> 30:1 leverage ratios eran insostenibles</li>
                                    <li><strong>Política monetaria tiene límites:</strong> No puede arreglar problemas de solvencia</li>
                                    <li><strong>Contagio global es inevitable:</strong> Crisis locales se vuelven globales rápidamente</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="crisis-patterns">
                        <h4><i class="fas fa-pattern"></i> Patrones comunes en todas las crisis</h4>
                        
                        <div class="pattern innovation">
                            <h5><i class="fas fa-lightbulb"></i> 1. Nueva tecnología o innovación financiera</h5>
                            <div class="pattern-examples">
                                <ul>
                                    <li><strong>Tulipomanía:</strong> Mercados de futuros</li>
                                    <li><strong>Ferrocarriles (1840s):</strong> Transporte revolucionario</li>
                                    <li><strong>1929:</strong> Radio, automóviles, electricidad</li>
                                    <li><strong>Dot-com:</strong> Internet y e-commerce</li>
                                    <li><strong>Subprime:</strong> Securitización y derivados</li>
                                </ul>
                            </div>
                        </div>

                        <div class="pattern credit">
                            <h5><i class="fas fa-credit-card"></i> 2. Expansión de crédito</h5>
                            <div class="pattern-description">
                                <p>Todas las burbujas son alimentadas por crédito fácil y barato. Cuando el dinero es abundante, los precios de activos suben artificialmente.</p>
                            </div>
                        </div>

                        <div class="pattern leverage">
                            <h5><i class="fas fa-balance-scale-right"></i> 3. Apalancamiento excesivo</h5>
                            <div class="pattern-description">
                                <p>Los inversionistas usan cada vez más deuda para amplificar ganancias, sin considerar que también amplifica pérdidas.</p>
                            </div>
                        </div>

                        <div class="pattern euphoria">
                            <h5><i class="fas fa-rocket"></i> 4. Euforia y "esta vez es diferente"</h5>
                            <div class="pattern-quotes">
                                <ul>
                                    <li><strong>1929:</strong> "Prosperity is permanent"</li>
                                    <li><strong>Dot-com:</strong> "The new economy"</li>
                                    <li><strong>Subprime:</strong> "Housing prices never go down"</li>
                                </ul>
                            </div>
                        </div>

                        <div class="pattern regulatory">
                            <h5><i class="fas fa-gavel"></i> 5. Respuesta regulatoria post-crisis</h5>
                            <div class="pattern-description">
                                <p>Cada crisis mayor resulta en nueva regulación diseñada para prevenir su repetición, pero las próximas crisis siempre encuentran nuevas vulnerabilidades.</p>
                            </div>
                        </div>
                    </div>

                    <div class="modern-bubbles">
                        <h4><i class="fas fa-clock"></i> Burbujas modernas y futuras</h4>
                        
                        <div class="bubble crypto">
                            <h5><i class="fas fa-coins"></i> Criptomonedas (2017, 2021)</h5>
                            <div class="bubble-characteristics">
                                <ul>
                                    <li><strong>Innovación:</strong> Blockchain y finanzas descentralizadas</li>
                                    <li><strong>Euforia:</strong> "Digital gold", "currency of the future"</li>
                                    <li><strong>Especulación:</strong> ICOs, NFTs, meme coins</li>
                                    <li><strong>Volatilidad extrema:</strong> Bitcoin de $1,000 a $69,000 a $15,000</li>
                                </ul>
                            </div>
                        </div>

                        <div class="bubble spac">
                            <h5><i class="fas fa-handshake"></i> SPACs (2020-2021)</h5>
                            <div class="bubble-characteristics">
                                <ul>
                                    <li><strong>Innovación:</strong> "Blank check companies"</li>
                                    <li><strong>Euforia:</strong> Evitar proceso IPO tradicional</li>
                                    <li><strong>Especulación:</strong> Empresas pre-revenue con valuaciones masivas</li>
                                    <li><strong>Colapso:</strong> 90%+ de SPACs perdieron dinero</li>
                                </ul>
                            </div>
                        </div>

                        <div class="bubble meme-stocks">
                            <h5><i class="fas fa-chart-line"></i> Meme Stocks (2021)</h5>
                            <div class="bubble-characteristics">
                                <ul>
                                    <li><strong>Innovación:</strong> Social media coordination (Reddit)</li>
                                    <li><strong>Euforia:</strong> "Stick it to Wall Street"</li>
                                    <li><strong>Especulación:</strong> GameStop de $4 a $480</li>
                                    <li><strong>Lección:</strong> Retail puede mover mercados temporalmente</li>
                                </ul>
                            </div>
                        </div>

                        <div class="future-bubbles">
                            <h5><i class="fas fa-crystal-ball"></i> Posibles burbujas futuras</h5>
                            <div class="future-candidates">
                                <ul>
                                    <li><strong>Inteligencia Artificial:</strong> ¿Valuaciones de AI companies sostenibles?</li>
                                    <li><strong>Energía verde:</strong> ¿Transición energética sobrevalorada?</li>
                                    <li><strong>Biotecnología:</strong> ¿Promesas de longevidad realistas?</li>
                                    <li><strong>Exploración espacial:</strong> ¿Turismo espacial viable?</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="crisis-preparation">
                        <h4><i class="fas fa-shield-alt"></i> Cómo prepararse para la próxima crisis</h4>
                        
                        <div class="preparation-mindset">
                            <h5><i class="fas fa-brain"></i> Mentalidad correcta</h5>
                            <ul>
                                <li><strong>Las crisis son inevitables:</strong> Ocurren cada 7-10 años en promedio</li>
                                <li><strong>Timing es imposible:</strong> Nadie puede predecir cuándo exactamente</li>
                                <li><strong>Oportunidad en crisis:</strong> Los mejores rendimientos vienen después de crashes</li>
                                <li><strong>Paciencia es clave:</strong> Recuperaciones toman tiempo</li>
                            </ul>
                        </div>

                        <div class="preparation-portfolio">
                            <h5><i class="fas fa-briefcase"></i> Preparación de portafolio</h5>
                            <ul>
                                <li><strong>Diversificación:</strong> No pongas todos los huevos en una canasta</li>
                                <li><strong>Liquidez:</strong> Mantén efectivo para oportunidades</li>
                                <li><strong>Evita apalancamiento:</strong> Deuda amplifica pérdidas</li>
                                <li><strong>Rebalancing:</strong> Vende caro, compra barato sistemáticamente</li>
                            </ul>
                        </div>

                        <div class="preparation-warning-signs">
                            <h5><i class="fas fa-exclamation-triangle"></i> Señales de advertencia</h5>
                            <ul>
                                <li><strong>Euforia generalizada:</strong> "Esta vez es diferente"</li>
                                <li><strong>Valuaciones extremas:</strong> P/E ratios muy altos</li>
                                <li><strong>Crédito fácil:</strong> Préstamos sin verificación</li>
                                <li><strong>Nuevos "expertos":</strong> Gente sin experiencia dando consejos</li>
                                <li><strong>FOMO masivo:</strong> Miedo a perderse ganancias</li>
                            </ul>
                        </div>

                        <div class="preparation-actions">
                            <h5><i class="fas fa-list-check"></i> Acciones durante crisis</h5>
                            <ul>
                                <li><strong>No entres en pánico:</strong> Decisiones emocionales destruyen riqueza</li>
                                <li><strong>Mantén perspectiva:</strong> Todas las crisis han pasado</li>
                                <li><strong>Compra gradualmente:</strong> Dollar-cost averaging en la caída</li>
                                <li><strong>Enfócate en calidad:</strong> Empresas fuertes sobreviven</li>
                                <li><strong>Piensa a largo plazo:</strong> 5-10 años, no 5-10 meses</li>
                            </ul>
                        </div>
                    </div>

                    <div class="video-resources">
                        <h4><i class="fas fa-play-circle"></i> Videos recomendados</h4>
                        <div class="video-links">
                            <a href="https://www.youtube.com/watch?v=I_6Wfr_jyKg" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                The 2008 Financial Crisis Explained
                            </a>
                            <a href="https://www.youtube.com/watch?v=mzJmTCYmo9g" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                Dot-com Bubble Documentary
                            </a>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h4><i class="fas fa-key"></i> Puntos clave para recordar</h4>
                        <div class="takeaway-grid">
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Las crisis siguen patrones predecibles pero timing impredecible</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Todas las burbujas son alimentadas por crédito fácil y apalancamiento</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>"Esta vez es diferente" son las palabras más peligrosas en finanzas</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los mercados siempre se recuperan, pero puede tomar años</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Las mejores oportunidades vienen después de las peores crisis</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Preparación y paciencia superan a predicción y pánico</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        section3: {
            title: 'Casos de Éxito: Grandes Inversionistas',
            content: `
                <div class="content-section">
                    <h3>Casos de Éxito: Grandes Inversionistas</h3>
                    
                    <div class="intro-analogy">
                        <p>Si las crisis financieras son las tormentas del océano de las inversiones, entonces los grandes inversionistas son los capitanes más experimentados que han navegado múltiples tormentas y han aprendido a prosperar en cualquier condición climática.</p>
                        
                        <p>Estudiar a estos maestros no es para copiar exactamente sus estrategias - cada uno operó en contextos únicos - sino para entender los principios atemporales que los llevaron al éxito. Son como diferentes escuelas de artes marciales: cada una tiene su estilo, pero todas comparten fundamentos sólidos.</p>
                        
                        <p>Estos inversionistas no solo acumularon riqueza; crearon filosofías de inversión que han influenciado generaciones y siguen siendo relevantes décadas después de sus mayores triunfos.</p>
                    </div>

                    <div class="investor-warren-buffett">
                        <h4><i class="fas fa-crown"></i> Warren Buffett - El Oráculo de Omaha</h4>
                        
                        <div class="investor-profile">
                            <div class="profile-basics">
                                <h5>Perfil básico:</h5>
                                <ul>
                                    <li><strong>Nacimiento:</strong> 1930, Omaha, Nebraska</li>
                                    <li><strong>Patrimonio neto:</strong> $100+ mil millones</li>
                                    <li><strong>Empresa:</strong> Berkshire Hathaway (CEO desde 1965)</li>
                                    <li><strong>Rendimiento:</strong> 20%+ anual por 60+ años</li>
                                    <li><strong>Apodo:</strong> "El Oráculo

