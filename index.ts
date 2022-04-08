function validateEmailAddress(emailAddress: string): boolean {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress);
}

export class Email {
  private emailAddress: string;

  /**
   * Creates and returns an Email object referencing the Email specified using
   * an email string, or a base Email object
   */
  constructor(emailAddress: string | Email) {
    if (emailAddress instanceof Email) {
      this.emailAddress = emailAddress.toString();
    } else if (validateEmailAddress(emailAddress)) {
      this.emailAddress = emailAddress;
    } else {
      throw new TypeError(`Invalid email ${emailAddress}`);
    }
  }

  /**
   * Returns a string containing the whole email.
   */
  toString() {
    return this.emailAddress;
  }

  /**
   * Returns a string containing the whole email. It returns the same string as
   * the toString() method
   */
  toJSON() {
    return this.emailAddress;
  }

  /**
   * A string containing the username specified before the at (`@`) symbol.
   */
  get username(): string {
    return this.emailAddress.split("@")[0];
  }

  /**
   * A string containing the domain specified after the at (`@`) symbol.
   */
  get hostname(): string {
    return this.emailAddress.split("@")[1];
  }

  /**
   * A string containing the TLD of the domain.
   */
  get tld(): string {
    return this.hostname.split(".")[1];
  }

  set username(value: string) {
    this.emailAddress = `${value}@${this.hostname}`;
  }

  set hostname(value: string) {
    this.emailAddress = `${this.username}@${value}`;
  }

  set tld(value: string) {
    this.emailAddress = `${this.username}@${
      this.hostname.split(".")[0]
    }.${value}`;
  }
}
