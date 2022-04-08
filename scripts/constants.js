/** massiv cards */
const initialCards = [
  {
    name: 'Набу',
    link: 'https://kartinkin.net/uploads/posts/2021-04/thumbs/1618103152_7-p-planeta-nabu-zvezdnie-voini-fentezi-10.jpg'
  },
  {
    name: 'Джакку',
    link: 'https://i.pinimg.com/736x/2b/d7/c0/2bd7c01c02784322f682c67b7040f59f--star-destroyer-star-wars-action-figures.jpg'
  },
  {
    name: 'Арвала 7',
    link: 'https://www.jedipedia.net/w/images/8/81/Arvala7.jpg'
  },
  {
    name: 'Корусант',
    link: 'https://avatars.mds.yandex.net/get-zen_doc/4078437/pub_60450121665e4413f3e35e63_604502aa44edc6668121f0e8/scale_1200'
  },
  {
    name: 'Альдераан',
    link: 'https://i.pinimg.com/originals/bc/1c/46/bc1c464836771a88349a73a234fe7f3e.jpg'
  },
  {
    name: 'Мустафар',
    link: 'https://cutewallpaper.org/21/mustafar-background/Lava-Planet-Flytrough-Star-Wars-Mustafar-3D-Animation.jpg'
  }
];

/** start object */
const enableValidate = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

/** constants */
const formEdit = document.querySelector('#form-edit');

const profileButton = document.querySelector('.profile__edit-btn');
const popupEdit = document.querySelector('.popup-edit');
const profilePopupClose = popupEdit.querySelector('.popup__close-btn');

/** new place */
const placeButton = document.querySelector('.profile__add-btn');
const popupPlace = document.querySelector('.popup-place');
const cardAddFormElement = document.querySelector('#form-place');
const placePopupClose = popupPlace.querySelector('.popup__close-btn');

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
const gallery = document.querySelector('.gallery');

/** name, link */
const placeInput = cardAddFormElement.querySelector('#place-input');
const linkInput = cardAddFormElement.querySelector('#link-input');

const editProfileForm = popupEdit.querySelector('#form-edit');
const addPlaceForm = popupPlace.querySelector('#form-place');

export { initialCards, enableValidate, formEdit, profileButton, popupEdit, profilePopupClose, placeButton, popupPlace, cardAddFormElement, placePopupClose, nameInput, jobInput, titleProfile, subtitleProfile, imageOpenPopup, cardImage, cardTitle, imageCloseButton, gallery, placeInput, linkInput, editProfileForm, addPlaceForm }