import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3008/usuarios';
  private usuarioLogado: Usuario | null = null;

  constructor(private http: HttpClient, private router: Router) {
    const dados = localStorage.getItem('usuarioAtual');
    if (dados) this.usuarioLogado = JSON.parse(dados);
  }

  login(email: string, senha: string): Observable<boolean> {
    return this.http
      .get<Usuario[]>(`${this.apiUrl}?email=${email}&senha=${senha}`)
      .pipe(
        map((users) => (users.length > 0 ? users[0] : null)),
        tap((user) => {
          if (user) {
            this.usuarioLogado = user;
            localStorage.setItem('usuarioAtual', JSON.stringify(user));
          }
        }),
        map((user) => !!user)
      );
  }

  registrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  logout(): void {
    this.usuarioLogado = null;
    localStorage.removeItem('usuarioAtual');
    this.router.navigate(['/login']);
  }

  usuarioAtual(): Usuario | null {
    return this.usuarioLogado;
  }

  isAdmin(): boolean {
    return this.usuarioLogado?.tipo === 'admin';
  }

  isLogado(): boolean {
    return !!this.usuarioLogado;
  }
}
