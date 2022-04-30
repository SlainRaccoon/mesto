import "./index.css"

import { 
  initialCards,
  enableValidate,
  editProfileForm,
  addPlaceForm, 
  profileButton,
  placeButton,
  profileModalWindow,
  placeModalWindow,
  imageModalWindow,
  titleProfile,
  subtitleProfile,
  gallery,
} from "../utils/constants.js";

import { FormValidator } from "../components/FormValidator.js"
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

/** form validation */
const editProfileValidator = new FormValidator(enableValidate, editProfileForm);
const addPlaceValidator = new FormValidator(enableValidate, addPlaceForm);

editProfileValidator.enableValidation();
addPlaceValidator.enableValidation();

/** add new Card */
const createCard = (item) => {
  const card = new Card(item, '#cards', () => {popupBigImage.open(item)});

    return card.createCard();
}

/** Section start 6 cards*/
const sectionCards = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    sectionCards.addItem(card);
  }
}, gallery);

sectionCards.renderItems();

/** User Info */
const userInfo = new UserInfo({ name: titleProfile, job: subtitleProfile });

/** Modal profile*/
const popupEditProfile = new PopupWithForm(profileModalWindow, (userData) => {
    userInfo.setUserInfo(userData);

    popupEditProfile.close();
  });

  profileButton.addEventListener('click', () => {
    editProfileValidator.resetErrors();
    popupEditProfile.setInputValues(userInfo.getUserInfo());
    popupEditProfile.open();
  });

  popupEditProfile.setEventListeners();

  /**Modal new place */
const popupNewPlace = new PopupWithForm(placeModalWindow, ({placeInput: name, linkInput: link}) => {
  sectionCards.addItem(createCard({name:name, link:link}));

  popupNewPlace.close();
});

placeButton.addEventListener('click', () => {
  addPlaceValidator.resetErrors();
  popupNewPlace.open();
});

popupNewPlace.setEventListeners();

 /**Modal big pic */
 const popupBigImage = new PopupWithImage(imageModalWindow);

popupBigImage.setEventListeners();