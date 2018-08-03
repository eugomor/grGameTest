import { Component } from '@angular/core';
import {Router} from "@angular/router";

import {SelectedBallService} from "./selected-ball.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
  
    private selectedBallService: SelectedBallService
  ) {}
  ngOnInit() {
    this.startGame();
  }
  
  title = 'Bet Game';

startGame(){
  this.router.navigate(['ball-selector']);
  this.selectedBallService.clear();
}
  }
