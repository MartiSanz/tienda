import { Injectable } from '@angular/core';
import { Producto } from './lista-productos/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  constructor() { }

  agregarAlCarrito(producto: Producto) {
    throw new Error('Method not implemented.');
  }
}
