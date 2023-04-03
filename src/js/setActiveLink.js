function setActiveLink() {
  const all = document.querySelectorAll('.header-nav-a');
  all.forEach(link => {
    if (link.href === window.location.href) {
      link.parentNode.classList.add('link');
    }
  });
}

setActiveLink();
