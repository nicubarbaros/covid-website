import React from "react"
import { Typography, Button } from "antd"

const Footer = () => {
  return (
    <div className="flex items-center">
      <Typography.Text type="secondary">Built by</Typography.Text>
      <Button href="https://twitter.com/BarbarosNicu" type='link'>
        <Typography.Text strong underline>
          Nicu Barbaros
        </Typography.Text>
      </Button>
      <Typography.Text> in Chisinau, Moldova 🤙🏾</Typography.Text>
    </div>
  )
}

export default Footer
