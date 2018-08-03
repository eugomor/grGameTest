import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {BallService} from './ball.service';
import {SelectedBallService} from './selected-ball.service';

import { BallSelectorComponent } from './ball-selector/ball-selector.component';
import { BetSlipComponent } from './bet-slip/bet-slip.component';
import { BallDetailComponent } from './ball-detail/ball-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { SelectedBallComponent } from './selected-ball/selected-ball.component';
import { GameResultComponent } from './game-result/game-result.component';

@NgModule({
  declarations: [
    AppComponent,
    
     BallSelectorComponent,
     BetSlipComponent,
     BallDetailComponent,
     SelectedBallComponent,
     GameResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   
    AppRoutingModule
  ],
  providers: [
    BallService,
      SelectedBallService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
