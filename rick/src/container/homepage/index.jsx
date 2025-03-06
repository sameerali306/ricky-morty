import { Col, Row, Spin } from "antd"; // Ensure to import Spin from Ant Design
import MainLayout from "../layout";
import { fetchData } from "../../app/store/feature/characterSlice"; // Only import fetchData
import { selectData, selectStatusData } from "../../app/store/feature/characterSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector and useDispatch from react-redux
import CardComponent from "../../components/Card";

function HomePage() {
  const data = useSelector(selectData); // Use the correct selector
  const status = useSelector(selectStatusData); // Get the status from the state
  const dispatch = useDispatch();
  console.log(data, "data here!");

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const cardContainerStyle = {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const cardItemStyle = {
    width: '100%',
    margin: '10px',
    transition: 'transform 0.3s ease-in-out',
  };

  const cardWrapperStyle = {
    backgroundColor: '#f5f5f5', // Light background for the card
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
  };

  const cardWrapperHoverStyle = {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  const cardImageStyle = {
    objectFit: 'cover',
    width: '100%',
    height: 'auto',
  };

  const cardTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <MainLayout>
      <Row justify="center" style={cardContainerStyle}>
        {status === "loading" ? (
          <Spin size="large" />
        ) : status === "error" ? (
          <p>Failed to fetch data</p>
        ) : (
          data?.map((item) => (
            <Col key={item.id} xs={24} md={5} style={cardItemStyle}>
              <div
                style={{
                  ...cardWrapperStyle,
                  ...(status === "loading" ? cardWrapperHoverStyle : {}),
                }}
              >
                <CardComponent
                  title={item.name}
                  imageUrl={item.image}
                  id={item.id}
                  imageStyle={cardImageStyle}
                  titleStyle={cardTitleStyle}
                />
              </div>
            </Col>
          ))
        )}
      </Row>
    </MainLayout>
  );
}

export default HomePage;
