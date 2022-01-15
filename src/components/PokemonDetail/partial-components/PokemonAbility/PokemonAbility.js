export const PokemonAbility = ({item}) => {
    return (
        <p className={"ability"}
           key={item.ability.name}>{item.ability.name}</p>
    );
};
