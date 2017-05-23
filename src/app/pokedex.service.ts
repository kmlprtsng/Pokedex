import { Pokemon } from './pokeman';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PokedexService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseImageUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: Http) { }

  getPokemon(offset: number, limit: number): Observable<Pokemon[]>{
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
    .map(response => response.json().results)
    .map(results => {
      return results.map((item, index) => {
        const id: number = index + 1 + offset;

        return new Pokemon(id, item.name,`${this.baseImageUrl}${id}.png`);
      });
    });
  }
}
