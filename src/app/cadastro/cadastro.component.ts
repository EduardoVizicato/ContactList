import { Component, OnInit, Output, output } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [NavbarComponent, RouterLink, HomepageComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {



  contatoForm! : FormGroup;

  constructor() {
    
  }
  
  ngOnInit(): void {
    
  };  
  
}
