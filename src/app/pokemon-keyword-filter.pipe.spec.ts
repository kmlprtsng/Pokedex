import { PokemonKeywordFilterPipe } from './pokemon-keyword-filter.pipe';

describe('PokemonKeywordFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonKeywordFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
