import { Col, Row } from "reactstrap";

import React from "react";
import { SalesChart } from "@/components/sales-chart";
import { Feeds } from "@/components/feeds";
import { ProjectTables } from "@/components/projects-table";
import { BlogsList } from "@/components/blogs";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
      <Row>
        <BlogsList />
      </Row>
    </>
  );
};

export default Dashboard;
