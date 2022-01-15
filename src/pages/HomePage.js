import {useAxiosFetch} from "../hooks";
import {Loading, PokemonList} from "../components";
import {AppBar, Toolbar} from "@material-ui/core";
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
            <AppBar position={"absolute"}>
                <Toolbar>
                    <img src={"./pokedex-logo.png"} alt="" width={"160rem"} height={"90rem"}/>
                </Toolbar>
            </AppBar>
            <Container>
                <PokemonList pokemones={data.results}/>
            </Container>

        </>
    )
        ;
};
