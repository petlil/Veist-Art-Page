import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

function TabsLayout({children}: Props) {
  return <>{children}</>
}

export default TabsLayout;
