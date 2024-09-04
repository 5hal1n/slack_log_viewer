import { withPigment } from "@pigment-css/nextjs-plugin";
import { createTheme, extendTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eecc44",
    },
  },
  colorSchemes: {
    dark: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ["@mui/material"],
  theme: extendTheme(theme),
};

export default withPigment(nextConfig, pigmentConfig);
