import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetSlipComponent }      from './bet-slip/bet-slip.component';
import { BallSelectorComponent }   from './ball-selector/ball-selector.component';
import { BallDetailComponent }  from './ball-detail/ball-detail.component';
import {GameResultComponent }  from './game-result/game-result.component'
const routes: Routes = [
  { path: 'ball-selector', component: BallSelectorComponent},
    {path: 'bet-slip', component: BetSlipComponent },
    { path: '', redirectTo: '/ball-selector', pathMatch: 'full' },
    { path: 'detail/:id', component: BallDetailComponent },
    { path: 'game-result', component: GameResultComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
