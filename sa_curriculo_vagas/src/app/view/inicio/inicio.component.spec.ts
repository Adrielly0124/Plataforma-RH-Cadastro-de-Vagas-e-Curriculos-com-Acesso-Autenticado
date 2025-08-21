import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioComponent } from './inicio.component';
import { By } from '@angular/platform-browser';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioComponent]
    });
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve mostrar links de candidato quando userRole for candidato', () => {
    component.userRole = 'candidato';
    fixture.detectChanges();
    const cadastrarLink = fixture.debugElement.query(By.css('a[routerLink="/curriculo/cadastrar"]'));
    const perfilLink = fixture.debugElement.query(By.css('a[routerLink="/perfil"]'));
    expect(cadastrarLink).toBeTruthy();
    expect(perfilLink).toBeTruthy();
  });

  it('deve mostrar link de admin quando userRole for admin', () => {
    component.userRole = 'admin';
    fixture.detectChanges();
    const gerenciarLink = fixture.debugElement.query(By.css('a[routerLink="/vagas/gerenciar"]'));
    expect(gerenciarLink).toBeTruthy();
  });

  it('não deve mostrar links de candidato quando userRole for admin', () => {
    component.userRole = 'admin';
    fixture.detectChanges();
    const cadastrarLink = fixture.debugElement.query(By.css('a[routerLink="/curriculo/cadastrar"]'));
    const perfilLink = fixture.debugElement.query(By.css('a[routerLink="/perfil"]'));
    expect(cadastrarLink).toBeNull();
    expect(perfilLink).toBeNull();
  });

  it('não deve mostrar link de admin quando userRole for candidato', () => {
    component.userRole = 'candidato';
    fixture.detectChanges();
    const gerenciarLink = fixture.debugElement.query(By.css('a[routerLink="/vagas/gerenciar"]'));
    expect(gerenciarLink).toBeNull();
  });
});
