import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCheckboxesComponent } from './service-checkboxes.component';

describe('ServiceCheckboxesComponent', () => {
  let component: ServiceCheckboxesComponent;
  let fixture: ComponentFixture<ServiceCheckboxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceCheckboxesComponent]
    });
    fixture = TestBed.createComponent(ServiceCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
