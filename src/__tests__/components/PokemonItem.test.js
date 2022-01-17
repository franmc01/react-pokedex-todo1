import {mount, shallow} from "enzyme";
import {PokemonItem} from "../../components";
import {Typography} from "@material-ui/core";


describe("ProductDetails component", () => {
    let component, pokemon;

    beforeEach(() => {
        pokemon = {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}
    })
    beforeEach(() => {
        component = mount(<PokemonItem pokemon={pokemon} index={1}/>);
    })

    test('Debe de montarse correctamente el componente', () => {},() => {
        expect(component).toBeTruthy();
        expect(component.props().pokemon).toEqual(pokemon);
        expect(component.props().index).toEqual(1);
    });

})
