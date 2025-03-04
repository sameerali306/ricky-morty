import React from 'react'
import { Link as RouterLink } from 'react-router'  // Update to 'react-router-dom' for newer versions
import { Card, Row, Col } from 'antd';
import TYPO from "../../components/typography/Typo"  // Assuming this is your custom component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  return (
    <div className='card'>
        <RouterLink to="/" className="go-back-link">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to HomePage
        </RouterLink>
        
        <Card 
          hoverable
          style={{
            width: 240,
            marginTop: '20px', // You can adjust the margin as needed
          }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          {/* You can structure your data rows here */}
          <Row gutter={[16, 16]}>  {/* 'gutter' adds spacing between columns */}
            <Col span={12}>Heading 1</Col>
            <Col span={12}>Typo 1</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}>Heading 2</Col>
            <Col span={12}>Typo 2</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}>Heading 3</Col>
            <Col span={12}>Typo 3</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}>Heading 4</Col>
            <Col span={12}>Typo 4</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}>Heading 5</Col>
            <Col span={12}>Typo 5</Col>
          </Row>

         
          <TYPO />
        </Card>
    </div>
  )
}

export default Profile;
