import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTableRowComponent } from './track-table-row.component';

describe('TrackTableRowComponent', () => {
  let component: TrackTableRowComponent;
  let fixture: ComponentFixture<TrackTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
