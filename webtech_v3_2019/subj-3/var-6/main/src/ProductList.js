import React from 'react';
import AddProduct from './AddProduct'

export class ProductList extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        };
    }

    render(){
        const addProduct = (product) =>{
            if (product){
                this.state.products.push(product)
            }
        }
        return(
            <div>
                <AddProduct onAdd={addProduct}/>
            </div>
        )
    }
}