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
    validated: true,
    validationObj:{
      startDate:true,
      endDate:true,
      courseLocation:true,
      courseLanguages:true,
      courseCost:true,
      weekendCourse:true
    }
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
      validated: true,
      validationObj:{
        startDate:true,
        endDate:true,
        courseLocation:true,
        courseLanguages:true,
        courseCost:true,
        weekendCourse:true
      }
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
    this.batches[idx].validationObj = {
      startDate:true,
      endDate:true,
      courseLocation:true,
      courseLanguages:true,
      courseCost:true,
      weekendCourse:true
    }
  }

  clear(idx){
    this.batches.splice(idx, 1);
  }

  validateData(){
    for(let batch of this.batches ){
        batch.validationObj.startDate = !!batch.startDate;
        batch.validationObj.endDate = !!batch.endDate;

        batch.validationObj.weekendCourse = !!batch.weekendCourse;

        batch.validationObj.courseLanguages = !!batch.courseLanguages && !!batch.courseLanguages.length;

        batch.validationObj.courseLocation = !!batch.courseLocation;

        batch.validationObj.courseCost =  batch.courseCost != undefined && batch.courseCost >= 0;

        // each field validated
        if(Object.values(batch.validationObj).filter(x=> x == false).length ==0){
          batch.validated = true;
        }else{
          batch.validated = false;
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
    this.batches[idx].validationObj.startDate = true;
  }

  setEndDate(date, idx){
    this.batches[idx].endDate = date;
    this.batches[idx].validationObj.endDate = true;
  }

  setLanguages(data, idx){
    console.log(data)
    this.batches[idx].courseLanguages = data;
    this.batches[idx].validationObj.courseLanguages = this.batches[idx].courseLanguages.length  ? true : false;
  }

}
