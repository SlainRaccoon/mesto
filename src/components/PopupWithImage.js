import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this.image = document.querySelector('.popup__picture');
    this.title = document.querySelector('.popup__caption');
  }

  open(name, link) {
    super.open();
    this.image.src = link;
    this.image.alt = name;
    this.title.textContent = name;
  }
}