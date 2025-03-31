import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { User, currentUser, allUsers, admin } from '../models/user';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) {}

showRegister = false;
showLogin = true;
rememberMe = false;
isPasswordVisible: boolean = false;

userlogin: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    role: '',
    remember: false
};

userRegister: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    role: '',
    remember: false
}

ngOnInit() {
  const localData = localStorage.getItem('allUsers');
  if(localData == undefined){
  const localArray = [];
    localArray.push(admin);
    localStorage.setItem('allUsers', JSON.stringify(localArray));
  }

  const loggedIn = localStorage.getItem('currentUser');
  if (loggedIn != undefined) {
    const current = JSON.parse(loggedIn);
    if(current.remember){
      this.router.navigate(['/dashboard']);
    }
  }else{
  }
}

togglePasswordVisibility(): void {
  this.isPasswordVisible = !this.isPasswordVisible;
}

hideLogin() {
  this.showLogin = false;
  this.showRegister = true;
}

hideRegister() {
  this.showRegister = false;
  this.showLogin = true;
}

login() {
  const localArray = localStorage.getItem('allUsers');

  if (localArray != null) {
    const localUsers = JSON.parse(localArray);
    let loginDetails = localUsers.find((m:any) => m.email === this.userlogin.email && m.password === this.userlogin.password);
    loginDetails.remember = this.userlogin.remember;
    localStorage.setItem('currentUser', JSON.stringify(loginDetails))
    console.log("Signed In");
    this.router.navigate(['/dashboard']);
  }else{
    alert('Invalid Credentials')
  }
}

register() {
  const localArray = localStorage.getItem('allUsers');
  if (localArray != null){
    const localUsers = JSON.parse(localArray);
    if((localUsers.find((m:any) => m.email === this.userRegister.email)) === undefined) {
    const lastUser = localUsers[localUsers.length - 1];
    this.userRegister.id = lastUser ? lastUser.id + 1 : 1;
    localUsers.push(this.userRegister);
    localStorage.setItem('allUsers', JSON.stringify(localUsers));
    }else{
      alert("Email already in use")
    }
    this.hideRegister();
  }else{
    this.ngOnInit();
  }
}

forgotPassword() {}

}
