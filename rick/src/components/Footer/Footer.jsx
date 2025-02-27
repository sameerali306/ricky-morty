// import Heading from "../../components/heading";
import Heading from "../heading/Heading";
import { Row, Col } from "antd";
// import Image from "../image";
import Image from "../Image/Image";
import { Typography } from "antd";
const { Link } = Typography;
import img from "../../assets/react.svg";
const Footer = () => {
  return (
    <>
      <Heading level={4} title=" Recently visited profiles:" />
      <Row gutter={[24, 8]}>
        <Col
          style={{
            margin: "12px 0",
          }}
        >
          <Image width={30} height={30} imageUrl={img} />
          <Link href="https://ant.design" target="_blank">
            Ant Design (Link)
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
