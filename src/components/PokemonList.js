import {Grid, makeStyles} from "@material-ui/core";
import {PokemonItem} from "./PokemonItem";

const useStyles = makeStyles(() => ({
    pokedexContainer: {
        paddingTop: "5rem",
    },
}));
export const PokemonList = ({pokemones}) => {
    const {pokedexContainer} = useStyles();
    return (
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
    );
};
