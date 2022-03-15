import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here


import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EvalSalFormComponent } from './components/eval-sal-form/eval-sal-form.component';
import { EvalSalPayDetailsComponent } from './components/eval-sal-pay-details/eval-sal-pay-details.component';
import { EvalSalComponent } from './components/eval-sal/eval-sal.component';
import {SalcalcService} from './services/salcalc.service';
import { EvalSalEffects } from './effects/eval-sal.effects';
import {reducers} from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    EvalSalFormComponent,
    EvalSalPayDetailsComponent,
    EvalSalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([EvalSalEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forFeature([EvalSalEffects]),
    /*,/*
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/

  ],
  //exports:[FormsModule,ReactiveFormsModule],
  providers: [SalcalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
