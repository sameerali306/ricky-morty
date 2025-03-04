import React from 'react';
import { Link as RouterLink } from 'react-router'; 
import { Card, Row, Col } from 'antd';
import TYPO from "../../components/typography/Typo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MainLayout from "../layout";

function Profile() {
  return (
    <MainLayout>
      <div className='card'>
        <RouterLink to="/" className="go-back-link">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to HomePage
        </RouterLink>

        <Card
          hoverable
          style={{
            width: 240,
            height: 300,
            marginTop: 20, // Corrected margin-top to marginTop
          }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ width: '100%', maxHeight: '150px', objectFit: 'cover', objectPosition: 'top' }} />}
        >
          {/* Content inside Card */}
          <Row gutter={[16, 16]}>
            <Col span={12} style={{ fontWeight: 'bold' }}>Heading:</Col>
            <Col span={12}>Typo 1</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12} style={{ fontWeight: 'bold' }}>Heading:</Col>
            <Col span={12}>Typo 2</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12} style={{ fontWeight: 'bold' }}>Heading:</Col>
            <Col span={12}>Typo 3</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12} style={{ fontWeight: 'bold' }}>Heading:</Col>
            <Col span={12}>Typo 4</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12} style={{ fontWeight: 'bold' }}>Heading:</Col>
            <Col span={12}>Typo 5</Col>
          </Row>

          <TYPO />
        </Card>
      </div>
    </MainLayout>
  );
}

export default Profile;
