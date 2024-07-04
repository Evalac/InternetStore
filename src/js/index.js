import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
console.log(basicLightbox);
// {
//   // setItem - add value
//   // getItem - get value
//   // removeItem - delete item
//   // clear - delete all
//   localStorage.setItem('TEST_KEY', 'Hello world');
//   localStorage.setItem('Array', JSON.stringify([1, 2, 3, 4, 5])); // тільки таким чином можна додати масив в локальне сховище щоб його потім можна було витягнути  JSON.stringify()
//   localStorage.setItem('Object', JSON.stringify({ name: 'mango' }));
//   // localStorage.removeItem('TEST_KEY');

//   console.log(localStorage.getItem('TEST_KEY'));
//   console.log(JSON.parse(localStorage.getItem('Array')));
//   console.log(JSON.parse(localStorage.getItem('Object')));

//   const localBtn = document.querySelector('.js-local');
//   const sessionBtn = document.querySelector('.js-session');
//   localBtn.addEventListener('click', () => {
//     localStorage.setItem('local', 'Storage');
//   });

//   sessionBtn.addEventListener('click', () => {
//     sessionStorage.setItem('session', 'Storage');
//   });
// }

const instruments = [
  {
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_316727.jpg',
    name: 'Молоток',
    price: 10.99,
    description:
      "Міцний сталевий молоток з дерев'яною ручкою, підходить для загального використання.",
  },
  {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/2801/catalog_origin_323389.jpg',
    name: 'Викрутка',
    price: 5.49,
    description:
      'Викрутка з хрестоподібним наконечником, ідеальна для загвинчування шурупів.',
  },
  {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/4925/catalog_origin_326985.jpg',
    name: 'Ключ',
    price: 7.89,
    description:
      'Регульований ключ для затягування та відкручування гайок різних розмірів.',
  },
  {
    id: 4,
    img: 'https://static.dnipro-m.ua/cache/products/2782/catalog_origin_316783.jpg',
    name: 'Плоскогубці',
    price: 8.25,
    description:
      'Універсальні плоскогубці з гумовими ручками для зручного захвату.',
  },
  {
    id: 5,
    img: 'https://static.dnipro-m.ua/cache/products/2996/catalog_origin_317283.jpg',
    name: 'Пила',
    price: 12.3,
    description:
      'Ручна пила з загартованими зубцями для легкого різання деревини.',
  },
  {
    id: 6,
    img: 'https://static.dnipro-m.ua/cache/products/2193/catalog_origin_326103.jpg',
    name: 'Рулетка',
    price: 4.99,
    description:
      "Рулетка з м'яким корпусом та висувною стрічкою довжиною 5 метрів.",
  },
  {
    id: 7,
    img: 'https://static.dnipro-m.ua/cache/products/2022/catalog_origin_323412.jpg',
    name: 'Рівень',
    price: 6.75,
    description:
      'Будівельний рівень для точної перевірки горизонтальних та вертикальних поверхонь.',
  },
  {
    id: 8,
    img: 'https://static.dnipro-m.ua/cache/products/5883/catalog_origin_320255.jpg',
    name: 'Канцелярський ніж',
    price: 3.49,
    description: 'Ніж з висувним лезом для точного різання паперу та картону.',
  },
  {
    id: 9,
    img: 'https://static.dnipro-m.ua/cache/products/1219/catalog_origin_325151.jpg',
    name: 'Дриль',
    price: 49.99,
    description: 'Електричний дриль з набором свердел для різних матеріалів.',
  },
  {
    id: 10,
    img: 'https://static.dnipro-m.ua/cache/products/1452/catalog_origin_317290.jpg',
    name: 'Шліфувальна машина',
    price: 35.6,
    description:
      'Електрична шліфувальна машина для обробки деревини та металу.',
  },
];

const search = document.querySelector('.js-search');
const markupInstrument = createMarkup(instruments);

const cartEl = document.querySelector('.js-list');
cartEl.innerHTML = markupInstrument;

function createMarkup(instruments) {
  return instruments
    .map(({ id, img, name, price, description }) => {
      return `<li class="cart--Iteam" data-id="${id}">
        <img src="${img}" alt="${name}" width="300px" />
        <h1 class="item--Name">${name}</h1>
        <p ><a class="js-info" href="#">More information</a></p>
        <div>
        <button>Add to favorite</button>
        <button>Add to basket</button>
        </div>
      </li>`;
    })
    .join('');
}
cartEl.addEventListener('click', onclick);

function onclick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const { id } = evt.target.closest('.cart--Iteam').dataset; // візьми з нашого елемента по якому ми клікнули першого батька з классом '.cart--Iteam' і з його властивусті дай дата атребут
    const product = findProduct(Number(id));
    console.log(product);

    onOpenModal(product);
  }
}

function findProduct(productId) {
  return instruments.find(({ id }) => id === productId);
}

function onOpenModal(product) {
  const instance = basicLightbox.create(
    `  <div class="modal">
      <img src="${product.img}" alt="${product.name}" width="150px" />
      <h2>${product.name}</h2>
      <h3>${product.price}$</h3>
      <p>${product.description}</p>
      <div><button>Add to Favorite</button><button>Add to Basket</button></div>
    </div>
`
  );
  instance.show();
  console.log('повинна відкритись модалка');
}
