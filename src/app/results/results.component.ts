import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnChanges {
  @Input() movies: any[] = [];
  @Input() shows: any[] = [];

  constructor() { }

  ngOnInit() {
    // This is the initial rendering logic, if needed
  }

  ngOnChanges(changes: SimpleChanges) {
    // This method is called whenever any input property changes

    if (changes['movies']) {
      // Handle changes to the 'movies' input
      console.log('Movies updated:', this.movies);
    }

    if (changes['shows']) {
      // Handle changes to the 'shows' input
      console.log('Shows updated:', this.shows);
    }
  }

  redirectToLink(services: any): void {
    // You can customize this logic based on your requirements
    // For example, open the first available link in a new tab
    console.log(services)
    const firstService = Object.keys(services)[0];
    const link = services[firstService];

    if (link) {
      window.open(link, '_blank'); // Opens the link in a new tab/window
      // Alternatively, if you want to navigate within the app, you can use Angular's Router:
      // this.router.navigateByUrl(link);
    }
  }
}
