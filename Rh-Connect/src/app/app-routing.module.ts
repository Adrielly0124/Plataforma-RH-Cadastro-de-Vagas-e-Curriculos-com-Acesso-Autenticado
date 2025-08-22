import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { CurriculoFormComponent } from './view/curriculo-form/curriculo-form.component';
import { CurriculoListComponent } from './view/curriculo-list/curriculo-list.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { AdminVagasComponent } from './view/admin-vagas/admin-vagas.component';

import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'vagas', pathMatch: 'full' },

  // público
  { path: 'vagas', component: VagasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },

  // usuário comum
  {
    path: 'curriculo-form',
    component: CurriculoFormComponent,
    canActivate: [AuthGuard],
  },
  {
     path: 'painel-vagas',
    component: PainelVagasComponent,
    canActivate: [AdminGuard],
  },

  // admin
  {
    path: 'painel-vagas',
    component: PainelVagasComponent,
    canActivate: [AdminGuard],
  },
  
  {
    path: 'admin-vagas',
    component: AdminVagasComponent,
    canActivate: [AdminGuard],
  },

  // fallback
  { path: '**', redirectTo: 'vagas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
