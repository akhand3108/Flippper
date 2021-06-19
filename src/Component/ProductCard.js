import {Card,Button, Image} from "react-bootstrap"

const ProductCard = ({product})=>{

    return <Card >
    <Card.Img className="mx-auto"  style={{maxWidth:"4rem"}} variant="top" src={product.image} />
    <Card.Body>
      <Card.Title className="text-truncate">{product.title}</Card.Title>
      <Card.Text>
        ${product.price}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
}

export default ProductCard