// Add smooth scrolling to all links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add copy button to code blocks
    document.querySelectorAll('pre').forEach(block => {
        if (!block.querySelector('.copy-button')) {
            const button = document.createElement('button');
            button.className = 'copy-button';
            button.textContent = 'Copy';
            
            button.addEventListener('click', async () => {
                const code = block.querySelector('code').textContent;
                try {
                    await navigator.clipboard.writeText(code);
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                    button.textContent = 'Failed to copy';
                }
            });
            
            block.style.position = 'relative';
            block.insertBefore(button, block.firstChild);
        }
    });

    // Add table of contents floating button for mobile
    const toc = document.querySelector('.table-of-contents');
    if (toc) {
        const tocButton = document.createElement('button');
        tocButton.className = 'toc-mobile-button';
        tocButton.textContent = '📑';
        tocButton.title = 'Table of Contents';
        
        tocButton.addEventListener('click', () => {
            toc.classList.toggle('show');
        });
        
        document.body.appendChild(tocButton);
    }

    // Add reading progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Add dark mode toggle with localStorage persistence
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'theme-toggle';
    darkModeToggle.textContent = '🌓';
    darkModeToggle.title = 'Toggle Dark Mode';

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    document.querySelector('.menu-bar').appendChild(darkModeToggle);
}); 