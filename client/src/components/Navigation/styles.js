import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        container: {
            marginTop: 10,
        },
        appbar: {
            borderRadius: 8
        },
        iconbutton: {
            marginRight: 2
        },
        logoutButton: {
            backgroundColor: 'white',
            borderRadius: 20,
            paddingBottom: 2,
            height: 29,
            marginBottom: 8,
            marginLeft: 4
        }
    })
);

export default useStyles;