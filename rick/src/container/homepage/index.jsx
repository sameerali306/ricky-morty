import { Col, Row } from "antd";
import MainLayout from "../layout";
import { fetchData, characterData } from "../../app/store/feature/characterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardComponent from "../../components/Card";
function HomePage() {
  const data = useSelector(characterData);
  const dispatch = useDispatch();
  console.log(data, "data here!");
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <MainLayout>
      <Row justify="space-around">
        {data?.map((items) => (
           <Col span={24} sm={6}>
           <CardComponent title={items.name} imgUrl={items.image} Id={items.Id}/>
         </Col>
        )
          
         
)}
      </Row>
    </MainLayout>
  );
}
export default HomePage;