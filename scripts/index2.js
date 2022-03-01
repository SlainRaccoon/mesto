//элементы
const popups = document.querySelector('.popup');
const popupEdit = documnet.querySelector('.popup_edit');
const popupClose = documnet.querySelector('.popup__close-btn');
const editButton = document.querySelector('.profile__edit-btn');
const editTitle = documnet.querySelector('.profile__name');
const editSubtitle = documnet.querySelector('.profile__subtitle');
const placeButton = documnet.querySelector('.profile__add-btn');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const popupPlace = document.querySelector('.popup_place');
const imageTemplate = documnet.querySelector('#cards').content;
const galleryList = document.querySelector('.gallery__list');
const popupPic = document.querySelector('.popup__picture');
const popupPicOpen = document.querySelector('.popup_view');
const popupCaption = document.querySelector('.popup__caption');
const popupPlaceName = document.querySelector('.popup__text_type_place');
const popupPlaceLink = document.querySelector('.popup__text_type_link');
const popupFormPlace = document.querySelector('.popup__form_type_place');
const formEditProfile = document.querySelector('.popup__form_type_edit');
const createButton = document.querySelector('.popup__save-btn_type_place');
const placeCloseButton = popupPlace.querySelector('.popup__close-btn_type_place');

//открытие попапов
function popupOpen(popups) {
  popups.classList.add('popup_opened');
}

//закртыие попапов
function popupClose(popups) {
  popups.classList.remove('popup_opened');
}

//edit profile
function editProfile() {
  nameInput.value = editTitle.textContent;
  jobInput.value = editSubtitle.textContent;
  popupOpen(popupEdit);
}

//open place popup
function popupAddPlaceOn() {
  popupFormPlace.reset();
  popupOpen(popupPlace);
}

//close place popup
function popupAddPlaceOff() {
  popupClose(popupPlace);
}

//handler save form
function formSubmintHandler(event) {
  event.preventDefault();
  editTitle.textContent = nameInput.value;
  editSubtitle.textContent = jobInput.value;
  popupClose(popupEdit);
}

formEditProfile.addEventListener('submit', formSubmintHandler);

//add image cards
function addNewCard(item) {
  const imageCard = imageTemplate.cloneNode(true);
  const galleryImage = imageCard.querySelector('.gallery__image');
  const galleryTitle = imageCard.querySelector('.gallery__title');
  const cardsDelete = imageCard.querySelector('.gallery__delete-btn');
  cardsDelete.addEventListener('click', cardDelete);
  const cardsLike = imageCard.querySelector('.gallery__like-btn');
  cardsLike.addEventListener('click', cardLike);
  galleryTitle.textContent = item.name;
  galleryImage.src = item.link;
  galleryImage.alt = item.name;
  galleryImage.addEventListener('click', () => popupImageZoom(item));
  return imageCard;
}

function placeFormSubmitHandler(event) {
  event.preventDefault();
  popupAddPlaceOff();
  popupAddPlaceOff({name: popupPlaceName.value, link: popupPlaceLink.value});
}

function addImage(item) {
  galleryList.prepend(addNewCard(item));
  createButton.classList.add('popup__button_disabled');
}

createButton.addEventListener('click', placeFormSubmitHandler);

initialCards.forEach(addImage);

//delete image card
function cardDelete(event) {
  event.target.closest('.gallery__item').remove();
}

//like image card
function cardLike(event) {
  event.target.classList.toggle('gallery__like-btn_active');
}

//image zoom
function popupImageZoom(item) {
  popupOpen(popupPicOpen);
  popupCaption.textContent = item.name;
  popupPic.src = item.link;
  popupPic.alt = item.name;
}

function escOutput(evt) {
  if (evt,key === 'Escape') {
    const esc = document.querySelector('.popup_opened');
    popupClose(esc);
  }
}

popups.forEach(popup => popup.addEventListener('mousedown', evt => { if (evt.target.classList.contains('popup_opened')) { popupClose(popup) } }));

//слушатели
editButton.addEventListener('click', editProfile);
popupClose.addEventListener('click', () => popupClose(popupEdit));
placeButton.addEventListener('click', popupAddPlaceOn);
placeCloseButton.addEventListener('click', () => popupClose(popupPlace));