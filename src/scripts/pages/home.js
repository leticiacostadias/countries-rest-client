import Countries from "../components/countries";
import Filters from "../components/filters";

function HomePage() {
  const root = document.getElementById("root");

  console.log(root);

  const FiltersComponent = new Filters(root);
  const CountriesComponent = new Countries(root);

  FiltersComponent.render();
  CountriesComponent.render();

  FiltersComponent.setEventListeners();
  CountriesComponent.setEventListeners();
}

export default HomePage;
