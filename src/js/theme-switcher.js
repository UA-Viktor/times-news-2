const COLOR = 'THEME';
const body = document.querySelector('body');
const themeSwitcher = document.querySelector('.theme-switcher');

if (localStorage.getItem(COLOR)) {
  body.classList.toggle(localStorage.getItem(COLOR));
  if (localStorage.getItem(COLOR) === 'dark') {
    themeSwitcher.checked = true;
  }
}

themeSwitcher.addEventListener('change', e => {
  if (e.target.checked) {
    body.classList.toggle('dark');
    localStorage.setItem(COLOR, 'dark');
  } else {
    body.classList.toggle('dark');
    localStorage.setItem(COLOR, 'light');
  }
});
