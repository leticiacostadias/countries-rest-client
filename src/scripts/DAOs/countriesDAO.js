import Request from "../lib/request";

const { COUNTRIES_API } = process.env;

export async function getAll() {
  return Request.get({
    path: `${COUNTRIES_API}/all?fields=flag;name;population;region;capital;`,
  });
}

export async function getByName(name) {
  return Request.get({
    path: `${COUNTRIES_API}/name/${name}`,
  });
}

export async function getCountriesByCode(codesList = []) {
  return Request.get({
    path: `${COUNTRIES_API}/alpha?codes=${codesList.join(";")}`,
  });
}
