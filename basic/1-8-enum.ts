{
  /**
   * Enum
   */

  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);

  let dayOfweek: DaysOfWeek = "Tuesday";
  dayOfweek = "Wednesday";
}
