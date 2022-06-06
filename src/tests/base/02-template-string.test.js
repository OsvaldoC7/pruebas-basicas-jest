import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe de retornar Hola Osvaldo', () => {
    const nombre = 'Osvaldo'

    const saludo = getSaludo(nombre)

    expect(saludo).toBe('Hola ' + nombre)
  })

  test('getSaludo debe de retornar Hola Panchito si no hay nombre', () =>{
    const saludo = getSaludo()

    expect(saludo).toBe('Hola Panchito')
  })
})