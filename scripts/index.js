//элементы
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const title = document.querySelector('.profile__name');
const subtitle = document.querySelector('.profile__subtitle');
const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close-btn');


//функция открытия и закрытия попапа
function popupON() {
  popup.classList.add('popup_opened');
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
}

function popupOff() {
  popup.classList.remove('popup_opened');
}

//функция отправки данных по кнопке "сохранить"
function formSubmitHandler(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  popupOff();
}

//слушатели
editButton.addEventListener('click', popupON);
closeButton.addEventListener('click', popupOff);
formElement.addEventListener('submit', formSubmitHandler);

const initialCards = [
  {
    name: 'Камчатка',
    link: '../../images/kamchatka.jpg'
  },
  {
    name: 'Карелия',
    link: '../../images/karelia.jpg'
  },
  {
    name: 'Мурманск',
    link: '../../images/murmansk.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: '../../images/piter.jpg'
  },
  {
    name: 'Тулиновка',
    link: '../../images/tulinovka.jpg'
  },
  {
    name: 'Ольхон',
    link: '../../images/olhon.jpg'
  }
];


//template
const templateCards = document.querySelector('#cards').content;
const gallery = document.querySelector('.gallery');

function creatCard(item) {
  const galleryCards = templateCards.querySelector('.gallery__list').cloneNode(true);
  const galleryImage = galleryCards.querySelector('.gallery__image');
  const galleryTitle = galleryCards.querySelector('.gallery__title');
  galleryTitle.textContent = item.name;
  galleryImage.alt = item.name;
  galleryImage.src = item.link;
  gallery.append(galleryCards);
};

function creatCards() {
  initialCards.forEach(function (element) {
    creatCard(element);
  });
};

creatCards(initialCards);

// let nameInput = document.querySelector('.popup__text_type_name');
// let jobInput = document.querySelector('.popup__text_type_job');
// let title = document.querySelector('.profile__name');
// let subtitle = document.querySelector('.profile__subtitle');
// let editButton = document.querySelector('.profile__edit-btn');
// let closeButton = document.querySelector('.popup__close-btn');


// //функция открытия и закрытия попапа
// function popupON() {
//   popup.classList.add('popup_opened');
//   nameInput.value = title.textContent;
//   jobInput.value = subtitle.textContent;
// }

// function popupOff() {
//   popup.classList.remove('popup_opened');
// }

// //функция отправки данных по кнопке "сохранить"
// function formSubmitHandler(evt) {
//   evt.preventDefault();
//   title.textContent = nameInput.value;
//   subtitle.textContent = jobInput.value;
//   popupOff();
// }

// //слушатели
// editButton.addEventListener('click', popupON);
// closeButton.addEventListener('click', popupOff);
// formElement.addEventListener('submit', formSubmitHandler);
