import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router:Router) {

  }


  ngOnInit(): void {

    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      checkPassword: ['', [Validators.required, this.confirmationValidator]]
    })

  }

  confirmationValidator = (control: FormControl): {[s:string]: boolean} => {
    if(!control.value ){
      return {required: true};
    }
    else if(control.value !== this.registerForm.controls['password'].value){
      return {confirm: true, error: true}
    }
    return {};
  }

  goToLogin(){
       this.router.navigate(['/login']);
  }

  
  register() {
    if (this.registerForm) {
      if (this.registerForm.valid) {
        console.log(this.registerForm.value);
          this.authService.signup(this.registerForm.value).subscribe((res) =>{
            console.log(res);
             if(res.id!=null){
              alert("You're registered Successfully")
              this.goToLogin();
             }else{
              alert("somthing went to wrong")
             }
          },error => alert(error.error))
      }
      else{
        alert("Please fill the Required fields")
      }
    }

  }









}





