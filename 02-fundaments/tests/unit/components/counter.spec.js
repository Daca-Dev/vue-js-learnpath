import { shallowMount } from "@vue/test-utils"; // to create snapshot (virtual DOM)
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  // test('Debe de hacer match con el snapshot', () => {

  //     const wrapper = shallowMount(Counter);

  //     expect(wrapper.html()).toMatchSnapshot();
  // })

  test("h2 debe de tener el valor por defecto", () => {
    const h3 = wrapper.find("h3");

    expect(h3.exists()).toBe(true);

    expect(h3.text()).toBe("Counter");
  });

  test("El valor por defecto debe de ser 0", () => {
    // const p = wrapper.find('p');
    const p = wrapper.find('[data-testid="counter"]');

    expect(p.exists()).toBe(true);

    expect(p.text()).toBe("0");
  });

  test("Deben de haber dos elementos <p>", () => {
    const ps = wrapper.findAll("p");

    expect(ps.length).toBe(2);
  });

  test("El contador debe de tener un valor de 5 el valor del conteo", async () => {
    const [increaseBtn, decreaseBtn] = wrapper.findAll("button");

    await increaseBtn.trigger("click");
    await increaseBtn.trigger("click");
    await increaseBtn.trigger("click");

    await decreaseBtn.trigger("click");

    const value = wrapper.find('[data-testid="counter"]');
    expect(value.text()).toBe("2");
  });

  test("Debe de establecer el valor por defecto", () => {
    
    const { startCount } = wrapper.props();

    expect(startCount).toBe(0);
    expect(typeof startCount).toBe('number');

  });

  test('Debe de mostrar la prop title', () => {
    const title = 'Hello World';
    const localWrapper = shallowMount(Counter, {
      props: {
        title,
      },
    })

    const h3 = localWrapper.find('h3');

    expect(h3.text()).toBe( title );
  })
});
