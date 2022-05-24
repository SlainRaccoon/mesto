export class UserInfo {
  constructor({ profileName, profileJob, profileAvatar }) {
    this._name = document.querySelector(profileName);
    this._job = document.querySelector(profileJob);
    this._avatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    const userInfo = {
      profileName: this._name.textContent,
      profileJob: this._job.textContent,
      profileAvatar: this._avatar.src
    }
    return userInfo;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.about;
    this._avatar.src = data.avatar;
  }

  setAvatarInfo(data) {
    this._avatar.src = data.avatar;
  }
}