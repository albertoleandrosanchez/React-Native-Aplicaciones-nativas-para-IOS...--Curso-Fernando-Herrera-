import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '46b621dee8f0a395e8ec34fdd45122d2',
    language: 'es-ES',
  },
});

export default movieDB;
