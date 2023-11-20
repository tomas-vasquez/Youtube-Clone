const API_KEY = "AIzaSyBzZO4iVx9mD-Q2NbW9MTg3tFX8bf0wD7U";

export const getTrendingVideos = async () => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&regionCode=BO&key=${API_KEY}`
  );
  const data = response.json();
  console.log(data);
  return data;
};

export const getSearchResult = async (query) => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q=${query}&type=video&videoDefinition=high&key=${API_KEY}`
  );
  const data = response.json();
  return data;
};
