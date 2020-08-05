interface IClassData {
  id: string;
  subject: string;
  cost: number;
  user_id: string;
}

export default class Class {
  constructor({ id, subject, cost, user_id }: IClassData) {
    Object.assign(this, { id, subject, cost, user_id });
  }

  id: string;

  subject: string;

  cost: number;

  user_id: string;
}
