import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
  },
  typography: {
    h1: {
        "fontFamily": `"5years", sans-serif`,
        fontWeight: 800
    },
    h2: {
        "fontFamily": `"5years", sans-serif`,
        fontWeight: 800
    },
    h3: {
        "fontFamily": `"5years", sans-serif`,
        fontWeight: 800
    },
    h4: {
        "fontFamily": `"5years", sans-serif`,
        fontWeight: 800
    },
    h5: {
        "fontFamily": `"5years", sans-serif`,
        fontWeight: 800
    },
    h6: {
        "fontFamily": `"5years", sans-serif`,
        fontWeight: 800
    },
    body1: {
      "fontFamily": `"Gilroy-Medium", sans-serif`,
      color: "white"
    },
    body2: {
      "fontFamily": `"Gilroy-Medium", sans-serif`,
      color: "white"
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {variant: "contained"},
          style: {
            "fontFamily": `"5years", sans-serif`,
            fontSize: "1rem",
            fontWeight: 800,
            backgroundColor: "#ef2222",
            "&:hover": {
              backgroundColor: "#C71717"
            },
            padding: ["1rem 2rem"],
            borderRadius: "4rem"
          }
        }
      ]
    }
  }
};

export default lightThemeOptions;