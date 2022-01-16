import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Error404Page, HomePage, PokemonPage, TermsAndConditionsPage} from "../pages";
import {PokemonMoveDetailPage} from "../pages/PokemonMoveDetailPage";

const PokemonMoveRouter = () => {
    return (
        <Switch>
            <Route exact path="/pokemon/:name">
                <PokemonPage/>
            </Route>
            <Route exact path="/pokemon/:name/move/:move">
                <PokemonMoveDetailPage/>
            </Route>
            <Route path="*">
                <Redirect to="/404"/>
            </Route>
        </Switch>
    )
}

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/pokemon/:name" component={PokemonMoveRouter}/>
                <Route exact path="/terms-conditions">
                    <TermsAndConditionsPage/>
                </Route>
                <Route path="/404" component={Error404Page}/>
                <Route path="*">
                    <Redirect to="/404"/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
