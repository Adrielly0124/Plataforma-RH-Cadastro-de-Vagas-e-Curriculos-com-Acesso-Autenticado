import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVagasComponent } from './admin-vagas.component';

describe('AdminVagasComponent', () => {
  let component: AdminVagasComponent;
  let fixture: ComponentFixture<AdminVagasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVagasComponent]
    });
    fixture = TestBed.createComponent(AdminVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
