export class Client {
  constructor(
    public id: number,
    public name: string,
    public phone: number,
    public type: string,
    public other?: string
  ) {}
}
