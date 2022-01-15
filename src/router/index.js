import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Error404Page, HomePage, PokemonPage, TermsAndConditionsPage} from "../pages";


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/pokemon/:name">
                    <PokemonPage/>
                </Route>
                <Route exact path="/terms-conditions">
                    <TermsAndConditionsPage/>
                </Route>
                <Route path="*">
                    <Error404Page/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
