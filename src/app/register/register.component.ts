import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private fb: FormBuilder,
    private authService: AuthService) {

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

  
  register() {
    if (this.registerForm) {
      if (this.registerForm.valid) {
          this.authService.signup(this.registerForm.value).subscribe((res) =>{
             if(res.id!=null){
              alert("You're registered Successfully")
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





