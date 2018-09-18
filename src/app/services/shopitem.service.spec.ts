import { TestBed, inject } from '@angular/core/testing';

import { ShopitemService } from './shopitem.service';

describe('ShopitemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopitemService]
    });
  });

  it('should be created', inject([ShopitemService], (service: ShopitemService) => {
    expect(service).toBeTruthy();
  }));
});
