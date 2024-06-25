import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';
import { AddContactRequest } from '../models/AddContactRequest';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private ApiUrl = `${environment.ApiUrl}/Contact`

  constructor(private http : HttpClient) { }

  GetContact() : Observable<Contact[]>{
      return this.http.get<Contact[]>(this.ApiUrl);
  }

  CreateContact(contato : AddContactRequest) : Observable<AddContactRequest>{
      return this.http.post<AddContactRequest>(`${this.ApiUrl}`, contato);
  }
}
