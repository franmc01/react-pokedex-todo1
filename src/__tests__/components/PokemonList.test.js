import {shallow} from "enzyme";
import {PokemonList} from "../../components";
import {usePokemonesPaginated} from "../../hooks";

jest.mock("../../hooks/usePokemonesPaginated")

describe('Pruebas al component <PokemonList/>', () => {
    const pokemones = [
        {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
        {name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/16/'}
    ];

    beforeEach(() => {
        usePokemonesPaginated.mockImplementation(() => {
            return {pokemones, setPage: jest.fn()}
        });
    });

    test('Debe de mostrarse el componente <PokemonList/> correctamente', () => {
        const wrapper = shallow(<PokemonList/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se obtienen los pokemones desde el hook usePokemonesPaginated', () => {
        const wrapper = shallow(<PokemonList/>);
        expect(wrapper.find('PokemonItem').length).toBe(pokemones.length);
    });
});
