import {makeStyles, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {Footer, Header} from "../components";

const useStyles = makeStyles(() => ({
    typographyContainer: {
        paddingTop: "7rem",
    },

    typographyTitle: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },

    typographyParagraph: {
        fontSize: "1rem",
        textAlign: "justify",
        lineHeight: "1.5rem"
    }
}));

export const TermsAndConditionsPage = () => {

    const {typographyContainer, typographyTitle, typographyParagraph} = useStyles();

    return (
        <>
            <Header/>
            <Container>
                <div className={`animate__animated animate__fadeIn ${typographyContainer}`}>
                    <Typography className={typographyTitle} component="h1">
                        Terms & Conditions
                    </Typography>
                    <p className={typographyParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        nibh dolor, accumsan sit amet rutrum in, elementum sed neque. Ut vitae
                        rhoncus turpis, eget facilisis risus. Fusce a diam id velit imperdiet
                        condimentum. Cras nisi enim, posuere eu ligula sit amet, sagittis rutrum
                        mi. Maecenas dictum bibendum turpis, in rhoncus tortor dapibus eget. Sed
                        dignissim ex nunc, ac tempus sapien dapibus eu. Ut quam ipsum,
                        vestibulum ac efficitur non, viverra vel nunc. Quisque a egestas lorem.
                        Sed non eros vehicula, porta lacus eu, rhoncus orci. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        In risus mi, sollicitudin quis blandit eu, aliquet tempus nunc. Nullam
                        rhoncus turpis nec auctor commodo. Mauris urna dolor, iaculis sit amet
                        neque quis, facilisis ultrices ipsum. Fusce a tellus sit amet mauris
                        semper cursus pharetra nec diam. Proin rhoncus, neque eget blandit
                        hendrerit, nisi ex sollicitudin ante, sed porta orci augue nec orci.
                    </p>
                </div>
            </Container>
            <Footer/>
        </>
    );
};
