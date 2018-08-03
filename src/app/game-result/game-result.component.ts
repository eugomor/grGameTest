import { Component, OnInit } from '@angular/core';
import {GameResultService} from '../game-result.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {GameResult} from '../game-result';
import {Ball} from '../ball';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
        private location: Location,
    public gameResultService:GameResultService
  ) { }

  ngOnInit() {
  }
  getGameResult():GameResult{
    return this.gameResultService.getGameResult();
      }
}
