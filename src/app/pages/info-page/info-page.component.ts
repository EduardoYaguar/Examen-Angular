import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { CardsComponent } from "./components/cards/cards.component";

@Component({
  selector: 'app-info-page',
  imports: [NavbarComponent, CardsComponent],
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.css'
})
export default class InfoPageComponent {

}
