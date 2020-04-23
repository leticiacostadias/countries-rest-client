const countryItem = ({ flag, name, population, region, capital }) => `
<li class="country countries__item card">
  <img
    src="${flag}"
    alt="${name}"
    class="card__thumb"
  />

  <div class="card__content">
    <h3 class="card__title">${name}</h3>

    <div class="card__description">
      <dl class="country__details">
        <div class="country__data">
          <dt class="country__term">Population</dt>
          <dd class="country__definition">${population}</dd>
        </div>

        <div class="country__data">
          <dt class="country__term">Region</dt>
          <dd class="country__definition">${region}</dd>
        </div>

        <div class="country__data">
          <dt class="country__term">Capital</dt>
          <dd class="country__definition">${capital}</dd>
        </div>
      </dl>
    </div>
  </div>
</li>
`;

export default countryItem;
