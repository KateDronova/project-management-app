import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalColumnComponent } from './modal-column.component';

describe('ModalColumnComponent', () => {
  let component: ModalColumnComponent;
  let fixture: ComponentFixture<ModalColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalColumnComponent]
    });
    fixture = TestBed.createComponent(ModalColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
