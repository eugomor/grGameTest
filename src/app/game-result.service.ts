import { Injectable } from '@angular/core';
import {GameResult} from './game-result';
import {Ball} from './ball';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameResultService {
 gameResult:GameResult;
 
  constructor() { }
  
  getGameResult():GameResult{
    return this.gameResult;
      }
      
      /*setGameResult(winnerBall: string, message: string, profit: string){

this.gameResult[0]=winnerBall;
this.gameResult[1]=message;
this.gameResult[2]=profit;
}*/
setGameResult(winnerBall: Ball, message: string, profit: string){
this.gameResult=new GameResult(winnerBall,message,profit);
}
}