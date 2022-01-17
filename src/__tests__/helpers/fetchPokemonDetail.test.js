import {fetchPokemonDetail} from "../../helpers";

describe('Pruebas al servicio fetchPokemonDetail', () => {

    test('Debe de devolver un error 404 sino encuentra el pokemon que se solicita', async () => {
        await expect(fetchPokemonDetail('pokemon-inventado')).rejects.toHaveProperty('response.status', 404);
    });

});

