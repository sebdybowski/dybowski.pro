const initNavbarSticky = () => {
  const open = "navbar--open";
  const sticky = "navbar--sticky";

  const Navbar = document.getElementById("navbar");

  document
    ?.getElementById("menu__button")
    ?.addEventListener("click", () => Navbar?.classList.toggle(open));

  document.addEventListener("scroll", () => {
    const HTMLElement = document.getElementsByTagName("html")[0];
    const navbarHeight = Navbar?.offsetHeight || 0;
    const heroHeight = document.getElementById("hero")?.offsetHeight || 0;

    const hasSticky = Navbar?.classList.contains(sticky);
    const isBeyondTreshold =
      HTMLElement.scrollTop >= (navbarHeight + heroHeight) * 0.8;

    if ((isBeyondTreshold && !hasSticky) || (hasSticky && !isBeyondTreshold))
      Navbar?.classList.toggle(sticky);
  });
};

export default initNavbarSticky;