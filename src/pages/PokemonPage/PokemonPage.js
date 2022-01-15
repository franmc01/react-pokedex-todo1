import {NavLink, useParams} from "react-router-dom";
import Header from "../../components/Header/Header";
import Container from "@material-ui/core/Container";
import Footer from "../../components/Footer/Footer";
import {Breadcrumbs, Card, makeStyles, Typography} from "@material-ui/core";
import {useAxiosFetch} from "../../hooks";
import {Loading} from "../../components";
import './pokemon-page.css'

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
    const {data, loading} = useAxiosFetch({
        url: `https://pokeapi.co/api/v2/pokemon/${name}`
    });


    if (loading) {
        return <Loading/>;
    }


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
                            {data.name}
                        </Typography>
                    </Breadcrumbs>
                    <Card style={{height: "auto", padding: "1rem", margin: "2rem auto"}}>
                                <pre>
                                    {
                                        JSON.stringify(data, null, 4)
                                    }
                                </pre>
                    </Card>
                </div>
            </Container>
            <Footer/>
        </>
    )
        ;
};
