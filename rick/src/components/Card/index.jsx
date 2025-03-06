import { Card } from "antd";
import { Link } from "react-router";
import Heading from "../heading/Heading";

function CardComponent({ title, imgUrl,Id }) {
  return (
    <Card hoverable style={{ width: 300 }} cover={<img alt={title} src={imgUrl} />}>
      <Heading/>
      <Link to="/profile">View profile</Link>
    </Card>
  );
}
export default CardComponent;