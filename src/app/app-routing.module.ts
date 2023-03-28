import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LivrosComponent } from './pages/livros/livros.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'livros', component: LivrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
