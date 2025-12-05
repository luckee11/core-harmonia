import {inject, Injectable} from '@angular/core';
import { DataProvider } from '../../../shared/services/data-provider.service';
import { finalize, Observable, tap } from 'rxjs';
import { HealthCardState } from '../types/HealthCardState';
import { HealthCard } from '../types/HealthCard';
import {LoginService} from "../../auth/sevices/login.service";

@Injectable({
  providedIn: 'root'
})
export class HealthCardService extends DataProvider<Partial<HealthCardState>> {
  cards$: Observable<HealthCard[]> = this.select(s => s.cards) as Observable<HealthCard[]>;
  accountService = inject(LoginService);
  userId = this.accountService.accountId

  constructor() {
    super({})
  }

  getHealthCards(): void {
    this.setState({isHealthCardsLoading: true});

    this.http.get<HealthCard[]>(`api/v1/account/${this.userId}/subjects`).pipe(
        tap(cards => this.setState({cards})),
        finalize(() => this.setState({ isHealthCardsLoading: false })),
    ).subscribe()
  }

  getHealthCard(subjectId: string): Observable<HealthCard> {
    this.setState({isHealthCardLoading: true});


    return this.http.get<HealthCard>(`api/v1/account/${this.userId}/subject/${subjectId}`).pipe(
      finalize(() => this.setState({ isHealthCardLoading: false })),
    )
  }
}
