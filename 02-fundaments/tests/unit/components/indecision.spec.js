import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision';

describe('Pruebas del componente Indecision', () => {

    let wrapper;
    let clgSpy;

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(() => ({
            'answer': 'no',
            'forced': false,
            'image': 'https://yesno.wtf/assets/no/1-c7d128c95c1740ec76e120146c870f0b.gif'
        })),
    }));

    beforeEach(() => {
        wrapper = shallowMount(Indecision);

        clgSpy = jest.spyOn(console, 'log');

        jest.clearAllMocks();
    })

    test('Debe de coincidir el snapShot del componente', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('escribir en el Input no debe de escribir nada - console spy', async() => {

        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' );
        
        const input = wrapper.find('input');
        await input.setValue('Hola mundo');

        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).toHaveBeenCalledTimes(0);

    })

    test('Debe de llamarse el getAnswer del componente', async() => {
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' );

        const input = wrapper.find('input');
        await input.setValue('Hello World?');

        expect(getAnswerSpy).toHaveBeenCalledTimes(1);
    })

    test('Despues del getAnswer la respuesta deberia ser si', async() => {

        await wrapper.vm.getAnswer()

        expect(wrapper.vm.answer).toBe('Si')
        expect(wrapper.vm.image).toBe('https://yesno.wtf/assets/no/1-c7d128c95c1740ec76e120146c870f0b.gif');

    })

    test('Debe de manejarse el error del fetch', async() => {

        fetch.mockImplementationOnce( () => Promise.reject('API is down'))


        await wrapper.vm.getAnswer()

        const img = wrapper.find('img');

        expect( img.exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API')
    })
})