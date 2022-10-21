import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { ProductoDataService } from '../producto-data.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[] = [];
  carritoDeCompras: Producto[] = [];

  constructor(
    private carrito: CarritoService,
    private productosService: ProductoDataService) {

  }

  ngOnInit(): void {
    this.carritoDeCompras = this.carrito.getCarrito();

    this.productosService.getAll()
      .subscribe(data => {

        this.productos = data;

        for (let i = 0; i < this.productos.length; i++) {
          let cantidad = this.buscarCantidadProductoCarrito(this.productos[i]);
          this.productos[i].stock = this.productos[i].stock - cantidad;
        }

      });

  }

  maxAlcanzado(m: string){
    alert(m)
  }

  agregarAlCarrito(producto: Producto){
    if(producto.cantidad > 0 && producto.stock > 0 && producto.cantidad <= producto.stock ){
      this.carrito.agregarAlCarrito(producto);
      producto.stock -= producto.cantidad;
      producto.cantidad = 0;
    }
  }

  buscarCantidadProductoCarrito(producto: Producto): number{
    for (let i = 0; i < this.carritoDeCompras.length; i++) {
      if(producto.nombre == this.carritoDeCompras[i].nombre){
        return this.carritoDeCompras[i].cantidad;
      }
    }
    return 0;
  }
}



