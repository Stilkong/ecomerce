import { Component, inject, OnInit } from '@angular/core';
import { CarritoService } from '../../../core/services/carrito.service';
import { Carrito } from '../../../core/modelo/carrito';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-carrito-listar',
  imports: [CommonModule , FormsModule],
  templateUrl: './carrito-listar.component.html',
  styleUrl: './carrito-listar.component.css'
})
export class CarritoListarComponent implements OnInit {
  public carritoService = inject(CarritoService);
  listCarrito: Carrito[] = [];

  ngOnInit(): void {
  }


  eliminarItem(index: number){
    this.carritoService.eliminar(index);
  }

  actualizar(item: Carrito , index : number){
    this.carritoService.actualizar(index,item.cantidad);
  }

  onkeyDown(event : any){
    event.preventDefault();
  }
}
