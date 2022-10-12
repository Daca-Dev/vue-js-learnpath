import { shallowMount, mount } from '@vue/test-utils';

import PokemonPage from '@/pages/PokemonPage';
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';


import { mockPokemons } from '../mocks/pokemons.mock';

describe('PokemonPage component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage);
    })

    test('Bebe de coincidir con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Debe de llamar a "mixPokemonArray" al monstar el componente', () => {

        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray');
        const wrapper = shallowMount(PokemonPage)

        expect(mixPokemonArraySpy).toHaveBeenCalled();

    })

    test('Debe  de hacer match con el snapshot cuando cargan los pokemon', () => {

        // la diferecnia entre mount y shallowMount es que mount renderiza todo el componente
        // y los hijos, mientras que shallowMount crear stubs de los componentes personalizados
        // para evitar que la prueba sea muy pesada
        const wrapper = mount(PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            },
        });

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Debe de existir los componentes de Pokemonoptions y PokemonPicture', () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            },
        });

        const pokemonPicture = wrapper.findComponent(PokemonPicture);

        expect(pokemonPicture.exists()).toBeTruthy();
        expect(pokemonPicture.attributes('pokemonid')).toBe('1');
        
        const pokemonOptions = wrapper.findComponent(PokemonOptions);

        expect(pokemonOptions.exists()).toBeTruthy();
        expect(pokemonOptions.attributes('pokemons')).toBeTruthy();
    
    })

    test('Pruebas con el checkAnswer', async() => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            },
        });

        await wrapper.vm.checkAnswer(mockPokemons[0].id)

        expect(wrapper.find('h2').exists()).toBe(true);
        expect(wrapper.find('h2').text()).toBe(`Correcto, ${ mockPokemons[0].name }`);
        expect(wrapper.vm.showPokemon).toBeTruthy();

        await wrapper.vm.checkAnswer(mockPokemons[1].id);

        expect(wrapper.vm.message).toBe(`Oops, era ${ mockPokemons[0].name }`);

    })
})
