// Module 2: Actores y Roles en los Mercados Financieros
const module2Content = {
    id: 2,
    title: 'Actores y Roles en los Mercados Financieros',
    sections: {
        section1: {
            title: 'Bancos Centrales y su Rol',
            content: `
                <div class="content-section">
                    <h3>Bancos Centrales y su Rol</h3>
                    
                    <div class="intro-analogy">
                        <p>Imagina que los mercados financieros son como una gran ciudad. En esta ciudad, necesitas alguien que:</p>
                        <ul>
                            <li>Controle el tráfico (flujo de dinero)</li>
                            <li>Mantenga el orden (estabilidad)</li>
                            <li>Establezca las reglas básicas (política monetaria)</li>
                            <li>Actúe cuando hay emergencias (crisis financieras)</li>
                        </ul>
                        <p>Ese "alguien" son los <strong>Bancos Centrales</strong>, las instituciones más poderosas del sistema financiero mundial.</p>
                    </div>

                    <div class="central-bank-definition">
                        <h4><i class="fas fa-university"></i> ¿Qué es un Banco Central?</h4>
                        
                        <div class="definition-box">
                            <p>Un <strong>Banco Central</strong> es la institución financiera principal de un país, responsable de controlar la política monetaria, supervisar el sistema bancario y mantener la estabilidad financiera. Es el "banco de los bancos".</p>
                        </div>

                        <div class="key-characteristics">
                            <h5>Características únicas de los Bancos Centrales:</h5>
                            
                            <div class="characteristic">
                                <i class="fas fa-crown"></i>
                                <div>
                                    <strong>Monopolio de emisión:</strong> Son los únicos autorizados para crear dinero oficial del país
                                </div>
                            </div>
                            
                            <div class="characteristic">
                                <i class="fas fa-shield-alt"></i>
                                <div>
                                    <strong>Independencia:</strong> Operan con cierta autonomía del gobierno para evitar decisiones políticas que dañen la economía
                                </div>
                            </div>
                            
                            <div class="characteristic">
                                <i class="fas fa-balance-scale"></i>
                                <div>
                                    <strong>Reguladores supremos:</strong> Supervisan y regulan a todos los demás bancos
                                </div>
                            </div>
                            
                            <div class="characteristic">
                                <i class="fas fa-ambulance"></i>
                                <div>
                                    <strong>Prestamista de última instancia:</strong> Pueden rescatar bancos en crisis para evitar colapsos sistémicos
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="major-central-banks">
                        <h4><i class="fas fa-globe"></i> Los Bancos Centrales más importantes del mundo</h4>
                        
                        <div class="central-bank-grid">
                            <div class="bank-card fed">
                                <div class="bank-header">
                                    <i class="fas fa-flag-usa"></i>
                                    <h5>Reserva Federal (Fed)</h5>
                                    <span class="country">Estados Unidos</span>
                                </div>
                                <div class="bank-details">
                                    <p><strong>Creado:</strong> 1913</p>
                                    <p><strong>Sede:</strong> Washington, D.C.</p>
                                    <p><strong>Moneda:</strong> Dólar estadounidense (USD)</p>
                                    <p><strong>Importancia:</strong> El más influyente globalmente. Sus decisiones afectan a todo el mundo porque el dólar es la moneda de reserva mundial.</p>
                                    <p><strong>Presidente actual:</strong> Jerome Powell</p>
                                </div>
                            </div>

                            <div class="bank-card ecb">
                                <div class="bank-header">
                                    <i class="fas fa-flag"></i>
                                    <h5>Banco Central Europeo (BCE)</h5>
                                    <span class="country">Unión Europea</span>
                                </div>
                                <div class="bank-details">
                                    <p><strong>Creado:</strong> 1998</p>
                                    <p><strong>Sede:</strong> Frankfurt, Alemania</p>
                                    <p><strong>Moneda:</strong> Euro (EUR)</p>
                                    <p><strong>Importancia:</strong> Controla la política monetaria de 19 países europeos, la segunda economía más grande del mundo.</p>
                                    <p><strong>Presidenta actual:</strong> Christine Lagarde</p>
                                </div>
                            </div>

                            <div class="bank-card boj">
                                <div class="bank-header">
                                    <i class="fas fa-flag"></i>
                                    <h5>Banco de Japón (BoJ)</h5>
                                    <span class="country">Japón</span>
                                </div>
                                <div class="bank-details">
                                    <p><strong>Creado:</strong> 1882</p>
                                    <p><strong>Sede:</strong> Tokio, Japón</p>
                                    <p><strong>Moneda:</strong> Yen japonés (JPY)</p>
                                    <p><strong>Importancia:</strong> Pionero en políticas monetarias no convencionales como tasas de interés negativas.</p>
                                    <p><strong>Gobernador actual:</strong> Kazuo Ueda</p>
                                </div>
                            </div>

                            <div class="bank-card banxico">
                                <div class="bank-header">
                                    <i class="fas fa-flag"></i>
                                    <h5>Banco de México (Banxico)</h5>
                                    <span class="country">México</span>
                                </div>
                                <div class="bank-details">
                                    <p><strong>Creado:</strong> 1925</p>
                                    <p><strong>Sede:</strong> Ciudad de México</p>
                                    <p><strong>Moneda:</strong> Peso mexicano (MXN)</p>
                                    <p><strong>Importancia:</strong> Referente en América Latina por su manejo de la inflación y estabilidad monetaria.</p>
                                    <p><strong>Gobernadora actual:</strong> Victoria Rodríguez Ceja</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="central-bank-functions">
                        <h4><i class="fas fa-cogs"></i> Funciones principales de los Bancos Centrales</h4>
                        
                        <div class="function-detailed">
                            <div class="function-header">
                                <i class="fas fa-percentage"></i>
                                <h5>1. Política Monetaria</h5>
                            </div>
                            <div class="function-content">
                                <p><strong>¿Qué es?</strong> Controlar la cantidad de dinero en circulación y las tasas de interés para mantener la estabilidad económica.</p>
                                
                                <div class="tools">
                                    <h6>Herramientas principales:</h6>
                                    
                                    <div class="tool">
                                        <strong>Tasa de interés de referencia:</strong>
                                        <p>Es como el "precio" del dinero. Si la suben, es más caro pedir prestado (frena la economía). Si la bajan, es más barato (estimula la economía).</p>
                                        <div class="example">
                                            <strong>Ejemplo:</strong> En 2008, la Fed bajó las tasas casi a 0% para estimular la economía después de la crisis financiera.
                                        </div>
                                    </div>
                                    
                                    <div class="tool">
                                        <strong>Operaciones de mercado abierto:</strong>
                                        <p>Comprar o vender bonos del gobierno para inyectar o retirar dinero del sistema.</p>
                                        <div class="example">
                                            <strong>Ejemplo:</strong> Durante la pandemia de COVID-19, muchos bancos centrales compraron masivamente bonos para inyectar liquidez.
                                        </div>
                                    </div>
                                    
                                    <div class="tool">
                                        <strong>Encaje bancario:</strong>
                                        <p>Porcentaje de depósitos que los bancos deben mantener como reserva. Más encaje = menos dinero disponible para préstamos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="function-detailed">
                            <div class="function-header">
                                <i class="fas fa-print"></i>
                                <h5>2. Emisión de Moneda</h5>
                            </div>
                            <div class="function-content">
                                <p>Los bancos centrales son los únicos autorizados para crear dinero oficial. Esto incluye tanto billetes y monedas físicas como dinero digital.</p>
                                
                                <div class="money-creation-process">
                                    <h6>¿Cómo crean dinero?</h6>
                                    <div class="process-step">
                                        <span class="step-number">1</span>
                                        <div>
                                            <strong>Decisión:</strong> El banco central decide cuánto dinero necesita la economía
                                        </div>
                                    </div>
                                    <div class="process-step">
                                        <span class="step-number">2</span>
                                        <div>
                                            <strong>Creación digital:</strong> Literalmente "escriben" números en una computadora
                                        </div>
                                    </div>
                                    <div class="process-step">
                                        <span class="step-number">3</span>
                                        <div>
                                            <strong>Distribución:</strong> Ese dinero llega a los bancos comerciales y luego a la economía
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="important-note">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <p><strong>Importante:</strong> Crear demasiado dinero causa inflación. Crear muy poco puede causar deflación y recesión. Es un equilibrio delicado.</p>
                                </div>
                            </div>
                        </div>

                        <div class="function-detailed">
                            <div class="function-header">
                                <i class="fas fa-eye"></i>
                                <h5>3. Supervisión Bancaria</h5>
                            </div>
                            <div class="function-content">
                                <p>Vigilan que los bancos comerciales operen de manera segura y cumplan con las regulaciones.</p>
                                
                                <div class="supervision-aspects">
                                    <div class="aspect">
                                        <strong>Requisitos de capital:</strong> Los bancos deben tener suficiente dinero propio para cubrir pérdidas potenciales
                                    </div>
                                    <div class="aspect">
                                        <strong>Límites de riesgo:</strong> No pueden hacer inversiones demasiado arriesgadas con el dinero de los depositantes
                                    </div>
                                    <div class="aspect">
                                        <strong>Auditorías regulares:</strong> Inspecciones para verificar que todo esté en orden
                                    </div>
                                    <div class="aspect">
                                        <strong>Sanciones:</strong> Multas o cierre de bancos que no cumplan las reglas
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="function-detailed">
                            <div class="function-header">
                                <i class="fas fa-heartbeat"></i>
                                <h5>4. Estabilidad Financiera</h5>
                            </div>
                            <div class="function-content">
                                <p>Actúan como "bomberos" del sistema financiero, interviniendo cuando hay crisis o riesgo de colapso.</p>
                                
                                <div class="stability-tools">
                                    <div class="tool">
                                        <strong>Prestamista de última instancia:</strong>
                                        <p>Prestan dinero a bancos en problemas para evitar que quiebren y causen pánico</p>
                                    </div>
                                    <div class="tool">
                                        <strong>Garantía de depósitos:</strong>
                                        <p>Protegen los ahorros de las personas (en México hasta 400,000 UDIs por cuenta)</p>
                                    </div>
                                    <div class="tool">
                                        <strong>Coordinación internacional:</strong>
                                        <p>Trabajan con otros bancos centrales en crisis globales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="monetary-policy-impact">
                        <h4><i class="fas fa-chart-line"></i> Cómo las decisiones de los Bancos Centrales afectan tus inversiones</h4>
                        
                        <div class="impact-scenario">
                            <h5><i class="fas fa-arrow-up"></i> Cuando SUBEN las tasas de interés:</h5>
                            
                            <div class="impact-grid">
                                <div class="impact-item positive">
                                    <h6>Efectos Positivos:</h6>
                                    <ul>
                                        <li><strong>Bonos nuevos:</strong> Pagan más intereses, se vuelven más atractivos</li>
                                        <li><strong>Cuentas de ahorro:</strong> Ofrecen mejores rendimientos</li>
                                        <li><strong>Moneda nacional:</strong> Se fortalece, atrae inversión extranjera</li>
                                        <li><strong>Inflación:</strong> Tiende a controlarse</li>
                                    </ul>
                                </div>
                                
                                <div class="impact-item negative">
                                    <h6>Efectos Negativos:</h6>
                                    <ul>
                                        <li><strong>Acciones:</strong> Menos atractivas comparadas con bonos seguros</li>
                                        <li><strong>Bonos existentes:</strong> Pierden valor (nadie quiere bonos viejos que pagan menos)</li>
                                        <li><strong>Bienes raíces:</strong> Hipotecas más caras, menor demanda</li>
                                        <li><strong>Empresas:</strong> Cuesta más financiarse, menores ganancias</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="impact-scenario">
                            <h5><i class="fas fa-arrow-down"></i> Cuando BAJAN las tasas de interés:</h5>
                            
                            <div class="impact-grid">
                                <div class="impact-item positive">
                                    <h6>Efectos Positivos:</h6>
                                    <ul>
                                        <li><strong>Acciones:</strong> Más atractivas, las empresas pueden crecer más fácil</li>
                                        <li><strong>Bonos existentes:</strong> Aumentan de valor</li>
                                        <li><strong>Bienes raíces:</strong> Hipotecas más baratas, mayor demanda</li>
                                        <li><strong>Economía:</strong> Más actividad, más empleo</li>
                                    </ul>
                                </div>
                                
                                <div class="impact-item negative">
                                    <h6>Efectos Negativos:</h6>
                                    <ul>
                                        <li><strong>Ahorros:</strong> Rinden menos, pierden atractivo</li>
                                        <li><strong>Moneda:</strong> Puede debilitarse</li>
                                        <li><strong>Inflación:</strong> Riesgo de que aumente</li>
                                        <li><strong>Burbujas:</strong> Riesgo de sobrevaloración de activos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="historical-examples">
                        <h4><i class="fas fa-history"></i> Casos históricos importantes</h4>
                        
                        <div class="historical-case">
                            <h5><i class="fas fa-calendar-alt"></i> Crisis Financiera 2008-2009</h5>
                            <div class="case-content">
                                <p><strong>Situación:</strong> Colapso del mercado inmobiliario estadounidense amenazó con hundir el sistema financiero global.</p>
                                <p><strong>Acción de la Fed:</strong></p>
                                <ul>
                                    <li>Bajó tasas de interés de 5.25% a casi 0%</li>
                                    <li>Implementó "Quantitative Easing" (compra masiva de bonos)</li>
                                    <li>Rescató bancos y empresas como AIG</li>
                                </ul>
                                <p><strong>Resultado:</strong> Evitó una depresión mayor, pero tomó años recuperarse completamente.</p>
                            </div>
                        </div>

                        <div class="historical-case">
                            <h5><i class="fas fa-virus"></i> Pandemia COVID-19 (2020-2022)</h5>
                            <div class="case-content">
                                <p><strong>Situación:</strong> Lockdowns globales paralizaron la economía mundial.</p>
                                <p><strong>Acciones coordinadas:</strong></p>
                                <ul>
                                    <li>Fed, BCE, BoJ y otros bajaron tasas a mínimos históricos</li>
                                    <li>Inyectaron trillones de dólares en liquidez</li>
                                    <li>Compraron bonos corporativos por primera vez</li>
                                </ul>
                                <p><strong>Resultado:</strong> Evitaron colapso económico, pero generaron inflación posterior.</p>
                            </div>
                        </div>

                        <div class="historical-case">
                            <h5><i class="fas fa-chart-line"></i> Japón y la "Década Perdida" (1990s)</h5>
                            <div class="case-content">
                                <p><strong>Situación:</strong> Burbuja inmobiliaria y bursátil explotó en Japón.</p>
                                <p><strong>Error del BoJ:</strong> Reaccionó muy lentamente, mantuvo políticas restrictivas demasiado tiempo.</p>
                                <p><strong>Resultado:</strong> Japón entró en deflación y estancamiento económico por más de una década.</p>
                                <p><strong>Lección:</strong> Los bancos centrales deben actuar rápido y decisivamente en crisis.</p>
                            </div>
                        </div>
                    </div>

                    <div class="investment-implications">
                        <h4><i class="fas fa-lightbulb"></i> Implicaciones prácticas para tus inversiones</h4>
                        
                        <div class="practical-tips">
                            <div class="tip">
                                <h6><i class="fas fa-calendar-check"></i> Sigue las reuniones de política monetaria</h6>
                                <p>Los bancos centrales anuncian sus decisiones en fechas específicas. Estas fechas mueven los mercados.</p>
                                <div class="example">
                                    <strong>Fechas clave:</strong> Fed (8 veces al año), BCE (8 veces), Banxico (8 veces)
                                </div>
                            </div>

                            <div class="tip">
                                <h6><i class="fas fa-comments"></i> Escucha el "lenguaje" de los banqueros centrales</h6>
                                <p>Palabras como "hawkish" (restrictivo) o "dovish" (expansivo) dan pistas sobre futuras decisiones.</p>
                            </div>

                            <div class="tip">
                                <h6><i class="fas fa-balance-scale"></i> Ajusta tu portafolio según el ciclo</h6>
                                <ul>
                                    <li><strong>Tasas subiendo:</strong> Más peso en bonos de corto plazo y efectivo</li>
                                    <li><strong>Tasas bajando:</strong> Más peso en acciones y bonos de largo plazo</li>
                                    <li><strong>Tasas estables:</strong> Portafolio balanceado</li>
                                </ul>
                            </div>

                            <div class="tip">
                                <h6><i class="fas fa-globe"></i> Considera el impacto global</h6>
                                <p>Las decisiones de la Fed afectan a todo el mundo. Si inviertes internacionalmente, considera los tipos de cambio.</p>
                            </div>
                        </div>
                    </div>

                    <div class="video-resources">
                        <h4><i class="fas fa-play-circle"></i> Videos recomendados</h4>
                        <div class="video-links">
                            <a href="https://www.youtube.com/watch?v=ZY8mKg-22Pw" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                Mercados financieros: ¿qué nos enseña la historia?
                            </a>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h4><i class="fas fa-key"></i> Puntos clave para recordar</h4>
                        <div class="takeaway-grid">
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los bancos centrales son los actores más poderosos del sistema financiero</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Sus decisiones sobre tasas de interés afectan directamente tus inversiones</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>La Fed es especialmente importante porque el dólar es la moneda de reserva mundial</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Seguir la política monetaria te ayuda a tomar mejores decisiones de inversión</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>En crisis, los bancos centrales actúan como prestamistas de última instancia</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        section2: {
            title: 'Brokers y Plataformas de Inversión',
            content: `
                <div class="content-section">
                    <h3>Brokers y Plataformas de Inversión</h3>
                    
                    <div class="intro-analogy">
                        <p>Imagina que quieres comprar algo en un mercado exclusivo donde solo pueden entrar los comerciantes autorizados. Tú, como persona común, no puedes entrar directamente. Necesitas a alguien que:</p>
                        <ul>
                            <li>Tenga acceso al mercado</li>
                            <li>Conozca las reglas y procedimientos</li>
                            <li>Pueda hacer la transacción por ti</li>
                            <li>Te cobre una comisión por el servicio</li>
                        </ul>
                        <p>Esa persona es un <strong>Broker</strong>, y el "mercado exclusivo" son las bolsas de valores donde se compran y venden acciones, bonos y otros instrumentos financieros.</p>
                    </div>

                    <div class="broker-definition">
                        <h4><i class="fas fa-handshake"></i> ¿Qué es un Broker?</h4>
                        
                        <div class="definition-box">
                            <p>Un <strong>Broker</strong> (corredor de bolsa o casa de bolsa) es un intermediario financiero autorizado que ejecuta órdenes de compra y venta de valores por cuenta de sus clientes. Es tu puente hacia los mercados financieros.</p>
                        </div>

                        <div class="broker-functions">
                            <h5>Funciones principales de un Broker:</h5>
                            
                            <div class="function">
                                <i class="fas fa-exchange-alt"></i>
                                <div>
                                    <strong>Ejecución de órdenes:</strong> Compran y venden valores siguiendo tus instrucciones
                                </div>
                            </div>
                            
                            <div class="function">
                                <i class="fas fa-shield-alt"></i>
                                <div>
                                    <strong>Custodia de valores:</strong> Guardan tus inversiones de forma segura
                                </div>
                            </div>
                            
                            <div class="function">
                                <i class="fas fa-chart-bar"></i>
                                <div>
                                    <strong>Información y análisis:</strong> Proporcionan datos, gráficos y reportes de mercado
                                </div>
                            </div>
                            
                            <div class="function">
                                <i class="fas fa-file-invoice-dollar"></i>
                                <div>
                                    <strong>Administración de cuentas:</strong> Manejan tu dinero y llevan registro de transacciones
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="broker-types">
                        <h4><i class="fas fa-layer-group"></i> Tipos de Brokers</h4>
                        
                        <div class="broker-type-card full-service">
                            <div class="type-header">
                                <i class="fas fa-concierge-bell"></i>
                                <h5>Full-Service Brokers (Servicio Completo)</h5>
                            </div>
                            <div class="type-content">
                                <p><strong>¿Qué ofrecen?</strong> Servicio personalizado con asesores dedicados que te ayudan a tomar decisiones de inversión.</p>
                                
                                <div class="pros-cons">
                                    <div class="pros">
                                        <h6><i class="fas fa-thumbs-up"></i> Ventajas:</h6>
                                        <ul>
                                            <li>Asesoría personalizada</li>
                                            <li>Investigación y análisis profesional</li>
                                            <li>Planificación financiera integral</li>
                                            <li>Acceso a productos exclusivos</li>
                                            <li>Gestión de carteras</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="cons">
                                        <h6><i class="fas fa-thumbs-down"></i> Desventajas:</h6>
                                        <ul>
                                            <li>Comisiones muy altas (1-3% por transacción)</li>
                                            <li>Montos mínimos elevados</li>
                                            <li>Posibles conflictos de interés</li>
                                            <li>Menos control directo</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="examples">
                                    <strong>Ejemplos:</strong> Merrill Lynch, Morgan Stanley, UBS
                                </div>
                                
                                <div class="best-for">
                                    <strong>Mejor para:</strong> Inversionistas con mucho capital ($100,000+ USD) que prefieren delegar decisiones
                                </div>
                            </div>
                        </div>

                        <div class="broker-type-card discount">
                            <div class="type-header">
                                <i class="fas fa-laptop"></i>
                                <h5>Discount Brokers (Brokers de Descuento)</h5>
                            </div>
                            <div class="type-content">
                                <p><strong>¿Qué ofrecen?</strong> Plataformas digitales que te permiten invertir por tu cuenta con comisiones bajas.</p>
                                
                                <div class="pros-cons">
                                    <div class="pros">
                                        <h6><i class="fas fa-thumbs-up"></i> Ventajas:</h6>
                                        <ul>
                                            <li>Comisiones muy bajas o cero</li>
                                            <li>Control total sobre tus decisiones</li>
                                            <li>Plataformas fáciles de usar</li>
                                            <li>Montos mínimos bajos</li>
                                            <li>Acceso 24/7</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="cons">
                                        <h6><i class="fas fa-thumbs-down"></i> Desventajas:</h6>
                                        <ul>
                                            <li>Sin asesoría personalizada</li>
                                            <li>Debes tomar todas las decisiones</li>
                                            <li>Información básica</li>
                                            <li>Soporte limitado</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="examples">
                                    <strong>Ejemplos:</strong> Charles Schwab, E*TRADE, TD Ameritrade, Robinhood
                                </div>
                                
                                <div class="best-for">
                                    <strong>Mejor para:</strong> Inversionistas que quieren aprender y tomar sus propias decisiones
                                </div>
                            </div>
                        </div>

                        <div class="broker-type-card robo">
                            <div class="type-header">
                                <i class="fas fa-robot"></i>
                                <h5>Robo-Advisors (Asesores Automáticos)</h5>
                            </div>
                            <div class="type-content">
                                <p><strong>¿Qué ofrecen?</strong> Gestión automatizada de inversiones usando algoritmos y inteligencia artificial.</p>
                                
                                <div class="pros-cons">
                                    <div class="pros">
                                        <h6><i class="fas fa-thumbs-up"></i> Ventajas:</h6>
                                        <ul>
                                            <li>Comisiones muy bajas (0.25-0.5% anual)</li>
                                            <li>Diversificación automática</li>
                                            <li>Rebalanceo automático</li>
                                            <li>Sin emociones en las decisiones</li>
                                            <li>Montos mínimos muy bajos</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="cons">
                                        <h6><i class="fas fa-thumbs-down"></i> Desventajas:</h6>
                                        <ul>
                                            <li>Estrategias limitadas</li>
                                            <li>Sin flexibilidad para casos especiales</li>
                                            <li>Solo fondos indexados (ETFs)</li>
                                            <li>Sin contacto humano</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="examples">
                                    <strong>Ejemplos:</strong> Betterment, Wealthfront, Vanguard Personal Advisor
                                </div>
                                
                                <div class="best-for">
                                    <strong>Mejor para:</strong> Principiantes que quieren inversión pasiva y diversificada
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="broker-selection">
                        <h4><i class="fas fa-search"></i> Cómo elegir el Broker correcto</h4>
                        
                        <div class="selection-criteria">
                            <div class="criterion">
                                <h6><i class="fas fa-dollar-sign"></i> 1. Costos y Comisiones</h6>
                                <div class="criterion-content">
                                    <p>Los costos pueden consumir tus rendimientos. Compara cuidadosamente:</p>
                                    <ul>
                                        <li><strong>Comisión por transacción:</strong> $0-$50 USD por operación</li>
                                        <li><strong>Comisión de mantenimiento:</strong> $0-$100 USD anuales</li>
                                        <li><strong>Spread:</strong> Diferencia entre precio de compra y venta</li>
                                        <li><strong>Comisiones ocultas:</strong> Transferencias, inactividad, etc.</li>
                                    </ul>
                                    
                                    <div class="cost-example">
                                        <strong>Ejemplo:</strong> Si inviertes $1,000 USD y pagas $10 USD de comisión, ya perdiste 1% antes de empezar.
                                    </div>
                                </div>
                            </div>

                            <div class="criterion">
                                <h6><i class="fas fa-shield-alt"></i> 2. Regulación y Seguridad</h6>
                                <div class="criterion-content">
                                    <p>Verifica que el broker esté regulado por autoridades confiables:</p>
                                    <ul>
                                        <li><strong>Estados Unidos:</strong> SEC (Securities and Exchange Commission) y FINRA</li>
                                        <li><strong>México:</strong> CNBV (Comisión Nacional Bancaria y de Valores)</li>
                                        <li><strong>Europa:</strong> FCA (Reino Unido), BaFin (Alemania)</li>
                                        <li><strong>Protección de fondos:</strong> SIPC en EE.UU. (hasta $500,000 USD)</li>
                                    </ul>
                                    
                                    <div class="warning">
                                        <i class="fas fa-exclamation-triangle"></i>
                                        <strong>¡Cuidado!</strong> Evita brokers no regulados o con regulación en paraísos fiscales dudosos.
                                    </div>
                                </div>
                            </div>

                            <div class="criterion">
                                <h6><i class="fas fa-chart-line"></i> 3. Plataforma y Herramientas</h6>
                                <div class="criterion-content">
                                    <p>La plataforma debe ser fácil de usar y tener las herramientas que necesitas:</p>
                                    <ul>
                                        <li><strong>Interfaz intuitiva:</strong> Fácil navegación y ejecución de órdenes</li>
                                        <li><strong>Gráficos y análisis:</strong> Herramientas técnicas básicas</li>
                                        <li><strong>App móvil:</strong> Para operar desde cualquier lugar</li>
                                        <li><strong>Tipos de órdenes:</strong> Market, limit, stop-loss, etc.</li>
                                        <li><strong>Investigación:</strong> Reportes, noticias, análisis</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="criterion">
                                <h6><i class="fas fa-globe"></i> 4. Mercados y Productos Disponibles</h6>
                                <div class="criterion-content">
                                    <p>Asegúrate de que ofrezcan lo que quieres invertir:</p>
                                    <ul>
                                        <li><strong>Acciones:</strong> Mercados locales e internacionales</li>
                                        <li><strong>ETFs:</strong> Variedad de fondos indexados</li>
                                        <li><strong>Bonos:</strong> Gubernamentales y corporativos</li>
                                        <li><strong>Opciones y futuros:</strong> Para estrategias avanzadas</li>
                                        <li><strong>Criptomonedas:</strong> Si te interesan</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="criterion">
                                <h6><i class="fas fa-headset"></i> 5. Servicio al Cliente</h6>
                                <div class="criterion-content">
                                    <p>Cuando tengas problemas, necesitas ayuda rápida y efectiva:</p>
                                    <ul>
                                        <li><strong>Horarios de atención:</strong> Idealmente 24/7</li>
                                        <li><strong>Canales:</strong> Teléfono, chat, email</li>
                                        <li><strong>Idioma:</strong> Soporte en español si lo necesitas</li>
                                        <li><strong>Tiempo de respuesta:</strong> Rápido y efectivo</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="popular-brokers">
                        <h4><i class="fas fa-star"></i> Brokers populares por región</h4>
                        
                        <div class="region-brokers">
                            <div class="region">
                                <h5><i class="fas fa-flag-usa"></i> Estados Unidos</h5>
                                <div class="broker-list">
                                    <div class="broker-item">
                                        <strong>Charles Schwab:</strong> Excelente para principiantes, sin comisiones en acciones y ETFs
                                    </div>
                                    <div class="broker-item">
                                        <strong>Fidelity:</strong> Gran variedad de fondos sin comisiones, buena investigación
                                    </div>
                                    <div class="broker-item">
                                        <strong>Interactive Brokers:</strong> Para traders activos, acceso global, comisiones bajas
                                    </div>
                                    <div class="broker-item">
                                        <strong>Robinhood:</strong> App móvil popular entre jóvenes, trading sin comisiones
                                    </div>
                                </div>
                            </div>

                            <div class="region">
                                <h5><i class="fas fa-flag"></i> México</h5>
                                <div class="broker-list">
                                    <div class="broker-item">
                                        <strong>GBM+:</strong> Plataforma digital mexicana, fácil de usar, acceso a mercados internacionales
                                    </div>
                                    <div class="broker-item">
                                        <strong>Kuspit:</strong> Enfocado en ETFs, comisiones competitivas
                                    </div>
                                    <div class="broker-item">
                                        <strong>Actinver:</strong> Casa de bolsa tradicional con plataforma digital
                                    </div>
                                    <div class="broker-item">
                                        <strong>Bursanet:</strong> Plataforma de Grupo Bolsa Mexicana de Valores
                                    </div>
                                </div>
                            </div>

                            <div class="region">
                                <h5><i class="fas fa-flag"></i> Europa</h5>
                                <div class="broker-list">
                                    <div class="broker-item">
                                        <strong>DeGiro:</strong> Comisiones muy bajas, acceso a mercados europeos
                                    </div>
                                    <div class="broker-item">
                                        <strong>eToro:</strong> Social trading, copy trading, fácil para principiantes
                                    </div>
                                    <div class="broker-item">
                                        <strong>Trading 212:</strong> Sin comisiones, buena app móvil
                                    </div>
                                    <div class="broker-item">
                                        <strong>Interactive Brokers:</strong> También disponible en Europa
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="account-opening">
                        <h4><i class="fas fa-user-plus"></i> Proceso para abrir una cuenta</h4>
                        
                        <div class="process-steps">
                            <div class="step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h6>Investigación y selección</h6>
                                    <p>Compara brokers según tus necesidades y presupuesto</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h6>Documentación requerida</h6>
                                    <ul>
                                        <li>Identificación oficial</li>
                                        <li>Comprobante de domicilio</li>
                                        <li>Comprobante de ingresos</li>
                                        <li>RFC (en México) o SSN (en EE.UU.)</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h6>Aplicación online</h6>
                                    <p>Llena formularios sobre tu experiencia, objetivos y tolerancia al riesgo</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <h6>Verificación</h6>
                                    <p>El broker verifica tu identidad y documentos (1-5 días hábiles)</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">5</div>
                                <div class="step-content">
                                    <h6>Depósito inicial</h6>
                                    <p>Transfiere dinero para empezar a invertir (mínimos desde $0-$10,000 USD)</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">6</div>
                                <div class="step-content">
                                    <h6>¡Listo para invertir!</h6>
                                    <p>Accede a la plataforma y realiza tu primera inversión</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="common-mistakes">
                        <h4><i class="fas fa-exclamation-triangle"></i> Errores comunes al elegir broker</h4>
                        
                        <div class="mistake">
                            <h6><i class="fas fa-times-circle"></i> Error 1: Elegir solo por comisiones bajas</h6>
                            <p><strong>El problema:</strong> Un broker barato pero poco confiable puede costarte mucho más.</p>
                            <p><strong>La solución:</strong> Considera regulación, seguridad y servicio, no solo precio.</p>
                        </div>

                        <div class="mistake">
                            <h6><i class="fas fa-times-circle"></i> Error 2: No leer los términos y condiciones</h6>
                            <p><strong>El problema:</strong> Comisiones ocultas, restricciones o políticas que no conocías.</p>
                            <p><strong>La solución:</strong> Lee el contrato completo antes de firmar.</p>
                        </div>

                        <div class="mistake">
                            <h6><i class="fas fa-times-circle"></i> Error 3: Abrir múltiples cuentas innecesariamente</h6>
                            <p><strong>El problema:</strong> Complica el seguimiento y puede generar costos adicionales.</p>
                            <p><strong>La solución:</strong> Empieza con un broker y cambia solo si es necesario.</p>
                        </div>

                        <div class="mistake">
                            <h6><i class="fas fa-times-circle"></i> Error 4: No probar la plataforma primero</h6>
                            <p><strong>El problema:</strong> Descubres que la plataforma es difícil de usar después de depositar.</p>
                            <p><strong>La solución:</strong> Usa cuentas demo o deposita poco al principio.</p>
                        </div>
                    </div>

                    <div class="future-trends">
                        <h4><i class="fas fa-crystal-ball"></i> Tendencias futuras en brokers</h4>
                        
                        <div class="trend">
                            <h6><i class="fas fa-mobile-alt"></i> Mobile-First</h6>
                            <p>Las apps móviles se están volviendo la forma principal de invertir, especialmente entre jóvenes.</p>
                        </div>

                        <div class="trend">
                            <h6><i class="fas fa-gift"></i> Comisiones cero</h6>
                            <p>Cada vez más brokers ofrecen trading sin comisiones, monetizando de otras formas.</p>
                        </div>

                        <div class="trend">
                            <h6><i class="fas fa-robot"></i> Automatización</h6>
                            <p>Más herramientas de inversión automática y asesoría basada en IA.</p>
                        </div>

                        <div class="trend">
                            <h6><i class="fas fa-users"></i> Social Trading</h6>
                            <p>Plataformas que permiten copiar las estrategias de otros inversionistas exitosos.</p>
                        </div>

                        <div class="trend">
                            <h6><i class="fas fa-coins"></i> Criptomonedas</h6>
                            <p>Integración de trading de criptomonedas en plataformas tradicionales.</p>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h4><i class="fas fa-key"></i> Puntos clave para recordar</h4>
                        <div class="takeaway-grid">
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los brokers son tu puerta de entrada a los mercados financieros</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Elige según tus necesidades: principiante, activo o pasivo</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>La regulación y seguridad son más importantes que las comisiones bajas</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Prueba la plataforma antes de comprometerte completamente</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los costos pueden consumir tus rendimientos si no los vigilas</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        section3: {
            title: 'Hedge Funds: ¿Qué son y cómo operan?',
            content: `
                <div class="content-section">
                    <h3>Hedge Funds: ¿Qué son y cómo operan?</h3>
                    
                    <div class="intro-mystery">
                        <p>Imagina un club exclusivo donde solo pueden entrar las personas más ricas del mundo. En este club, los miembros entregan su dinero a genios financieros que prometen ganar dinero sin importar si los mercados suben o bajan. Estos genios usan estrategias secretas, técnicas sofisticadas y tienen acceso a información que el público general no tiene.</p>
                        
                        <p>Este "club exclusivo" existe en la vida real y se llama <strong>Hedge Fund</strong>. Son los fondos de inversión más misteriosos, poderosos y controvertidos del mundo financiero.</p>
                    </div>

                    <div class="hedge-fund-definition">
                        <h4><i class="fas fa-lock"></i> ¿Qué es un Hedge Fund?</h4>
                        
                        <div class="definition-box">
                            <p>Un <strong>Hedge Fund</strong> es un fondo de inversión privado que utiliza estrategias sofisticadas y a menudo arriesgadas para generar altos rendimientos para un número limitado de inversionistas acreditados (muy ricos).</p>
                        </div>

                        <div class="key-characteristics">
                            <h5>Características que los hacen únicos:</h5>
                            
                            <div class="characteristic">
                                <i class="fas fa-user-tie"></i>
                                <div>
                                    <strong>Exclusividad extrema:</strong> Solo para inversionistas "acreditados" con patrimonio neto superior a $1 millón USD
                                </div>
                            </div>
                            
                            <div class="characteristic">
                                <i class="fas fa-magic"></i>
                                <div>
                                    <strong>Estrategias sofisticadas:</strong> Usan técnicas que los fondos tradicionales no pueden usar
                                </div>
                            </div>
                            
                            <div class="characteristic">
                                <i class="fas fa-eye-slash"></i>
                                <div>
                                    <strong>Poca transparencia:</strong> No están obligados a revelar sus posiciones públicamente
                                </div>
                            </div>
                            
                            <div class="characteristic">
                                <i class="fas fa-rocket"></i>
                                <div>
                                    <strong>Apalancamiento alto:</strong> Pueden pedir prestado para amplificar sus apuestas
                                </div>
                            </div>
                            
                            <div class="characteristic">
                                <i class="fas fa-dollar-sign"></i>
                                <div>
                                    <strong>Comisiones altas:</strong> Cobran mucho más que los fondos tradicionales
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="hedge-vs-mutual">
                        <h4><i class="fas fa-balance-scale"></i> Hedge Funds vs. Fondos Mutuos tradicionales</h4>
                        
                        <div class="comparison-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Aspecto</th>
                                        <th>Hedge Fund</th>
                                        <th>Fondo Mutuo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Inversión mínima</strong></td>
                                        <td>$100,000 - $1,000,000+ USD</td>
                                        <td>$100 - $3,000 USD</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Número de inversionistas</strong></td>
                                        <td>Limitado (menos de 500)</td>
                                        <td>Ilimitado</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Regulación</strong></td>
                                        <td>Mínima</td>
                                        <td>Estricta (SEC)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Transparencia</strong></td>
                                        <td>Baja</td>
                                        <td>Alta</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Estrategias permitidas</strong></td>
                                        <td>Casi cualquier cosa</td>
                                        <td>Limitadas</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Liquidez</strong></td>
                                        <td>Baja (lock-up periods)</td>
                                        <td>Alta (diaria)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Comisiones</strong></td>
                                        <td>2% + 20% de ganancias</td>
                                        <td>0.5% - 2% anual</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="hedge-fund-strategies">
                        <h4><i class="fas fa-chess"></i> Estrategias principales de los Hedge Funds</h4>
                        
                        <div class="strategy-card">
                            <div class="strategy-header">
                                <i class="fas fa-arrows-alt-h"></i>
                                <h5>1. Long/Short Equity</h5>
                            </div>
                            <div class="strategy-content">
                                <p><strong>¿Qué hacen?</strong> Compran acciones que creen que subirán (long) y venden en corto acciones que creen que bajarán (short).</p>
                                
                                <div class="strategy-example">
                                    <h6>Ejemplo práctico:</h6>
                                    <p>Un hedge fund cree que Tesla está sobrevalorada pero Ford está infravalorada. Entonces:</p>
                                    <ul>
                                        <li><strong>Compra</strong> acciones de Ford (apuesta a que subirá)</li>
                                        <li><strong>Vende en corto</strong> acciones de Tesla (apuesta a que bajará)</li>
                                        <li>Si tiene razón en ambas, gana dinero sin importar si el mercado general sube o baja</li>
                                    </ul>
                                </div>
                                
                                <div class="risk-level">
                                    <strong>Nivel de riesgo:</strong> <span class="risk-medium">Medio</span>
                                </div>
                            </div>
                        </div>

                        <div class="strategy-card">
                            <div class="strategy-header">
                                <i class="fas fa-handshake"></i>
                                <h5>2. Merger Arbitrage (Arbitraje de Fusiones)</h5>
                            </div>
                            <div class="strategy-content">
                                <p><strong>¿Qué hacen?</strong> Aprovechan las diferencias de precio cuando una empresa va a comprar a otra.</p>
                                
                                <div class="strategy-example">
                                    <h6>Ejemplo práctico:</h6>
                                    <p>Microsoft anuncia que comprará Activision por $95 USD por acción, pero las acciones de Activision cotizan a $90 USD porque hay riesgo de que la compra no se complete:</p>
                                    <ul>
                                        <li>El hedge fund <strong>compra</strong> acciones de Activision a $90 USD</li>
                                        <li>Si la fusión se completa, ganan $5 USD por acción</li>
                                        <li>Si la fusión se cancela, pueden perder dinero</li>
                                    </ul>
                                </div>
                                
                                <div class="risk-level">
                                    <strong>Nivel de riesgo:</strong> <span class="risk-medium">Medio</span>
                                </div>
                            </div>
                        </div>

                        <div class="strategy-card">
                            <div class="strategy-header">
                                <i class="fas fa-globe"></i>
                                <h5>3. Global Macro</h5>
                            </div>
                            <div class="strategy-content">
                                <p><strong>¿Qué hacen?</strong> Hacen apuestas masivas sobre movimientos económicos globales: monedas, tasas de interés, commodities.</p>
                                
                                <div class="strategy-example">
                                    <h6>Ejemplo famoso:</h6>
                                    <p>George Soros en 1992 apostó $10 mil millones contra la libra esterlina, forzando al Banco de Inglaterra a devaluar la moneda. Ganó $1 mil millones en un día y se le conoce como "el hombre que quebró el Banco de Inglaterra".</p>
                                </div>
                                
                                <div class="risk-level">
                                    <strong>Nivel de riesgo:</strong> <span class="risk-high">Alto</span>
                                </div>
                            </div>
                        </div>

                        <div class="strategy-card">
                            <div class="strategy-header">
                                <i class="fas fa-bolt"></i>
                                <h5>4. High-Frequency Trading (HFT)</h5>
                            </div>
                            <div class="strategy-content">
                                <p><strong>¿Qué hacen?</strong> Usan algoritmos súper rápidos para hacer miles de transacciones por segundo, aprovechando diferencias de precio microscópicas.</p>
                                
                                <div class="strategy-example">
                                    <h6>Ejemplo:</h6>
                                    <p>Una acción cotiza a $100.00 USD en Nueva York y $100.01 USD en Londres. El algoritmo:</p>
                                    <ul>
                                        <li>Compra en Nueva York a $100.00</li>
                                        <li>Vende en Londres a $100.01</li>
                                        <li>Gana $0.01 por acción en milisegundos</li>
                                        <li>Repite esto millones de veces al día</li>
                                    </ul>
                                </div>
                                
                                <div class="risk-level">
                                    <strong>Nivel de riesgo:</strong> <span class="risk-medium">Medio (pero requiere tecnología costosa)</span>
                                </div>
                            </div>
                        </div>

                        <div class="strategy-card">
                            <div class="strategy-header">
                                <i class="fas fa-exclamation-triangle"></i>
                                <h5>5. Distressed Securities</h5>
                            </div>
                            <div class="strategy-content">
                                <p><strong>¿Qué hacen?</strong> Compran deuda o acciones de empresas en problemas financieros, apostando a que se recuperarán.</p>
                                
                                <div class="strategy-example">
                                    <h6>Ejemplo:</h6>
                                    <p>Una aerolínea está en bancarrota y sus bonos se venden a 20 centavos por dólar. El hedge fund los compra apostando a que la empresa se reestructurará y los bonos valdrán 50-80 centavos.</p>
                                </div>
                                
                                <div class="risk-level">
                                    <strong>Nivel de riesgo:</strong> <span class="risk-high">Alto</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fee-structure">
                        <h4><i class="fas fa-money-bill-wave"></i> Estructura de comisiones: "2 y 20"</h4>
                        
                        <div class="fee-explanation">
                            <p>Los hedge funds son famosos por su estructura de comisiones "2 y 20", que significa:</p>
                            
                            <div class="fee-breakdown">
                                <div class="fee-component">
                                    <div class="fee-number">2%</div>
                                    <div class="fee-details">
                                        <h6>Comisión de administración</h6>
                                        <p>Se cobra anualmente sobre el total de activos administrados, sin importar si ganan o pierden dinero.</p>
                                    </div>
                                </div>
                                
                                <div class="fee-plus">+</div>
                                
                                <div class="fee-component">
                                    <div class="fee-number">20%</div>
                                    <div class="fee-details">
                                        <h6>Comisión de performance</h6>
                                        <p>Se cobra sobre las ganancias netas. Solo se paga si el fondo genera rendimientos positivos.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="fee-example">
                                <h6>Ejemplo de cálculo:</h6>
                                <p>Inviertes $1,000,000 USD en un hedge fund que gana 15% en un año:</p>
                                <ul>
                                    <li><strong>Ganancia bruta:</strong> $150,000 USD</li>
                                    <li><strong>Comisión de administración (2%):</strong> $20,000 USD</li>
                                    <li><strong>Comisión de performance (20% de $150,000):</strong> $30,000 USD</li>
                                    <li><strong>Total de comisiones:</strong> $50,000 USD</li>
                                    <li><strong>Tu ganancia neta:</strong> $100,000 USD (10% real)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="famous-hedge-funds">
                        <h4><i class="fas fa-crown"></i> Hedge Funds más famosos del mundo</h4>
                        
                        <div class="fund-grid">
                            <div class="fund-card">
                                <div class="fund-header">
                                    <h5>Bridgewater Associates</h5>
                                    <span class="aum">$140 mil millones USD</span>
                                </div>
                                <div class="fund-details">
                                    <p><strong>Fundador:</strong> Ray Dalio</p>
                                    <p><strong>Estrategia:</strong> Global Macro</p>
                                    <p><strong>Famoso por:</strong> Su cultura radical de "transparencia" y el libro "Principles"</p>
                                    <p><strong>Rendimiento histórico:</strong> ~12% anual desde 1975</p>
                                </div>
                            </div>

                            <div class="fund-card">
                                <div class="fund-header">
                                    <h5>Renaissance Technologies</h5>
                                    <span class="aum">$130 mil millones USD</span>
                                </div>
                                <div class="fund-details">
                                    <p><strong>Fundador:</strong> Jim Simons (matemático)</p>
                                    <p><strong>Estrategia:</strong> Quantitative/Algoritmos</p>
                                    <p><strong>Famoso por:</strong> Usar matemáticas y física para predecir mercados</p>
                                    <p><strong>Rendimiento histórico:</strong> ~35% anual (Medallion Fund)</p>
                                </div>
                            </div>

                            <div class="fund-card">
                                <div class="fund-header">
                                    <h5>Citadel</h5>
                                    <span class="aum">$50 mil millones USD</span>
                                </div>
                                <div class="fund-details">
                                    <p><strong>Fundador:</strong> Ken Griffin</p>
                                    <p><strong>Estrategia:</strong> Multi-estrategia</p>
                                    <p><strong>Famoso por:</strong> Tecnología avanzada y trading de alta frecuencia</p>
                                    <p><strong>Rendimiento histórico:</strong> ~19% anual desde 1990</p>
                                </div>
                            </div>

                            <div class="fund-card">
                                <div class="fund-header">
                                    <h5>Berkshire Hathaway</h5>
                                    <span class="aum">$700 mil millones USD</span>
                                </div>
                                <div class="fund-details">
                                    <p><strong>Fundador:</strong> Warren Buffett</p>
                                    <p><strong>Estrategia:</strong> Value Investing (técnicamente no es hedge fund)</p>
                                    <p><strong>Famoso por:</strong> Inversión a largo plazo y el "Oracle de Omaha"</p>
                                    <p><strong>Rendimiento histórico:</strong> ~20% anual desde 1965</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="controversies">
                        <h4><i class="fas fa-exclamation-circle"></i> Controversias y críticas</h4>
                        
                        <div class="controversy">
                            <h6><i class="fas fa-balance-scale"></i> Desigualdad económica</h6>
                            <p>Los hedge funds solo están disponibles para los súper ricos, aumentando la brecha de riqueza. Los mejores rendimientos están reservados para quienes ya tienen mucho dinero.</p>
                        </div>

                        <div class="controversy">
                            <h6><i class="fas fa-chart-line"></i> Manipulación de mercados</h6>
                            <p>Su tamaño y estrategias pueden influir artificialmente en los precios. Casos como GameStop en 2021 mostraron cómo pueden ser vulnerables a movimientos coordinados.</p>
                        </div>

                        <div class="controversy">
                            <h6><i class="fas fa-eye-slash"></i> Falta de transparencia</h6>
                            <p>No reportan sus posiciones públicamente, lo que puede crear riesgos sistémicos que nadie ve venir hasta que es demasiado tarde.</p>
                        </div>

                        <div class="controversy">
                            <h6><i class="fas fa-dollar-sign"></i> Comisiones excesivas</h6>
                            <p>Muchos estudios muestran que después de comisiones, los hedge funds no superan consistentemente a los índices de mercado.</p>
                        </div>

                        <div class="controversy">
                            <h6><i class="fas fa-building"></i> Riesgo sistémico</h6>
                            <p>Su uso de apalancamiento y estrategias complejas puede amplificar crisis financieras, como pasó en 2008 con Long-Term Capital Management.</p>
                        </div>
                    </div>

                    <div class="performance-reality">
                        <h4><i class="fas fa-chart-bar"></i> La realidad del rendimiento</h4>
                        
                        <div class="performance-data">
                            <h5>¿Realmente valen la pena las comisiones altas?</h5>
                            
                            <div class="performance-comparison">
                                <div class="performance-item">
                                    <h6>Hedge Funds (promedio)</h6>
                                    <div class="return-bar hedge-fund" style="width: 60%">
                                        <span>7.2% anual (2010-2020)</span>
                                    </div>
                                </div>
                                
                                <div class="performance-item">
                                    <h6>S&P 500 (índice)</h6>
                                    <div class="return-bar index" style="width: 85%">
                                        <span>13.6% anual (2010-2020)</span>
                                    </div>
                                </div>
                                
                                <div class="performance-item">
                                    <h6>Bonos del Tesoro</h6>
                                    <div class="return-bar bonds" style="width: 25%">
                                        <span>3.0% anual (2010-2020)</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="performance-insight">
                                <p><strong>Realidad incómoda:</strong> La mayoría de los hedge funds no han superado al mercado en la última década, especialmente después de comisiones.</p>
                            </div>
                        </div>

                        <div class="survivor-bias">
                            <h5><i class="fas fa-skull"></i> Sesgo de supervivencia</h5>
                            <p>Los datos de rendimiento de hedge funds sufren de "sesgo de supervivencia": solo vemos los números de los fondos que siguen operando. Los que quebraron o cerraron por mal rendimiento desaparecen de las estadísticas.</p>
                            
                            <div class="bias-stats">
                                <ul>
                                    <li>Aproximadamente 10% de hedge funds cierran cada año</li>
                                    <li>Los fondos que cierran típicamente tenían rendimientos muy pobres</li>
                                    <li>Esto hace que los promedios de la industria se vean mejor de lo que realmente son</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="access-alternatives">
                        <h4><i class="fas fa-door-open"></i> ¿Cómo puede acceder una persona normal?</h4>
                        
                        <div class="access-option">
                            <h6><i class="fas fa-building"></i> Fondos de fondos (Fund of Funds)</h6>
                            <p>Algunos fondos mutuos invierten en múltiples hedge funds, permitiendo acceso con montos menores ($25,000+ USD). Pero agregan otra capa de comisiones.</p>
                        </div>

                        <div class="access-option">
                            <h6><i class="fas fa-chart-pie"></i> ETFs que replican estrategias</h6>
                            <p>Existen ETFs que intentan replicar estrategias de hedge funds con comisiones mucho menores:</p>
                            <ul>
                                <li><strong>IQ Hedge Multi-Strategy Tracker (QAI):</strong> Replica múltiples estrategias</li>
                                <li><strong>ProShares Hedge Replication ETF (HDG):</strong> Imita rendimientos de hedge funds</li>
                                <li><strong>Comisiones:</strong> 0.75-1.5% vs. 2%+20% de hedge funds reales</li>
                            </ul>
                        </div>

                        <div class="access-option">
                            <h6><i class="fas fa-graduation-cap"></i> Aprender sus estrategias</h6>
                            <p>Puedes estudiar y aplicar versiones simplificadas de sus estrategias:</p>
                            <ul>
                                <li><strong>Long/Short:</strong> Comprar acciones fuertes, evitar o shortear débiles</li>
                                <li><strong>Pairs Trading:</strong> Comprar una acción y shortear su competidor</li>
                                <li><strong>Value Investing:</strong> Buscar empresas infravaloradas como Buffett</li>
                            </ul>
                        </div>

                        <div class="reality-check">
                            <div class="check-box">
                                <h6><i class="fas fa-lightbulb"></i> Realidad para inversionistas normales:</h6>
                                <p>Para la mayoría de las personas, un portafolio diversificado de ETFs de bajo costo probablemente dará mejores resultados que tratar de acceder a hedge funds o replicar sus estrategias complejas.</p>
                            </div>
                        </div>
                    </div>

                    <div class="video-resources">
                        <h4><i class="fas fa-play-circle"></i> Videos recomendados</h4>
                        <div class="video-links">
                            <a href="https://www.youtube.com/watch?v=EF_K2ZepV1E" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                Hedge Funds Explained in 2 Minutes in Basic English
                            </a>
                            <a href="https://www.youtube.com/watch?v=Jj-aL-aBVKc" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                How hedge funds work and what they invest in
                            </a>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h4><i class="fas fa-key"></i> Puntos clave para recordar</h4>
                        <div class="takeaway-grid">
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los hedge funds son fondos exclusivos para inversionistas muy ricos</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Usan estrategias sofisticadas que los fondos normales no pueden usar</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Cobran comisiones muy altas: típicamente "2 y 20"</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Su rendimiento promedio no justifica las comisiones para la mayoría</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Para inversionistas normales, ETFs diversificados suelen ser mejor opción</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Son importantes para entender cómo funcionan los mercados globales</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
};

// Export the module content
if (typeof module !== 'undefined' && module.exports) {
    module.exports = module2Content;
}

