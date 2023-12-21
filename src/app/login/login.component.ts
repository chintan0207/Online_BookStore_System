import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage/storage.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private service: AuthService,
    private storageService: StorageService,
    private fb: FormBuilder,
    private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null,[Validators.email, Validators.required]],
      password: [null, Validators.required]
    })
  }

  submitForm(event: Event){
    event.preventDefault();
    this.service.login(this.loginForm.value).subscribe((res) =>{
      console.log(res);

      if(res.userId != null){
        const user = {
          id: res.userId,
          role: res.userRole
        }
        console.log(user);
        // console.log(typeof(res.jwt));
        StorageService.saveToken(res.jwt);
        StorageService.saveUser(user);
        console.log(StorageService.getUserRole());
        if(StorageService.isAdminLoggedIn()){
        this.router.navigateByUrl("admin/show-booklist");
        }else if(StorageService.isCustomerLoggedIn()){
          this.router.navigateByUrl("customer/show-booklist");
        }
      }else{
        alert("Wrong credentials");
      }
    },error => console.log(error));

  }

  goToRegister(){
    this.router.navigate(['/register']);
  }


}
