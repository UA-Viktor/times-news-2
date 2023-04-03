import axios from 'axios';
import moment from 'moment';

const BASE_URL_POPULAR =
  'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key';

const KEY = 'CY48BuSsEqEduDKMwmErVtpCE57xSb6m';

export default class ServerDataPopular {
  async serverDataApi() {
    return await axios.get(`${BASE_URL_POPULAR}=${KEY}`).then(response => {
      return this.getNewStructure(response.data.results);
      // return response.data.results;
    });
  }

  getNewStructure(oldArray) {
    return oldArray.map(news => {
      const dateNew = moment(news.published_date).format('DD/MM/YYYY');
      return {
        foto: news.media[0]?.['media-metadata'][2].url,
        section: news.section,
        title: news.title,
        abstract: news.abstract,
        date: dateNew,
        url: news.url,
        like: false,
        read: false,
      };
    });
  }
}
