import * as countriesDAO from "../DAOs/countriesDAO";
import generateCountryItem from "../templates/country-item";

((document) => {
  // QUERIES
  const countriesContainer = document.querySelector(".js-countries-countainer");

  // FUNCTIONS
  async function populateCountries() {
    // FETCH DATA
    const allCountries = (await countriesDAO.getAll()).data;

    // COUNTRIES ELEMENTS
    const countriesElements = [];

    for (const country of allCountries) {
      countriesElements.push(generateCountryItem(country));
    }

    countriesContainer.innerHTML = countriesElements.join("");
  }

  // INIT
  populateCountries();
})(document);
