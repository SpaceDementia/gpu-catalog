import { Component, OnInit } from '@angular/core';
import { GraphicsCard } from '../../interfaces/graphics-card.interface';
import { Store } from '@ngrx/store';
import { GraphicsCardsApiActions } from 'src/app/state/actions/graphics-cards.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { selectGraphicsCardDetailLoading, selectListState, selectSelectedGraphicsCard } from 'src/app/state/selectors/graphics-cards.selectors';
import { take } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'graphics-card-detail',
  templateUrl: './graphics-card-detail.component.html',
  styleUrls: ['./graphics-card-detail.component.sass']
})
export class GraphicsCardDetailComponent implements OnInit {

  graphicsCard$: Observable<GraphicsCard | null>;
  loadingDetails$: Observable<boolean>;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navigationService: NavigationService){
      this.graphicsCard$ = this.store.select(selectSelectedGraphicsCard);
      this.loadingDetails$ = this.store.select(selectGraphicsCardDetailLoading);
    }

  ngOnInit() {
    // We get the id param from the current URL
    const id = this.activatedRoute.snapshot.params['id'];
    if(id) {
      this.store.dispatch(GraphicsCardsApiActions.loadSelectedGraphicsCard({ id }));
    }
  }

  goBack() {
    this.store.select(selectListState).pipe(take(1)).subscribe(listState => {
      const { offset, limit, searchTerm } = listState;
      const queryParams = searchTerm ? { offset, limit, searchTerm } : { offset, limit };

      this.router.navigate(['/graphics-cards'], { queryParams });
    });
  }
}
