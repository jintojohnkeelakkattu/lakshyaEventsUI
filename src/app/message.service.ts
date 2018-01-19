import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import {Message} from 'primeng/components/common/api';

@Injectable()
export class MessageService {
  messages: string[] = [];
  constructor() { }

  add(message: any) {
    debugger;
    this.messages = [];
    for (var fieldName in message)
    
   // this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
    this.messages.push(message[fieldName].message);
  }

  clear() {
    this.messages = [];
  }

}
