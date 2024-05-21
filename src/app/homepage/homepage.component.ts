import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink,CadastroComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
