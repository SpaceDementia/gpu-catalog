import { createReducer, on } from '@ngrx/store';
import { GraphicsCardsApiActions } from '../actions/graphics-cards.actions';
import { GraphicsCardsState } from 'src/app/graphics-cards/interfaces/graphics-cards.state';

export const initialState: GraphicsCardsState = {
  loading: false,
  graphicsCards: [],
  offset: 0,
  limit: 8,
  searchTerm: '',
  selectedGraphicsCard: null,
  loadingDetails: false,
  error: null
};

export const graphicsCardsReducer = createReducer(
  initialState,

  // Manage the loadGraphicsCards action
  on(GraphicsCardsApiActions.loadGraphicsCards, (_state): GraphicsCardsState => ({
      ..._state,
      loading: true
  })),

  // Manage the loadGraphicsCardsSuccess action
  on(GraphicsCardsApiActions.loadGraphicsCardsSuccess, (_state, { graphicsCards }): GraphicsCardsState => ({
    ..._state,
    graphicsCards: [..._state.graphicsCards, ...graphicsCards],
    offset: graphicsCards.length > 0 ? _state.offset + _state.limit : _state.offset,
    loading: false,
  })),

  // Manage the loadGraphicsCardsFailure action
  on(GraphicsCardsApiActions.loadGraphicsCardsFailure, (_state, { error }): GraphicsCardsState => ({
    ..._state,
    error,
    loading: false
  })),

  // Manage the select selectGraphicsCard action
  on(GraphicsCardsApiActions.selectGraphicsCard, (_state, { graphicsCard }): GraphicsCardsState => ({
    ..._state,
    selectedGraphicsCard: graphicsCard
  })),

  // Manage the loadSelectedGraphicsCardSuccess action
  on(GraphicsCardsApiActions.loadSelectedGraphicsCardSuccess, (_state, { selectedGraphicsCard }): GraphicsCardsState => ({
    ..._state,
    selectedGraphicsCard,
    offset: _state.offset,
    error: null
  })),

  // Manage the loadSelectedGraphicsCardFailure action
  on(GraphicsCardsApiActions.loadSelectedGraphicsCardFailure, (_state, { error }): GraphicsCardsState => ({
    ..._state,
    error
  })),

  // Manage the searchGraphicsCards action
  on(GraphicsCardsApiActions.searchGraphicsCards, (_state, { searchTerm }): GraphicsCardsState => ({
    ..._state,
    graphicsCards: [],
    searchTerm: searchTerm,
    offset: 0
  })),
);
