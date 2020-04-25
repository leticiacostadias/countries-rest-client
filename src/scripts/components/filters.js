import filterTemplate from "../templates/filter";

class Filters {
  constructor(rootElement) {
    // GLOBALS
    this.root = rootElement;
    this.countriesStore = window.store.countries;

    // SUBSCRIPTIONS
    this.countriesStore.subscribe({
      event: "updateFilter",
      listener: this._updateFilteredList.bind(this),
    });
  }

  _updateFilteredList({ state }) {
    const {
      list: countriesList,
      filters: { search, region },
    } = state;

    if (!search && !region) {
      this.countriesStore.publish({
        event: "updateFilteredList",
        state: { filteredList: null },
      });
      return;
    }

    const searchRegexp = new RegExp(search, "i");
    const filteredList = countriesList.filter((country) => {
      let matchSearch = search ? country.name.match(searchRegexp) : true;
      let matchRegion = region ? country.region === region : true;

      return matchSearch && matchRegion;
    });

    this.countriesStore.publish({
      event: "updateFilteredList",
      state: { filteredList },
    });
  }

  _getMainElements() {
    // QUERIES
    this.searchInputElement = this.root.querySelector(".js-search-input");
    this.regionSelectElement = this.root.querySelector(".js-region-select");
  }

  _updateFilter(filterName) {
    return ({ target: { value } }) => {
      const { filters: currentFilters } = this.countriesStore.getState();
      const newState = { filters: { ...currentFilters, [filterName]: value } };

      this.countriesStore.publish({ event: "updateFilter", state: newState });
    };
  }

  render() {
    this.root.innerHTML += filterTemplate;
  }

  // EVENT LISTENERS
  setEventListeners() {
    // UPDATE ELEMENTS
    this._getMainElements();

    this.searchInputElement.addEventListener(
      "input",
      this._updateFilter("search")
    );

    this.regionSelectElement.addEventListener(
      "change",
      this._updateFilter("region")
    );
  }
}

export default Filters;
