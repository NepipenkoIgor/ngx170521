import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, IBaseUrl } from "../../config";
import { filter, map } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public constructor(
    @Optional() @Inject(BASE_URL) private baseUrl: IBaseUrl,
  ) {
  }

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers: HttpHeaders = req.headers
      .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImluZXBpcGVua28iLCJpYXQiOjE2MDA3MDg1MzJ9.Uch-jamBl7U9XF_m1riA9APROi_lO-mkDmnjjuv8Kv8')
      .append('Content-Type', 'application/json')

    const jsonReq = req.clone({
      url: `${this.baseUrl.domain}:${this.baseUrl.port}${req.url}`,
      headers
    })

    return next.handle(jsonReq)
      .pipe(
        filter(this._isHttpResponse),
        map((res: HttpResponse<any>) => {
          return res.clone({body: res?.body?.data})
        })
      )
  }

  private _isHttpResponse(event: HttpEvent<any>): event is HttpResponse<any> {
    return event instanceof HttpResponse;
  }
}
