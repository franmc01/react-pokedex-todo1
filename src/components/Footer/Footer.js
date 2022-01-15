import {Link} from "react-router-dom";
import './footer.css'

const Footer = () => {
    return (
        <footer className={"footer"}>
            <a
                target="_blank"
                href={"https://github.com/francmarin98"}
                rel="noreferrer"
            >
                &copy; {new Date().getFullYear()} Francisco Marín
            </a>
            <Link to="/terms-conditions">Terms & Conditions</Link>
        </footer>
    );
};

export default Footer;
