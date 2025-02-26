// import MainLayout from "./container/layout";
import MainLayout from "../layout";
import Cards from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
function HomePage() {
  return (
    <MainLayout>
      <Cards/>
      <Cards/>
    </MainLayout>
  );
}
export default HomePage;
