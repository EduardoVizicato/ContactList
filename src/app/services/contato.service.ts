import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private ApiUrl = `${environment.ApiUrl}/Contact`

  constructor(private http : HttpClient) { }

  GetContact() : Observable<Contact[]>{
      return this.http.get<Contact[]>(this.ApiUrl);
  }
}
