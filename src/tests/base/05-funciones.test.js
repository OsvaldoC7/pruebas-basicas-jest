import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => { 
  test('getUser debe retornar un objeto', () => {
    const user_test = {
      uid: 'ABC123',
      username: 'Osvaldo'
    }

    const user = getUser()

    // Cuando son objetos toBe -> toEqual
    expect(user).toEqual(user_test)
  })
  
  test('getUsuarioActivo debe de retornar un objeto con la propiedad nombre', () => {
    const nombre = 'Osvaldo'

    const user_test = {
      uid: 'ABC567',
      username: nombre
    }

    const user_activo = getUsuarioActivo(nombre)

    expect(user_activo).toEqual(user_test)
  })

  test('getUsuarioActivo debe de retornar un objeto con el username: Panchito', () => {
    const user_test = {
      uid: 'ABC567',
      username: 'Panchito'
    }

    const user_activo = getUsuarioActivo()

    expect(user_activo).toEqual(user_test)
  })
})