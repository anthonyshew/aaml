import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    container: {
       height: '100vh',
       color: 'white',
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
       minHeight: '200px',
       margin: 0,
       minWidth: '100%',
       padding: '0 7%',
       position: 'absolute',
       top: '65%',
    },
    navBar: {
        alignItems: 'center',
        color: theme.colors.navy,
        display: 'flex',
        fontSize: '30px',
        minHeight: '175px',
        minWidth: '100%',
        padding: '2%',
        position: 'absolute',
        top: 0,
    }
 }))