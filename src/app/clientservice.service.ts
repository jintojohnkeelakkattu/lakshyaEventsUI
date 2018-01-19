import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Message} from 'primeng/components/common/api';
//import {MessageService} from 'primeng/components/common/messageservice';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ClientserviceService {
  successfulSave: boolean;
  errors: string[];
   msgs: Message[] = [];
  public Server = 'http://localhost:54952';
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private http: HttpClient , private messageService:MessageService) { }
  ngOnInit() 
  {
    this.errors = [];
  }
  postregistration(objClient)
  {
    debugger;
     this.http.post(this.Server+'/Client/postRegisterClient', objClient,{headers: new HttpHeaders({'Content-Type': 'application/json'})}).
 
    subscribe(
      (data) => this.successfulSave = true,
                    (err) => {
                      debugger;

                        if (err.status === 400) {
                            // handle validation error
                            let validationErrorDictionary =err.error;
                            this.msgs = [];
                            for (var fieldName in validationErrorDictionary) {
                              this.messageService.add(validationErrorDictionary[fieldName]);                               
                              }
                        } else {
                            this.errors.push("something went wrong!");
                        }
                    }
    );
  }
}
