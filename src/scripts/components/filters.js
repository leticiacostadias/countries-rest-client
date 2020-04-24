(() => {
  // STORE
  const countriesStore = window.store.countries;

  // QUERIES
  const searchInput = document.querySelector(".js-search-input");
  const regionSelect = document.querySelector(".js-region-select");

  // FUNCTIONS
  const updateFilter = (filterName) => ({ target: { value } }) => {
    const { filters: currentFilters } = countriesStore.getState();
    const newState = { filters: { ...currentFilters, [filterName]: value } };

    countriesStore.publish({ event: "updateFilter", state: newState });
  };

  function updateFilteredList({ state }) {
    const {
      list: countriesList,
      filters: { search, region },
    } = state;

    if (!search && !region) {
      countriesStore.publish({
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

    countriesStore.publish({
      event: "updateFilteredList",
      state: { filteredList },
    });
  }

  // EVENT LISTENERS
  searchInput.addEventListener("input", updateFilter("search"));
  regionSelect.addEventListener("change", updateFilter("region"));

  // SUBSCRIPTIONS
  countriesStore.subscribe({
    event: "updateFilter",
    listener: updateFilteredList,
  });
})(document, window);
