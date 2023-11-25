import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortniteMapComponent } from './fortnite-map.component';

describe('FortniteMapComponent', () => {
  let component: FortniteMapComponent;
  let fixture: ComponentFixture<FortniteMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortniteMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortniteMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
