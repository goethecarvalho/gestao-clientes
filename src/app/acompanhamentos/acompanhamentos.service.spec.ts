import { TestBed } from '@angular/core/testing';
import { AcompanhamentosService } from './acompanhamentos.service';

describe('AcompanhamentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcompanhamentosService = TestBed.get(AcompanhamentosService);
    expect(service).toBeTruthy();
  });
});
