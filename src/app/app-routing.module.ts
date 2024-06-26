import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: HomeComponent }, // Rota para o HomeComponent
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rota padrão redireciona para Home
  { path: '**', redirectTo: '/home' } // Rota para tratar caminhos não encontrados redireciona para Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
