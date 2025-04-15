import { Injectable } from '@angular/core';
import { User, UsersService } from './users.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private currentUser: User | null = null;
  private loggedInUserKey = 'loggedInUser';
  private loggedInUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('loggedInUser') || 'null'));
  loggedInUser$ = this.loggedInUserSubject.asObservable();

  constructor(private userService: UsersService) { }
  login(username: string, password: string): boolean {
    const user = this.userService.findUser(username, password);
    console.log('chegou aqui 2')
    if (user) {
      
      this.loggedInUserSubject.next(user); 
      localStorage.setItem(this.loggedInUserKey, JSON.stringify(user));
      console.log('chegou aqui 3')
      return true;
    }
    return false;
  }
  get loggedInUser() {
    const user = localStorage.getItem(this.loggedInUserKey);
    return user ? JSON.parse(user) : null;
  }
  
  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.loggedInUserSubject.next(null); // Remove o usuário logado
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
