import AppLayout from "@/components/AppLayout";
import { PropsWithChildren } from "react";

const ChannelLayout = ({ children }: PropsWithChildren) => {
  return <AppLayout>{children}</AppLayout>;
};

export default ChannelLayout;
