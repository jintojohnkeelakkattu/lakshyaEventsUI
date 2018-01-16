import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{ClientRegisterComponent} from "../app/client-register/client-register.component"
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';

const appRoutes: Routes = [
  { path: '', component: AdminDashBoardComponent },
  { path: 'client-register', component: ClientRegisterComponent }
 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )    
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
