import { useParams } from "react-router-dom";

import { Typography } from "@material-ui/core";

export const PokemonPage = () => {
    let { name } = useParams();

    return <Typography component="h1">{name}</Typography>;
};
