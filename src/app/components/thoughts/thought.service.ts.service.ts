import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  create(thought: Thought) {
    return this.http.post(this.API, thought);
  }

  delete(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }

  update(thought: Thought) {
    return this.http.put(`${this.API}/${thought.id}`, thought);
  }

  read(id: number) {
    return this.http.get<Thought>(`${this.API}/${id}`);
  }
}
