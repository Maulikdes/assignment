import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-batch-selector',
  templateUrl: './batch-selector.component.html',
  styleUrls: ['./batch-selector.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class BatchSelectorComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  batches = [{
    startDate: undefined,
    endDate: undefined,
    courseLocation: undefined,
    courseLanguage: undefined,
    courseCost:undefined,
    weekendCourse:undefined,
    isExpanded: true
  }];


  constructor() { }

  ngOnInit() {
  }

  addCourse(){
    this.batches.push({
      startDate: undefined,
      endDate: undefined,
      courseLocation: undefined,
      courseLanguage: undefined,
      courseCost:undefined,
      weekendCourse:undefined,
      isExpanded: true
    })
  }

}
