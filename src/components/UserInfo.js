export class UserInfo {
  constructor({ username, userjob, editAvatar }) {
    this._nameInput = document.querySelector(username);
    this._jobInput = document.querySelector(userjob);
    this._avatarInput = document.querySelector(editAvatar);
  }

  getUserInfo() {
    const userInfo = {
      username: this._nameInput.textContent,
      userjob: this._jobInput.textContent,
      editAvatar: this._avatarInput.src
    }
    return userInfo;
  }

  setUserInfo(data) {
    this._nameInput.textContent = data.name;
    this._jobInput.textContent = data.about;
    this._avatarInput.src = data.avatar;
  }

  setAvatarInfo(data) {
    this._avatarInput.src = data.avatar;
  }
}