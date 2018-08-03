import { Component, OnInit,Input } from '@angular/core';
import { Ball } from '../ball';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BallService }  from '../ball.service';


@Component({
  selector: 'app-ball-detail',
  templateUrl: './ball-detail.component.html',
  styleUrls: ['./ball-detail.component.css']
})
export class BallDetailComponent implements OnInit {
  @Input() ball: Ball;
  constructor(
    private route: ActivatedRoute,
    private ballService: BallService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.getBall();
  }
  
  getBall(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.location.back();
    this.ballService.getBall(id)
      .subscribe(ball => this.ball = ball);
  }

}
