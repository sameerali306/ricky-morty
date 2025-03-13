import Heading from "../heading/Heading";
import { Row, Col } from "antd";
import Image from "../Image/Image";
import { Link } from "react-router";  // Use Link from react-router-dom to navigate to the profile page
import img from "../../assets/react.svg";
import { useSelector } from "react-redux";

const Footer = () => {
  const recentVisitedProfiles = useSelector(
    (state) => state.characters.recentVisitedProfile
  );

  return (
    <>
      <Heading level={4} title="Recently visited profiles:" />
      <Row gutter={[24, 8]}>
        {recentVisitedProfiles.slice(0, 10).map((profile, index) => {
          return (
            <Col key={index} style={{ margin: "12px 0" }}>
              <Image width={30} height={30} imageUrl={profile.image || img} />
              {/* Update the link to navigate to the Profile component of the clicked character */}
              <Link to={`/profile/${profile.id}`}>
                {profile.label}
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Footer;
