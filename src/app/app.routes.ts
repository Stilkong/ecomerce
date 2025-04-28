import { Routes } from "@angular/router";
import { CarruselComponent } from "./carrusel/carrusel.component";
import { NosotrosComponent } from "./nosotros/nosotros.component";
import { ContactamosComponent } from "./contactamos/contactamos.component";
import { CatalogoInicioComponent } from "./components/catalogo/catalogo-inicio/catalogo-inicio.component";
import { CarritoListarComponent } from "./components/carrito/carrito-listar/carrito-listar.component";






export const routes: Routes = [
{ path:'', component:CarruselComponent },
{ path:'nosotros', component:NosotrosComponent },
{ path:'contactamos', component:ContactamosComponent },
{ path:'catalogo-inicio', component:CatalogoInicioComponent },
{ path:'carrito', component:CarritoListarComponent },
];
