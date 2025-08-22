import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components (ajustados para suas pastas)
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { CurriculoFormComponent } from './view/curriculo-form/curriculo-form.component';
import { CurriculoListComponent } from './view/curriculo-list/curriculo-list.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { AdminVagasComponent } from './view/admin-vagas/admin-vagas.component';

// Services (pasta 'service')
import { AuthService } from './service/auth.service';
import { VagaService } from './service/vaga.service';
import { CurriculoService } from './service/curriculo.service';

// Guards (pasta 'guard')
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    NavbarComponent,
    CurriculoFormComponent,
    CurriculoListComponent,
    VagasComponent,
    PainelVagasComponent,
    AdminVagasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    VagaService,
    CurriculoService,
    AuthGuard,
    AdminGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
