import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbyprice'
})
export class SortbypricePipe implements PipeTransform {
  transform(produits: any[]): any[] {
    return produits.sort((a:any,b: any) => {return b.price - a.price});  }
}
