export const enableValidate = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

export const modals = document.querySelectorAll('.popup');
export const template = '#cards';
export const gallerySection = document.querySelector('.gallery');

export const editProfile = {
  profileButton: document.querySelector('.profile__edit-btn'),
  profileModalWindow: document.querySelector('.popup-profile'),
  titleProfile: document.querySelector('.profile__name'),
  subtitleProfile: document.querySelector('.profile__subtitle'),
  profileForm: document.querySelector('#form-edit'),
  nameInput: document.querySelector('#name-input'),
  jobInput: document.querySelector('#job-input'),
  saveButton: document.querySelector('.popup__save-btn'),
  avatarButton: document.querySelector('.profile__avatar-btn'),
  avatarModalWindow: document.querySelector('.popup-avatar'),
  avatarForm: document.querySelector('.popup-avatar'),
}

export const editPlace = {
  placeButton: document.querySelector('.profile__add-btn'),
  placeModalWindow: document.querySelector('.popup-place'),
  placeForm: document.querySelector('#form-place'),
  placeInput: document.querySelector('#place-input'),
  linkInput: document.querySelector('#link-input'),
}

export const zoomImage = {
  imageModalWindow: document.querySelector('.popup-view'),
  cardImage: document.querySelector('.popup__picture'),
  cardTitle: document.querySelector('.popup__caption')
}