import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { ContatoService } from '../services/contato.service';
import { Contact } from '../models/Contact';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink,CadastroComponent, HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

  contatos : Contact[] = [];
  contatosGeral : Contact[] = []

  constructor(private contatctService : ContatoService) { }

  ngOnInit(): void {
    this.contatctService.GetContact().subscribe(data =>{
      console.log(data)
    });
  }
}
