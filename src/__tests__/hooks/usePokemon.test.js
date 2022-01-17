import {renderHook} from "@testing-library/react-hooks";
import {usePokemon} from "../../hooks";

describe('Pruebas al hook usePokemon', () => {

    test('Debe de devolver la información del pokemon a buscar y un variable loading en false indicando que se terminó la petición', async () => {
        const pokemonName = 'charizard';
        const {result, waitForNextUpdate} = renderHook(() => usePokemon({name: pokemonName}));

        await waitForNextUpdate();

        expect(typeof result.current.pokemon).toBe('object');
        expect(result.current.loading).toBe(false);
    });

});
