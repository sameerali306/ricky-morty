import { Row, Col, Input } from "antd";
import Heading from "../heading/Heading";


const { Search } = Input;

function Header({ onSearch }) {

  return (
    <Row>
      <Col span={24} sm={14} offset={1}>
        <Heading level={3} title={"Rick And Morty"} />
      </Col>
      <Col span={24} sm={8} offset={1}>
        <Search
          placeholder="Search by character name"
          enterButton="Search"
          size="large"
          onSearch={onSearch}  // This calls the onSearch passed from HomePage
        />
      </Col>
    </Row>
  );
}

export default Header;
