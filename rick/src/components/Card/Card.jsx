import React from 'react'
import { Card } from 'antd';
import Heading from '../heading/Heading';
import { Typography } from 'antd';
const { Link } = Typography;
// import Link from "react-router"
function Cards() {
  return (
    <>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        <Heading level={5} title={"card name"} />
        <Link href="https://ant.design" target="_blank">
          view profile    </Link>
      </Card></>
  )
}

export default Cards
