import { useState, useEffect } from "react";
import { Row, Col, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectData, fetchData, selectDataStatus, selectPagination } from "../../app/store/feature/characterSlice";
import Card from "../../components/card";
import MainLayout from "../layout";  // MainLayout includes Header already
import PaginationComponent from "../../components/pegination/Pegination";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");  // State for search query
  const data = useSelector(selectData);
  const dataStatus = useSelector(selectDataStatus);
  const pagination = useSelector(selectPagination);
  const dispatch = useDispatch();

  // Fetch characters based on search query
  useEffect(() => {
    dispatch(fetchData({ page: 1, query: searchQuery })); // Fetch characters based on search query
  }, [dispatch, searchQuery]);  // Fetch data when searchQuery changes

  // Function to fetch characters for a particular page
  const fetchCharacter = (page = 1) => {
    dispatch(fetchData({ page, query: searchQuery })); // Include search query in API call
  };

  // Function to handle search query change
  const handleSearch = (value) => {
    setSearchQuery(value);  // Update the search query
  };

  return (
    <MainLayout>
      <Row justify="center" gutter={[16, 24]}>
        {dataStatus === "loading" ? (
          <Spin size="large" />
        ) : dataStatus === "error" ? (
          <p>Failed to fetch!</p>
        ) : (
          <>
            {/* Show a message if no characters match the search query */}
            {data?.length === 0 && searchQuery && (
              <p>No characters found</p>
            )}

            {/* Display the characters */}
            {data?.map((items) => (
              <Col key={items.id} xs={24} md={5}>
                <Card
                  title={<div className="card-title">{items.name}</div>}
                  imageUrl={items.image}
                  id={items.id}
                  status={items.status}
                />
              </Col>
            ))}
          </>
        )}
      </Row>

      {/* Pagination */}
      <Row style={{ justifyContent: "end" }}>
        {pagination?.count > 20 && (
          <Col span={9}>
            <PaginationComponent
              onChange={(page) => {
                fetchCharacter(page); // Fetch the characters for the selected page
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
