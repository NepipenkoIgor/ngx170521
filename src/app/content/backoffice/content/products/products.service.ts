import { Observable, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, Optional } from "@angular/core";


export interface IProduct {
  "_id": string;
  "title": string;
  "img": string;
  "price": number;
  "author": string;
  "isFavorite": boolean
}

@Injectable()
export class ProductsService {


  public constructor(
    @Optional() private http: HttpClient,
  ) {
  }

  public getProducts(): Observable<IProduct[]> {
    return of(true)
      .pipe(
        // delay(3000),
        switchMap(() => {
          return this.http.get<IProduct[]>(`/products`)
            .pipe(
              catchError((err: HttpErrorResponse) => {
                console.log('!!!!', err);
                return of([]);
              })
            )
        }))
  }

  public getOneProduct(id: string): Observable<IProduct | null> {
    return this.http.get<IProduct>(`/products/${id}`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('!!!!', err);
          return of(null);
        })
      )
  }


}
