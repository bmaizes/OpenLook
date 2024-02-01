import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiFetchComponent } from './api-fetch/api-fetch.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceCheckboxesComponent } from './service-checkboxes/service-checkboxes.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultsComponent } from './results/results.component'; // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    ApiFetchComponent,
    ServiceCheckboxesComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
