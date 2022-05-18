import "./index.css"

import {
  enableValidate,
  editProfileForm,
  addPlaceForm,
  avatarForm,
  profileButton,
  placeButton,
  avatarButton,
  gallerySection,
  nameInput,
  jobInput
} from "../utils/constants.js";

import { FormValidator } from "../components/FormValidator.js"
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { api } from "../components/Api";

/** current user */
let userId

api.getAppInfo()
.then(([cardData, userData]) => {
  userId = userData._id;
  userInfo.setUserInfo(userData.name, userData.about);
  userInfo.setUserAvatar(userData.avatar);
  cardsCatalog.renderItems(cardData);
})
.catch(err => console.log(`Ошибка.....: ${err}`))

/** User Info */
const userInfo = new UserInfo({
  profileName: '.profile__name',
  profileJob: '.profile__subtitle',
  profileAvatar: '.profile__image'
});

/** add new Card */
const createCard = (item) => {
  const newCard = new Card(item, userId, '#cards', {
    handleCardClick: () => {
      imagePopup.open(item.link, item.name);
    },
    handleCardDelete: (_id) => {
      deleteModal.open()
      deleteModal.changeSubmitForm(() => {
        api.deleteCard(_id)
        .then(() => {
          newCard.deleteCard();
          deleteModal.close();
        })
        .catch(err => console.log(`Ошибка.....: ${err}`))
      })
    },
    handleCardLike: (_id) => {
      if (newCard.isLiked()) {
        api.deleteLike(_id)
        .then(res => {
          newCard.setLike(res.like)
        })
        .catch(err => console.log(`Ошибка.....: ${err}`))
      } else {
        api.addLike(_id)
        .then(res => {
          newCard.setLike(res.like)
        })
        .catch(err => console.log(`Ошибка.....: ${err}`))
      }
    }
  })
  return newCard.createCard();
}

/** Section start 6 cards*/
const cardsCatalog = new Section ({
  renderer: (item) => {
    cardsCatalog.addItem(createCard(item));
  }
}, gallerySection);

/** add new cards */
const popupAddCard = PopupWithForm ({
  popupSelector: '.popup-place',
  renderer: (item) => {
    popupAddCard.loadingMessage(true)
    api.addCard(item)
    .then(res => {
      cardsCatalog.prependItem(createCard(res))
      popupAddCard.close();
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
    .finally(() => {
      popupAddCard.loadingMessage(false)
    })
  }
});
popupAddCard.setEventListeners();

/** modal delete card */
const deleteModal = new PopupWithForm ({
  popupSelector: '.popup-delete-card',
  renderer: (id) => {
    api.deleteCard(id)
    .then(() => {      
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
  }
});
deleteModal.setEventListeners();

//editor profile
const popupProfileEdit = new PopupWithForm ({
  popupSelector: '.popup-profile',
  renderer: (item) => {
    popupProfileEdit.loadingMessage(true)
    api.editProfile(item)
    .then(() => {
      userInfo.setUserInfo(item.name, item.job)
      popupProfileEdit.close();
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
    .finally(()=> {
      popupProfileEdit.loadingMessage(false)
    })
  }
});
popupProfileEdit.setEventListeners();

/** modal avatar */
const popupEditAvatar = new PopupWithForm ({
  popupSelector: '.popup-avatar',
  renderer: (item) => {
    popupEditAvatar.loadingMessage(true)
    api.editAvatar(item)
    .then(() => {
      userInfo.setUserAvatar(item.avatar);
      popupEditAvatar.close();
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
    .finally(() => {
      popupEditAvatar.loadingMessage(false)
    })
  }
});
popupEditAvatar.setEventListeners();

/** modal image */
const popupWithImage = new PopupWithImage('popup-view');
popupWithImage.setEventListeners();

/** form validation */
const editProfileValidator = new FormValidator(enableValidate, editProfileForm);
const addPlaceValidator = new FormValidator(enableValidate, addPlaceForm);
const editAvatarValdator = new FormValidator(enableValidate, avatarForm)

editProfileValidator.enableValidation();
addPlaceValidator.enableValidation();
editAvatarValdator.enableValidation();

/** open add place */
placeButton.addEventListener('click', () => {
  popupAddCard.open();
});

/** open profile edit */
profileButton.addEventListener('click', () => {
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.job;
  popupProfileEdit.open();
});

/** open avatar edit */
avatarButton.addEventListener('click', ()=> {
  popupEditAvatar.open();
})
















//const section = new Section({ items: initialCards, renderer: render }, '.gallery');
/**const imagePopup = new PopupWithImage('.popup-view');
const profilePopup = new PopupWithForm('.popup-profile', handleProfileFormSubmit);
const addPlacePopup = new PopupWithForm('.popup-place', handlePlaceFormSubmit);*/



/**function render(card) {
  const cardElement = createCard(card);
  gallerySection.append(cardElement);
}*/









/**function createCard(data) {
  const card = new Card(data, '#cards', () => {
    imagePopup.open(data.name, data.link);
  });
  return card.createCard();
}*/

/** Modal profile*/
/**function openProfilePopup() {
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;

  profilePopup.open();
}*/

/**function handleProfileFormSubmit({ name, job }) {
  userInfo.setUserInfo(name, job);
  profilePopup.close();
}*/

/**Modal new place */
/**function openPlacePopup() {
  addPlaceValidator.resetErrors();
  addPlaceValidator.toggleButtonState();

  addPlacePopup.open();
}*/

/**function handlePlaceFormSubmit(data) {
  const cardElement = createCard({
    name: data.place,
    link: data.link
  });
  section.addItem(cardElement);

  addPlacePopup.close();
}*/







// section.renderItems();

// profileButton.addEventListener('click', openProfilePopup);
// placeButton.addEventListener('click', () => {
//   popupAddCard.open();
// });


// //imagePopup.setEventListeners();
// //addPlacePopup.setEventListeners();
// //profilePopup.setEventListeners();
// popupAvatarEdit.setEventListeners();