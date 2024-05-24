import { Component } from '@angular/core';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { RouterLink } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CadastroComponent, RouterLink, HomepageComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
