import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSidebar } from './contact-sidebar';

describe('ContactSidebar', () => {
  let component: ContactSidebar;
  let fixture: ComponentFixture<ContactSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
