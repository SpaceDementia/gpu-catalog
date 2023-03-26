import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { GraphicsCardsRoutingModule } from './graphics-cards-routing.module';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { GraphicsCardCardComponent } from './components/graphics-card-card/graphics-card-card.component';
import { GraphicsCardListContainerComponent } from './pages/graphics-card-list-container/graphics-card-list-container.component';
import { GraphicsCardDetailComponent } from './pages/graphics-card-detail/graphics-card-detail.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    GraphicsCardsRoutingModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    GraphicsCardCardComponent,
    GraphicsCardListContainerComponent,
    GraphicsCardDetailComponent,
    SearchBarComponent
  ],
})
export class GraphicsCardsModule { }
