/**
 * Script Responsável pelas interações dinâmicas da página (Client-Side)
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inicializa o AOS (Animate On Scroll) para os efeitos de entrada
    AOS.init({
        once: true,            // Anima apenas uma vez ao fazer scroll
        offset: 80,            // O elemento começa a animar 80px antes de aparecer
        duration: 800,         // Duração total da animação (0.8s)
        easing: 'ease-out-cubic' // Curva macia para a animação
    });

    // 2. Navbar Dinâmica (Aumenta a opacidade ao rolar a página para baixo)
    const navbar = document.querySelector('.glass-nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Quando a página rola para baixo
                navbar.style.background = 'rgba(253, 251, 247, 0.95)';
                navbar.style.boxShadow = '0 4px 15px rgba(153, 101, 18, 0.08)';
            } else {
                // Topo da página
                navbar.style.background = 'rgba(253, 251, 247, 0.75)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
});
