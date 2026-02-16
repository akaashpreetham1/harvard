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
      nav.classList.remove('is-open');
      document.body.classList.remove('is-nav-open');
    };
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
      document.body.classList.toggle('is-nav-open');
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

  // Hero Video Play/Pause Toggle
  const video = document.getElementById('hero-video');
  const playPauseToggle = document.getElementById('play-pause-toggle');
  if (video && playPauseToggle) {
    const iconPlay = playPauseToggle.querySelector('.icon-play');
    const iconPause = playPauseToggle.querySelector('.icon-pause');
    playPauseToggle.addEventListener('click', () => {
      if (video.paused) {
        video.muted = false;
        video.play();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
      } else {
        video.pause();
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
      }
    });

    // Fullscreen logic
    const fullscreenToggle = document.getElementById('fullscreen-toggle');
    if (fullscreenToggle) {
      fullscreenToggle.addEventListener('click', () => {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) { /* Safari */
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE11 */
          video.msRequestFullscreen();
        }
      });
    }
  }
})();

// Accessible accordion behavior (initiatives)
(function () {
  const triggers = document.querySelectorAll('.accordion__trigger');
  if (!triggers.length) return;

  triggers.forEach((btn, index) => {
    const panelId = btn.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    const item = btn.closest('.accordion__item');
    if (!panel || !item) return;

    const updateState = (isOpen) => {
      btn.setAttribute('aria-expanded', String(isOpen));
      item.classList.toggle('is-collapsed', !isOpen);
    };

    // Initial state: first is open, others are collapsed
    updateState(index === 0);

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      updateState(!expanded);
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
