import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            flexGrow: 1,
            marginLeft: 20
        },
        body: {
            flexShrink: 1,

        }
    })
);

export default useStyles;

