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
    button.onclick = (): void => {
      const theme = html.getAttribute(DATA_ATTRIBUTE);

      if (theme === THEME.LIGHT) html.setAttribute(DATA_ATTRIBUTE, THEME.DARK);
      if (theme === THEME.DARK) html.setAttribute(DATA_ATTRIBUTE, THEME.LIGHT);
    };

    button.addEventListener("click", (): void => {
      const theme = html.getAttribute(DATA_ATTRIBUTE);

      if (theme) button.setAttribute("class", theme);
    });
  }
};

export { THEME, SWITCHER_ID, DATA_ATTRIBUTE, initThemeSwitcher };