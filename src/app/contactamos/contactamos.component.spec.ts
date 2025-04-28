import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactamosComponent } from './contactamos.component';

describe('ContactamosComponent', () => {
  let component: ContactamosComponent;
  let fixture: ComponentFixture<ContactamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactamosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
