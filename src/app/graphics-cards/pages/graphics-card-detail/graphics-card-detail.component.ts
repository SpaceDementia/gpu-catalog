import { Component, OnInit } from '@angular/core';
import { GraphicsCard } from '../../interfaces/graphics-card.interface';
import { GraphicsCardService } from '../../services/graphics-card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'graphics-card-detail',
  templateUrl: './graphics-card-detail.component.html',
  styleUrls: ['./graphics-card-detail.component.sass']
})
export class GraphicsCardDetailComponent implements OnInit {

  graphicsCard: GraphicsCard = {} as GraphicsCard;

  constructor(
    private graphicsCardService: GraphicsCardService,
    private activatedRoute: ActivatedRoute,
    private router: Router){}

  ngOnInit() {
    // We get the params from the current URL, transform these params into a GraphicsCard instance
    // and then subscribe to this new observable to get the GraphicsCard with the id that is in the current URL params
    this.activatedRoute.params
      .pipe(
        // We use object destructuring to get the id emitted by params
        switchMap(({ id }) => this.graphicsCardService.getGraphicsCardById(id))
      ).subscribe((gpu: GraphicsCard) => this.graphicsCard = gpu as GraphicsCard);
  }

  goBack() {
    this.router.navigate(['/graphics-cards'], { queryParams: { offset: 0, limit: 8 } });
  }
}
