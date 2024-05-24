import { colors } from "../utils/colors";

export const themeOptions = {
    typography: {
        fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
    palette: {
        mode: "light",
        primary: {
            main: "#1c5ba3", // Used elsewhere
            contrastText: "#ffffff",
        },
        success: {
            main: "#1e6d99", // custom button color (seafoam green)
            contrastText: "#ffffff", // custom button text (white)
        },
        error: {
            main: "#C6112E", // custom button color (red)
        },
        secondary: {
            main: "#41c5d9",
            contrastText: "#ffffff"
        },
        warning: {
            main: "#00526b", // custom button color (seafoam green)
            contrastText: "#ffffff", // custom button text (white)
        },
    },
    shape: {
        borderRadius: 10,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '50px', // Change the border radius to your desired value
                },
                contained: {
                    boxShadow: 'none', // Remove the box shadow for contained buttons
                },
                outlined: {
                    boxShadow: 'none', // Remove the box shadow for outlined buttons
                },
                text: {
                    paddingX: 8,
                    paddingY: 3,
                },
            },
        },
    },
};
