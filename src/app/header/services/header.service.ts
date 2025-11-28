import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class HeaderService {
  #headerTemplate: BehaviorSubject<TemplateRef<HTMLElement> | null> = new BehaviorSubject<TemplateRef<HTMLElement> | null>(null);
  headerTemplate$ = this.#headerTemplate.asObservable();

  setHeader(template: TemplateRef<HTMLElement>): void {
    this.#headerTemplate.next(template);
  }
}
