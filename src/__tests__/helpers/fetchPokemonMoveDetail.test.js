import {fetchPokemonMoveDetail} from "../../helpers";

describe('Pruebas al servicio fetchPokemonsPaginated', () => {

    test('Debe de devolver la información del movimiento(move) a buscar', async () => {
        const move = 'mega-punch';
        const data = await fetchPokemonMoveDetail(move);
        expect(typeof data).toBe('object');
        expect(data.name).toEqual(move);
    });

});
