import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AcompanhamentoFormComponent } from './acompanhamento-form.component';

describe('FormComponent', () => {
  let component: AcompanhamentoFormComponent;
  let fixture: ComponentFixture<AcompanhamentoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanhamentoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanhamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
