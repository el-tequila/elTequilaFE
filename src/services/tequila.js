import axios from 'axios';

class TequilaDataService {
    addContact(data) {
        return axios.post(`${process.env.REACT_APP_BE_BASE_URL}/api/requests/contacts`, data);
    }
}
const tequilaDataService = new TequilaDataService();
export default tequilaDataService;
