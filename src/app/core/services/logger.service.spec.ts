import { TestBed } from '@angular/core/testing';

import { Logger } from './logger.service';

describe('LoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Logger = TestBed.get(Logger);
    expect(service).toBeTruthy();
  });
});
