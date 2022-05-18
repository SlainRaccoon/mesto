export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton = this._popup.querySelector('.popup__close-btn');

    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget || evt.target === this._closeButton) {
        this.close();
      } 
    });
  }

  loadingMessage(load) {
    this._submitBtn = this._popup.querySelector('.popup__save-btn');

    if (load) {
      this._submitBtn.textContent = 'Сохранение...'
    } else if (this._popup === '.popup-place') {
      this._submitBtn.textContent = 'Создать'
    } else {
      this._submitBtn.textContent = 'Сохранить'
    }
  }
}