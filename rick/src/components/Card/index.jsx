import { Card } from "antd";
import { Link } from "react-router"; 
import Heading from "../heading/Heading";

function CardComponent({ title, imageUrl, id }) {
  return (
    <Card
      cover={
        imageUrl ? (
          <img src={imageUrl} alt={title} style={{ width: "100%", height: "auto" }} />
        ) : (
          <div>No Image Available</div> 
        )
      }
      style={{ width: "100%", height: "auto" }}
    >
      <Heading />
      <h3>{title}</h3>
      <Link to={`/profile/${id}`}>View profile</Link> 
    </Card>
  );
}

export default CardComponent;
