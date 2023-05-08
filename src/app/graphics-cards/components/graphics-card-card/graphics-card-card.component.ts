import { Component, Input } from '@angular/core';
import { GraphicsCard } from '../../interfaces/graphics-card.interface';
import { Store } from '@ngrx/store';
import { GraphicsCardsApiActions } from 'src/app/state/actions/graphics-cards.actions';

@Component({
  selector: 'graphics-card-card',
  templateUrl: './graphics-card-card.component.html',
  styleUrls: ['./graphics-card-card.component.sass']
})
export class GraphicsCardCardComponent {

  @Input('GPU') graphicsCard: GraphicsCard = {} as GraphicsCard;

  constructor(private store: Store) {}

  onCardClick() {
    this.store.dispatch(GraphicsCardsApiActions.selectGraphicsCard({ graphicsCard: this.graphicsCard }));
  }
}
