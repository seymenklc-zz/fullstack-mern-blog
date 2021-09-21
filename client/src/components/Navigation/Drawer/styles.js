import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        drawer: {
            width: 240
        },
        selectionContainer: {
            padding: 10,
            paddingTop: 20,
        },
        icon: {
            paddingRight: 10,
            paddingLeft: 10,
        },
        button: {
            borderRadius: 5,
        },
    })
);
export default useStyles;