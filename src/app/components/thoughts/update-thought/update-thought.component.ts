import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from '../../thought';
import { ThoughtService } from '../thought.service.ts.service';

@Component({
  selector: 'app-update-thought',
  templateUrl: './update-thought.component.html',
  styleUrls: ['./update-thought.component.css'],
})
export class UpdateThoughtComponent implements OnInit {
  thought: Thought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.read(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  updateThought() {
    this.service.update(this.thought).subscribe(() => {
      this.router.navigate(['/listarPensamentos']);
    });
  }

  cancel() {
    this.router.navigate(['/listarPensamentos']);
  }
}
