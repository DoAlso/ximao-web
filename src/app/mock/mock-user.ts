import {InMemoryDbService} from 'angular-in-memory-web-api';
import {User} from '../model/user';

export class InMemoryUserService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        userId: 1,
        username: '胡亚曦',
        account: 'admin',
        password: '123456'
      }
    ];
    return {getUsers: users};
  }
}
