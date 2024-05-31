import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiFetchComponent } from './api-fetch/api-fetch.component';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceCheckboxesComponent } from './service-checkboxes/service-checkboxes.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultsComponent } from './results/results.component'; // Import FormsModule

@NgModule({ declarations: [
        AppComponent,
        ApiFetchComponent,
        ServiceCheckboxesComponent,
        SearchComponent,
        ResultsComponent
    ],
    bootstrap: [AppComponent], imports: [MatSelectModule,
        BrowserModule,
        AppRoutingModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
