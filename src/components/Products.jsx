import { useContext } from "react";
import { dataContext } from "./Context/DataContext";

import React from "react";


const Products = () => {
    const { data } = useContext(dataContext)

    /* const editProduct = (product) => {
        setData([product,product]);
    };
    const editProduct = (product) => {

    } */

    return data.map((product)=>{
        return(
            <div className="card" key={product.id}>
                <h3>{product.title}</h3>
                <h3>{product.description}</h3>
                <button onClick={()=> editProduct(product)}>Editar</button>
                <button onClick={()=> deleteProduct(product)}>Borrar</button>
            </div>
        );
    });
};
 
export default Products;



/*
(  

    { <div className="container">
        { 
        data.map((product) => (
        <Products key={product.id} Title={product.title} Description={product.description} />
        )

       ) }
}
    </div>
);
 */