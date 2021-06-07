import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
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
    return this.http.get<IProduct[]>(`/products1`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('!!!!', err);
          return of([]);
        })
      )
  }


}
