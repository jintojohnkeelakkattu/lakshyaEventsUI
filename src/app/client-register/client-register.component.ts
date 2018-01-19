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
  nameList: any;  
  data:any; 
  nameId:Number; 
  clientName : String; 
  clientAddress : String; 
  emailAddress : String; 
  contactNumber : String; 
  alternateNumber : String; 
  msgs: Message[] = [];
  constructor( private apiControllerSerivce:ClientserviceService,public messageService: MessageService) { 
    this.clientName = '';
    this.clientAddress = '';
    this.emailAddress = '';
    this.contactNumber ='';
    this.alternateNumber = '';
  }
  RegisterClientPrimaryDetails()
  {
    debugger;
    var usermodel=new Client
    (
       this.clientName.toString(),
       this.clientAddress.toString(),
       this.emailAddress.toString(),
       this.contactNumber.toString(),
       this.alternateNumber.toString()
    ) 
   this.apiControllerSerivce.postregistration(JSON.stringify(usermodel));
 
  
   }
  ngOnInit() {
  }

}
