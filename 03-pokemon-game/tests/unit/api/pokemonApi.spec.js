import pokemonApi from '@/api/pokemonApi';


describe('Pokemon APi test', () => {

  test('should have the correct base URL', () => {
    
    const expected = 'https://pokeapi.co/api/v2/pokemon';
    const { baseURL } = pokemonApi.defaults;

    expect( baseURL ).toEqual(expected)

  })
})