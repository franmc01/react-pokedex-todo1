import {useState} from "react";
import {Box, Card, Divider, List, ListItem, ListItemText, Tab, Tabs} from "@material-ui/core";
import {TabPanel, PokemonType} from "./partial-components";
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
                    <TabPanel value={value} index={0}>
                        <List component="nav" aria-label="mailbox folders">
                            <ListItem>
                                <ListItemText secondary="Type:"/>
                                {
                                    pokemon.types.map(item => (<PokemonType key={item.type.name} item={item} />))
                                }
                            </ListItem>
                            <Divider/>
                            <ListItem divider>
                                <ListItemText secondary="Height:"/>
                                <p>
                                    {`${pokemon.height * 10} cm`}
                                </p>
                            </ListItem>
                            <ListItem>
                                <ListItemText secondary="Weight:"/>
                                <p>
                                    {`${pokemon.weight / 10} kg`}
                                </p>
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <ListItemText secondary="Abilities:"/>
                                {
                                    pokemon.abilities.map(item => (<p className={"ability"}
                                                                      key={item.ability.name}>{item.ability.name}</p>))
                                }
                            </ListItem>
                        </List>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </Box>
            </div>
        </Card>
    );
};
