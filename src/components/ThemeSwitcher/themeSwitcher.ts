const THEME = {
  LIGHT: "light",
  DARK: "dark"
};

const SWITCHER_ID = "theme-switcher";
const DATA_ATTRIBUTE = "data-theme";

const initThemeSwitcher = (): void => {
  const button = document.getElementById(SWITCHER_ID);
  const html = document.getElementsByTagName("html")[0];

  if (button) {
    const currentTheme = html.getAttribute(DATA_ATTRIBUTE) ?? THEME.LIGHT;

    if (button instanceof HTMLInputElement) button.checked = currentTheme === THEME.LIGHT;
    button.setAttribute("class", currentTheme);

    button.addEventListener("click", (): void => {
      const theme = html.getAttribute(DATA_ATTRIBUTE);
      const nextTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;

      html.setAttribute(DATA_ATTRIBUTE, nextTheme);
      button.setAttribute("class", nextTheme);
    });
  }
};

export { THEME, SWITCHER_ID, DATA_ATTRIBUTE, initThemeSwitcher };