import { Card } from "antd";
import { Link } from "react-router"; 
import Heading from "../heading/Heading";
import { Badge } from 'antd';

function CardComponent({ title, imageUrl, id ,status}) {
  const statusColors={
      Alive:"success",
      Dead:"error",
      unknown:"default"

  }
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
     
      <Badge dot status={statusColors[status]} className="badge">
   </Badge>
    <h3>{title}</h3>
      <Link to={`/profile/${id}`}>View profile</Link> 
    </Card>
  );
}

export default CardComponent;
