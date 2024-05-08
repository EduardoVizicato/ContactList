import { Component } from '@angular/core';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CadastroComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
