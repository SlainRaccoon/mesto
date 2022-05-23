import { Popup } from "./Popup.js";

export class PopupWithDelete extends Popup {
  constructor({popupSelector}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  submitDelete(data) {
    this._formSubmitHandler = data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler();
    });
  }

  close() {
    super.close();
  }
}