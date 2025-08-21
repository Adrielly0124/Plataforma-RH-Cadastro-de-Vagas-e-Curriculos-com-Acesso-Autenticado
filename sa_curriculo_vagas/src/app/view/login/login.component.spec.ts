import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve mostrar mensagem de administrador quando userRole for admin', () => {
    component.userRole = 'admin';
    fixture.detectChanges();
    const adminMsg = fixture.debugElement.query(By.css('.admin-message'));
    expect(adminMsg).toBeTruthy();
    expect(adminMsg.nativeElement.textContent).toContain('Bem-vindo, Administrador');
  });

  it('deve mostrar mensagem de candidato quando userRole for candidato', () => {
    component.userRole = 'candidato';
    fixture.detectChanges();
    const userMsg = fixture.debugElement.query(By.css('.user-message'));
    expect(userMsg).toBeTruthy();
    expect(userMsg.nativeElement.textContent).toContain('Bem-vindo, Candidato');
  });

  it('não deve mostrar nenhuma mensagem quando userRole for indefinido', () => {
    component.userRole = undefined;
    fixture.detectChanges();
    const adminMsg = fixture.debugElement.query(By.css('.admin-message'));
    const userMsg = fixture.debugElement.query(By.css('.user-message'));
    expect(adminMsg).toBeNull();
    expect(userMsg).toBeNull();
  });
});
