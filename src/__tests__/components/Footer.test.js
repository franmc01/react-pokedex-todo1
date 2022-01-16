import {shallow} from "enzyme";
import {Footer} from "../../components";

describe('Pruebas al componente del footer', () => {
    test('Debe de mostrar el componente', () => {
        const wrapper = shallow(<Footer/>);
        expect(wrapper).toMatchSnapshot();
    })
});
