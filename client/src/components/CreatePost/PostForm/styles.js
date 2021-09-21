import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        formlabel: {
            marginTop: 15
        },
        input: {
            marginTop: 15,
            marginBottom: 15
        },
        avatar: {
            marginLeft: '45%',
            paddingBottom: 18
        },
        savebutton: {
            marginLeft: '85%',
            width: 85
        }
    })
);
export default useStyles;