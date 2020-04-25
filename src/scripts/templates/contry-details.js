const generateCountryDetails = ({
  name,
  nativeName,
  flag,
  region,
  subregion,
  capital,
  population,
  currencies,
  languages,
  topLevelDomain,
  borders,
}) => `
  <div class="main__header">
    <div class="main__header__item">
      <button class="js-back-button">
        <ion-icon name="arrow-back-outline"></ion-icon>
        Back
      </button>
    </div>
  </div>

  <div class="main__content main__content--details">
    <picture class="flag">
      <img
        src="${flag}"
        alt="${name} flag"
        class="flag__image"
      />
    </picture>

    <article class="article">
      <h2 class="article__title">${name}</h2>

      <dl class="article__info">
        <div class="article__info__block">
          <div class="article__data">
            <dt class="article__term">Native Name</dt>
            <dd class="article__definition">${nativeName}</dd>
          </div>

          <div class="article__data">
            <dt class="article__term">Population</dt>
            <dd class="article__definition">${Number(
              population
            ).toLocaleString()}</dd>
          </div>

          <div class="article__data">
            <dt class="article__term">Region</dt>
            <dd class="article__definition">${region}</dd>
          </div>

          <div class="article__data">
            <dt class="article__term">Sub Region</dt>
            <dd class="article__definition">${subregion}</dd>
          </div>

          <div class="article__data">
            <dt class="article__term">Capital</dt>
            <dd class="article__definition">${capital}</dd>
          </div>
        </div>

        <div class="article__info__block">
          <div class="article__data">
            <dt class="article__term">Top Level Domain</dt>
            <dd class="article__definition">${topLevelDomain.join(", ")}</dd>
          </div>

          <div class="article__data">
            <dt class="article__term">Currencies</dt>
            <dd class="article__definition">${currencies
              .map((c) => c.name)
              .join(", ")}</dd>
          </div>

          <div class="article__data">
            <dt class="article__term">Languages</dt>
            <dd class="article__definition">${languages
              .map((l) => l.name)
              .join(", ")}</dd>
          </div>
        </div>
      </dl>

      <div class="article__footer">
        <ul class="article__footer__list borders js-borders-list">
          <h3 class="borders__title">Border Countries:</h3>

          ${borders
            .map(
              (borderCountry) => `
            <li class="borders__country">
              <button data-country="${borderCountry.name.toLowerCase()}" class="borders__button">
                ${borderCountry.name}
              </button>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    </article>
  </div>
`;

export default generateCountryDetails;
