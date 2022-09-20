import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CarritoService } from '../carrito.service';
import { Producto } from '../lista-productos/Producto';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent implements OnInit {

  listaDeCompras$!: Observable<Producto[]>;

  constructor(private carrito: CarritoService) {
    this.listaDeCompras$ = carrito.listaDeCompras.asObservable();
  }

  ngOnInit(): void {
  }

}
