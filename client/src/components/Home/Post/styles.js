import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            maxWidth: 800,
            maxHeight: 290,
            padding: 30,
            marginBottom: 20,
            display: 'flex',
            flexWrap: 'wrap',
            textOverflow: 'clip',
            flexDirection: 'column'
        },
        imgWrapper: {
            padding: 10,
            maxWidth: 260,
        },
        img: {
            maxWidth: 260,
            height: 250
        }
    })
);

export default useStyles;