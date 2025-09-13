// Glossary system with search functionality
class GlossaryManager {
    constructor() {
        this.terms = this.initializeTerms();
        this.filteredTerms = [...this.terms];
    }

    initializeTerms() {
        return [
            {
                id: 1,
                term: 'Inversión',
                english: 'Investment',
                definition: 'Acción de destinar recursos económicos a la compra de activos con el objetivo de obtener beneficios futuros.',
                category: 'básico'
            },
            {
                id: 2,
                term: 'Diversificación',
                english: 'Diversification',
                definition: 'Estrategia que consiste en distribuir las inversiones entre diferentes activos para reducir el riesgo.',
                category: 'estrategia'
            },
            {
                id: 3,
                term: 'Hedge Fund',
                english: 'Hedge Fund',
                definition: 'Fondo de inversión que utiliza estrategias sofisticadas y apalancamiento para generar altos rendimientos.',
                category: 'avanzado'
            },
            {
                id: 4,
                term: 'Acciones',
                english: 'Stocks/Equity',
                definition: 'Títulos que representan una participación en la propiedad de una empresa.',
                category: 'instrumentos'
            },
            {
                id: 5,
                term: 'Bonos',
                english: 'Bonds',
                definition: 'Instrumentos de deuda emitidos por gobiernos o empresas que pagan intereses periódicos.',
                category: 'instrumentos'
            },
            {
                id: 6,
                term: 'Riesgo',
                english: 'Risk',
                definition: 'Probabilidad de que una inversión no genere los rendimientos esperados o incluso genere pérdidas.',
                category: 'básico'
            },
            {
                id: 7,
                term: 'Rendimiento',
                english: 'Return',
                definition: 'Ganancia o pérdida obtenida de una inversión, generalmente expresada como porcentaje.',
                category: 'básico'
            },
            {
                id: 8,
                term: 'Liquidez',
                english: 'Liquidity',
                definition: 'Facilidad con la que un activo puede convertirse en efectivo sin afectar significativamente su precio.',
                category: 'básico'
            },
            {
                id: 9,
                term: 'Volatilidad',
                english: 'Volatility',
                definition: 'Medida de la variabilidad de los precios de un activo en un período determinado.',
                category: 'análisis'
            },
            {
                id: 10,
                term: 'ETF',
                english: 'Exchange-Traded Fund',
                definition: 'Fondo cotizado en bolsa que replica el comportamiento de un índice, sector o activo específico.',
                category: 'instrumentos'
            },
            {
                id: 11,
                term: 'Broker',
                english: 'Broker',
                definition: 'Intermediario financiero que ejecuta órdenes de compra y venta de valores por cuenta de sus clientes.',
                category: 'actores'
            },
            {
                id: 12,
                term: 'Análisis Fundamental',
                english: 'Fundamental Analysis',
                definition: 'Método de evaluación de valores que examina factores económicos, financieros y otros factores cualitativos.',
                category: 'análisis'
            },
            {
                id: 13,
                term: 'Análisis Técnico',
                english: 'Technical Analysis',
                definition: 'Método de evaluación de valores basado en el estudio de gráficos de precios y volúmenes históricos.',
                category: 'análisis'
            },
            {
                id: 14,
                term: 'Portfolio',
                english: 'Portfolio',
                definition: 'Conjunto de inversiones mantenidas por un individuo o institución.',
                category: 'estrategia'
            },
            {
                id: 15,
                term: 'Derivados',
                english: 'Derivatives',
                definition: 'Instrumentos financieros cuyo valor deriva del precio de otro activo subyacente.',
                category: 'avanzado'
            },
            {
                id: 16,
                term: 'Opciones',
                english: 'Options',
                definition: 'Contratos que otorgan el derecho, pero no la obligación, de comprar o vender un activo a un precio específico.',
                category: 'avanzado'
            },
            {
                id: 17,
                term: 'Futuros',
                english: 'Futures',
                definition: 'Contratos estandarizados para comprar o vender un activo en una fecha futura a un precio predeterminado.',
                category: 'avanzado'
            },
            {
                id: 18,
                term: 'Commodities',
                english: 'Commodities',
                definition: 'Materias primas o productos básicos que se comercializan en mercados especializados.',
                category: 'instrumentos'
            },
            {
                id: 19,
                term: 'Forex',
                english: 'Foreign Exchange',
                definition: 'Mercado de divisas donde se intercambian monedas de diferentes países.',
                category: 'mercados'
            },
            {
                id: 20,
                term: 'Inflación',
                english: 'Inflation',
                definition: 'Aumento generalizado y sostenido de los precios de bienes y servicios en una economía.',
                category: 'económico'
            },
            {
                id: 21,
                term: 'Interés Compuesto',
                english: 'Compound Interest',
                definition: 'Interés calculado sobre el capital inicial más los intereses acumulados de períodos anteriores.',
                category: 'básico'
            },
            {
                id: 22,
                term: 'Banco Central',
                english: 'Central Bank',
                definition: 'Institución responsable de la política monetaria y la regulación del sistema financiero de un país.',
                category: 'actores'
            },
            {
                id: 23,
                term: 'SEC',
                english: 'Securities and Exchange Commission',
                definition: 'Agencia federal de Estados Unidos responsable de hacer cumplir las leyes de valores federales.',
                category: 'reguladores'
            },
            {
                id: 24,
                term: 'CNV',
                english: 'Comisión Nacional de Valores',
                definition: 'Organismo regulador del mercado de capitales en Argentina.',
                category: 'reguladores'
            },
            {
                id: 25,
                term: 'Private Equity',
                english: 'Private Equity',
                definition: 'Inversión en empresas privadas o compra de empresas públicas para convertirlas en privadas.',
                category: 'avanzado'
            },
            {
                id: 26,
                term: 'Venture Capital',
                english: 'Venture Capital',
                definition: 'Capital de riesgo invertido en empresas emergentes con alto potencial de crecimiento.',
                category: 'avanzado'
            },
            {
                id: 27,
                term: 'Yield Curve',
                english: 'Yield Curve',
                definition: 'Gráfico que muestra la relación entre las tasas de interés y los plazos de vencimiento de los bonos.',
                category: 'análisis'
            },
            {
                id: 28,
                term: 'Stress Test',
                english: 'Stress Test',
                definition: 'Análisis que evalúa cómo se comportaría una cartera bajo condiciones económicas adversas.',
                category: 'análisis'
            },
            {
                id: 29,
                term: 'ESG',
                english: 'Environmental, Social, and Governance',
                definition: 'Criterios de inversión que consideran factores ambientales, sociales y de gobernanza.',
                category: 'estrategia'
            },
            {
                id: 30,
                term: 'Bull Market',
                english: 'Bull Market',
                definition: 'Período prolongado de aumento de precios en el mercado de valores.',
                category: 'mercados'
            },
            {
                id: 31,
                term: 'Bear Market',
                english: 'Bear Market',
                definition: 'Período prolongado de caída de precios en el mercado de valores.',
                category: 'mercados'
            }
        ];
    }

    searchTerms(query) {
        if (!query.trim()) {
            this.filteredTerms = [...this.terms];
            return this.filteredTerms;
        }

        const searchQuery = query.toLowerCase().trim();
        this.filteredTerms = this.terms.filter(term => 
            term.term.toLowerCase().includes(searchQuery) ||
            term.english.toLowerCase().includes(searchQuery) ||
            term.definition.toLowerCase().includes(searchQuery) ||
            term.category.toLowerCase().includes(searchQuery)
        );

        return this.filteredTerms;
    }

    getTermsByCategory(category) {
        return this.terms.filter(term => term.category === category);
    }

    getAllCategories() {
        const categories = [...new Set(this.terms.map(term => term.category))];
        return categories.sort();
    }

    renderTerms(terms = this.filteredTerms) {
        if (terms.length === 0) {
            return '<div class="no-results"><i class="fas fa-search"></i><p>No se encontraron términos que coincidan con tu búsqueda.</p></div>';
        }

        return terms.map(term => `
            <div class="glossary-term" data-category="${term.category}">
                <h4>${this.highlightSearchTerm(term.term)}</h4>
                <div class="term-english">${this.highlightSearchTerm(term.english)}</div>
                <p>${this.highlightSearchTerm(term.definition)}</p>
                <div class="term-category">
                    <span class="category-badge category-${term.category}">${this.getCategoryLabel(term.category)}</span>
                </div>
            </div>
        `).join('');
    }

    highlightSearchTerm(text) {
        const searchInput = document.getElementById('glossarySearch');
        if (!searchInput || !searchInput.value.trim()) return text;

        const query = searchInput.value.trim();
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    getCategoryLabel(category) {
        const labels = {
            'básico': 'Básico',
            'instrumentos': 'Instrumentos',
            'estrategia': 'Estrategia',
            'análisis': 'Análisis',
            'avanzado': 'Avanzado',
            'actores': 'Actores',
            'mercados': 'Mercados',
            'económico': 'Económico',
            'reguladores': 'Reguladores'
        };
        return labels[category] || category;
    }

    setupGlossaryModal() {
        const glossaryContent = document.getElementById('glossaryContent');
        const searchInput = document.getElementById('glossarySearch');

        if (glossaryContent) {
            glossaryContent.innerHTML = this.renderTerms();
        }

        if (searchInput) {
            // Clear previous event listeners
            const newSearchInput = searchInput.cloneNode(true);
            searchInput.parentNode.replaceChild(newSearchInput, searchInput);

            newSearchInput.addEventListener('input', (e) => {
                const results = this.searchTerms(e.target.value);
                glossaryContent.innerHTML = this.renderTerms(results);
            });

            // Add clear search functionality
            newSearchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    newSearchInput.value = '';
                    const results = this.searchTerms('');
                    glossaryContent.innerHTML = this.renderTerms(results);
                }
            });
        }

        // Add category filter if it doesn't exist
        this.addCategoryFilter();
    }

    addCategoryFilter() {
        const modalBody = document.querySelector('#glossaryModal .modal-body');
        if (!modalBody || document.getElementById('categoryFilter')) return;

        const categories = this.getAllCategories();
        const filterHTML = `
            <div class="glossary-filters">
                <label for="categoryFilter">Filtrar por categoría:</label>
                <select id="categoryFilter">
                    <option value="">Todas las categorías</option>
                    ${categories.map(cat => `<option value="${cat}">${this.getCategoryLabel(cat)}</option>`).join('')}
                </select>
            </div>
        `;

        const searchContainer = modalBody.querySelector('.glossary-search');
        searchContainer.insertAdjacentHTML('afterend', filterHTML);

        // Add event listener for category filter
        const categoryFilter = document.getElementById('categoryFilter');
        categoryFilter.addEventListener('change', (e) => {
            const selectedCategory = e.target.value;
            const searchQuery = document.getElementById('glossarySearch').value;
            
            let results;
            if (selectedCategory) {
                results = this.getTermsByCategory(selectedCategory);
                if (searchQuery) {
                    results = results.filter(term => 
                        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        term.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        term.definition.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                }
            } else {
                results = this.searchTerms(searchQuery);
            }

            const glossaryContent = document.getElementById('glossaryContent');
            glossaryContent.innerHTML = this.renderTerms(results);
        });
    }

    getTermById(id) {
        return this.terms.find(term => term.id === id);
    }

    getRandomTerm() {
        const randomIndex = Math.floor(Math.random() * this.terms.length);
        return this.terms[randomIndex];
    }

    addTerm(term, english, definition, category = 'básico') {
        const newTerm = {
            id: this.terms.length + 1,
            term,
            english,
            definition,
            category
        };
        this.terms.push(newTerm);
        return newTerm;
    }
}

// Add glossary-specific styles
const glossaryStyles = `
.glossary-filters {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
}

.glossary-filters label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary);
}

.glossary-filters select {
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    background: var(--bg-primary);
    color: var(--text-primary);
    font-size: 0.875rem;
    cursor: pointer;
    transition: border-color 0.15s ease-in-out;
}

.glossary-filters select:focus {
    outline: none;
    border-color: var(--primary-color);
}

.term-category {
    margin-top: 0.75rem;
}

.category-badge {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
}

.category-básico { background: #dbeafe; color: #1e40af; }
.category-instrumentos { background: #dcfce7; color: #166534; }
.category-estrategia { background: #fef3c7; color: #92400e; }
.category-análisis { background: #e0e7ff; color: #3730a3; }
.category-avanzado { background: #fce7f3; color: #be185d; }
.category-actores { background: #f0fdf4; color: #15803d; }
.category-mercados { background: #fff7ed; color: #c2410c; }
.category-económico { background: #f3e8ff; color: #7c3aed; }
.category-reguladores { background: #ecfdf5; color: #059669; }

.no-results {
    text-align: center;
    padding: 2rem;
    color: var(--text-muted);
}

.no-results i {
    font-size: 2rem;
    margin-bottom: 1rem;
    opacity: 0.5;
}

.no-results p {
    font-size: 1rem;
    margin: 0;
}

mark {
    background-color: #fef08a;
    color: #854d0e;
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
}
`;

// Add styles to head
const glossaryStyleSheet = document.createElement('style');
glossaryStyleSheet.textContent = glossaryStyles;
document.head.appendChild(glossaryStyleSheet);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GlossaryManager;
}

