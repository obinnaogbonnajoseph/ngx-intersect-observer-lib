import { Component, OnInit } from '@angular/core';
import { AppService } from 'projects/demo/src/app/app.service';
import { take } from 'rxjs/operators';

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  movies: Movie[] = [];

  page = 1;

  total = 0;

  searchString = 'game of thrones';

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.getMovies();
  }


  private getMovies(): void {
    this.service.searchMovies(this.searchString, this.page).pipe(
      take(1)
    ).subscribe({
      next: ({ Search, totalResults }) => {
        this.movies.push(...Search.filter(movie => movie.Poster !== 'N/A'));
        this.total = Number(totalResults);
        ++this.page;
      }
    })
  }

  private reset(): void {
    this.page = 1;
    this.total = 0;
    this.movies = [];
  }

  onChange(event: any): void {
    const searchString = event.target.value.trim();
    if (searchString) {
      this.searchString = searchString;
      this.reset();
      this.getMovies();
    }

  }

  actionOnIntersection = () => {
    if (this.movies.length < this.total) {
      this.getMovies();
    }
  }
}
