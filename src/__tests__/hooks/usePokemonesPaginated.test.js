import {renderHook} from "@testing-library/react-hooks";
import {usePokemonesPaginated} from "../../hooks";

describe('Pruebas al hook usePokemonesPaginated', () => {

    test('Debe de devolver un estado inicial apenas es utilizado', async () => {
        const {result, waitForNextUpdate} = renderHook(() => usePokemonesPaginated());
        const {pokemones, setPage} = result.current;

        await waitForNextUpdate();

        expect(pokemones).toEqual([]);
        expect(typeof setPage).toBe('function');
    });

    test('Debe de devolver un array de datos con una longitud igual al valor del parámetro que se envia', async () => {
        const limit = 25;
        const {result, waitForNextUpdate} = renderHook(() => usePokemonesPaginated(limit));

        await waitForNextUpdate();

        expect(result.current.pokemones.length).toBe(limit);
    });

});
