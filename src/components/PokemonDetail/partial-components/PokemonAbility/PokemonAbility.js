import PropTypes from "prop-types";

export const PokemonAbility = ({item}) => {
    return (
        <p className={"ability"}
           key={item.ability.name}>{item.ability.name}</p>
    );
};

PokemonAbility.propTypes = {
    item: PropTypes.object.isRequired
}
