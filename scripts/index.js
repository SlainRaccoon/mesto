import { initialCards, enableValidate, formEdit, profileButton, popupEdit, profilePopupClose, placeButton, popupPlace, cardAddFormElement, placePopupClose, nameInput, jobInput, titleProfile, subtitleProfile, imageOpenPopup, imageCloseButton, gallery, placeInput, linkInput, editProfileForm, addPlaceForm } from "./constants.js";
import { FormValidator } from "./FormValidator.js"
import { Card } from "./Card.js";
import { closePopup, openProfilePopup, openPlacePopup, closePopupOverlay, openViweImage } from "./utils.js"

export const editProfileValidator = new FormValidator(enableValidate, editProfileForm);
export const addPlaceValidator = new FormValidator(enableValidate, addPlaceForm);

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