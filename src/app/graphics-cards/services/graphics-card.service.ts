import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { GraphicsCard } from '../interfaces/graphics-card.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphicsCardService {

  constructor(private http: HttpClient) { }

  private apiURL = 'http://localhost:3000';

  // Http request to get the Graphics Cards from the API based on offset and limit parameters
  getGraphicsCards(offset: number, limit: number, searchTerm: string | null): Observable<GraphicsCard[]> {

    const params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString())
      .set('searchTerm', searchTerm || ''); // Set the searchTerm only if it's not null

    return this.http.get<GraphicsCard[]>(`${this.apiURL}/graphics-cards`, { params });
  }

  // Http request to get the Graphics Card with this id from the API
  getGraphicsCardById(id: string): Observable<GraphicsCard> {
    return this.http.get<GraphicsCard>(`${this.apiURL}/graphics-cards/${id}`);//, { params })
  }
}
