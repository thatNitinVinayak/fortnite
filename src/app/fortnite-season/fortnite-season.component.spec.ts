import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortniteSeasonComponent } from './fortnite-season.component';

describe('FortniteSeasonComponent', () => {
  let component: FortniteSeasonComponent;
  let fixture: ComponentFixture<FortniteSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortniteSeasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortniteSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
