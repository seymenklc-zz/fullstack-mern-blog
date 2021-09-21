import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: 100
        },
        paper: {
            padding: 35,
        },

        link: {
            textDecoration: 'none',
        }
    })
);
export default useStyles;