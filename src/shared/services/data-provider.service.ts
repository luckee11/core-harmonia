import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
	BehaviorSubject,
	combineLatest,
	distinctUntilChanged, filter,
	map,
	mergeMap,
	MonoTypeOperatorFunction,
	Observable,
	take,
} from 'rxjs';

export function filterEmptyArray<T>(): MonoTypeOperatorFunction<T[]> {
	return filter<Array<T>>((values: T[]) =>
		values.every((value) => value !== undefined && value !== null)
	);
}

export class DataProvider<T> {
	private state$: BehaviorSubject<T>;

	protected http = inject(HttpClient);

	constructor(initialState: T) {
		this.state$ = new BehaviorSubject<T>(initialState);
	}

	protected waitOfValue<I = string, J = unknown>(
		streams: Array<Observable<I>>,
		observable: (values: Array<I>) => Observable<J>
	): Observable<J> {
		return combineLatest(streams).pipe(filterEmptyArray(), take(1), mergeMap(observable));
	}

	protected get state(): T {
		return this.state$.getValue();
	}

	protected select<K>(mapFn: (state: T) => K): Observable<K> {
		return this.state$.asObservable().pipe(
			map((state: T) => mapFn(state)),
			distinctUntilChanged(),
		);
	}

	protected setState(newState: Partial<T>) {
		this.state$.next({
			...this.state,
			...newState,
		});
	}
}
