import { Injectable } from '@angular/core';
import { DataProvider } from '../../../shared/services/data-provider.service';
import { ChatIconByCategory } from '../../main/main.enums';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService extends DataProvider<any>{

  constructor() {
    super({})
  }

  createChat(category: keyof typeof ChatIconByCategory, cardId: string): Observable<void> {
    return this.http.post<void>(`api/v1/subject/${cardId}/chat/${category}/create`, {})
  }
}
