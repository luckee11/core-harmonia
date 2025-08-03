import { Injectable } from '@angular/core';
import { DataProvider } from '../../../shared/services/data-provider.service';
import { finalize, Observable, tap } from 'rxjs';
import { HealthCardState } from '../interfaces/HealthCardState';
import { HealthCard } from '../interfaces/HealthCard';

@Injectable({
  providedIn: 'root'
})
export class HealthCardService extends DataProvider<Partial<HealthCardState>> {
  cards$: Observable<HealthCard[]> = this.select(s => s.cards) as Observable<HealthCard[]>;

  constructor() {
    super({})
  }

  getHealthCards(): void {
    this.setState({isHealthCardsLoading: true});

    this.http.get<HealthCard[]>(`api/v1/subjects`).pipe(
        tap(cards => this.setState({cards})),
        finalize(() => this.setState({ isHealthCardsLoading: false })),
    ).subscribe()
  }
}
