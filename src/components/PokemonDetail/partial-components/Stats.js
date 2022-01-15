import {List, ListItem, ListItemText} from "@material-ui/core";

export const Stats = ({stats}) => {
    return (
        <List component="nav" aria-label="stats">

            {
                stats.map(item => (
                    <ListItem divider>
                        <ListItemText className={"capitalize"} secondary={`${item.stat.name}:`}/>
                        <p>{`${item.base_stat}`} <small>pts</small></p>
                    </ListItem>
                ))
            }

        </List>
    );
};
