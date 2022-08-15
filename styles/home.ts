import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    // hero landing page
    container: {
        minHeight: '100vh',
        color: theme.colors.navy,
    },
    hero: {
        backgroundImage: 'url(/hero-large.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        filter: 'blur(2.5px)',
    },
    heroBanner: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        bottom: '20%',
        display: 'flex',
        justifyContent: 'space-evenly',
        minHeight: '175px',
        margin: 0,
        minWidth: '100%',
        padding: '0 7%',
        position: 'absolute',

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'column',
          },
    },
    bannerNumber: {
        color: 'white',
        fontFamily: 'PassionOne',
        fontSize: '8rem', 
        fontWeight: 500,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: '4rem',
          },
    },
    bannerTitle: {
        color: 'white',
        lineHeight: 1.5,
        fontSize: '42px',
        fontWeight: 800,
        textAlign: 'right',

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: '24px',
            textAlign: 'center'
          },
    },

    // messages to players and sponsors
    dearText: { 
        textIndent: '35px', 
        fontWeight: 700, 
        lineHeight: 1.75, 
        fontSize: 20
    },
    dearStack: {
        padding: '7%'
    },
    dearButton: {
        alignSelf: 'center',
        backgroundColor: theme.colors.orange,
        color: theme.colors.navy,
        fontSize: '24px',
        fontWeight: 800,
        textAlign: 'center',
        ':hover': {backgroundColor: theme.colors.orange},
        ':active': {opacity: 0.75, backgroundColor: theme.colors.orange}
    },

    // Nav Bar
    navBar: {
        alignItems: 'center',
        color: theme.colors.navy,
        display: 'flex',
        minHeight: '175px',
        minWidth: '100%',
        padding: '2%',
        position: 'absolute',
        top: 0,
    },
    navButton: {
        backgroundColor: theme.colors.navy,
        color: theme.colors.orange,
        fontSize: '22px',
        fontWeight: 800,
        ':hover': { backgroundColor: 'navy' },
    },
    burger: {
        backgroundColor: theme.colors.navy,
    },
    drawer: {
        backgroundColor: theme.colors.navy,
    },

    // our sponsors
    
    // our story
    ourStoryContainer: {
        backgroundColor: theme.colors.navy,
        borderRadius: '75px',
        color: 'white',
        margin: 0,
        minHeight: '200px',
        padding: '50px 8%',
        position: 'relative',
        width: '90%',
    },
    subText: {
        color: '#88abe2',
    },
    iconBox: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '20px',
        color: theme.colors.navy,
        display: 'flex',
        flexDirection: 'column',
        height: '175px',
        justifyContent: 'center',
        textAlign: 'center',
        width: '175px',
    },

    // footer
    footer: {
        backgroundColor: theme.colors.red,
        color: theme.colors.navy,
        minHeight: '300px',
        padding: '10px',
        width: '100%',
    },
    anchor: {
        textDecoration: 'none',
        color: theme.colors.navy,
        ":visited": {outline: 'none', backgroundColor: theme.colors.navy, color: theme.colors.navy, textDecoration: 'none'},
    }
 }))