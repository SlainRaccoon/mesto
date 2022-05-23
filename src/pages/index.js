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
import { Api } from "../components/Api";

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-40',
  headers: {
    authorization: 'a892697e-ad01-4cbc-9a1f-bbcc1c4a50e2',
    'Content-Type': 'application/json'
  }
});

/*form validation*/
const profileValidator = new FormValidator (object, editProfile.profileForm);
const placeValidator = new FormValidator (object, editPlace.placeForm);
const avatarValdator = new FormValidator (object, editProfile.avatarForm)

profileValidator.enableValidation();
placeValidator.enableValidation();
avatarValdator.enableValidation();

/* error api*/
function errorApi(err) {
  console.log(`Ошибка...: ${err}`);
}

/*api userinfo & card*/
Promise.all([api.getUserInfo(), api.getCards()])
  .then(([user, initialCards]) => {
    userInfo.setUserInfo(user);
    userId = user._id;
    section.renderItems(initialCards);

    console.log(user);
    console.log(initialCards);
  })
  .catch((err) => {
    errorApi(err);
  });

/*create user info*/
const userInfo = new UserInfo({
  profileName: '.profile__name',
  profileJob: '.profile__subtitle',
  profileAvatar: '.profile__image'
});

const formEdit = new PopupWithForm({
  popupSelector: '.popup-profile',
  formSubmitHandler: (inputValues) => {
    formEdit.loadingMessage(true);
    api.editProfile(inputValues)
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
  editProfile.titleProfile.value = userInfo.getUserInfo().name;
  editProfile.subtitleProfile.value = userInfo.getUserInfo().job;
  formEdit.open();
});

/*create avatar*/
const formEditAvatar = new PopupWithForm({
  popupSelector: '.popup-avatar',
  formSubmitHandler: (inputValues) => {
    formEditAvatar.loadingMessage(true);
    api.editAvatar(inputValues)
      .then((inputValues) => {
        userInfo.setAvatarInfo(inputValues);
        formEdit.close();
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
            popupCardDelete.close();
            card.deleteCard();
            console.log(cardId)
          })
          .catch((err) => {
            errorApi(err);
          })
      }),
        popupCardDelete.open();
    },
    handleCardLikeAdd: (cardId) => {
      api.addLike(cardId)
        .then((data) => {
          card.handleLike(data);
        })
        .catch((err) => {
          errorApi(err);
        })
    },
    handleCardLikeRemove: (cardId) => {
      api.delLike(cardId)
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

/*button card*/
editPlace.placeButton.addEventListener('click', function() {
  formAdd.open()
});

/*create new card*/
const formAdd = new PopupWithForm({
  popupSelector: '.popup-place',
  formSubmitHandler: (data) => {
    formAdd.loadingMessage(true);
    api.addNewCard(data)
      .then((data) => {
        section.addItems(createCard(data));
        formAdd.close();
      })
      .catch((err) => {
        errorApi(err);
      })
      .finally(() => {
        formAdd.loadingMessage(false);
      });
  }
})
formAdd.setEventListeners();

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

