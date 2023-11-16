import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { ChartLineComponent } from './components/chart-line/chart-line.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartBarComponent,
    ChartLineComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
