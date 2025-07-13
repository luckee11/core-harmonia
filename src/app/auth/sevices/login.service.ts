import { Injectable } from '@angular/core';
import { DataProvider } from '../../../shared/services/data-provider.service';
import { finalize, Observable, tap } from 'rxjs';
import { Login } from '../interfaces/Login';

@Injectable({
	providedIn: 'root',
})
export class LoginService extends DataProvider<any> {
	isEntranceLoading$ = this.select(state => state.isEntranceLoading);

	constructor() {
		super({});
	}

	entrance(body: Login): Observable<void> {
		this.setState({isEntranceLoading: true});

		console.log(body);

		return this.http.post<void>(`api/account/login`, body).pipe(
			tap(() => this.setState({loginInfo: body})),
			finalize(() => this.setState({ isEntranceLoading: false })),
		)
	}
}
