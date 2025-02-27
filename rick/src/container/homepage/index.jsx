// import MainLayout from "./container/layout";
import MainLayout from "../layout";
import Cards from "../../components/Card/Card";
import { Row, Col } from 'antd'

function HomePage() {
  return (
    <MainLayout>
      <div>
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

      </div>
    </MainLayout>
  );
}
export default HomePage;
