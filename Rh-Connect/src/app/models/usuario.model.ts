export interface Usuario {
  id?: number;
  email: string;
  senha: string;
  tipo: 'admin' | 'comum';
}
