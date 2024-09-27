import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { LoadingService } from './loading.service';


@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService {

  constructor(
    private loadingService: LoadingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    this.loadingService.showLoading();

    return next.handle(request).pipe(
      finalize(() => this.loadingService.hideLoading())
    );
  }
}