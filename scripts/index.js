import { initialCards, enableValidate, profileForm, profileButton, profileModalWindow, placeButton, placeModalWindow, placeForm, nameInput, jobInput, titleProfile, subtitleProfile, imageModalWindow, cardImage, cardTitle, gallery, placeInput, linkInput, editProfileForm, addPlaceForm, modals } from "./constants.js";
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
function openModal(popup) {
  popup.classList.add('popup_opened');
  /** add listener Esc button */
  document.addEventListener('keydown', closeModalEscBtn);
};

function closeModal(popup) {
  popup.classList.remove('popup_opened');
  /** remove listener Esc button */
  document.removeEventListener('keydown', closeModalEscBtn);
};

/** function close popup on Esc */
function closeModalEscBtn(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closeModal(openedPopup);
  }
};

modals.forEach((modal) => {
  modal.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup-opened')) {
      closeModal(modal);
    }
    if (evt.target.classList.contains('popup__close-btn')) {
      closeModal(modal);
    }
    if (evt.target === evt.currentTarget) {
      closeModal(modal);
    }
  });
});

/** function open edit profile */
function openProfileModal() {
  nameInput.value = titleProfile.textContent;
  jobInput.value = subtitleProfile.textContent;
  editProfileValidator.resetErrors();
  editProfileValidator.toggleButtonState();
  openModal(profileModalWindow);
};

/** function open add place */
function openPlaceModal() {
  addPlaceValidator.resetErrors();
  addPlaceValidator.toggleButtonState();
  openModal(placeModalWindow);
};

/** function open zoom image */
function openViweImage(name, link) {
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  openModal(imageModalWindow);
};

/** function handler submit profile form */
function handlerProfileFormSubmit(evt) {
  evt.preventDefault();
  titleProfile.textContent = nameInput.value;
  subtitleProfile.textContent = jobInput.value;
  closeModal(profileModalWindow);
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
  closeModal(placeModalWindow);
};


/** listener */
profileButton.addEventListener('click', openProfileModal);
placeButton.addEventListener('click', openPlaceModal);
profileForm.addEventListener('submit', handlerProfileFormSubmit);
placeForm.addEventListener('submit', handlerPlaceFormSubmit);