import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GraphicsCard } from './../../graphics-cards/interfaces/graphics-card.interface';

export const GraphicsCardsApiActions = createActionGroup({
  source: 'Graphics Cards API',
  events: {
    'Load Graphics Cards': props<{ offset: number, limit: number, searchTerm: string | null }>(),
    'Load Graphics Cards Success': props<{ graphicsCards: ReadonlyArray<GraphicsCard> }>(),
    'Load Graphics Cards Failure': props<{ error: string }>(),
    'Reset Graphics Cards': emptyProps(),
    'Select Graphics Card': props<{ graphicsCard: GraphicsCard }>(),
    'Load Selected Graphics Card': props<{ id: string }>(),
    'Load Selected Graphics Card Success': props<{ selectedGraphicsCard: GraphicsCard }>(),
    'Load Selected Graphics Card Failure': props<{ error: string }>(),
    'Search Graphics Cards': props<{ searchTerm: string }>(),
  },
});
