// Module 3: Instrumentos Financieros Básicos
const module3Content = {
    id: 3,
    title: 'Instrumentos Financieros Básicos',
    sections: {
        section1: {
            title: 'Acciones (Stocks): Ser dueño de empresas',
            content: `
                <div class="content-section">
                    <h3>Acciones (Stocks): Ser dueño de empresas</h3>
                    
                    <div class="intro-story">
                        <p>Imagina que tu amigo Juan tiene una pequeña panadería que está creciendo muy bien. Necesita dinero para abrir una segunda sucursal, pero no quiere pedir un préstamo al banco. Te propone lo siguiente:</p>
                        
                        <p><em>"Dame $10,000 pesos y te doy el 10% de mi panadería. Si la panadería vale $100,000 pesos hoy, tu parte vale $10,000. Pero si en el futuro vale $200,000 pesos, tu parte valdrá $20,000. Además, cada año te daré el 10% de las ganancias."</em></p>
                        
                        <p>¡Felicidades! Acabas de entender qué es una <strong>acción</strong>. Es exactamente lo mismo, pero en lugar de la panadería de Juan, estás comprando una pequeña parte de empresas como Apple, Microsoft o Coca-Cola.</p>
                    </div>

                    <div class="stock-definition">
                        <h4><i class="fas fa-building"></i> ¿Qué es una Acción?</h4>
                        
                        <div class="definition-box">
                            <p>Una <strong>acción</strong> (stock o equity) es un título que representa una parte proporcional de la propiedad de una empresa. Cuando compras acciones, te conviertes en accionista y eres dueño de una pequeña parte de esa compañía.</p>
                        </div>

                        <div class="ownership-rights">
                            <h5>¿Qué derechos tienes como accionista?</h5>
                            
                            <div class="right">
                                <i class="fas fa-vote-yea"></i>
                                <div>
                                    <strong>Derecho a voto:</strong> Puedes votar en las decisiones importantes de la empresa (proporcionalmente a tus acciones)
                                </div>
                            </div>
                            
                            <div class="right">
                                <i class="fas fa-coins"></i>
                                <div>
                                    <strong>Derecho a dividendos:</strong> Si la empresa reparte ganancias, recibes tu parte proporcional
                                </div>
                            </div>
                            
                            <div class="right">
                                <i class="fas fa-chart-line"></i>
                                <div>
                                    <strong>Derecho a apreciación:</strong> Si la empresa vale más, tus acciones valen más
                                </div>
                            </div>
                            
                            <div class="right">
                                <i class="fas fa-info-circle"></i>
                                <div>
                                    <strong>Derecho a información:</strong> La empresa debe reportar sus finanzas públicamente
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="stock-types">
                        <h4><i class="fas fa-layer-group"></i> Tipos de Acciones</h4>
                        
                        <div class="stock-type-card common">
                            <div class="type-header">
                                <i class="fas fa-users"></i>
                                <h5>Acciones Comunes (Common Stock)</h5>
                            </div>
                            <div class="type-content">
                                <p><strong>¿Qué son?</strong> El tipo más básico de acciones. La mayoría de las acciones que se compran y venden son de este tipo.</p>
                                
                                <div class="characteristics">
                                    <h6>Características:</h6>
                                    <ul>
                                        <li><strong>Derecho a voto:</strong> Una acción = un voto</li>
                                        <li><strong>Dividendos variables:</strong> Pueden recibir dividendos, pero no están garantizados</li>
                                        <li><strong>Último en cobrar:</strong> Si la empresa quiebra, cobran después de los acreedores y accionistas preferentes</li>
                                        <li><strong>Mayor potencial de crecimiento:</strong> Se benefician más del éxito de la empresa</li>
                                    </ul>
                                </div>
                                
                                <div class="examples">
                                    <strong>Ejemplos:</strong> AAPL (Apple), MSFT (Microsoft), TSLA (Tesla)
                                </div>
                            </div>
                        </div>

                        <div class="stock-type-card preferred">
                            <div class="type-header">
                                <i class="fas fa-crown"></i>
                                <h5>Acciones Preferentes (Preferred Stock)</h5>
                            </div>
                            <div class="type-content">
                                <p><strong>¿Qué son?</strong> Un híbrido entre acciones y bonos. Tienen características de ambos.</p>
                                
                                <div class="characteristics">
                                    <h6>Características:</h6>
                                    <ul>
                                        <li><strong>Sin derecho a voto:</strong> Generalmente no pueden votar</li>
                                        <li><strong>Dividendos fijos:</strong> Reciben dividendos predeterminados antes que las acciones comunes</li>
                                        <li><strong>Prioridad en liquidación:</strong> Cobran antes que las acciones comunes si la empresa quiebra</li>
                                        <li><strong>Menor volatilidad:</strong> Precios más estables que las acciones comunes</li>
                                    </ul>
                                </div>
                                
                                <div class="best-for">
                                    <strong>Mejor para:</strong> Inversionistas que buscan ingresos estables con menos riesgo
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="how-stocks-work">
                        <h4><i class="fas fa-cogs"></i> ¿Cómo funcionan las acciones?</h4>
                        
                        <div class="stock-lifecycle">
                            <h5>El ciclo de vida de una acción:</h5>
                            
                            <div class="lifecycle-step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h6>IPO (Initial Public Offering)</h6>
                                    <p>La empresa decide "salir a bolsa" y vende acciones al público por primera vez. Es como cuando Juan decide vender partes de su panadería a extraños, no solo a amigos.</p>
                                    <div class="example">
                                        <strong>Ejemplo:</strong> Facebook salió a bolsa en 2012 a $38 USD por acción
                                    </div>
                                </div>
                            </div>

                            <div class="lifecycle-step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h6>Mercado Secundario</h6>
                                    <p>Después del IPO, las acciones se compran y venden entre inversionistas en las bolsas de valores. La empresa ya no recibe dinero de estas transacciones.</p>
                                    <div class="analogy">
                                        <strong>Analogía:</strong> Es como un mercado de autos usados. Toyota no recibe dinero cuando vendes tu Toyota a otra persona.
                                    </div>
                                </div>
                            </div>

                            <div class="lifecycle-step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h6>Precio determinado por oferta y demanda</h6>
                                    <p>El precio cambia constantemente según cuántas personas quieren comprar vs. cuántas quieren vender.</p>
                                    <div class="price-factors">
                                        <strong>Factores que afectan el precio:</strong>
                                        <ul>
                                            <li>Ganancias de la empresa</li>
                                            <li>Noticias y eventos</li>
                                            <li>Condiciones económicas</li>
                                            <li>Sentimiento del mercado</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="stock-valuation">
                        <h4><i class="fas fa-calculator"></i> ¿Cómo se valúan las acciones?</h4>
                        
                        <div class="valuation-methods">
                            <div class="method">
                                <h6><i class="fas fa-chart-bar"></i> Análisis Fundamental</h6>
                                <p>Evalúa el valor "real" de la empresa basándose en sus finanzas, industria y perspectivas futuras.</p>
                                
                                <div class="key-metrics">
                                    <h7>Métricas clave:</h7>
                                    
                                    <div class="metric">
                                        <strong>P/E Ratio (Price-to-Earnings):</strong>
                                        <p>Precio de la acción ÷ Ganancias por acción. Indica cuánto pagas por cada peso de ganancias.</p>
                                        <div class="metric-example">
                                            <strong>Ejemplo:</strong> Si una acción cuesta $100 y la empresa gana $5 por acción, el P/E es 20. Estás pagando 20 veces las ganancias anuales.
                                        </div>
                                    </div>
                                    
                                    <div class="metric">
                                        <strong>Dividend Yield:</strong>
                                        <p>Dividendo anual ÷ Precio de la acción. Te dice qué porcentaje de tu inversión recibes en dividendos.</p>
                                        <div class="metric-example">
                                            <strong>Ejemplo:</strong> Acción a $100 que paga $3 anuales = 3% dividend yield
                                        </div>
                                    </div>
                                    
                                    <div class="metric">
                                        <strong>Market Cap (Capitalización de Mercado):</strong>
                                        <p>Precio por acción × Número total de acciones. El "valor" total de la empresa según el mercado.</p>
                                        <div class="metric-example">
                                            <strong>Ejemplo:</strong> Apple tiene ~16 mil millones de acciones a ~$150 = $2.4 billones USD de market cap
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="method">
                                <h6><i class="fas fa-chart-line"></i> Análisis Técnico</h6>
                                <p>Estudia patrones en los gráficos de precios para predecir movimientos futuros.</p>
                                
                                <div class="technical-concepts">
                                    <ul>
                                        <li><strong>Tendencias:</strong> Dirección general del precio (alcista, bajista, lateral)</li>
                                        <li><strong>Soporte y resistencia:</strong> Niveles donde el precio tiende a "rebotar"</li>
                                        <li><strong>Volumen:</strong> Cantidad de acciones intercambiadas</li>
                                        <li><strong>Indicadores:</strong> Herramientas matemáticas (RSI, MACD, medias móviles)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="stock-categories">
                        <h4><i class="fas fa-tags"></i> Categorías de acciones por características</h4>
                        
                        <div class="category-grid">
                            <div class="category-card growth">
                                <h6><i class="fas fa-rocket"></i> Growth Stocks (Crecimiento)</h6>
                                <p><strong>¿Qué son?</strong> Empresas que crecen rápidamente y reinvierten sus ganancias para crecer más.</p>
                                <div class="characteristics">
                                    <ul>
                                        <li>Crecimiento de ventas y ganancias alto</li>
                                        <li>Generalmente no pagan dividendos</li>
                                        <li>P/E ratios altos</li>
                                        <li>Más volátiles</li>
                                    </ul>
                                </div>
                                <div class="examples">
                                    <strong>Ejemplos:</strong> Tesla, Amazon, Netflix, Zoom
                                </div>
                            </div>

                            <div class="category-card value">
                                <h6><i class="fas fa-gem"></i> Value Stocks (Valor)</h6>
                                <p><strong>¿Qué son?</strong> Empresas que el mercado considera infravaloradas respecto a sus fundamentos.</p>
                                <div class="characteristics">
                                    <ul>
                                        <li>P/E ratios bajos</li>
                                        <li>Suelen pagar dividendos</li>
                                        <li>Empresas maduras y estables</li>
                                        <li>Menos volátiles</li>
                                    </ul>
                                </div>
                                <div class="examples">
                                    <strong>Ejemplos:</strong> Berkshire Hathaway, JPMorgan Chase, Procter & Gamble
                                </div>
                            </div>

                            <div class="category-card dividend">
                                <h6><i class="fas fa-coins"></i> Dividend Stocks (Dividendos)</h6>
                                <p><strong>¿Qué son?</strong> Empresas que pagan dividendos regulares y generosos a sus accionistas.</p>
                                <div class="characteristics">
                                    <ul>
                                        <li>Dividend yield alto (3%+)</li>
                                        <li>Historial de pagos consistente</li>
                                        <li>Flujo de efectivo estable</li>
                                        <li>Crecimiento moderado</li>
                                    </ul>
                                </div>
                                <div class="examples">
                                    <strong>Ejemplos:</strong> Coca-Cola, Johnson & Johnson, AT&T, Verizon
                                </div>
                            </div>

                            <div class="category-card cyclical">
                                <h6><i class="fas fa-sync-alt"></i> Cyclical Stocks (Cíclicas)</h6>
                                <p><strong>¿Qué son?</strong> Empresas cuyos resultados dependen mucho del ciclo económico.</p>
                                <div class="characteristics">
                                    <ul>
                                        <li>Van bien en expansión económica</li>
                                        <li>Sufren en recesiones</li>
                                        <li>Sectores: autos, construcción, lujo</li>
                                        <li>Muy sensibles a tasas de interés</li>
                                    </ul>
                                </div>
                                <div class="examples">
                                    <strong>Ejemplos:</strong> Ford, Caterpillar, Home Depot, Boeing
                                </div>
                            </div>

                            <div class="category-card defensive">
                                <h6><i class="fas fa-shield-alt"></i> Defensive Stocks (Defensivas)</h6>
                                <p><strong>¿Qué son?</strong> Empresas que venden productos esenciales que la gente necesita siempre.</p>
                                <div class="characteristics">
                                    <ul>
                                        <li>Demanda estable en cualquier economía</li>
                                        <li>Menos volátiles</li>
                                        <li>Sectores: alimentos, servicios públicos, salud</li>
                                        <li>Buenos en recesiones</li>
                                    </ul>
                                </div>
                                <div class="examples">
                                    <strong>Ejemplos:</strong> Walmart, Pfizer, Nestlé, Procter & Gamble
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="stock-risks">
                        <h4><i class="fas fa-exclamation-triangle"></i> Riesgos de invertir en acciones</h4>
                        
                        <div class="risk-types">
                            <div class="risk">
                                <h6><i class="fas fa-chart-line"></i> Riesgo de Mercado</h6>
                                <p>Los precios pueden bajar por factores que afectan a todo el mercado (recesión, guerra, pandemia).</p>
                                <div class="risk-example">
                                    <strong>Ejemplo:</strong> En marzo 2020, COVID-19 hizo que casi todas las acciones cayeran 30-50%, sin importar qué tan buenas fueran las empresas.
                                </div>
                            </div>

                            <div class="risk">
                                <h6><i class="fas fa-building"></i> Riesgo Específico de la Empresa</h6>
                                <p>Problemas particulares de una empresa pueden hacer que sus acciones caigan independientemente del mercado.</p>
                                <div class="risk-example">
                                    <strong>Ejemplo:</strong> Escándalo de emisiones de Volkswagen en 2015 hizo que sus acciones cayeran 50% mientras otras automotrices se mantuvieron estables.
                                </div>
                            </div>

                            <div class="risk">
                                <h6><i class="fas fa-industry"></i> Riesgo Sectorial</h6>
                                <p>Cambios tecnológicos o regulatorios pueden afectar a toda una industria.</p>
                                <div class="risk-example">
                                    <strong>Ejemplo:</strong> El streaming afectó a todas las empresas de video físico (Blockbuster quebró, Netflix prosperó).
                                </div>
                            </div>

                            <div class="risk">
                                <h6><i class="fas fa-tint"></i> Riesgo de Liquidez</h6>
                                <p>Algunas acciones son difíciles de vender rápidamente sin afectar mucho el precio.</p>
                                <div class="risk-example">
                                    <strong>Ejemplo:</strong> Acciones de empresas pequeñas pueden tener pocos compradores cuando quieres vender.
                                </div>
                            </div>

                            <div class="risk">
                                <h6><i class="fas fa-exchange-alt"></i> Riesgo Cambiario</h6>
                                <p>Si inviertes en acciones extranjeras, los cambios en tipos de cambio pueden afectar tus rendimientos.</p>
                                <div class="risk-example">
                                    <strong>Ejemplo:</strong> Compras acciones japonesas. Aunque suban 10% en yenes, si el yen se devalúa 15% vs. tu moneda, pierdes dinero.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="stock-strategies">
                        <h4><i class="fas fa-chess"></i> Estrategias básicas para invertir en acciones</h4>
                        
                        <div class="strategy">
                            <h6><i class="fas fa-shopping-cart"></i> Buy and Hold (Comprar y Mantener)</h6>
                            <p><strong>¿Qué es?</strong> Comprar acciones de buenas empresas y mantenerlas por años o décadas.</p>
                            <div class="strategy-details">
                                <div class="pros">
                                    <strong>Ventajas:</strong>
                                    <ul>
                                        <li>Aprovecha el crecimiento a largo plazo</li>
                                        <li>Menos estrés y tiempo requerido</li>
                                        <li>Menores costos de transacción</li>
                                        <li>Beneficios fiscales (ganancias de capital a largo plazo)</li>
                                    </ul>
                                </div>
                                <div class="cons">
                                    <strong>Desventajas:</strong>
                                    <ul>
                                        <li>Requiere paciencia</li>
                                        <li>Puede ser aburrido</li>
                                        <li>No aprovecha movimientos de corto plazo</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="famous-example">
                                <strong>Ejemplo famoso:</strong> Warren Buffett compró Coca-Cola en los 80s y nunca la ha vendido. Su inversión se ha multiplicado más de 20 veces.
                            </div>
                        </div>

                        <div class="strategy">
                            <h6><i class="fas fa-calendar-alt"></i> Dollar-Cost Averaging (Promedio de Costo)</h6>
                            <p><strong>¿Qué es?</strong> Invertir la misma cantidad de dinero regularmente, sin importar si el precio está alto o bajo.</p>
                            <div class="dca-example">
                                <strong>Ejemplo:</strong> Inviertes $500 USD cada mes en Apple:
                                <ul>
                                    <li>Enero: $150/acción → Compras 3.33 acciones</li>
                                    <li>Febrero: $120/acción → Compras 4.17 acciones</li>
                                    <li>Marzo: $180/acción → Compras 2.78 acciones</li>
                                    <li><strong>Resultado:</strong> Precio promedio de $147/acción vs. $150 si hubieras comprado todo en enero</li>
                                </ul>
                            </div>
                        </div>

                        <div class="strategy">
                            <h6><i class="fas fa-gem"></i> Value Investing</h6>
                            <p><strong>¿Qué es?</strong> Buscar empresas que están "en oferta" - que valen más de lo que cuesta comprarlas.</p>
                            <div class="value-criteria">
                                <strong>Criterios típicos:</strong>
                                <ul>
                                    <li>P/E ratio bajo comparado con la industria</li>
                                    <li>Precio por debajo del valor en libros</li>
                                    <li>Empresa rentable con buen flujo de efectivo</li>
                                    <li>Problemas temporales, no permanentes</li>
                                </ul>
                            </div>
                        </div>

                        <div class="strategy">
                            <h6><i class="fas fa-rocket"></i> Growth Investing</h6>
                            <p><strong>¿Qué es?</strong> Invertir en empresas que crecen rápidamente, aunque sus acciones parezcan caras.</p>
                            <div class="growth-criteria">
                                <strong>Criterios típicos:</strong>
                                <ul>
                                    <li>Crecimiento de ventas >20% anual</li>
                                    <li>Mercado grande y en expansión</li>
                                    <li>Ventaja competitiva sostenible</li>
                                    <li>Equipo directivo fuerte</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="dividends-explained">
                        <h4><i class="fas fa-coins"></i> Dividendos: Tu parte de las ganancias</h4>
                        
                        <div class="dividend-basics">
                            <p><strong>¿Qué son los dividendos?</strong> Pagos en efectivo que algunas empresas hacen a sus accionistas, generalmente cada trimestre, como una forma de compartir sus ganancias.</p>
                            
                            <div class="dividend-analogy">
                                <strong>Analogía:</strong> Recuerdas la panadería de Juan? Si la panadería gana $10,000 pesos en un trimestre y tú tienes 10% de la empresa, Juan te daría $1,000 pesos como tu parte de las ganancias. Eso es un dividendo.
                            </div>
                        </div>

                        <div class="dividend-process">
                            <h5>¿Cómo funcionan los dividendos?</h5>
                            
                            <div class="dividend-timeline">
                                <div class="timeline-item">
                                    <div class="date">Fecha de Anuncio</div>
                                    <div class="description">La empresa anuncia que pagará dividendos</div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="date">Ex-Dividend Date</div>
                                    <div class="description">Último día para comprar la acción y recibir el dividendo</div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="date">Record Date</div>
                                    <div class="description">La empresa registra quién tiene derecho al dividendo</div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="date">Payment Date</div>
                                    <div class="description">Se paga el dividendo a los accionistas</div>
                                </div>
                            </div>
                        </div>

                        <div class="dividend-types">
                            <h5>Tipos de dividendos:</h5>
                            
                            <div class="dividend-type">
                                <strong>Dividendos en efectivo:</strong> Pago directo en dinero (el más común)
                            </div>
                            
                            <div class="dividend-type">
                                <strong>Dividendos en acciones:</strong> Te dan más acciones en lugar de dinero
                            </div>
                            
                            <div class="dividend-type">
                                <strong>Dividendos especiales:</strong> Pagos únicos por eventos especiales (venta de división, etc.)
                            </div>
                        </div>

                        <div class="dividend-aristocrats">
                            <h5><i class="fas fa-crown"></i> Dividend Aristocrats</h5>
                            <p>Empresas del S&P 500 que han aumentado sus dividendos por 25+ años consecutivos. Son consideradas muy confiables.</p>
                            
                            <div class="aristocrat-examples">
                                <strong>Ejemplos:</strong>
                                <ul>
                                    <li><strong>Coca-Cola:</strong> 60+ años aumentando dividendos</li>
                                    <li><strong>Johnson & Johnson:</strong> 59+ años</li>
                                    <li><strong>Procter & Gamble:</strong> 65+ años</li>
                                    <li><strong>McDonald's:</strong> 45+ años</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div name="practical-tips">
                        <h4><i class="fas fa-lightbulb"></i> Consejos prácticos para principiantes</h4>
                        
                        <div class="tip">
                            <h6><i class="fas fa-graduation-cap"></i> 1. Empieza con lo que conoces</h6>
                            <p>Invierte en empresas cuyos productos o servicios uses y entiendas. Es más fácil evaluar Apple si usas iPhone que una empresa de biotecnología que no entiendes.</p>
                        </div>

                        <div class="tip">
                            <h6><i class="fas fa-chart-pie"></i> 2. Diversifica desde el principio</h6>
                            <p>No pongas todo tu dinero en una sola acción. Compra acciones de diferentes sectores y tamaños de empresa.</p>
                            <div class="diversification-example">
                                <strong>Ejemplo de portafolio básico:</strong>
                                <ul>
                                    <li>30% Tecnología (Apple, Microsoft)</li>
                                    <li>20% Salud (Johnson & Johnson, Pfizer)</li>
                                    <li>20% Consumo (Coca-Cola, Procter & Gamble)</li>
                                    <li>15% Financiero (JPMorgan, Visa)</li>
                                    <li>15% Otros sectores</li>
                                </ul>
                            </div>
                        </div>

                        <div class="tip">
                            <h6><i class="fas fa-clock"></i> 3. Piensa a largo plazo</h6>
                            <p>El mercado puede ser muy volátil en el corto plazo, pero históricamente ha subido en el largo plazo. No te desesperes por las caídas temporales.</p>
                        </div>

                        <div class="tip">
                            <h6><i class="fas fa-book"></i> 4. Investiga antes de comprar</h6>
                            <p>Lee los reportes anuales, entiende el negocio, conoce a la competencia. No compres solo porque alguien te lo recomendó.</p>
                        </div>

                        <div class="tip">
                            <h6><i class="fas fa-dollar-sign"></i> 5. Considera los costos</h6>
                            <p>Las comisiones pueden consumir tus rendimientos. Usa brokers con comisiones bajas y no hagas demasiadas transacciones.</p>
                        </div>
                    </div>

                    <div class="common-mistakes">
                        <h4><i class="fas fa-times-circle"></i> Errores comunes de principiantes</h4>
                        
                        <div class="mistake">
                            <h6>❌ Seguir las "hot tips"</h6>
                            <p><strong>El error:</strong> Comprar acciones porque las viste en redes sociales o te las recomendó un amigo.</p>
                            <p><strong>Por qué es malo:</strong> Generalmente llegas tarde a la fiesta y compras caro.</p>
                            <p><strong>Mejor estrategia:</strong> Haz tu propia investigación y ten un plan.</p>
                        </div>

                        <div class="mistake">
                            <h6>❌ Intentar "timing the market"</h6>
                            <p><strong>El error:</strong> Tratar de comprar en el punto más bajo y vender en el más alto.</p>
                            <p><strong>Por qué es malo:</strong> Nadie puede predecir consistentemente los movimientos de corto plazo.</p>
                            <p><strong>Mejor estrategia:</strong> Invierte regularmente sin importar el precio (dollar-cost averaging).</p>
                        </div>

                        <div class="mistake">
                            <h6>❌ Pánico en las caídas</h6>
                            <p><strong>El error:</strong> Vender cuando las acciones bajan por miedo a perder más.</p>
                            <p><strong>Por qué es malo:</strong> Cristalizas las pérdidas y te pierdes la recuperación.</p>
                            <p><strong>Mejor estrategia:</strong> Mantén la calma y recuerda tu plan a largo plazo.</p>
                        </div>

                        <div class="mistake">
                            <h6>❌ No diversificar</h6>
                            <p><strong>El error:</strong> Poner todo el dinero en una o pocas acciones.</p>
                            <p><strong>Por qué es malo:</strong> Si esa empresa tiene problemas, pierdes mucho dinero.</p>
                            <p><strong>Mejor estrategia:</strong> Diversifica entre sectores, tamaños y geografías.</p>
                        </div>
                    </div>

                    <div class="video-resources">
                        <h4><i class="fas fa-play-circle"></i> Videos recomendados</h4>
                        <div class="video-links">
                            <a href="https://www.youtube.com/watch?v=p7HKvqRI_Bo" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                Stocks Explained For Beginners
                            </a>
                            <a href="https://www.youtube.com/watch?v=hE2NsJGpEq4" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                How to Pick Stocks for Beginners
                            </a>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h4><i class="fas fa-key"></i> Puntos clave para recordar</h4>
                        <div class="takeaway-grid">
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Las acciones te hacen dueño de una parte de la empresa</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Hay diferentes tipos: growth, value, dividend, etc.</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los precios fluctúan por oferta y demanda</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Diversificación y largo plazo son claves del éxito</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Investiga antes de comprar, no sigas "hot tips"</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los dividendos pueden proporcionar ingresos regulares</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        section2: {
            title: 'Bonos: Prestando dinero y recibiendo intereses',
            content: `
                <div class="content-section">
                    <h3>Bonos: Prestando dinero y recibiendo intereses</h3>
                    
                    <div class="intro-story">
                        <p>Imagina que tu vecino Carlos necesita $10,000 pesos para reparar su casa. Te propone lo siguiente:</p>
                        
                        <p><em>"Te firmo un documento donde me comprometo a pagarte $500 pesos cada año durante 5 años, y al final del quinto año te devuelvo los $10,000 pesos completos. En total recibirás $12,500 pesos por prestarme $10,000."</em></p>
                        
                        <p>¡Felicidades! Acabas de entender qué es un <strong>bono</strong>. Es exactamente lo mismo, pero en lugar de prestarle a Carlos, le prestas dinero a gobiernos o empresas grandes que necesitan financiamiento.</p>
                    </div>

                    <div class="bond-definition">
                        <h4><i class="fas fa-handshake"></i> ¿Qué es un Bono?</h4>
                        
                        <div class="definition-box">
                            <p>Un <strong>bono</strong> es un instrumento de deuda donde tú (el inversionista) le prestas dinero a una entidad (gobierno o empresa) por un período determinado. A cambio, recibes pagos de intereses regulares y la devolución del capital al vencimiento.</p>
                        </div>

                        <div class="bond-parties">
                            <h5>Los actores en un bono:</h5>
                            
                            <div class="party">
                                <i class="fas fa-user"></i>
                                <div>
                                    <strong>Bondholder (Tenedor del bono):</strong> Tú, el inversionista que presta el dinero
                                </div>
                            </div>
                            
                            <div class="party">
                                <i class="fas fa-building"></i>
                                <div>
                                    <strong>Issuer (Emisor):</strong> El gobierno o empresa que pide prestado el dinero
                                </div>
                            </div>
                            
                            <div class="party">
                                <i class="fas fa-calendar-alt"></i>
                                <div>
                                    <strong>Maturity Date (Fecha de vencimiento):</strong> Cuándo se debe devolver el dinero
                                </div>
                            </div>
                            
                            <div class="party">
                                <i class="fas fa-percentage"></i>
                                <div>
                                    <strong>Coupon Rate (Tasa de cupón):</strong> El interés que te pagan regularmente
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bond-mechanics">
                        <h4><i class="fas fa-cogs"></i> ¿Cómo funcionan los bonos?</h4>
                        
                        <div class="bond-example">
                            <h5>Ejemplo práctico: Bono del Gobierno Mexicano</h5>
                            
                            <div class="example-details">
                                <div class="bond-specs">
                                    <div class="spec">
                                        <strong>Emisor:</strong> Gobierno de México
                                    </div>
                                    <div class="spec">
                                        <strong>Valor nominal (Face Value):</strong> $10,000 pesos
                                    </div>
                                    <div class="spec">
                                        <strong>Tasa de cupón:</strong> 8% anual
                                    </div>
                                    <div class="spec">
                                        <strong>Vencimiento:</strong> 5 años
                                    </div>
                                    <div class="spec">
                                        <strong>Pagos de cupón:</strong> Semestrales
                                    </div>
                                </div>
                                
                                <div class="payment-schedule">
                                    <h6>Cronograma de pagos:</h6>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Fecha</th>
                                                <th>Pago de Cupón</th>
                                                <th>Capital</th>
                                                <th>Total Recibido</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Cada 6 meses</td>
                                                <td>$400 pesos</td>
                                                <td>$0</td>
                                                <td>$400</td>
                                            </tr>
                                            <tr>
                                                <td>Al vencimiento (año 5)</td>
                                                <td>$400 pesos</td>
                                                <td>$10,000 pesos</td>
                                                <td>$10,400</td>
                                            </tr>
                                            <tr class="total-row">
                                                <td><strong>Total en 5 años</strong></td>
                                                <td><strong>$4,000 pesos</strong></td>
                                                <td><strong>$10,000 pesos</strong></td>
                                                <td><strong>$14,000 pesos</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div class="return-calculation">
                                    <p><strong>Tu rendimiento:</strong> Invertiste $10,000 y recibiste $14,000 = 40% total en 5 años (8% anual)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bond-types">
                        <h4><i class="fas fa-layer-group"></i> Tipos principales de bonos</h4>
                        
                        <div class="bond-type-card government">
                            <div class="type-header">
                                <i class="fas fa-university"></i>
                                <h5>Bonos Gubernamentales</h5>
                            </div>
                            <div class="type-content">
                                <p><strong>¿Qué son?</strong> Deuda emitida por gobiernos nacionales, estatales o municipales.</p>
                                
                                <div class="government-examples">
                                    <h6>Ejemplos por país:</h6>
                                    
                                    <div class="country-bonds">
                                        <strong>🇺🇸 Estados Unidos:</strong>
                                        <ul>
                                            <li><strong>Treasury Bills (T-Bills):</strong> Vencimiento menor a 1 año</li>
                                            <li><strong>Treasury Notes (T-Notes):</strong> Vencimiento 2-10 años</li>
                                            <li><strong>Treasury Bonds (T-Bonds):</strong> Vencimiento 10-30 años</li>
                                            <li><strong>TIPS:</strong> Protegidos contra inflación</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="country-bonds">
                                        <strong>🇲🇽 México:</strong>
                                        <ul>
                                            <li><strong>CETES:</strong> Certificados de la Tesorería (28-364 días)</li>
                                            <li><strong>BONOS:</strong> Bonos de Desarrollo del Gobierno Federal (3-30 años)</li>
                                            <li><strong>UDIBONOS:</strong> Denominados en UDIs (protegidos contra inflación)</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="country-bonds">
                                        <strong>🇩🇪 Alemania:</strong>
                                        <ul>
                                            <li><strong>Bunds:</strong> Bonos alemanes a 10-30 años</li>
                                            <li><strong>Schatz:</strong> Bonos a 2 años</li>
                                            <li><strong>Bobl:</strong> Bonos a 5 años</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="characteristics">
                                    <h6>Características:</h6>
                                    <ul>
                                        <li><strong>Riesgo bajo:</strong> Respaldados por el poder fiscal del gobierno</li>
                                        <li><strong>Liquidez alta:</strong> Fáciles de comprar y vender</li>
                                        <li><strong>Rendimientos menores:</strong> Menor riesgo = menor rendimiento</li>
                                        <li><strong>Beneficios fiscales:</strong> Algunos están exentos de impuestos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bond-type-card corporate">
                            <div class="type-header">
                                <i class="fas fa-building"></i>
                                <h5>Bonos Corporativos</h5>
                            </div>
                            <div class="type-content">
                                <p><strong>¿Qué son?</strong> Deuda emitida por empresas privadas para financiar sus operaciones o expansión.</p>
                                
                                <div class="corporate-categories">
                                    <h6>Categorías por calidad crediticia:</h6>
                                    
                                    <div class="credit-category investment-grade">
                                        <h7><i class="fas fa-star"></i> Investment Grade (Grado de Inversión)</h7>
                                        <p>Empresas con alta calidad crediticia y bajo riesgo de default.</p>
                                        <ul>
                                            <li><strong>Rating:</strong> AAA, AA, A, BBB</li>
                                            <li><strong>Ejemplos:</strong> Apple, Microsoft, Johnson & Johnson</li>
                                            <li><strong>Rendimiento:</strong> Bajo pero estable</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="credit-category high-yield">
                                        <h7><i class="fas fa-exclamation-triangle"></i> High Yield (Alto Rendimiento / Junk Bonds)</h7>
                                        <p>Empresas con menor calidad crediticia pero que pagan más intereses.</p>
                                        <ul>
                                            <li><strong>Rating:</strong> BB, B, CCC, CC, C</li>
                                            <li><strong>Ejemplos:</strong> Empresas en dificultades o muy apalancadas</li>
                                            <li><strong>Rendimiento:</strong> Alto pero riesgoso</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="corporate-features">
                                    <h6>Características especiales:</h6>
                                    <ul>
                                        <li><strong>Callable bonds:</strong> La empresa puede "llamar" (pagar antes) el bono</li>
                                        <li><strong>Convertible bonds:</strong> Se pueden convertir en acciones de la empresa</li>
                                        <li><strong>Floating rate:</strong> La tasa de interés cambia con las condiciones del mercado</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bond-type-card municipal">
                            <div class="type-header">
                                <i class="fas fa-city"></i>
                                <h5>Bonos Municipales</h5>
                            </div>
                            <div class="type-content">
                                <p><strong>¿Qué son?</strong> Deuda emitida por gobiernos locales (estados, ciudades, municipios) para financiar proyectos públicos.</p>
                                
                                <div class="municipal-types">
                                    <div class="muni-type">
                                        <strong>General Obligation (GO):</strong> Respaldados por el poder fiscal completo del emisor
                                    </div>
                                    <div class="muni-type">
                                        <strong>Revenue Bonds:</strong> Respaldados por ingresos específicos (peajes, servicios públicos)
                                    </div>
                                </div>
                                
                                <div class="tax-benefits">
                                    <h6><i class="fas fa-piggy-bank"></i> Beneficios fiscales (principalmente en EE.UU.):</h6>
                                    <ul>
                                        <li>Intereses generalmente exentos de impuestos federales</li>
                                        <li>Pueden estar exentos de impuestos estatales y locales</li>
                                        <li>Especialmente atractivos para inversionistas en brackets fiscales altos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="bond-type-card international">
                            <div class="type-header">
                                <i class="fas fa-globe"></i>
                                <h5>Bonos Internacionales</h5>
                            </div>
                            <div class="type-content">
                                <p><strong>¿Qué son?</strong> Bonos emitidos en mercados extranjeros o en monedas diferentes a la del emisor.</p>
                                
                                <div class="international-types">
                                    <div class="intl-type">
                                        <strong>Eurobonds:</strong> Emitidos en una moneda diferente al país donde se emiten
                                    </div>
                                    <div class="intl-type">
                                        <strong>Foreign bonds:</strong> Emitidos por entidad extranjera en el mercado local
                                    </div>
                                    <div class="intl-type">
                                        <strong>Global bonds:</strong> Emitidos simultáneamente en múltiples mercados
                                    </div>
                                </div>
                                
                                <div class="currency-risk">
                                    <h6><i class="fas fa-exchange-alt"></i> Riesgo cambiario:</h6>
                                    <p>Si el bono está en moneda extranjera, los cambios en el tipo de cambio pueden afectar tus rendimientos.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bond-pricing">
                        <h4><i class="fas fa-calculator"></i> ¿Cómo se determinan los precios de los bonos?</h4>
                        
                        <div class="pricing-fundamentals">
                            <h5>Relación inversa entre precios y tasas de interés</h5>
                            
                            <div class="inverse-relationship">
                                <div class="relationship-rule">
                                    <i class="fas fa-balance-scale"></i>
                                    <p><strong>Regla de oro:</strong> Cuando las tasas de interés suben, los precios de los bonos bajan. Cuando las tasas bajan, los precios suben.</p>
                                </div>
                                
                                <div class="why-inverse">
                                    <h6>¿Por qué sucede esto?</h6>
                                    <p>Imagina que tienes un bono que paga 5% anual. Si las tasas de interés suben a 7%, nadie querrá comprar tu bono al precio original porque pueden conseguir bonos nuevos que pagan 7%. Para vender tu bono, tendrás que bajar el precio hasta que el rendimiento efectivo sea competitivo con el 7%.</p>
                                </div>
                            </div>
                            
                            <div class="pricing-example">
                                <h6>Ejemplo numérico:</h6>
                                <div class="example-scenario">
                                    <p><strong>Situación inicial:</strong></p>
                                    <ul>
                                        <li>Bono con valor nominal de $1,000 USD</li>
                                        <li>Cupón de 5% anual ($50 USD/año)</li>
                                        <li>Vencimiento en 10 años</li>
                                        <li>Tasas de mercado: 5%</li>
                                        <li><strong>Precio del bono: $1,000 USD (a la par)</strong></li>
                                    </ul>
                                </div>
                                
                                <div class="scenario-change">
                                    <p><strong>Las tasas de mercado suben a 7%:</strong></p>
                                    <ul>
                                        <li>Tu bono sigue pagando solo $50 USD/año</li>
                                        <li>Bonos nuevos pagan $70 USD/año</li>
                                        <li>Para competir, tu bono debe venderse más barato</li>
                                        <li><strong>Nuevo precio del bono: ~$859 USD (descuento)</strong></li>
                                    </ul>
                                </div>
                                
                                <div class="scenario-change">
                                    <p><strong>Las tasas de mercado bajan a 3%:</strong></p>
                                    <ul>
                                        <li>Tu bono paga $50 USD/año</li>
                                        <li>Bonos nuevos solo pagan $30 USD/año</li>
                                        <li>Tu bono es más atractivo</li>
                                        <li><strong>Nuevo precio del bono: ~$1,171 USD (premium)</strong></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="duration-concept">
                            <h5><i class="fas fa-clock"></i> Duration: Sensibilidad a tasas de interés</h5>
                            
                            <div class="duration-explanation">
                                <p><strong>Duration</strong> mide qué tan sensible es el precio de un bono a cambios en las tasas de interés. Es como la "elasticidad" del bono.</p>
                                
                                <div class="duration-rule">
                                    <strong>Regla práctica:</strong> Por cada 1% que cambien las tasas de interés, el precio del bono cambiará aproximadamente el duration% en dirección opuesta.
                                </div>
                            </div>
                            
                            <div class="duration-examples">
                                <h6>Ejemplos de duration:</h6>
                                
                                <div class="duration-example">
                                    <strong>Bono A:</strong> Duration de 2 años
                                    <p>Si las tasas suben 1%, el precio baja ~2%</p>
                                </div>
                                
                                <div class="duration-example">
                                    <strong>Bono B:</strong> Duration de 8 años
                                    <p>Si las tasas suben 1%, el precio baja ~8%</p>
                                </div>
                            </div>
                            
                            <div class="duration-factors">
                                <h6>Factores que afectan el duration:</h6>
                                <ul>
                                    <li><strong>Tiempo al vencimiento:</strong> Más tiempo = mayor duration</li>
                                    <li><strong>Tasa de cupón:</strong> Cupón más bajo = mayor duration</li>
                                    <li><strong>Rendimiento actual:</strong> Rendimiento más bajo = mayor duration</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="bond-risks">
                        <h4><i class="fas fa-exclamation-triangle"></i> Riesgos de invertir en bonos</h4>
                        
                        <div class="risk-types">
                            <div class="risk credit-risk">
                                <h6><i class="fas fa-user-times"></i> Riesgo de Crédito (Default Risk)</h6>
                                <p><strong>¿Qué es?</strong> El riesgo de que el emisor no pueda pagar los intereses o devolver el capital.</p>
                                
                                <div class="credit-examples">
                                    <div class="example">
                                        <strong>Ejemplo histórico:</strong> Argentina defaulteó en 2001, dejando de pagar sus bonos. Los inversionistas perdieron gran parte de su dinero.
                                    </div>
                                    
                                    <div class="example">
                                        <strong>Ejemplo corporativo:</strong> Lehman Brothers quebró en 2008, y sus bonos se volvieron prácticamente sin valor.
                                    </div>
                                </div>
                                
                                <div class="credit-protection">
                                    <strong>Cómo protegerte:</strong>
                                    <ul>
                                        <li>Revisa las calificaciones crediticias (Moody's, S&P, Fitch)</li>
                                        <li>Diversifica entre diferentes emisores</li>
                                        <li>Prefiere bonos gubernamentales de países estables</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="risk interest-rate-risk">
                                <h6><i class="fas fa-percentage"></i> Riesgo de Tasa de Interés</h6>
                                <p><strong>¿Qué es?</strong> El riesgo de que cambios en las tasas de interés afecten el precio de tus bonos.</p>
                                
                                <div class="interest-rate-impact">
                                    <p><strong>Impacto:</strong> Si necesitas vender antes del vencimiento y las tasas han subido, podrías vender con pérdida.</p>
                                </div>
                                
                                <div class="interest-rate-protection">
                                    <strong>Cómo protegerte:</strong>
                                    <ul>
                                        <li>Mantén bonos hasta el vencimiento si es posible</li>
                                        <li>Usa bonos de duration corto si esperas que suban las tasas</li>
                                        <li>Considera bonos de tasa flotante</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="risk inflation-risk">
                                <h6><i class="fas fa-chart-line"></i> Riesgo de Inflación</h6>
                                <p><strong>¿Qué es?</strong> El riesgo de que la inflación reduzca el poder adquisitivo de tus pagos de intereses y capital.</p>
                                
                                <div class="inflation-example">
                                    <strong>Ejemplo:</strong> Tienes un bono que paga 3% anual, pero la inflación es 5%. En términos reales, estás perdiendo 2% de poder adquisitivo cada año.
                                </div>
                                
                                <div class="inflation-protection">
                                    <strong>Cómo protegerte:</strong>
                                    <ul>
                                        <li>Bonos indexados a inflación (TIPS en EE.UU., UDIBONOs en México)</li>
                                        <li>Bonos de tasa flotante</li>
                                        <li>Bonos de vencimiento corto</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="risk liquidity-risk">
                                <h6><i class="fas fa-tint"></i> Riesgo de Liquidez</h6>
                                <p><strong>¿Qué es?</strong> El riesgo de no poder vender el bono rápidamente sin afectar significativamente su precio.</p>
                                
                                <div class="liquidity-factors">
                                    <strong>Factores que afectan la liquidez:</strong>
                                    <ul>
                                        <li>Tamaño de la emisión (emisiones grandes son más líquidas)</li>
                                        <li>Calidad crediticia del emisor</li>
                                        <li>Tiempo restante al vencimiento</li>
                                        <li>Condiciones generales del mercado</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="risk currency-risk">
                                <h6><i class="fas fa-exchange-alt"></i> Riesgo Cambiario</h6>
                                <p><strong>¿Qué es?</strong> Para bonos en moneda extranjera, el riesgo de que cambios en el tipo de cambio afecten tus rendimientos.</p>
                                
                                <div class="currency-example">
                                    <strong>Ejemplo:</strong> Compras un bono estadounidense que paga 4% en dólares. Si el dólar se devalúa 10% vs. tu moneda local, tu rendimiento real podría ser negativo.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bond-strategies">
                        <h4><i class="fas fa-chess"></i> Estrategias para invertir en bonos</h4>
                        
                        <div class="strategy buy-hold">
                            <h6><i class="fas fa-hand-holding"></i> Buy and Hold (Comprar y Mantener)</h6>
                            <p><strong>¿Qué es?</strong> Comprar bonos y mantenerlos hasta el vencimiento.</p>
                            
                            <div class="strategy-details">
                                <div class="pros">
                                    <strong>Ventajas:</strong>
                                    <ul>
                                        <li>Rendimiento predecible si mantienes hasta vencimiento</li>
                                        <li>No te afectan las fluctuaciones de precio</li>
                                        <li>Estrategia simple y de bajo mantenimiento</li>
                                        <li>Ideal para planificación de ingresos</li>
                                    </ul>
                                </div>
                                
                                <div class="cons">
                                    <strong>Desventajas:</strong>
                                    <ul>
                                        <li>No aprovechas oportunidades de trading</li>
                                        <li>Dinero "atrapado" hasta el vencimiento</li>
                                        <li>Vulnerable a inflación en bonos de tasa fija</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="strategy laddering">
                            <h6><i class="fas fa-layer-group"></i> Bond Laddering (Escalera de Bonos)</h6>
                            <p><strong>¿Qué es?</strong> Comprar bonos con diferentes fechas de vencimiento para crear un flujo constante de capital que se libera.</p>
                            
                            <div class="laddering-example">
                                <h7>Ejemplo de escalera de 5 años:</h7>
                                <ul>
                                    <li><strong>Año 1:</strong> Compras bono que vence en 1 año</li>
                                    <li><strong>Año 1:</strong> Compras bono que vence en 2 años</li>
                                    <li><strong>Año 1:</strong> Compras bono que vence en 3 años</li>
                                    <li><strong>Año 1:</strong> Compras bono que vence en 4 años</li>
                                    <li><strong>Año 1:</strong> Compras bono que vence en 5 años</li>
                                </ul>
                                
                                <p><strong>Resultado:</strong> Cada año vence un bono y puedes reinvertir en un nuevo bono a 5 años con las tasas actuales.</p>
                            </div>
                            
                            <div class="laddering-benefits">
                                <strong>Beneficios:</strong>
                                <ul>
                                    <li>Reduce riesgo de tasa de interés</li>
                                    <li>Proporciona liquidez regular</li>
                                    <li>Permite reinvertir a tasas actuales</li>
                                    <li>Disciplina de inversión automática</li>
                                </ul>
                            </div>
                        </div>

                        <div class="strategy barbell">
                            <h6><i class="fas fa-dumbbell"></i> Barbell Strategy (Estrategia Mancuerna)</h6>
                            <p><strong>¿Qué es?</strong> Combinar bonos de muy corto plazo con bonos de muy largo plazo, evitando los de plazo medio.</p>
                            
                            <div class="barbell-allocation">
                                <strong>Ejemplo de asignación:</strong>
                                <ul>
                                    <li><strong>50%:</strong> Bonos de 1-2 años (alta liquidez, bajo riesgo)</li>
                                    <li><strong>50%:</strong> Bonos de 20-30 años (alto rendimiento)</li>
                                    <li><strong>0%:</strong> Bonos de 5-15 años</li>
                                </ul>
                            </div>
                            
                            <div class="barbell-rationale">
                                <strong>Lógica:</strong> Los bonos cortos te dan flexibilidad y los largos te dan rendimiento. Los de plazo medio no ofrecen suficiente de ninguno.
                            </div>
                        </div>

                        <div class="strategy bullet">
                            <h6><i class="fas fa-bullseye"></i> Bullet Strategy (Estrategia Bala)</h6>
                            <p><strong>¿Qué es?</strong> Concentrar todas las inversiones en bonos que vencen aproximadamente en la misma fecha.</p>
                            
                            <div class="bullet-use-case">
                                <strong>Cuándo usar:</strong> Cuando tienes una necesidad específica de dinero en una fecha determinada (jubilación, pago de universidad, etc.)
                            </div>
                        </div>
                    </div>

                    <div class="bond-funds-vs-individual">
                        <h4><i class="fas fa-balance-scale"></i> Bonos individuales vs. Fondos de bonos</h4>
                        
                        <div class="comparison-grid">
                            <div class="comparison-item individual-bonds">
                                <h6><i class="fas fa-file-contract"></i> Bonos Individuales</h6>
                                
                                <div class="pros">
                                    <strong>Ventajas:</strong>
                                    <ul>
                                        <li>Rendimiento predecible si mantienes hasta vencimiento</li>
                                        <li>Control total sobre qué bonos posees</li>
                                        <li>No hay comisiones de administración</li>
                                        <li>Fecha de vencimiento definida</li>
                                    </ul>
                                </div>
                                
                                <div class="cons">
                                    <strong>Desventajas:</strong>
                                    <ul>
                                        <li>Requiere inversión mínima alta ($1,000-$5,000+ por bono)</li>
                                        <li>Difícil diversificar con poco dinero</li>
                                        <li>Menos liquidez</li>
                                        <li>Más trabajo de investigación y seguimiento</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="comparison-item bond-funds">
                                <h6><i class="fas fa-layer-group"></i> Fondos de Bonos</h6>
                                
                                <div class="pros">
                                    <strong>Ventajas:</strong>
                                    <ul>
                                        <li>Diversificación instantánea</li>
                                        <li>Inversión mínima baja</li>
                                        <li>Gestión profesional</li>
                                        <li>Alta liquidez (puedes vender diariamente)</li>
                                        <li>Reinversión automática de intereses</li>
                                    </ul>
                                </div>
                                
                                <div class="cons">
                                    <strong>Desventajas:</strong>
                                    <ul>
                                        <li>Comisiones de administración (0.2%-2% anual)</li>
                                        <li>No hay fecha de vencimiento garantizada</li>
                                        <li>Rendimiento no predecible</li>
                                        <li>Riesgo de que otros inversionistas vendan (outflows)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="recommendation">
                            <h6><i class="fas fa-lightbulb"></i> Recomendación para principiantes:</h6>
                            <p>Si tienes menos de $50,000 USD para invertir en bonos, probablemente los fondos de bonos (especialmente ETFs de bonos) sean mejor opción por la diversificación y bajos costos.</p>
                        </div>
                    </div>

                    <div class="bond-etfs">
                        <h4><i class="fas fa-chart-pie"></i> ETFs de bonos populares</h4>
                        
                        <div class="etf-categories">
                            <div class="etf-category government">
                                <h6><i class="fas fa-university"></i> Bonos Gubernamentales</h6>
                                <ul>
                                    <li><strong>TLT:</strong> Bonos del Tesoro de EE.UU. a 20+ años</li>
                                    <li><strong>IEF:</strong> Bonos del Tesoro de EE.UU. a 7-10 años</li>
                                    <li><strong>SHY:</strong> Bonos del Tesoro de EE.UU. a 1-3 años</li>
                                    <li><strong>TIPS:</strong> Bonos del Tesoro protegidos contra inflación</li>
                                </ul>
                            </div>

                            <div class="etf-category corporate">
                                <h6><i class="fas fa-building"></i> Bonos Corporativos</h6>
                                <ul>
                                    <li><strong>LQD:</strong> Bonos corporativos investment grade</li>
                                    <li><strong>HYG:</strong> Bonos corporativos high yield</li>
                                    <li><strong>JNK:</strong> Bonos "junk" de alto rendimiento</li>
                                </ul>
                            </div>

                            <div class="etf-category international">
                                <h6><i class="fas fa-globe"></i> Bonos Internacionales</h6>
                                <ul>
                                    <li><strong>BNDX:</strong> Bonos internacionales ex-EE.UU.</li>
                                    <li><strong>EMB:</strong> Bonos de mercados emergentes</li>
                                    <li><strong>VTEB:</strong> Bonos municipales exentos de impuestos</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="practical-tips">
                        <h4><i class="fas fa-lightbulb"></i> Consejos prácticos para invertir en bonos</h4>
                        
                        <div class="tip">
                            <h6><i class="fas fa-chart-pie"></i> 1. Los bonos como parte de un portafolio balanceado</h6>
                            <p>Los bonos no deben ser tu única inversión. Una regla común es tener tu edad en bonos (si tienes 30 años, 30% en bonos, 70% en acciones).</p>
                        </div>

                        <div class="tip">
                            <h6><i class="fas fa-calendar-check"></i> 2. Considera tu horizonte temporal</h6>
                            <p>Si necesitas el dinero pronto, usa bonos de corto plazo. Si es para el largo plazo, puedes usar bonos más largos para mayor rendimiento.</p>
                        </div>

                        <div class="tip">
                            <h6><i class="fas fa-shield-alt"></i> 3. Diversifica por emisor y vencimiento</h6>
                            <p>No pongas todo en bonos de una sola empresa o gobierno. Diversifica también los vencimientos para reducir riesgo de tasa de interés.</p>
                        </div>

                        <div class="tip">
                            <h6><i class="fas fa-search"></i> 4. Entiende lo que compras</h6>
                            <p>Lee los términos del bono: ¿es callable? ¿Tiene protección contra inflación? ¿Cuál es la calificación crediticia?</p>
                        </div>

                        <div class="tip">
                            <h6><i class="fas fa-calculator"></i> 5. Calcula el rendimiento real</h6>
                            <p>Resta la inflación esperada del rendimiento nominal para saber tu ganancia real de poder adquisitivo.</p>
                        </div>
                    </div>

                    <div class="video-resources">
                        <h4><i class="fas fa-play-circle"></i> Videos recomendados</h4>
                        <div class="video-links">
                            <a href="https://www.youtube.com/watch?v=IuyejHOGpKA" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                Bonds Explained for Beginners
                            </a>
                            <a href="https://www.youtube.com/watch?v=7Coz_yoQhbs" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                How Bond Pricing Works
                            </a>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h4><i class="fas fa-key"></i> Puntos clave para recordar</h4>
                        <div class="takeaway-grid">
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los bonos son préstamos que haces a gobiernos o empresas</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Precios y tasas de interés tienen relación inversa</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Mayor duration = mayor sensibilidad a cambios de tasas</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Diversifica por emisor, calidad crediticia y vencimiento</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Para principiantes, ETFs de bonos suelen ser mejor opción</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los bonos proporcionan estabilidad y ingresos predecibles</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        section3: {
            title: 'ETFs: Diversificación instantánea',
            content: `
                <div class="content-section">
                    <h3>ETFs: Diversificación instantánea</h3>
                    
                    <div class="intro-analogy">
                        <p>Imagina que quieres probar la comida de 500 restaurantes diferentes, pero solo tienes tiempo y dinero para una comida. Imposible, ¿verdad?</p>
                        
                        <p>Ahora imagina que existe un "buffet mágico" donde con un solo plato puedes probar un poquito de la comida de esos 500 restaurantes. Pagas una sola vez, obtienes variedad instantánea, y si un restaurante tiene un mal día, los otros 499 compensan.</p>
                        
                        <p>Ese "buffet mágico" existe en el mundo de las inversiones y se llama <strong>ETF</strong> (Exchange-Traded Fund). Con una sola compra puedes ser dueño de pequeñas partes de cientos o miles de empresas diferentes.</p>
                    </div>

                    <div class="etf-definition">
                        <h4><i class="fas fa-layer-group"></i> ¿Qué es un ETF?</h4>
                        
                        <div class="definition-box">
                            <p>Un <strong>ETF</strong> (Exchange-Traded Fund o Fondo Cotizado en Bolsa) es un fondo de inversión que se compra y vende en la bolsa como si fuera una acción individual, pero que contiene una canasta diversificada de activos (acciones, bonos, commodities, etc.).</p>
                        </div>

                        <div class="etf-characteristics">
                            <h5>Características únicas de los ETFs:</h5>
                            
                            <div class="characteristic">
                                <i class="fas fa-chart-pie"></i>
                                <div>
                                    <strong>Diversificación instantánea:</strong> Una sola compra te da exposición a cientos o miles de activos
                                </div>
                            </div>
                            
                            <div class="characteristic">
                                <i class="fas fa-exchange-alt"></i>
                                <div>
                                    <strong>Liquidez como acciones:</strong> Se compran y venden durante horas de mercado
                                </div>
                            </div>
                            
                            <div class="characteristic">
                                <i class="fas fa-dollar-sign"></i>
                                <div>
                                    <strong>Costos bajos:</strong> Comisiones típicamente entre 0.03% - 0.75% anual
                                </div>
                            </div>
                            
                            <div class="characteristic">
                                <i class="fas fa-eye"></i>
                                <div>
                                    <strong>Transparencia total:</strong> Puedes ver exactamente qué contienen diariamente
                                </div>
                            </div>
                            
                            <div class="characteristic">
                                <i class="fas fa-coins"></i>
                                <div>
                                    <strong>Inversión mínima baja:</strong> Puedes empezar con el precio de una sola "acción" del ETF
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="etf-vs-alternatives">
                        <h4><i class="fas fa-balance-scale"></i> ETFs vs. otras opciones de inversión</h4>
                        
                        <div class="comparison-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Aspecto</th>
                                        <th>ETF</th>
                                        <th>Fondo Mutuo</th>
                                        <th>Acciones Individuales</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Diversificación</strong></td>
                                        <td>Alta (automática)</td>
                                        <td>Alta (automática)</td>
                                        <td>Baja (manual)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Liquidez</strong></td>
                                        <td>Alta (horario de mercado)</td>
                                        <td>Baja (una vez al día)</td>
                                        <td>Variable</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Costos anuales</strong></td>
                                        <td>0.03% - 0.75%</td>
                                        <td>0.5% - 2.5%</td>
                                        <td>0% (solo comisiones de compra/venta)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Inversión mínima</strong></td>
                                        <td>Precio de 1 share (~$50-500)</td>
                                        <td>$1,000 - $10,000</td>
                                        <td>Precio de 1 acción</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Control</strong></td>
                                        <td>Bajo (siguen índice)</td>
                                        <td>Bajo (gestor decide)</td>
                                        <td>Alto (tú decides)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Transparencia</strong></td>
                                        <td>Total (holdings diarios)</td>
                                        <td>Parcial (holdings trimestrales)</td>
                                        <td>Total</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="etf-types">
                        <h4><i class="fas fa-tags"></i> Tipos principales de ETFs</h4>
                        
                        <div class="etf-category-card equity">
                            <div class="category-header">
                                <i class="fas fa-chart-line"></i>
                                <h5>ETFs de Acciones (Equity ETFs)</h5>
                            </div>
                            <div class="category-content">
                                <p><strong>¿Qué contienen?</strong> Canastas de acciones organizadas por diferentes criterios.</p>
                                
                                <div class="subcategories">
                                    <div class="subcategory">
                                        <h6><i class="fas fa-globe"></i> Por geografía:</h6>
                                        <ul>
                                            <li><strong>SPY, VOO, IVV:</strong> S&P 500 (500 empresas más grandes de EE.UU.)</li>
                                            <li><strong>VTI:</strong> Todo el mercado estadounidense (~4,000 empresas)</li>
                                            <li><strong>VEA:</strong> Mercados desarrollados ex-EE.UU. (Europa, Japón, etc.)</li>
                                            <li><strong>VWO:</strong> Mercados emergentes (China, India, Brasil, etc.)</li>
                                            <li><strong>ACWI:</strong> Todo el mundo (desarrollados + emergentes)</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="subcategory">
                                        <h6><i class="fas fa-industry"></i> Por sector:</h6>
                                        <ul>
                                            <li><strong>XLK:</strong> Tecnología (Apple, Microsoft, Google)</li>
                                            <li><strong>XLF:</strong> Financiero (JPMorgan, Bank of America)</li>
                                            <li><strong>XLV:</strong> Salud (Johnson & Johnson, Pfizer)</li>
                                            <li><strong>XLE:</strong> Energía (Exxon, Chevron)</li>
                                            <li><strong>XLI:</strong> Industrial (Boeing, Caterpillar)</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="subcategory">
                                        <h6><i class="fas fa-resize-arrows-alt"></i> Por tamaño de empresa:</h6>
                                        <ul>
                                            <li><strong>VV:</strong> Large Cap (empresas grandes)</li>
                                            <li><strong>VO:</strong> Mid Cap (empresas medianas)</li>
                                            <li><strong>VB:</strong> Small Cap (empresas pequeñas)</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="subcategory">
                                        <h6><i class="fas fa-gem"></i> Por estilo de inversión:</h6>
                                        <ul>
                                            <li><strong>VTV:</strong> Value (empresas "baratas")</li>
                                            <li><strong>VUG:</strong> Growth (empresas de crecimiento)</li>
                                            <li><strong>VYM:</strong> High Dividend Yield (altos dividendos)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="etf-category-card bond">
                            <div class="category-header">
                                <i class="fas fa-file-contract"></i>
                                <h5>ETFs de Bonos (Bond ETFs)</h5>
                            </div>
                            <div class="category-content">
                                <p><strong>¿Qué contienen?</strong> Canastas de bonos de diferentes tipos y vencimientos.</p>
                                
                                <div class="bond-etf-examples">
                                    <ul>
                                        <li><strong>BND:</strong> Bonos totales de EE.UU. (gubernamentales + corporativos)</li>
                                        <li><strong>TLT:</strong> Bonos del Tesoro de EE.UU. a 20+ años</li>
                                        <li><strong>SHY:</strong> Bonos del Tesoro de EE.UU. a 1-3 años</li>
                                        <li><strong>LQD:</strong> Bonos corporativos investment grade</li>
                                        <li><strong>HYG:</strong> Bonos corporativos high yield ("junk bonds")</li>
                                        <li><strong>TIPS:</strong> Bonos protegidos contra inflación</li>
                                        <li><strong>EMB:</strong> Bonos de mercados emergentes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="etf-category-card commodity">
                            <div class="category-header">
                                <i class="fas fa-coins"></i>
                                <h5>ETFs de Commodities</h5>
                            </div>
                            <div class="category-content">
                                <p><strong>¿Qué contienen?</strong> Exposición a materias primas como oro, petróleo, agricultura.</p>
                                
                                <div class="commodity-examples">
                                    <ul>
                                        <li><strong>GLD:</strong> Oro físico</li>
                                        <li><strong>SLV:</strong> Plata física</li>
                                        <li><strong>USO:</strong> Petróleo crudo</li>
                                        <li><strong>DBA:</strong> Agricultura (maíz, soya, trigo, azúcar)</li>
                                        <li><strong>PDBC:</strong> Commodities diversificados</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="etf-category-card real-estate">
                            <div class="category-header">
                                <i class="fas fa-building"></i>
                                <h5>ETFs de Bienes Raíces (REITs)</h5>
                            </div>
                            <div class="category-content">
                                <p><strong>¿Qué contienen?</strong> Acciones de empresas que poseen y operan bienes raíces.</p>
                                
                                <div class="reit-examples">
                                    <ul>
                                        <li><strong>VNQ:</strong> REITs de EE.UU. (centros comerciales, oficinas, apartamentos)</li>
                                        <li><strong>VNQI:</strong> REITs internacionales</li>
                                        <li><strong>XLRE:</strong> Sector inmobiliario del S&P 500</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="etf-category-card thematic">
                            <div class="category-header">
                                <i class="fas fa-lightbulb"></i>
                                <h5>ETFs Temáticos</h5>
                            </div>
                            <div class="category-content">
                                <p><strong>¿Qué contienen?</strong> Empresas relacionadas con tendencias o temas específicos.</p>
                                
                                <div class="thematic-examples">
                                    <ul>
                                        <li><strong>ARKK:</strong> Innovación disruptiva</li>
                                        <li><strong>ICLN:</strong> Energía limpia</li>
                                        <li><strong>ROBO:</strong> Robótica e inteligencia artificial</li>
                                        <li><strong>ESGU:</strong> ESG (Environmental, Social, Governance)</li>
                                        <li><strong>HACK:</strong> Ciberseguridad</li>
                                        <li><strong>BOTZ:</strong> Robótica y automatización</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="how-etfs-work">
                        <h4><i class="fas fa-cogs"></i> ¿Cómo funcionan los ETFs?</h4>
                        
                        <div class="etf-mechanism">
                            <h5>El mecanismo de creación y redención</h5>
                            
                            <div class="mechanism-explanation">
                                <p>Los ETFs mantienen su precio cerca del valor de sus activos subyacentes a través de un proceso llamado "creación y redención" que involucra a grandes instituciones llamadas "Authorized Participants" (APs).</p>
                            </div>
                            
                            <div class="mechanism-steps">
                                <div class="step">
                                    <div class="step-number">1</div>
                                    <div class="step-content">
                                        <h6>Creación de shares</h6>
                                        <p>Cuando hay mucha demanda, los APs entregan una canasta de acciones al ETF y reciben nuevas shares del ETF para vender en el mercado.</p>
                                    </div>
                                </div>

                                <div class="step">
                                    <div class="step-number">2</div>
                                    <div class="step-content">
                                        <h6>Redención de shares</h6>
                                        <p>Cuando hay mucha venta, los APs entregan shares del ETF y reciben la canasta de acciones subyacentes.</p>
                                    </div>
                                </div>

                                <div class="step">
                                    <div class="step-number">3</div>
                                    <div class="step-content">
                                        <h6>Arbitraje</h6>
                                        <p>Si el precio del ETF se desvía del valor de sus activos, los APs pueden ganar dinero comprando lo barato y vendiendo lo caro, lo que corrige el precio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="nav-concept">
                            <h5><i class="fas fa-calculator"></i> NAV (Net Asset Value)</h5>
                            
                            <div class="nav-explanation">
                                <p><strong>NAV</strong> es el valor real de los activos del ETF dividido entre el número de shares. Es como el "precio justo" teórico del ETF.</p>
                                
                                <div class="nav-formula">
                                    <strong>NAV = (Valor total de activos - Gastos) ÷ Número de shares</strong>
                                </div>
                            </div>
                            
                            <div class="premium-discount">
                                <h6>Premium y Discount:</h6>
                                <ul>
                                    <li><strong>Premium:</strong> Cuando el ETF cotiza por encima de su NAV</li>
                                    <li><strong>Discount:</strong> Cuando el ETF cotiza por debajo de su NAV</li>
                                    <li><strong>Normal:</strong> Las diferencias suelen ser menores al 0.5%</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="etf-advantages">
                        <h4><i class="fas fa-thumbs-up"></i> Ventajas de los ETFs</h4>
                        
                        <div class="advantage">
                            <h6><i class="fas fa-chart-pie"></i> Diversificación instantánea</h6>
                            <p>Con $100 USD puedes ser dueño de partes de 500 empresas (SPY) o de todo el mercado mundial (VT). Sería imposible lograr esta diversificación comprando acciones individuales con poco dinero.</p>
                        </div>

                        <div class="advantage">
                            <h6><i class="fas fa-dollar-sign"></i> Costos muy bajos</h6>
                            <p>Los ETFs más populares cobran entre 0.03% - 0.20% anual. Esto significa que por cada $10,000 USD invertidos, pagas solo $3-20 USD al año en comisiones.</p>
                            
                            <div class="cost-comparison">
                                <strong>Comparación de costos anuales en $10,000 USD:</strong>
                                <ul>
                                    <li><strong>ETF (VOO):</strong> $3 USD (0.03%)</li>
                                    <li><strong>Fondo mutuo promedio:</strong> $100 USD (1.0%)</li>
                                    <li><strong>Fondo activo caro:</strong> $200 USD (2.0%)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="advantage">
                            <h6><i class="fas fa-clock"></i> Flexibilidad de trading</h6>
                            <p>Puedes comprar y vender ETFs durante todo el horario de mercado, no solo al cierre como los fondos mutuos. También puedes usar órdenes stop-loss, limit orders, etc.</p>
                        </div>

                        <div class="advantage">
                            <h6><i class="fas fa-eye"></i> Transparencia total</h6>
                            <p>Cada día puedes ver exactamente qué acciones o bonos contiene tu ETF y en qué porcentajes. No hay sorpresas.</p>
                        </div>

                        <div class="advantage">
                            <h6><i class="fas fa-coins"></i> Eficiencia fiscal</h6>
                            <p>Los ETFs son más eficientes fiscalmente que los fondos mutuos porque generan menos distribuciones de ganancias de capital gravables.</p>
                        </div>

                        <div class="advantage">
                            <h6><i class="fas fa-hand-holding-usd"></i> Accesibilidad</h6>
                            <p>No necesitas ser rico para diversificar. Puedes empezar con el precio de una sola share (típicamente $50-500 USD) y muchos brokers permiten compras fraccionarias.</p>
                        </div>
                    </div>

                    <div class="etf-disadvantages">
                        <h4><i class="fas fa-thumbs-down"></i> Desventajas de los ETFs</h4>
                        
                        <div class="disadvantage">
                            <h6><i class="fas fa-robot"></i> Rendimiento limitado al índice</h6>
                            <p>Los ETFs pasivos nunca superarán a su índice de referencia. Si el S&P 500 sube 10%, tu ETF del S&P 500 subirá ~9.97% (menos las comisiones).</p>
                        </div>

                        <div class="disadvantage">
                            <h6><i class="fas fa-chart-line"></i> Riesgo de concentración</h6>
                            <p>Algunos ETFs están muy concentrados. Por ejemplo, el ETF del S&P 500 tiene ~25% en solo 5 empresas tecnológicas (Apple, Microsoft, Google, Amazon, Tesla).</p>
                        </div>

                        <div class="disadvantage">
                            <h6><i class="fas fa-exchange-alt"></i> Spreads bid-ask</h6>
                            <p>Como se negocian en bolsa, hay una pequeña diferencia entre el precio de compra y venta. En ETFs populares es mínima, pero en ETFs exóticos puede ser significativa.</p>
                        </div>

                        <div class="disadvantage">
                            <h6><i class="fas fa-exclamation-triangle"></i> Riesgo de tracking error</h6>
                            <p>Aunque es raro, a veces el ETF no replica perfectamente su índice debido a costos, cash drag, o errores de sampling.</p>
                        </div>

                        <div class="disadvantage">
                            <h6><i class="fas fa-times-circle"></i> Posible cierre del ETF</h6>
                            <p>ETFs con pocos activos pueden cerrarse. Aunque recuperas tu dinero, puede ser inconveniente y generar consecuencias fiscales.</p>
                        </div>
                    </div>

                    <div class="etf-selection-criteria">
                        <h4><i class="fas fa-search"></i> Cómo elegir el ETF correcto</h4>
                        
                        <div class="selection-criteria">
                            <div class="criterion">
                                <h6><i class="fas fa-bullseye"></i> 1. Define tu objetivo</h6>
                                <p>¿Qué quieres lograr? ¿Exposición al mercado total? ¿Un sector específico? ¿Protección contra inflación?</p>
                                
                                <div class="objective-examples">
                                    <strong>Ejemplos de objetivos:</strong>
                                    <ul>
                                        <li><strong>Diversificación básica:</strong> VTI (mercado total de EE.UU.)</li>
                                        <li><strong>Exposición internacional:</strong> VTIAX (mercados internacionales)</li>
                                        <li><strong>Ingresos estables:</strong> VYM (altos dividendos)</li>
                                        <li><strong>Protección contra inflación:</strong> TIPS</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="criterion">
                                <h6><i class="fas fa-dollar-sign"></i> 2. Revisa el expense ratio</h6>
                                <p>Es la comisión anual que cobra el ETF. Busca ETFs con expense ratios bajos, especialmente para inversiones core.</p>
                                
                                <div class="expense-guidelines">
                                    <strong>Guías generales:</strong>
                                    <ul>
                                        <li><strong>Excelente:</strong> < 0.10%</li>
                                        <li><strong>Bueno:</strong> 0.10% - 0.25%</li>
                                        <li><strong>Aceptable:</strong> 0.25% - 0.50%</li>
                                        <li><strong>Caro:</strong> > 0.50%</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="criterion">
                                <h6><i class="fas fa-chart-bar"></i> 3. Verifica el AUM (Assets Under Management)</h6>
                                <p>ETFs con más activos son más estables y líquidos. Evita ETFs con menos de $100 millones USD.</p>
                                
                                <div class="aum-guidelines">
                                    <strong>Tamaños recomendados:</strong>
                                    <ul>
                                        <li><strong>Muy seguro:</strong> > $1 mil millones USD</li>
                                        <li><strong>Seguro:</strong> $500M - $1B USD</li>
                                        <li><strong>Aceptable:</strong> $100M - $500M USD</li>
                                        <li><strong>Riesgoso:</strong> < $100M USD</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="criterion">
                                <h6><i class="fas fa-calendar-alt"></i> 4. Considera la antigüedad</h6>
                                <p>ETFs más antiguos tienen historial comprobado. Evita ETFs muy nuevos a menos que tengas una razón específica.</p>
                            </div>

                            <div class="criterion">
                                <h6><i class="fas fa-tint"></i> 5. Revisa la liquidez</h6>
                                <p>Mira el volumen diario de trading y el bid-ask spread. ETFs populares tienen spreads de $0.01, mientras que ETFs exóticos pueden tener spreads de $0.10+.</p>
                            </div>

                            <div class="criterion">
                                <h6><i class="fas fa-chart-line"></i> 6. Analiza el tracking error</h6>
                                <p>Compara el rendimiento del ETF con su índice de referencia. La diferencia debe ser aproximadamente igual al expense ratio.</p>
                            </div>
                        </div>
                    </div>

                    <div class="popular-etfs">
                        <h4><i class="fas fa-star"></i> ETFs más populares para principiantes</h4>
                        
                        <div class="etf-recommendations">
                            <div class="etf-rec core">
                                <h6><i class="fas fa-heart"></i> Core Holdings (Base del portafolio)</h6>
                                
                                <div class="etf-item">
                                    <div class="etf-header">
                                        <strong>VTI - Vanguard Total Stock Market ETF</strong>
                                        <span class="expense-ratio">0.03%</span>
                                    </div>
                                    <div class="etf-details">
                                        <p><strong>Qué contiene:</strong> ~4,000 empresas estadounidenses de todos los tamaños</p>
                                        <p><strong>Por qué es bueno:</strong> Máxima diversificación en EE.UU., costo ultra bajo</p>
                                        <p><strong>AUM:</strong> $300+ mil millones USD</p>
                                    </div>
                                </div>

                                <div class="etf-item">
                                    <div class="etf-header">
                                        <strong>VTIAX - Vanguard Total International Stock ETF</strong>
                                        <span class="expense-ratio">0.08%</span>
                                    </div>
                                    <div class="etf-details">
                                        <p><strong>Qué contiene:</strong> ~8,000 empresas internacionales (Europa, Asia, emergentes)</p>
                                        <p><strong>Por qué es bueno:</strong> Diversificación geográfica, complementa VTI</p>
                                        <p><strong>AUM:</strong> $40+ mil millones USD</p>
                                    </div>
                                </div>

                                <div class="etf-item">
                                    <div class="etf-header">
                                        <strong>BND - Vanguard Total Bond Market ETF</strong>
                                        <span class="expense-ratio">0.03%</span>
                                    </div>
                                    <div class="etf-details">
                                        <p><strong>Qué contiene:</strong> ~10,000 bonos estadounidenses (gubernamentales + corporativos)</p>
                                        <p><strong>Por qué es bueno:</strong> Estabilidad, ingresos, diversificación de activos</p>
                                        <p><strong>AUM:</strong> $90+ mil millones USD</p>
                                    </div>
                                </div>
                            </div>

                            <div class="etf-rec satellite">
                                <h6><i class="fas fa-satellite"></i> Satellite Holdings (Complementos especializados)</h6>
                                
                                <div class="etf-item">
                                    <div class="etf-header">
                                        <strong>VYM - Vanguard High Dividend Yield ETF</strong>
                                        <span class="expense-ratio">0.06%</span>
                                    </div>
                                    <div class="etf-details">
                                        <p><strong>Para qué:</strong> Ingresos regulares por dividendos</p>
                                        <p><strong>Dividend yield:</strong> ~3%</p>
                                    </div>
                                </div>

                                <div class="etf-item">
                                    <div class="etf-header">
                                        <strong>VNQ - Vanguard Real Estate ETF</strong>
                                        <span class="expense-ratio">0.12%</span>
                                    </div>
                                    <div class="etf-details">
                                        <p><strong>Para qué:</strong> Exposición a bienes raíces</p>
                                        <p><strong>Diversificación:</strong> Diferente a acciones y bonos</p>
                                    </div>
                                </div>

                                <div class="etf-item">
                                    <div class="etf-header">
                                        <strong>GLD - SPDR Gold Shares</strong>
                                        <span class="expense-ratio">0.40%</span>
                                    </div>
                                    <div class="etf-details">
                                        <p><strong>Para qué:</strong> Protección contra inflación y crisis</p>
                                        <p><strong>Nota:</strong> Solo pequeño porcentaje del portafolio (5-10%)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="portfolio-examples">
                        <h4><i class="fas fa-chart-pie"></i> Ejemplos de portafolios con ETFs</h4>
                        
                        <div class="portfolio simple-portfolio">
                            <h6><i class="fas fa-seedling"></i> Portafolio Simple (3 ETFs)</h6>
                            <div class="portfolio-allocation">
                                <div class="allocation-item">
                                    <div class="allocation-bar" style="width: 60%; background: #4CAF50;">
                                        <span>60% VTI (Acciones EE.UU.)</span>
                                    </div>
                                </div>
                                <div class="allocation-item">
                                    <div class="allocation-bar" style="width: 30%; background: #2196F3;">
                                        <span>30% VTIAX (Acciones Internacionales)</span>
                                    </div>
                                </div>
                                <div class="allocation-item">
                                    <div class="allocation-bar" style="width: 10%; background: #FF9800;">
                                        <span>10% BND (Bonos)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-notes">
                                <p><strong>Para quién:</strong> Jóvenes (20-30 años) con alta tolerancia al riesgo</p>
                                <p><strong>Costo total:</strong> ~0.05% anual</p>
                            </div>
                        </div>

                        <div class="portfolio balanced-portfolio">
                            <h6><i class="fas fa-balance-scale"></i> Portafolio Balanceado (4 ETFs)</h6>
                            <div class="portfolio-allocation">
                                <div class="allocation-item">
                                    <div class="allocation-bar" style="width: 40%; background: #4CAF50;">
                                        <span>40% VTI (Acciones EE.UU.)</span>
                                    </div>
                                </div>
                                <div class="allocation-item">
                                    <div class="allocation-bar" style="width: 20%; background: #2196F3;">
                                        <span>20% VTIAX (Acciones Internacionales)</span>
                                    </div>
                                </div>
                                <div class="allocation-item">
                                    <div class="allocation-bar" style="width: 30%; background: #FF9800;">
                                        <span>30% BND (Bonos)</span>
                                    </div>
                                </div>
                                <div class="allocation-item">
                                    <div class="allocation-bar" style="width: 10%; background: #9C27B0;">
                                        <span>10% VNQ (Bienes Raíces)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-notes">
                                <p><strong>Para quién:</strong> Adultos (30-50 años) con tolerancia moderada al riesgo</p>
                                <p><strong>Costo total:</strong> ~0.06% anual</p>
                            </div>
                        </div>

                        <div class="portfolio conservative-portfolio">
                            <h6><i class="fas fa-shield-alt"></i> Portafolio Conservador (5 ETFs)</h6>
                            <div class="portfolio-allocation">
                                <div class="allocation-item">
                                    <div class="allocation-bar" style="width: 25%; background: #4CAF50;">
                                        <span>25% VTI (Acciones EE.UU.)</span>
                                    </div>
                                </div>
                                <div class="allocation-item">
                                    <div class="allocation-bar" style="width: 15%; background: #2196F3;">
                                        <span>15% VTIAX (Acciones Internacionales)</span>
                                    </div>
                                </div>
                                <div class="allocation-item">
                                    <div class="allocation-bar" style="width: 40%; background: #FF9800;">
                                        <span>40% BND (Bonos)</span>
                                    </div>
                                </div>
                                <div class="allocation-item">
                                    <div class="allocation-bar" style="width: 10%; background: #9C27B0;">
                                        <span>10% VYM (Altos Dividendos)</span>
                                    </div>
                                </div>
                                <div class="allocation-item">
                                    <div class="allocation-bar" style="width: 10%; background: #FFC107;">
                                        <span>10% GLD (Oro)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-notes">
                                <p><strong>Para quién:</strong> Personas cerca de jubilación (50+ años) o baja tolerancia al riesgo</p>
                                <p><strong>Costo total:</strong> ~0.10% anual</p>
                            </div>
                        </div>
                    </div>

                    <div class="etf-mistakes">
                        <h4><i class="fas fa-exclamation-triangle"></i> Errores comunes con ETFs</h4>
                        
                        <div class="mistake">
                            <h6>❌ Sobre-diversificación</h6>
                            <p><strong>El error:</strong> Comprar 20+ ETFs diferentes pensando que más es mejor.</p>
                            <p><strong>Por qué es malo:</strong> Muchos ETFs se superponen, aumentas costos y complejidad sin beneficio.</p>
                            <p><strong>Mejor estrategia:</strong> 3-7 ETFs bien elegidos son suficientes para la mayoría de personas.</p>
                        </div>

                        <div class="mistake">
                            <h6>❌ Perseguir performance pasado</h6>
                            <p><strong>El error:</strong> Comprar ETFs que tuvieron el mejor rendimiento el año pasado.</p>
                            <p><strong>Por qué es malo:</strong> El rendimiento pasado no garantiza rendimiento futuro.</p>
                            <p><strong>Mejor estrategia:</strong> Enfócate en diversificación y costos bajos, no en performance.</p>
                        </div>

                        <div class="mistake">
                            <h6>❌ Trading excesivo</h6>
                            <p><strong>El error:</strong> Comprar y vender ETFs frecuentemente tratando de "timing the market".</p>
                            <p><strong>Por qué es malo:</strong> Generas costos de transacción y típicamente compras caro y vendes barato.</p>
                            <p><strong>Mejor estrategia:</strong> Buy and hold, rebalancear solo 1-2 veces al año.</p>
                        </div>

                        <div class="mistake">
                            <h6>❌ Ignorar los costos</h6>
                            <p><strong>El error:</strong> No revisar expense ratios y elegir ETFs caros.</p>
                            <p><strong>Por qué es malo:</strong> Los costos se acumulan y reducen significativamente tus rendimientos a largo plazo.</p>
                            <p><strong>Mejor estrategia:</strong> Siempre compara costos, especialmente para ETFs core.</p>
                        </div>

                        <div class="mistake">
                            <h6>❌ No entender qué compras</h6>
                            <p><strong>El error:</strong> Comprar ETFs sin saber qué contienen o cómo funcionan.</p>
                            <p><strong>Por qué es malo:</strong> Puedes tener exposiciones no deseadas o duplicadas.</p>
                            <p><strong>Mejor estrategia:</strong> Lee el prospecto y entiende el índice que sigue cada ETF.</p>
                        </div>
                    </div>

                    <div class="practical-tips">
                        <h4><i class="fas fa-lightbulb"></i> Consejos prácticos para invertir en ETFs</h4>
                        
                        <div class="tip">
                            <h6><i class="fas fa-rocket"></i> 1. Empieza simple</h6>
                            <p>Un portafolio de 3 ETFs (VTI + VTIAX + BND) te da diversificación global instantánea. Puedes sofisticar después.</p>
                        </div>

                        <div class="tip">
                            <h6><i class="fas fa-calendar-check"></i> 2. Invierte regularmente</h6>
                            <p>Usa dollar-cost averaging: invierte la misma cantidad cada mes sin importar si el mercado está alto o bajo.</p>
                        </div>

                        <div class="tip">
                            <h6><i class="fas fa-sync-alt"></i> 3. Rebalancea periódicamente</h6>
                            <p>Una vez al año, ajusta tu portafolio para volver a las asignaciones objetivo. Esto te fuerza a "vender caro y comprar barato".</p>
                        </div>

                        <div class="tip">
                            <h6><i class="fas fa-piggy-bank"></i> 4. Reinvierte dividendos automáticamente</h6>
                            <p>Configura tu broker para reinvertir dividendos automáticamente. El interés compuesto es tu mejor amigo.</p>
                        </div>

                        <div class="tip">
                            <h6><i class="fas fa-chart-line"></i> 5. Mantén perspectiva a largo plazo</h6>
                            <p>Los ETFs son para inversión a largo plazo (5+ años). No te desesperes por volatilidad de corto plazo.</p>
                        </div>
                    </div>

                    <div class="video-resources">
                        <h4><i class="fas fa-play-circle"></i> Videos recomendados</h4>
                        <div class="video-links">
                            <a href="https://www.youtube.com/watch?v=fvGLnthJDsg" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                ETFs Explained For Beginners
                            </a>
                            <a href="https://www.youtube.com/watch?v=XQ-lmzJj8Qs" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                How to Build an ETF Portfolio
                            </a>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h4><i class="fas fa-key"></i> Puntos clave para recordar</h4>
                        <div class="takeaway-grid">
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los ETFs ofrecen diversificación instantánea con costos muy bajos</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>3-7 ETFs bien elegidos son suficientes para la mayoría de inversionistas</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Prioriza ETFs con expense ratios bajos y alto AUM</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>VTI + VTIAX + BND forman una base sólida para cualquier portafolio</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Invierte regularmente y rebalancea anualmente</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los ETFs son ideales para estrategias buy-and-hold a largo plazo</p>
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
    module.exports = module3Content;
}

