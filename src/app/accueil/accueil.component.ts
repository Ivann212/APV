import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  produitsaccueil: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.produitsaccueil = this.productService.produitsaccueil; 
    
  }

  trierParPrixCroissant(): void {
    console.log("Tri par prix croissant");
    this.produitsaccueil.sort((a, b) => a.price - b.price);  }
  
  trierParPrixDecroissant(): void {
    console.log("Tri par prix décroissant");
    this.produitsaccueil.sort((a, b) => b.price - a.price);
  }
}
