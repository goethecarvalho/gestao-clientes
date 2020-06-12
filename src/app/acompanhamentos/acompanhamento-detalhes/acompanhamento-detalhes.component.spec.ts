import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoDetalhesComponent } from './acompanhamento-detalhes.component';

describe('AcompanhamentoDetalhesComponent', () => {
  let component: AcompanhamentoDetalhesComponent;
  let fixture: ComponentFixture<AcompanhamentoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanhamentoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanhamentoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
