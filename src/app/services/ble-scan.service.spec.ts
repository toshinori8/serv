import { TestBed } from '@angular/core/testing';

import { BleScanService } from './ble-scan.service';

describe('BleScanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BleScanService = TestBed.get(BleScanService);
    expect(service).toBeTruthy();
  });
});
