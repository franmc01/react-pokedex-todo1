import {NavLink, useParams} from "react-router-dom";
import Container from "@material-ui/core/Container";
import {Breadcrumbs, makeStyles, Typography} from "@material-ui/core";
import {Footer, Header, Loading, PokemonDetail} from "../components";
import {Error404Page} from "./Error404Page/Error404Page";
import {usePokemon} from "../hooks";

const useStyles = makeStyles(() => ({
    pokemonDetailWrapper: {
        paddingTop: "7rem",
    },
    breadcrumbLink: {
        textDecoration: "none",
        color: "#adb5bd"
    },
    breadcrumbCapitalized: {
        textTransform: "capitalize",
        fontWeight: "500"
    }
}));

export const PokemonPage = () => {
    const {pokemonDetailWrapper, breadcrumbLink, breadcrumbCapitalized} = useStyles();

    const {name} = useParams();
    const {pokemon, loading} = usePokemon({name});

    if (loading) return <Loading/>;
    if (!pokemon) return <Error404Page textButtonBack={"Go back"} paragraph={"Pokemon Not Found"}/>;

    return (
        <>
            <Header/>
            <Container>
                <div className={`animate__animated animate__fadeIn ${pokemonDetailWrapper}`}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <NavLink className={breadcrumbLink} exact to={"/"}>
                            Pokemon
                        </NavLink>
                        <Typography className={breadcrumbCapitalized} color="textPrimary">
                            {pokemon.name}
                        </Typography>
                    </Breadcrumbs>
                    <PokemonDetail pokemon={pokemon}/>
                </div>
            </Container>
            <Footer/>
        </>
    );
};
