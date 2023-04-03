import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { ILivro } from '../interfaces/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  endpoint = 'livraria'
  api = environment.api;
  constructor(private http: HttpClient) { }

  buscarTodosLivros() {
    return this.http.get<ILivro[]>(`${this.api}/${this.endpoint}`);
  }

  cadastrarLivro(livro: ILivro) {
    return this.http.post(`${this.api}/${this.endpoint}`, livro);
  }

  buscarLivroPorId(id: number) {
    return this.http.get<ILivro>(`${this.api}/${this.endpoint}/${id}`);
  }

}
