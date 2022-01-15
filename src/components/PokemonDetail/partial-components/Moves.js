import {Button, List, ListItem} from "@material-ui/core";
import {useState} from "react";

export const Moves = ({moves}) => {
    const [itemsToShow, setItemsToShow] = useState(4);
    const [expanded, setExpanded] = useState(false);

    const showMore = () => {
        if (itemsToShow === 4) {
            setItemsToShow(moves.length)
            setExpanded(true)
        } else {
            setItemsToShow(4)
            setExpanded(false)
        }
    }
    return (
        <>
            <List component="nav" aria-label="stats">

                {
                    moves.slice(0, itemsToShow).map(item => (
                        <ListItem key={item.move.name} button divider>
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
