import { Injectable } from '@angular/core';

export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'joao', password: '123', name: 'João Silva' },
    { id: 2, username: 'maria', password: '456', name: 'Maria Souza' },
  ];
  constructor() { }
  getUsers(): User[] {
    return this.users;
  }
  findUser(username: string, password: string): User | undefined {
    return this.users.find(
      (u) => u.username === username && u.password === password
    );
  }
}
