import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

	constructor(
		private router: Router,
	) {
	}

	openChat(): void{
		this.router.navigate(['messenger']);
	}
}
