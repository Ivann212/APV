import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitComponent } from './produit/produit.component';
import { AproposComponent } from './apropos/apropos.component';

const routes: Routes = [
  { path: "", component: AccueilComponent},
  { path: "produits", component: ProduitComponent},
  { path: "apropos", component: AproposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
