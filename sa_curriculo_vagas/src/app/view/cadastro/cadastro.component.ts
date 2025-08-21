import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';

@Component({
  standalone: true,
  selector: 'app-registro',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  providers: [AuthService],
  template: ` <div class="card">
    <h2>Criar conta</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="grid">
      <input class="input" placeholder="E-mail" formControlName="email" />
      <input
        class="input"
        placeholder="Senha"
        type="password"
        formControlName="senha"
      />
      <button class="btn btn-primary" [disabled]="form.invalid">
        Registrar
      </button>
    </form>
    <p>Já tem conta? <a routerLink="/login">Entre</a></p>
  </div>`,
})
export class RegistroComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(4)]],
  });
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
  onSubmit() {
    const { email, senha } = this.form.value;
    this.auth.registrar(email!, senha!).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
