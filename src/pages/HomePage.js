import {Footer, Header, PokemonList} from "../components";
import Container from "@material-ui/core/Container";

export const HomePage = () => {
    return (
        <>
            <Header/>
            <Container>
                <PokemonList/>
            </Container>
            <Footer/>
        </>
    );
};
