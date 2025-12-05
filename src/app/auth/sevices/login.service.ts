import { Injectable } from '@angular/core';
import { DataProvider } from '../../../shared/services/data-provider.service';
import { finalize, Observable, tap } from 'rxjs';
import { Login } from '../types/Login';
import {AuthToken} from "../types/AuthToken";

@Injectable({
	providedIn: 'root',
})
export class LoginService extends DataProvider<any> {
	isEntranceLoading$ = this.select(state => state.isEntranceLoading);

	constructor() {
		super({});
	}

	entrance(body: Login): Observable<AuthToken> {
		this.setState({isEntranceLoading: true});

		return this.http.post<AuthToken>(`api/v1/account/login`, body).pipe(
			tap((res) => this.setTokens(res)),
			finalize(() => this.setState({ isEntranceLoading: false })),
		)
	}

  refreshToken(): Observable<AuthToken> {
    const refreshToken = localStorage.getItem('refresh_token');

    return this.http.post<AuthToken>(`api/v1/account/refresh`, {refreshToken}).pipe(
      tap((res) => this.setTokens(res))
    )
  }

  setTokens(tokens: AuthToken): void {
    localStorage.setItem('access_token', tokens.accessToken);
    localStorage.setItem('refresh_token', tokens.refreshToken);
  }

  getUserInfo(): Observable<any> {
    if (this.state.userInfo) {
      return this.state.userInfo;
    }

    return this.http.get(`api/v1/account/userInfo`).pipe(
      tap((info) => this.setState({userInfo: info})),
    );
  }

  get accountId(): string {
    return this.state.userInfo.id;
  }
}
