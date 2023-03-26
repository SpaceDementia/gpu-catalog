import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GraphicsCard } from '../../interfaces/graphics-card.interface';
import { GraphicsCardService } from '../../services/graphics-card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'graphics-card-list-container',
  templateUrl: './graphics-card-list-container.component.html',
  styleUrls: ['./graphics-card-list-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicsCardListContainerComponent implements OnInit {

  @ViewChild('scrollContainer', { static: true }) private scrollContainer!: ElementRef;

  graphicsCards: GraphicsCard[] = [];
  offset: number;
  limit: number;
  searchTerm: string;
  isLoading: boolean;

  constructor(
      private graphicsCardService: GraphicsCardService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private cdRef: ChangeDetectorRef) {
        this.offset = 0;
        this.limit = 8;
        this.searchTerm = '';
        this.isLoading = false;
  }

  ngOnInit(): void  {
    // Subscribe to changes in the queryParams and make the request according to the current offset, limit and searchTerm values
    // Each time one of these values changes, the loadGraphicsCars() method is called automatically due to this subscription
    this.activatedRoute.queryParams.subscribe(params => {
      this.offset = +params['offset'] || 0;
      this.limit = +params['limit'] || 8;
      this.loadGraphicsCards()
    });
  }

  // Gets the Graphics Cards from the API based on offset and limit parameters
  loadGraphicsCards() {

    this.isLoading = true;

    this.graphicsCardService.getGraphicsCards(this.offset, this.limit, this.searchTerm).subscribe(
      (data: GraphicsCard[]) => {
        // There are Graphics Cards still availables in the API
        if(data.length){
          this.graphicsCards =[...this.graphicsCards, ...data];
          this.offset += this.limit;
        }

        this.isLoading = false;

        // Detect changes after updating the property
        this.cdRef.detectChanges();
      },
      (error) => {
        console.error('Error loading the graphics cards: ', error)
        this.isLoading = false;
      }
    );
  }

  // Called when the div's #scrollContainer scrollbar is scrolled
  onScroll() {

    const scrollTop = this.scrollContainer.nativeElement.scrollTop;
    const clientHeight = this.scrollContainer.nativeElement.clientHeight;

    const scrollPosition = scrollTop + clientHeight;
    const scrollHeight = this.scrollContainer.nativeElement.scrollHeight;

    // Reached the bottom of the div we load the next 8 Graphics Cards
    if (scrollPosition >= scrollHeight && !this.isLoading) {
      // Update the queryParams with the new offset
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {
          offset: this.offset,
          limit: this.limit
        },
        queryParamsHandling: 'merge',
      });
    }
  }

  // Called when we type on the SearchBar
  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;

    // Reset the offset when a new searchTerm is entered
    this.offset = 0;
    // Clear the graphicsCards to show only the filtered results
    this.graphicsCards = []

    // Update the queryParams
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        offset: this.offset,
        limit: this.limit,
        searchTerm: searchTerm || null, // Set to null if searchTerm is empty to remove it from queryParams
      },
      queryParamsHandling: 'merge',
    });
  }
}
