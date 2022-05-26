export class Card {
  constructor({data, userId, handleCardClick, handleLikeAdd, handleCardDelete, handleLikeRemove}, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._owner = data.owner._id;
    this._userId = userId;
    this._likes = data.likes;

    this._templateSelector = templateSelector;

    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleLikeAdd = handleLikeAdd;
    this._handleLikeRemove = handleLikeRemove;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.gallery__list')
      .cloneNode(true);

    return cardElement;
  }

  like() {
    this._galleryLike.classList.toggle('gallery__like-btn_active');
  }

  _checkLike() {
    this._likes.some((like) => {
      if (like._id === this._userId) {
        this._galleryLike.classList.add('gallery__like-btn_active');
      }
    });
  }

  handleLike(data) {
    this._likes = data.likes;
    this._galleryLikeNumb.textContent = this._likes.length;
    this.like();
  }

  setLike() {
    if (this._galleryLike.classList.contains('gallery__like-btn_active')) {
      this._handleLikeRemove(this._id);
    } else {
      this._handleLikeAdd(this._id);
    }
  }

  removeCard() {
    this._galleryElement.remove();
    this._galleryElement = null;
  }

  _zoomCard() {
    this._handleCardClick(this._name, this._link);
  }

  _setEventlisteners() {
    this._galleryLike.addEventListener('click', () => {
      this.setLike();
    });
    this._galleryDelete.addEventListener('click', () => {
      this._handleCardDelete(this._id);
    });
    this._galleryImage.addEventListener('click', () => {
      this._zoomCard();
    });
  }

  generateCard() {
    this._galleryElement = this._getTemplate();
    this._galleryLike = this._galleryElement.querySelector('.gallery__like-btn');
    this._galleryLikeNumb = this._galleryElement.querySelector('.gallery__like-number');
    this._galleryDelete = this._galleryElement.querySelector('.gallery__delete-btn');
    this._galleryImage = this._galleryElement.querySelector('.gallery__image');
    this._galleryTitle = this._galleryElement.querySelector('.gallery__title');

    this._checkLike();
    this._setEventlisteners();  

    if (this._userId !== this._owner) {
      this._galleryDelete.remove();
    };

    this._galleryLikeNumb.textContent = this._likes.length;
    this._galleryImage.src = this._link;
    this._galleryImage.alt = this._name;
    this._galleryTitle.textContent = this._name;

    return this._galleryElement;
  }
}