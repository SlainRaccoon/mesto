import "./index.css"

import {
  initialCards,
  enableValidate,
  editProfileForm,
  addPlaceForm,
  profileButton,
  placeButton,
  gallerySection,
  nameInput,
  jobInput,
} from "../utils/constants.js";

import { FormValidator } from "../components/FormValidator.js"
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

const section = new Section({ items: initialCards, renderer: render }, '.gallery');
const imagePopup = new PopupWithImage('.popup-view');
const profilePopup = new PopupWithForm('.popup-profile', handleProfileFormSubmit);
const addPlacePopup = new PopupWithForm('.popup-place', handlePlaceFormSubmit);

/** form validation */
const editProfileValidator = new FormValidator(enableValidate, editProfileForm);
const addPlaceValidator = new FormValidator(enableValidate, addPlaceForm);

editProfileValidator.enableValidation();
addPlaceValidator.enableValidation();

/** Section start 6 cards*/
function render(card) {
  const cardElement = createCard(card);
  gallerySection.append(cardElement);
}

/** add new Card */
function createCard(data) {
  const card = new Card(data, '#cards', () => {
    imagePopup.open(data.name, data.link);
  });
  return card.createCard();
}

/** Modal profile*/
function openProfilePopup() {
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;

  profilePopup.open();
}

function handleProfileFormSubmit({ name, job }) {
  userInfo.setUserInfo(name, job);
  profilePopup.close();
}

/**Modal new place */
function openPlacePopup() {
  addPlaceValidator.resetErrors();
  addPlaceValidator.toggleButtonState();

  addPlacePopup.open();
}

function handlePlaceFormSubmit(data) {
  const cardElement = createCard({
    name: data.place,
    link: data.link
  });
  section.addItem(cardElement);

  addPlacePopup.close();
}

/** User Info */
const userInfo = new UserInfo({
  profileName: '.profile__name',
  profileJob: '.profile__subtitle'
});

section.renderItems();

profileButton.addEventListener('click', openProfilePopup);
placeButton.addEventListener('click', openPlacePopup);

imagePopup.setEventListeners();
addPlacePopup.setEventListeners();
profilePopup.setEventListeners();