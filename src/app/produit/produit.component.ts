import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  produits: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.produits = this.productService.produits; 
    
  }
}
