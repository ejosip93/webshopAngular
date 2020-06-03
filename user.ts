export class User {
  public name: string;
  public surname: string;
  public phone: string;
  public email: string;
  public address: string;
  public items: string;

  constructor() {}

  reset() {
    this.name = '';
    this.surname = '';
    this.phone = '';
    this.email = '';
    this.address = '';
  }
}
