import React from 'react';

export class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            price: ''
        };
    }

    addProduct = () => {
        let product = {
            name: this.state.name,
            category: this.state.category,
            price: this.state.price
        };
        this.props.onAdd(product);
    }
    // - Componenta `AddProduct` trebuie sa contina 3 elemente de tip input cu `id-ul` si `name-ul`: `name`, `category`, `price`;
    // - Componenta `AddProduct` trebuie sa contina un element input de tip buton `button` cu valoarea `add product`, folosit pentru a apela metoda `addProduct`;
    // - Componenta `AddProduct` din interiorul componentei `ProductList` trebuie sa contina in `props` metoda `onAdd`;
    // - La apasarea butonului `add product` un nou element trebuie afisat in componenta `ProductList`;
    render(){
        return (
            <div>
                <input type="text" id='name' name='name' value={this.state.name} onChange={(evt)=>this.state.name=evt.target.value}/>
                <input type="text" id='category' name='category' value={this.state.category} onChange={(evt)=>this.state.category=evt.target.value}/>
                <input type="text" id='price' name='price' value={this.state.price} onChange={(evt)=>this.state.price=evt.target.value}/>
                <input type="button" value="add product" onClick={this.addProduct} />

            </div>
        )
    }
}

export default AddProduct