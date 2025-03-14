import { Row, Col, Input } from "antd";
import Heading from "../heading/Heading";
import { useDispatch } from "react-redux";
import { fetchData, setSearchQuery } from "../../app/store/feature/characterSlice";

const { Search } = Input;

function Header({ onSearch: externalOnSearch }) {
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    dispatch(setSearchQuery(value));  
    dispatch(fetchData({ page: 1, query: value }));  

    if (externalOnSearch) externalOnSearch(value);  
  };

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
          onSearch={handleSearch} 
        />
      </Col>
    </Row>
  );
}

export default Header;
