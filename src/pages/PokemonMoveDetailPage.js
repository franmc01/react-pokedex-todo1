import {Footer, Header, Loading, PokemonMove} from "../components";
import Container from "@material-ui/core/Container";
import {Breadcrumbs, makeStyles, Typography} from "@material-ui/core";
import {Link, useParams} from "react-router-dom";
import {usePokemonMove} from "../hooks/usePokemonMove";
import {Error404Page} from "./Error404Page/Error404Page";

const useStyles = makeStyles(() => ({
    pokemonMoveDetailWrapper: {
        paddingTop: "7rem",
    },
    breadcrumbLink: {
        textTransform: "capitalize",
        textDecoration: "none",
        color: "#adb5bd",
    },
    breadcrumbCapitalized: {
        textTransform: "capitalize",
        fontWeight: "500"
    }
}));

export const PokemonMoveDetailPage = () => {
    const {pokemonMoveDetailWrapper, breadcrumbCapitalized, breadcrumbLink} = useStyles();
    const {move, name} = useParams();
    const {moveDetail, loading} = usePokemonMove(move);

    if (loading) return <Loading/>;
    if (!moveDetail) return <Error404Page textButtonBack={"Go back"} paragraph={"Pokemon Move Not Found"}/>;

    return (
        <>
            <Header/>
            <Container>
                <div className={`animate__animated animate__fadeIn ${pokemonMoveDetailWrapper}`}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link className={breadcrumbLink} to={"/"}>
                            Pokemon
                        </Link>
                        <Link className={breadcrumbLink} to={`/pokemon/${name}`}>
                            {name}
                        </Link>
                        <Typography className={breadcrumbLink}>
                            moves
                        </Typography>
                        <Typography className={breadcrumbCapitalized} color="textPrimary">
                            {move}
                        </Typography>
                    </Breadcrumbs>
                    <PokemonMove moveDetail={moveDetail}/>
                </div>
            </Container>
            <Footer/>
        </>
    );
};
