import axios from 'axios';

class TequilaDataService {
    addContact(data) {
        // return axios.post(`${process.env.REACT_APP_API_BASE_URL}http://localhost:5001/api/requests/contacts`, data);
        return axios.post(`http://localhost:5001/api/requests/contacts`, data);
    }
}
export default new TequilaDataService();