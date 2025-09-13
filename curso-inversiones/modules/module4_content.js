// Module 4: Estrategias Avanzadas y Análisis de Mercado
const module4Content = {
    id: 4,
    title: 'Estrategias Avanzadas y Análisis de Mercado',
    sections: {
        section1: {
            title: 'Portfolio Strategy: Construyendo carteras ganadoras',
            content: `
                <div class="content-section">
                    <h3>Portfolio Strategy: Construyendo carteras ganadoras</h3>
                    
                    <div class="intro-analogy">
                        <p>Imagina que eres el entrenador de un equipo de fútbol. No puedes ganar solo con delanteros estrella - necesitas defensas sólidos, mediocampistas creativos, porteros confiables, y suplentes preparados. Cada jugador tiene un rol específico, y el éxito viene de cómo trabajan juntos como equipo.</p>
                        
                        <p>Construir un <strong>portafolio de inversiones</strong> es exactamente igual. No puedes ganar solo con las acciones "estrella" del momento. Necesitas una estrategia que combine diferentes tipos de inversiones, cada una con su rol específico, trabajando juntas para lograr tus objetivos financieros.</p>
                    </div>

                    <div class="portfolio-definition">
                        <h4><i class="fas fa-briefcase"></i> ¿Qué es Portfolio Strategy?</h4>
                        
                        <div class="definition-box">
                            <p><strong>Portfolio Strategy</strong> es el arte y ciencia de combinar diferentes inversiones de manera que maximicen el rendimiento esperado para un nivel dado de riesgo, o minimicen el riesgo para un rendimiento esperado dado.</p>
                        </div>

                        <div class="portfolio-objectives">
                            <h5>Objetivos principales de una estrategia de portafolio:</h5>
                            
                            <div class="objective">
                                <i class="fas fa-target"></i>
                                <div>
                                    <strong>Maximizar rendimientos ajustados por riesgo:</strong> Obtener la mejor relación riesgo-recompensa posible
                                </div>
                            </div>
                            
                            <div class="objective">
                                <i class="fas fa-shield-alt"></i>
                                <div>
                                    <strong>Diversificar riesgos:</strong> No poner todos los huevos en la misma canasta
                                </div>
                            </div>
                            
                            <div class="objective">
                                <i class="fas fa-chart-line"></i>
                                <div>
                                    <strong>Adaptarse a objetivos personales:</strong> Alinear inversiones con metas, edad y tolerancia al riesgo
                                </div>
                            </div>
                            
                            <div class="objective">
                                <i class="fas fa-clock"></i>
                                <div>
                                    <strong>Mantener disciplina a largo plazo:</strong> Evitar decisiones emocionales que destruyen valor
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modern-portfolio-theory">
                        <h4><i class="fas fa-graduation-cap"></i> Teoría Moderna de Portafolios (Harry Markowitz)</h4>
                        
                        <div class="mpt-introduction">
                            <p>En 1952, Harry Markowitz revolucionó las finanzas con una idea simple pero poderosa: <em>"No es suficiente elegir buenas inversiones individuales; lo que importa es cómo se combinan entre sí."</em></p>
                            
                            <div class="nobel-prize">
                                <i class="fas fa-medal"></i>
                                <p><strong>Premio Nobel de Economía 1990</strong> por esta contribución fundamental</p>
                            </div>
                        </div>

                        <div class="key-insights">
                            <h5>Insights clave de Markowitz:</h5>
                            
                            <div class="insight">
                                <h6><i class="fas fa-puzzle-piece"></i> 1. La correlación es clave</h6>
                                <p>Dos inversiones que se mueven en direcciones opuestas pueden reducir el riesgo total del portafolio sin sacrificar rendimiento.</p>
                                
                                <div class="correlation-example">
                                    <strong>Ejemplo:</strong>
                                    <ul>
                                        <li><strong>Acción A:</strong> Sube 20% en recesión, baja 10% en expansión</li>
                                        <li><strong>Acción B:</strong> Baja 10% en recesión, sube 20% en expansión</li>
                                        <li><strong>Portafolio 50/50:</strong> Gana 5% en cualquier escenario con menos volatilidad</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="insight">
                                <h6><i class="fas fa-chart-area"></i> 2. La Frontera Eficiente</h6>
                                <p>Existe una curva que muestra las mejores combinaciones posibles de riesgo y rendimiento. Cualquier portafolio debajo de esta curva es subóptimo.</p>
                                
                                <div class="efficient-frontier-concept">
                                    <strong>Concepto:</strong> Para cada nivel de riesgo, hay un portafolio que maximiza el rendimiento. Para cada nivel de rendimiento, hay un portafolio que minimiza el riesgo.
                                </div>
                            </div>

                            <div class="insight">
                                <h6><i class="fas fa-balance-scale"></i> 3. Riesgo vs. Rendimiento</h6>
                                <p>No puedes eliminar todo el riesgo, pero puedes optimizar la relación riesgo-rendimiento a través de diversificación inteligente.</p>
                            </div>
                        </div>
                    </div>

                    <div class="asset-allocation">
                        <h4><i class="fas fa-chart-pie"></i> Asset Allocation: La decisión más importante</h4>
                        
                        <div class="allocation-importance">
                            <div class="statistic-box">
                                <h5><i class="fas fa-exclamation-circle"></i> Dato impactante:</h5>
                                <p>Estudios muestran que <strong>90%+ del rendimiento de un portafolio</strong> se explica por la asignación de activos (asset allocation), no por la selección específica de inversiones.</p>
                            </div>
                            
                            <p>Esto significa que es más importante decidir <em>cuánto</em> poner en acciones vs. bonos vs. otros activos, que elegir <em>cuáles</em> acciones específicas comprar.</p>
                        </div>

                        <div class="asset-classes">
                            <h5>Principales clases de activos:</h5>
                            
                            <div class="asset-class equities">
                                <div class="asset-header">
                                    <i class="fas fa-chart-line"></i>
                                    <h6>Equities (Acciones)</h6>
                                </div>
                                <div class="asset-details">
                                    <p><strong>Función:</strong> Motor de crecimiento del portafolio</p>
                                    <p><strong>Rendimiento esperado:</strong> 7-10% anual a largo plazo</p>
                                    <p><strong>Volatilidad:</strong> Alta (pueden caer 30-50% en crisis)</p>
                                    <p><strong>Subdivisiones:</strong></p>
                                    <ul>
                                        <li>Domésticas vs. Internacionales</li>
                                        <li>Desarrolladas vs. Emergentes</li>
                                        <li>Large cap vs. Small cap</li>
                                        <li>Growth vs. Value</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="asset-class bonds">
                                <div class="asset-header">
                                    <i class="fas fa-file-contract"></i>
                                    <h6>Fixed Income (Bonos)</h6>
                                </div>
                                <div class="asset-details">
                                    <p><strong>Función:</strong> Estabilidad y ingresos predecibles</p>
                                    <p><strong>Rendimiento esperado:</strong> 3-6% anual</p>
                                    <p><strong>Volatilidad:</strong> Baja a moderada</p>
                                    <p><strong>Subdivisiones:</strong></p>
                                    <ul>
                                        <li>Gubernamentales vs. Corporativos</li>
                                        <li>Corto vs. Largo plazo</li>
                                        <li>Investment grade vs. High yield</li>
                                        <li>Nominales vs. Indexados a inflación</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="asset-class alternatives">
                                <div class="asset-header">
                                    <i class="fas fa-coins"></i>
                                    <h6>Alternatives (Alternativos)</h6>
                                </div>
                                <div class="asset-details">
                                    <p><strong>Función:</strong> Diversificación y protección contra inflación</p>
                                    <p><strong>Rendimiento esperado:</strong> Variable</p>
                                    <p><strong>Volatilidad:</strong> Variable</p>
                                    <p><strong>Incluye:</strong></p>
                                    <ul>
                                        <li>Bienes raíces (REITs)</li>
                                        <li>Commodities (oro, petróleo, agricultura)</li>
                                        <li>Private equity</li>
                                        <li>Hedge funds</li>
                                        <li>Criptomonedas</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="asset-class cash">
                                <div class="asset-header">
                                    <i class="fas fa-money-bill-wave"></i>
                                    <h6>Cash & Cash Equivalents</h6>
                                </div>
                                <div class="asset-details">
                                    <p><strong>Función:</strong> Liquidez y capital de oportunidad</p>
                                    <p><strong>Rendimiento esperado:</strong> 1-4% anual</p>
                                    <p><strong>Volatilidad:</strong> Muy baja</p>
                                    <p><strong>Incluye:</strong></p>
                                    <ul>
                                        <li>Cuentas de ahorro</li>
                                        <li>CDs (Certificados de depósito)</li>
                                        <li>Money market funds</li>
                                        <li>Treasury bills</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="allocation-strategies">
                        <h4><i class="fas fa-chess"></i> Estrategias de asignación por edad y objetivos</h4>
                        
                        <div class="age-based-allocation">
                            <h5><i class="fas fa-birthday-cake"></i> Asignación basada en edad</h5>
                            
                            <div class="age-strategy young">
                                <h6><i class="fas fa-seedling"></i> Jóvenes (20-35 años)</h6>
                                <div class="strategy-details">
                                    <div class="allocation-pie">
                                        <div class="pie-segment" style="--percentage: 80; --color: #4CAF50;">80% Acciones</div>
                                        <div class="pie-segment" style="--percentage: 15; --color: #FF9800;">15% Bonos</div>
                                        <div class="pie-segment" style="--percentage: 5; --color: #9C27B0;">5% Alternativos</div>
                                    </div>
                                    <div class="strategy-rationale">
                                        <p><strong>Lógica:</strong> Tiempo largo para recuperarse de caídas, necesidad de crecimiento para vencer inflación</p>
                                        <p><strong>Riesgo:</strong> Alto, pero tiempo para recuperación</p>
                                        <p><strong>Objetivo:</strong> Maximizar crecimiento a largo plazo</p>
                                    </div>
                                </div>
                            </div>

                            <div class="age-strategy middle">
                                <h6><i class="fas fa-user-tie"></i> Mediana edad (35-50 años)</h6>
                                <div class="strategy-details">
                                    <div class="allocation-pie">
                                        <div class="pie-segment" style="--percentage: 60; --color: #4CAF50;">60% Acciones</div>
                                        <div class="pie-segment" style="--percentage: 30; --color: #FF9800;">30% Bonos</div>
                                        <div class="pie-segment" style="--percentage: 10; --color: #9C27B0;">10% Alternativos</div>
                                    </div>
                                    <div class="strategy-rationale">
                                        <p><strong>Lógica:</strong> Balance entre crecimiento y estabilidad, ingresos más altos</p>
                                        <p><strong>Riesgo:</strong> Moderado</p>
                                        <p><strong>Objetivo:</strong> Crecimiento con algo de protección</p>
                                    </div>
                                </div>
                            </div>

                            <div class="age-strategy pre-retirement">
                                <h6><i class="fas fa-user-clock"></i> Pre-jubilación (50-65 años)</h6>
                                <div class="strategy-details">
                                    <div class="allocation-pie">
                                        <div class="pie-segment" style="--percentage: 40; --color: #4CAF50;">40% Acciones</div>
                                        <div class="pie-segment" style="--percentage: 45; --color: #FF9800;">45% Bonos</div>
                                        <div class="pie-segment" style="--percentage: 15; --color: #9C27B0;">15% Alternativos</div>
                                    </div>
                                    <div class="strategy-rationale">
                                        <p><strong>Lógica:</strong> Preservar capital acumulado, reducir volatilidad</p>
                                        <p><strong>Riesgo:</strong> Moderado-bajo</p>
                                        <p><strong>Objetivo:</strong> Preservación con algo de crecimiento</p>
                                    </div>
                                </div>
                            </div>

                            <div class="age-strategy retirement">
                                <h6><i class="fas fa-chair"></i> Jubilación (65+ años)</h6>
                                <div class="strategy-details">
                                    <div class="allocation-pie">
                                        <div class="pie-segment" style="--percentage: 25; --color: #4CAF50;">25% Acciones</div>
                                        <div class="pie-segment" style="--percentage: 60; --color: #FF9800;">60% Bonos</div>
                                        <div class="pie-segment" style="--percentage: 15; --color: #9C27B0;">15% Alternativos</div>
                                    </div>
                                    <div class="strategy-rationale">
                                        <p><strong>Lógica:</strong> Generar ingresos estables, preservar capital</p>
                                        <p><strong>Riesgo:</strong> Bajo</p>
                                        <p><strong>Objetivo:</strong> Ingresos y preservación de capital</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="rule-of-thumb">
                            <h5><i class="fas fa-calculator"></i> Reglas prácticas populares</h5>
                            
                            <div class="rule">
                                <h6>Regla "120 menos tu edad"</h6>
                                <p><strong>Fórmula:</strong> % en acciones = 120 - tu edad</p>
                                <div class="rule-examples">
                                    <ul>
                                        <li>25 años: 95% acciones, 5% bonos</li>
                                        <li>40 años: 80% acciones, 20% bonos</li>
                                        <li>60 años: 60% acciones, 40% bonos</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="rule">
                                <h6>Regla "Tu edad en bonos"</h6>
                                <p><strong>Fórmula:</strong> % en bonos = tu edad</p>
                                <div class="rule-examples">
                                    <ul>
                                        <li>30 años: 30% bonos, 70% acciones</li>
                                        <li>50 años: 50% bonos, 50% acciones</li>
                                        <li>70 años: 70% bonos, 30% acciones</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="rule-caveat">
                                <p><strong>⚠️ Importante:</strong> Estas son solo guías generales. Tu situación personal (ingresos, gastos, tolerancia al riesgo, objetivos) debe ser el factor principal.</p>
                            </div>
                        </div>
                    </div>

                    <div class="goal-based-investing">
                        <h4><i class="fas fa-bullseye"></i> Goal-Based Investing (Inversión por objetivos)</h4>
                        
                        <div class="gbi-concept">
                            <p>En lugar de pensar en "el portafolio", piensa en múltiples "buckets" (cubetas) cada uno diseñado para un objetivo específico con su propio horizonte temporal y tolerancia al riesgo.</p>
                        </div>

                        <div class="goal-buckets">
                            <div class="bucket emergency">
                                <div class="bucket-header">
                                    <i class="fas fa-first-aid"></i>
                                    <h6>Bucket 1: Fondo de Emergencia</h6>
                                </div>
                                <div class="bucket-details">
                                    <p><strong>Objetivo:</strong> 3-6 meses de gastos para emergencias</p>
                                    <p><strong>Horizonte:</strong> Inmediato (acceso en 24-48 horas)</p>
                                    <p><strong>Asignación:</strong> 100% cash/equivalentes</p>
                                    <p><strong>Productos:</strong> Cuentas de ahorro de alto rendimiento, money market</p>
                                </div>
                            </div>

                            <div class="bucket short-term">
                                <div class="bucket-header">
                                    <i class="fas fa-calendar-alt"></i>
                                    <h6>Bucket 2: Objetivos de corto plazo (1-5 años)</h6>
                                </div>
                                <div class="bucket-details">
                                    <p><strong>Ejemplos:</strong> Enganche de casa, auto, vacaciones, boda</p>
                                    <p><strong>Horizonte:</strong> 1-5 años</p>
                                    <p><strong>Asignación:</strong> 20% acciones, 70% bonos, 10% cash</p>
                                    <p><strong>Productos:</strong> CDs, bonos cortos, fondos conservadores</p>
                                </div>
                            </div>

                            <div class="bucket medium-term">
                                <div class="bucket-header">
                                    <i class="fas fa-graduation-cap"></i>
                                    <h6>Bucket 3: Objetivos de mediano plazo (5-15 años)</h6>
                                </div>
                                <div class="bucket-details">
                                    <p><strong>Ejemplos:</strong> Universidad de los hijos, casa más grande</p>
                                    <p><strong>Horizonte:</strong> 5-15 años</p>
                                    <p><strong>Asignación:</strong> 60% acciones, 35% bonos, 5% alternativos</p>
                                    <p><strong>Productos:</strong> ETFs diversificados, fondos balanceados</p>
                                </div>
                            </div>

                            <div class="bucket long-term">
                                <div class="bucket-header">
                                    <i class="fas fa-chair"></i>
                                    <h6>Bucket 4: Jubilación (15+ años)</h6>
                                </div>
                                <div class="bucket-details">
                                    <p><strong>Objetivo:</strong> Independencia financiera</p>
                                    <p><strong>Horizonte:</strong> 15+ años</p>
                                    <p><strong>Asignación:</strong> 80% acciones, 15% bonos, 5% alternativos</p>
                                    <p><strong>Productos:</strong> ETFs de crecimiento, cuentas de jubilación (401k, IRA)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="rebalancing">
                        <h4><i class="fas fa-sync-alt"></i> Rebalancing: Manteniendo el rumbo</h4>
                        
                        <div class="rebalancing-concept">
                            <p><strong>Rebalancing</strong> es el proceso de ajustar tu portafolio para volver a las asignaciones objetivo. Es una forma disciplinada de "vender caro y comprar barato".</p>
                        </div>

                        <div class="why-rebalance">
                            <h5>¿Por qué es necesario rebalancear?</h5>
                            
                            <div class="drift-example">
                                <h6>Ejemplo de drift (desviación):</h6>
                                <div class="drift-scenario">
                                    <p><strong>Portafolio inicial (enero):</strong></p>
                                    <ul>
                                        <li>60% acciones ($6,000)</li>
                                        <li>40% bonos ($4,000)</li>
                                        <li><strong>Total:</strong> $10,000</li>
                                    </ul>
                                    
                                    <p><strong>Después de un año (diciembre):</strong></p>
                                    <ul>
                                        <li>Acciones subieron 20%: $7,200 (67% del total)</li>
                                        <li>Bonos subieron 5%: $4,200 (33% del total)</li>
                                        <li><strong>Total:</strong> $11,400</li>
                                    </ul>
                                    
                                    <p><strong>Problema:</strong> Ahora tienes más riesgo del planeado (67% vs. 60% objetivo)</p>
                                </div>
                            </div>
                        </div>

                        <div class="rebalancing-methods">
                            <h5>Métodos de rebalancing:</h5>
                            
                            <div class="method calendar">
                                <h6><i class="fas fa-calendar-check"></i> Calendar Rebalancing</h6>
                                <p><strong>¿Qué es?</strong> Rebalancear en fechas fijas (ej: cada 6 o 12 meses)</p>
                                <div class="method-pros-cons">
                                    <div class="pros">
                                        <strong>Pros:</strong> Simple, disciplinado, fácil de recordar
                                    </div>
                                    <div class="cons">
                                        <strong>Contras:</strong> Puede ser innecesario si no hay mucha desviación
                                    </div>
                                </div>
                            </div>

                            <div class="method threshold">
                                <h6><i class="fas fa-percentage"></i> Threshold Rebalancing</h6>
                                <p><strong>¿Qué es?</strong> Rebalancear cuando una asignación se desvía más de X% del objetivo</p>
                                <div class="threshold-example">
                                    <strong>Ejemplo:</strong> Si tu objetivo es 60% acciones y llega a 65% o baja a 55%, rebalanceas
                                </div>
                                <div class="method-pros-cons">
                                    <div class="pros">
                                        <strong>Pros:</strong> Más eficiente, solo actúas cuando es necesario
                                    </div>
                                    <div class="cons">
                                        <strong>Contras:</strong> Requiere monitoreo constante
                                    </div>
                                </div>
                            </div>

                            <div class="method combination">
                                <h6><i class="fas fa-layer-group"></i> Combination Approach</h6>
                                <p><strong>¿Qué es?</strong> Revisar trimestralmente, rebalancear solo si hay desviación >5%</p>
                                <div class="method-pros-cons">
                                    <div class="pros">
                                        <strong>Pros:</strong> Balance entre simplicidad y eficiencia
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="rebalancing-considerations">
                            <h5>Consideraciones importantes:</h5>
                            
                            <div class="consideration">
                                <h6><i class="fas fa-dollar-sign"></i> Costos de transacción</h6>
                                <p>Rebalancear genera comisiones. En cuentas pequeñas, puede ser mejor usar nuevas contribuciones para rebalancear en lugar de vender.</p>
                            </div>

                            <div class="consideration">
                                <h6><i class="fas fa-receipt"></i> Implicaciones fiscales</h6>
                                <p>Vender inversiones con ganancias genera impuestos. Considera rebalancear primero en cuentas de jubilación (tax-deferred).</p>
                            </div>

                            <div class="consideration">
                                <h6><i class="fas fa-chart-line"></i> Momentum vs. Mean reversion</h6>
                                <p>A veces los mercados tienen momentum (tendencias continúan). Rebalancear muy frecuentemente puede reducir rendimientos en mercados con tendencia fuerte.</p>
                            </div>
                        </div>
                    </div>

                    <div class="advanced-strategies">
                        <h4><i class="fas fa-chess-queen"></i> Estrategias avanzadas de portafolio</h4>
                        
                        <div class="strategy core-satellite">
                            <h6><i class="fas fa-bullseye"></i> Core-Satellite Strategy</h6>
                            <div class="strategy-explanation">
                                <p><strong>Concepto:</strong> Combinar una base sólida y diversificada (core) con inversiones más especializadas y activas (satellites).</p>
                                
                                <div class="core-satellite-breakdown">
                                    <div class="core-section">
                                        <h7><i class="fas fa-heart"></i> Core (70-80% del portafolio)</h7>
                                        <ul>
                                            <li>ETFs de mercado total (VTI, VTIAX)</li>
                                            <li>Fondos indexados de bajo costo</li>
                                            <li>Estrategia buy-and-hold</li>
                                            <li>Objetivo: capturar rendimientos del mercado</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="satellite-section">
                                        <h7><i class="fas fa-satellite"></i> Satellites (20-30% del portafolio)</h7>
                                        <ul>
                                            <li>Sectores específicos (tecnología, salud)</li>
                                            <li>Mercados emergentes</li>
                                            <li>Small caps, value tilts</li>
                                            <li>REITs, commodities</li>
                                            <li>Objetivo: superar al mercado o diversificar</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="strategy factor-investing">
                            <h6><i class="fas fa-dna"></i> Factor Investing</h6>
                            <div class="strategy-explanation">
                                <p><strong>Concepto:</strong> Inclinar el portafolio hacia "factores" que históricamente han generado rendimientos superiores.</p>
                                
                                <div class="factors">
                                    <div class="factor">
                                        <strong>Value:</strong> Empresas "baratas" vs. su valor fundamental
                                    </div>
                                    <div class="factor">
                                        <strong>Size:</strong> Empresas pequeñas tienden a superar a las grandes
                                    </div>
                                    <div class="factor">
                                        <strong>Momentum:</strong> Acciones que han subido tienden a seguir subiendo
                                    </div>
                                    <div class="factor">
                                        <strong>Quality:</strong> Empresas rentables y estables
                                    </div>
                                    <div class="factor">
                                        <strong>Low volatility:</strong> Acciones menos volátiles pueden dar mejores rendimientos ajustados por riesgo
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="strategy tactical-allocation">
                            <h6><i class="fas fa-chess-knight"></i> Tactical Asset Allocation</h6>
                            <div class="strategy-explanation">
                                <p><strong>Concepto:</strong> Ajustar temporalmente las asignaciones basándose en condiciones de mercado.</p>
                                
                                <div class="tactical-example">
                                    <strong>Ejemplo:</strong>
                                    <ul>
                                        <li><strong>Asignación estratégica:</strong> 60% acciones, 40% bonos</li>
                                        <li><strong>Ajuste táctico:</strong> Si las acciones están muy caras, reducir a 50% acciones, 50% bonos temporalmente</li>
                                        <li><strong>Objetivo:</strong> Aprovechar ineficiencias de corto-mediano plazo</li>
                                    </ul>
                                </div>
                                
                                <div class="tactical-warning">
                                    <p><strong>⚠️ Advertencia:</strong> Requiere habilidad para "timing the market". La mayoría de inversionistas individuales no deberían intentarlo.</p>
                                </div>
                            </div>
                        </div>

                        <div class="strategy risk-parity">
                            <h6><i class="fas fa-balance-scale"></i> Risk Parity</h6>
                            <div class="strategy-explanation">
                                <p><strong>Concepto:</strong> En lugar de asignar capital igualmente, asignar riesgo igualmente entre diferentes activos.</p>
                                
                                <div class="risk-parity-logic">
                                    <p><strong>Lógica:</strong> Las acciones son mucho más volátiles que los bonos. En un portafolio 60/40, las acciones contribuyen ~90% del riesgo total.</p>
                                    
                                    <p><strong>Solución:</strong> Usar apalancamiento en bonos para igualar el riesgo, o reducir significativamente la asignación a acciones.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="behavioral-considerations">
                        <h4><i class="fas fa-brain"></i> Aspectos psicológicos del portfolio management</h4>
                        
                        <div class="behavioral-biases">
                            <h5>Sesgos que destruyen portafolios:</h5>
                            
                            <div class="bias">
                                <h6><i class="fas fa-home"></i> Home Bias</h6>
                                <p><strong>¿Qué es?</strong> Sobreinvertir en tu país de origen</p>
                                <p><strong>Problema:</strong> EE.UU. es solo ~50% del mercado mundial. Otros países pueden tener mejores oportunidades.</p>
                                <p><strong>Solución:</strong> Incluir 20-40% en mercados internacionales</p>
                            </div>

                            <div class="bias">
                                <h6><i class="fas fa-chart-line"></i> Recency Bias</h6>
                                <p><strong>¿Qué es?</strong> Asumir que tendencias recientes continuarán</p>
                                <p><strong>Problema:</strong> Comprar después de subidas, vender después de caídas</p>
                                <p><strong>Solución:</strong> Mantener disciplina de rebalancing automático</p>
                            </div>

                            <div class="bias">
                                <h6><i class="fas fa-anchor"></i> Anchoring</h6>
                                <p><strong>¿Qué es?</strong> Fijarse en el precio de compra como "ancla"</p>
                                <p><strong>Problema:</strong> No vender perdedores porque "esperas recuperar"</p>
                                <p><strong>Solución:</strong> Evaluar inversiones por mérito futuro, no precio pasado</p>
                            </div>

                            <div class="bias">
                                <h6><i class="fas fa-trophy"></i> Overconfidence</h6>
                                <p><strong>¿Qué es?</strong> Creer que puedes superar consistentemente al mercado</p>
                                <p><strong>Problema:</strong> Trading excesivo, concentración excesiva</p>
                                <p><strong>Solución:</strong> Humildad, diversificación, estrategias pasivas</p>
                            </div>
                        </div>

                        <div class="emotional-discipline">
                            <h5><i class="fas fa-heart"></i> Manteniendo disciplina emocional</h5>
                            
                            <div class="discipline-technique">
                                <h6>1. Automatización</h6>
                                <p>Configura inversiones automáticas y rebalancing automático para remover emociones de la ecuación.</p>
                            </div>

                            <div class="discipline-technique">
                                <h6>2. Investment Policy Statement (IPS)</h6>
                                <p>Escribe un documento que defina tus objetivos, estrategia y reglas. Consúltalo antes de hacer cambios.</p>
                            </div>

                            <div class="discipline-technique">
                                <h6>3. Dollar-cost averaging</h6>
                                <p>Invierte cantidades fijas regularmente para evitar intentar "timing the market".</p>
                            </div>

                            <div class="discipline-technique">
                                <h6>4. Perspectiva histórica</h6>
                                <p>Recuerda que todas las crisis pasaron. El mercado siempre se ha recuperado a largo plazo.</p>
                            </div>
                        </div>
                    </div>

                    <div class="practical-implementation">
                        <h4><i class="fas fa-tools"></i> Implementación práctica</h4>
                        
                        <div class="implementation-steps">
                            <div class="step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h6>Define tus objetivos</h6>
                                    <ul>
                                        <li>¿Para qué inviertes? (jubilación, casa, etc.)</li>
                                        <li>¿Cuándo necesitas el dinero?</li>
                                        <li>¿Cuánto riesgo puedes tolerar?</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h6>Determina tu asignación objetivo</h6>
                                    <p>Usa las guías de edad como punto de partida, ajusta según tu situación personal</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h6>Selecciona productos específicos</h6>
                                    <p>Elige ETFs o fondos de bajo costo que implementen tu asignación</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <h6>Implementa gradualmente</h6>
                                    <p>No necesitas invertir todo de una vez. Usa dollar-cost averaging</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">5</div>
                                <div class="step-content">
                                    <h6>Monitorea y rebalancea</h6>
                                    <p>Revisa trimestralmente, rebalancea anualmente o cuando haya desviaciones >5%</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">6</div>
                                <div class="step-content">
                                    <h6>Ajusta con el tiempo</h6>
                                    <p>Cambia tu asignación gradualmente conforme envejeces o cambian tus objetivos</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="video-resources">
                        <h4><i class="fas fa-play-circle"></i> Videos recomendados</h4>
                        <div class="video-links">
                            <a href="https://www.youtube.com/watch?v=8TJQhQ2GZ0Y" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                Modern Portfolio Theory Explained
                            </a>
                            <a href="https://www.youtube.com/watch?v=uERKdGnGdmE" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                Asset Allocation Strategies
                            </a>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h4><i class="fas fa-key"></i> Puntos clave para recordar</h4>
                        <div class="takeaway-grid">
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Asset allocation explica 90%+ del rendimiento del portafolio</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Diversificación reduce riesgo sin sacrificar rendimiento esperado</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Tu edad y objetivos deben guiar tu asignación de activos</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Rebalancing es clave para mantener disciplina y "vender caro, comprar barato"</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Los sesgos psicológicos son el mayor enemigo del inversionista</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Simple y consistente supera a complejo y errático</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        section2: {
            title: 'Análisis Fundamental vs. Técnico',
            content: `
                <div class="content-section">
                    <h3>Análisis Fundamental vs. Técnico</h3>
                    
                    <div class="intro-analogy">
                        <p>Imagina que quieres comprar una casa. Hay dos formas de decidir si es una buena compra:</p>
                        
                        <p><strong>Enfoque 1 (Fundamental):</strong> Investigas todo sobre la casa: estructura, ubicación, servicios, comparas precios de casas similares en la zona, analizas si el barrio está mejorando, revisas los ingresos promedio del área. Basándote en todos estos "fundamentos", decides si el precio es justo.</p>
                        
                        <p><strong>Enfoque 2 (Técnico):</strong> No te importa mucho la casa en sí. En cambio, estudias los patrones de precios: ¿han estado subiendo las casas en esta zona? ¿Cuántas se venden por semana? ¿Hay más compradores que vendedores? Basándote en estas tendencias y patrones, predices si el precio subirá o bajará.</p>
                        
                        <p>En el mundo de las inversiones, estos dos enfoques se llaman <strong>Análisis Fundamental</strong> y <strong>Análisis Técnico</strong>.</p>
                    </div>

                    <div class="analysis-overview">
                        <h4><i class="fas fa-balance-scale"></i> Dos filosofías, un objetivo</h4>
                        
                        <div class="philosophy-comparison">
                            <div class="philosophy fundamental">
                                <div class="philosophy-header">
                                    <i class="fas fa-microscope"></i>
                                    <h5>Análisis Fundamental</h5>
                                </div>
                                <div class="philosophy-content">
                                    <p><strong>Pregunta clave:</strong> "¿Cuánto vale realmente esta empresa?"</p>
                                    <p><strong>Creencia:</strong> El precio de mercado eventualmente reflejará el valor intrínseco de la empresa</p>
                                    <p><strong>Enfoque:</strong> Estudiar la empresa, industria y economía para determinar valor "justo"</p>
                                    <p><strong>Horizonte:</strong> Largo plazo (meses a años)</p>
                                </div>
                            </div>

                            <div class="philosophy technical">
                                <div class="philosophy-header">
                                    <i class="fas fa-chart-line"></i>
                                    <h5>Análisis Técnico</h5>
                                </div>
                                <div class="philosophy-content">
                                    <p><strong>Pregunta clave:</strong> "¿Hacia dónde va el precio?"</p>
                                    <p><strong>Creencia:</strong> Toda la información relevante ya está reflejada en el precio y volumen</p>
                                    <p><strong>Enfoque:</strong> Estudiar patrones de precios y volumen para predecir movimientos futuros</p>
                                    <p><strong>Horizonte:</strong> Corto a mediano plazo (días a meses)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fundamental-analysis">
                        <h4><i class="fas fa-microscope"></i> Análisis Fundamental: La ciencia del valor</h4>
                        
                        <div class="fundamental-definition">
                            <div class="definition-box">
                                <p>El <strong>análisis fundamental</strong> evalúa el valor intrínseco de una empresa estudiando factores económicos, financieros y otros factores cualitativos y cuantitativos.</p>
                            </div>
                        </div>

                        <div class="fundamental-layers">
                            <h5>Las tres capas del análisis fundamental:</h5>
                            
                            <div class="layer economic">
                                <div class="layer-header">
                                    <i class="fas fa-globe"></i>
                                    <h6>1. Análisis Económico (Top-Down)</h6>
                                </div>
                                <div class="layer-content">
                                    <p><strong>¿Qué analiza?</strong> El entorno macroeconómico general</p>
                                    
                                    <div class="economic-factors">
                                        <h7>Factores clave:</h7>
                                        <ul>
                                            <li><strong>PIB:</strong> ¿La economía está creciendo o contrayéndose?</li>
                                            <li><strong>Inflación:</strong> ¿Los precios están subiendo demasiado rápido?</li>
                                            <li><strong>Tasas de interés:</strong> ¿Está subiendo o bajando el costo del dinero?</li>
                                            <li><strong>Empleo:</strong> ¿La gente tiene trabajo y dinero para gastar?</li>
                                            <li><strong>Política fiscal:</strong> ¿El gobierno está gastando más o menos?</li>
                                            <li><strong>Geopolítica:</strong> ¿Hay guerras, elecciones o tensiones comerciales?</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="economic-impact">
                                        <strong>Impacto en inversiones:</strong>
                                        <p>Una economía fuerte generalmente beneficia a las acciones. Una economía débil puede favorecer bonos o activos defensivos.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="layer industry">
                                <div class="layer-header">
                                    <i class="fas fa-industry"></i>
                                    <h6>2. Análisis de Industria</h6>
                                </div>
                                <div class="layer-content">
                                    <p><strong>¿Qué analiza?</strong> El sector específico donde opera la empresa</p>
                                    
                                    <div class="industry-factors">
                                        <h7>Factores clave:</h7>
                                        <ul>
                                            <li><strong>Ciclo de vida:</strong> ¿La industria está creciendo, madura o declinando?</li>
                                            <li><strong>Competencia:</strong> ¿Qué tan intensa es la rivalidad?</li>
                                            <li><strong>Barreras de entrada:</strong> ¿Es fácil para nuevos competidores entrar?</li>
                                            <li><strong>Poder de negociación:</strong> ¿Quién tiene más poder: proveedores, clientes o la empresa?</li>
                                            <li><strong>Regulación:</strong> ¿Hay cambios regulatorios que afecten la industria?</li>
                                            <li><strong>Tecnología:</strong> ¿Hay disrupciones tecnológicas en el horizonte?</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="porter-five-forces">
                                        <h7><i class="fas fa-shield-alt"></i> Las 5 Fuerzas de Porter:</h7>
                                        <div class="forces-grid">
                                            <div class="force">
                                                <strong>Rivalidad entre competidores</strong>
                                            </div>
                                            <div class="force">
                                                <strong>Amenaza de nuevos entrantes</strong>
                                            </div>
                                            <div class="force">
                                                <strong>Poder de negociación de proveedores</strong>
                                            </div>
                                            <div class="force">
                                                <strong>Poder de negociación de clientes</strong>
                                            </div>
                                            <div class="force">
                                                <strong>Amenaza de productos sustitutos</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="layer company">
                                <div class="layer-header">
                                    <i class="fas fa-building"></i>
                                    <h6>3. Análisis de Empresa</h6>
                                </div>
                                <div class="layer-content">
                                    <p><strong>¿Qué analiza?</strong> Los fundamentos específicos de la empresa individual</p>
                                    
                                    <div class="company-analysis-areas">
                                        <div class="analysis-area financial">
                                            <h7><i class="fas fa-calculator"></i> Análisis Financiero Cuantitativo</h7>
                                            
                                            <div class="financial-statements">
                                                <h8>Los tres estados financieros clave:</h8>
                                                
                                                <div class="statement income">
                                                    <strong>1. Estado de Resultados (Income Statement)</strong>
                                                    <p>Muestra las ganancias y pérdidas durante un período</p>
                                                    <ul>
                                                        <li><strong>Ingresos (Revenue):</strong> Dinero que entra por ventas</li>
                                                        <li><strong>Costos de ventas:</strong> Costo directo de producir lo que vende</li>
                                                        <li><strong>Gastos operativos:</strong> Marketing, administración, I+D</li>
                                                        <li><strong>Utilidad neta:</strong> Lo que queda después de todos los gastos</li>
                                                    </ul>
                                                </div>
                                                
                                                <div class="statement balance">
                                                    <strong>2. Balance General (Balance Sheet)</strong>
                                                    <p>Fotografía de lo que posee y debe la empresa en un momento específico</p>
                                                    <ul>
                                                        <li><strong>Activos:</strong> Lo que posee (efectivo, inventario, propiedades)</li>
                                                        <li><strong>Pasivos:</strong> Lo que debe (deudas, cuentas por pagar)</li>
                                                        <li><strong>Patrimonio:</strong> Activos - Pasivos = valor para accionistas</li>
                                                    </ul>
                                                </div>
                                                
                                                <div class="statement cashflow">
                                                    <strong>3. Estado de Flujo de Efectivo (Cash Flow Statement)</strong>
                                                    <p>Muestra cómo entra y sale el efectivo de la empresa</p>
                                                    <ul>
                                                        <li><strong>Operativo:</strong> Efectivo de operaciones normales del negocio</li>
                                                        <li><strong>Inversión:</strong> Efectivo usado en comprar/vender activos</li>
                                                        <li><strong>Financiamiento:</strong> Efectivo de deuda, emisión de acciones, dividendos</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="analysis-area qualitative">
                                            <h7><i class="fas fa-users"></i> Análisis Cualitativo</h7>
                                            
                                            <div class="qualitative-factors">
                                                <ul>
                                                    <li><strong>Calidad del management:</strong> ¿Los directivos son competentes y honestos?</li>
                                                    <li><strong>Ventaja competitiva (moat):</strong> ¿Qué protege a la empresa de competidores?</li>
                                                    <li><strong>Modelo de negocio:</strong> ¿Cómo gana dinero la empresa?</li>
                                                    <li><strong>Cultura corporativa:</strong> ¿La empresa trata bien a empleados y clientes?</li>
                                                    <li><strong>Innovación:</strong> ¿La empresa invierte en I+D y se adapta al cambio?</li>
                                                    <li><strong>ESG:</strong> ¿La empresa es responsable ambientalmente y socialmente?</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="key-ratios">
                            <h5><i class="fas fa-calculator"></i> Ratios financieros clave</h5>
                            
                            <div class="ratio-categories">
                                <div class="ratio-category valuation">
                                    <h6><i class="fas fa-tag"></i> Ratios de Valuación</h6>
                                    
                                    <div class="ratio">
                                        <div class="ratio-header">
                                            <strong>P/E Ratio (Price-to-Earnings)</strong>
                                        </div>
                                        <div class="ratio-content">
                                            <p><strong>Fórmula:</strong> Precio por acción ÷ Ganancias por acción</p>
                                            <p><strong>¿Qué significa?</strong> Cuánto pagas por cada peso de ganancias anuales</p>
                                            <div class="ratio-example">
                                                <strong>Ejemplo:</strong> Acción a $100, ganancias de $5 por acción = P/E de 20
                                                <br>Estás pagando 20 veces las ganancias anuales
                                            </div>
                                            <div class="ratio-interpretation">
                                                <ul>
                                                    <li><strong>P/E bajo (5-15):</strong> Posiblemente infravalorada o en problemas</li>
                                                    <li><strong>P/E medio (15-25):</strong> Valoración razonable</li>
                                                    <li><strong>P/E alto (25+):</strong> Posiblemente sobrevalorada o alto crecimiento esperado</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="ratio">
                                        <div class="ratio-header">
                                            <strong>P/B Ratio (Price-to-Book)</strong>
                                        </div>
                                        <div class="ratio-content">
                                            <p><strong>Fórmula:</strong> Precio por acción ÷ Valor en libros por acción</p>
                                            <p><strong>¿Qué significa?</strong> Cuánto pagas por cada peso de patrimonio contable</p>
                                            <div class="ratio-interpretation">
                                                <ul>
                                                    <li><strong>P/B < 1:</strong> Cotiza por debajo de su valor contable</li>
                                                    <li><strong>P/B > 1:</strong> El mercado valora la empresa por encima de sus activos netos</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="ratio">
                                        <div class="ratio-header">
                                            <strong>PEG Ratio (P/E to Growth)</strong>
                                        </div>
                                        <div class="ratio-content">
                                            <p><strong>Fórmula:</strong> P/E Ratio ÷ Tasa de crecimiento de ganancias</p>
                                            <p><strong>¿Qué significa?</strong> Ajusta el P/E por el crecimiento esperado</p>
                                            <div class="ratio-interpretation">
                                                <ul>
                                                    <li><strong>PEG < 1:</strong> Posiblemente infravalorada</li>
                                                    <li><strong>PEG = 1:</strong> Valoración justa</li>
                                                    <li><strong>PEG > 1:</strong> Posiblemente sobrevalorada</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="ratio-category profitability">
                                    <h6><i class="fas fa-chart-line"></i> Ratios de Rentabilidad</h6>
                                    
                                    <div class="ratio">
                                        <div class="ratio-header">
                                            <strong>ROE (Return on Equity)</strong>
                                        </div>
                                        <div class="ratio-content">
                                            <p><strong>Fórmula:</strong> Utilidad neta ÷ Patrimonio promedio</p>
                                            <p><strong>¿Qué significa?</strong> Qué tan eficientemente la empresa usa el dinero de los accionistas</p>
                                            <div class="ratio-interpretation">
                                                <ul>
                                                    <li><strong>ROE > 15%:</strong> Excelente</li>
                                                    <li><strong>ROE 10-15%:</strong> Bueno</li>
                                                    <li><strong>ROE < 10%:</strong> Mediocre</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="ratio">
                                        <div class="ratio-header">
                                            <strong>Margen de Utilidad Neta</strong>
                                        </div>
                                        <div class="ratio-content">
                                            <p><strong>Fórmula:</strong> Utilidad neta ÷ Ingresos totales</p>
                                            <p><strong>¿Qué significa?</strong> Qué porcentaje de cada peso de ventas se convierte en ganancia</p>
                                            <div class="ratio-example">
                                                <strong>Ejemplo:</strong> Si una empresa vende $100 y tiene utilidad neta de $10, su margen es 10%
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="ratio-category liquidity">
                                    <h6><i class="fas fa-tint"></i> Ratios de Liquidez</h6>
                                    
                                    <div class="ratio">
                                        <div class="ratio-header">
                                            <strong>Current Ratio</strong>
                                        </div>
                                        <div class="ratio-content">
                                            <p><strong>Fórmula:</strong> Activos corrientes ÷ Pasivos corrientes</p>
                                            <p><strong>¿Qué significa?</strong> Capacidad de pagar deudas de corto plazo</p>
                                            <div class="ratio-interpretation">
                                                <ul>
                                                    <li><strong>Ratio > 2:</strong> Muy líquida (tal vez demasiado efectivo ocioso)</li>
                                                    <li><strong>Ratio 1.2-2:</strong> Buena liquidez</li>
                                                    <li><strong>Ratio < 1:</strong> Posibles problemas de liquidez</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="ratio-category leverage">
                                    <h6><i class="fas fa-weight-hanging"></i> Ratios de Apalancamiento</h6>
                                    
                                    <div class="ratio">
                                        <div class="ratio-header">
                                            <strong>Debt-to-Equity Ratio</strong>
                                        </div>
                                        <div class="ratio-content">
                                            <p><strong>Fórmula:</strong> Deuda total ÷ Patrimonio total</p>
                                            <p><strong>¿Qué significa?</strong> Cuánta deuda tiene la empresa relativa a su patrimonio</p>
                                            <div class="ratio-interpretation">
                                                <ul>
                                                    <li><strong>D/E < 0.3:</strong> Conservadora</li>
                                                    <li><strong>D/E 0.3-0.6:</strong> Moderada</li>
                                                    <li><strong>D/E > 0.6:</strong> Altamente apalancada (más riesgosa)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="valuation-methods">
                            <h5><i class="fas fa-balance-scale"></i> Métodos de valuación</h5>
                            
                            <div class="valuation-method dcf">
                                <h6><i class="fas fa-calculator"></i> DCF (Discounted Cash Flow)</h6>
                                <div class="method-explanation">
                                    <p><strong>Concepto:</strong> El valor de una empresa es la suma de todos sus flujos de efectivo futuros, descontados al presente.</p>
                                    
                                    <div class="dcf-steps">
                                        <h7>Pasos del DCF:</h7>
                                        <ol>
                                            <li>Proyectar flujos de efectivo futuros (5-10 años)</li>
                                            <li>Estimar tasa de descuento (costo de capital)</li>
                                            <li>Calcular valor terminal (valor después del período de proyección)</li>
                                            <li>Descontar todo al valor presente</li>
                                            <li>Dividir entre número de acciones para obtener valor por acción</li>
                                        </ol>
                                    </div>
                                    
                                    <div class="dcf-pros-cons">
                                        <div class="pros">
                                            <strong>Ventajas:</strong> Teóricamente el más preciso, basado en fundamentos
                                        </div>
                                        <div class="cons">
                                            <strong>Desventajas:</strong> Muy sensible a supuestos, difícil de hacer bien
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="valuation-method comparable">
                                <h6><i class="fas fa-balance-scale-right"></i> Análisis de Comparables</h6>
                                <div class="method-explanation">
                                    <p><strong>Concepto:</strong> Valuar una empresa comparándola con empresas similares que cotizan en bolsa.</p>
                                    
                                    <div class="comparable-process">
                                        <h7>Proceso:</h7>
                                        <ol>
                                            <li>Identificar empresas comparables (mismo sector, tamaño similar)</li>
                                            <li>Calcular múltiplos de valuación (P/E, P/B, EV/EBITDA)</li>
                                            <li>Aplicar múltiplos promedio a la empresa objetivo</li>
                                        </ol>
                                    </div>
                                    
                                    <div class="comparable-example">
                                        <strong>Ejemplo:</strong> Si empresas similares a Apple cotizan a P/E de 25, y Apple tiene ganancias de $6 por acción, su valor "justo" sería $150 por acción.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="technical-analysis">
                        <h4><i class="fas fa-chart-line"></i> Análisis Técnico: El arte de los patrones</h4>
                        
                        <div class="technical-definition">
                            <div class="definition-box">
                                <p>El <strong>análisis técnico</strong> es el estudio de la acción del precio y volumen de un activo para predecir movimientos futuros de precios, basándose en la premisa de que toda la información relevante ya está reflejada en el precio.</p>
                            </div>
                        </div>

                        <div class="technical-principles">
                            <h5>Principios fundamentales del análisis técnico:</h5>
                            
                            <div class="principle">
                                <h6><i class="fas fa-info-circle"></i> 1. El precio descuenta todo</h6>
                                <p>Toda la información relevante (fundamental, política, psicológica) ya está reflejada en el precio. No necesitas analizar estados financieros porque el mercado ya lo hizo por ti.</p>
                            </div>

                            <div class="principle">
                                <h6><i class="fas fa-arrows-alt-h"></i> 2. Los precios se mueven en tendencias</h6>
                                <p>Los precios no se mueven aleatoriamente. Tienden a moverse en direcciones identificables (alcistas, bajistas o laterales) que persisten en el tiempo.</p>
                            </div>

                            <div class="principle">
                                <h6><i class="fas fa-history"></i> 3. La historia se repite</h6>
                                <p>Los patrones de comportamiento humano (miedo, codicia, esperanza) son constantes, por lo que los patrones de precios tienden a repetirse.</p>
                            </div>
                        </div>

                        <div class="chart-types">
                            <h5><i class="fas fa-chart-bar"></i> Tipos de gráficos</h5>
                            
                            <div class="chart-type line">
                                <h6><i class="fas fa-chart-line"></i> Gráfico de Línea</h6>
                                <div class="chart-description">
                                    <p><strong>¿Qué muestra?</strong> Conecta los precios de cierre durante un período</p>
                                    <p><strong>Ventajas:</strong> Simple, muestra tendencia general claramente</p>
                                    <p><strong>Desventajas:</strong> No muestra precios máximos, mínimos o de apertura</p>
                                    <p><strong>Mejor para:</strong> Análisis de tendencias a largo plazo</p>
                                </div>
                            </div>

                            <div class="chart-type bar">
                                <h6><i class="fas fa-chart-bar"></i> Gráfico de Barras</h6>
                                <div class="chart-description">
                                    <p><strong>¿Qué muestra?</strong> Apertura, máximo, mínimo y cierre (OHLC) para cada período</p>
                                    <p><strong>Cómo leerlo:</strong></p>
                                    <ul>
                                        <li>Línea vertical: rango entre máximo y mínimo</li>
                                        <li>Línea horizontal izquierda: precio de apertura</li>
                                        <li>Línea horizontal derecha: precio de cierre</li>
                                    </ul>
                                    <p><strong>Mejor para:</strong> Análisis detallado de la acción del precio</p>
                                </div>
                            </div>

                            <div class="chart-type candlestick">
                                <h6><i class="fas fa-fire"></i> Gráfico de Velas (Candlestick)</h6>
                                <div class="chart-description">
                                    <p><strong>¿Qué muestra?</strong> La misma información que las barras, pero de forma más visual</p>
                                    <p><strong>Cómo leerlo:</strong></p>
                                    <ul>
                                        <li><strong>Cuerpo:</strong> Diferencia entre apertura y cierre</li>
                                        <li><strong>Mechas/sombras:</strong> Máximos y mínimos del período</li>
                                        <li><strong>Verde/blanco:</strong> Cierre mayor que apertura (alcista)</li>
                                        <li><strong>Rojo/negro:</strong> Cierre menor que apertura (bajista)</li>
                                    </ul>
                                    <p><strong>Mejor para:</strong> Identificar patrones y sentimiento del mercado</p>
                                </div>
                            </div>
                        </div>

                        <div class="trend-analysis">
                            <h5><i class="fas fa-trending-up"></i> Análisis de Tendencias</h5>
                            
                            <div class="trend-types">
                                <div class="trend uptrend">
                                    <h6><i class="fas fa-arrow-up"></i> Tendencia Alcista (Uptrend)</h6>
                                    <div class="trend-characteristics">
                                        <p><strong>Características:</strong></p>
                                        <ul>
                                            <li>Máximos y mínimos cada vez más altos</li>
                                            <li>Línea de tendencia conecta los mínimos</li>
                                            <li>Volumen típicamente aumenta en subidas</li>
                                        </ul>
                                        <p><strong>Estrategia:</strong> Comprar en retrocesos hacia la línea de tendencia</p>
                                    </div>
                                </div>

                                <div class="trend downtrend">
                                    <h6><i class="fas fa-arrow-down"></i> Tendencia Bajista (Downtrend)</h6>
                                    <div class="trend-characteristics">
                                        <p><strong>Características:</strong></p>
                                        <ul>
                                            <li>Máximos y mínimos cada vez más bajos</li>
                                            <li>Línea de tendencia conecta los máximos</li>
                                            <li>Volumen típicamente aumenta en caídas</li>
                                        </ul>
                                        <p><strong>Estrategia:</strong> Vender en rebotes hacia la línea de tendencia</p>
                                    </div>
                                </div>

                                <div class="trend sideways">
                                    <h6><i class="fas fa-arrows-alt-h"></i> Tendencia Lateral (Sideways)</h6>
                                    <div class="trend-characteristics">
                                        <p><strong>Características:</strong></p>
                                        <ul>
                                            <li>Precio se mueve entre niveles de soporte y resistencia</li>
                                            <li>No hay dirección clara</li>
                                            <li>Volumen típicamente bajo</li>
                                        </ul>
                                        <p><strong>Estrategia:</strong> Comprar en soporte, vender en resistencia</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="support-resistance">
                            <h5><i class="fas fa-layer-group"></i> Soporte y Resistencia</h5>
                            
                            <div class="sr-concepts">
                                <div class="concept support">
                                    <h6><i class="fas fa-hand-paper"></i> Soporte</h6>
                                    <div class="concept-explanation">
                                        <p><strong>¿Qué es?</strong> Nivel de precio donde históricamente ha habido suficiente demanda para detener caídas</p>
                                        <p><strong>Psicología:</strong> Los compradores consideran que el precio es "barato" a este nivel</p>
                                        <p><strong>Cómo identificarlo:</strong> Busca niveles donde el precio ha "rebotado" múltiples veces</p>
                                        <div class="concept-example">
                                            <strong>Ejemplo:</strong> Si Apple ha caído a $140 tres veces en el último año y siempre rebotó, $140 es un nivel de soporte
                                        </div>
                                    </div>
                                </div>

                                <div class="concept resistance">
                                    <h6><i class="fas fa-stop-circle"></i> Resistencia</h6>
                                    <div class="concept-explanation">
                                        <p><strong>¿Qué es?</strong> Nivel de precio donde históricamente ha habido suficiente oferta para detener subidas</p>
                                        <p><strong>Psicología:</strong> Los vendedores consideran que el precio es "caro" a este nivel</p>
                                        <p><strong>Cómo identificarlo:</strong> Busca niveles donde el precio ha sido "rechazado" múltiples veces</p>
                                        <div class="concept-example">
                                            <strong>Ejemplo:</strong> Si Tesla ha subido a $250 tres veces y siempre cayó, $250 es un nivel de resistencia
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="sr-dynamics">
                                <h6><i class="fas fa-exchange-alt"></i> Dinámicas de Soporte y Resistencia</h6>
                                <ul>
                                    <li><strong>Role reversal:</strong> Cuando se rompe un soporte, se convierte en resistencia (y viceversa)</li>
                                    <li><strong>Fuerza:</strong> Más toques = nivel más fuerte</li>
                                    <li><strong>Volumen:</strong> Rupturas con alto volumen son más confiables</li>
                                    <li><strong>Números redondos:</strong> $50, $100, $200 actúan como niveles psicológicos</li>
                                </ul>
                            </div>
                        </div>

                        <div class="technical-indicators">
                            <h5><i class="fas fa-tachometer-alt"></i> Indicadores Técnicos</h5>
                            
                            <div class="indicator-categories">
                                <div class="indicator-category trend">
                                    <h6><i class="fas fa-trending-up"></i> Indicadores de Tendencia</h6>
                                    
                                    <div class="indicator moving-averages">
                                        <h7>Medias Móviles (Moving Averages)</h7>
                                        <div class="indicator-explanation">
                                            <p><strong>¿Qué son?</strong> Promedian el precio durante un número específico de períodos para suavizar fluctuaciones</p>
                                            
                                            <div class="ma-types">
                                                <div class="ma-type sma">
                                                    <strong>SMA (Simple Moving Average):</strong>
                                                    <p>Promedio aritmético simple de los últimos N períodos</p>
                                                    <div class="ma-example">
                                                        <strong>Ejemplo SMA(5):</strong> (100+102+98+105+95) ÷ 5 = 100
                                                    </div>
                                                </div>
                                                
                                                <div class="ma-type ema">
                                                    <strong>EMA (Exponential Moving Average):</strong>
                                                    <p>Da más peso a precios recientes, reacciona más rápido a cambios</p>
                                                </div>
                                            </div>
                                            
                                            <div class="ma-signals">
                                                <strong>Señales comunes:</strong>
                                                <ul>
                                                    <li><strong>Golden Cross:</strong> MA corta cruza por encima de MA larga (señal alcista)</li>
                                                    <li><strong>Death Cross:</strong> MA corta cruza por debajo de MA larga (señal bajista)</li>
                                                    <li><strong>Precio vs. MA:</strong> Precio arriba de MA = tendencia alcista</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="indicator macd">
                                        <h7>MACD (Moving Average Convergence Divergence)</h7>
                                        <div class="indicator-explanation">
                                            <p><strong>¿Qué es?</strong> Diferencia entre dos medias móviles exponenciales</p>
                                            <p><strong>Componentes:</strong></p>
                                            <ul>
                                                <li><strong>Línea MACD:</strong> EMA(12) - EMA(26)</li>
                                                <li><strong>Línea de señal:</strong> EMA(9) del MACD</li>
                                                <li><strong>Histograma:</strong> MACD - Línea de señal</li>
                                            </ul>
                                            <p><strong>Señales:</strong> Cruces de líneas, divergencias con precio</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="indicator-category momentum">
                                    <h6><i class="fas fa-rocket"></i> Indicadores de Momentum</h6>
                                    
                                    <div class="indicator rsi">
                                        <h7>RSI (Relative Strength Index)</h7>
                                        <div class="indicator-explanation">
                                            <p><strong>¿Qué es?</strong> Oscilador que mide la velocidad y magnitud de cambios de precio</p>
                                            <p><strong>Rango:</strong> 0 a 100</p>
                                            <p><strong>Interpretación:</strong></p>
                                            <ul>
                                                <li><strong>RSI > 70:</strong> Sobrecomprado (posible venta)</li>
                                                <li><strong>RSI < 30:</strong> Sobrevendido (posible compra)</li>
                                                <li><strong>RSI 30-70:</strong> Rango neutral</li>
                                            </ul>
                                            <p><strong>Divergencias:</strong> Cuando RSI y precio se mueven en direcciones opuestas</p>
                                        </div>
                                    </div>

                                    <div class="indicator stochastic">
                                        <h7>Estocástico</h7>
                                        <div class="indicator-explanation">
                                            <p><strong>¿Qué es?</strong> Compara el precio de cierre con el rango de precios durante un período</p>
                                            <p><strong>Fórmula:</strong> %K = (Cierre - Mínimo) / (Máximo - Mínimo) × 100</p>
                                            <p><strong>Señales:</strong> Similar al RSI, niveles de sobrecompra/sobreventa</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="indicator-category volume">
                                    <h6><i class="fas fa-chart-bar"></i> Indicadores de Volumen</h6>
                                    
                                    <div class="indicator volume-analysis">
                                        <h7>Análisis de Volumen</h7>
                                        <div class="indicator-explanation">
                                            <p><strong>Principio:</strong> El volumen confirma las tendencias de precio</p>
                                            <p><strong>Reglas básicas:</strong></p>
                                            <ul>
                                                <li><strong>Tendencia alcista:</strong> Volumen alto en subidas, bajo en caídas</li>
                                                <li><strong>Tendencia bajista:</strong> Volumen alto en caídas, bajo en subidas</li>
                                                <li><strong>Rupturas:</strong> Deben estar acompañadas de volumen alto</li>
                                                <li><strong>Divergencia:</strong> Precio sube pero volumen baja = debilidad</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="chart-patterns">
                            <h5><i class="fas fa-shapes"></i> Patrones de Gráficos</h5>
                            
                            <div class="pattern-categories">
                                <div class="pattern-category reversal">
                                    <h6><i class="fas fa-undo"></i> Patrones de Reversión</h6>
                                    
                                    <div class="pattern head-shoulders">
                                        <h7>Cabeza y Hombros (Head and Shoulders)</h7>
                                        <div class="pattern-description">
                                            <p><strong>Formación:</strong> Tres picos, el del medio (cabeza) más alto que los laterales (hombros)</p>
                                            <p><strong>Señal:</strong> Ruptura por debajo de la línea de cuello indica reversión bajista</p>
                                            <p><strong>Objetivo:</strong> Distancia de cabeza a cuello, proyectada hacia abajo desde la ruptura</p>
                                        </div>
                                    </div>

                                    <div class="pattern double-top">
                                        <h7>Doble Techo/Suelo (Double Top/Bottom)</h7>
                                        <div class="pattern-description">
                                            <p><strong>Formación:</strong> Dos picos (techos) o valles (suelos) aproximadamente al mismo nivel</p>
                                            <p><strong>Señal:</strong> Ruptura del nivel intermedio confirma reversión</p>
                                            <p><strong>Confiabilidad:</strong> Mayor si hay divergencia en volumen o indicadores</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="pattern-category continuation">
                                    <h6><i class="fas fa-arrow-right"></i> Patrones de Continuación</h6>
                                    
                                    <div class="pattern triangle">
                                        <h7>Triángulos</h7>
                                        <div class="pattern-description">
                                            <p><strong>Tipos:</strong></p>
                                            <ul>
                                                <li><strong>Ascendente:</strong> Resistencia horizontal, soporte ascendente (alcista)</li>
                                                <li><strong>Descendente:</strong> Soporte horizontal, resistencia descendente (bajista)</li>
                                                <li><strong>Simétrico:</strong> Ambas líneas convergen (dirección incierta)</li>
                                            </ul>
                                            <p><strong>Ruptura:</strong> Generalmente en la dirección de la tendencia previa</p>
                                        </div>
                                    </div>

                                    <div class="pattern flag">
                                        <h7>Banderas y Banderines</h7>
                                        <div class="pattern-description">
                                            <p><strong>Formación:</strong> Consolidación breve después de movimiento fuerte</p>
                                            <p><strong>Bandera:</strong> Consolidación rectangular</p>
                                            <p><strong>Banderín:</strong> Consolidación triangular</p>
                                            <p><strong>Señal:</strong> Continuación en dirección del movimiento previo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fundamental-vs-technical">
                        <h4><i class="fas fa-balance-scale"></i> Fundamental vs. Técnico: ¿Cuál elegir?</h4>
                        
                        <div class="comparison-detailed">
                            <div class="comparison-aspect timeframe">
                                <h6><i class="fas fa-clock"></i> Horizonte Temporal</h6>
                                <div class="aspect-comparison">
                                    <div class="fundamental-side">
                                        <strong>Fundamental:</strong> Largo plazo (1+ años)
                                        <p>Los fundamentos tardan tiempo en reflejarse en el precio</p>
                                    </div>
                                    <div class="technical-side">
                                        <strong>Técnico:</strong> Corto a mediano plazo (días a meses)
                                        <p>Los patrones técnicos se desarrollan más rápidamente</p>
                                    </div>
                                </div>
                            </div>

                            <div class="comparison-aspect market-efficiency">
                                <h6><i class="fas fa-chart-line"></i> Eficiencia del Mercado</h6>
                                <div class="aspect-comparison">
                                    <div class="fundamental-side">
                                        <strong>Fundamental:</strong> Asume ineficiencias
                                        <p>El mercado puede estar equivocado temporalmente sobre el valor</p>
                                    </div>
                                    <div class="technical-side">
                                        <strong>Técnico:</strong> Asume eficiencia
                                        <p>Toda la información ya está en el precio</p>
                                    </div>
                                </div>
                            </div>

                            <div class="comparison-aspect data-requirements">
                                <h6><i class="fas fa-database"></i> Requerimientos de Datos</h6>
                                <div class="aspect-comparison">
                                    <div class="fundamental-side">
                                        <strong>Fundamental:</strong> Extensivo
                                        <p>Estados financieros, análisis de industria, datos macroeconómicos</p>
                                    </div>
                                    <div class="technical-side">
                                        <strong>Técnico:</strong> Mínimo
                                        <p>Solo precio y volumen</p>
                                    </div>
                                </div>
                            </div>

                            <div class="comparison-aspect skill-requirements">
                                <h6><i class="fas fa-graduation-cap"></i> Habilidades Requeridas</h6>
                                <div class="aspect-comparison">
                                    <div class="fundamental-side">
                                        <strong>Fundamental:</strong> Análisis financiero
                                        <p>Contabilidad, finanzas, análisis de industrias</p>
                                    </div>
                                    <div class="technical-side">
                                        <strong>Técnico:</strong> Reconocimiento de patrones
                                        <p>Interpretación de gráficos, psicología de mercado</p>
                                    </div>
                                </div>
                            </div>

                            <div class="comparison-aspect market-conditions">
                                <h6><i class="fas fa-weather-sun"></i> Condiciones de Mercado Favorables</h6>
                                <div class="aspect-comparison">
                                    <div class="fundamental-side">
                                        <strong>Fundamental:</strong> Mercados racionales
                                        <p>Funciona mejor cuando los precios eventualmente reflejan valor</p>
                                    </div>
                                    <div class="technical-side">
                                        <strong>Técnico:</strong> Mercados con tendencia
                                        <p>Funciona mejor en mercados con momentum claro</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="when-to-use">
                            <h5><i class="fas fa-lightbulb"></i> ¿Cuándo usar cada enfoque?</h5>
                            
                            <div class="use-case fundamental-use">
                                <h6><i class="fas fa-microscope"></i> Usa Análisis Fundamental cuando:</h6>
                                <ul>
                                    <li>Inviertes a largo plazo (1+ años)</li>
                                    <li>Quieres entender el valor intrínseco</li>
                                    <li>Buscas empresas infravaloradas</li>
                                    <li>Tienes tiempo para investigación profunda</li>
                                    <li>El mercado está en pánico o euforia extrema</li>
                                    <li>Inviertes en mercados menos eficientes (small caps, emergentes)</li>
                                </ul>
                            </div>

                            <div class="use-case technical-use">
                                <h6><i class="fas fa-chart-line"></i> Usa Análisis Técnico cuando:</h6>
                                <ul>
                                    <li>Haces trading de corto plazo</li>
                                    <li>Quieres timing de entrada/salida</li>
                                    <li>El mercado tiene tendencias claras</li>
                                    <li>Necesitas decisiones rápidas</li>
                                    <li>Operas múltiples activos simultáneamente</li>
                                    <li>Los fundamentos son difíciles de analizar (commodities, forex)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="hybrid-approach">
                            <h5><i class="fas fa-handshake"></i> Enfoque Híbrido: Lo mejor de ambos mundos</h5>
                            
                            <div class="hybrid-strategy">
                                <p>Muchos inversionistas exitosos combinan ambos enfoques:</p>
                                
                                <div class="hybrid-steps">
                                    <div class="step">
                                        <div class="step-number">1</div>
                                        <div class="step-content">
                                            <strong>Análisis Fundamental para selección:</strong>
                                            <p>Usa fundamentos para identificar empresas atractivas a largo plazo</p>
                                        </div>
                                    </div>

                                    <div class="step">
                                        <div class="step-number">2</div>
                                        <div class="step-content">
                                            <strong>Análisis Técnico para timing:</strong>
                                            <p>Usa técnico para decidir cuándo comprar/vender</p>
                                        </div>
                                    </div>

                                    <div class="step">
                                        <div class="step-number">3</div>
                                        <div class="step-content">
                                            <strong>Gestión de riesgo:</strong>
                                            <p>Usa stops técnicos para proteger inversiones fundamentales</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="hybrid-example">
                                    <strong>Ejemplo práctico:</strong>
                                    <ol>
                                        <li>Análisis fundamental identifica que Apple está infravalorada</li>
                                        <li>Análisis técnico espera ruptura de resistencia para comprar</li>
                                        <li>Coloca stop-loss técnico para limitar pérdidas</li>
                                        <li>Mantiene posición basándose en fundamentos a largo plazo</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="practical-application">
                        <h4><i class="fas fa-tools"></i> Aplicación práctica para principiantes</h4>
                        
                        <div class="beginner-recommendations">
                            <div class="recommendation fundamental-rec">
                                <h6><i class="fas fa-seedling"></i> Para principiantes en Análisis Fundamental:</h6>
                                <ol>
                                    <li><strong>Empieza simple:</strong> Aprende a leer P/E, ROE y debt-to-equity</li>
                                    <li><strong>Usa screeners:</strong> Herramientas como Yahoo Finance, Google Finance</li>
                                    <li><strong>Lee reportes anuales:</strong> Especialmente la carta del CEO</li>
                                    <li><strong>Compara con competidores:</strong> No evalúes empresas en aislamiento</li>
                                    <li><strong>Sigue a analistas respetados:</strong> Aprende de sus metodologías</li>
                                </ol>
                            </div>

                            <div class="recommendation technical-rec">
                                <h6><i class="fas fa-chart-area"></i> Para principiantes en Análisis Técnico:</h6>
                                <ol>
                                    <li><strong>Domina lo básico:</strong> Soporte, resistencia, tendencias</li>
                                    <li><strong>Usa pocos indicadores:</strong> RSI y medias móviles son suficientes al inicio</li>
                                    <li><strong>Practica con papel:</strong> Simula trades antes de usar dinero real</li>
                                    <li><strong>Mantén un diario:</strong> Registra tus análisis y resultados</li>
                                    <li><strong>Gestiona riesgo:</strong> Nunca arriesgues más del 2% por trade</li>
                                </ol>
                            </div>
                        </div>

                        <div class="common-mistakes">
                            <h5><i class="fas fa-exclamation-triangle"></i> Errores comunes a evitar</h5>
                            
                            <div class="mistake fundamental-mistakes">
                                <h6>❌ Errores en Análisis Fundamental:</h6>
                                <ul>
                                    <li><strong>Paralysis by analysis:</strong> Analizar demasiado y nunca actuar</li>
                                    <li><strong>Ignorar el timing:</strong> Comprar "valor" que sigue cayendo</li>
                                    <li><strong>Enamorarse de empresas:</strong> No vender cuando cambian los fundamentos</li>
                                    <li><strong>Ignorar el contexto macro:</strong> Grandes tendencias pueden superar fundamentos</li>
                                </ul>
                            </div>

                            <div class="mistake technical-mistakes">
                                <h6>❌ Errores en Análisis Técnico:</h6>
                                <ul>
                                    <li><strong>Sobrecomplicar:</strong> Usar demasiados indicadores</li>
                                    <li><strong>Ignorar fundamentos:</strong> Hacer trading contra tendencias fundamentales fuertes</li>
                                    <li><strong>No gestionar riesgo:</strong> No usar stops o position sizing</li>
                                    <li><strong>Perseguir señales:</strong> Entrar tarde en movimientos ya desarrollados</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="video-resources">
                        <h4><i class="fas fa-play-circle"></i> Videos recomendados</h4>
                        <div class="video-links">
                            <a href="https://www.youtube.com/watch?v=7pwKL_km9hg" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                Fundamental Analysis Explained
                            </a>
                            <a href="https://www.youtube.com/watch?v=08_nEW0GFfE" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                Technical Analysis Basics
                            </a>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h4><i class="fas fa-key"></i> Puntos clave para recordar</h4>
                        <div class="takeaway-grid">
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Fundamental busca valor intrínseco, técnico predice movimientos de precio</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Fundamental es mejor para largo plazo, técnico para corto plazo</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Ambos enfoques pueden combinarse efectivamente</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>P/E, ROE y debt-to-equity son ratios fundamentales clave</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Soporte, resistencia y tendencias son conceptos técnicos esenciales</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>La gestión de riesgo es crucial independientemente del enfoque</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        section3: {
            title: 'Stress Testing y Gestión de Riesgos',
            content: `
                <div class="content-section">
                    <h3>Stress Testing y Gestión de Riesgos</h3>
                    
                    <div class="intro-analogy">
                        <p>Imagina que eres el capitán de un barco que va a cruzar el océano. Antes de zarpar, no solo verificas que todo funcione en condiciones normales. También te preguntas:</p>
                        
                        <ul>
                            <li>¿Qué pasa si hay una tormenta terrible?</li>
                            <li>¿Y si se rompe el motor principal?</li>
                            <li>¿Tenemos suficientes botes salvavidas?</li>
                            <li>¿Podemos sobrevivir si nos quedamos sin comida por una semana?</li>
                        </ul>
                        
                        <p>Estas preguntas no son pesimismo - son <strong>preparación inteligente</strong>. En el mundo de las inversiones, este proceso se llama <strong>Stress Testing</strong> y <strong>Gestión de Riesgos</strong>.</p>
                        
                        <p>No se trata de ser negativo, sino de estar preparado para navegar cualquier tormenta financiera y proteger tu capital.</p>
                    </div>

                    <div class="risk-management-definition">
                        <h4><i class="fas fa-shield-alt"></i> ¿Qué es la Gestión de Riesgos?</h4>
                        
                        <div class="definition-box">
                            <p>La <strong>gestión de riesgos</strong> es el proceso sistemático de identificar, evaluar y controlar las amenazas al capital y ganancias de un portafolio de inversiones. Su objetivo no es eliminar el riesgo (imposible), sino gestionarlo de manera inteligente.</p>
                        </div>

                        <div class="risk-management-principles">
                            <h5>Principios fundamentales:</h5>
                            
                            <div class="principle">
                                <i class="fas fa-balance-scale"></i>
                                <div>
                                    <strong>Riesgo vs. Rendimiento:</strong> Mayor rendimiento potencial siempre viene con mayor riesgo
                                </div>
                            </div>
                            
                            <div class="principle">
                                <i class="fas fa-chart-pie"></i>
                                <div>
                                    <strong>Diversificación:</strong> No pongas todos los huevos en la misma canasta
                                </div>
                            </div>
                            
                            <div class="principle">
                                <i class="fas fa-hand-paper"></i>
                                <div>
                                    <strong>Capital preservation:</strong> Tu primera regla es no perder dinero
                                </div>
                            </div>
                            
                            <div class="principle">
                                <i class="fas fa-clock"></i>
                                <div>
                                    <strong>Horizonte temporal:</strong> Más tiempo permite tomar más riesgo
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="types-of-risk">
                        <h4><i class="fas fa-exclamation-triangle"></i> Tipos de Riesgo en Inversiones</h4>
                        
                        <div class="risk-categories">
                            <div class="risk-category systematic">
                                <div class="category-header">
                                    <i class="fas fa-globe"></i>
                                    <h5>Riesgo Sistemático (No Diversificable)</h5>
                                </div>
                                <div class="category-content">
                                    <p><strong>¿Qué es?</strong> Riesgos que afectan a todo el mercado y no pueden eliminarse con diversificación.</p>
                                    
                                    <div class="systematic-risks">
                                        <div class="risk market-risk">
                                            <h6><i class="fas fa-chart-line"></i> Riesgo de Mercado</h6>
                                            <p>Caídas generales del mercado por recesiones, crisis, pánico</p>
                                            <div class="risk-example">
                                                <strong>Ejemplo:</strong> Crisis COVID-19 en marzo 2020 - casi todas las acciones cayeron 30-50%
                                            </div>
                                        </div>

                                        <div class="risk interest-rate-risk">
                                            <h6><i class="fas fa-percentage"></i> Riesgo de Tasas de Interés</h6>
                                            <p>Cambios en tasas afectan precios de bonos y valuaciones de acciones</p>
                                            <div class="risk-example">
                                                <strong>Ejemplo:</strong> Cuando la Fed sube tasas, los bonos existentes pierden valor
                                            </div>
                                        </div>

                                        <div class="risk inflation-risk">
                                            <h6><i class="fas fa-fire"></i> Riesgo de Inflación</h6>
                                            <p>La inflación reduce el poder adquisitivo de tus rendimientos</p>
                                            <div class="risk-example">
                                                <strong>Ejemplo:</strong> Si ganas 5% pero la inflación es 7%, pierdes 2% de poder adquisitivo
                                            </div>
                                        </div>

                                        <div class="risk currency-risk">
                                            <h6><i class="fas fa-exchange-alt"></i> Riesgo Cambiario</h6>
                                            <p>Fluctuaciones en tipos de cambio afectan inversiones internacionales</p>
                                            <div class="risk-example">
                                                <strong>Ejemplo:</strong> Acciones europeas suben 10% en euros, pero el euro baja 15% vs. dólar
                                            </div>
                                        </div>

                                        <div class="risk political-risk">
                                            <h6><i class="fas fa-vote-yea"></i> Riesgo Político/Regulatorio</h6>
                                            <p>Cambios en políticas, regulaciones o estabilidad política</p>
                                            <div class="risk-example">
                                                <strong>Ejemplo:</strong> Nuevas regulaciones sobre criptomonedas causan caídas masivas
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="risk-category unsystematic">
                                <div class="category-header">
                                    <i class="fas fa-building"></i>
                                    <h5>Riesgo No Sistemático (Diversificable)</h5>
                                </div>
                                <div class="category-content">
                                    <p><strong>¿Qué es?</strong> Riesgos específicos de empresas o sectores que pueden reducirse con diversificación.</p>
                                    
                                    <div class="unsystematic-risks">
                                        <div class="risk company-risk">
                                            <h6><i class="fas fa-building"></i> Riesgo de Empresa</h6>
                                            <p>Problemas específicos de una empresa individual</p>
                                            <div class="risk-examples">
                                                <strong>Ejemplos:</strong>
                                                <ul>
                                                    <li>Escándalo contable (Enron, WorldCom)</li>
                                                    <li>Muerte del CEO fundador</li>
                                                    <li>Producto defectuoso que causa demandas</li>
                                                    <li>Pérdida de cliente importante</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="risk industry-risk">
                                            <h6><i class="fas fa-industry"></i> Riesgo de Industria</h6>
                                            <p>Cambios que afectan a todo un sector</p>
                                            <div class="risk-examples">
                                                <strong>Ejemplos:</strong>
                                                <ul>
                                                    <li>Streaming mata a Blockbuster y toda la industria de video físico</li>
                                                    <li>Autos eléctricos amenazan a fabricantes tradicionales</li>
                                                    <li>Regulaciones específicas del sector</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="risk liquidity-risk">
                                            <h6><i class="fas fa-tint"></i> Riesgo de Liquidez</h6>
                                            <p>Dificultad para vender una inversión rápidamente sin afectar el precio</p>
                                            <div class="risk-example">
                                                <strong>Ejemplo:</strong> Acciones de empresas muy pequeñas pueden tener pocos compradores
                                            </div>
                                        </div>

                                        <div class="risk credit-risk">
                                            <h6><i class="fas fa-user-times"></i> Riesgo de Crédito</h6>
                                            <p>Riesgo de que el emisor de un bono no pueda pagar</p>
                                            <div class="risk-example">
                                                <strong>Ejemplo:</strong> Bonos corporativos de empresas en dificultades financieras
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="stress-testing">
                        <h4><i class="fas fa-vial"></i> Stress Testing: Probando tu portafolio</h4>
                        
                        <div class="stress-testing-definition">
                            <div class="definition-box">
                                <p><strong>Stress Testing</strong> es el proceso de evaluar cómo se comportaría tu portafolio bajo condiciones adversas extremas pero plausibles. Es como un simulacro de emergencia para tus inversiones.</p>
                            </div>
                        </div>

                        <div class="stress-test-types">
                            <h5>Tipos de Stress Tests:</h5>
                            
                            <div class="stress-test historical">
                                <h6><i class="fas fa-history"></i> 1. Stress Tests Históricos</h6>
                                <div class="test-explanation">
                                    <p><strong>¿Qué es?</strong> Aplicar a tu portafolio actual los movimientos que ocurrieron durante crisis pasadas.</p>
                                    
                                    <div class="historical-scenarios">
                                        <h7>Escenarios históricos importantes:</h7>
                                        
                                        <div class="scenario">
                                            <strong>Crisis Financiera 2008:</strong>
                                            <ul>
                                                <li>S&P 500: -37% en 2008</li>
                                                <li>Bonos corporativos: -5% a -20%</li>
                                                <li>REITs: -40%</li>
                                                <li>Commodities: -35%</li>
                                                <li>Solo Treasuries subieron (+20%)</li>
                                            </ul>
                                        </div>

                                        <div class="scenario">
                                            <strong>Dot-com Crash (2000-2002):</strong>
                                            <ul>
                                                <li>NASDAQ: -78% desde el pico</li>
                                                <li>S&P 500: -49%</li>
                                                <li>Tecnología: -80%+</li>
                                                <li>Duración: 2.5 años</li>
                                            </ul>
                                        </div>

                                        <div class="scenario">
                                            <strong>COVID-19 Crash (Marzo 2020):</strong>
                                            <ul>
                                                <li>S&P 500: -34% en 33 días</li>
                                                <li>Petróleo: -300% (precios negativos)</li>
                                                <li>Bonos corporativos: -13%</li>
                                                <li>Recuperación: 5 meses</li>
                                            </ul>
                                        </div>

                                        <div class="scenario">
                                            <strong>Inflación de los 70s:</strong>
                                            <ul>
                                                <li>Inflación: hasta 14.8%</li>
                                                <li>Bonos: pérdidas reales masivas</li>
                                                <li>Oro: +2,300% en la década</li>
                                                <li>Acciones: rendimientos reales negativos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="stress-test hypothetical">
                                <h6><i class="fas fa-brain"></i> 2. Stress Tests Hipotéticos</h6>
                                <div class="test-explanation">
                                    <p><strong>¿Qué es?</strong> Crear escenarios futuros plausibles pero que no han ocurrido históricamente.</p>
                                    
                                    <div class="hypothetical-scenarios">
                                        <h7>Ejemplos de escenarios hipotéticos:</h7>
                                        
                                        <div class="scenario">
                                            <strong>Guerra Cibernética Global:</strong>
                                            <ul>
                                                <li>Ataques masivos a infraestructura financiera</li>
                                                <li>Mercados cerrados por días/semanas</li>
                                                <li>Pánico masivo cuando reabren</li>
                                                <li>Tecnología: -60%, Ciberseguridad: +200%</li>
                                            </ul>
                                        </div>

                                        <div class="scenario">
                                            <strong>Hiperinflación Estilo Weimar:</strong>
                                            <ul>
                                                <li>Inflación >50% mensual</li>
                                                <li>Colapso de bonos nominales</li>
                                                <li>Fuga masiva a activos reales</li>
                                                <li>Oro, bienes raíces, commodities: +1000%+</li>
                                            </ul>
                                        </div>

                                        <div class="scenario">
                                            <strong>Revolución de IA:</strong>
                                            <ul>
                                                <li>IA reemplaza 40% de trabajos en 5 años</li>
                                                <li>Desempleo masivo, disturbios sociales</li>
                                                <li>Tech: +500%, Retail/Servicios: -80%</li>
                                                <li>Gobiernos implementan UBI</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="stress-test monte-carlo">
                                <h6><i class="fas fa-dice"></i> 3. Simulaciones Monte Carlo</h6>
                                <div class="test-explanation">
                                    <p><strong>¿Qué es?</strong> Usar computadoras para simular miles de escenarios aleatorios basados en distribuciones estadísticas.</p>
                                    
                                    <div class="monte-carlo-process">
                                        <h7>Proceso:</h7>
                                        <ol>
                                            <li>Define distribuciones de rendimientos para cada activo</li>
                                            <li>Genera miles de caminos aleatorios posibles</li>
                                            <li>Calcula resultados del portafolio en cada escenario</li>
                                            <li>Analiza distribución de resultados</li>
                                        </ol>
                                    </div>
                                    
                                    <div class="monte-carlo-insights">
                                        <strong>Insights típicos:</strong>
                                        <ul>
                                            <li>Probabilidad de perder >20% en un año</li>
                                            <li>Peor pérdida esperada en 95% de escenarios (VaR)</li>
                                            <li>Tiempo esperado para recuperarse de caídas</li>
                                            <li>Probabilidad de alcanzar objetivos financieros</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="stress-test-example">
                            <h5><i class="fas fa-calculator"></i> Ejemplo práctico de Stress Test</h5>
                            
                            <div class="example-portfolio">
                                <h6>Portafolio ejemplo:</h6>
                                <ul>
                                    <li>60% S&P 500 ETF (SPY)</li>
                                    <li>20% Bonos totales (BND)</li>
                                    <li>10% REITs (VNQ)</li>
                                    <li>10% Oro (GLD)</li>
                                </ul>
                            </div>

                            <div class="stress-scenarios-results">
                                <h6>Resultados bajo diferentes escenarios:</h6>
                                
                                <table class="stress-results-table">
                                    <thead>
                                        <tr>
                                            <th>Escenario</th>
                                            <th>SPY</th>
                                            <th>BND</th>
                                            <th>VNQ</th>
                                            <th>GLD</th>
                                            <th>Portafolio Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Crisis 2008</strong></td>
                                            <td>-37%</td>
                                            <td>+5%</td>
                                            <td>-40%</td>
                                            <td>+5%</td>
                                            <td><strong>-20.2%</strong></td>
                                        </tr>
                                        <tr>
                                            <td><strong>COVID Crash</strong></td>
                                            <td>-34%</td>
                                            <td>+8%</td>
                                            <td>-30%</td>
                                            <td>+8%</td>
                                            <td><strong>-17.6%</strong></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Inflación 70s</strong></td>
                                            <td>-5%</td>
                                            <td>-15%</td>
                                            <td>+10%</td>
                                            <td>+300%</td>
                                            <td><strong>+24.0%</strong></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Deflación Japón</strong></td>
                                            <td>-10%</td>
                                            <td>+15%</td>
                                            <td>-20%</td>
                                            <td>-5%</td>
                                            <td><strong>-4.5%</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="stress-insights">
                                <h6>Insights del análisis:</h6>
                                <ul>
                                    <li><strong>Peor escenario:</strong> -20.2% (Crisis 2008)</li>
                                    <li><strong>Mejor protección:</strong> Oro durante inflación</li>
                                    <li><strong>Diversificación funciona:</strong> Ningún activo domina en todos los escenarios</li>
                                    <li><strong>Vulnerabilidad:</strong> Crisis de crédito (bonos y REITs sufren juntos)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="risk-metrics">
                        <h4><i class="fas fa-tachometer-alt"></i> Métricas clave de riesgo</h4>
                        
                        <div class="metric volatility">
                            <h6><i class="fas fa-chart-line"></i> Volatilidad (Standard Deviation)</h6>
                            <div class="metric-explanation">
                                <p><strong>¿Qué mide?</strong> Qué tan dispersos están los rendimientos alrededor del promedio</p>
                                <p><strong>Interpretación:</strong> Mayor volatilidad = mayor incertidumbre</p>
                                
                                <div class="volatility-examples">
                                    <strong>Ejemplos típicos (anualizados):</strong>
                                    <ul>
                                        <li><strong>Cash:</strong> 0-1%</li>
                                        <li><strong>Bonos gubernamentales:</strong> 3-8%</li>
                                        <li><strong>S&P 500:</strong> 15-20%</li>
                                        <li><strong>Small caps:</strong> 20-30%</li>
                                        <li><strong>Criptomonedas:</strong> 50-100%+</li>
                                    </ul>
                                </div>
                                
                                <div class="volatility-rule">
                                    <strong>Regla práctica:</strong> En ~68% de los años, el rendimiento estará dentro de ±1 desviación estándar del promedio
                                </div>
                            </div>
                        </div>

                        <div class="metric var">
                            <h6><i class="fas fa-exclamation-triangle"></i> VaR (Value at Risk)</h6>
                            <div class="metric-explanation">
                                <p><strong>¿Qué mide?</strong> La pérdida máxima esperada en un período dado con un nivel de confianza específico</p>
                                
                                <div class="var-example">
                                    <strong>Ejemplo:</strong> VaR de 5% a 1 día con 95% de confianza = "Hay 95% de probabilidad de que no perdamos más de 5% en un día"
                                </div>
                                
                                <div class="var-limitations">
                                    <strong>Limitaciones:</strong>
                                    <ul>
                                        <li>No dice nada sobre el 5% de casos extremos</li>
                                        <li>Asume distribuciones normales (a menudo incorrectas)</li>
                                        <li>Basado en datos históricos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="metric max-drawdown">
                            <h6><i class="fas fa-arrow-down"></i> Maximum Drawdown</h6>
                            <div class="metric-explanation">
                                <p><strong>¿Qué mide?</strong> La mayor caída desde un pico hasta un valle en el valor del portafolio</p>
                                
                                <div class="drawdown-example">
                                    <strong>Ejemplo:</strong> Si tu portafolio sube de $100k a $150k, luego cae a $120k, el drawdown es 20% ($150k → $120k)
                                </div>
                                
                                <div class="drawdown-importance">
                                    <strong>Por qué importa:</strong>
                                    <ul>
                                        <li>Mide el dolor real que sentirás</li>
                                        <li>Indica cuánto tiempo podrías estar "underwater"</li>
                                        <li>Ayuda a dimensionar position sizes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="metric sharpe-ratio">
                            <h6><i class="fas fa-balance-scale"></i> Sharpe Ratio</h6>
                            <div class="metric-explanation">
                                <p><strong>¿Qué mide?</strong> Rendimiento ajustado por riesgo</p>
                                <p><strong>Fórmula:</strong> (Rendimiento - Tasa libre de riesgo) ÷ Volatilidad</p>
                                
                                <div class="sharpe-interpretation">
                                    <strong>Interpretación:</strong>
                                    <ul>
                                        <li><strong>Sharpe > 1:</strong> Bueno</li>
                                        <li><strong>Sharpe > 2:</strong> Muy bueno</li>
                                        <li><strong>Sharpe > 3:</strong> Excepcional</li>
                                    </ul>
                                </div>
                                
                                <div class="sharpe-example">
                                    <strong>Ejemplo:</strong> Portafolio A gana 12% con 15% volatilidad vs. Portafolio B gana 8% con 8% volatilidad. Si la tasa libre de riesgo es 2%:
                                    <ul>
                                        <li>Sharpe A = (12%-2%)/15% = 0.67</li>
                                        <li>Sharpe B = (8%-2%)/8% = 0.75</li>
                                        <li><strong>B es mejor ajustado por riesgo</strong></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="metric beta">
                            <h6><i class="fas fa-chart

