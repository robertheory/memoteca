import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thought } from '../thought';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Thought[]>(this.API);
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought);
  }

  delete(id: number): Observable<Thought> {
    const deleteURL = `${this.API}/${id}`;

    return this.http.delete<Thought>(deleteURL);
  }

  update(thought: Thought): Observable<Thought> {
    const updateURL = `${this.API}/${thought.id}`;

    return this.http.put<Thought>(updateURL, thought);
  }

  read(id: number): Observable<Thought> {
    const readURL = `${this.API}/${id}`;

    return this.http.get<Thought>(readURL);
  }
}
