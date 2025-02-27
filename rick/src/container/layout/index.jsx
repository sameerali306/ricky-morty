import { Layout } from "antd";
import Header from "../../components/header";
// import Footer from "../../components/footer"
import Footer from "../../components/Footer/Footer";
import { Divider } from "antd";
const { Header: AntHeader, Footer: AntFooter, Content } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <AntHeader style={{ backgroundColor: "#fff" }}>
      <Header />
    </AntHeader>
    <Divider />
    <Content style={{ minHeight: "70vh" }}>{children}</Content>
    <AntFooter style={{ backgroundColor: "#efefef" }}>
      <Footer />
    </AntFooter>
  </Layout>
);
export default MainLayout;

// import React from 'react';
// import {  Layout } from 'antd';
// // import Header from "../../components/header";
// const { Header: AntHeader, Footer,  Content } = Layout;
// import { Divider } from "antd";



// const MainLayout=({children})=>{
//     return(<Layout >
//       <AntHeader style={{ backgroundColor: "#fff" }}>header</AntHeader>
//       <Divider />
//       <Content style={{ minHeight: "80vh" }}>Content</Content>
//       <Footer style={{ backgroundColor: "#efefef" }}>Footer</Footer>
//     </Layout>)
// }
// export default MainLayout;