import { Component } from '@angular/core';
import { LoginFormComponent } from '../../widgets/login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-auth',
    imports: [
        LoginFormComponent,
        ReactiveFormsModule,
    ],
    templateUrl: './auth.component.html',
    standalone: true,
})
export class AuthComponent {

}
