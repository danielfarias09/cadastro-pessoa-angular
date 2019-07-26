import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [
	{ path:  '', redirectTo:  'login', pathMatch:  'full' },
	{
    path:  'listar-pessoas',
    component:  ListarPessoaComponent,
    canActivate:[AuthGaurdService]
	},
	{
    path:  'cadastrar-pessoa',
    component:  CadastrarPessoaComponent,
    canActivate:[AuthGaurdService]
  },
    {
      path:  'editar-pessoa/:id',
      component:  CadastrarPessoaComponent,
      canActivate:[AuthGaurdService]
    },
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'logout',
      component: LogoutComponent,
      canActivate:[AuthGaurdService]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
