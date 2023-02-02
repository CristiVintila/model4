import React from 'react';
import ReactDOM from 'react-dom';


import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ProductList } from './ProductList';
import { AddProduct } from './AddProduct';

configure({ adapter: new Adapter() });

it ('AddProduct component should be rendered', () => {
    const component = mount(<ProductList />);
    expect(component.find(AddProduct).length).toEqual(1);
})
it('AddProduct should contain 3 inputs of type text', () => {
    const component = mount(<AddProduct />);
    const nameInput = component.find('#name').first();
    const categoryInput = component.find('#category').first();
    const priceInput = component.find('#price').first();
    expect(nameInput.length + categoryInput.length + priceInput.length).toEqual(3);
})

it('AddProduct should contain a button to trigger addProduct method', () => {
    const component = mount(<AddProduct />);
    let button = component.find('[value="add product"]').first();
    expect(button.length).toEqual(1);
})

it ('AddProduct should contain props onAdd', () => {
    const component = mount(<ProductList />);
    let addForm = component.find(AddProduct).first();
    expect(typeof addForm.props().onAdd).toEqual('function');
})

it ('The added product should be validated', () => {
    const component = mount(<ProductList />);
    let nameInput = component.find('#name').first();
    nameInput.simulate('focus');
    nameInput.simulate('change', {
        target: {
             name: 'name', value: 'Iphone XS'
            }
        });

    let categoryInput = component.find('#category').first();
    categoryInput.simulate('focus');
    categoryInput.simulate('change', {
        target: {
            name: 'category',
            value: 'Smartphone'
        }
    });

    let priceInput = component.find('#price').first()
    priceInput.simulate('focus');
    priceInput.simulate('change', {
        target: {
            name: 'price',
            value: '5000'
        }
    });

    let addBtn = component.find('[value="add product"]').first()
    addBtn.simulate('click');
    expect(component.state().products.length).toEqual(1);
})