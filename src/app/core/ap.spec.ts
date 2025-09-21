import { TestBed } from '@angular/core/testing';

import { Ap } from './ap';

describe('Ap', () => {
  let service: Ap;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ap);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
