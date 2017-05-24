import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../pokeman';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = [];
  isLoading: boolean = true;

  constructor(private pokedexService: PokedexService){
  }

  public ngOnInit(): void {
      this.loadMorePokemon();
  }

  public loadMorePokemon(){
    this.isLoading = true;

    this.pokedexService.getPokemon(this.pokemons.length, 9).subscribe(pokemons => {
      this.pokemons = this.pokemons.concat(pokemons);
      this.isLoading = false;
      console.log(this.pokemons);
    }, err => {
      alert('may day may day! an error has occurred')
    });
  }

}
