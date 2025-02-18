import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { CarruselComponent } from "./components/carrusel/carrusel.component";
import { TableComponent } from "./components/table/table.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CarruselComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
