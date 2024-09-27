import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChurnComponent } from './formulario/churn/churn.component';
import { LoadingInterceptorService } from './service/loading-interceptor.service';

import { NgxMaskModule } from 'ngx-mask'
import localePt from '@angular/common/locales/pt';

// Registrar a localização brasileira
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ChurnComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,  NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true }, 
    { provide: LOCALE_ID, useValue: 'pt-BR' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
