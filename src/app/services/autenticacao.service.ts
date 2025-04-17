import { Injectable } from '@angular/core';
import { User, UsersService } from './users.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private currentUser: User | null = null;
  private loggedInUserKey = 'loggedInUser';
  private loggedInUserSubject = new BehaviorSubject<User | null>(null);
  loggedInUser$ = this.loggedInUserSubject.asObservable();

  constructor(private userService: UsersService) { }
  cadastra (usuario: string, senha : string , email: string, dataNascimento: Date, nome:string, foto: string, linkedin: string, area: string, descricao: string){
    if(!this.userService.existsUser(usuario)){
      this.userService.addUser(usuario,senha,email, dataNascimento, nome, area, descricao, foto, linkedin);
      return true;
    }
    return false;
   
  }
  
  login(username: string, password: string): boolean {
    const user = this.userService.findUser(username, password);
    console.log('chegou aqui 2')
    if (user) {
      
      this.loggedInUserSubject.next(user);
      return true;
    }
    return false;
  }
  get loggedInUser(): User | null {
    return this.loggedInUserSubject.value;
  }
  
  logout(): void {
    this.loggedInUserSubject.next(null); 
  }
  atualizaUsuario(user: User){
    this.userService.updateUser(user);
    this.loggedInUserSubject.next(user);
  }
 

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        this.currentUser = JSON.parse(userStr);
      }
    }
    return this.currentUser;
  }
  getUser() {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }
}
