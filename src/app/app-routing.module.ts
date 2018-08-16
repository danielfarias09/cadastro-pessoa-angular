import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';

const routes: Routes = [
	{ path:  '', redirectTo:  'pessoas', pathMatch:  'full' },
	{
    path:  '',
    component:  ListarPessoaComponent
	},
	{
    path:  'cadastrar-pessoa',
    component:  CadastrarPessoaComponent
  },
    {
      path:  'editar-pessoa/:id',
      component:  CadastrarPessoaComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
