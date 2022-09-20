import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Producto } from './lista-productos/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private _listaDeCompras: Producto[] = [];
  listaDeCompras: BehaviorSubject<Producto[]> = new BehaviorSubject(this._listaDeCompras);

  constructor() { }

  agregarAlCarrito(producto: Producto) {
    let item: Producto = this._listaDeCompras.find((v1) => v1.nombre == producto.nombre)!;
    if(!item){
      this._listaDeCompras.push({... producto});
    }
    else{
      item.cantidad += producto.cantidad;
    }
    console.log(this._listaDeCompras)
    this.listaDeCompras.next(this._listaDeCompras); // equivalente al emmit de eventos
  }
}
