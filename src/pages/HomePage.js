import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";
import {usePokemons} from "../hooks";
import {Loading} from "../components";

export const HomePage = () => {
    const {data, loading} = usePokemons();

    if (loading) {
        return <Loading/>;
    }

    return (
        <div>
            <Typography component="h1">POKEDEX</Typography>
            <ul>
                {data?.map((pokemon, index) => (
                    <li key={index}>
                        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
