import { Injectable } from '@angular/core';

const TOKEN = 'token'
const USER = 'user'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static saveToken(token: string):void{
    localStorage.removeItem(TOKEN);
    localStorage.setItem(TOKEN, token);  
  }

  static saveUser(user: any):void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }


  static getToken(): any{
     var storedValue = localStorage.getItem(TOKEN);
    return storedValue;
  }

  static getUser(): any{
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) :null ;
  }

  static getUserRole(): string{
    const user = this.getUser();
    if(user == null){
      return '';
    }
    else{return user.role;}
  }

  static isAdminLoggedIn():boolean{
    if(this.getToken() === ""){
      return false;
    }else{
      const role: string = this.getUserRole();
      return role == "ADMIN";
    }
  }

  static isCustomerLoggedIn():boolean{
    if(this.getToken() === ""){
      return false;
    }
      const role: string = this.getUserRole();
      return role == "CUSTOMER";
  }

  static signout(){
    window.localStorage.removeItem(USER);
    window.localStorage.removeItem(TOKEN);
  }

}
