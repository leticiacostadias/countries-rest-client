import * as countriesDAO from "../DAOs/countriesDAO";
import generateCountryDetails from "../templates/contry-details";

class CountryDetails {
  constructor(rootElement) {
    this.root = rootElement;
    this.countriesStore = window.store.countries;

    this.countriesStore.subscribe({
      event: "selectCountry",
      listener: this.updateSelectedCountryData.bind(this),
    });

    this.countriesStore.subscribe({
      event: "updateDetails",
      listener: this.renderCountryDeails.bind(this),
    });
  }

  _getMainElements() {
    this.backButtonElement = this.root.querySelector(".js-back-button");
    this.bordersListElement = this.root.querySelector(".js-borders-list");
  }

  _setEventListeners() {
    this._getMainElements();

    this.backButtonElement.addEventListener("click", () =>
      window.router.goBack()
    );
    this.bordersListElement.addEventListener(
      "click",
      this._handleBorderCountryClick.bind(this)
    );
  }

  _handleBorderCountryClick({ target }) {
    if (!target.classList.contains("borders__button")) return;

    const selectedCountry = target.dataset.country;
    window.router.goTo(selectedCountry);
  }

  async updateSelectedCountryData({ state }) {
    const { selectedCountry: countryName } = state;

    // FETCH DATA
    const {
      data: [countryDetails],
    } = await countriesDAO.getByName(countryName);
    const { data: borders } = await countriesDAO.getCountriesByCode(
      countryDetails.borders
    );

    countryDetails.borders = borders;

    this.countriesStore.publish({
      event: "updateDetails",
      state: { selectedCountryData: countryDetails },
    });
  }

  async renderCountryDeails({ state }) {
    const { selectedCountryData } = state;

    this.root.innerHTML = "";
    this.root.innerHTML = generateCountryDetails(selectedCountryData);
    this._setEventListeners();
  }
}

export default CountryDetails;
