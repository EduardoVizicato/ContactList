import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroServicesService {

  constructor(private http : HttpClient) { }

  getContact(){
    this.http.get("https://localhost:7180/api/Contact")
  }
}
