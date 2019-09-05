import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './/components/child2/child2.component';
import { MessageDirective } from '../directives/message/message.directive';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DataComponent } from './components/data/data.component';

import { DataService } from './services/data.service';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    MessageDirective,
    SignInComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
