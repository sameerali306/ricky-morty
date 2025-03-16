import { Row, Col, Input, AutoComplete } from "antd";
import Heading from "../heading/Heading";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setSearchQuery, addSearchToHistory, selectSearchHistory } from "../../app/store/feature/characterSlice";

const { Search } = Input;

function Header({ onSearch: externalOnSearch }) {
  const dispatch = useDispatch();
  const searchHistory = useSelector(selectSearchHistory);  // Get search history from state

  const handleSearch = (value) => {
    dispatch(setSearchQuery(value));
    dispatch(fetchData({ page: 1, query: value }));
    dispatch(addSearchToHistory(value));  // Add the search query to history

    if (externalOnSearch) externalOnSearch(value);  
  };

  return (
    <Row>
      <Col span={24} sm={14} offset={1}>
        <Heading level={3} title={"Rick And Morty"} />
      </Col>
      <Col span={24} sm={8} offset={1}>
        <AutoComplete
          options={searchHistory.map((query) => ({ value: query }))}
          onSelect={(value) => handleSearch(value)} // Allows user to select from history
        >
          <Search
            placeholder="Search by character name"
            enterButton="Search"
            size="large"
            onSearch={handleSearch}
          />
        </AutoComplete>
      </Col>
    </Row>
  );
}

export default Header;
