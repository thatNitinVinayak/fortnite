import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFnComponent } from './search-fn.component';

describe('SearchFnComponent', () => {
  let component: SearchFnComponent;
  let fixture: ComponentFixture<SearchFnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
