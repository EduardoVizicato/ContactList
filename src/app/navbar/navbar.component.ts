import { Component } from '@angular/core';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { RouterLink } from '@angular/router';
import { EditarcontatoComponent } from '../editarcontato/editarcontato.component';
import { HomepageComponent } from '../homepage/homepage.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CadastroComponent, RouterLink, EditarcontatoComponent, HomepageComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
