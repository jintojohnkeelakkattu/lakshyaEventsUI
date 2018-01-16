import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ClientserviceService {
  public Server = 'http://localhost:54952';
  constructor(private http: HttpClient) { }
  postregistration(objClient)
  {
    this.http.post(this.Server+'/Client/postRegisterClient', objClient).subscribe();
  }
}
