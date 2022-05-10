import { Role } from '../../auth/enum/role'

export class User {
  constructor(
    public userId: number,
    public username: string,
    public password: string,
    public roles: Role[],
  ) {}

  get isAdmin(): boolean {
    return this.roles.includes(Role.Admin)
  }
}
