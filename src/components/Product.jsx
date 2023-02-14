import React from "react";

const Product = (props) => {
    return ( 
        <div>
            <div>
                <h4><a href="">{props.title}</a></h4>
            </div>
            <div>
                <h4><a href="">{props.description}</a></h4>
            </div>
        </div>
     );
}
 
export default Product;