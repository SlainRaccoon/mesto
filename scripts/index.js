/** elements buttons */
const formEdit = document.querySelector('.popup__form_type_edit');

/** edit profile */
const editButton = document.querySelector('.profile__edit-btn');
const popupEdit = document.querySelector('.popup-edit');
const closeEditPopup = popupEdit.querySelector('.popup__close-btn');

/** new place */
const placeButton = document.querySelector('.profile__add-btn');
const popupPlace = document.querySelector('.popup-place');
const closePlacePopup = popupPlace.querySelector('.popup__close-btn');

/** inputs edit profile */
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const editTitle = document.querySelector('.profile__name');
const editSubtitle = document.querySelector('.profile__subtitle');

/** popup zoom image */
const imageOpenPopup = document.querySelector('.popup-view');
const cardImage = imageOpenPopup.querySelector('.popup__picture');
const cardTitle = imageOpenPopup.querySelector('.popup__caption');
const imageCloseButton = imageOpenPopup.querySelector('.popup__close-btn');

/** template */
const templateCards = document.querySelector('#cards').content;
const gallery = document.querySelector('.gallery');
const cardAddFormElement = document.querySelector('.popup__form_type_place');
const placeInput = cardAddFormElement.querySelector('.popup__text_type_place');
const linkInput = cardAddFormElement.querySelector('.popup__text_type_link');


/** function create new card */
function addCard(itemName, itemLink) {
  const galleryCrad = templateCards.cloneNode(true);
  const galleryCardImage = galleryCrad.querySelector('.gallery__image');
  const galleryCardTitle = galleryCrad.querySelector('.gallery__title');

  galleryCardTitle.textContent = itemName;
  galleryCardImage.src = itemLink;
  galleryCardImage.alt = itemName;

  galleryCardImage.addEventListener('click', openImage);
  galleryCrad.querySelector('.gallery__like-btn').addEventListener('click', pressLike);
  galleryCrad.querySelector('.gallery__delete-btn').addEventListener('click', deleteCard);

  return galleryCrad;
}

/** render 6 cards from massiv */
initialCards.forEach(item => {
  gallery.append(addCard(item.name, item.link));
});

/** function open zoom image */
function openImage(evt) {
  const imageTarget = evt.target;
  cardImage.src = imageTarget.src;
  cardImage.alt = imageTarget.alt;
  cardTitle.textContent = imageTarget.alt;
  openPopup(imageOpenPopup);
}

/** function like */
function pressLike(evt) {
  evt.target.classList.toggle('gallery__like-btn_active');
}

/** function delete */
function deleteCard(evt) {
  evt.target.closest('.gallery__list').remove();
}

/** function open and close popup */
function openPopup(anyPopup) {
  anyPopup.classList.add('popup_opened');
}
const closePopup = function (anyPopup) {
  anyPopup.classList.remove('popup_opened');
}

/** function close popup on overlay */
function closePopupOverlay(anyPopup) {
  return function(evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(anyPopup);
    }
  }
}

/** function open edit profile */
function openProfilePopup() {
  nameInput.value = editTitle.textContent;
  jobInput.value = editSubtitle.textContent;
  openPopup(popupEdit);
}

/** function open add place */
function openPlacePopup() {
  placeInput.value = null;
  linkInput.value = null;
  openPopup(popupPlace);
}

/** function handler submit profile form */
function handlerProfileFormSubmit(evt) {
  evt.preventDefault();
  editTitle.textContent = nameInput.value;
  editSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
}

/** function handler submit add place */
function handlerPlaceFormSubmit(evt) {
  evt.preventDefault();
  const newCardCreate = addCard(placeInput.value, linkInput.value);
  gallery.prepend(newCardCreate);
  closePopup(popupPlace);
}

/** listener */
editButton.addEventListener('click', openProfilePopup);
closeEditPopup.addEventListener('click', () => closePopup(popupEdit));
formEdit.addEventListener('submit', handlerProfileFormSubmit);

placeButton.addEventListener('click', openPlacePopup);
closePlacePopup.addEventListener('click', () => closePopup(popupPlace));
cardAddFormElement.addEventListener('submit', handlerPlaceFormSubmit);

imageCloseButton.addEventListener('click', () => closePopup(imageOpenPopup));

popupEdit.addEventListener('click', closePopupOverlay(popupEdit));
popupPlace.addEventListener('click', closePopupOverlay(popupPlace));
imageOpenPopup.addEventListener('click', closePopupOverlay(imageOpenPopup));