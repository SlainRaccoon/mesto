/** massiv cards */
export const initialCards = [
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
    link: 'https://i.imgflip.com/1mg8z2.jpg'
  },
];

/** start object */
export const enableValidate = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

/** buttons */
export const profileButton = document.querySelector('.profile__edit-btn');
export const placeButton = document.querySelector('.profile__add-btn');

/** modals windows */
export const modals = document.querySelectorAll('.popup');
export const profileModalWindow = document.querySelector('.popup-profile');
export const placeModalWindow = document.querySelector('.popup-place');
export const imageModalWindow = document.querySelector('.popup-view');

/** forms */
export const profileForm = document.querySelector('#form-edit');
export const placeForm = document.querySelector('#form-place');
export const editProfileForm = profileModalWindow.querySelector('#form-edit');
export const addPlaceForm = placeModalWindow.querySelector('#form-place');

/** inputs */
export const nameInput = profileForm.querySelector('#name-input');
export const jobInput = profileForm.querySelector('#job-input');
export const titleProfile = document.querySelector('.profile__name');
export const subtitleProfile = document.querySelector('.profile__subtitle');
export const cardImage = imageModalWindow.querySelector('.popup__picture');
export const cardTitle = imageModalWindow.querySelector('.popup__caption');
export const placeInput = placeForm.querySelector('#place-input');
export const linkInput = placeForm.querySelector('#link-input');

/** template */
export const gallerySection = document.querySelector('.gallery');