import {List, ListItem, ListItemText} from "@material-ui/core";
import {PokemonType} from "./PokemonType/PokemonType";
import {PokemonAbility} from "./PokemonAbility/PokemonAbility";
import PropTypes from "prop-types";

export const BasicInformation = ({pokemon}) => {
    return (
        <List component="nav" aria-label="basic-information">
            <ListItem divider>
                <ListItemText secondary="Type:"/>
                {
                    pokemon.types.map(item => (<PokemonType key={item.type.name} item={item}/>))
                }
            </ListItem>
            <ListItem divider>
                <ListItemText secondary="Height:"/>
                <p>
                    {`${pokemon.height * 10} cm`}
                </p>
            </ListItem>
            <ListItem divider>
                <ListItemText secondary="Weight:"/>
                <p>
                    {`${pokemon.weight / 10} kg`}
                </p>
            </ListItem>
            <ListItem divider>
                <ListItemText secondary="Abilities:"/>
                {
                    pokemon.abilities.map(item => (<PokemonAbility key={item.ability.name} item={item}/>))
                }
            </ListItem>
        </List>
    );
};

BasicInformation.propTypes = {
    pokemon: PropTypes.object.isRequired
}
