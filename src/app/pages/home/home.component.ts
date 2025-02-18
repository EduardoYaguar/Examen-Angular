import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { CarruselComponent } from "./components/carrusel/carrusel.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CarruselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
