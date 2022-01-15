import {Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    cardWrapper: {
        marginTop: "2rem"
    },
    cardMedia: {
        margin: "auto",
        display: "block",
        width: "40%",
        height: "7rem",
        marginTop: "1rem",
        backgroundSize: "contain"
    },
    cardContent: {
        textAlign: "center",
    },
    titleCard: {
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: "1rem",
    }
}));

export const PokemonCard = ({pokemon, index}) => {
    const {cardMedia, cardContent, cardWrapper, titleCard} = useStyles();
    return (
        <Grid item xs={6} sm={3} className={cardWrapper}>
            <Card onClick={() => console.log('Click')}>
                <CardActionArea>
                    <CardMedia
                        className={cardMedia}
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`}
                    />
                    <CardContent className={cardContent}>
                        <Typography variant={"subtitle1"}>
                            {`#${index.toString().padStart(3, 0)}`}
                        </Typography>
                        <Typography className={titleCard}>
                            {pokemon.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};