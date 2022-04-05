import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaremployeeComponent } from './sidebaremployee.component';

describe('SidebaremployeeComponent', () => {
  let component: SidebaremployeeComponent;
  let fixture: ComponentFixture<SidebaremployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebaremployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaremployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
