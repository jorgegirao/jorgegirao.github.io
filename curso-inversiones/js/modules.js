// Module management system
class ModuleManager {
    constructor() {
        this.modules = this.initializeModules();
        this.currentModule = null;
        this.currentSection = 0;
    }

    initializeModules() {
        return {
            1: {
                id: 1,
                title: 'Introducción al Mundo de las Inversiones',
                description: 'Conceptos básicos, ahorro vs inversión, riesgo y recompensa',
                icon: 'fas fa-seedling',
                sections: [
                    {
                        id: 1,
                        title: '¿Qué es el dinero y cómo funciona?',
                        content: 'module1_section1',
                        type: 'content'
                    },
                    {
                        id: 2,
                        title: 'Ahorro vs. Inversión: Diferencias clave',
                        content: 'module1_section2',
                        type: 'content'
                    },
                    {
                        id: 3,
                        title: 'Ejercicio: Conceptos Básicos',
                        content: 'module1_exercise1',
                        type: 'exercise'
                    },
                    {
                        id: 4,
                        title: 'Riesgo y Recompensa',
                        content: 'module1_section3',
                        type: 'content'
                    },
                    {
                        id: 5,
                        title: 'Evaluación del Módulo 1',
                        content: 'module1_evaluation',
                        type: 'evaluation'
                    }
                ]
            },
            2: {
                id: 2,
                title: 'Actores y Roles en los Mercados Financieros',
                description: 'Bancos centrales, brokers, reguladores, hedge funds',
                icon: 'fas fa-users',
                sections: [
                    {
                        id: 1,
                        title: 'Bancos Centrales y su Rol',
                        content: 'module2_section1',
                        type: 'content'
                    },
                    {
                        id: 2,
                        title: 'Brokers y Plataformas de Inversión',
                        content: 'module2_section2',
                        type: 'content'
                    },
                    {
                        id: 3,
                        title: 'Ejercicio: Identificar Actores',
                        content: 'module2_exercise1',
                        type: 'exercise'
                    },
                    {
                        id: 4,
                        title: 'Hedge Funds: ¿Qué son?',
                        content: 'module2_section3',
                        type: 'content'
                    },
                    {
                        id: 5,
                        title: 'Evaluación del Módulo 2',
                        content: 'module2_evaluation',
                        type: 'evaluation'
                    }
                ]
            },
            3: {
                id: 3,
                title: 'Instrumentos Financieros Básicos',
                description: 'Acciones, bonos, fondos mutuos, ETFs, commodities',
                icon: 'fas fa-chart-bar',
                sections: [
                    {
                        id: 1,
                        title: 'Acciones (Equity): Fundamentos',
                        content: 'module3_section1',
                        type: 'content'
                    },
                    {
                        id: 2,
                        title: 'Bonos (Fixed Income)',
                        content: 'module3_section2',
                        type: 'content'
                    },
                    {
                        id: 3,
                        title: 'Ejercicio: Tipos de Instrumentos',
                        content: 'module3_exercise1',
                        type: 'exercise'
                    },
                    {
                        id: 4,
                        title: 'ETFs y Fondos Mutuos',
                        content: 'module3_section3',
                        type: 'content'
                    },
                    {
                        id: 5,
                        title: 'Evaluación del Módulo 3',
                        content: 'module3_evaluation',
                        type: 'evaluation'
                    }
                ]
            },
            4: {
                id: 4,
                title: 'Estrategias Avanzadas y Análisis de Mercado',
                description: 'Análisis fundamental, diversificación, derivados, alternatives',
                icon: 'fas fa-brain',
                sections: [
                    {
                        id: 1,
                        title: 'Análisis Fundamental vs. Técnico',
                        content: 'module4_section1',
                        type: 'content'
                    },
                    {
                        id: 2,
                        title: 'Diversificación de Cartera',
                        content: 'module4_section2',
                        type: 'content'
                    },
                    {
                        id: 3,
                        title: 'Simulación: Arma tu Portfolio',
                        content: 'module4_simulation',
                        type: 'simulation'
                    },
                    {
                        id: 4,
                        title: 'Derivados e Inversiones Alternativas',
                        content: 'module4_section3',
                        type: 'content'
                    },
                    {
                        id: 5,
                        title: 'Evaluación del Módulo 4',
                        content: 'module4_evaluation',
                        type: 'evaluation'
                    }
                ]
            },
            5: {
                id: 5,
                title: 'Historia de los Mercados y Casos Reales',
                description: 'Historia de los mercados, crisis financieras, casos de estudio',
                icon: 'fas fa-history',
                sections: [
                    {
                        id: 1,
                        title: 'Historia de los Mercados Financieros',
                        content: 'module5_section1',
                        type: 'content'
                    },
                    {
                        id: 2,
                        title: 'Grandes Crisis Financieras',
                        content: 'module5_section2',
                        type: 'content'
                    },
                    {
                        id: 3,
                        title: 'Análisis: Casos de Estudio',
                        content: 'module5_case_study',
                        type: 'case_study'
                    },
                    {
                        id: 4,
                        title: 'Inversión ESG y Sostenible',
                        content: 'module5_section3',
                        type: 'content'
                    },
                    {
                        id: 5,
                        title: 'Evaluación del Módulo 5',
                        content: 'module5_evaluation',
                        type: 'evaluation'
                    }
                ]
            }
        };
    }

    loadModule(moduleId) {
        if (!this.modules[moduleId]) {
            console.error(`Module ${moduleId} not found`);
            return false;
        }

        this.currentModule = moduleId;
        this.currentSection = 0;
        
        const moduleContent = document.getElementById('moduleContent');
        if (!moduleContent) return false;

        const module = this.modules[moduleId];
        
        moduleContent.innerHTML = `
            <div class="module-container">
                <div class="module-header">
                    <button class="btn-secondary" onclick="course.showCourseNav()">
                        <i class="fas fa-arrow-left"></i>
                        Volver a Módulos
                    </button>
                    <div class="module-info">
                        <h2><i class="${module.icon}"></i> ${module.title}</h2>
                        <p>${module.description}</p>
                    </div>
                </div>
                
                <div class="module-progress">
                    <div class="progress-info">
                        <span>Sección <span id="currentSectionNum">1</span> de ${module.sections.length}</span>
                    </div>
                    <div class="section-progress-bar">
                        <div class="section-progress-fill" id="sectionProgressFill"></div>
                    </div>
                </div>

                <div class="module-navigation">
                    <div class="section-list">
                        ${module.sections.map((section, index) => `
                            <div class="section-item ${index === 0 ? 'active' : ''}" data-section="${index}">
                                <div class="section-icon">
                                    <i class="${this.getSectionIcon(section.type)}"></i>
                                </div>
                                <div class="section-info">
                                    <h4>${section.title}</h4>
                                    <span class="section-type">${this.getSectionTypeLabel(section.type)}</span>
                                </div>
                                <div class="section-status">
                                    <i class="fas fa-lock" id="section-status-${index}"></i>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="module-content-area">
                    <div id="sectionContent" class="section-content">
                        <!-- Section content will be loaded here -->
                    </div>
                    
                    <div class="section-controls">
                        <button id="prevSectionBtn" class="btn-secondary" disabled>
                            <i class="fas fa-chevron-left"></i>
                            Anterior
                        </button>
                        <button id="nextSectionBtn" class="btn-primary">
                            Siguiente
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.setupModuleEventListeners();
        this.loadSection(0);
        this.updateSectionProgress();
        
        return true;
    }

    setupModuleEventListeners() {
        // Section navigation
        const sectionItems = document.querySelectorAll('.section-item');
        sectionItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                if (index <= this.currentSection || this.isSectionUnlocked(index)) {
                    this.loadSection(index);
                }
            });
        });

        // Previous/Next buttons
        const prevBtn = document.getElementById('prevSectionBtn');
        const nextBtn = document.getElementById('nextSectionBtn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousSection());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSection());
        }
    }

    loadSection(sectionIndex) {
        const module = this.modules[this.currentModule];
        if (!module || !module.sections[sectionIndex]) return;

        this.currentSection = sectionIndex;
        const section = module.sections[sectionIndex];
        
        // Update active section in navigation
        document.querySelectorAll('.section-item').forEach((item, index) => {
            item.classList.toggle('active', index === sectionIndex);
        });

        // Update section progress
        this.updateSectionProgress();
        
        // Load section content
        const sectionContent = document.getElementById('sectionContent');
        if (sectionContent) {
            sectionContent.innerHTML = this.generateSectionContent(section);
        }

        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Mark section as unlocked
        this.unlockSection(sectionIndex);
    }

    generateSectionContent(section) {
        // Check if we have actual content for this section
        if (window.moduleContent && window.moduleContent[section.content]) {
            return window.moduleContent[section.content];
        }
        
        // Fallback to placeholder content
        const contentTemplates = {
            content: `
                <div class="content-section">
                    <h3>${section.title}</h3>
                    <div class="content-placeholder">
                        <p>El contenido educativo para "${section.title}" se desarrollará en la siguiente fase.</p>
                        <p>Esta sección incluirá:</p>
                        <ul>
                            <li>Explicaciones teóricas detalladas</li>
                            <li>Ejemplos prácticos</li>
                            <li>Gráficos e imágenes ilustrativas</li>
                            <li>Videos de YouTube relacionados</li>
                        </ul>
                    </div>
                </div>
            `,
            exercise: `
                <div class="exercise-section">
                    <h3>${section.title}</h3>
                    <div class="exercise-placeholder">
                        <p>Ejercicio interactivo: "${section.title}"</p>
                        <p>Este ejercicio incluirá:</p>
                        <ul>
                            <li>Preguntas de opción múltiple</li>
                            <li>Actividades de arrastrar y soltar</li>
                            <li>Completar frases</li>
                            <li>Feedback inmediato</li>
                        </ul>
                        <button class="btn-primary" onclick="moduleManager.completeSection()">
                            Completar Ejercicio
                        </button>
                    </div>
                </div>
            `,
            evaluation: `
                <div class="evaluation-section">
                    <h3>${section.title}</h3>
                    <div class="evaluation-placeholder">
                        <p>Evaluación del módulo con preguntas sobre todos los temas cubiertos.</p>
                        <p>La evaluación incluirá:</p>
                        <ul>
                            <li>10-15 preguntas de opción múltiple</li>
                            <li>Casos prácticos</li>
                            <li>Puntuación mínima del 70% para aprobar</li>
                            <li>Feedback detallado</li>
                        </ul>
                        <button class="btn-primary" onclick="moduleManager.startEvaluation()">
                            Iniciar Evaluación
                        </button>
                    </div>
                </div>
            `,
            simulation: `
                <div class="simulation-section">
                    <h3>${section.title}</h3>
                    <div class="simulation-placeholder">
                        <p>Simulación interactiva: "${section.title}"</p>
                        <p>Esta simulación permitirá:</p>
                        <ul>
                            <li>Crear un portfolio virtual</li>
                            <li>Seleccionar diferentes activos</li>
                            <li>Ver resultados en tiempo real</li>
                            <li>Analizar riesgo y rendimiento</li>
                        </ul>
                        <button class="btn-primary" onclick="moduleManager.startSimulation()">
                            Iniciar Simulación
                        </button>
                    </div>
                </div>
            `,
            case_study: `
                <div class="case-study-section">
                    <h3>${section.title}</h3>
                    <div class="case-study-placeholder">
                        <p>Análisis de caso: "${section.title}"</p>
                        <p>Este caso de estudio incluirá:</p>
                        <ul>
                            <li>Contexto histórico detallado</li>
                            <li>Análisis de decisiones tomadas</li>
                            <li>Lecciones aprendidas</li>
                            <li>Preguntas de reflexión</li>
                        </ul>
                        <button class="btn-primary" onclick="moduleManager.completeCaseStudy()">
                            Completar Análisis
                        </button>
                    </div>
                </div>
            `
        };

        return contentTemplates[section.type] || contentTemplates.content;
    }

    getSectionIcon(type) {
        const icons = {
            content: 'fas fa-book-open',
            exercise: 'fas fa-gamepad',
            evaluation: 'fas fa-clipboard-check',
            simulation: 'fas fa-chart-line',
            case_study: 'fas fa-search'
        };
        return icons[type] || 'fas fa-file-alt';
    }

    getSectionTypeLabel(type) {
        const labels = {
            content: 'Contenido',
            exercise: 'Ejercicio',
            evaluation: 'Evaluación',
            simulation: 'Simulación',
            case_study: 'Caso de Estudio'
        };
        return labels[type] || 'Contenido';
    }

    updateSectionProgress() {
        const module = this.modules[this.currentModule];
        const progressPercentage = ((this.currentSection + 1) / module.sections.length) * 100;
        
        const progressFill = document.getElementById('sectionProgressFill');
        const sectionNum = document.getElementById('currentSectionNum');
        
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }
        
        if (sectionNum) {
            sectionNum.textContent = this.currentSection + 1;
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevSectionBtn');
        const nextBtn = document.getElementById('nextSectionBtn');
        const module = this.modules[this.currentModule];
        
        if (prevBtn) {
            prevBtn.disabled = this.currentSection === 0;
        }
        
        if (nextBtn) {
            const isLastSection = this.currentSection === module.sections.length - 1;
            nextBtn.textContent = isLastSection ? 'Completar Módulo' : 'Siguiente';
            nextBtn.innerHTML = isLastSection ? 
                'Completar Módulo <i class="fas fa-check"></i>' : 
                'Siguiente <i class="fas fa-chevron-right"></i>';
        }
    }

    previousSection() {
        if (this.currentSection > 0) {
            this.loadSection(this.currentSection - 1);
        }
    }

    nextSection() {
        const module = this.modules[this.currentModule];
        
        if (this.currentSection < module.sections.length - 1) {
            this.loadSection(this.currentSection + 1);
        } else {
            // Complete module
            this.completeModule();
        }
    }

    completeSection() {
        // Mark current section as completed
        const statusIcon = document.getElementById(`section-status-${this.currentSection}`);
        if (statusIcon) {
            statusIcon.className = 'fas fa-check';
            statusIcon.style.color = '#10b981';
        }
        
        // Auto-advance to next section
        setTimeout(() => {
            this.nextSection();
        }, 1000);
    }

    completeModule() {
        if (window.course) {
            window.course.completeModule(this.currentModule, 85); // Default score
        }
        
        // Show completion message
        if (window.course) {
            window.course.showNotification(
                `¡Felicitaciones! Has completado el Módulo ${this.currentModule}`, 
                'success'
            );
        }
        
        // Return to course navigation after delay
        setTimeout(() => {
            if (window.course) {
                window.course.showCourseNav();
            }
        }, 2000);
    }

    startEvaluation() {
        // Placeholder for evaluation system
        window.course?.showNotification('La evaluación se implementará en la siguiente fase', 'info');
        this.completeSection();
    }

    startSimulation() {
        // Placeholder for simulation system
        window.course?.showNotification('La simulación se implementará en la siguiente fase', 'info');
        this.completeSection();
    }

    completeCaseStudy() {
        // Placeholder for case study completion
        window.course?.showNotification('Caso de estudio completado', 'success');
        this.completeSection();
    }

    isSectionUnlocked(sectionIndex) {
        // For now, unlock sections sequentially
        return sectionIndex <= this.currentSection;
    }

    unlockSection(sectionIndex) {
        const statusIcon = document.getElementById(`section-status-${sectionIndex}`);
        if (statusIcon && sectionIndex <= this.currentSection) {
            statusIcon.className = 'fas fa-unlock';
            statusIcon.style.color = '#3b82f6';
        }
    }
}

// Add module-specific styles
const moduleStyles = `
.module-container {
    max-width: 1000px;
    margin: 0 auto;
}

.module-header {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid var(--border-light);
}

.module-info h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.module-info p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin: 0;
}

.module-progress {
    margin-bottom: 2rem;
}

.progress-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.progress-info span {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary);
}

.section-progress-bar {
    width: 100%;
    height: 6px;
    background: var(--border-light);
    border-radius: 3px;
    overflow: hidden;
}

.section-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    border-radius: 3px;
    transition: width 0.3s ease-in-out;
    width: 0%;
}

.module-navigation {
    margin-bottom: 2rem;
}

.section-list {
    display: grid;
    gap: 0.75rem;
}

.section-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--bg-secondary);
    border: 2px solid var(--border-light);
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.section-item:hover {
    border-color: var(--primary-light);
    transform: translateX(4px);
}

.section-item.active {
    border-color: var(--primary-color);
    background: linear-gradient(135deg, var(--bg-primary), var(--bg-secondary));
    box-shadow: var(--shadow-md);
}

.section-icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    background: var(--primary-light);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
}

.section-info {
    flex: 1;
}

.section-info h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
}

.section-type {
    font-size: 0.75rem;
    color: var(--text-muted);
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.025em;
}

.section-status {
    flex-shrink: 0;
    color: var(--text-muted);
}

.module-content-area {
    background: var(--bg-primary);
    border: 1px solid var(--border-light);
    border-radius: 1rem;
    overflow: hidden;
}

.section-content {
    padding: 2rem;
    min-height: 400px;
}

.section-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-light);
}

.content-placeholder,
.exercise-placeholder,
.evaluation-placeholder,
.simulation-placeholder,
.case-study-placeholder {
    background: var(--bg-secondary);
    padding: 2rem;
    border-radius: 0.75rem;
    border-left: 4px solid var(--primary-color);
}

.content-placeholder ul,
.exercise-placeholder ul,
.evaluation-placeholder ul,
.simulation-placeholder ul,
.case-study-placeholder ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
}

.content-placeholder li,
.exercise-placeholder li,
.evaluation-placeholder li,
.simulation-placeholder li,
.case-study-placeholder li {
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
}

@media (max-width: 768px) {
    .module-header {
        flex-direction: column;
        gap: 1rem;
    }
    
    .section-item {
        flex-direction: column;
        text-align: center;
        gap: 0.75rem;
    }
    
    .section-controls {
        flex-direction: column;
        gap: 1rem;
    }
    
    .section-content {
        padding: 1.5rem;
    }
}
`;

// Add styles to head
const moduleStyleSheet = document.createElement('style');
moduleStyleSheet.textContent = moduleStyles;
document.head.appendChild(moduleStyleSheet);

// Initialize module manager
let moduleManager;
document.addEventListener('DOMContentLoaded', () => {
    moduleManager = new ModuleManager();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModuleManager;
}

