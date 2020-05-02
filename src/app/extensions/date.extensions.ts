export {};

declare global {
  interface Date {
    clone(): Date;
    setStartHours(): number;
    setEndHours(): number;
    addDays(days: number): Date;
    isToday(): boolean;
    compareDate(date: Date): -1 | 0 | 1;
    compareCalendar(date: Date): -1 | 0 | 1;
  }
}

/**
 * @description it clones the current date object
 * @returns {Date}: it returns cloned date object
 */
Date.prototype.clone = function(): Date {
  return new Date(+this);
};

/**
 * @description it mutates the date object and
 * sets the time (HH:mm:ss.SSS) to start time of the day i.e. 00:00:00.000
 * @returns {number}: returns the number of milliseconds since January 1, 1970 00:00:00 UTC
 */
Date.prototype.setStartHours = function(): number {
  return this.setHours(0, 0, 0, 0);
};

/**
 * @description it mutates the date object and
 * sets the time (HH:mm:ss.SSS) to end time of the day i.e. 23:59:59.999
 * @returns {number}: returns the number of milliseconds since January 1, 1970 00:00:00 UTC
 */
Date.prototype.setEndHours = function(): number {
  return this.setHours(23, 59, 59, 999);
};

/**
 * @description it adds the number of days given as function argument to the date object
 * and returns the new date formed
 * @returns{Date} returns new Date object formed
 */
Date.prototype.addDays = function(days: number): Date {
  if (!days) return this;
  let date = this;

  return new Date(
    date.getTime() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * days
  );
};

/**
 * @description it checks if calendar date(DD:MM:YYYY) of current date object is today date
 * @returns{boolean}
 */
Date.prototype.isToday = function(): boolean {
  let today = new Date();
  return this.compareCalendar(today) === 0;
};

/**
 * @description it compare date object (date and time) with the date in function argument.
 * @returns{-1 or 0 or 1} returns -1 if currentDate (date and time) is smaller then argument date object
 * returns 0 if currentDate (date and time) equals argument date object
 * returns 1 if currentDate (date and time) is larger then argument date object
 */
Date.prototype.compareDate = function(date: Date): -1 | 0 | 1 {
  if (!date) {
    return 0;
  }

  if (this.getTime() > date.getTime()) {
    return 1;
  }
  if (this.getTime() < date.getTime()) {
    return -1;
  }
  return 0;
};

/**
 * @description it compare date object (DD:MM:YYYY) with the date in function argument.
 * @returns{-1 or 0 or 1} returns -1 if currentDate (DD:MM:YYYY) is smaller then argument date object
 * returns 0 if currentDate (DD:MM:YYYY) equals argument date object
 * returns 1 if currentDate (DD:MM:YYYY)  is larger then argument date object
 */
Date.prototype.compareCalendar = function(date: Date): -1 | 0 | 1 {
  if (!date) {
    return 0;
  }

  this.setStartHours();
  date.setStartHours();
  return this.compareDate(date);
};
