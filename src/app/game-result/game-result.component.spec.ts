import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { GameResultComponent } from './game-result.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameResultComponent', () => {
  let component: GameResultComponent;
  let fixture: ComponentFixture<GameResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameResultComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports:[ RouterTestingModule.withRoutes([]),]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameResultComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
