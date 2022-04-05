import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderemployeeComponent } from './headeremployee.component';

describe('HeaderemployeeComponent', () => {
  let component: HeaderemployeeComponent;
  let fixture: ComponentFixture<HeaderemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
