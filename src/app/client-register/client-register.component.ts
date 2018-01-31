import { Component, OnInit } from '@angular/core';
import{ClientserviceService} from '../clientservice.service';
import {FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Client } from './client';
import {Message} from 'primeng/components/common/api';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})

export class ClientRegisterComponent implements OnInit {
  
  ClientForm = new FormGroup({
    ID:  new FormControl({value: 0, disabled: true}),
    clientName:  new FormControl(),
    clientAddress:  new FormControl(),
    emailAddress: new FormControl(),
    contactNumber: new FormControl(),
    alternateNumber: new FormControl()
   }); 
  nameList: any;  
  data:any; 
  nameId:Number; 
  
  msgs: Message[] = [];
  successfulSave: boolean;
  public Server = 'http://localhost:54952';
  errors: string[];
   //msgs: Message[] = [];
   headers: Headers;
  constructor( private apiControllerSerivce:ClientserviceService,public messageService: MessageService,private fb: FormBuilder) { 
  
  }
  RegisterClientPrimaryDetails()
  {
    debugger;
     var usermodel=new Client
    (
      this.ClientForm.get('ID').value,
      this.ClientForm.get('clientName').value,
      this.ClientForm.get('clientAddress').value,
      this.ClientForm.get('emailAddress').value,
      this.ClientForm.get('contactNumber').value,
      this.ClientForm.get('alternateNumber').value,

     ) 
   this.apiControllerSerivce.postregistration(JSON.stringify(usermodel)).subscribe
   (
    data => this.messageService.addSuccessMessage (data),
    (err) => {
      debugger;

        if (err.status === 400) {
            // handle validation error
            let validationErrorDictionary =err.error;
            this.msgs = [];
            for (var fieldName in validationErrorDictionary) {
              this.messageService.add(validationErrorDictionary[fieldName]);                               
              }
        }
        if (err.status === 404) {
          // handle validation error
          let validationErrorDictionary =err.error;
          this.msgs = [];
          
            this.messageService.addValidationMessage(validationErrorDictionary.Message);                               
           
            this.apiControllerSerivce.getServiceWithMultipleQueryTerm(this.Server+'/Client/getClientContactDetails',usermodel.contactNumber.toString()).subscribe(
            res=>
            {
              debugger;
              this.ClientForm= this.fb.group(res);
              this.successfulSave=true;
             
              this.msgs=res;
            }
            );
      } 
        else {
            this.errors.push("something went wrong!");
        }
    }
   );
 
  
   }
   UpdateClientDetails()
   {
     debugger
    var usermodel=new Client
    (
      
      this.msgs['id'],
      this.ClientForm.get('clientName').value,
      this.ClientForm.get('clientAddress').value,
      this.ClientForm.get('emailAddress').value,
      this.ClientForm.get('contactNumber').value,
      this.ClientForm.get('alternateNumber').value,

     )
     this.apiControllerSerivce.putRegistration(JSON.stringify(usermodel)).subscribe(
      data => this.messageService.addSuccessMessage (data),
      (err) => {
        debugger;
  
          if (err.status === 400) {
              // handle validation error
              let validationErrorDictionary =err.error;
              this.msgs = [];
              for (var fieldName in validationErrorDictionary) {
                this.messageService.add(validationErrorDictionary[fieldName]);                               
                }
          }
        }
     )
   }
  ngOnInit() {
  }

}
