import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open(text, link) {
    const imageView = this._popup.querySelector('.popup__picture');
    const captionView = this._popup.querySelector('.popup__caption');

    imageView.src = link;
    captionView.textContent = text;
    imageView.alt = text;

    super.open();
  }
}