import {Button, List, ListItem} from "@material-ui/core";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

export const Moves = ({pokemonName, moves}) => {
    const [itemsToShow, setItemsToShow] = useState(4);
    const [expanded, setExpanded] = useState(false);
    const history = useHistory();

    const showMore = () => {
        if (itemsToShow === 4) {
            setItemsToShow(moves.length)
            setExpanded(true)
        } else {
            setItemsToShow(4)
            setExpanded(false)
        }
    }

    const navigateToDetailMovePage = ({pokemonName, moveName}) => {
        history.push(`/pokemon/${pokemonName}/move/${moveName}`);
    }

    return (
        <>
            <List component="nav" aria-label="stats">

                {
                    moves?.slice(0, itemsToShow).map(item => (
                        <ListItem
                            key={item.move.name}
                            button divider
                            onClick={() => navigateToDetailMovePage({pokemonName, moveName: item.move.name})}
                        >
                            <p className={"capitalize"}>{item.move.name}</p>
                        </ListItem>
                    ))
                }

            </List>
            <div className="button-container">
                <Button color="primary" disableElevation onClick={() => showMore()} variant="contained">
                    {expanded ? "Show less" : "Show more"}
                </Button>
            </div>
        </>

    );
};

Moves.propTypes = {
    pokemonName: PropTypes.string.isRequired,
    moves: PropTypes.array.isRequired
}
