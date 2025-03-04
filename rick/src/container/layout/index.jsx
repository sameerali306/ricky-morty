import { Layout } from "antd";
import Header from "../../components/header";
// import Footer from "../../components/footer"
import Footer from "../../components/Footer/Footer"

import { Divider } from "antd";
const { Header: AntHeader, Footer: AntFooter, Content } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <AntHeader style={{ backgroundColor: "#fff" }}>
      <Header />
    </AntHeader>
    <Divider className="divider"/>
    <Content style={{ minHeight: "70vh" }}>{children}</Content>
    <AntFooter style={{ backgroundColor: "#efefef" }}>
      
   
      <Footer />
    </AntFooter>
  </Layout>
);
export default MainLayout;
