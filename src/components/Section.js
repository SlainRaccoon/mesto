export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(data) {
    data.forEach(this._renderer);
  }

  addItems(element) {
    this._container.prepend(element);
  }
}