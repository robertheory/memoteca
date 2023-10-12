import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThoughtService } from '../thought.service.ts.service';
import { Thought } from './../../thought';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  pensamento: Thought = {
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {}

  createThought() {
    this.service
      .create(this.pensamento)
      .subscribe(() => this.router.navigate(['/listarPensamentos']));
  }

  cancel() {
    this.router.navigate(['/listarPensamentos']);
  }
}
