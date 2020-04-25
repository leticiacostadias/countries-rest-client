export default `
  <div class="main__header">
    <div class="main__header__item search">
      <label class="search__label" for="search-input">
        <ion-icon class="search__icon" name="search-outline"></ion-icon>
        Search for a country
      </label>
      <input
        class="search__input js-search-input"
        id="search-input"
        placeholder="Search for a country"
        type="text"
      />
    </div>

    <div class="main__header__item filter">
      <label class="filter__label" for="filter-select">
        Filter by region
      </label>
      <select id="filter-select" class="filter__select js-region-select" name="region">
        <option value="Africa" class="filter__option">Africa</option>
        <option value="Americas" class="filter__option">Americas</option>
        <option value="Asia" class="filter__option">Asia</option>
        <option value="Europe" class="filter__option">Europe</option>
        <option value="Oceania" class="filter__option">Oceania</option>
      </select>
    </div>
  </div>
`;
