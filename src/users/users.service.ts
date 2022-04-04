import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john@gmail.com',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'bobby@gmail.com',
      password: 'changeit',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
