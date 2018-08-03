import { Component, OnInit,Input } from '@angular/core';
import { SelectedBallService } from '../selected-ball.service';
import { Ball } from '../ball';
import { BallService } from '../ball.service';

import {GameResultService} from '../game-result.service';

import {Router} from "@angular/router";

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {
  @Input() betMoney: number=0;
  
  balls: Ball[];
  selectedBalls: string[] = [];
  gameResult: string;
  randomBall: string;
  minimumBet: number=5;
  profitTax: number=1.5;
  profit:string="0";
  nBalls:number;
  routerLink:string="ball-selector";
  constructor(
    private router: Router,
    private ballService: BallService,
    public selectedBallService: SelectedBallService,
    public gameResultService: GameResultService,
  ) { }
  

  ngOnInit() {
    this.getBalls();
  }
  getProfit(nBalls:number,betMoney:number){
    return nBalls*betMoney*this.profitTax;
      }
  // Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
  setBet(){
    if(this.betMoney >0 && this.selectedBallService.getLength() >0 ){
return this.betMoney*this.selectedBallService.getLength();}
else return 0;

  }
  ballsAndBet():boolean{
    if(this.betMoney>=this.minimumBet && this.nBalls >0){
      this.routerLink="game-result";
      return true;
    }
      else{
        this.routerLink="ball-selector";
        return false;
        
      }
  }
  placeBet(){
    this.randomBall=this.getRandomInt(1,11).toString();
    //alert(this.randomBall+" "+this.selectedBallService.indexOfBall(this.randomBall));
    this.nBalls=this.selectedBallService.getLength();
   if(this.ballsAndBet()){
if(this.selectedBallService.indexOfBall(this.randomBall)!=-1){
  this.profit=this.getProfit(this.nBalls,this.betMoney).toString();
  this.gameResult= "YOU WON, have selected" +this.randomBall;
  
  }
  else{
    this.profit="0";
    this.gameResult= "YOU LOOSE, havent selected"+this.randomBall;
  }
  var objRandomBall:Ball =this.selectedBallService.ballfromIndex(this.randomBall);
this.gameResultService.setGameResult(objRandomBall,this.gameResult,this.profit);
alert(objRandomBall.id+" "+this.gameResult+" "+this.profit); 
this.router.navigate([this.routerLink]);

//alert(this.randomBall+"->"+this.selectedBallService.selectedBalls.indexOf(this.randomBall)+"->"+this.selectedBallService.selectedBalls);

}
else{
  alert("Please!! need to set a bet greater or equal than "+this.minimumBet+" and choose any ball to play this game")
  this.betMoney
}
}
  add(selectedBall: string) {
    this.selectedBalls.push(selectedBall);
  }
  clear() {
    this.selectedBalls = [];
  }
  getBalls(): void {
    this.ballService.getBalls()
      .subscribe(balls => this.balls = balls);
  }

}
