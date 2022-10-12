import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions';

describe('Helper/getPokemonOptions', () => {

    test('should return an array of numbers and 650 lenght', () => {
        
        const pokemons = getPokemons();
        
        expect( pokemons.length ).toBe( 650 );
        expect( pokemons[0] ).toBe( 1 );
        expect( pokemons[300] ).toBe( 301 );
        expect( pokemons[649] ).toBe( 650 );
        
     })

     test('getPokemonNames debe de retornar un arreglo de 4 elementos con nombres de pokemon', async() => {

        const pokemons = await getPokemonNames([1,2,3,4]);
        const expected = [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'charmander', id: 3 },
            { name: 'venusaur', id: 4 },
          ]

          expect( pokemons ).toEqual( expected );

     });

     test('getPokemonOptions debe de retornar un arreglo', async() => {

        const pokemons = await getPokemonOptions();

        expect(pokemons.length).toBe(4);
        expect(pokemons).toEqual([
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
        ])
     })

})