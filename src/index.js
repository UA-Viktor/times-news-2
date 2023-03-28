import './js/menu-burger';
import './js/theme-switcher';

import moment from 'moment';

// //

// // Достаем карточки

// //

import ServiceApi from './js/api-server';

const newsHTML = document.querySelector('.news-set');

const getDataNews = new ServiceApi();
getDataNews.serviceApiData().then(news => {
  renderNews(news);
});

function renderNews(news) {
  newsHTML.insertAdjacentHTML('beforeend', renderNewsCard(news));
}

function renderNewsCard(news) {
  return news
    .map(({ title, abstract, multimedia, published_date }) => {
      const dateNew = moment(published_date).format('DD/MM/YYYY');
      return `
          <li class="news-item">
            <article class="news-item__product">
              <div class="news-item__thumb">
                <img
                  src="${multimedia[0].url}"
                  alt="foto">
                <button class="news-item__button">
                  Add to favotite
                  <svg class="form-button-svg" width="20" height="20">
                    <use class="news-icon-like" href="./images/symbol-defs.svg#icon-heart_empty"></use>
                    <use class="news-icon-dis_like" href="./images/symbol-defs.svg#icon-heart_full"></use>
                  </svg>
                </button>
              </div>

              <div class="news-item__content">
                <a href="index.html" class="news-item__link">
                  <h2 class="news-item__heading">
                    ${title}
                  </h2>
                </a>

                <p class="news-item__text">
                  ${abstract}...</p>
                <div class="news-item__info">
                  <span class="news-item__info-data">${dateNew}</span>
                  <button class="news-item__info-button">Read more</button>
                </div>
              </div>
            </article>
          </li>
    `;
    })
    .join('');
}
