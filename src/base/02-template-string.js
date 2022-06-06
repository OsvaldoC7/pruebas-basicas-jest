const nombre   = 'Osvaldo';
const apellido = 'Cruz';

const nombreCompleto = `${ nombre } ${ apellido }`;

export function getSaludo(nombre = 'Panchito') {
    return 'Hola ' + nombre;
}
