import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CarruselComponent } from "./carrusel/carrusel.component";
import { FooterComponent } from "./footer/footer.component";
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { HeaderComponent } from "./shared/header/header.component";

registerLocaleData(localeEs,"es");

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterOutlet, NavbarComponent, CarruselComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[{provide:LOCALE_ID, useValue:"es"}],
})
export class AppComponent {
  title = 'mi-ecommerce';
}
