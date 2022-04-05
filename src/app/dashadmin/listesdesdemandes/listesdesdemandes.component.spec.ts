import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesdesdemandesComponent } from './listesdesdemandes.component';

describe('ListesdesdemandesComponent', () => {
  let component: ListesdesdemandesComponent;
  let fixture: ComponentFixture<ListesdesdemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesdesdemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesdesdemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
