//элементы
let popup = document.querySelector('.popup');

console.log(popup);

//открытие закрытие попапа
function popupON() {
  popup.classList.add('.popup__open');
  nameInput.value = title.textContent;
  jobInput.value = resercher.textContent;
}

function popupOff() {
  popup.classList.remove('.popup__open');
}

//слушатели

