import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '37408613-d3e7a4c0184cf3ce3e63dcb61';

export const getPixabayImages = async (query, page) => {
  const { data } = await axios({
    params: {
      q: query,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return data;
};
