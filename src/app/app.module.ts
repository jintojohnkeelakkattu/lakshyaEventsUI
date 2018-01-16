import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { HttpClientModule  } from '@angular/common/http';
import { ClientserviceService } from './clientservice.service';


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
    FormsModule
  ],
  providers: [
    ClientserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
