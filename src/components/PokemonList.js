import {Button, Grid, makeStyles} from "@material-ui/core";
import {PokemonItem} from "./PokemonItem";
import {usePokemonesPaginated} from "../hooks";

const useStyles = makeStyles(() => ({
    pokedexContainer: {
        paddingTop: "5rem",
    },
    pagination: {
        margin: " 3rem 0 0 0",
        display: "grid",
        placeItems: "center",
    }
}));

export const PokemonList = () => {
    const {pokedexContainer, pagination} = useStyles();
    const {pokemones, setPage} = usePokemonesPaginated();

    const handleClick = () => setPage(prevPage => prevPage + 1);

    return (
        <>
            <Grid container spacing={2} className={`animate__animated animate__fadeIn ${pokedexContainer}`}>
                {
                    pokemones.map((pokemon, index) => (
                        <PokemonItem
                            key={pokemon.name}
                            pokemon={pokemon}
                            index={index + 1}
                        />
                    ))
                }
            </Grid>
            {
                (pokemones.length !== 0) && (
                    <div className={pagination}>
                        <Button onClick={handleClick} variant="contained" color="primary">
                            Load more
                        </Button>
                    </div>
                )
            }
        </>
    );
};
