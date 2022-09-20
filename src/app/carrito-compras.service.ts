import { Injectable } from '@angular/core';
import { Producto } from './lista-productos/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  listaDeCompras: Producto[] = [];

  constructor() { }

  agregarAlCarrito(producto: Producto) {
    this.listaDeCompras.push(producto);
  }
}
