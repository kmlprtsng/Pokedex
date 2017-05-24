import { Pokemon } from './pokeman';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonKeywordFilter'
})
export class PokemonKeywordFilterPipe implements PipeTransform {

  transform(value: Pokemon[], keyword: string): any {
    if(!keyword)
      return value;

    return value.filter(pokemon => pokemon.name.startsWith(keyword.toLowerCase()));
  }

}
