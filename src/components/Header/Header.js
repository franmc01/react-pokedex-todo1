import {
    AppBar,
    Button,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "#fff",
    },
    logo: {
        flexGrow: 1,
        cursor: "pointer",
    },
    optionMenu: {
        color: "#fff",
        textDecoration: "none",
        fontWeight: "normal",
    },
    textMobile: {
        color: "#000",
    },
}));
export const Header = () => {
    const {logo, menuButton, optionMenu, textMobile} = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [anchorEl, setAnchorEl] = useState();
    const open = Boolean(anchorEl);
    return (
        <AppBar>
            <Toolbar>
                <div className={logo}>
                    <Link to="/">
                        <img src={"../pokedex-logo.png"} alt="logo-pokemon" width={"140rem"} height={"70rem"}/>
                    </Link>
                </div>
                {isMobile ? (
                    <>
                        <IconButton className={menuButton} edge="start" aria-label="menu"
                                    onClick={(e) => setAnchorEl(e.currentTarget)}>
                            <MenuIcon/>
                        </IconButton>
                        <Menu id="menu-appbar" anchorEl={anchorEl} keepMounted open={open}
                              onClose={() => setAnchorEl(null)}>
                            <MenuItem>
                                <NavLink exact className={`${optionMenu} ${textMobile}`} to="/">Home</NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink exact className={`${optionMenu} ${textMobile}`} to="/terms-conditions">Terms &
                                    Conditions</NavLink>
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    <div style={{marginRight: "1rem"}}>
                        <Button variant="text">
                            <NavLink exact className={optionMenu} to="/">Home</NavLink>
                        </Button>
                        <Button variant="text">
                            <NavLink exact className={optionMenu} to="/terms-conditions">Terms & Conditions</NavLink>
                        </Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

