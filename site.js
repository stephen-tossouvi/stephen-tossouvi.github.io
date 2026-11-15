const themeToggle = document.querySelector("[data-theme-toggle]");
const backToTop = document.querySelector("[data-back-to-top]");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
  document.documentElement.dataset.theme = "light";
}

if (themeToggle) {
  const icon = themeToggle.querySelector("i");

  const updateThemeButton = () => {
    const isLight = document.documentElement.dataset.theme === "light";
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute("aria-label", `Activer le thème ${isLight ? "sombre" : "clair"}`);
    themeToggle.title = `Activer le thème ${isLight ? "sombre" : "clair"}`;
    icon.className = `fa-solid ${isLight ? "fa-moon" : "fa-sun"}`;
  };

  updateThemeButton();
  themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.dataset.theme !== "light";
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
    updateThemeButton();
  });
}

if (backToTop) {
  const updateBackToTop = () => {
    backToTop.hidden = window.scrollY < 300;
  };

  updateBackToTop();
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  backToTop.addEventListener("click", () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}
