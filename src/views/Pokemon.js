import { useParams } from "react-router-dom";

import { Typography } from "@material-ui/core";

const Pokemon = () => {
    let { name } = useParams();

    return <Typography component="h1">{name}</Typography>;
};

export default Pokemon;
