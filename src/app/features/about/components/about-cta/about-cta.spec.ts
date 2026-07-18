import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCta } from './about-cta';

describe('AboutCta', () => {
  let component: AboutCta;
  let fixture: ComponentFixture<AboutCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
