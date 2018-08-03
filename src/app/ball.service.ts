import { Injectable } from '@angular/core';
import { Ball } from './ball';
import { BALLS } from './mock-balls';
import { SelectedBallService } from './selected-ball.service';
import {GameResultService} from './game-result.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BallService {

  constructor(
    private selectedBallService: SelectedBallService,
    private gameResultService: GameResultService 
  ) { }
  getBalls(): Observable<Ball[]> {
    // TODO: send the selectedBall _after_ fetching the ball
    //this.selectedBallService.add('BallService: fetched balls');
  
    return of(BALLS);
  }
  indexOfBall(id:string){
    return this.selectedBallService.indexOfBall(id);
    
      }
     add(id :string){
      this.selectedBallService.add(BALLS.find(ball => ball.id === id)); 

     }
  getBall(id: string): Observable<Ball> {
       // TODO: send the selectedBall _after_ fetching the ball
       
       //this.selectedBallService.add(`BallService: fetched ball id=${id}`);
       
       this.add(id);  
      //this.selectedBallService.add(`${id}`,`${BALLS.find(ball => ball.id === id).color}`);
    return of(BALLS.find(ball => ball.id === id));
  }
  
}
