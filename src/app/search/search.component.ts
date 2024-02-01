import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private http: HttpClient) {}
  @Input() selectedServiceIds: string[] = [];
  @Input() selectedCountryId: string = '';
  result: any = [];
  cursorStack: any = [];
  hasMore: boolean = false; // Add hasMore property

  handleSearch(): void {
    // Get the input value from the search bar
    const searchInput = document.getElementById(
      'searchInput'
    ) as HTMLInputElement;
    const userInput: string = searchInput.value;

    // Call a TypeScript function with the user input
    this.searchByFilter(userInput);
  }

  loadMore(): void {
    // Add logic to load more results using the cursor
    // Update the API call with the appropriate cursor value
    // Set hasMore property based on the response

    const searchInput = document.getElementById(
      'searchInput'
    ) as HTMLInputElement;
    const userInput: string = searchInput.value;

    const options = {
      method: 'GET',
      url: 'https://vndjn3z2ce5koorpy42okoapja0ppjti.lambda-url.us-east-1.on.aws',
      params: {
        services: this.selectedServiceIds,
        country: this.selectedCountryId,
        keyword: userInput,
        // cursor: encodeURIComponent(this.result.nextCursor),
        cursor: this.result.nextCursor,
        language: 'en',
      },
    };

    this.cursorStack.push(this.result.nextCursor)

    this.http.get<any>(options.url, options).subscribe(
      (response) => {
        console.log(this.cursorStack)
        console.log('Response:', response);
        this.result = response;
        this.hasMore = response.hasMore; // Set hasMore based on the response
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }


  loadPrev(): void {
    // Add logic to load more results using the cursor
    // Update the API call with the appropriate cursor value
    // Set hasMore property based on the response

    const searchInput = document.getElementById(
      'searchInput'
    ) as HTMLInputElement;
    const userInput: string = searchInput.value;
    const prev = this.cursorStack.length >= 2 ? this.cursorStack[this.cursorStack.length - 2] : null;
    this.cursorStack.pop();

    console.log(prev);
    
    const params: any = {
      services: this.selectedServiceIds,
      country: this.selectedCountryId,
      keyword: userInput,
      language: 'en',
    };
    
    if (prev !== null && prev !== undefined) {
      params.cursor = prev;
    }
    
    const options = {
      method: 'GET',
      url: 'https://vndjn3z2ce5koorpy42okoapja0ppjti.lambda-url.us-east-1.on.aws',
      params: params,
    };
    
    // this.cursorStack.push(this.result.nextCursor)
    this.http.get<any>(options.url, options).subscribe(
      (response) => {
        console.log(this.cursorStack)
        console.log('Response:', response);
        this.result = response;
        this.hasMore = response.hasMore; // Set hasMore based on the response
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  searchFunction(query: string): void {
    // Do something with the search query, for example, log it to the console
    console.log('User searched for: ' + query);
  }

  // searchByFilter(query: string) {
  //   // this.genres = mockGenres
  //   const options = {
  //     method: 'GET',
  //     url: 'https://streaming-availability.p.rapidapi.com/search/filters',
  //     params: {
  //       services: this.selectedServiceIds,
  //       country: this.selectedCountryId,
  //       keyword: query,
  //       output_language: 'en',
  //       order_by: 'original_title',
  //       genres_relation: 'and',
  //       show_type: 'all'
  //     },
  //     headers: {
  //       'X-RapidAPI-Key': '2cdd5bb74fmsh7cb05bb1e97935ap14c4d2jsne222a4828ed5',
  //       'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  //     }
  //   };
  //   return this.http.get<any>(options.url, options).subscribe(
  //     response => {
  //       console.log(response)
  //     },
  //     error => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }

  // searchByFilter(query: string) {

  //   console.log(this.selectedServiceIds)

  //   const options = {
  //     method: 'GET',
  //     url: 'https://qsihe4v2fghltodimsopstzk2e0atkgv.lambda-url.us-east-1.on.aws',
  //     params: {
  //       country: this.selectedCountryId,
  //       title: query,
  //       language: 'en',
  //     },
  //   };

  //   return this.http.get<any>(options.url, options).subscribe(
  //     response => {
  //       console.log('Response:', response);
  //       this.result = response;
  //     },
  //     error => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }

  searchByFilter(query: string): void {
    let to_input = null;

    if (this.selectedServiceIds.length == 0) {
      const options = {
        method: 'GET',
        url: 'https://qsihe4v2fghltodimsopstzk2e0atkgv.lambda-url.us-east-1.on.aws',
        params: {
          country: this.selectedCountryId,
          title: query,
          language: 'en',
        },
      };
      to_input = options;
    } else {
      const options = {
        method: 'GET',
        url: 'https://vndjn3z2ce5koorpy42okoapja0ppjti.lambda-url.us-east-1.on.aws',
        params: {
          services: this.selectedServiceIds,
          country: this.selectedCountryId,
          keyword: query,
          language: 'en',
        },
      };
      to_input = options;
    }
    // this.prevCursor = this.result.nextCursor;
    this.cursorStack.push(this.result.nextCursor)
    this.http.get<any>(to_input.url, to_input).subscribe(
      (response) => {
        console.log('Response:', response);
        console.log(this.cursorStack)
        this.result = response;
        this.hasMore = response.hasMore; // Set hasMore based on the response
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
