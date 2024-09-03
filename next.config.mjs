import { createTheme } from "@mui/material";
import { withPigment } from "@pigment-css/nextjs-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ["@mui/material"],
  theme: createTheme(),
};

export default withPigment(nextConfig, pigmentConfig);
