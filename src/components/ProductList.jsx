import React from "react";

const ProductList = () => {
    return (  

        <div className="cpntainer">
            { 
            ProductList.map((product) => (
            <ProductList key={product.id} Title={product.title} Description={product.description} />
            )

           ) }
    
        </div>
    );
}
 
export default ProductList;