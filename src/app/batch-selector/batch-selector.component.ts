import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
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
    courseLanguages: undefined,
    courseCost:undefined,
    weekendCourse:undefined,
    isExpanded: true,
    validated: true
  }];

  @Input() validate: boolean;
  @Output() setData = new EventEmitter();
  batchesValidated:boolean = true;

  ngOnChanges(changes: SimpleChanges) {
      if(changes['validate'].previousValue == false && changes['validate'].currentValue == true){
        this.validateData()
      }
  }
  


  constructor() { }

  ngOnInit() {
  }

  addCourse(){
    this.batches.push({
      startDate: undefined,
      endDate: undefined,
      courseLocation: undefined,
      courseLanguages: undefined,
      courseCost:undefined,
      weekendCourse:undefined,
      isExpanded: true,
      validated: true
    })
  }

  reset(idx){
    this.batches[idx].startDate = undefined;
    this.batches[idx].endDate = undefined;
    this.batches[idx].courseLocation = undefined;
    this.batches[idx].courseLanguages = undefined;
    this.batches[idx].courseCost = undefined;
    this.batches[idx].weekendCourse = undefined;
    this.batches[idx].weekendCourse = false;
  }

  clear(idx){
    this.batches.splice(idx, 1);
  }

  validateData(){
    for(let batch of this.batches ){
      if(!batch.startDate || !batch.endDate){
        console.log("1");
        batch.validated = false;
      }
      else if(!batch.weekendCourse){
        console.log("2");

        batch.validated = false;
      }
      else if(!batch.courseLanguages){
        console.log("3");

        batch.validated = false;
      }else if(!batch.courseLocation){
        console.log("4");

        batch.validated = false;
      }else if(batch.courseCost == undefined || batch.courseCost<0){
        console.log("5");

        batch.validated = false;
      }else{
        batch.validated = true;
      }
    }

    this.batchesValidated = this.batches.length >0 && (this.batches.filter(x => x.validated == false).length==0)

    if(this.batchesValidated){
      console.log("validated")
      this.setData.emit(this.batches);
    }else{
      this.setData.emit(undefined);
    }
  }

  setStartDate(date, idx){
    console.log(date, idx);
    this.batches[idx].startDate = date;
  }

  setEndDate(date, idx){
    this.batches[idx].endDate = date;
  }

  setLanguages(data, idx){
    this.batches[idx].courseLanguages = data;
  }

}
