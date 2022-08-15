import { createStyles } from "@mantine/core";

export const aboutUsStyles = createStyles((theme) => ({
    container: {
        // alignItems: 'center',
        color: theme.colors.navy,
        display: 'flex',
        flexDirection: 'column',
        fontSize: '18px',
        fontWeight: 500,
        gap: '15px',
        justifyContent: 'center',
        marginBottom: '20px',
        marginTop: '180px',
        width: '100%',

        'h2': {
            fontSize: '40px',
            paddingLeft: '3rem'
        },
        'h3': {
            fontWeight: 900,
        },

        '.statement-text': {
            fontSize: '42px',
            fontWeight: 400,
        },

        '.under-banner' : {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            padding: '0 1.5rem',
        },

        '.values-grid': {
            alignItems: 'center',
            backgroundImage: 'linear-gradient(90deg,#fff 0,#fff 45%,#00235b 0)',
            padding: '0 2rem',
        },

        '.people-icons': {
            alignItems: 'center', 
            display: 'flex', 
            height: '250px',
            justifyContent: 'center', 
        },

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            '.under-banner' : {
                padding: '0 0.5rem',
            },

            'h2': {
                paddingLeft: '0',
            },

            '.statement-text': {
                fontSize: '32px',
            },

            '.values-grid': {
                backgroundImage: 'none',
            },
        },

    },
    bgImage: {
        background: "rgba(0, 0, 0, 0.4)",
        backgroundBlendMode: "multiply",
    },
    bannerTitle: {
        color: 'white',
        fontSize: '46px',
        fontWeight: 900,
        padding: '5rem 0',
    },
    valueContainer: {
        alignItems: 'center',
        display: 'flex',
        height: '250px',
        justifyContent: 'center',
        flexDirection: 'column',
    }
}))