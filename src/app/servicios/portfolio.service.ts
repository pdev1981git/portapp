import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  url:string = "./assets/data/data.json"; // acá va la url de la api cuando la tengas
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(this.url); // aca va la url de la api cuando la tengas y agregar +persona para que requestee a la api por presona
  }

}
