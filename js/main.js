// Navigation active state and hamburger toggle
(function () {
  const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
  const links = document.querySelectorAll('[data-nav]');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const normalized = href.replace(/\/index\.html$/, '/');
    if (currentPath.endsWith('/') && normalized === '/index.html') return; // keep Home inactive on root check
    if (window.location.pathname.endsWith(href) || window.location.pathname === href) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.style.display = '';
    };
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? '' : 'block';
      if (!expanded) {
        // Move focus to first link when opened
        const first = nav.querySelector('a');
        if (first) first.focus();
      } else {
        toggle.focus();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }
})();

// Accessible accordion behavior (initiatives)
(function () {
  const triggers = document.querySelectorAll('.accordion__trigger');
  if (!triggers.length) return; // No accordion when using static cards

  triggers.forEach((btn, index) => {
    const panelId = btn.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;
    // Open all by default
    btn.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
      // Arrow key navigation
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const next = triggers[index + 1] || triggers[0];
        next.focus();
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = triggers[index - 1] || triggers[triggers.length - 1];
        prev.focus();
      }
    });
  });
})();

// Footer year
(function () {
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());
})();


