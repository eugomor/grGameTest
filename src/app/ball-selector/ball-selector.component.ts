import { Component, OnInit } from '@angular/core';
import { Ball } from '../ball';
import { BallService } from '../ball.service';
@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.css']
})

export class BallSelectorComponent implements OnInit {
  balls: Ball[];
 
  selectedBall:boolean=false;
  //selectedBall: Ball;
  //selectedBalls: string[]=[];
  constructor(private ballService: BallService) { }

  ngOnInit() {
    this.getBalls();
   
   
  }
  
  indexOfBall(id:string){
    //alert(this.ballService.indexOfBall(id));
    return this.ballService.indexOfBall(id);

  }
 /*countBalls(selectedBall: string){
  this.selectedBalls.push(selectedBall);
    
 }*/
 
  getBalls(): void {
    this.ballService.getBalls()

      .subscribe(balls => this.balls = balls);
  }
  
}
