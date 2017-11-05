import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactObj: Contact;
  contactform:FormGroup;
  
  constructor(fb: FormBuilder,public _appService: AppService, public snackBar: MatSnackBar) {
    this.contactform = fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(emailRegex)]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
      })
   }//private _appService: AppService

  ngOnInit() {
    this.contactObj = new Contact();
  }
  submit() {
    this.snackBar.open("Message sending...", "Please wait.", {
      
    });
    // this.showSnackBar("Message sending...", "");
    this._appService.SendEmail(this.contactObj)
      .subscribe(result => {

        this.showSnackBar("Message sent successfully!", "");
      },
      error => {
        console.log(<any>error);
      });
   
  }
  getEmailErrorMessage() {
    return this.contactform.controls.email.hasError('required') ? 'You must enter your email' :
    this.contactform.controls.email.hasError('pattern') ? 'Not a valid email' : '';
  }
  showSnackBar(message: string, action: string) {
    this.snackBar.dismiss();
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
export class Contact {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
}
