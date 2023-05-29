import "./Navbar.css";
import { useEffect, useState } from "preact/hooks";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher.astro";
import { Text, HeartHandshake } from "lucide-preact";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "leadership", label: "Leadership" },
  { id: "design", label: "UX" },
];

const Navbar = () =>
{
  const [stick, toggleStick] = useState(false);
  const [showMenu, toggleMenu] = useState(true);

  useEffect(() =>
  {
    document.addEventListener("scroll", () =>
    {
      const HTMLElement = document
        .getElementsByTagName("html")[0];
      const NavbarHeight = document
        .getElementById("navbar")?.offsetHeight || 0;
      const HeroHeight = document
        .getElementById("hero")?.offsetHeight || 0;

      if (
        HTMLElement.scrollTop >
        (NavbarHeight + HeroHeight) * 0.8
      )
      {
        toggleStick(true);
      } else
      {
        toggleStick(false);
      }
    });
  }, []);

  return (
    <nav
      class={`container-hybrid top-bar ${stick ? "sticky" : ""}`}
      id="navbar"
    >
      <ul>
        <li>
          {/* <ThemeSwitcher /> */}
        </li>
      </ul>
      <ul class="menu-btn">
        <button
          type="button"
          aria-label="menu button"
          class="menu-toggle"
          onClick={() => toggleMenu(!showMenu)}
        >
          <Text />
        </button>
      </ul>
      {
        <ul class={`links ${showMenu ? "visible" : "hidden"}`}>
          {
            LINKS.map(({ id, label }) => (
              <li>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))
          }
          <li class="visible--sticky">
            <a href="https://pl.linkedin.com/in/sebastian-dybowski" role="button">
              <HeartHandshake /> hire me
            </a>
          </li>
        </ul>
      }
    </nav >
  );
};

export default Navbar;