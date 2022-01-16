import PropTypes from "prop-types";
import {Button} from "@material-ui/core";
import './error-404-page.css';
import {useHistory} from "react-router-dom";

export const Error404Page = ({paragraph, pathURL, textButtonBack}) => {

    const history = useHistory();

    return (
        <div className="wrapper-error animate__animated animate__fadeIn">
            <img src="/assets/images/404.png" alt="" width="100%" height="100%"/>
            <div className="wrapper-text">
                <h1>Uh-oh!</h1>
                <p>{paragraph}</p>
            </div>
            <div className="wrapper-footer">
                <Button variant="outlined" onClick={() => history.goBack()}>
                    {textButtonBack}
                </Button>
            </div>
        </div>
    );
};

Error404Page.propTypes = {
    paragraph: PropTypes.string,
    textButtonBack: PropTypes.string
}

Error404Page.defaultProps = {
    paragraph: "You look lost on your journey!",
    textButtonBack: "Go back"
}
