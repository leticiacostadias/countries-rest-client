import PubSubStore from "./lib/pub-sub";

// COUNTRIES STATE
const countriesStore = new PubSubStore({
  list: [],
  filteredList: null,
  filters: { search: "", region: null },
  selectedCountryData: null,
  selectedCountry: null,
});

// SETTING TO GLOBAL
window.store = {
  countries: countriesStore,
};
