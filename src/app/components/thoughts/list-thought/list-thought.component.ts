import { Component, OnInit } from '@angular/core';
import { Thought } from '../../thought';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css'],
})
export class ListThoughtComponent implements OnInit {
  listaPensamentos: Thought[] = [];

  constructor() {}

  ngOnInit(): void {}
}
