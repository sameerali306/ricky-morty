import { Card } from "antd";
import { Link } from "react-router"; // Correct import for Link
import Heading from "../heading/Heading";

function CardComponent({ title, imageUrl, id }) {
  return (
    <Card
      cover={
        imageUrl ? (
          <img src={imageUrl} alt={title} style={{ width: "100%", height: "auto" }} />
        ) : (
          <div>No Image Available</div> // Display a message or placeholder when no image
        )
      }
      style={{ width: "100%", height: "auto" }}
    >
      <Heading />
      <h3>{title}</h3>
      <Link to={`/profile/${id}`}>View profile</Link> {/* Assuming you want to pass id to the profile page */}
    </Card>
  );
}

export default CardComponent;
