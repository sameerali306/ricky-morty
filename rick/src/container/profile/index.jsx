import React, { useEffect } from "react";
import { useParams, Link } from "react-router";
import { Card, Row, Col, Spin } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import MainLayout from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacterById } from "../../app/store/feature/characterSlice"; // Import the new thunk
// import { setRecentProfile } from "../../app/store/feature/characterSlice";

function Profile() {
  const { id } = useParams();  // Get the character id from URL
  const dispatch = useDispatch();  // Get the dispatch function
  const { singleCharacter, status, error } = useSelector(
    (state) => state.characters  // Access the Redux state
  );

  // Fetch character data when the component mounts or when the id changes
  useEffect(() => {
    dispatch(fetchCharacterById(id));
  }, [id, dispatch]);

  // Loading state
  if (status === "loading") return <Spin size="large" />;

  // Error state
  if (status === "error") return <p>{error}</p>;

  // If no character data yet, show fallback
  if (!singleCharacter) return <p>No character data available</p>;

//   useEffect(() => {
//     let recentVisitedList = recentVisitedProfile.filter(
//       (item) => item.id !== singleCharacterData.id
//     );
//     singleCharacterData !== null &&
//       dispatch(
//         setRecentProfiles([
//           ...recentVisitedList,
//           {
//             label: singleCharacterData?.name,
//             id: singleCharacterData?.id,
//           },
//         ])
//       );
//   }, [setRecentProfile]);

//  const recentVisitedProfile = useSelector(
//     (state) => state.characters.recentVisitedProfile
//   );

  return (
    <MainLayout>
      <div className="card">
        <Link to="/" className="go-back-link">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to HomePage
        </Link>

        <Card
          hoverable
          style={{ width: 240, marginTop: 20 }}
          cover={<img alt={singleCharacter.name} src={singleCharacter.image || "fallback-image.jpg"} />}
        >
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <strong>Name:</strong>
            </Col>
            <Col span={12}>{singleCharacter.name}</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <strong>Status:</strong>
            </Col>
            <Col span={12}>{singleCharacter.status}</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <strong>Species:</strong>
            </Col>
            <Col span={12}>{singleCharacter.species}</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <strong>Gender:</strong>
            </Col>
            <Col span={12}>{singleCharacter.gender}</Col>
          </Row>
        </Card>
      </div>
    </MainLayout>
  );
}

export default Profile;
