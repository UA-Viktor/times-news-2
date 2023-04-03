import './js/menu-burger';
import './js/theme-switcher';
import './js/setActiveLink';

import moment from 'moment';

// //
// // Достаем карточки
// //

const newsHTML = document.querySelector('.news-set');

import ServerDataPopular from './js/api-server-popular';
import ServerDataContent from './js/api-server-content';

export const createStart = {
  async popular() {
    const getNewsPopular = new ServerDataPopular();
    getNewsPopular.serverDataApi().then(news => {
      renderNews(news);

      console.log(news);
    });
  },
  // async category(cat) {
  //   const getNewsContent = new ServerDataContent();
  //   getNewsContent.query = 'world';
  //   getNewsContent.serverDataApi().then(news => {
  //     renderNews(news);
  //   });
  // },
};

createStart.popular();

function btnCl() {}

// const getNewsPopular = new ServerDataPopular();
// getNewsPopular.serverDataApi().then(news => {
//   renderNews(news);
// });

// const getNewsContent = new ServerDataContent();
// getNewsContent.query = 'world';
// getNewsContent.serverDataApi().then(news => {
//   // renderNews(news);
// });

function renderNews(news) {
  newsHTML.insertAdjacentHTML('beforeend', renderNewsCard(news));
}

function renderNewsCard(news) {
  return news
    .map(({ foto, section, title, abstract, date, url, like, read }) => {
      return `
          <li class="news-item">
            <article class="news-item__product">
              <div class="news-item__thumb">
                <img
                  src="${foto}"
                  alt="foto">
                <button class="news-item__button">
                  Add to favotite
                  <svg class="form-button-svg" width="20" height="20">
                    <use class="news-icon-like" href="./images/symbol-defs.svg#icon-heart_empty"></use>
                    <use class="news-icon-dis_like" href="./images/symbol-defs.svg#icon-heart_full"></use>
                  </svg>
                </button>
                <div class="">${section}</div>
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
                  <span class="news-item__info-data">${date}</span>
                  <button class="news-item__info-button">
                  <a href="${url}" target="_blank" class=news-item__info-a>
                  Read more
                  </a>
                  </button>
                </div>
              </div>
            </article>
          </li>
    `;
    })
    .join('');
}

const buttons = document.querySelectorAll('.news-item__info-button'); // находим все кнопки с классом "news-item__info-button"

buttons.forEach(button => {
  // перебираем все кнопки
  button.addEventListener('click', function (event) {
    // добавляем обработчик события "click"
    event.preventDefault(); // отменяем стандартное поведение браузера при клике на ссылку

    const link = this.querySelector('.news-item__info-a').getAttribute('href'); // находим элемент "a" внутри текущей кнопки и получаем ссылку из атрибута "href"

    console.log(link); // выводим ссылку в консоль (можно заменить на любой другой код для дальнейшей обработки)
    return link;
  });
});
