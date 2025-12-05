import { Routes } from '@angular/router';
import { AuthComponent } from './auth/pages/auth/auth.component';
import { MainComponent } from './main/pages/main/main.component';
import { MessengerComponent } from './messenger/pages/messenger/messenger.component';
import {QuestionnaireComponent} from "./questionnaire/pages/questionnaire/questionnaire.component";

export const APP_ROUTES: Routes = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: 'login',
		component: AuthComponent,
	},
	{
		path: 'messenger/:subjectId',
		component: MessengerComponent
	},
  {
    path: 'questionnaire/:type',
    component: QuestionnaireComponent
  }
];
