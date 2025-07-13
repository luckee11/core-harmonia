import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../sevices/login.service';

@Component({
	selector: 'app-login-form',
	imports: [
		ReactiveFormsModule,
	],
	templateUrl: './login-form.component.html',
	styleUrl: './login-form.component.scss',
	standalone: true,
})
export class LoginFormComponent implements OnInit {
	loginForm: any;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private loginService: LoginService,
	) {
	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			login: ['', [Validators.required]],
			password: ['', [Validators.required]],
		});
	}

	onSubmit(): void {
		this.loginService.entrance(this.loginForm.value).subscribe(() => {
			this.router.navigate(['/']);
		})
	}
}
