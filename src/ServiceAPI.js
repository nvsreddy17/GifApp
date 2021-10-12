export const getAPI = (url, callback) => {
  fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh"
  )
    .then((resp) => resp.json())
    .then((data) => {
      callback(data.data);
    });
};
