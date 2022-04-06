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
    link: 'https://cutewallpaper.org/21/mustafar-background/Lava-Planet-Flytrough-Star-Wars-Mustafar-3D-Animation.jpg'
  }
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

/** constants */
export const formEdit = document.querySelector('#form-edit');

export const profileButton = document.querySelector('.profile__edit-btn');
export const popupEdit = document.querySelector('.popup-edit');
export const profilePopupClose = popupEdit.querySelector('.popup__close-btn');

/** new place */
export const placeButton = document.querySelector('.profile__add-btn');
export const popupPlace = document.querySelector('.popup-place');
export const cardAddFormElement = document.querySelector('#form-place');
export const placePopupClose = popupPlace.querySelector('.popup__close-btn');

/** inputs edit profile */
export const nameInput = document.querySelector('#name-input');
export const jobInput = document.querySelector('#job-input');
export const titleProfile = document.querySelector('.profile__name');
export const subtitleProfile = document.querySelector('.profile__subtitle');

/** popup zoom image */
export const imageOpenPopup = document.querySelector('.popup-view');
export const cardImage = imageOpenPopup.querySelector('.popup__picture');
export const cardTitle = imageOpenPopup.querySelector('.popup__caption');
export const imageCloseButton = imageOpenPopup.querySelector('.popup__close-btn');

/** template */
export const gallery = document.querySelector('.gallery');

/** name, link */
export const placeInput = cardAddFormElement.querySelector('#place-input');
export const linkInput = cardAddFormElement.querySelector('#link-input');

export const editProfileForm = popupEdit.querySelector('#form-edit');
export const addPlaceForm = popupPlace.querySelector('#form-place');