import axios from 'axios';
import moment from 'moment';

const BASE_URL_CONTENT = 'https://api.nytimes.com/svc/news/v3/content/inyt';
const KEY = 'CY48BuSsEqEduDKMwmErVtpCE57xSb6m';

export default class ServerDataContent {
  constructor() {
    this.сategory = '';
  }

  async serverDataApi() {
    return await axios
      .get(`${BASE_URL_CONTENT}/${this.сategory}.json?api-key=${KEY}`)
      .then(response => {
        return this.getNewStructure(response.data.results);
        // return response.data.results;
      });
  }

  getNewStructure(oldArray) {
    return oldArray.map(obj => {
      const dateNew = moment(obj.published_date).format('DD/MM/YYYY');
      return {
        foto: obj.multimedia[0].url,
        section: obj.section,
        title: obj.title,
        abstract: obj.abstract,
        date: dateNew,
        url: obj.url,
        like: false,
        read: false,
      };
    });
  }

  get query() {
    return this.сategory;
  }

  set query(newСategory) {
    this.сategory = newСategory;
  }
}
