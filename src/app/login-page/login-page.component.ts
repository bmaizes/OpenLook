import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  constructor (
    private auth: AngularFireAuth,
    private router: Router,
  ){ }
  logIn(): void {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => this.router.navigateByUrl('/'));
  }
}
