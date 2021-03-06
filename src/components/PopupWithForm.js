import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({popupSelector, formSubmitHandler}) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;

    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._submitBtn = this._form.querySelector('.popup__save-btn');
  }

  _getInputValues(){
    this._inputValues = {}
    this._inputList.forEach(input =>{
        this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
}

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  loadingMessage(load) {
    if (load) {
      this._submitBtn.textContent = 'Сохранение...'
    } else if (this._popup === '.popup-place') {
      this._submitBtn.textContent = 'Создать'
    } else {
      this._submitBtn.textContent = 'Сохранить'
    }
  }
}