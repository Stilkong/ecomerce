import { Injectable } from '@angular/core';
import { Carrito } from '../modelo/carrito';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private listcarrito: Carrito[] = [];
  
  getCarrito(){
    
    return this.listcarrito;
  }

  agregar(producto:Producto, cantidad : number = 1){
    
    const index = this.listcarrito.findIndex(item=> item.producto.id ==  producto.id);

    if(index == -1 ){
      const item = new Carrito(producto , cantidad);
      this.listcarrito.push(item);
    } else{
      this.actualizar(index , this.listcarrito[index].cantidad + cantidad);
    }

  }
  actualizar(index : number , cantidad : number){
    if(index >= 0 && index < this.listcarrito.length){
      this.listcarrito[index].cantidad=cantidad;
      
    }
  }

  cantidad(){
    
    return this.listcarrito.length;
  }

  total(){
    const total = this.listcarrito.reduce((sum , item) => 
    sum +item.producto.precio * item.cantidad , 0);
    return total;
  }

  eliminar(index:number){
    if(index >= 0 && index < this.listcarrito.length){
      this.listcarrito.splice(index,1);
      
    }
  }

}