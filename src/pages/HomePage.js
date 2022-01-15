import {useAxiosFetch} from "../hooks";
import {Footer, Header, Loading, PokemonList} from "../components";
import Container from "@material-ui/core/Container";

export const HomePage = () => {
    const {data, loading} = useAxiosFetch({
        url: 'https://pokeapi.co/api/v2/pokemon',
    });

    if (loading) {
        return <Loading/>;
    }

    return (
        <>
            <Header/>
            <Container>
                <PokemonList pokemones={data.results}/>
            </Container>
            <Footer/>
        </>
    );
};
