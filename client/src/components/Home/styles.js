import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: 30,
        },
        link: {
            textDecoration: 'none',
            marginLeft: 2
        },
    })
);

export default useStyles;