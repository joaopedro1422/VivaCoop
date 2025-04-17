import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
  email?: string;
  dataNascimento?: Date;
  area?: string;
  descricao?: string;
  fotoUrl?: string;
  linkedin?: string;
  admin?: boolean;
}

const USUARIOS_INICIAIS: User[] = [
  {
    id: 1,
    username: 'adm',
    password: '123',
    name: 'Demétrio Mestre',
    area: 'Educação',
    descricao: 'Professor com 10 anos de experiência.',
    fotoUrl: '/assets/imagens/demetrio.jpg',
    linkedin: 'https://br.linkedin.com/in/demetrio-mestre-381ba4a7',
    admin: true,
  },
  {
    id: 2,
    username: 'maria',
    password: '456',
    name: 'Maria Oliveira',
    area: 'Consultoria',
    descricao: 'Especialista em negócios sustentáveis.',
    fotoUrl: '/assets/imagens/maria.jpg'
  },
  {
    id: 3,
    username: 'nata',
    password: '789',
    name: 'Natã Cavalcante',
    area: 'Apoio Financeiro',
    descricao: 'Ampla experiência em gestão financeira, controle orçamentário',
    fotoUrl: '/assets/imagens/natan.jpg',
    linkedin: 'https://www.linkedin.com/in/nat%C3%A3-cavalcante-19b340300/'
  }
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [...USUARIOS_INICIAIS];
  
  private usersSubject = new BehaviorSubject<User[]>(this.users);

  constructor() { }

  getUsers(): User[] {
    return this.usersSubject.getValue();
  }

  getUsers$(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  addUser(
    username: string,
    password: string,
    email: string,
    dataNascimento: Date,
    name: string,
    area?: string,
    descricao?: string,
    fotoUrl?: string,
    linkedin?: string
  ): boolean {
    const newId = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1;

    const newUser: User = {
      id: newId,
      username,
      password,
      email,
      dataNascimento,
      name,
      area,
      descricao,
      fotoUrl,
      linkedin
    };

    this.users.push(newUser);
    this.usersSubject.next([...this.users]);
    return true;
  }

  existsUser(username: string) {
    return this.users.find((u) => u.username === username);
  }

  findUser(username: string, password: string): User | undefined {
    return this.users.find((u) => u.username === username && u.password === password);
  }

  removerUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    this.usersSubject.next([...this.users]);
  }

  updateUser(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
      this.usersSubject.next([...this.users]);
    }
    console.log(this.users);
  }
}