import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [NavbarComponent, RouterLink, HomepageComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}
