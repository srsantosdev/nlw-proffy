interface IConnectionData {
  id: string;
  user_id: string;
  created_at: Date;
}

export default class Connection {
  constructor({ id, user_id, created_at }: IConnectionData) {
    Object.assign(this, { id, user_id, created_at });
  }

  id: string;

  user_id: string;

  created_at: Date;
}
