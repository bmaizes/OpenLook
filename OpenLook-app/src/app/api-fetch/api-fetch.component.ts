import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { key } from "key"

@Component({
  selector: 'app-api-fetch',
  templateUrl: './api-fetch.component.html',
  styleUrls: ['./api-fetch.component.css']
})
export class ApiFetchComponent {

  res: any = {};
  constructor(private http: HttpClient) {}

  fetchGenres() {
    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/genres',
      headers: {
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };
    return this.http.get<any>(options.url, options).subscribe(
      response => {
        console.log(response)
        this.res = response;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  fetchCountries() {

    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/countries',
      headers: {
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    

    return this.http.get<any>(options.url, options).subscribe(
      response => {
        console.log(response)
        this.res = response;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

}
