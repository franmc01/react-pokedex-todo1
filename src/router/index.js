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
            <footer>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/terms-conditions">Terms & Conditions</Link>
                    </li>
                </ul>
            </footer>
        </BrowserRouter>
    );
};

export default Router;
