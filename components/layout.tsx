import React, { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar";
import { Container } from "reactstrap";
import { Header } from "./header";

type Props = {};

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>

        <div className="contentArea">
          <Header />
          <Container className="p-4 wrapper" fluid>
            {children}
          </Container>
        </div>
      </div>
    </main>
  );
};
