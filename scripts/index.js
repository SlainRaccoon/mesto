//элементы
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__info');
let nameInput = document.querySelector('.popup__text_type_name');
let jodInput = document.querySelector('.popup__text_type_job');
let title = document.querySelector('.profile__name');
let subtitle = document.querySelector('.profile__subtitle');

const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close-btn');


//функция открытия и закрытия попапа
function popupON() {
  popup.classList.add('popup_opened');
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
}

function popupOff() {
  popup.classList.remove('popup_opened');
}

//функция отправки данных по кнопке "сохранить"
function formSubmitHandler(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  popupOff();
}

//слушатели
editButton.addEventListener('click', popupON);
closeButton.addEventListener('click', popupOff);
formElement.addEventListener('submit', formSubmitHandler);
