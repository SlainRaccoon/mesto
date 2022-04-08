import { initialCards, enableValidate, formEdit, profileButton, popupEdit, profilePopupClose, placeButton, popupPlace, cardAddFormElement, placePopupClose, nameInput, jobInput, titleProfile, subtitleProfile, imageOpenPopup, cardImage, cardTitle, imageCloseButton, gallery, placeInput, linkInput, editProfileForm, addPlaceForm } from "./constants.js";
import { FormValidator } from "./FormValidator.js"
import { Card } from "./Card.js";

const editProfileValidator = new FormValidator(enableValidate, editProfileForm);
const addPlaceValidator = new FormValidator(enableValidate, addPlaceForm);

editProfileValidator.enableValidation();
addPlaceValidator.enableValidation();

function createCard(item) {
  const card = new Card(item, '#cards', openViweImage);
  const cardElement = card.addCard();

  return cardElement;
}

/** render 6 cards from massiv */
initialCards.forEach(function (el) {
  const cardElement = createCard(el);

  gallery.append(cardElement);
});

/** function open and close popup */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  /** add listener Esc button */
  document.addEventListener('keydown', closePopupEscBtn);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  /** remove listener Esc button */
  document.removeEventListener('keydown', closePopupEscBtn);
};

/** function close popup on Esc */
function closePopupEscBtn(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

/** function close popup on overlay */
function closePopupOverlay(popup) {
  return function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    };
  };
};

/** function open edit profile */
function openProfilePopup() {
  nameInput.value = titleProfile.textContent;
  jobInput.value = subtitleProfile.textContent;
  editProfileValidator.resetErrors();
  editProfileValidator.toggleButtonState();
  openPopup(popupEdit);
};

/** function open add place */
function openPlacePopup() {
  addPlaceValidator.resetErrors();
  addPlaceValidator.toggleButtonState();
  openPopup(popupPlace);
};

/** function open zoom image */
function openViweImage(name, link) {
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  openPopup(imageOpenPopup);
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

  const data = {
    name: placeInput.value,
    link: linkInput.value
  }
  const newCardCreate = createCard(data);

  gallery.prepend(newCardCreate);
  closePopup(popupPlace);
};

/** listener */
profileButton.addEventListener('click', openProfilePopup);
profilePopupClose.addEventListener('click', () => closePopup(popupEdit));
formEdit.addEventListener('submit', handlerProfileFormSubmit);

placeButton.addEventListener('click', openPlacePopup);
placePopupClose.addEventListener('click', () => closePopup(popupPlace));
cardAddFormElement.addEventListener('submit', handlerPlaceFormSubmit);

imageCloseButton.addEventListener('click', () => closePopup(imageOpenPopup));

popupEdit.addEventListener('click', closePopupOverlay(popupEdit));
popupPlace.addEventListener('click', closePopupOverlay(popupPlace));
imageOpenPopup.addEventListener('click', closePopupOverlay(imageOpenPopup));