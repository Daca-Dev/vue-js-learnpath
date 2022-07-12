
// Test suit
describe('Example component', () => {

  // a unit Test
  test( 'Validate if is greater than 10', () => {

    // Arreglar
    let value = 5;

    // Estimulo
    value = value + 6;

    // Observar el resultado
    expect(value).toBeGreaterThan(10);

  })
})
