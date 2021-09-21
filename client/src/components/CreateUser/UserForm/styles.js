import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        avatar: {
            marginLeft: '43%',
            paddingBottom: 18
        },
        link: {
            textDecoration: 'none',
        },
    })
);
export default useStyles;