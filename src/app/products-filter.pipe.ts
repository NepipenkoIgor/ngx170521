import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from "./products";

@Pipe({
  name: 'productsFilter',
  pure: false
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], text: string, onlyFavorites: boolean = false): IProduct[] {
    let result: IProduct[] = products;
    if (onlyFavorites) {
      result = products.filter((product) => product.isFavorite === onlyFavorites);
    }
    if(!text){
      return result;
    }
    return result.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(text.toLowerCase());
    })
  }

}
