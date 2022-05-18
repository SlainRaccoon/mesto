export class UserInfo {
  constructor({ profileName, profileJob, profileAvatar }) {
    this._name = profileName;
    this._job = profileJob;
    this._avatar = profileAvatar;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent
    }
  }

  setUserInfo(name, job) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }

  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }
}