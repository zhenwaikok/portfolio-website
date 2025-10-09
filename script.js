function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    const isOpen = menu.classList.toggle('open');
    icon.classList.toggle('open');

    // accessibility
    const btn = icon;
    if (btn) {
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
    if (menu) {
        menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    }
}

// close when clicking outside
document.addEventListener('click', function (e) {
    const menu = document.querySelector('.menu-links');
    const btn = document.querySelector('.hamburger-icon');
    if (!menu || !btn) return;
    if (!menu.classList.contains('open')) return;

    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        // close
        menu.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
    }
});

// close on Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const menu = document.querySelector('.menu-links');
        const btn = document.querySelector('.hamburger-icon');
        if (menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            btn.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-hidden', 'true');
        }
    }
});