import {createTheme} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: `"IRANSansX", "Roboto", "Arial"`,
        fontWeightThin: 100,
        fontWeightUltraLight: 200,
        fontWeightLight: 300,
        fontWeightMedium: 500,
        fontWeightDemiBold: 600,
        fontWeightExtraBold: 800,
        fontWeightBlack: 900,
        fontWeightBold: "bold",
        fontWeightRegular: "normal",
    },
    direction: "rtl",
    palette: {
        primary: {
            main: "#1F1A50",
        }
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: 'white',
                    color: 'rgba(0, 0, 0, 0.87)',
                    boxShadow: '0px 10px 33px -3px rgba(0,0,0,0.2)',
                    fontSize: 14,
                },
                arrow: {
                    "::before": {
                        backgroundColor: "white"
                    }
                }
            }
        }
    }
})

export default theme