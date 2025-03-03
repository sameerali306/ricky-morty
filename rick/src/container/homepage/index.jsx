// import MainLayout from "./container/layout";
import MainLayout from "../layout";
import Cards from "../../components/Card/Card";
import { Row, Col } from 'antd'
import Pagination from "../../components/pegination/Pegination";

function HomePage() {
  return (
    <MainLayout>
      <div className="cards">
        <Row>
          <Col span={24} sm={6}>
           <Cards/>
          </Col>
          <Col span={24} sm={6}>
           <Cards/>
          </Col>
          <Col span={24} sm={6}>
           <Cards/>
          </Col>
          <Col span={24} sm={6}>
           <Cards/>
          </Col>
         
        </Row>
        
        <Pagination/>

      </div>
    </MainLayout>
  );
}
export default HomePage;
