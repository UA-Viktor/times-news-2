import axios from 'axios';

const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key';
const KEY = 'CY48BuSsEqEduDKMwmErVtpCE57xSb6m';

export default class ServiceApi {
  async serviceApiData() {
    return await axios.get(`${BASE_URL}=${KEY}`).then(response => {
      return response.data.results;
    });
  }
}
