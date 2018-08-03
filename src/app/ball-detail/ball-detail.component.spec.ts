import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { Ball } from '../ball';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BallService }  from '../ball.service';
import { FormsModule } from '@angular/forms';
import { BallDetailComponent } from './ball-detail.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('BallDetailComponent', () => {
  let component: BallDetailComponent;
  let fixture: ComponentFixture<BallDetailComponent>;
 // let ballService: BallService;
  //let spy: any;

  beforeEach(async(() => {
   
    TestBed.configureTestingModule({
      
      declarations: [ 
         BallDetailComponent
       ],
       imports:[
        FormsModule, RouterTestingModule
      ],
       schemas: [ NO_ERRORS_SCHEMA ],
       providers:[

      
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallDetailComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
