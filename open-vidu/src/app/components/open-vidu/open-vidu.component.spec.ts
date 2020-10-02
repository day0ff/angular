import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenViduComponent } from './open-vidu.component';

describe('OpenViduComponent', () => {
  let component: OpenViduComponent;
  let fixture: ComponentFixture<OpenViduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenViduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenViduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
