import {fetchPokemonsPaginated} from "../../helpers";

describe('Pruebas al servicio fetchPokemonsPaginated', () => {

    test('Debe de devolver por defecto array de 20 pokemones sino se especifica ningún parámetro', async () => {
        const pokemones = await fetchPokemonsPaginated()
        expect(pokemones.results.length).toBe(20);
    });

    test('Debe de devolver un array con 40 pokemones', async () => {
        const pokemones = await fetchPokemonsPaginated(40)
        expect(pokemones.results.length).toBe(40);
    });

});
