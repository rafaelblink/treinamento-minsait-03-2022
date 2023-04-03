import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ILivro } from 'src/app/interfaces/livro';
import { LivrosService } from 'src/app/services/livros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-atualizar-livros',
  templateUrl: './cadastrar-atualizar-livros.component.html',
  styleUrls: ['./cadastrar-atualizar-livros.component.css']
})
export class CadastrarAtualizarLivrosComponent {

  livroForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    ano: new FormControl(2000, Validators.required),
    quantidade: new FormControl(0, Validators.required),
    valorUnitario: new FormControl(0, Validators.required),
    status: new FormControl('Normal', Validators.required),
  })
  constructor(private livrosService: LivrosService, private route: ActivatedRoute) {}
  livroId = 0;

  ngOnInit() {
    this.livroId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.livroId) {
      this.livrosService.buscarLivroPorId(this.livroId).subscribe((livro: ILivro) => {
        this.livroForm.setValue({
          titulo: livro.titulo,
          ano: livro.ano || 2000,
          quantidade: livro.quantidade || 0,
          valorUnitario: livro.valorUnitario || 0,
          status: livro.status || 'Normal'
        })
      });
    }
  }

  cadastrar() {
    const livro: ILivro = this.livroForm.value as ILivro;
    this.livrosService.cadastrarLivro(livro).subscribe(result => {
      Swal.fire(
        'Sucesso, parabens cara',
        'Que massa fera, uhu',
        'success'
      )
    }, error => {
      console.error(error);
    });
  }

}
