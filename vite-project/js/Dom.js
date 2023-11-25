export function dom() {
  const selectors = {
    form: document.getElementById("form"),
    submit: document.getElementById("submit"),
    electric: document.getElementById('electric'),
    gasoline: document.getElementById('gasoline'),
    hybrid: document.getElementById('hybrid'),
    themeSwitcher: document.getElementById('theme-switcher')
  };
  return selectors;
}

