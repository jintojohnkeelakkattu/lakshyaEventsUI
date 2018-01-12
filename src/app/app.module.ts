import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientRegisterComponent,
    AdminDashBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
