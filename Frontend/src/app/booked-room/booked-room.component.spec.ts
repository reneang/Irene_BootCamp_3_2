import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedRoomComponent } from './booked-room.component';

describe('BookedRoomComponent', () => {
  let component: BookedRoomComponent;
  let fixture: ComponentFixture<BookedRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
