import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { Card, Row, Col, Spin } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MainLayout from "../layout";
// the useparams is used to access parameter from the url in this case the parameter is id
// it is useful to retrive data of specific id
function Profile() {
  const { id } = useParams(); 
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// this useeffecct hook run when the component mount and fetch data from api based on id
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [id]); 

  if (loading) return <Spin size="large" />; 

  if (error) return <p>{error}</p>; 

  return (
    <MainLayout>
      <div className="card">
        <Link to="/" className="go-back-link">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to HomePage
        </Link>

        <Card
          hoverable
          style={{ width: 240, marginTop: 20 }}
          cover={<img alt={profileData.name} src={profileData.image || 'fallback-image.jpg'} />}
        >
          <Row gutter={[16, 16]}>
            <Col span={12}><strong>Name:</strong></Col>
            <Col span={12}>{profileData.name}</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}><strong>Status:</strong></Col>
            <Col span={12}>{profileData.status}</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}><strong>Species:</strong></Col>
            <Col span={12}>{profileData.species}</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}><strong>Gender:</strong></Col>
            <Col span={12}>{profileData.gender}</Col>
          </Row>
        </Card>
      </div>
    </MainLayout>
  );
}

export default Profile;
