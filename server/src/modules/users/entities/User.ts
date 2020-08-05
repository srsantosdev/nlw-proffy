interface IUserData {
  id: string;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

export default class User {
  constructor({ id, name, avatar, whatsapp, bio }: IUserData) {
    Object.assign(this, { id, name, avatar, whatsapp, bio });
  }

  id: string;

  name: string;

  avatar: string;

  whatsapp: string;

  bio: string;
}
