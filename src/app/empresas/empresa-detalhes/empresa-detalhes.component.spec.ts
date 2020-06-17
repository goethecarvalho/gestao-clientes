import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaDetalhesComponent } from './empresa-detalhes.component';

describe('EmpresaDetalhesComponent', () => {
  let component: EmpresaDetalhesComponent;
  let fixture: ComponentFixture<EmpresaDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
