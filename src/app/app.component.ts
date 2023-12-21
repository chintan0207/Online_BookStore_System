import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'BookStore_App';

  isAdminLoggedIn: boolean
  isCustomerLoggedIn: boolean
  constructor(private router: Router){ }

ngOnInit(){
  this.router.events.subscribe(event => {
    if(event.constructor.name === "NavigationEnd"){
      this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
      this.isCustomerLoggedIn = StorageService.isCustomerLoggedIn();
    }
  })
}

logout(){
  StorageService.signout();
  this.router.navigateByUrl("/login");
}

}
