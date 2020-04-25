import CountryDetails from "../components/country-details";

function CountryDetailsPage({ country }) {
  const root = document.getElementById("root");
  const CountryDetailsComponent = new CountryDetails(root);

  window.store.countries.publish({
    event: "selectCountry",
    state: { selectedCountry: document.location.pathname.replace("/", "") },
  });
}

export default CountryDetailsPage;
