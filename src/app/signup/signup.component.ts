import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  isShowErrMsg: boolean = false;
  aircraftType: string;
  courseName:string;
  coursePhotos:Array<string> = [];
  isValidate: boolean = false;
  batchData = [];
  courseDetails:string;
  
  isShowAircraftTypeErr:boolean=false;
  isShowNameErr:boolean=false;
  isShowDetailErr:boolean=false;
  batchValidated:boolean= false;
  rowDataValidated:boolean = false;

  // hide the error toast
  hideErrorMsg(){
    this.isShowErrMsg = false;
  }

  // storing images
  storeImageData(data){
    this.coursePhotos = data;
  }

  // on save validate data
  save(){  
    this.rowDataValidated = false;
    this.rowDataValidated = this.validateName();
    this.rowDataValidated = this.validateType() && this.rowDataValidated;
    this.rowDataValidated = this.validateDetails() && this.rowDataValidated;
    this.isShowErrMsg = !this.rowDataValidated;
    this.isValidate = true;

  }

  validateName(){
    if(!this.courseName || this.courseName == ''){
      this.isShowNameErr = true;
      return false;
    }
    return true;
  }

  validateType(){
    if(!this.aircraftType){
      this.isShowAircraftTypeErr = true;
      return false;
    }
    return true;
  }

  validateDetails(){
    if(!this.courseDetails){
      this.isShowDetailErr = true;
      return false;
    }
    return true;
  }



  // store batch related data;
  setBatchData(data){
    console.log(this.isValidate);
    setTimeout(() =>{
      console.log(this.isValidate);
      this.isValidate = false;
      this.batchData = data;
      if(data){
        this.batchValidated = true;
        if(this.batchValidated && this.rowDataValidated){
          alert("Data saved successfully");
        }
      }
    })
  }
}
