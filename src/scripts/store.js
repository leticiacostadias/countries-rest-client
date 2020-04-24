import PubSubStore from "./lib/pub-sub";

// COUNTRIES STATE
const countriesStore = new PubSubStore({
  list: [],
  filteredList: null,
  filters: { search: "", region: null },
});

const themeStore = new PubSubStore({ currentTheme: "dark" });

// SETTING TO GLOBAL
window.store = {
  countries: countriesStore,
  theme: themeStore,
};
