import { createStyles } from "@mantine/core";

export const dearPlayersStyles = createStyles((theme) => ({
    container: {
        alignItems: 'center',
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
    },
    title: {
        fontWeight: 900,
    },
    lists: {
        color: theme.colors.navy,
        fontSize: '18px',
    },
    formButton: {
        backgroundColor: theme.colors.orange,
        borderWidth: '3px',
        borderColor: theme.colors.navy,
        color: theme.colors.navy,
        fontSize: '20px',
        fontWeight: 900,
        ':hover': { backgroundColor: theme.colors.orange}
    }
}))