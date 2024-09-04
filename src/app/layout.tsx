import type { Metadata } from "next";

import "@mui/material-pigment-css/styles.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AppLayout from "@/components/AppLayout";

export const metadata: Metadata = {
  title: "貴族会Slack Log Viewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <AppLayout>{children}</AppLayout>
    </html>
  );
}
