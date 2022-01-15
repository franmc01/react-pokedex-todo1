import {Card, CardContent, CardMedia, Grid, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardWrapper: {
        marginTop: "2rem"
    },
    cardMedia: {
        margin: "auto",
    },
    cardContent: {
        textAlign: "center",
    }
}));

export const PokemonCard = ({pokemon, index}) => {
    const classes = useStyles();
    return (
        <Grid item xs={6} sm={3} className={classes.cardWrapper}>
            <Card onClick={() => console.log('Click')}>
                <CardMedia
                    className={classes.cardMedia}
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`}
                    style={{width: "100px", height: "100px"}}
                />
                <CardContent className={classes.cardContent}>
                    <Typography>{pokemon.name}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};
