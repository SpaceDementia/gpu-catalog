import { Component, Input } from '@angular/core';
import { GraphicsCard } from '../../interfaces/graphics-card.interface';

@Component({
  selector: 'graphics-card-card',
  templateUrl: './graphics-card-card.component.html',
  styleUrls: ['./graphics-card-card.component.sass']
})
export class GraphicsCardCardComponent {

  @Input('GPU') graphicsCard: GraphicsCard = {} as GraphicsCard;

}
