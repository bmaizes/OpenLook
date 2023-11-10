import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private http: HttpClient) {}
  @Input() selectedServiceIds: string[] = [];
  @Input() selectedCountryId: string = "";


   handleSearch(): void {
    // Get the input value from the search bar
    const searchInput = document.getElementById("searchInput") as HTMLInputElement;
    const userInput: string = searchInput.value;
    
    // Call a TypeScript function with the user input
    this.searchByFilter(userInput);
}

 searchFunction(query: string): void {
    // Do something with the search query, for example, log it to the console
    console.log("User searched for: " + query);
}

  searchByFilter(query: string) {
    // this.genres = mockGenres
    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/filters',
      params: {
        services: this.selectedServiceIds,
        country: this.selectedCountryId,
        keyword: query,
        output_language: 'en',
        order_by: 'original_title',
        genres_relation: 'and',
        show_type: 'all'
      },
      headers: {
        'X-RapidAPI-Key': '2cdd5bb74fmsh7cb05bb1e97935ap14c4d2jsne222a4828ed5',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };
    return this.http.get<any>(options.url, options).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

}
