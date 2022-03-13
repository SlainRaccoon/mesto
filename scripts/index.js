/** elements forms */
const formElement = document.querySelector('#form-edit');
const formPlace = document.querySelector('#form-place');
const formElementSubmitButton = formElement.querySelector('.popup__save-btn');

/** edit profile */
const profileButton = document.querySelector('.profile__edit-btn');
const popupEdit = document.querySelector('.popup-edit');
const profilePopupClose = popupEdit.querySelector('.popup__close-btn');

/** new place */
const placeButton = document.querySelector('.profile__add-btn');
const popupPlace = document.querySelector('.popup-place');
const cardAddFormElement = document.querySelector('#form-place');
const placePopupClose = popupPlace.querySelector('.popup__close-btn');
const cardAddFormSubmitButton = cardAddFormElement.querySelector('.popup__save-btn');

/** inputs edit profile */
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#job-input');
const titleProfile = document.querySelector('.profile__name');
const subtitleProfile = document.querySelector('.profile__subtitle');

/** popup zoom image */
const imageOpenPopup = document.querySelector('.popup-view');
const cardImage = imageOpenPopup.querySelector('.popup__picture');
const cardTitle = imageOpenPopup.querySelector('.popup__caption');
const imageCloseButton = imageOpenPopup.querySelector('.popup__close-btn');

/** template */
const templateCards = document.querySelector('#cards').content;
const gallery = document.querySelector('.gallery');

const placeInput = cardAddFormElement.querySelector('#place-input');
const linkInput = cardAddFormElement.querySelector('#link-input');


/** function create new card */
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
};

/** render 6 cards from massiv */
initialCards.forEach(item => {
  gallery.append(addCard(item.name, item.link));
});

/** function open zoom image */
function openImage(evt) {
  const imageTarget = evt.target;
  cardImage.src = imageTarget.src;
  cardImage.alt = imageTarget.alt;
  cardTitle.textContent = imageTarget.alt;
  openPopup(imageOpenPopup);
};

/** function like */
function pressLike(evt) {
  evt.target.classList.toggle('gallery__like-btn_active');
};

/** function delete */
function deleteCard(evt) {
  evt.target.closest('.gallery__list').remove();
};

/** function open and close popup */
function openPopup(anyPopup) {
  anyPopup.classList.add('popup_opened');
  /** add listener Esc button */
  document.addEventListener('keydown', closePoppEscBtn(anyPopup));
};

const closePopup = function (anyPopup) {
  anyPopup.classList.remove('popup_opened');
  /** remove listener Esc button */
  document.removeEventListener('keydown', closePoppEscBtn(anyPopup));
};

/** function open edit profile */
function openProfilePopup() {
  nameInput.value = titleProfile.textContent;
  hideInputError(formElement, nameInput, enableValidate.inputErrorClass, enableValidate.errorClass);
  jobInput.value = subtitleProfile.textContent;
  hideInputError(formElement, jobInput, enableValidate.inputErrorClass, enableValidate.errorClass);
  enableSubmitButton(formElementSubmitButton, enableValidate.inactiveButtonClass);
  openPopup(popupEdit);
};

/** function open add place */
function openPlacePopup() {
  formPlace.reset();
  hideInputError(cardAddFormElement, placeInput, enableValidate.inputErrorClass, enableValidate.errorClass);
  hideInputError(cardAddFormElement, linkInput, enableValidate.inputErrorClass, enableValidate.errorClass);
  disableSubmitButton(cardAddFormSubmitButton, enableValidate.inactiveButtonClass);
  openPopup(popupPlace);
};

/** function handler submit profile form */
function handlerProfileFormSubmit(evt) {
  evt.preventDefault();
  titleProfile.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;
  closePopup(popupEdit);
};

/** function handler submit add place */
function handlerPlaceFormSubmit(evt) {
  evt.preventDefault();
  const newCardCreate = addCard(placeInput.value, linkInput.value);
  gallery.prepend(newCardCreate);
  closePopup(popupPlace);
};

/** function close popup on overlay */
function closePopupOverlay(anyPopup) {
  return function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(anyPopup);
    };
  };
};

/** function close popup on Esc */
function closePoppEscBtn(anyPopup) {
  return function (evt) {
    if (evt.key === 'Escape') {
      closePopup(anyPopup);
    };
  };
};

/** listener */
profileButton.addEventListener('click', openProfilePopup);
profilePopupClose.addEventListener('click', () => closePopup(popupEdit));
formElement.addEventListener('submit', handlerProfileFormSubmit);

placeButton.addEventListener('click', openPlacePopup);
placePopupClose.addEventListener('click', () => closePopup(popupPlace));
cardAddFormElement.addEventListener('submit', handlerPlaceFormSubmit);

imageCloseButton.addEventListener('click', () => closePopup(imageOpenPopup));

popupEdit.addEventListener('click', closePopupOverlay(popupEdit));
popupPlace.addEventListener('click', closePopupOverlay(popupPlace));
imageOpenPopup.addEventListener('click', closePopupOverlay(imageOpenPopup));