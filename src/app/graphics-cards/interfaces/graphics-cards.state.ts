import { GraphicsCard } from "./graphics-card.interface";

export interface GraphicsCardsState {
  loading: boolean,
  graphicsCards: ReadonlyArray<GraphicsCard>,
  offset: number,
  limit: number,
  searchTerm: string | null,
  selectedGraphicsCard: GraphicsCard | null,
  loadingDetails: boolean,
  error: string | null
}
