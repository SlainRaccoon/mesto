import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this.image = this._popup.querySelector('.popup__picture');
    this._title = this._popup.querySelecto('.popup__caption');
  }

  open(link, name) {
    this.image.src = link;
    this.image.alt = name;
    this._title.textContent = name;
    super.open();
  }
}