import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';
import { Producto } from '../lista-productos/Producto';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  esNumero: Boolean = true;
  error: Boolean = false;

  constructor() { }

  @Input()
  cantidad!: number;

  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  maxAlcanzado: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  decrementar(): void {
    if(this.cantidad > 0){
      this.cantidad--;
      this.error = false;
      this.esNumero = true;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  incrementar(): void {
    if(this.cantidad < this.max){
      this.cantidad++;
      this.error = false;
      this.esNumero = true;
      this.cantidadChange.emit(this.cantidad);
    }
    else{
      this.maxAlcanzado.emit("Se alcanzó el maximo");
    }
  }

  changeCantidad(){

    if(isNaN(Number(this.cantidad))){
      this.esNumero = false;
      this.error = false;
      this.cantidad = 0;
      this.cantidadChange.emit(this.cantidad);
    }
    else{
      this.esNumero = true;
      if(Number(this.cantidad) > this.max){
        this.error = true;
      }
      else{
        this.cantidad = Number(this.cantidad);
        this.cantidadChange.emit(this.cantidad);
      }
    }
  }

}
