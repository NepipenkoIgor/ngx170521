import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { inject, TestBed } from "@angular/core/testing";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { AuthInterceptor } from "./auth.interceptor";
import { BASE_URL } from "../../config";
import { environment } from "../../../environments/environment";

const products = [
  {
    author: "Vlad",
    img: "assets/img/product-2.jpg",
    isFavorite: false,
    price: 221,
    title: "Product 2345",
    _id: "60d4b0dbe27130bc9be48e94",
  },
  {
    author: "Vlad",
    img: "assets/img/product-2.jpg",
    isFavorite: false,
    price: 3333,
    title: "Prod 11111",
    _id: "60d4b0dbe27130bc9be48e94",
  },
  {
    author: "Vlad",
    img: "assets/img/product-2.jpg",
    isFavorite: false,
    price: 1111,
    title: "Prod 22222",
    _id: "60d4b0dbe27130bc9be48e94",
  }
]

describe('Auth interceptor', () => {
  let httpMocked: HttpTestingController;
  const accessToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImluZXBpcGVua28iLCJpYXQiOjE2MDA3MDg1MzJ9.Uch-jamBl7U9XF_m1riA9APROi_lO-mkDmnjjuv8Kv8';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        {provide: BASE_URL, useValue: {port: environment.port, domain: environment.domain}},
      ]
    });
    httpMocked = TestBed.inject(HttpTestingController);
  })

  it('should have access', inject([HttpClient, BASE_URL], (
    http: HttpClient,
    baseUrl: { domain: string, port: number }
  ) => {
    http.get('/products').subscribe();
    const httpObj = httpMocked.expectOne({
      url: `${baseUrl.domain}:${baseUrl.port}/products`,
      method: 'GET'
    })

    expect(httpObj.request.headers.get('Authorization')).toBeTruthy();
    expect(httpObj.request.headers.get('Authorization')).toEqual(accessToken);

  }));

  it('should return products', inject([HttpClient, BASE_URL], (
    http: HttpClient,
    baseUrl: { domain: string, port: number }
  ) => {
    http.get('/products').subscribe((resProducts) => {
      expect(resProducts).toEqual(products);
    });
    const httpObj = httpMocked.expectOne({
      url: `${baseUrl.domain}:${baseUrl.port}/products`,
      method: 'GET'
    })

    httpObj.flush({data: products})


  }));
})
