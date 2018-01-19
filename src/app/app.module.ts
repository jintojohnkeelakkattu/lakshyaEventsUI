import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { HttpClientModule  } from '@angular/common/http';
import { ClientserviceService } from './clientservice.service';

import {MessagesModule} from 'primeng/messages';
 import {MessageModule} from 'primeng/message';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientRegisterComponent,
    AdminDashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     MessagesModule,
    MessageModule
  ],
  providers: [
    ClientserviceService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
