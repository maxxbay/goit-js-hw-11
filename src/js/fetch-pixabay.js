import axios from 'axios';

export default async function fetchPixabay(data, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '29299324-233d663356da850f100b84c7a';
  const PARAMETRES = `key=${KEY}&q=${data}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
  return await axios.get(`${BASE_URL}?${PARAMETRES}`).then(res => res.data);
}
