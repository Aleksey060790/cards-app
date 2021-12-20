const BASE_URL = 'https://spaceflightnewsapi.net/';

export async function getArticles(title: string) {
  const response = await fetch(`${BASE_URL}&t=${title}`);
  const article = await response.json();

  if (article.Response === 'False') {
    throw new Error(`Movie is not found ${response.status} - ${response.statusText}`);
  }
  console.log(article);
  return article;
}