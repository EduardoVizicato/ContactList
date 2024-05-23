import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { EditarcontatoComponent } from './editarcontato/editarcontato.component';


export const routes: Routes = [
    {path: 'cadastro', component: CadastroComponent},
    {path: 'homepage', component: HomepageComponent},
    {path: 'editar', component: EditarcontatoComponent}
];
