import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCta } from './services-cta';

describe('ServicesCta', () => {
  let component: ServicesCta;
  let fixture: ComponentFixture<ServicesCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesCta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
