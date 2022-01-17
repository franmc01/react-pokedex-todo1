import {Card} from "@material-ui/core";
import './pokemon-move.css';
import PropTypes from "prop-types";

export const PokemonMove = ({moveDetail}) => {
    return (<Card style={{margin: "2rem auto"}}>
        <div className="move-detail-wrapper">
            <h2>Effect:</h2>
            {moveDetail.effect_entries.map((item) => (<div className="move-detail-item" key={item.effect}>
                    <p>
                        <span className="text-bolder-capitalized">damage_class: </span>
                        {moveDetail.damage_class.name}
                    </p>
                    <p>
                        <span className="text-bolder-capitalized">type: </span>
                        {moveDetail.type.name}
                    </p>
                    <p>
                        <span className="text-bolder-capitalized">target: </span>
                        {moveDetail.target.name}
                    </p>
                    <p>
                        <span className="text-bolder-capitalized">accuracy: </span>
                        {moveDetail.accuracy || 0} %
                    </p>
                    <p>
                        <span className="text-bolder-capitalized">effect_chance: </span>
                        {moveDetail.effect_chance || 0} %
                    </p>
                    <p>
                        <span className="text-bolder-capitalized">power: </span>
                        {moveDetail.power || 0} pts
                    </p>
                    <p>
                        <span className="text-bolder-capitalized">effect_description: </span>
                        {item.effect}
                    </p>
                    <p>
                        <span className="text-bolder-capitalized">short_effect: </span>
                        {item.short_effect}
                    </p>
                </div>

            ))}
        </div>
    </Card>);
};


PokemonMove.propTypes = {
    moveDetail: PropTypes.object.isRequired,
}
