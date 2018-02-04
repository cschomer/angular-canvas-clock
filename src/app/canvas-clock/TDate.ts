/**
 * Easily Destructure Date Object
 */
export class TDate {
  constructor(readonly date: Date) {}

  get seconds(): number {
    return this.date.getSeconds();
  }

  get minutes(): number {
    return this.date.getMinutes();
  }

  get hours(): number {
    return this.date.getHours();
  }

  get month(): number {
    return this.date.getMonth() + 1;
  }

  get day(): number {
    return this.date.getDate();
  }

  get year(): number {
    return this.date.getFullYear();
  }
}
