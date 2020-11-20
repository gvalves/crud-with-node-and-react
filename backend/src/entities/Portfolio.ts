export class Portfolio {
  public readonly id: number;
  public description: string;
  public details: string;

  constructor(props: Omit<Portfolio, 'id'>, id?: number) {
    if (id) this.id = id;
    Object.assign(this, props);
  }
}
