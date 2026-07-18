import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProcess } from './service-process';

describe('ServiceProcess', () => {
  let component: ServiceProcess;
  let fixture: ComponentFixture<ServiceProcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceProcess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceProcess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
