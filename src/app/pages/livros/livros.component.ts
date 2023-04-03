import { Component } from '@angular/core';
import { ILivro } from 'src/app/interfaces/livro';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent {
  livros: ILivro[] = [];
  constructor(private livrosService: LivrosService) {}

  ngOnInit() {
    this.livrosService.buscarTodosLivros().subscribe((result: ILivro[]) => {
      this.livros = result;
    });
  }
}
