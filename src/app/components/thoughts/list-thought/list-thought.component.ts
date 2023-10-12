import { Component, OnInit } from '@angular/core';
import { Thought } from '../../thought';
import { ThoughtService } from '../thought.service.ts.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css'],
})
export class ListThoughtComponent implements OnInit {
  listaPensamentos: Thought[] = [];

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.list().subscribe((lista) => {
      this.listaPensamentos = lista;
    });
  }
}
