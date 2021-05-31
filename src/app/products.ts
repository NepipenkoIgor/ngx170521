import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

export interface IProduct {
  "_id": string;
  "title": string;
  "img": string;
  "price": number;
  "author": string;
  "isFavorite": boolean
}

export const products: IProduct[] = [
  {
    "_id": "60b50f32a8d8ea7ee6ccd878",
    "title": "Product 111",
    "img": "assets/img/product-4.jpg",
    "price": 2345,
    "author": "Igor",
    "isFavorite": false
  },
  {
    "_id": "60b50f32a8d8ea7ee6ccd879",
    "title": "Product 231",
    "img": "assets/img/product-5.jpg",
    "price": 23,
    "author": "Vlad",
    "isFavorite": true
  },
  {
    "_id": "60b50f32a8d8ea7ee6ccd87a",
    "title": "Product 41",
    "img": "assets/img/product-6.jpg",
    "price": 2344,
    "author": "Lena",
    "isFavorite": false
  },
  {
    "_id": "60b50f32a8d8ea7ee6ccd87b",
    "title": "Product 31",
    "img": "assets/img/product-7.jpg",
    "price": 334,
    "author": "Lena",
    "isFavorite": false
  },
  {
    "_id": "60b50f32a8d8ea7ee6ccd87c",
    "title": "Product 11",
    "img": "assets/img/product-8.jpg",
    "price": 22,
    "author": "Igor",
    "isFavorite": false
  },
  {
    "_id": "60b50f32a8d8ea7ee6ccd87d",
    "title": "Product 122",
    "img": "assets/img/product-9.jpg",
    "price": 1200,
    "author": "Max",
    "isFavorite": true
  },
  {
    "_id": "60b50f32a8d8ea7ee6ccd87e",
    "title": "Product 2345",
    "img": "assets/img/product-2.jpg",
    "price": 221,
    "author": "Vlad",
    "isFavorite": false
  },
  {
    "_id": "60b50f32a8d8ea7ee6ccd87f",
    "title": "Product 1",
    "img": "assets/img/product-1.jpg",
    "price": 200,
    "author": "Igor",
    "isFavorite": true
  },
  {
    "_id": "60b50f32a8d8ea7ee6ccd880",
    "title": "Product 234",
    "img": "assets/img/product-3.jpg",
    "price": 333,
    "author": "Igor",
    "isFavorite": true
  }
]


export const products$: Observable<IProduct[]> = of(products)
  .pipe(delay(3000));
