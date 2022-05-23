export class FormValidator {
  constructor(object, formElement) {
    this._formElement = formElement;
    this._formSelector = object.formSelector;
    this._inputSelector = object.inputSelector;
    this._submitButtonSelector = object.submitButtonSelector;
    this._inactiveButtonClass = object.inactiveButtonClass;
    this._inputErrorClass = object.inputErrorClass;
    this._errorClass = object.errorClass;
    this._inputList = Array.from(this._formElement.querySelectorAll(object.inputSelector));
  }

  /*add class error*/
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  /*remove class error*/
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  };

  /*add or del text error*/
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  /* validate input element*/
  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  /* submit on or off*/
  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._submitButtonElement.classList.add(this._inactiveButtonClass);
      this._submitButtonElement.setAttribute('disabled', '');
    } else {
      this._submitButtonElement.classList.remove(this._inactiveButtonClass);
      this._submitButtonElement.removeAttribute('disabled');
    }
  };

  /*add listener forEach*/
  _setEventListeners = () => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._submitButtonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  /*submit nonactive*/
  submitDisable(evt) {
    evt.classList.add(this._inactiveButtonClass);
    evt.setAttribute('disabled', '');
  }

  /* validation*/
  enableValidation() {
    this._formList = Array.from(document.querySelectorAll(this._formSelector));
    this._formList.forEach(formElement => {
      formElement.addEventListener('submit', function (event) {
        event.preventDefault();
      });
      this._setEventListeners();
    });
  }

  /*reset errors*/
  resetValidation = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }
}