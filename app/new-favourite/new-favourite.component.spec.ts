import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFavouriteComponent } from './new-favourite.component';

describe('NewFavouriteComponent', () => {
  let component: NewFavouriteComponent;
  let fixture: ComponentFixture<NewFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
