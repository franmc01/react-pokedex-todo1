import {useState} from "react";

const useShowMore = ({items, defaultItemsToShow = 4, defaultExpanded = false}) => {
    const [itemsToShow, setItemsToShow] = useState(defaultItemsToShow);
    const [expanded, setExpanded] = useState(defaultExpanded);

    if(items)

    return {itemsToShow, expanded}
}
