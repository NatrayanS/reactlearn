import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cart = () => {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
        console.log(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
        <div key={product.id}>
          <Card
            style={{
              width: "300px",
              textAlign: "center",
              border: "2px solid black",
              borderRadius: "5px",
              margin: "5px",
              padding: "5px",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ height: "180px" }}
              variant="top"
              src={product.thumbnail}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                <span>Rs.{product.price} </span>
                <small>Ratings : {product.rating}</small>
              </Card.Text>
              <Button
                variant="primary"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <span>Add to Cart </span>
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cart;
