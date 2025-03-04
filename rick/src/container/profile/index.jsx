import React from 'react'
import { Link as RouterLink } from 'react-router'
import { Card, Row,Col } from 'antd';
import App from "../../components/typography/Typo";

function Profile() {
  return (
    <div className='card'>
        <RouterLink to="/" className="go-back-link">Go Back</RouterLink>
      {/* <h1>hello your in home page</h1> */}
      <Card 
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        {/* <Heading level={5} title={"card name"} /> */}
        {/* <RouterLink to="/Profile">view profile</RouterLink>  */}
        <Row>
          <Col span={6}>heading</Col>
          <Col span={6}>typo</Col>
        </Row>
        <Row>
          <Col span={6}>heading</Col>
          <Col span={6}>typo</Col>
        </Row>
        <Row>
          <Col span={6}>heading</Col>
          <Col span={6}>typo</Col>
        </Row>
        <Row>
          <Col span={6}>heading</Col>
          <Col span={6}>typo</Col>
        </Row>
        <Row>
          <Col span={6}>heading</Col>
          <Col span={6}>typo</Col>
        </Row>
        <Row>
          <Col span={6}>heading</Col>
          <Col span={6}>typo</Col>
        </Row>

        <App/>
      </Card>
      
    </div>
  )
}

export default Profile
