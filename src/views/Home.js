import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Button, Typography } from "@material-ui/core";

import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    const loadMore = () => {
        axios
            .get(`${API_URL}?limit=40`)
            .then((res) => setPokemons(res.data.results))
            .catch((err) => console.error);
    };

    useEffect(() => {
        axios
            .get(API_URL)
            .then((res) => setPokemons(res.data.results))
            .catch((err) => console.error);
    }, []);

    return (
        <div>
            <Typography component="h1">POKEDEX</Typography>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>
                        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>
            <Button variant="contained" color="primary" onClick={loadMore}>
                Load More
            </Button>
        </div>
    );
};

export default Home;
