import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent { }
