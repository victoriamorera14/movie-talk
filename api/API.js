const API_ROOT = "https://api.themoviedb.org/3/movie/";
const API_KEY = "958f518b7c01a6e5b5898812c7a86c47";


export async function Fetch(API_URL) {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) {
    throw new Error(`${res.status} La resposta del servidor no és correcta`);
  }
  const data = await res.json();
  return data;
}

export async function getMovieById(id) {
  const fetchURL = `${API_ROOT}${id}?api_key=${API_KEY}`;
  const data = fetchData(fetchURL);
  return data;
}