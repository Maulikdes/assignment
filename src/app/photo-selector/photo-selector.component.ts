import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-photo-selector',
  templateUrl: './photo-selector.component.html',
  styleUrls: ['./photo-selector.component.css']
})
export class PhotoSelectorComponent {
  
  @Output() valueChange = new EventEmitter();
  @Input('photos') urls: Array<string>;
  dummyObj = [1,2,3,4,5,6,7,8,9];
  detectFiles(event) {
    let files = event.target.files;
    if (files) {
      if(files.length + this.urls.length > 5){
        alert("max 5 files can be selected");
        return;
      }
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
      this.dummyObj.splice(0, files.length);
      this.valueChange.emit(this.urls);
    }
  }
}
