import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {
  test('retornaArreglo debe de retornar un string y un numero', () => {
    const arr = retornaArreglo()

    expect(arr).toEqual(['ABC', 123])
  })

  test('retornaArreglo desestructurado debe de retornar un string y un numero', () => {
    const [letras, numeros] = retornaArreglo()

    expect(letras).toBe('ABC')
    expect(typeof letras).toBe('string')
    expect(numeros).toBe(123)
  })
})