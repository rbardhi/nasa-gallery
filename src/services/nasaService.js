import {API_KEY, API_URL} from '../../config/config';

const fetchPhotos = ({pageNumber}) => {
    //errors will be caught in store
    return fetch(`${API_URL}?sol=1000&page=${pageNumber}&api_key=${API_KEY}`)
           .then(response => response.json())
           .then(data => data.photos);
}

export default {
    fetchPhotos,
};