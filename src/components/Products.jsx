import { useContext } from "react";
import { dataContext } from "./Context/DataContext";
import Card from 'react-bootstrap/Card';

import React from "react";


const Products = () => {
    const { data } = useContext(dataContext)

    /* const editProduct = (product) => {
        setData([product,product]);
    };
    const editProduct = (product) => {

    } */

   /*  return data.map((product)=>{
        return(
            <div className="card" key={product.id}>
                <h3>{product.title}</h3>
                <h4>{product.description}</h4>
                <h4>{product.price}</h4>
                <button onClick={()=> editProduct(product)}>Editar</button>
                <button onClick={()=> deleteProduct(product)}>Borrar</button>
            </div>
        );
    }); */
    return data.map((product)=>{
        return(
    <Card key={product.id} style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
       
      </Card.Body>
    </Card>
 );
});

};
 
export default Products;



