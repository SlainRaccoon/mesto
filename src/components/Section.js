export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(data) {
    data.reverse().forEach((item) => this._renderer(item));
  }

  addItems(image) {
    this._container.prepend(image);
  }
}