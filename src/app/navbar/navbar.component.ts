import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../core/services/carrito.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public carritoServices = inject(CarritoService);
}
