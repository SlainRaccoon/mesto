export class Card {
  constructor(data, userId, templateSelector, {handleCardClick, handleCardLike, handleCardDelete}) {
    this._name = data.name;
    this._link = data.link;
    this._like = data.like;
    this._id = data.id;

    this._userId = userId;
    this._ownerId = data.owner._id;

    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
    this._handleCardDelete = handleCardDelete;

    this._templateSelector = templateSelector;

    this._galleryElement = this._getTemplate();
    
    this._galleryCardImage = this._galleryElement.querySelector('.gallery__image');
    this._gallerCardTitle = this._galleryElement.querySelector('.gallery__title');
    this._galleryLikeBtn = this._galleryElement.querySelector('.gallery__like-btn');
    this._galleryDeleteBtn = this._galleryElement.querySelector('.gallery__delete-btn');

  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.gallery__list')
      .cloneNode(true);

      return cardElement;
  }

  createCard() {
    this._galleryCardImage.src = this._link;
    this._galleryCardImage.alt = this._name;
    this._gallerCardTitle.textContent = this._name;

    this.setLike(this._like);
    this._setEventlisteners();

    if(this._ownerId !== this._userId) {
      this._galleryElement.querySelector('.gallery__delete-btn').style.display = 'none'
    }

    return this._galleryCard;
  }

  _setEventlisteners() {
    this._galleryLikeBtn.addEventListener('click', () => this._handleCardLike(this_id));
    this._galleryDeleteBtn.addEventListener('click', () => this._handleCardDelete(this._id));
    this._galleryCardImage.addEventListener('click', this._openImage);
  }

  _setLikeBtn = () => {
    this._galleryLikeBtn.classList.toggle('gallery__like-btn_active');
  }

  _removeLikeBtn = () => {
    this._galleryLikeBtn.classList.remove('gallery__like-btn_active');
  }

  deleteCard() {
    this._galleryElement.remove();
    this._galleryElement = null;
  }

  isLiked = () => {
    const userLikedCard = this._like.find(user => user._id === this._userId);
    return userLikedCard;
  }

  setLike(newLike) {
    this._like = newLike
    const likeNumber = this._galleryCard.querySelector('.popup__like-number')
    likeNumber.textContent = this._like.length

    if(this.isLiked()) {
      this._setLikeBtn();
    } else {
      this._removeLikeBtn();
    }
  }

  _openImage = () => {
    this._handleCardClick(this._name, this._link);
  }
}