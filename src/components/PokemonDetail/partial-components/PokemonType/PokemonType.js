import './pokemon-type.css'
import PropTypes from "prop-types";

export const PokemonType = ({item}) => {
    return (
        <p className={`type type-${item.type.name.toLowerCase()}`}>
            {item.type.name}
        </p>
    );
};
PokemonType.propTypes = {
    item: PropTypes.object.isRequired
}
