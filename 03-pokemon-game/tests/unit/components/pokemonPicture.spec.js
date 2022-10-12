import { shallowMount } from "@vue/test-utils";

import PokemonPicture from "@/components/PokemonPicture";

describe("PokemonPicture component", () => {
  test("Debe de coincidir con el snapshot", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Debe de renderizar la imagen del pokemon oculto", () => {

    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });

    const [ img1, img2 ] = wrapper.findAll('img');

    expect(img1.exists()).toBeTruthy();
    expect(img2).toBe(undefined);

    // el metodo classes() retorna una lista de clases que se encuentran en el elemento
    // si le pasamos un string busca ese string en la lista de clases
    expect(img1.classes('hidden-pokemon')).toBeTruthy();

    expect(wrapper.vm.imgSrc).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
  });

  test('Debe de mostrar la imagen del Pokemon', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });

    const img = wrapper.find('img');

    expect(img.exists()).toBeTruthy();
    expect(img.classes('fade-in')).toBeTruthy();

  })
});
