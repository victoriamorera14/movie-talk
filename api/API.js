export async function Fetch(API_URL) {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) {
    throw new Error(`${res.status} La resposta del servidor no és correcta`);
  }
  const data = await res.json();
  return data;
}