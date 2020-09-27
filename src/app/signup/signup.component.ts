import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  isShowErrMsg: boolean = false;

  hideErrMsg(){
    this.isShowErrMsg = false;
  }



}
