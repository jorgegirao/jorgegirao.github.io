// Main JavaScript file for the Investment Course
class InvestmentCourse {
    constructor() {
        this.currentModule = null;
        this.progress = this.loadProgress();
        this.textSize = localStorage.getItem('textSize') || 'medium';
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.applyTextSize();
        this.updateProgress();
        this.updateModuleStatus();
    }

    setupEventListeners() {
        // Start course button
        const startBtn = document.getElementById('startCourseBtn');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.showCourseNav());
        }

        // Back to welcome button
        const backBtn = document.getElementById('backToWelcome');
        if (backBtn) {
            backBtn.addEventListener('click', () => this.showWelcome());
        }

        // Text size selector
        const textSizeSelect = document.getElementById('textSize');
        if (textSizeSelect) {
            textSizeSelect.value = this.textSize;
            textSizeSelect.addEventListener('change', (e) => {
                this.changeTextSize(e.target.value);
            });
        }

        // Glossary button
        const glossaryBtn = document.getElementById('glossaryBtn');
        if (glossaryBtn) {
            glossaryBtn.addEventListener('click', () => this.showGlossary());
        }

        // Module cards
        const moduleCards = document.querySelectorAll('.module-card');
        moduleCards.forEach(card => {
            card.addEventListener('click', () => {
                const moduleId = parseInt(card.dataset.module);
                this.openModule(moduleId);
            });
        });

        // Final exam
        const finalExam = document.getElementById('finalExam');
        if (finalExam) {
            finalExam.addEventListener('click', () => this.openFinalExam());
        }

        // Modal close events
        this.setupModalEvents();
    }

    setupModalEvents() {
        // Close glossary modal
        const closeGlossary = document.getElementById('closeGlossary');
        if (closeGlossary) {
            closeGlossary.addEventListener('click', () => this.hideGlossary());
        }

        // Close modal when clicking outside
        const glossaryModal = document.getElementById('glossaryModal');
        if (glossaryModal) {
            glossaryModal.addEventListener('click', (e) => {
                if (e.target === glossaryModal) {
                    this.hideGlossary();
                }
            });
        }

        // Escape key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideGlossary();
            }
        });
    }

    showWelcome() {
        document.getElementById('welcome').classList.add('active');
        document.getElementById('courseNav').classList.add('hidden');
        document.getElementById('moduleContent').classList.add('hidden');
        document.getElementById('exerciseContent').classList.add('hidden');
        
        this.currentModule = null;
        this.updateProgress();
    }

    showCourseNav() {
        document.getElementById('welcome').classList.remove('active');
        document.getElementById('courseNav').classList.remove('hidden');
        document.getElementById('moduleContent').classList.add('hidden');
        document.getElementById('exerciseContent').classList.add('hidden');
        
        this.updateModuleStatus();
    }

    changeTextSize(size) {
        this.textSize = size;
        localStorage.setItem('textSize', size);
        this.applyTextSize();
    }

    applyTextSize() {
        document.body.classList.remove('text-small', 'text-large');
        if (this.textSize === 'small') {
            document.body.classList.add('text-small');
        } else if (this.textSize === 'large') {
            document.body.classList.add('text-large');
        }
    }

    loadProgress() {
        const saved = localStorage.getItem('courseProgress');
        return saved ? JSON.parse(saved) : {
            completedModules: [],
            moduleScores: {},
            currentModule: null,
            finalExamCompleted: false,
            finalExamScore: null
        };
    }

    saveProgress() {
        localStorage.setItem('courseProgress', JSON.stringify(this.progress));
    }

    updateProgress() {
        const totalModules = 5;
        const completedCount = this.progress.completedModules.length;
        const progressPercentage = Math.round((completedCount / totalModules) * 100);
        
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }
        
        if (progressText) {
            progressText.textContent = `Progreso: ${progressPercentage}%`;
        }
    }

    updateModuleStatus() {
        for (let i = 1; i <= 5; i++) {
            const statusElement = document.getElementById(`status-${i}`);
            const moduleCard = document.querySelector(`[data-module="${i}"]`);
            
            if (!statusElement || !moduleCard) continue;

            // Remove all status classes
            moduleCard.classList.remove('available', 'completed', 'locked');
            statusElement.classList.remove('not-started', 'available', 'completed', 'locked');

            if (this.progress.completedModules.includes(i)) {
                // Module completed
                statusElement.textContent = 'Completado';
                statusElement.classList.add('completed');
                moduleCard.classList.add('completed');
            } else if (i === 1 || this.progress.completedModules.includes(i - 1)) {
                // Module available
                statusElement.textContent = 'Disponible';
                statusElement.classList.add('available');
                moduleCard.classList.add('available');
            } else {
                // Module locked
                statusElement.textContent = 'Bloqueado';
                statusElement.classList.add('locked');
                moduleCard.classList.add('locked');
            }
        }

        // Update final exam status
        const examStatus = document.getElementById('exam-status');
        const examCard = document.getElementById('finalExam');
        
        if (examStatus && examCard) {
            if (this.progress.finalExamCompleted) {
                examStatus.textContent = 'Completado';
                examStatus.classList.add('completed');
                examCard.classList.remove('locked');
            } else if (this.progress.completedModules.length === 5) {
                examStatus.textContent = 'Disponible';
                examStatus.classList.add('available');
                examCard.classList.remove('locked');
            } else {
                examStatus.textContent = 'Bloqueado';
                examStatus.classList.add('locked');
                examCard.classList.add('locked');
            }
        }
    }

    openModule(moduleId) {
        // Check if module is available
        if (moduleId > 1 && !this.progress.completedModules.includes(moduleId - 1)) {
            this.showNotification('Este módulo aún no está disponible. Completa el módulo anterior primero.', 'warning');
            return;
        }

        this.currentModule = moduleId;
        this.progress.currentModule = moduleId;
        this.saveProgress();

        // Hide other sections
        document.getElementById('courseNav').classList.add('hidden');
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('exerciseContent').classList.add('hidden');
        
        // Show module content
        const moduleContent = document.getElementById('moduleContent');
        moduleContent.classList.remove('hidden');
        
        // Load module content
        this.loadModuleContent(moduleId);
    }

    loadModuleContent(moduleId) {
        const moduleContent = document.getElementById('moduleContent');
        
        // This will be populated with actual module content in the next phase
        moduleContent.innerHTML = `
            <div class="module-header">
                <button class="btn-secondary" onclick="course.showCourseNav()">
                    <i class="fas fa-arrow-left"></i>
                    Volver a Módulos
                </button>
                <h2>Módulo ${moduleId}: Cargando contenido...</h2>
            </div>
            <div class="module-body">
                <p>El contenido del módulo se cargará en la siguiente fase del desarrollo.</p>
            </div>
        `;
    }

    openFinalExam() {
        if (this.progress.completedModules.length < 5) {
            this.showNotification('Debes completar todos los módulos antes de acceder al examen final.', 'warning');
            return;
        }

        // Hide other sections
        document.getElementById('courseNav').classList.add('hidden');
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('moduleContent').classList.add('hidden');
        
        // Show exercise content for final exam
        const exerciseContent = document.getElementById('exerciseContent');
        exerciseContent.classList.remove('hidden');
        
        // Load final exam
        this.loadFinalExam();
    }

    loadFinalExam() {
        const exerciseContent = document.getElementById('exerciseContent');
        
        exerciseContent.innerHTML = `
            <div class="exam-header">
                <button class="btn-secondary" onclick="course.showCourseNav()">
                    <i class="fas fa-arrow-left"></i>
                    Volver a Módulos
                </button>
                <h2>Examen Final</h2>
            </div>
            <div class="exam-body">
                <p>El examen final se implementará en la siguiente fase del desarrollo.</p>
            </div>
        `;
    }

    completeModule(moduleId, score = 100) {
        if (!this.progress.completedModules.includes(moduleId)) {
            this.progress.completedModules.push(moduleId);
        }
        this.progress.moduleScores[moduleId] = score;
        this.saveProgress();
        this.updateProgress();
        this.updateModuleStatus();
        
        this.showNotification(`¡Felicitaciones! Has completado el Módulo ${moduleId}`, 'success');
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);

        // Auto hide after 5 seconds
        setTimeout(() => this.hideNotification(notification), 5000);

        // Close button event
        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.hideNotification(notification);
        });
    }

    hideNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            warning: 'exclamation-triangle',
            error: 'times-circle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    showGlossary() {
        const modal = document.getElementById('glossaryModal');
        if (modal) {
            modal.classList.add('active');
            this.loadGlossaryContent();
        }
    }

    hideGlossary() {
        const modal = document.getElementById('glossaryModal');
        if (modal) {
            modal.classList.remove('active');
        }
    }

    loadGlossaryContent() {
        const glossaryContent = document.getElementById('glossaryContent');
        if (!glossaryContent) return;

        // Sample glossary terms - will be expanded in content phase
        const terms = [
            {
                term: 'Inversión',
                english: 'Investment',
                definition: 'Acción de destinar recursos económicos a la compra de activos con el objetivo de obtener beneficios futuros.'
            },
            {
                term: 'Diversificación',
                english: 'Diversification',
                definition: 'Estrategia que consiste en distribuir las inversiones entre diferentes activos para reducir el riesgo.'
            },
            {
                term: 'Hedge Fund',
                english: 'Hedge Fund',
                definition: 'Fondo de inversión que utiliza estrategias sofisticadas y apalancamiento para generar altos rendimientos.'
            },
            {
                term: 'Acciones',
                english: 'Stocks/Equity',
                definition: 'Títulos que representan una participación en la propiedad de una empresa.'
            },
            {
                term: 'Bonos',
                english: 'Bonds',
                definition: 'Instrumentos de deuda emitidos por gobiernos o empresas que pagan intereses periódicos.'
            }
        ];

        glossaryContent.innerHTML = terms.map(term => `
            <div class="glossary-term">
                <h4>${term.term}</h4>
                <div class="term-english">${term.english}</div>
                <p>${term.definition}</p>
            </div>
        `).join('');

        // Setup search functionality
        this.setupGlossarySearch(terms);
    }

    setupGlossarySearch(terms) {
        const searchInput = document.getElementById('glossarySearch');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filteredTerms = terms.filter(term => 
                term.term.toLowerCase().includes(query) ||
                term.english.toLowerCase().includes(query) ||
                term.definition.toLowerCase().includes(query)
            );

            const glossaryContent = document.getElementById('glossaryContent');
            glossaryContent.innerHTML = filteredTerms.map(term => `
                <div class="glossary-term">
                    <h4>${term.term}</h4>
                    <div class="term-english">${term.english}</div>
                    <p>${term.definition}</p>
                </div>
            `).join('');

            if (filteredTerms.length === 0) {
                glossaryContent.innerHTML = '<p class="no-results">No se encontraron términos que coincidan con tu búsqueda.</p>';
            }
        });
    }
}

// Initialize the course when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.course = new InvestmentCourse();
});

// Add notification styles to CSS
const notificationStyles = `
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 300px;
    max-width: 500px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1001;
    border-left: 4px solid #3b82f6;
}

.notification.show {
    transform: translateX(0);
}

.notification-success {
    border-left-color: #10b981;
}

.notification-warning {
    border-left-color: #f59e0b;
}

.notification-error {
    border-left-color: #ef4444;
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
}

.notification-content i {
    font-size: 18px;
}

.notification-success .notification-content i {
    color: #10b981;
}

.notification-warning .notification-content i {
    color: #f59e0b;
}

.notification-error .notification-content i {
    color: #ef4444;
}

.notification-info .notification-content i {
    color: #3b82f6;
}

.notification-close {
    background: none;
    border: none;
    color: #64748b;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.notification-close:hover {
    background-color: #f1f5f9;
}

.no-results {
    text-align: center;
    color: #64748b;
    font-style: italic;
    padding: 20px;
}
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

