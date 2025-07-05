import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    standalone: false
})
export class AuthComponent {
  isLogin = true;

  constructor(
    private router: Router,
  ) {
  }

  toggleForm() {
  }

  entrance() {
    this.router.navigate(['/']);
  }
}
