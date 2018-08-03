
import { Ball } from './ball';
export class GameResult {
  
    
    winnerBall: Ball;
    message: string;
    profit: string;
    constructor(winnerBall:Ball,message:string,profit:string) {

this.winnerBall=winnerBall;
this.message=message;
this.profit=profit;
    }
  }