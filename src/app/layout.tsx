import type { Metadata } from "next";

import "@mui/material-pigment-css/styles.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "貴族会Slack Log Viewer",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return <html lang="ja">{children}</html>;
};

export default RootLayout;
