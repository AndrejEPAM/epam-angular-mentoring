import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  showModal(question: string): Observable<boolean> {
    return of(window.confirm(question));
  }
}
