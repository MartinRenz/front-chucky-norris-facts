export async function getRandomFact() {
  const url = "https://api.chucknorris.io/jokes/random";
  const errorData = { value: "ERROR: Chuck Norris is so badass he caused this site to crash. Try again another time." }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return errorData;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return errorData;
  }
}