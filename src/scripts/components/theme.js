import templates from "../templates/theme-button";

((document) => {
  // STATE
  let currentTheme = "dark";

  // QUERIES
  const bodyElement = document.querySelector("body");
  const themeButtonElement = document.querySelector(".js-theme-button");

  // EVENTS
  themeButtonElement.addEventListener("click", toggleTheme);

  // FUNCTIONS
  function toggleTheme() {
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    bodyElement.classList.toggle("dark");
    bodyElement.classList.toggle("light");
    themeButtonElement.innerHTML = "";

    themeButtonElement.innerHTML = templates[`${newTheme}Template`];
    currentTheme = newTheme;
  }
})(document);
