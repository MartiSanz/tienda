import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[] = [
    {
      nombre: 'Remera',
      categoria: 'Deportivo',
      marca:'Adidas',
      precio: 1000,
      stock: 5,
      imagen:'assets/img/remera-adidas.jpg',
      oferta: false,
      cantidad: 0,
    },
    {
      nombre: 'Buzo',
      categoria: 'Deportivo',
      marca:'Nike',
      precio: 5000,
      stock: 1,
      imagen:'assets/img/buzo-nike.jpg',
      oferta: true,
      cantidad: 0,
    },
    {
      nombre: 'Zapatillas',
      categoria: 'Urbano',
      marca:'Puma',
      precio: 10000,
      stock: 4,
      imagen:'assets/img/zapatillas-puma.jpg',
      oferta: false,
      cantidad: 0,
    },
    {
      nombre: 'Campera',
      categoria: 'Urbano',
      marca:'Nike',
      precio: 5000,
      stock: 0,
      imagen:'assets/img/campera-nike.jpg',
      oferta: false,
      cantidad: 0,
    }
  ]

  carrito: CarritoComprasService;

  constructor() {
    this.carrito = new CarritoComprasService();
  }

  ngOnInit(): void {
  }

  maxAlcanzado(m: string){
    alert(m)
  }

  agregarAlCarrito(producto: Producto){
    this.carrito.agregarAlCarrito(producto);
  }
}
