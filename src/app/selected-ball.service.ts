import { Injectable } from '@angular/core';
import { Ball } from './ball';
import { BALLS } from './mock-balls';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SelectedBallService {
  selectedBalls:Ball[] = [];
  maxBalls: number=7;
  selectedAndNotBalls:Ball[]=[] ;
  notSelectedBalls:Ball[]=[];
  errorMessage: string="";
  
 
  add(selectedBall:Ball) {
   
    this.errorMessage="";
    
    if (this.indexOfBall(selectedBall.id)==-1){
      if(this.getLength()<=this.maxBalls){
        this.selectedBalls.push(selectedBall);
        this.notSelectedBalls.length=(this.maxBalls+1)-this.getLength();
        this.selectedAndNotBalls=this.selectedBalls.concat(this.notSelectedBalls);
      }
    else{
      this.errorMessage="You have exceeded the Maximum Amount of balls allowed to select, which is: "+(this.maxBalls+1);
    }
    }
    else{this.errorMessage="The Ball "+selectedBall.id+" have been selected allready"}

    if (this.errorMessage!=""){alert(this.errorMessage);}
  }
 notUndefined(ball:Ball):Ball{
if(ball!=undefined)
return ball;
else 
return new Ball("","#C0C0C0");

 }
 /* add2(selectedBall: string,selectedColors:string) {
    this.errorMessage="";
    if (this.indexOfBall(+selectedBall)==-1){
      if(this.selectedBalls.length<=this.maxBalls){
        //this.selectedBalls.push(selectedBall);
        this.selectedColors.push(selectedColors);
      }
    else{
      this.errorMessage="Has superado el Máximo de Bolas Permitido: "+(this.maxBalls+1);
    }
    }
    else{this.errorMessage="la bola "+selectedBall+" ya ha sido elegida"}

    if (this.errorMessage!=""){alert(this.errorMessage);}
  }*/
  
  indexOfBall(id:string){
    
    var index=this.selectedBalls.findIndex(ball => ball.id === id);
    //alert(index);
return index;

  }
  ballfromIndex(id:string):Ball{
    //var index=this.indexOfBall(number);
    var ball:Ball=BALLS.find(ball => ball.id === id);
    //alert(index);
return ball;

  }

getLength(){

var keys = Object.keys(this.selectedBalls);

var len = keys.length
return len;
}

  clear() {
    this.selectedBalls = [];
  }
}
