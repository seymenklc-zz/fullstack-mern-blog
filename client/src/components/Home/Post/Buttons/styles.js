import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        buttons: {
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
            justifySelf: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 190

        }
    })
);

export default useStyles;