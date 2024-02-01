import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mockCountries, mockGenres } from "mocks"



interface Country {
  services: Object;
  name: string;
  // Add other properties if available in your country objects
}


@Component({
  selector: 'app-api-fetch',
  templateUrl: './api-fetch.component.html',
  styleUrls: ['./api-fetch.component.css'],

})
export class ApiFetchComponent implements OnInit {

  genres: any = {};
  services: any;
  countries: { result: { [key: string]: Country } } = { result: {} };
  selectedCountryId: string = ""; // Property to store the selected genre ID

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCountries();
    this.fetchGenres();
  }

  fetchGenres() {
    this.genres = mockGenres
    // const options = {
    //   method: 'GET',
    //   url: 'https://streaming-availability.p.rapidapi.com/genres',
    //   headers: {
    //     'X-RapidAPI-Key': key,
    //     'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    //   }
    // };
    // return this.http.get<any>(options.url, options).subscribe(
    //   response => {
    //     console.log(response)
    //     this.genres = response;
    //   },
    //   error => {
    //     console.error('Error:', error);
    //   }
    // );
  }

  fetchCountries() {
    this.countries = mockCountries;

  //   const options = {
  //     method: 'GET',
  //     url: 'https://streaming-availability.p.rapidapi.com/countries',
  //     headers: {
  //       'X-RapidAPI-Key': key,
  //       'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  //     }
  //   };

    

  //   return this.http.get<any>(options.url, options).subscribe(
  //     response => {
  //       console.log(response)
  //       this.countries = response;
  //     },
  //     error => {
  //       console.error('Error:', error);
  //     }
  //   );
  }


  // can get available services from country endpooint
  // need to pass country and services to filter search

  onCountrySelectionChange() {
    console.log('Selected Country ID:', this.selectedCountryId);

    const selectedCountryName = this.countries.result[this.selectedCountryId].name;
    console.log('Selected Genre Name:', selectedCountryName);

    this.services = this.countries.result[this.selectedCountryId].services
    console.log(this.services)
  }

}
