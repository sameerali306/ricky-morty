import React from 'react'
import { Card } from 'antd';
import Heading from '../heading/Heading';
import { Typography } from 'antd';
const { Link } = Typography;
// import App from "../../components/typography/Typo";
import { Link as RouterLink } from 'react-router'
function Cards() {
  return (
    <div className='Cards'>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        <Heading level={5} title={"card name"} />
        <RouterLink to="/Profile">view profile</RouterLink> 
      </Card></div>
  )
}

export default Cards
