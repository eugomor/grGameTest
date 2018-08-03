import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { AppComponent } from './app.component';
import { BallSelectorComponent } from './ball-selector/ball-selector.component';
import { BetSlipComponent } from './bet-slip/bet-slip.component';
import { BallDetailComponent } from './ball-detail/ball-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { SelectedBallComponent } from './selected-ball/selected-ball.component';
import { GameResultComponent } from './game-result/game-result.component';
import { RouterTestingModule } from '@angular/router/testing';
import {BallService} from './ball.service';

//import {Router} from "@angular/router";
//import { RouterModule } from '@angular/router';

import {SelectedBallService} from "./selected-ball.service";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BallSelectorComponent,
        BetSlipComponent,
        BallDetailComponent,
        SelectedBallComponent,
        GameResultComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        BallService,
        SelectedBallService
      ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        RouterTestingModule.withRoutes([]),
       // RouterModule.forRoot([]),
       // Router
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
   const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bet Game');
  }));
});
