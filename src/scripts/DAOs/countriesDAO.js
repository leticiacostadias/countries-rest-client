import Request from "../lib/request";

const { COUNTRIES_API } = process.env;

export async function getAll() {
  return Request.get({ path: `${COUNTRIES_API}/all` });
}
