import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandercongeComponent } from './demanderconge.component';

describe('DemandercongeComponent', () => {
  let component: DemandercongeComponent;
  let fixture: ComponentFixture<DemandercongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandercongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandercongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
