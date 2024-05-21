import { TestBed } from '@angular/core/testing';

import { CadastroServicesService } from './cadastro-services.service';

describe('CadastroServicesService', () => {
  let service: CadastroServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
