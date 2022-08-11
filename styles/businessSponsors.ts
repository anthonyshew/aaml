import { createStyles } from "@mantine/core";

export const businessSponsors = createStyles((theme) => ({
    card: {
        borderStyle: 'solid',
        borderColor: theme.colors.navy,
        borderRadius: '50px',
        borderWidth: '5px',
        minHeight: '175px',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
        width: '95%',
    },
    bottomBanner: {
        backgroundColor: theme.colors.navy,
        bottom: 0,
        position: 'absolute',
        width: '100%',
        transition: '0.2s',

        ':hover': {
            backgroundColor: 'lightblue',
        }
    },
    grid: {
        alignItems: 'center',
        padding: '50px'
    },
}))