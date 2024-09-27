import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChurnService {

  constructor(private http: HttpClient) { }

  // Serviço Lista das predições cadastradas  
  BuscaListaPredicaoRotatividadeCliente(likeClientName: string = ''):Observable<any>{
    let query: string = "";
    if(likeClientName !=''){
      query = `?likeclient=${likeClientName}`;
    }
    return this.http.get(`${environment.url_base}/BuscaListaPredicaoRotatividadeCliente${query}`);
  }

  // Serviço de inclusão da predição
  AdicionaPredicaoRotatividadeCliente(body: any):Observable<any>{
    return this.http.post(`${environment.url_base}/AdicionaPredicaoRotatividadeCliente`, body );
  }

  // Serviço de remoção da predição  
  RemovePredicaoRotatividadeCliente(id: any):Observable<any>{
    return this.http.delete(`${environment.url_base}/RemovePredicaoRotatividadeCliente?id=${id}`);
  }

}
