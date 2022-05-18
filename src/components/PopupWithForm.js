import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, renderer }) {
    super(popupSelector);
    this._renderer = renderer;

    this._formSubmit = this._formSubmit.bind(this);
    this._form = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._formValues = {};
    this._form.querySelectorAll('.popup__input').forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', this._formSubmit);
  }

  _formSubmit(evt) {
    evt.preventDefault();
    this._renderer(this._getInputValues());
  }

  changeSubmitForm(newSubmitForm) {
    this._renderer = newSubmitForm;
  }

  close() {
    super.close();

    this._form.reset();
  }
}