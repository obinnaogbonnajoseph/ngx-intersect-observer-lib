import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from 'projects/demo/src/app/app.component';
import { environment } from 'projects/demo/src/environments/environment';
import { Observable } from 'rxjs';

export interface MovieResponse {
  Response: string;
  Search: Movie[];
  totalResults: string
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  searchMovies(search: string, page = 1): Observable<MovieResponse> {
    search = search.trim();
    const options = search ?
      {
        params: new HttpParams()
          .set('s', search)
          .set('page', page)
      } : {}
    return this.http.get<MovieResponse>(environment.baseUrl, options)
  }
}
