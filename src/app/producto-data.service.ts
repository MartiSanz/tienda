import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Producto } from './lista-productos/Producto';

const URL = "https://632a45f51090510116bdeb8c.mockapi.io/producto";

@Injectable({
  providedIn: 'root'
})
export class ProductoDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Producto[]>{

    return this.http.get<Producto[]>(URL)
                .pipe(
                  tap((productos: Producto[]) => productos.forEach(data => data.cantidad = 0))
                );
  }
}
