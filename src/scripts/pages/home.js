import Countries from "../components/countries";
import Filters from "../components/filters";

function HomePage() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  console.log(root);

  const FiltersComponent = new Filters(root);
  const CountriesComponent = new Countries(root);

  FiltersComponent.render();
  CountriesComponent.render();

  FiltersComponent.setEventListeners();
}

export default HomePage;
