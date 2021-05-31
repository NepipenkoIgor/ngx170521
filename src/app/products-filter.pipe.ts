import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from "./products";

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], text: string): IProduct[] {
    console.log('CALC');
    return products.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(text.toLowerCase());
    })
  }

}
