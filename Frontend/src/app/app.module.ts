import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactiondetailComponent } from './transactiondetail/transactiondetail.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomlistComponent,
    LoginComponent,
    RegisterComponent,
    TransactiondetailComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot([
      { path: '', component: RoomlistComponent },
    ])
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
export class AppModule { }
