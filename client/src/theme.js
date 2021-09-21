import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#3492ca'
        },
        secondary: {
            main: '#606dbb'
        }
    },
    typography: {
        fontFamily: 'Josefin Sans',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
});

export default theme;