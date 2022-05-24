export class Card {
  constructor({data, userId, handleCardClick, handleCardLikeAdd, handleCardDelete, handleCardLikeRemove}, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;

    this._userId = userId;
    this._owner = data.owner._id;

    this._templateSelector = templateSelector;

    this._handleCardClick = handleCardClick;
    this._handleCardLikeAdd = handleCardLikeAdd;
    this._handleCardLikeRemove = handleCardLikeRemove;
    this._handleCardDelete = handleCardDelete;
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

  generateCard() {
    this._galleryElement = this._getTemplate();
    this._galleryLike = this._galleryElement.querySelector('.gallery__like-btn');
    this._galleryLikeNumb = this._galleryElement.querySelector('.gallery__like-number');
    this._galleryDelete = this._galleryElement.querySelector('.gallery__delete-btn');
    this._galleryCardImage = this._galleryElement.querySelector('.gallery__image');
    this._gallerCardTitle = this._galleryElement.querySelector('.gallery__title');

    this._setEventlisteners();
    this._checkLike();    

    if (this.userId !== this._owner) {
      this._galleryDelete.remove();
    };

    this._galleryLikeNumb.textContent = this._likes.length;
    this._galleryCardImage.src = this._link;
    this._galleryCardImage.alt = this._name;
    this._gallerCardTitle.textContent = this._name;

    return this._galleryElement;
  }

  _setEventlisteners() {
    this._galleryLike.addEventListener('click', () => {
      this.setLike();
    });
    this._galleryDelete.addEventListener('click', () => {
      this._handleCardDelete(this._id);
    });
    this._galleryCardImage.addEventListener('click', () => {
      this._openImage();
    });
  }

  handleLike(data) {
    this._likes = data.likes;
    this._galleryLikeNumb.textContent = this._likes.length;
    this.like();
  }

  setLike() {
    if (this._galleryLike.classList.contains('gallery__like-btn_active')) {
      this._handleCardLikeRemove(this._id);
    } else {
      this._handleCardLikeAdd(this._id);
    }
  }

  deleteCard() {
    this._galleryElement.remove();
    this._galleryElement = null;
  }

  _openImage() {
    this._handleCardClick(this._name, this._link);
  }
}