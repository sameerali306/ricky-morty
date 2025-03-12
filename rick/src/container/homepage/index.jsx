import { useState, useEffect } from "react";
import { Row, Col, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectData, fetchData, selectDataStatus, selectPagination } from "../../app/store/feature/characterSlice";
import Card from "../../components/card";
import MainLayout from "../layout";
import PaginationComponent from "../../components/pegination/Pegination";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");  // State for search query
  const data = useSelector(selectData);
  const dataStatus = useSelector(selectDataStatus);
  const pagination = useSelector(selectPagination);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchData({ page: 1 }));
  }, [dispatch]);

  const fetchCharacter = (page = 1) => {
    dispatch(fetchData({ page }));
  };


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
                status={items.status}
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
