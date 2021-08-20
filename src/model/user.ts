class UserDetail {
  public id!: number;
  public name!: string;
}

export class User {
  public jwt!: string;
  public user!: UserDetail;
}
