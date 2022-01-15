import './pokemon-type.css'

export const PokemonType = ({item}) => {
    return (
        <p className={`type type-${item.type.name.toLowerCase()}`}>
            {item.type.name}
        </p>
    );
};
