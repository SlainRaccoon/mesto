//элементы
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const formEdit = document.querySelector('.popup__form_type_edit');
const formPlace = document.querySelector('.popup__form_type_place');

//редактор профиля
const editButton = document.querySelector('.profile__edit-btn');
const popupEdit = document.querySelector('.popup-edit');
const closeEditPopup = popupEdit.querySelector('.popup__close-btn');

//новое место
const placeButton = document.querySelector('.profile__add-btn');
const popupPlace = document.querySelector('.popup-place');
const closePlacePopup = popupPlace.querySelector('.popup__close-btn');

//инпуты
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');

//текст конткнт
const editTitle = document.querySelector('.profile__name');
const editSubtitle = document.querySelector('.profile__subtitle');

//переменные для попапа зум пик
const imageOpenPopup = document.querySelector('.popup-view');
const cardImage = imageOpenPopup.querySelector('.popup__picture');
const cardTitle = imageOpenPopup.querySelector('.popup__caption');
const imageCloseButton = imageOpenPopup.querySelector('.popup__close-btn');

//массив карточек
const initialCards = [
  {
    name: 'Камчатка',
    link: '/images/kamchatka.jpg'
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

//
const templateCards = document.querySelector('#cards').content;
const gallery = document.querySelector('.gallery');
const cardAddFormElement = document.querySelector('#add-place');
const placeInput = cardAddFormElement.querySelector('.popup__text_type_place');
const linkInput = cardAddFormElement.querySelector('.popup__text_type_link');


//функция создания карточки
function addCard(itemName, itemLink) {
  const galleryCrad = templateCards.cloneNode(true);
  const galleryCardImage = galleryCrad.querySelector('.gallery__image');
  const galleryCardTitle = galleryCrad.querySelector('.gallery__title');

  galleryCardTitle.textContent = itemName;
  galleryCardImage.src = itemLink;
  galleryCardImage.alt = itemName;

  galleryCardImage.addEventListener('click', openImage);
  galleryCrad.querySelector('.gallery__like-btn').addEventListener('click', pressLike);
  galleryCrad.querySelector('.gallery__delete-btn').addEventListener('click', deleteCard);

  return galleryCrad;
}

//рендер 6 карточек из массива
initialCards.forEach(item => {
  gallery.append(addCard(item.name, item.link));
});

//функция попапа зум картинки
function openImage(evt) {
  const imageTarget = evt.target;
  cardImage.src = imageTarget.src;
  cardImage.alt = imageTarget.alt;
  cardTitle.textContent = imageTarget.alt;
  addPopup(imageOpenPopup);
}

//функция лайка
function pressLike(evt) {
  evt.target.classList.toggle('gallery__like-btn_active');
}

//функция удаления
function deleteCard(evt) {
  evt.target.closest('.gallery__list').remove();
}

//функция открытия и закрытия попапа
function addPopup(anyPopup) {
  anyPopup.classList.add('popup_opened');
}
const removePopup = function(anyPopup) {
  anyPopup.classList.remove('popup_opened');
}

//функция открытия редактора
function openProfilePopup() {  
  nameInput.value = editTitle.textContent;
  jobInput.value = editSubtitle.textContent;
  addPopup(popupEdit);
}

function openPlacePopup() {
  addPopup(popupPlace);
}

//функция отправки данных по кнопке "сохранить"
function formSubmitHandler(evt) {
  evt.preventDefault();
  editTitle.textContent = nameInput.value;
  editSubtitle.textContent = jobInput.value;
  removePopup(popupEdit);
}

//функция открытия добавления карточки
function placeFormSubmitHandler(evt) {
  evt.preventDefault();
  const newCardCreate = addCard(placeInput.value, linkInput.value);
  gallery.prepend(newCardCreate);
  removePopup(popupPlace);
}

//слушатели
editButton.addEventListener('click', openProfilePopup);
closeEditPopup.addEventListener('click', () => removePopup(popupEdit));
formElement.addEventListener('submit', formSubmitHandler);

placeButton.addEventListener('click', openPlacePopup);
closePlacePopup.addEventListener('click', () => removePopup(popupPlace));
cardAddFormElement.addEventListener('submit', placeFormSubmitHandler);

imageCloseButton.addEventListener('click', () => removePopup(imageOpenPopup));
