import { CssBaseline } from "@mui/material";
import { PropsWithChildren } from "react";

const AdminPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <body>
      <CssBaseline />
      {children}
    </body>
  );
};

export default AdminPageLayout;
