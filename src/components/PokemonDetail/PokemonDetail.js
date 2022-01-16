import {useState} from "react";
import {Box, Card, Tab, Tabs} from "@material-ui/core";
import {BasicInformation, Moves, Stats, TabPanel} from "./partial-components";
import './pokemon-detail.css';


export const PokemonDetail = ({pokemon}) => {
    console.log(pokemon)
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card className={"card-pokemon-detail"}>
            <div className={"pokemon-img"}>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
            </div>
            <div className={"pokemon-info"}>
                <Box sx={{width: '100%'}}>
                    <Tabs
                        variant="fullWidth"
                        value={value}
                        indicatorColor="primary"
                        onChange={handleChange}
                    >
                        <Tab value={0} wrapped label="Basic information"/>
                        <Tab value={1} wrapped label="Stats"/>
                        <Tab value={2} wrapped label="Moves"/>
                    </Tabs>
                    <TabPanel className={"animate__animated animate__fadeIn"} value={value} index={0}>
                        <BasicInformation pokemon={pokemon}/>
                    </TabPanel>
                    <TabPanel className={"animate__animated animate__fadeIn"} value={value} index={1}>
                        <Stats stats={pokemon.stats}/>
                    </TabPanel>
                    <TabPanel className={"animate__animated animate__fadeIn"} value={value} index={2}>
                        <Moves pokemonName={pokemon.name} moves={pokemon.moves}/>
                    </TabPanel>
                </Box>
            </div>
        </Card>
    );
};
