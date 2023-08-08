export async function fetchCurrencies() {
  const result = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await result.json();
  return data;
}
