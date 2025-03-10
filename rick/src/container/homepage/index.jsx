import { useState, useEffect } from "react";
import { Row, Col, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectData, fetchData, selectDataStatus, selectPagination } from "../../app/store/feature/characterSlice";
import Card from "../../components/card";
import MainLayout from "../layout";
import PaginationComponent from "../../components/pegination/Pegination";
// import Header from "../../components/header/index";  // Import Header component

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");  // State for search query
  const data = useSelector(selectData);
  const dataStatus = useSelector(selectDataStatus);
  const pagination = useSelector(selectPagination);
  const dispatch = useDispatch();

//  this useeffect function is used to render data when the component mount 
  useEffect(() => {
    dispatch(fetchData({ page: 1 }));
  }, [dispatch]);
// this fetchcharacter function dispatch the data according to the page number its by default 1
  const fetchCharacter = (page = 1) => {
    dispatch(fetchData({ page }));
  };

//  this filterdata is used to search data according to the seacn name 
// the name.tolowercase is use to make the search query and the name insensitive
  const filteredData = data?.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

//  the handlesearch query is use to update th search query
  const handleSearch = (value) => {
    setSearchQuery(value); 
  };

  return (
    <MainLayout>
      {/* <Header onSearch={handleSearch} />  Pass the handleSearch function to Header */}

      <Row justify="center" gutter={[16, 24]}>
        {dataStatus === "loading" ? (
          <Spin size="large" />
        ) : dataStatus === "error" ? (
          <p>Failed to fetch!</p>
        ) : (
          (filteredData.length ? filteredData : data)?.map((items) => (
            <Col key={items.id} xs={24} md={5}>
              <Card
                title={<div className="card-title">{items.name}</div>}
                imageUrl={items.image}
                id={items.id}
              />
            </Col>
          ))
        )}
      </Row>

      <Row style={{ justifyContent: "end" }}>
        {pagination?.count > 20 && (
          <Col span={9}>
            <PaginationComponent
              onChange={(page) => {
                fetchCharacter(page);
              }}
              total={pagination.count ?? 0}
              pageSize={20}
            />
          </Col>
        )}
      </Row>
    </MainLayout>
  );
}

export default HomePage;
