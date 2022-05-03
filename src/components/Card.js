export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;

    this._template = document.querySelector(templateSelector).content;
    this._handleCardClick = handleCardClick;
  }

  createCard = () => {
    this._galleryCrad = this._template.querySelector('.gallery__list').cloneNode(true);
    this._galleryCardImage = this._galleryCrad.querySelector('.gallery__image');
    this._gallerCardTitle = this._galleryCrad.querySelector('.gallery__title');
    this._galleryLikeBtn = this._galleryCrad.querySelector('.gallery__like-btn');
    this._galleryDeleteBtn = this._galleryCrad.querySelector('.gallery__delete-btn');
    this._galleryCardImage.src = this._link;
    this._galleryCardImage.alt = this._name;
    this._gallerCardTitle.textContent = this._name;

    this._setEventlisteners();

    return this._galleryCrad;
  }

  _setEventlisteners = () => {
    this._galleryLikeBtn.addEventListener('click', this._pressLikeBtn);
    this._galleryDeleteBtn.addEventListener('click', this._pressDeleteBtn);
    this._galleryCardImage.addEventListener('click', this._handleCardClick);
  }

  _pressLikeBtn = () => {
    this._galleryLikeBtn.classList.toggle('gallery__like-btn_active');
  }

  _pressDeleteBtn = () => {
    this._galleryCrad.remove();
  }
}