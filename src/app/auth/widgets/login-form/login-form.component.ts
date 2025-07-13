import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    imports: [
        ReactiveFormsModule,
    ],
    templateUrl: './login-form.component.html',
    styleUrl: './login-form.component.scss',
    standalone: true,
})
export class LoginFormComponent {
    loginForm: any;

    onSubmit() {

    }
}
