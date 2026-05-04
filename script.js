// ============================================================
// CAREER PROJECT WEBSITE - JAVASCRIPT
// ============================================================

/**
 * Show a specific tab and hide others
 * @param {string} tabName - The ID of the tab to show
 * @param {Event} event - The click event (optional)
 */
function showTab(tabName, event) {
    // Prevent default link behavior if event is provided
    if (event) {
        event.preventDefault();
    }

    // Hide all tab content
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show the selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Add active class to the clicked nav link
    if (event && event.target) {
        event.target.classList.add('active');
    } else {
        // If no event, find the link that corresponds to this tab
        navLinks.forEach(link => {
            if (link.getAttribute('href') === '#' && 
                link.onclick.toString().includes(`'${tabName}'`)) {
                link.classList.add('active');
            }
        });
    }

    // Scroll to top of page
    window.scrollTo(0, 0);
}

/**
 * Toggle mobile menu visibility
 * @param {HTMLElement} element - The hamburger element
 */
function toggleMobileMenu(element) {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

/**
 * Close mobile menu when a link is clicked
 */
function setupMobileMenuClose() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
}

/**
 * Initialize the website
 */
function initializeWebsite() {
    // Set up mobile menu close functionality
    setupMobileMenuClose();

    // Show the home tab by default
    document.getElementById('home').classList.add('active');
    
    // Mark the first nav link as active
    const firstLink = document.querySelector('.nav-link');
    if (firstLink) {
        firstLink.classList.add('active');
    }

    // Handle smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

/**
 * Add placeholder image functionality
 * Shows a placeholder message for missing images
 */
function handleMissingImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.backgroundColor = '#ecf0f1';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.minHeight = '300px';
            this.alt = 'Image placeholder - Add your image here';
            
            // Create a placeholder div
            const placeholder = document.createElement('div');
            placeholder.style.textAlign = 'center';
            placeholder.style.color = '#7f8c8d';
            placeholder.style.padding = '2rem';
            placeholder.innerHTML = `
                <div style="font-size: 3rem; margin-bottom: 1rem;">🖼️</div>
                <p><strong>Image Placeholder</strong></p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">Replace with your image</p>
            `;
            
            this.replaceWith(placeholder);
        });
    });
}

// ============================================================
// DOCUMENT READY / INITIALIZATION
// ============================================================

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initializeWebsite();
        handleMissingImages();
    });
} else {
    // DOM is already loaded
    initializeWebsite();
    handleMissingImages();
}

// ============================================================
// UTILITY FUNCTIONS FOR FUTURE USE
// ============================================================

/**
 * Validate and add citations
 * Returns formatted citation
 */
function formatCitation(author, title, source, year) {
    return `${author}. "${title}." ${source}, ${year}.`;
}

/**
 * Create a table of contents dynamically
 * Insert this in the home tab or as a separate feature
 */
function generateTableOfContents() {
    const navLinks = document.querySelectorAll('.nav-link');
    const toc = document.createElement('ul');
    
    navLinks.forEach(link => {
        const li = document.createElement('li');
        li.textContent = link.textContent;
        li.style.cursor = 'pointer';
        li.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = link.getAttribute('onclick').match(/'([^']+)'/)[1];
            showTab(tabName, null);
        });
        toc.appendChild(li);
    });
    
    return toc;
}

/**
 * Calculate reading time for a section
 */
function calculateReadingTime(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return 0;
    
    const text = section.innerText;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // Average 200 words per minute
    
    return readingTime;
}

/**
 * Export current content to a text file
 */
function exportContent() {
    let content = 'CAREER RESEARCH PROJECT\n';
    content += '='.repeat(50) + '\n\n';
    
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        const title = tab.querySelector('h1');
        if (title) {
            content += title.textContent + '\n';
            content += '-'.repeat(30) + '\n';
            content += tab.innerText + '\n\n';
        }
    });
    
    // Create a blob and download
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', 'career-project.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// ============================================================
// PRINT FUNCTIONALITY
// ============================================================

/**
 * Print the entire website
 */
function printWebsite() {
    window.print();
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Ctrl+P or Cmd+P to print
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault();
        printWebsite();
    }
});
