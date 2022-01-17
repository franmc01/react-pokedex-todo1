import {Button, List, ListItem, ListItemText} from "@material-ui/core";
import {useState} from "react";
import PropTypes from "prop-types";

export const Stats = ({stats}) => {
    const [itemsToShow, setItemsToShow] = useState(4);
    const [expanded, setExpanded] = useState(false);

    const showMore = () => {
        if (itemsToShow === 4) {
            setItemsToShow(stats.length)
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
                    stats?.slice(0, itemsToShow).map(item => (
                        <ListItem key={item.stat.name} divider>
                            <ListItemText className={"capitalize"} secondary={`${item.stat.name}:`}/>
                            <p>{`${item.base_stat}`} <small>pts</small></p>
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

Stats.propTypes = {
    stats: PropTypes.array.isRequired
}
