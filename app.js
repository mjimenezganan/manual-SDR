// App State and Route Mapping
const CONTENT_DIR = 'content/';

/**
 * Renders LaTeX math expressions inside the target container using KaTeX.
 * Must be executed every time new dynamic HTML/Markdown is inserted into the DOM.
 */
function renderMathFormulas() {
    const container = document.getElementById('contentDisplay');
    if (!container) return;

    // Check if KaTeX auto-render library is loaded in window
    if (typeof renderMathInElement === 'function') {
        try {
            renderMathInElement(container, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false },
                    { left: '\\(', right: '\\)', display: false },
                    { left: '\\[', right: '\\]', display: true }
                ],
                throwOnError: false,
                ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
            });
        } catch (error) {
            console.error("Error renderizando KaTeX:", error);
        }
    } else {
        console.warn("KaTeX renderMathInElement no está disponible aún en window.");
    }
}

/**
 * Main function to load and render dynamic chapter content.
 * @param {string} chapterId - Identifier of the chapter (e.g., 'home', 'cap0', 'cap1')
 */
async function loadChapter(chapterId) {
    const display = document.getElementById('contentDisplay');
    if (!display) return;

    // Show loading skeleton / spinner
    display.innerHTML = `
        <div class="flex flex-col items-center justify-center py-16 space-y-4">
            <div class="w-10 h-10 border-4 border-radio-accent/30 border-t-radio-accent rounded-full animate-spin"></div>
            <p class="text-xs font-mono text-slate-400 animate-pulse">CARGANDO ESPECTRO DE DATOS (${chapterId.toUpperCase()})...</p>
        </div>
    `;

    // Highlight selected item in sidebar menu
    updateSidebarHighlight(chapterId);

    // Auto-close sidebar on mobile devices after selecting a chapter
    closeMobileSidebar();

    // Determine target file extension
    // Special views like home or index are HTML; chapters are Markdown (.md)
    let fileName = `${chapterId}.md`;
    if (chapterId === 'home' || chapterId === 'index') {
        fileName = `${chapterId}.html`;
    }

    const filePath = `${CONTENT_DIR}${fileName}`;

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`No se pudo cargar el archivo: ${filePath} (Status: ${response.status})`);
        }

        const data = await response.text();

        if (fileName.endsWith('.md')) {
            // Configure marked.js options if available
            if (typeof marked !== 'undefined') {
                display.innerHTML = `<div class="md-content">${marked.parse(data)}</div>`;
            } else {
                display.innerHTML = `<pre class="text-xs text-red-400 p-4">Error: Marked.js no está cargado.</pre>`;
            }
        } else {
            // Direct HTML insertion for views like home.html or index.html
            display.innerHTML = data;
        }

        // Re-render LaTeX math formulas in the newly added content
        setTimeout(() => {
            renderMathFormulas();
        }, 50);

        // Scroll main content area back to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (err) {
        console.error('Error cargando el capítulo:', err);
        display.innerHTML = `
            <div class="text-center py-8 md:py-16 space-y-4">
                <div class="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400 text-xl md:text-2xl shadow-lg">
                    <i class="fa-solid fa-lock"></i>
                </div>
                <h2 class="text-xl md:text-2xl font-bold text-white">Capítulo Bloqueado</h2>
                <p class="text-slate-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
                    Este capítulo forma parte del plan de entregas semanales y se desbloqueará en las próximas publicaciones.
                </p>
                <div class="pt-2 md:pt-4">
                    <button onclick="loadChapter('index')" class="px-5 py-2.5 rounded-xl bg-radio-dark border border-radio-border text-radio-accent text-xs font-mono font-bold hover:border-radio-accent transition-all">
                        <i class="fa-solid fa-arrow-left mr-1"></i> Ir al índice
                    </button>
                </div>
            </div>
        `;
    }
}

function updateSidebarHighlight(chapterId) {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        const btnId = btn.getAttribute('data-id');
        if (btnId === chapterId) {
            btn.classList.add('bg-radio-dark', 'text-radio-accent', 'border', 'border-radio-accent/30');
            btn.classList.remove('text-slate-300', 'text-slate-500');
        } else {
            btn.classList.remove('bg-radio-dark', 'text-radio-accent', 'border', 'border-radio-accent/30');
            btn.classList.add('text-slate-300');
        }
    });
}

function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && window.innerWidth < 768) {
        sidebar.classList.add('-translate-x-full');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Sidebar Toggle Button Listener
    const toggleBtn = document.getElementById('toggleMenuBtn');
    const sidebar = document.getElementById('sidebar');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
        });
    }

    // Search bar filter listener
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const buttons = document.querySelectorAll('#navMenu button');

            buttons.forEach(btn => {
                const text = btn.textContent.toLowerCase();
                if (text.includes(query)) {
                    btn.style.display = 'flex';
                } else {
                    btn.style.display = 'none';
                }
            });
        });
    }

    // Load initial home chapter on startup
    loadChapter('home');
});