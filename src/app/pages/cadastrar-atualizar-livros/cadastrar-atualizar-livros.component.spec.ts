import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAtualizarLivrosComponent } from './cadastrar-atualizar-livros.component';

describe('CadastrarAtualizarLivrosComponent', () => {
  let component: CadastrarAtualizarLivrosComponent;
  let fixture: ComponentFixture<CadastrarAtualizarLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAtualizarLivrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarAtualizarLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
