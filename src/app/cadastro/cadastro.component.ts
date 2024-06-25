import { Component, OnInit, Output, output } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';
import { Contact } from '../models/Contact';
import { AddContactRequest } from '../models/AddContactRequest';
import { ContatoService } from '../services/contato.service';
import { Router, response } from 'express';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [NavbarComponent, RouterLink, HomepageComponent,FormsModule,ReactiveFormsModule,],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  model : AddContactRequest;
  constructor(private contactService: ContatoService) {
    this.model = {
      name: '',
      mobile: '',
    }
  }

  onFormSubmit() {
    console.log(this.model);
    this.contactService.CreateContact(this.model)
    .subscribe({
      next: (response) => {
        //this.router.navigate
        console.log(response);
      }
    })
  }


  
}
