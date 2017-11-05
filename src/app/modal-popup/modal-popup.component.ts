import { Component, OnInit } from '@angular/core';
// import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({
  selector: 'confirm',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

  title: string;
  message: string;
  accesscode:string;
  errormsg:string;
  constructor() {
  }

  ngOnInit() {
  }
    
}
