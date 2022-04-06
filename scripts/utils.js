import { nameInput, jobInput, cardImage, cardTitle, imageOpenPopup, popupEdit, popupPlace, titleProfile, subtitleProfile } from "./constants.js"
import { editProfileValidator, addPlaceValidator } from "./index.js"

/** function open and close popup */
function openPopup(anyPopup) {
  anyPopup.classList.add('popup_opened');
  /** add listener Esc button */
  document.addEventListener('keydown', closePoppEscBtn(anyPopup));
};

function closePopup(anyPopup) {
  anyPopup.classList.remove('popup_opened');
  /** remove listener Esc button */
  document.removeEventListener('keydown', closePoppEscBtn(anyPopup));
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

/** function open zoom image */
function openViweImage(name, link) {
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  openPopup(imageOpenPopup);
};

export { openPopup, closePopup, openProfilePopup, openPlacePopup, closePopupOverlay, openViweImage }