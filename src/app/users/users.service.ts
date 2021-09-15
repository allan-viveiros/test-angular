import { Injectable, EventEmitter } from '@angular/core';
import { USERS } from '../data/users';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersChanged = new EventEmitter<User[]>();
  private users: User[] = USERS;

  constructor() { }

  private sortedUsers(): User[] {
    return this.users
      .slice()
      .sort((a: User, b: User) => (a.id > b.id ? 1 : a.id === b.id ? 0 : -1));
  }

  addUser(user: User) {
    this.users = [user, ...this.users];
    this.usersChanged.emit(this.sortedUsers());
  }

  getUsers(): User[] {
    return this.sortedUsers();
  }

  getUsersById(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  updateUser(id: number, changes: User) {
    const usersWithoutUser = this.users.filter((u) => u.id !== id);
    this.users = [...usersWithoutUser, { ...changes, id }];
    this.usersChanged.emit(this.sortedUsers());
  }
}
