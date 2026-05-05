document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Recupera tema salvato o usa preferenza di sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'LIGHT';
    }

    themeToggle.addEventListener('click', () => {
        const isDark = body.hasAttribute('data-theme');

        if (isDark) {
            body.removeAttribute('data-theme');
            themeToggle.textContent = 'DARK';
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = 'LIGHT';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Effetto Fade-in allo scroll per un tocco di eleganza
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.content-block, .separator').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});