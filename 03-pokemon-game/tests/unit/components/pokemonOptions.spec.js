import { shallowMount } from "@vue/test-utils";

import { mockPokemons } from '../mocks/pokemons.mock';
import PokemonOptions from "@/components/PokemonOptions";

describe("PokemonOptions component", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: mockPokemons,
      },
    });
  });


  test("Debe de coincidir con el snapshot", () => {
    // existe el metodo toMatchInlineSnapshot que genera en string el valor de HTML que deberia
    // de tener la prueba
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Debe de mostrar las 4 opciones', () => {

    const liTags = wrapper.findAll('li')

    expect(liTags.length).toBe(4);

    for (const item in liTags) {
      expect(liTags[item].text()).toBe(mockPokemons[item].name)
    }

  })

  test('Debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {

    const [li1, li2, li3, li4] = wrapper.findAll('li')

    // el metodo trigger nos permite disparar tipos de eventos dentro de los HTMl tags
    li1.trigger('click');
    li2.trigger('click');
    li3.trigger('click');
    li4.trigger('click');

    // wrapper tiene un metodo que nos permite visualizar los eventos quie se han disparado
    // y también acepta un parametro para buscar un evento en especifico
    expect(wrapper.emitted('selectionPokemon').length).toBe(4)
    expect(wrapper.emitted('selectionPokemon')[0]).toEqual([1])
    expect(wrapper.emitted('selectionPokemon')[1]).toEqual([2])
    expect(wrapper.emitted('selectionPokemon')[2]).toEqual([3])
    expect(wrapper.emitted('selectionPokemon')[3]).toEqual([4])

  })
});
