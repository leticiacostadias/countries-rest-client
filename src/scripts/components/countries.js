import * as countriesDAO from "../DAOs/countriesDAO";
import generateCountryItem from "../templates/country-item";

((document) => {
  //STORE
  const countriesStore = window.store.countries;

  // QUERIES
  const countriesContainer = document.querySelector(".js-countries-countainer");

  // FUNCTIONS
  async function fetchCountries() {
    // FETCH DATA
    const { data: allCountries } = await countriesDAO.getAll();

    countriesStore.publish({
      event: "updateList",
      state: { list: allCountries },
    });
  }

  function renderCountries({ state: countriesState }) {
    const { list, filteredList } = countriesState;
    const countriesList = filteredList || list;

    const countriesElements = [];

    for (const country of countriesList) {
      countriesElements.push(generateCountryItem(country));
    }

    countriesContainer.innerHTML = countriesElements.join("");
  }

  // INIT
  countriesStore.subscribe({ event: "updateList", listener: renderCountries });
  countriesStore.subscribe({
    event: "updateFilteredList",
    listener: renderCountries,
  });

  fetchCountries();
})(document);
