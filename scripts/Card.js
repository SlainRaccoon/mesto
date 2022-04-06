export class Card {
  constructor(data, templateSelector, openViweImage) {
    this._name = data.name;
    this._link = data.link;

    this._templateSelector = templateSelector;
    this._openViweImage = openViweImage;
  }

  _getTemplate() {
    const cardTemplate = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.gallery__list')
    .cloneNode(true);

    return cardTemplate;
  }

  addCard() {
    this._galleryCrad = this._getTemplate();
    this._galleryCardImage = this._galleryCrad.querySelector('.gallery__image');
    this._gallerCardTitle = this._galleryCrad.querySelector('.gallery__title');
    this._galleryLikeBtn = this._galleryCrad.querySelector('.gallery__like-btn');
    this._galleryDeleteBtn = this._galleryCrad.querySelector('.gallery__delete-btn');
    this._galleryCardImage.src = this._link;
    this._gallerCardTitle.alt = this._name;
    this._gallerCardTitle.textContent = this._name;

    this._setEventlisteners();

    return this._galleryCrad;
  }

  _setEventlisteners() {
    this._galleryLikeBtn.addEventListener('click', () => {
      this._pressLikeBtn();
    });
    this._galleryDeleteBtn.addEventListener('click', () => {
      this._pressDeleteBtn();
    });
    this._galleryCardImage.addEventListener('click', () => {
      this._openViweImage(this._name, this._link);
    });
  }

  _pressLikeBtn() {
    this._galleryLikeBtn.classList.toggle('gallery__like-btn_active');
  }

  _pressDeleteBtn() {
    this._galleryCrad.closest('.gallery__list').remove();
  }
}