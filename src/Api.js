import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '20c6b3c90bff4fd12c41ea0afbe62da9';

export const fetchHome = async () => {
  const { data } = await axios.get(
    `/trending/all/day?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};

export const fetchMoveDetals = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchCast = async id => {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
};

export const fetchReviews = async id => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};

export const fetchSeachMovie = async seachMovie => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${seachMovie}&page=1&language=en-US`
  );
  return data.results;
};
