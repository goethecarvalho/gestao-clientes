import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoDialogComponent } from './acompanhamento-dialog.component';

describe('AcompanhamentoDialogComponent', () => {
  let component: AcompanhamentoDialogComponent;
  let fixture: ComponentFixture<AcompanhamentoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanhamentoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanhamentoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
