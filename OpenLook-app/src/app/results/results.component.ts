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
}
