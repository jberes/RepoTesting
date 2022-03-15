import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindSwaggerTestService } from './northwind-swagger-test.service';

describe('NorthwindSwaggerTestService', () => {
  let service: NorthwindSwaggerTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NorthwindSwaggerTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
