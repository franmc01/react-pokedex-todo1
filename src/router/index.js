import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {HomePage, PokemonPage, TermsAndConditionsPage} from "../pages";


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pokemon/:name">
                    <PokemonPage />
                </Route>
                <Route path="/terms-conditions">
                    <TermsAndConditionsPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
