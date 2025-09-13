// Progress tracking system
class ProgressTracker {
    constructor() {
        this.totalModules = 5;
        this.progress = this.loadProgress();
    }

    loadProgress() {
        const saved = localStorage.getItem('courseProgress');
        return saved ? JSON.parse(saved) : {
            completedModules: [],
            moduleScores: {},
            currentModule: null,
            finalExamCompleted: false,
            finalExamScore: null,
            startDate: new Date().toISOString(),
            lastAccessed: new Date().toISOString()
        };
    }

    saveProgress() {
        this.progress.lastAccessed = new Date().toISOString();
        localStorage.setItem('courseProgress', JSON.stringify(this.progress));
    }

    updateModuleProgress(moduleId, score, completed = true) {
        if (completed && !this.progress.completedModules.includes(moduleId)) {
            this.progress.completedModules.push(moduleId);
        }
        
        this.progress.moduleScores[moduleId] = score;
        this.progress.currentModule = moduleId;
        this.saveProgress();
        
        this.updateProgressBar();
        this.updateModuleStatus();
        
        return this.getProgressPercentage();
    }

    getProgressPercentage() {
        return Math.round((this.progress.completedModules.length / this.totalModules) * 100);
    }

    updateProgressBar() {
        const progressPercentage = this.getProgressPercentage();
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
        for (let i = 1; i <= this.totalModules; i++) {
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

        this.updateFinalExamStatus();
    }

    updateFinalExamStatus() {
        const examStatus = document.getElementById('exam-status');
        const examCard = document.getElementById('finalExam');
        
        if (examStatus && examCard) {
            examCard.classList.remove('available', 'completed', 'locked');
            examStatus.classList.remove('available', 'completed', 'locked');

            if (this.progress.finalExamCompleted) {
                examStatus.textContent = 'Completado';
                examStatus.classList.add('completed');
                examCard.classList.add('completed');
            } else if (this.progress.completedModules.length === this.totalModules) {
                examStatus.textContent = 'Disponible';
                examStatus.classList.add('available');
                examCard.classList.add('available');
            } else {
                examStatus.textContent = 'Bloqueado';
                examStatus.classList.add('locked');
                examCard.classList.add('locked');
            }
        }
    }

    isModuleAvailable(moduleId) {
        return moduleId === 1 || this.progress.completedModules.includes(moduleId - 1);
    }

    isModuleCompleted(moduleId) {
        return this.progress.completedModules.includes(moduleId);
    }

    isFinalExamAvailable() {
        return this.progress.completedModules.length === this.totalModules;
    }

    completeFinalExam(score) {
        this.progress.finalExamCompleted = true;
        this.progress.finalExamScore = score;
        this.saveProgress();
        this.updateFinalExamStatus();
    }

    getModuleScore(moduleId) {
        return this.progress.moduleScores[moduleId] || 0;
    }

    getOverallScore() {
        const moduleScores = Object.values(this.progress.moduleScores);
        const finalScore = this.progress.finalExamScore || 0;
        
        if (moduleScores.length === 0) return 0;
        
        const moduleAverage = moduleScores.reduce((sum, score) => sum + score, 0) / moduleScores.length;
        
        if (this.progress.finalExamCompleted) {
            return Math.round((moduleAverage * 0.7) + (finalScore * 0.3));
        }
        
        return Math.round(moduleAverage);
    }

    getTimeSpent() {
        if (!this.progress.startDate) return 0;
        
        const start = new Date(this.progress.startDate);
        const end = new Date(this.progress.lastAccessed);
        
        return Math.round((end - start) / (1000 * 60 * 60)); // Hours
    }

    getProgressStats() {
        return {
            completedModules: this.progress.completedModules.length,
            totalModules: this.totalModules,
            progressPercentage: this.getProgressPercentage(),
            overallScore: this.getOverallScore(),
            timeSpent: this.getTimeSpent(),
            finalExamCompleted: this.progress.finalExamCompleted,
            finalExamScore: this.progress.finalExamScore
        };
    }

    resetProgress() {
        localStorage.removeItem('courseProgress');
        this.progress = this.loadProgress();
        this.updateProgressBar();
        this.updateModuleStatus();
    }

    exportProgress() {
        const stats = this.getProgressStats();
        const exportData = {
            ...this.progress,
            stats,
            exportDate: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `curso-inversiones-progreso-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProgressTracker;
}

