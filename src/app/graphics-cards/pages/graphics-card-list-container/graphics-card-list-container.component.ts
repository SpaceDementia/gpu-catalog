import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GraphicsCardsApiActions } from 'src/app/state/actions/graphics-cards.actions';
import { take } from 'rxjs/operators';
import { selectGraphicsCards, selectGraphicsCardsError, selectGraphicsCardsLoading, selectOffset, selectSearchTerm, selectSelectedGraphicsCard } from 'src/app/state/selectors/graphics-cards.selectors';
import { GraphicsCard } from '../../interfaces/graphics-card.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'graphics-card-list-container',
  templateUrl: './graphics-card-list-container.component.html',
  styleUrls: ['./graphics-card-list-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicsCardListContainerComponent implements OnInit {

  @ViewChild('scrollContainer', { static: true }) private scrollContainer!: ElementRef;

  graphicsCards$: Observable<readonly GraphicsCard[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  selectedGraphicsCard$: Observable<GraphicsCard | null>;

  offsetSubject = new BehaviorSubject<number>(0);
  searchTermSubject = new BehaviorSubject<string | null>(null);

  limit = 8;
  offset$: Observable<number>;
  searchTerm$: Observable<string | null>;
  lastGraphicsCardsCount: number | null = null;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navigationService: NavigationService) {
    this.graphicsCards$ = this.store.select(selectGraphicsCards);
    this.loading$ = this.store.select(selectGraphicsCardsLoading);
    this.error$ = this.store.select(selectGraphicsCardsError);
    this.selectedGraphicsCard$ = this.store.select(selectSelectedGraphicsCard);

    this.offset$ = this.store.select(selectOffset);
    this.searchTerm$ = this.store.select(selectSearchTerm);
  }

  ngOnInit(): void {

      // Subscribe to changes in the current queryParams
      // Each time one of these values changes, the loadGraphicsCars() method is called automatically with the new values due to this subscription
      this.activatedRoute.queryParams.subscribe(params => {
        const offset = params['offset'] || 0;
        const limit = params['limit'] || this.limit;
        const searchTerm = params['searchTerm'] || null;

        this.store.dispatch(GraphicsCardsApiActions.loadGraphicsCards({ offset, limit, searchTerm }));
      });

      this.graphicsCards$.subscribe(graphicsCards => {
        this.lastGraphicsCardsCount = graphicsCards.length;
      });
  }

  // Called when the div's #scrollContainer scrollbar is scrolled
  onScroll() {

    const scrollTop = this.scrollContainer.nativeElement.scrollTop;
    const clientHeight = this.scrollContainer.nativeElement.clientHeight;

    const scrollPosition = scrollTop + clientHeight;
    const scrollHeight = this.scrollContainer.nativeElement.scrollHeight;

    // Check if isLoading
    this.loading$.pipe(take(1)).subscribe(loading => {
        // Reached the bottom of the div we load the next 8 Graphics Cards
        // If the number of Graphics Cards received is multiple of the limit we assume that there are more Graphics Cards to display
        // If the number of Graphics Cards received is not multiple of the limit we assume that there are no more Graphics Cards to display
        // Don't update the offset
        if (scrollPosition >= scrollHeight && !loading && (this.lastGraphicsCardsCount === null || this.lastGraphicsCardsCount % this.limit === 0)) {

          const currentOffset = Number(this.activatedRoute.snapshot.queryParams['offset'] || 0);
          // Update the offsetSubject with the new offset
          const newOffset = currentOffset + this.limit;
          this.offsetSubject.next(newOffset);

          // Update the queryParams with the new offset
          this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
              ...this.activatedRoute.snapshot.queryParams,
              offset: newOffset,
              limit: this.limit
            },
            queryParamsHandling: 'merge',
          });
        }
    });
  }

  // Called when we type on the SearchBar
  onSearch(searchTerm: string) {

    // Reset the graphicsCards array
    this.store.dispatch(GraphicsCardsApiActions.searchGraphicsCards({ searchTerm }));

    // Update the queryParams
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        offset: 0, // Reset the offset
        limit: this.limit,
        searchTerm: searchTerm || null, // Set to null if searchTerm is empty to remove it from queryParams
      },
      queryParamsHandling: 'merge',
    });
  }
}
