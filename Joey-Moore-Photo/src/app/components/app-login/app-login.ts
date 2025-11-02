import { Component } from '@angular/core';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatAnchor } from "@angular/material/button";
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-login',
  imports: [MatFormField, MatLabel, MatInput, MatAnchor , MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './app-login.html',
  styleUrl: './app-login.css',
})
export class AppLogin {
  email = '';
  password = '';

  constructor(private auth: Auth, private router: Router){}

  async login() {
    try {
      const userCred = await signInWithEmailAndPassword(this.auth, this.email, this.password)
      console.log("User was logged in")
      alert("Login Succ")
      this.router.navigate(['/home'])
    }
    catch (error) {
      console.log('Login Error', error)
      alert('Invalid email and password')
    }
  }  
}

