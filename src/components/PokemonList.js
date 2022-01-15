import {Grid, makeStyles} from "@material-ui/core";
import {PokemonCard} from "./PokemonCard";

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        paddingTop: "6rem",
    },
}));
export const PokemonList = ({pokemones}) => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.pokedexContainer}>
            {
                pokemones.map((pokemon, index) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} index={index+1}/>
                ))
            }
        </Grid>
    );
};
