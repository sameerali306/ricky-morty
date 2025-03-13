import Heading from "../heading/Heading";
import { Row, Col } from "antd";
import Image from "../Image/Image";
import { Typography } from "antd";
const { Link } = Typography;
import img from "../../assets/react.svg";
import { useSelector } from "react-redux";
const Footer = () => {
  const recentVisitedProfiles = useSelector(
    (state) => state.characters.recentVisitedProfile
    
  );
 
  
  return (
    <>
      <Heading level={4} title=" Recently visited profiles:" />
      <Row gutter={[24, 8]}>
        {recentVisitedProfiles.slice(0,10).map((profile,index)=>{
          
          <Col
          key={index}
          style={{
            margin: "12px 0",
          }}
        >
          <Image width={30} height={30} imageUrl={profile.image || img} />
          <Link href="https://ant.design" target="_blank">
            {profile.label}
          </Link>
        </Col>
        })}
        
      </Row>
    </>
  );
};

export default Footer;
