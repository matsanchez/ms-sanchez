import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
    <div className="m-1">
      <Card key={data.id} style={{ width: "12.5rem" }}>
        <Card.Img variant="top" src={data.pictureUrl} />
        <Card.Body className="bg-light">
          <Card.Header className="p-0 text-center">{data.name}</Card.Header>
          <Link to={`/detail/${data.id}`}>
            <Button
              size="sm"
              variant="outline-secondary"
              className="mt-3 container"
            >
              Ver detalle
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
