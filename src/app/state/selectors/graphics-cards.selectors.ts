import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GraphicsCardsState } from 'src/app/graphics-cards/interfaces/graphics-cards.state';

export const selectGraphicsCardsState = createFeatureSelector<GraphicsCardsState>('graphicsCards');

// Selectors to access the GraphicsCards, load state and error in the app state

// Selector for the queryParams
export const selectListState = createSelector(
  selectGraphicsCardsState,
  (state: GraphicsCardsState) => {
    return {
      offset: state.offset,
      limit: state.limit,
      searchTerm: state.searchTerm
    };
  }
);

// Selector for the offset
export const selectOffset = createSelector(
  selectGraphicsCardsState,
  (state: GraphicsCardsState) => state.offset
)

// Selector for the searchTerm
export const selectSearchTerm = createSelector(
  selectGraphicsCardsState,
  (state: GraphicsCardsState) => state.searchTerm
)

// Selector for the GraphicsCards
export const selectGraphicsCards = createSelector(
  selectGraphicsCardsState,
  (state: GraphicsCardsState) => state.graphicsCards
)

// Selector for the load state
export const selectGraphicsCardsLoading = createSelector(
  selectGraphicsCardsState,
  (state: GraphicsCardsState) => state.loading
);

// Selector for the error
export const selectGraphicsCardsError = createSelector(
  selectGraphicsCardsState,
  (state: GraphicsCardsState) => state.error
);

// Selector for the selected Graphics Card
export const selectSelectedGraphicsCard = createSelector(
  selectGraphicsCardsState,
  (state: GraphicsCardsState) => state.selectedGraphicsCard
);

// Selector for the selected Graphics Card details load state
export const selectGraphicsCardDetailLoading = createSelector(
  selectGraphicsCardsState,
  (state: GraphicsCardsState) => state.loadingDetails
);
