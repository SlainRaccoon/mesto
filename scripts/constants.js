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

/** buttons */
const profileButton = document.querySelector('.profile__edit-btn');
const placeButton = document.querySelector('.profile__add-btn');

/** modals windows */
const modals = document.querySelectorAll('.popup');
const profileModalWindow = document.querySelector('.popup-edit');
const placeModalWindow = document.querySelector('.popup-place');
const imageModalWindow = document.querySelector('.popup-view');

/** forms */
const profileForm = document.querySelector('#form-edit');
const placeForm = document.querySelector('#form-place');
const editProfileForm = profileModalWindow.querySelector('#form-edit');
const addPlaceForm = placeModalWindow.querySelector('#form-place');

/** inputs */
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#job-input');
const titleProfile = document.querySelector('.profile__name');
const subtitleProfile = document.querySelector('.profile__subtitle');
const cardImage = imageModalWindow.querySelector('.popup__picture');
const cardTitle = imageModalWindow.querySelector('.popup__caption');
const placeInput = placeForm.querySelector('#place-input');
const linkInput = placeForm.querySelector('#link-input');

/** template */
const gallery = document.querySelector('.gallery');

export { initialCards, enableValidate, profileForm, profileButton, profileModalWindow, placeButton, placeModalWindow, placeForm, nameInput, jobInput, titleProfile, subtitleProfile, imageModalWindow, cardImage, cardTitle, gallery, placeInput, linkInput, editProfileForm, addPlaceForm, modals }