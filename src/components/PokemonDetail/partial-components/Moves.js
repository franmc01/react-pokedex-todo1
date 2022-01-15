import {List, ListItem} from "@material-ui/core";

export const Moves = ({moves}) => {
    console.log(moves)
    return (
        <List component="nav" aria-label="stats">

            {
                moves.map(item => (
                    <ListItem button divider>
                        <p className={"capitalize"}>{item.move.name}</p>
                    </ListItem>
                ))
            }

        </List>
    );
};
