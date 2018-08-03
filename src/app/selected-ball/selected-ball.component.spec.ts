import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { SelectedBallService } from '../selected-ball.service';
import { SelectedBallComponent } from './selected-ball.component';

describe('SelectedBallComponent', () => {
  let component: SelectedBallComponent;
  let fixture: ComponentFixture<SelectedBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedBallComponent ],
      providers: [ SelectedBallService ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
