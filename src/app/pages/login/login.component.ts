import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginform:FormGroup;
  constructor (private fb:FormBuilder ,private router:Router){
    this.loginform = this.fb.group({
      UserName: [''],
      Password: ['']
    });

  }
  onSubmit(){
const{username,password}=this.loginform.value;
if(username==='yasmin'&& password==="12345"){
  this.router.navigate(["/home"]);

} else {
  alert('Invalid credentials');
}
  }

}
