import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { GraphicsCardService } from 'src/app/graphics-cards/services/graphics-card.service';
import { GraphicsCardsApiActions } from '../actions/graphics-cards.actions';

@Injectable()
export class GraphicsCardsEffects {
  // This effect listens to the loadGraphicsCards action. When this action is dispatched, this effect calls the getGraphicsCards function from
  // the GraphicsCardService
  loadGraphicsCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GraphicsCardsApiActions.loadGraphicsCards),
      exhaustMap(({ offset, limit, searchTerm }) => {
        return this.graphicsCardsService.getGraphicsCards(offset, limit, searchTerm)
          .pipe(
            map(graphicsCards => GraphicsCardsApiActions.loadGraphicsCardsSuccess({ graphicsCards })),
            catchError(error => of(GraphicsCardsApiActions.loadGraphicsCardsFailure({ error })))
          );
        })
      )
    }
  );

  loadSelectedGraphicsCard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GraphicsCardsApiActions.loadSelectedGraphicsCard),
      exhaustMap((action) => {
        return this.graphicsCardsService.getGraphicsCardById(action.id)
          .pipe(
            map(selectedGraphicsCard => GraphicsCardsApiActions.loadSelectedGraphicsCardSuccess({ selectedGraphicsCard })),
            catchError(error => of(GraphicsCardsApiActions.loadSelectedGraphicsCardFailure({ error })))
          );
        })
      )
    }
  );

  constructor(private actions$: Actions, private graphicsCardsService: GraphicsCardService) {}
}
