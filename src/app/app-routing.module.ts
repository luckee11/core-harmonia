import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/pages/auth/auth.component';
import { MainComponent } from './main/pages/main/main.component';
import { MessengerComponent } from './messenger/pages/messenger/messenger.component';
import {QuestionnaireComponent} from "./questionnaire/pages/questionnaire/questionnaire.component";

const routes: Routes = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: 'login',
		component: AuthComponent,
	},
	{
		path: 'messenger/:type',
		component: MessengerComponent
	},
  {
    path: 'questionnaire/:type',
    component: QuestionnaireComponent
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
