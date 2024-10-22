import React from "react";
import Topbar from "@/components/common/landing/topbar";
import { ViewTransitions } from "next-view-transitions";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ViewTransitions>
      <main>
        <Topbar />
        {children}
      </main>
    </ViewTransitions>
  );
};

export default LandingLayout;
