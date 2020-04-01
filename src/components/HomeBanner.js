import React from "react"
import Bermuda from "../images/undraw_medical_care_movn (4).svg"
import { Typography, Button } from "antd"

import { ArrowRightOutlined } from "@ant-design/icons"

const HomeBanner = () => (
  <div className="banner-wrapper">
    <div className="banner-side">
      <Typography.Title level="1" className="side-title">
        Corona Virus
      </Typography.Title>
      <Typography.Paragraph className="side-description" type="secondary">
        Corona Virus is an infectious disease caused by severe acute respiratory
        syndrome coronavirus 2.
      </Typography.Paragraph>

   
      <Button type="primary" href="https://www.who.int/health-topics/coronavirus" rel="noopener noreferrer" target="_blank">
      Explore more <ArrowRightOutlined />

      </Button>
    </div>
    <img src={Bermuda} alt="bermuda" />
  </div>
)
export default HomeBanner
