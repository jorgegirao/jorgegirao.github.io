// Module 1: Introducción al Mundo de las Inversiones
const module1Content = {
    id: 1,
    title: 'Introducción al Mundo de las Inversiones',
    sections: {
        section1: {
            title: '¿Qué es el dinero y cómo funciona?',
            content: `
                <div class="content-section">
                    <h3>¿Qué es el dinero y cómo funciona?</h3>
                    
                    <div class="intro-text">
                        <p>Imagina que tienes 10 años y acabas de recibir $100 pesos de regalo de cumpleaños. ¿Qué harías con ese dinero? Podrías gastarlo inmediatamente en dulces y juguetes, o podrías guardarlo para algo más grande en el futuro. Esta simple decisión es el primer paso para entender el mundo de las inversiones.</p>
                    </div>

                    <div class="concept-box">
                        <h4><i class="fas fa-coins"></i> ¿Qué es realmente el dinero?</h4>
                        <p>El dinero es mucho más que los billetes y monedas que vemos todos los días. Es una herramienta que nos permite intercambiar valor. Hace miles de años, las personas intercambiaban directamente productos: si tenías manzanas y querías pescado, tenías que encontrar a alguien que tuviera pescado y quisiera manzanas. ¡Imagínate lo complicado que era!</p>
                        
                        <p>El dinero resolvió este problema al convertirse en un "intermediario" que todos aceptan. Ahora puedes vender tus manzanas por dinero y usar ese dinero para comprar pescado, incluso si el vendedor de pescado no quiere manzanas.</p>
                    </div>

                    <div class="key-functions">
                        <h4>Las tres funciones principales del dinero:</h4>
                        
                        <div class="function-card">
                            <div class="function-icon">
                                <i class="fas fa-exchange-alt"></i>
                            </div>
                            <div class="function-content">
                                <h5>1. Medio de Intercambio</h5>
                                <p>El dinero facilita las transacciones. En lugar de intercambiar directamente productos (trueque), usamos dinero como intermediario.</p>
                                <div class="example">
                                    <strong>Ejemplo:</strong> Vendes tu bicicleta vieja por $2,000 pesos y usas ese dinero para comprar una computadora.
                                </div>
                            </div>
                        </div>

                        <div class="function-card">
                            <div class="function-icon">
                                <i class="fas fa-ruler"></i>
                            </div>
                            <div class="function-content">
                                <h5>2. Unidad de Cuenta</h5>
                                <p>El dinero nos permite medir y comparar el valor de diferentes cosas usando la misma "regla".</p>
                                <div class="example">
                                    <strong>Ejemplo:</strong> Puedes comparar fácilmente si es mejor comprar una pizza de $150 pesos o una hamburguesa de $80 pesos.
                                </div>
                            </div>
                        </div>

                        <div class="function-card">
                            <div class="function-icon">
                                <i class="fas fa-piggy-bank"></i>
                            </div>
                            <div class="function-content">
                                <h5>3. Reserva de Valor</h5>
                                <p>El dinero nos permite guardar valor para el futuro. Puedes trabajar hoy y guardar el dinero para gastarlo mañana.</p>
                                <div class="example">
                                    <strong>Ejemplo:</strong> Ahorras $500 pesos cada mes durante un año para comprar algo que cuesta $6,000 pesos.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="inflation-concept">
                        <h4><i class="fas fa-chart-line"></i> El dinero y el tiempo: La inflación</h4>
                        <p>Aquí viene algo muy importante que debes entender: <strong>el dinero pierde valor con el tiempo</strong>. Esto se llama inflación.</p>
                        
                        <div class="inflation-example">
                            <h5>Un ejemplo sencillo:</h5>
                            <p>Imagina que en el año 2000, una paleta costaba $2 pesos. Hoy, esa misma paleta cuesta $10 pesos. ¿Significa que la paleta se volvió más valiosa? No necesariamente. Lo que pasó es que el dinero perdió valor.</p>
                            
                            <p>Si en el año 2000 tenías $100 pesos guardados debajo del colchón, hoy esos $100 pesos te comprarían muchas menos cosas que hace 23 años.</p>
                        </div>

                        <div class="inflation-impact">
                            <h5>¿Por qué ocurre la inflación?</h5>
                            <ul>
                                <li><strong>Más dinero en circulación:</strong> Cuando hay más dinero disponible, los precios tienden a subir</li>
                                <li><strong>Mayor demanda:</strong> Si muchas personas quieren comprar lo mismo, los precios suben</li>
                                <li><strong>Costos de producción:</strong> Si cuesta más producir algo, el precio final aumenta</li>
                                <li><strong>Expectativas:</strong> Si las personas esperan que los precios suban, a menudo suben</li>
                            </ul>
                        </div>
                    </div>

                    <div class="money-types">
                        <h4><i class="fas fa-university"></i> Tipos de dinero en el mundo moderno</h4>
                        
                        <div class="money-type">
                            <h5>1. Dinero físico (Efectivo)</h5>
                            <p>Los billetes y monedas que puedes tocar. Aunque cada vez se usa menos, sigue siendo importante para transacciones pequeñas y como respaldo del sistema financiero.</p>
                        </div>

                        <div class="money-type">
                            <h5>2. Dinero digital (Cuentas bancarias)</h5>
                            <p>La mayoría del dinero hoy existe solo como números en computadoras. Cuando recibes tu salario, generalmente se deposita electrónicamente en tu cuenta bancaria.</p>
                        </div>

                        <div class="money-type">
                            <h5>3. Dinero electrónico (Tarjetas y apps)</h5>
                            <p>Tarjetas de débito, crédito, y aplicaciones como PayPal o transferencias bancarias que nos permiten mover dinero digital fácilmente.</p>
                        </div>

                        <div class="money-type">
                            <h5>4. Criptomonedas</h5>
                            <p>Una forma nueva de dinero digital que no está controlada por bancos centrales. Bitcoin es el ejemplo más famoso, aunque es muy volátil y especulativo.</p>
                        </div>
                    </div>

                    <div class="money-creation">
                        <h4><i class="fas fa-cogs"></i> ¿Cómo se crea el dinero?</h4>
                        <p>Contrario a lo que muchos piensan, la mayor parte del dinero no se "imprime" físicamente. Se crea de formas más complejas:</p>
                        
                        <div class="creation-method">
                            <h5>1. Bancos Centrales</h5>
                            <p>Instituciones como el Banco de México o la Reserva Federal de Estados Unidos pueden crear dinero digitalmente para controlar la economía.</p>
                        </div>

                        <div class="creation-method">
                            <h5>2. Préstamos bancarios</h5>
                            <p>Cuando un banco te presta dinero, en realidad está creando dinero nuevo. Si depositas $1,000 pesos, el banco puede prestar $900 pesos a otra persona, manteniendo solo $100 pesos como reserva.</p>
                        </div>
                    </div>

                    <div class="practical-implications">
                        <h4><i class="fas fa-lightbulb"></i> ¿Por qué es importante entender esto para invertir?</h4>
                        
                        <div class="implication">
                            <h5>1. El dinero guardado pierde valor</h5>
                            <p>Si solo guardas dinero en efectivo o en una cuenta que no paga intereses, estás perdiendo poder adquisitivo cada año debido a la inflación.</p>
                        </div>

                        <div class="implication">
                            <h5>2. Necesitas que tu dinero "trabaje"</h5>
                            <p>Para mantener o aumentar tu poder adquisitivo, necesitas que tu dinero genere rendimientos que al menos igualen o superen la inflación.</p>
                        </div>

                        <div class="implication">
                            <h5>3. El tiempo es tu aliado</h5>
                            <p>Mientras más temprano empieces a hacer que tu dinero trabaje para ti, más tiempo tendrá para crecer y compensar la inflación.</p>
                        </div>
                    </div>

                    <div class="video-resources">
                        <h4><i class="fas fa-play-circle"></i> Videos recomendados</h4>
                        <div class="video-links">
                            <a href="https://www.youtube.com/watch?v=QLz5K3Tez9E" target="_blank" class="video-link">
                                <i class="fab fa-youtube"></i>
                                Cómo Empezar a INVERTIR desde CERO
                            </a>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h4><i class="fas fa-key"></i> Puntos clave para recordar</h4>
                        <div class="takeaway-grid">
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>El dinero es una herramienta para intercambiar, medir y guardar valor</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>La inflación hace que el dinero pierda valor con el tiempo</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Guardar dinero sin que genere rendimientos es perder poder adquisitivo</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Entender el dinero es el primer paso para invertir inteligentemente</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        section2: {
            title: 'Ahorro vs. Inversión: Diferencias clave',
            content: `
                <div class="content-section">
                    <h3>Ahorro vs. Inversión: Diferencias clave</h3>
                    
                    <div class="intro-scenario">
                        <h4><i class="fas fa-story"></i> Una historia para entender la diferencia</h4>
                        <p>Conoce a Ana y Carlos, dos hermanos gemelos de 25 años que acaban de conseguir su primer trabajo. Ambos ganan $15,000 pesos al mes y deciden guardar $3,000 pesos cada mes. Pero toman caminos muy diferentes:</p>
                        
                        <div class="character-comparison">
                            <div class="character">
                                <div class="character-header">
                                    <i class="fas fa-piggy-bank"></i>
                                    <h5>Ana - La Ahorradora</h5>
                                </div>
                                <p>Ana decide guardar sus $3,000 pesos cada mes en una cuenta de ahorros que le paga 2% anual de interés. Se siente segura porque su dinero está protegido y siempre puede acceder a él.</p>
                            </div>
                            
                            <div class="character">
                                <div class="character-header">
                                    <i class="fas fa-chart-line"></i>
                                    <h5>Carlos - El Inversor</h5>
                                </div>
                                <p>Carlos también guarda $3,000 pesos al mes, pero los invierte en una combinación de fondos de inversión que históricamente han dado 8% anual. Acepta que habrá fluctuaciones, pero busca mayor crecimiento a largo plazo.</p>
                            </div>
                        </div>
                        
                        <div class="time-comparison">
                            <h5>¿Qué pasa después de 20 años?</h5>
                            <div class="results">
                                <div class="result">
                                    <strong>Ana (Ahorro 2%):</strong> $876,000 pesos
                                </div>
                                <div class="result">
                                    <strong>Carlos (Inversión 8%):</strong> $1,766,000 pesos
                                </div>
                                <div class="difference">
                                    <strong>Diferencia:</strong> $890,000 pesos más para Carlos
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="definitions">
                        <h4><i class="fas fa-book-open"></i> Definiciones claras</h4>
                        
                        <div class="definition-card saving">
                            <div class="definition-header">
                                <i class="fas fa-piggy-bank"></i>
                                <h5>Ahorro (Saving)</h5>
                            </div>
                            <div class="definition-content">
                                <p><strong>¿Qué es?</strong> Guardar dinero de forma segura, generalmente en cuentas bancarias o instrumentos de muy bajo riesgo.</p>
                                
                                <div class="characteristics">
                                    <h6>Características principales:</h6>
                                    <ul>
                                        <li><strong>Seguridad:</strong> Tu dinero está protegido</li>
                                        <li><strong>Liquidez:</strong> Puedes acceder a tu dinero rápidamente</li>
                                        <li><strong>Rendimientos bajos:</strong> Generalmente entre 1-4% anual</li>
                                        <li><strong>Sin riesgo de pérdida:</strong> No pierdes el capital inicial</li>
                                    </ul>
                                </div>

                                <div class="examples">
                                    <h6>Ejemplos de ahorro:</h6>
                                    <ul>
                                        <li>Cuenta de ahorros bancaria</li>
                                        <li>Certificados de depósito (CETES en México)</li>
                                        <li>Cuenta de nómina con rendimientos</li>
                                        <li>Pagarés bancarios</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="definition-card investing">
                            <div class="definition-header">
                                <i class="fas fa-chart-line"></i>
                                <h5>Inversión (Investment)</h5>
                            </div>
                            <div class="definition-content">
                                <p><strong>¿Qué es?</strong> Destinar dinero a activos que tienen potencial de generar mayores rendimientos, aceptando cierto nivel de riesgo.</p>
                                
                                <div class="characteristics">
                                    <h6>Características principales:</h6>
                                    <ul>
                                        <li><strong>Mayor potencial de rendimiento:</strong> Históricamente 6-12% anual o más</li>
                                        <li><strong>Riesgo:</strong> Posibilidad de perder parte del capital</li>
                                        <li><strong>Menor liquidez:</strong> Puede tomar tiempo vender tus inversiones</li>
                                        <li><strong>Volatilidad:</strong> El valor fluctúa en el corto plazo</li>
                                    </ul>
                                </div>

                                <div class="examples">
                                    <h6>Ejemplos de inversión:</h6>
                                    <ul>
                                        <li>Acciones de empresas</li>
                                        <li>Fondos de inversión</li>
                                        <li>Bienes raíces</li>
                                        <li>Bonos corporativos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="comparison-table">
                        <h4><i class="fas fa-balance-scale"></i> Comparación detallada</h4>
                        <table class="comparison">
                            <thead>
                                <tr>
                                    <th>Aspecto</th>
                                    <th>Ahorro</th>
                                    <th>Inversión</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Objetivo principal</strong></td>
                                    <td>Preservar el dinero</td>
                                    <td>Hacer crecer el dinero</td>
                                </tr>
                                <tr>
                                    <td><strong>Riesgo</strong></td>
                                    <td>Muy bajo o nulo</td>
                                    <td>Variable (bajo a alto)</td>
                                </tr>
                                <tr>
                                    <td><strong>Rendimiento esperado</strong></td>
                                    <td>1-4% anual</td>
                                    <td>6-12% anual (promedio histórico)</td>
                                </tr>
                                <tr>
                                    <td><strong>Liquidez</strong></td>
                                    <td>Alta (acceso inmediato)</td>
                                    <td>Variable (días a años)</td>
                                </tr>
                                <tr>
                                    <td><strong>Volatilidad</strong></td>
                                    <td>Nula</td>
                                    <td>Presente</td>
                                </tr>
                                <tr>
                                    <td><strong>Horizonte de tiempo</strong></td>
                                    <td>Corto a mediano plazo</td>
                                    <td>Mediano a largo plazo</td>
                                </tr>
                                <tr>
                                    <td><strong>Protección contra inflación</strong></td>
                                    <td>Limitada</td>
                                    <td>Mejor potencial</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="when-to-use">
                        <h4><i class="fas fa-clock"></i> ¿Cuándo usar cada uno?</h4>
                        
                        <div class="use-case">
                            <h5><i class="fas fa-piggy-bank"></i> Usa el AHORRO cuando:</h5>
                            <div class="use-case-list">
                                <div class="use-item">
                                    <i class="fas fa-ambulance"></i>
                                    <div>
                                        <strong>Fondo de emergencia:</strong> Necesitas dinero disponible para gastos inesperados (3-6 meses de gastos)
                                    </div>
                                </div>
                                <div class="use-item">
                                    <i class="fas fa-calendar-alt"></i>
                                    <div>
                                        <strong>Metas a corto plazo:</strong> Planeas usar el dinero en menos de 2 años (vacaciones, enganche de auto)
                                    </div>
                                </div>
                                <div class="use-item">
                                    <i class="fas fa-shield-alt"></i>
                                    <div>
                                        <strong>Aversión al riesgo:</strong> No puedes permitirte perder nada del dinero
                                    </div>
                                </div>
                                <div class="use-item">
                                    <i class="fas fa-bed"></i>
                                    <div>
                                        <strong>Tranquilidad mental:</strong> Prefieres dormir tranquilo sabiendo que tu dinero está seguro
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="use-case">
                            <h5><i class="fas fa-chart-line"></i> Usa la INVERSIÓN cuando:</h5>
                            <div class="use-case-list">
                                <div class="use-item">
                                    <i class="fas fa-hourglass-half"></i>
                                    <div>
                                        <strong>Metas a largo plazo:</strong> No necesitarás el dinero por al menos 5 años (retiro, educación de hijos)
                                    </div>
                                </div>
                                <div class="use-item">
                                    <i class="fas fa-fire"></i>
                                    <div>
                                        <strong>Vencer la inflación:</strong> Quieres que tu dinero mantenga o aumente su poder adquisitivo
                                    </div>
                                </div>
                                <div class="use-item">
                                    <i class="fas fa-mountain"></i>
                                    <div>
                                        <strong>Tolerancia al riesgo:</strong> Puedes aceptar fluctuaciones a cambio de mayor crecimiento potencial
                                    </div>
                                </div>
                                <div class="use-item">
                                    <i class="fas fa-graduation-cap"></i>
                                    <div>
                                        <strong>Educación financiera:</strong> Estás dispuesto a aprender sobre diferentes opciones de inversión
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="balanced-approach">
                        <h4><i class="fas fa-balance-scale"></i> El enfoque balanceado: ¿Por qué no ambos?</h4>
                        <p>La realidad es que la mayoría de las personas necesitan TANTO ahorro COMO inversión. Una estrategia inteligente incluye ambos:</p>
                        
                        <div class="strategy-steps">
                            <div class="step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h5>Construye tu fondo de emergencia</h5>
                                    <p>Primero, ahorra 3-6 meses de gastos en una cuenta de fácil acceso. Esto es tu red de seguridad.</p>
                                </div>
                            </div>
                            
                            <div class="step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h5>Ahorra para metas a corto plazo</h5>
                                    <p>Si planeas comprar algo en los próximos 1-2 años, usa instrumentos de ahorro seguros.</p>
                                </div>
                            </div>
                            
                            <div class="step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h5>Invierte para el largo plazo</h5>
                                    <p>Una vez cubierto lo anterior, invierte el dinero que no necesitarás por varios años.</p>
                                </div>
                            </div>
                        </div>

                        <div class="allocation-example">
                            <h5>Ejemplo de distribución para alguien que guarda $5,000 pesos al mes:</h5>
                            <div class="allocation-chart">
                                <div class="allocation-item">
                                    <div class="allocation-bar emergency" style="width: 30%"></div>
                                    <span>$1,500 - Fondo de emergencia (hasta completarlo)</span>
                                </div>
                                <div class="allocation-item">
                                    <div class="allocation-bar short-term" style="width: 20%"></div>
                                    <span>$1,000 - Metas a corto plazo</span>
                                </div>
                                <div class="allocation-item">
                                    <div class="allocation-bar investment" style="width: 50%"></div>
                                    <span>$2,500 - Inversiones a largo plazo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="common-mistakes">
                        <h4><i class="fas fa-exclamation-triangle"></i> Errores comunes que debes evitar</h4>
                        
                        <div class="mistake">
                            <h5><i class="fas fa-times-circle"></i> Error 1: Solo ahorrar</h5>
                            <p><strong>El problema:</strong> Tu dinero pierde poder adquisitivo por la inflación.</p>
                            <p><strong>La solución:</strong> Una vez que tengas tu fondo de emergencia, empieza a invertir para metas a largo plazo.</p>
                        </div>

                        <div class="mistake">
                            <h5><i class="fas fa-times-circle"></i> Error 2: Solo invertir</h5>
                            <p><strong>El problema:</strong> Sin ahorros, cualquier emergencia te obligará a vender inversiones en mal momento.</p>
                            <p><strong>La solución:</strong> Siempre mantén un fondo de emergencia en instrumentos líquidos y seguros.</p>
                        </div>

                        <div class="mistake">
                            <h5><i class="fas fa-times-circle"></i> Error 3: Confundir especulación con inversión</h5>
                            <p><strong>El problema:</strong> Comprar criptomonedas o acciones esperando hacerte rico rápido es especulación, no inversión.</p>
                            <p><strong>La solución:</strong> La inversión real se basa en análisis, diversificación y paciencia.</p>
                        </div>

                        <div class="mistake">
                            <h5><i class="fas fa-times-circle"></i> Error 4: No empezar por miedo</h5>
                            <p><strong>El problema:</strong> Esperar el "momento perfecto" o tener miedo de perder dinero.</p>
                            <p><strong>La solución:</strong> Empieza con poco, aprende gradualmente y aumenta tus inversiones con el tiempo.</p>
                        </div>
                    </div>

                    <div class="practical-exercise">
                        <h4><i class="fas fa-calculator"></i> Ejercicio práctico</h4>
                        <p>Calcula tu situación personal:</p>
                        
                        <div class="exercise-steps">
                            <div class="exercise-step">
                                <strong>Paso 1:</strong> ¿Cuánto dinero puedes destinar mensualmente? $______
                            </div>
                            <div class="exercise-step">
                                <strong>Paso 2:</strong> ¿Cuántos meses de gastos tienes ahorrados para emergencias? ______
                            </div>
                            <div class="exercise-step">
                                <strong>Paso 3:</strong> ¿Tienes metas específicas en los próximos 2 años? ¿Cuánto necesitas? $______
                            </div>
                            <div class="exercise-step">
                                <strong>Paso 4:</strong> Después de cubrir emergencias y metas a corto plazo, ¿cuánto podrías invertir? $______
                            </div>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h4><i class="fas fa-key"></i> Puntos clave para recordar</h4>
                        <div class="takeaway-grid">
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Ahorro = seguridad y liquidez, Inversión = crecimiento y riesgo</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Necesitas ambos: ahorro para emergencias, inversión para el futuro</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>El tiempo es clave: mientras más temprano inviertas, mejor</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>No hay una fórmula única: tu estrategia depende de tus metas y situación</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        section3: {
            title: 'Riesgo y Recompensa: La balanza fundamental',
            content: `
                <div class="content-section">
                    <h3>Riesgo y Recompensa: La balanza fundamental</h3>
                    
                    <div class="intro-concept">
                        <p>Imagina que estás en una feria y ves dos juegos diferentes:</p>
                        
                        <div class="game-comparison">
                            <div class="game">
                                <h5><i class="fas fa-dice-one"></i> Juego A: "Seguro"</h5>
                                <p>Pagas $10 pesos y siempre ganas $11 pesos. Ganancia garantizada de $1 peso.</p>
                            </div>
                            
                            <div class="game">
                                <h5><i class="fas fa-dice-six"></i> Juego B: "Arriesgado"</h5>
                                <p>Pagas $10 pesos. 50% de probabilidad de ganar $25 pesos, 50% de probabilidad de perder todo.</p>
                            </div>
                        </div>
                        
                        <p>¿Cuál elegirías? Tu respuesta revela mucho sobre tu tolerancia al riesgo, y esta misma decisión la enfrentas constantemente en el mundo de las inversiones.</p>
                    </div>

                    <div class="risk-definition">
                        <h4><i class="fas fa-exclamation-triangle"></i> ¿Qué es el riesgo en inversiones?</h4>
                        
                        <div class="definition-box">
                            <p><strong>Riesgo</strong> es la posibilidad de que el resultado real de una inversión sea diferente al esperado. Esto incluye tanto la posibilidad de ganar menos de lo esperado como la de perder parte o todo el dinero invertido.</p>
                        </div>

                        <div class="risk-types">
                            <h5>Tipos principales de riesgo:</h5>
                            
                            <div class="risk-type">
                                <div class="risk-icon">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <div class="risk-content">
                                    <h6>1. Riesgo de Mercado</h6>
                                    <p>Los precios de las inversiones fluctúan por factores económicos generales. Si el mercado baja, la mayoría de las inversiones bajan también.</p>
                                    <div class="example">
                                        <strong>Ejemplo:</strong> Durante la crisis de 2008, casi todas las acciones perdieron valor, sin importar qué tan buenas fueran las empresas.
                                    </div>
                                </div>
                            </div>

                            <div class="risk-type">
                                <div class="risk-icon">
                                    <i class="fas fa-building"></i>
                                </div>
                                <div class="risk-content">
                                    <h6>2. Riesgo Específico (de la empresa)</h6>
                                    <p>Problemas particulares de una empresa o sector que afectan solo a esa inversión.</p>
                                    <div class="example">
                                        <strong>Ejemplo:</strong> Si inviertes solo en acciones de una aerolínea y hay una pandemia que prohíbe viajar, esa empresa se verá muy afectada.
                                    </div>
                                </div>
                            </div>

                            <div class="risk-type">
                                <div class="risk-icon">
                                    <i class="fas fa-percentage"></i>
                                </div>
                                <div class="risk-content">
                                    <h6>3. Riesgo de Inflación</h6>
                                    <p>El riesgo de que tu dinero pierda poder adquisitivo con el tiempo.</p>
                                    <div class="example">
                                        <strong>Ejemplo:</strong> Si inviertes en algo que da 2% anual pero la inflación es 4%, realmente estás perdiendo 2% de poder adquisitivo cada año.
                                    </div>
                                </div>
                            </div>

                            <div class="risk-type">
                                <div class="risk-icon">
                                    <i class="fas fa-tint"></i>
                                </div>
                                <div class="risk-content">
                                    <h6>4. Riesgo de Liquidez</h6>
                                    <p>La dificultad para vender tu inversión rápidamente sin perder valor.</p>
                                    <div class="example">
                                        <strong>Ejemplo:</strong> Es fácil vender acciones de Apple en minutos, pero vender una casa puede tomar meses y requiere negociar el precio.
                                    </div>
                                </div>
                            </div>

                            <div class="risk-type">
                                <div class="risk-icon">
                                    <i class="fas fa-exchange-alt"></i>
                                </div>
                                <div class="risk-content">
                                    <h6>5. Riesgo Cambiario</h6>
                                    <p>Cuando inviertes en monedas diferentes a la tuya, los cambios en el tipo de cambio pueden afectar tus rendimientos.</p>
                                    <div class="example">
                                        <strong>Ejemplo:</strong> Si eres mexicano e inviertes en acciones estadounidenses, y el peso se fortalece frente al dólar, tus ganancias en dólares valen menos en pesos.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="return-definition">
                        <h4><i class="fas fa-trophy"></i> ¿Qué es la recompensa (rendimiento)?</h4>
                        
                        <div class="definition-box">
                            <p><strong>Rendimiento o recompensa</strong> es la ganancia que obtienes de una inversión, generalmente expresada como un porcentaje anual del dinero invertido.</p>
                        </div>

                        <div class="return-types">
                            <h5>Formas en que puedes ganar dinero invirtiendo:</h5>
                            
                            <div class="return-type">
                                <div class="return-icon">
                                    <i class="fas fa-arrow-up"></i>
                                </div>
                                <div class="return-content">
                                    <h6>1. Apreciación del Capital</h6>
                                    <p>El valor de tu inversión aumenta con el tiempo.</p>
                                    <div class="example">
                                        <strong>Ejemplo:</strong> Compras acciones de una empresa a $100 pesos por acción. Un año después valen $120 pesos. Tu ganancia es 20%.
                                    </div>
                                </div>
                            </div>

                            <div class="return-type">
                                <div class="return-icon">
                                    <i class="fas fa-coins"></i>
                                </div>
                                <div class="return-content">
                                    <h6>2. Dividendos</h6>
                                    <p>Pagos periódicos que hacen algunas empresas a sus accionistas.</p>
                                    <div class="example">
                                        <strong>Ejemplo:</strong> Tienes acciones de Coca-Cola. Cada trimestre te pagan $2 pesos por acción que tengas, sin importar si el precio de la acción sube o baja.
                                    </div>
                                </div>
                            </div>

                            <div class="return-type">
                                <div class="return-icon">
                                    <i class="fas fa-percent"></i>
                                </div>
                                <div class="return-content">
                                    <h6>3. Intereses</h6>
                                    <p>Pagos fijos que recibes por prestar tu dinero (bonos, depósitos).</p>
                                    <div class="example">
                                        <strong>Ejemplo:</strong> Compras un bono del gobierno que paga 5% anual. Si inviertes $10,000 pesos, recibes $500 pesos cada año.
                                    </div>
                                </div>
                            </div>

                            <div class="return-type">
                                <div class="return-icon">
                                    <i class="fas fa-home"></i>
                                </div>
                                <div class="return-content">
                                    <h6>4. Rentas</h6>
                                    <p>Ingresos periódicos por rentar propiedades o activos.</p>
                                    <div class="example">
                                        <strong>Ejemplo:</strong> Compras un departamento por $1,000,000 pesos y lo rentas por $8,000 pesos mensuales. Tu rendimiento anual por renta es 9.6%.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="risk-return-relationship">
                        <h4><i class="fas fa-balance-scale"></i> La relación fundamental: A mayor riesgo, mayor recompensa potencial</h4>
                        
                        <p>Esta es una de las reglas más importantes en inversiones: <strong>no existe el almuerzo gratis</strong>. Si quieres la posibilidad de ganar más, debes aceptar la posibilidad de perder más.</p>

                        <div class="risk-return-spectrum">
                            <h5>Espectro de Riesgo-Rendimiento:</h5>
                            
                            <div class="spectrum-item low-risk">
                                <div class="spectrum-header">
                                    <i class="fas fa-shield-alt"></i>
                                    <h6>Bajo Riesgo - Bajo Rendimiento</h6>
                                </div>
                                <div class="spectrum-content">
                                    <p><strong>Rendimiento esperado:</strong> 1-4% anual</p>
                                    <p><strong>Ejemplos:</strong> Cuentas de ahorro, CETES, depósitos bancarios</p>
                                    <p><strong>Ventaja:</strong> Tu dinero está muy seguro</p>
                                    <p><strong>Desventaja:</strong> Puede no ganarle a la inflación</p>
                                </div>
                            </div>

                            <div class="spectrum-item medium-risk">
                                <div class="spectrum-header">
                                    <i class="fas fa-balance-scale"></i>
                                    <h6>Riesgo Moderado - Rendimiento Moderado</h6>
                                </div>
                                <div class="spectrum-content">
                                    <p><strong>Rendimiento esperado:</strong> 5-8% anual</p>
                                    <p><strong>Ejemplos:</strong> Bonos corporativos, fondos mixtos, bienes raíces</p>
                                    <p><strong>Ventaja:</strong> Balance entre seguridad y crecimiento</p>
                                    <p><strong>Desventaja:</strong> Fluctuaciones moderadas en el valor</p>
                                </div>
                            </div>

                            <div class="spectrum-item high-risk">
                                <div class="spectrum-header">
                                    <i class="fas fa-rocket"></i>
                                    <h6>Alto Riesgo - Alto Rendimiento Potencial</h6>
                                </div>
                                <div class="spectrum-content">
                                    <p><strong>Rendimiento esperado:</strong> 8-15% anual (o más)</p>
                                    <p><strong>Ejemplos:</strong> Acciones individuales, fondos de crecimiento, startups</p>
                                    <p><strong>Ventaja:</strong> Potencial de grandes ganancias</p>
                                    <p><strong>Desventaja:</strong> Posibilidad de pérdidas significativas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="risk-tolerance">
                        <h4><i class="fas fa-user-check"></i> Conoce tu tolerancia al riesgo</h4>
                        
                        <p>Tu tolerancia al riesgo es tu capacidad emocional y financiera para aceptar fluctuaciones en el valor de tus inversiones. Depende de varios factores:</p>

                        <div class="tolerance-factors">
                            <div class="factor">
                                <h6><i class="fas fa-calendar-alt"></i> Horizonte de tiempo</h6>
                                <p><strong>Más tiempo = Más tolerancia al riesgo</strong></p>
                                <ul>
                                    <li>Si necesitas el dinero en 1 año: Bajo riesgo</li>
                                    <li>Si no lo necesitas por 10 años: Puedes asumir más riesgo</li>
                                    <li>Para el retiro (30+ años): Alto riesgo puede ser apropiado</li>
                                </ul>
                            </div>

                            <div class="factor">
                                <h6><i class="fas fa-wallet"></i> Situación financiera</h6>
                                <p><strong>Más estabilidad = Más tolerancia al riesgo</strong></p>
                                <ul>
                                    <li>Ingresos estables y fondo de emergencia: Más riesgo OK</li>
                                    <li>Ingresos variables o sin ahorros: Menos riesgo</li>
                                    <li>Cerca del retiro: Generalmente menos riesgo</li>
                                </ul>
                            </div>

                            <div class="factor">
                                <h6><i class="fas fa-brain"></i> Personalidad</h6>
                                <p><strong>Tu temperamento importa</strong></p>
                                <ul>
                                    <li>¿Puedes dormir tranquilo si tus inversiones bajan 20%?</li>
                                    <li>¿Tiendes a tomar decisiones emocionales con el dinero?</li>
                                    <li>¿Prefieres seguridad o crecimiento?</li>
                                </ul>
                            </div>

                            <div class="factor">
                                <h6><i class="fas fa-graduation-cap"></i> Conocimiento</h6>
                                <p><strong>Más educación = Mejor manejo del riesgo</strong></p>
                                <ul>
                                    <li>Entender las inversiones reduce el miedo</li>
                                    <li>Conocer la historia ayuda a mantener perspectiva</li>
                                    <li>Saber diversificar reduce el riesgo real</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="risk-management">
                        <h4><i class="fas fa-shield-alt"></i> Estrategias para manejar el riesgo</h4>
                        
                        <div class="strategy">
                            <h6><i class="fas fa-layer-group"></i> 1. Diversificación</h6>
                            <p>No pongas todos los huevos en la misma canasta. Distribuye tu dinero entre diferentes tipos de inversiones.</p>
                            <div class="example">
                                <strong>Ejemplo:</strong> En lugar de comprar acciones de una sola empresa, compra un fondo que tenga acciones de 100 empresas diferentes.
                            </div>
                        </div>

                        <div class="strategy">
                            <h6><i class="fas fa-clock"></i> 2. Inversión gradual (Dollar Cost Averaging)</h6>
                            <p>En lugar de invertir todo de una vez, invierte cantidades fijas regularmente.</p>
                            <div class="example">
                                <strong>Ejemplo:</strong> En lugar de invertir $60,000 pesos de una vez, invierte $5,000 pesos cada mes durante un año.
                            </div>
                        </div>

                        <div class="strategy">
                            <h6><i class="fas fa-chart-pie"></i> 3. Asignación de activos</h6>
                            <p>Divide tu dinero entre diferentes categorías según tu edad y tolerancia al riesgo.</p>
                            <div class="example">
                                <strong>Regla general:</strong> Tu edad en bonos. Si tienes 30 años, 30% en bonos (bajo riesgo) y 70% en acciones (mayor riesgo).
                            </div>
                        </div>

                        <div class="strategy">
                            <h6><i class="fas fa-book-open"></i> 4. Educación continua</h6>
                            <p>Mientras más entiendas sobre inversiones, mejor podrás manejar el riesgo.</p>
                            <div class="example">
                                <strong>Beneficio:</strong> Entender que las caídas del mercado son normales te ayuda a no vender en pánico.
                            </div>
                        </div>

                        <div class="strategy">
                            <h6><i class="fas fa-calendar-check"></i> 5. Revisión periódica</h6>
                            <p>Revisa y ajusta tus inversiones regularmente, pero no obsesivamente.</p>
                            <div class="example">
                                <strong>Frecuencia recomendada:</strong> Una vez cada 6-12 meses, no todos los días.
                            </div>
                        </div>
                    </div>

                    <div class="historical-perspective">
                        <h4><i class="fas fa-history"></i> Perspectiva histórica: El riesgo en contexto</h4>
                        
                        <p>Para entender mejor el riesgo, veamos qué ha pasado históricamente con diferentes inversiones:</p>

                        <div class="historical-data">
                            <h5>Rendimientos históricos promedio (1926-2020, Estados Unidos):</h5>
                            
                            <div class="historical-item">
                                <div class="asset-name">Acciones (S&P 500)</div>
                                <div class="return-bar" style="width: 80%">
                                    <span>10.5% anual</span>
                                </div>
                                <div class="volatility">Volatilidad: Alta (años con pérdidas: ~25%)</div>
                            </div>

                            <div class="historical-item">
                                <div class="asset-name">Bonos del gobierno</div>
                                <div class="return-bar" style="width: 50%">
                                    <span>5.3% anual</span>
                                </div>
                                <div class="volatility">Volatilidad: Baja (años con pérdidas: ~5%)</div>
                            </div>

                            <div class="historical-item">
                                <div class="asset-name">Efectivo/Depósitos</div>
                                <div class="return-bar" style="width: 30%">
                                    <span>3.3% anual</span>
                                </div>
                                <div class="volatility">Volatilidad: Nula (años con pérdidas: 0%)</div>
                            </div>

                            <div class="historical-item">
                                <div class="asset-name">Inflación</div>
                                <div class="return-bar inflation" style="width: 25%">
                                    <span>2.9% anual</span>
                                </div>
                                <div class="volatility">La línea que debes superar para ganar poder adquisitivo</div>
                            </div>
                        </div>

                        <div class="historical-lessons">
                            <h5>Lecciones importantes:</h5>
                            <ul>
                                <li><strong>Las acciones han dado mejores rendimientos a largo plazo</strong>, pero con más volatilidad</li>
                                <li><strong>Los bonos han sido más estables</strong>, pero con menores rendimientos</li>
                                <li><strong>El efectivo ha preservado capital</strong>, pero apenas ha ganado a la inflación</li>
                                <li><strong>La paciencia ha sido recompensada</strong>: períodos de 20+ años en acciones casi nunca han perdido dinero</li>
                            </ul>
                        </div>
                    </div>

                    <div class="practical-application">
                        <h4><i class="fas fa-tools"></i> Aplicación práctica: Construyendo tu estrategia</h4>
                        
                        <div class="strategy-builder">
                            <h5>Paso a paso para definir tu estrategia de riesgo:</h5>
                            
                            <div class="step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h6>Define tus metas</h6>
                                    <ul>
                                        <li>¿Para qué estás invirtiendo? (retiro, casa, educación)</li>
                                        <li>¿Cuándo necesitarás el dinero?</li>
                                        <li>¿Cuánto necesitas acumular?</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h6>Evalúa tu situación</h6>
                                    <ul>
                                        <li>¿Tienes fondo de emergencia?</li>
                                        <li>¿Tus ingresos son estables?</li>
                                        <li>¿Tienes deudas de alto interés?</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h6>Determina tu tolerancia al riesgo</h6>
                                    <ul>
                                        <li>¿Cómo reaccionarías si tus inversiones bajan 20%?</li>
                                        <li>¿Prefieres dormir tranquilo o maximizar ganancias?</li>
                                        <li>¿Tienes experiencia invirtiendo?</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <h6>Elige tu mezcla de activos</h6>
                                    <ul>
                                        <li>Conservador: 70% bonos, 30% acciones</li>
                                        <li>Moderado: 50% bonos, 50% acciones</li>
                                        <li>Agresivo: 20% bonos, 80% acciones</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="key-takeaways">
                        <h4><i class="fas fa-key"></i> Puntos clave para recordar</h4>
                        <div class="takeaway-grid">
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Riesgo y rendimiento van de la mano: no hay ganancias altas sin riesgo</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>Tu tolerancia al riesgo depende de tu tiempo, situación y personalidad</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>La diversificación es la única "comida gratis" en inversiones</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>El tiempo reduce el riesgo: las inversiones son menos riesgosas a largo plazo</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>El mayor riesgo puede ser no tomar ningún riesgo (inflación)</p>
                            </div>
                            <div class="takeaway">
                                <i class="fas fa-check-circle"></i>
                                <p>La educación y la paciencia son tus mejores herramientas para manejar el riesgo</p>
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
    module.exports = module1Content;
}

