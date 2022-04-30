import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageLink = this._popup.quuerySelector('.popup__picture');
    this._popupImageCaption = this._popup.quuerySelector('.popup__caption');
  }

  open(data) {
    super.open();
    this._popupImageLink.src = data.link;
    this._popupImageLink.alt = data.name;
    this._popupImageCaption.textContent = data.name;
  }
}