/**
 * Script responsável pelas interações dinâmicas da página (roda no navegador)
 */

document.addEventListener("DOMContentLoaded", () => {
    // Navbar e navegação acessível.
    // 2. Navbar dinâmica (fica mais opaca ao rolar a página para baixo)
    const navbar = document.querySelector('.glass-nav');
    if (navbar) {
        const atualizarNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
        atualizarNavbar();
        window.addEventListener('scroll', atualizarNavbar, { passive: true });
    }

    // 3. Fecha o menu do celular ao clicar em um link
    const menu = document.getElementById('navbarNav');
    if (menu) {
        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                if (menu.classList.contains('show')) {
                    (bootstrap.Collapse.getInstance(menu) || new bootstrap.Collapse(menu, { toggle: false })).hide();
                }
            });
        });
    }

    // 4. Destaca no menu a seção que está visível na tela
    const linksMenu = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    const secoes = [...linksMenu]
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if ('IntersectionObserver' in window && secoes.length) {
        const observer = new IntersectionObserver((entradas) => {
            entradas.forEach((entrada) => {
                if (!entrada.isIntersecting) return;
                linksMenu.forEach((link) => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entrada.target.id}`);
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        secoes.forEach((secao) => observer.observe(secao));
    }
});

