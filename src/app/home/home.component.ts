import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private r: Router){
  }

  goToSignUp(){
    this.r.navigate(['/register'])
  }
  goToLogin(){
    this.r.navigate(['/login'])
  }

  toSign(){
    this.r.navigate(['/register']);
    }
  
    toLogin(){
      this.r.navigate(['/login']);
  
    }
}
