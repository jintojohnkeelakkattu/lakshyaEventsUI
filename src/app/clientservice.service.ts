import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Message} from 'primeng/components/common/api';
//import {MessageService} from 'primeng/components/common/messageservice';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { Client } from './client-register/client';

import 'rxjs/add/operator/map';
@Injectable()
export class ClientserviceService {
  successfulSave: boolean;
  errors: string[];
   msgs: Message[] = [];
   headers: Headers;
    options: RequestOptions;
  public Server = 'http://localhost:54952';
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private http: HttpClient , private messageService:MessageService) { 
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });

  }
  ngOnInit() 
  {
    this.errors = [];
  }
  postregistration(objClient)
  {
    debugger;
     return this.http.post(this.Server+'/Client/postRegisterClient', objClient,{headers: new HttpHeaders({'Content-Type': 'application/json'})})
    
      
  }
  putRegistration(objClient)
  {
    debugger;
     return this.http.post(this.Server+'/Client/putRegisterClient', objClient,{headers: new HttpHeaders({'Content-Type': 'application/json'})})
    
  }
  getServiceWithMultipleQueryTerm(url: string, query: string): Observable<any> {
    debugger;
    return this.http
        .get(url + "/?ContactNo=" + query,this._options)

      
  } 

 private extractData(res: any) {
    debugger;
      let body = res;
      return <Client>res.json() ;
  } 
}
