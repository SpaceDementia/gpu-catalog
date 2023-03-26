import { Component, OnInit } from '@angular/core';
import { GraphicsCard } from '../../interfaces/graphics-card.interface';
import { GraphicsCardService } from '../../services/graphics-card.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
    private location: Location){}

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
    this.location.back();
  }
}
