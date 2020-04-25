import * as countriesDAO from "../DAOs/countriesDAO";
import countriesTemplate from "../templates/countries";
import generateCountryItem from "../templates/country-item";

class Countries {
  constructor(rootElement) {
    // GLOBALS
    this.root = rootElement;
    this.countriesStore = window.store.countries;

    // SUBSCRIBERS
    this.countriesStore.subscribe({
      event: "updateList",
      listener: this.renderCountries.bind(this),
    });
    this.countriesStore.subscribe({
      event: "updateFilteredList",
      listener: this.renderCountries.bind(this),
    });
  }

  _getMainElements() {
    // QUERIES
    this.countriesContainerElement = this.root.querySelector(
      ".js-countries-countainer"
    );
  }

  async _fetchCountries() {
    // FETCH DATA
    const { data: allCountries } = await countriesDAO.getAll();

    this.countriesStore.publish({
      event: "updateList",
      state: { list: allCountries },
    });
  }

  render() {
    this.root.innerHTML += countriesTemplate;
    this._fetchCountries();
  }

  renderCountries({ state: countriesState }) {
    const { list, filteredList } = countriesState;
    const countriesList = filteredList || list;

    const countriesElements = [];

    for (const country of countriesList) {
      countriesElements.push(generateCountryItem(country));
    }

    this._getMainElements();
    this.countriesContainerElement.innerHTML = countriesElements.join("");
  }

  // EVENT LISTENERS
  setEventListeners() {}
}

export default Countries;
