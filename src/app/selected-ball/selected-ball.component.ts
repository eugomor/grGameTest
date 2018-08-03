import { Component, OnInit} from '@angular/core';
import { SelectedBallService } from '../selected-ball.service';
import { Ball } from '../ball';


@Component({
  selector: 'app-selected-ball',
  templateUrl: './selected-ball.component.html',
  styleUrls: ['./selected-ball.component.css']
})
export class SelectedBallComponent implements OnInit {
 
  
 

  constructor(    public selectedBallService: SelectedBallService) { }

  ngOnInit() {
    

  }
  
}
