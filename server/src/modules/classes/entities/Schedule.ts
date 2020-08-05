interface IScheduleData {
  week_day: number;
  from: string;
  to: string;
}

export default class Schedule {
  constructor({ week_day, from, to }: IScheduleData) {
    Object.assign(this, { week_day, from, to });
  }

  week_day: number;

  from: string;

  to: string;
}
