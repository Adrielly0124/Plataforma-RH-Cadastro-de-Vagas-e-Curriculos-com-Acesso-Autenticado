import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  erro = '';
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  entrar() {
    if (this.form.invalid) return;
    const { email, senha } = this.form.value;
    this.auth.login(email!, senha!).subscribe((ok) => {
      if (!ok) {
        this.erro = 'Credenciais inválidas';
        return;
      }
      const u = this.auth.usuarioAtual();
      if (u?.tipo === 'admin') {
        this.router.navigate(['/admin-vagas']);
      } else {
        this.router.navigate(['/inicio']);
      }
    });
  }
}
