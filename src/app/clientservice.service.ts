import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class ClientserviceService {
  public Server = 'http://localhost:54952';
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private http: HttpClient) { }
  postregistration(objClient)
  {

    return this.http.post(this.Server+'/Client/postRegisterClient', objClient,{headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe();
  }
}
