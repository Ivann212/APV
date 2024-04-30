import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  produits = [
    {name: "Astérix", price: "7.50", imageUrl: "assets/images/Asterix.PNG"},
    {name: "Obélix", price: "6.80", imageUrl: "assets/images/Obelix.PNG"},
    {name: "Cesar", price: "6.80", imageUrl: "assets/images/cesar.jpg"},
    {name: "Cléopatre", price: "6.40", imageUrl: "assets/images/cleopatre.jpg"},
    {name: "Idéfix", price: "4.80", imageUrl: "assets/images/Idefix.jpg"},
    {name: "Romain", price: "6.80", imageUrl: "assets/images/romain.png"}
  ]
  produitsaccueil = [
    {name: "Astérix", price: "7.50", imageUrl: "assets/images/Asterix.PNG"},
    {name: "Obélix", price: "6.80", imageUrl: "assets/images/Obelix.PNG"},
    {name: "Cesar", price: "6.50", imageUrl: "assets/images/cesar.jpg"}
  ]
  constructor() { }
}
