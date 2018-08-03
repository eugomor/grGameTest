import { async, fakeAsync, tick, ComponentFixture, TestBed} from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { By } from '@angular/platform-browser';

import { BallSelectorComponent } from './ball-selector.component';
import { BallService } from '../ball.service';
import { Ball } from '../ball';
import { RouterTestingModule } from '@angular/router/testing';


describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;
  let ballService: BallService;
  let spy: any;
  const mockBalls: Ball[] =  [
    { id: '1', color: 'red' },
  { id: '2', color: '#c8c8b4' },
  { id: '3', color: 'green' },
  { id: '4', color: 'pink' },
  { id: '5', color: 'yellow' },
  { id: '6', color: 'grey' },
  { id: '7', color: 'red' },
  { id: '8', color: '#c8c8b4' },
  { id: '9', color: '#d2debc' },
  { id: '10', color: 'pink' }
  ];
  const mockBallsIncomplete: Ball[] =  [
    { id: '1', color: 'red' },
  { id: '2', color: '#c8c8b4' },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallSelectorComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        BallService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      imports: [
        RouterModule.forRoot([]),
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    ballService = fixture.debugElement.injector.get(BallService);
    //fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

 /* it('should display balls 2, 3, 4 and 5', fakeAsync(() => {
    spy = spyOn(ballService, 'getBalls').and.returnValue(Promise.resolve(mockBalls));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const deElements = fixture.debugElement.queryAll(By.css('.ball h4'));

    expect(deElements.length).toBe(4);
    expect(deElements[0].nativeElement.textContent).toBe('#c8c8b4');
    expect(deElements[1].nativeElement.textContent).toBe('green');
    expect(deElements[2].nativeElement.textContent).toBe('pink');
    expect(deElements[3].nativeElement.textContent).toBe('yellow');
  }));*/

  /*it('should work when less than 5 entries', fakeAsync(() => {
    spy = spyOn(ballService, 'getBalls').and.returnValue(Promise.resolve(mockBallsIncomplete));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const deElements = fixture.debugElement.queryAll(By.css('.ball h4'));

    expect(deElements.length).toBe(1);
    expect(deElements[0].nativeElement.textContent).toBe('green');
  }));*/
});
