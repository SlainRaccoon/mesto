import "./index.css"

import {
  template,
  editProfile,
  editPlace,
  object,
} from "../utils/constants.js";

import { FormValidator } from "../components/FormValidator.js"
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithDelete } from "../components/PopupWithDelete.js";
import { api } from "../components/Api";

/*form validation*/
const profileValidator = new FormValidator(object, editProfile.profileForm);
profileValidator.enableValidation();
const avatarValidator = new FormValidator(object, editProfile.avatarForm);
avatarValidator.enableValidation();
const placeValidator = new FormValidator(object, editPlace.placeForm);
placeValidator.enableValidation();

/* error api*/
function errorApi(err) {
  console.log(`Ошибка...: ${err}`);
}

/*api userinfo & card*/
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, initialCards]) => {
    userInfo.setUserInfo(user);
    userId = user._id;
    section.renderItems(initialCards);
  })
  .catch((err) => {
    errorApi(err);
  });

/*create user info*/
const userInfo = new UserInfo({
  username: '.profile__name',
  userjob: '.profile__subtitle',
  editAvatar: '.profile__image'
});

const formEdit = new PopupWithForm({
  popupSelector: '.popup-profile',
  formSubmitHandler: (inputValues) => {
    formEdit.loadingMessage(true);
    api.editUserInfo(inputValues)
      .then((inputValues) => {
        userInfo.setUserInfo(inputValues);
        formEdit.close();
      })
      .catch((err) => {
        errorApi(err);
      })
      .finally(() => {
        formEdit.loadingMessage(false);
      });
  }
});
formEdit.setEventListeners();

/*button profile & user info*/
editProfile.profileButton.addEventListener('click', () => {
  editProfile.nameInput.value = userInfo.getUserInfo().username;
  editProfile.jobInput.value = userInfo.getUserInfo().userjob;
  profileValidator.resetValidation();
  formEdit.open();
});

/*create new card*/
const formPlace = new PopupWithForm({
  popupSelector: '.popup-place',
  formSubmitHandler: (data) => {
    formPlace.loadingMessage(true);
    api.addNewCard(data)
      .then((data) => {
        section.addItems(createCard(data));
        formPlace.close();
      })
      .catch((err) => {
        errorApi(err);
      })
      .finally(() => {
        formPlace.loadingMessage(false);
      });
  }
})
formPlace.setEventListeners();

/*button card*/
editPlace.placeButton.addEventListener('click', () => {
  placeValidator.resetValidation();
  formPlace.open()
});

/*create avatar*/
const formEditAvatar = new PopupWithForm({
  popupSelector: '.popup-avatar',
  formSubmitHandler: (inputValues) => {
    formEditAvatar.loadingMessage(true);
    api.editUserAvatar(inputValues)
      .then((inputValues) => {
        userInfo.setAvatarInfo(inputValues);
        formEditAvatar.close();
      })
      .catch((err) => {
        errorApi(err);
      })
      .finally(() => {
        formEditAvatar.loadingMessage(false);
      });
  }
});
formEditAvatar.setEventListeners();

/*button avatar*/
editProfile.avatarButton.addEventListener('click', () => {
  avatarValidator.resetValidation();
  formEditAvatar.open();
});

/*create card*/
let userId;
const gallery = '.gallery';

const section = new Section({
  renderer: (card) => {
    section.addItems(createCard(card));
  }
}, gallery);

function createCard(data) {
  const card = new Card({
    data: data,
    userId: userId,
    handleCardClick,
    handleCardDelete: (cardId) => {
      popupCardDelete.submitDelete(() => {
        api.deleteCard(cardId)
          .then(() => {
            card.removeCard();
            popupCardDelete.close();
            console.log(cardId);
          })
          .catch((err) => {
            errorApi(err);
          })
      }),
        popupCardDelete.open();
    },
    handleLikeAdd: (cardId) => {
      api.addLike(cardId)
        .then((data) => {
          card.handleLike(data);
        })
        .catch((err) => {
          errorApi(err);
        })
    },
    handleLikeRemove: (cardId) => {
      api.removeLike(cardId)
        .then((data) => {
          card.handleLike(data);
        })
        .catch((err) => {
          errorApi(err);
        })
    }
  }, template);

  const cardElement = card.generateCard();
  return cardElement;
}

/*popup delete*/
const popupCardDelete = new PopupWithDelete({
  popupSelector: '.popup-delete-card'
});
popupCardDelete.setEventListeners();

/*popup image*/
const openImage = new PopupWithImage('.popup-view');
openImage.setEventListeners();

function handleCardClick(name, link) {
  openImage.open(name, link)
}

