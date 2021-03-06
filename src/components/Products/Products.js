import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import products from './../../assets/data/mockApi/products.json';
import { ADD_TO_CART } from '../Cart/actions';

function Products(props) {
  const { dispatch } = props;
  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, data: product });
  }
  return (
    <div className="p-4">
      <Table bordered striped hover responsive="xl">
        <thead>
          <tr>
            <th>#</th>
            <th>Catalog Number</th>
            <th>HSN Code</th>
            <th>GST</th>
            <th>Chemical Name</th>
            <th>CAS</th>
            <th>Pack</th>
            <th>Cost</th>
            <th>Availability</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <RenderTableData addToCart={addToCart} />
        </tbody>
      </Table>
    </div>
  )
}

function RenderTableData({ addToCart }) {
  return products.map((product) => {
      const { serialNum, catalogNum, hsnCode, gst, name, cas, pack, cost, availability } = product
      return (
        <tr key={serialNum}>
            <td>{serialNum}</td>
            <td>{catalogNum}</td>
            <td>{hsnCode ? hsnCode : '-'}</td>
            <td>{gst}</td>
            <td>{name}</td>
            <td>{cas}</td>
            <td>{pack}</td>
            <td>{cost}</td>
            <td>{availability ? 'Yes' : 'No'}</td>
            <td><button className="btn btn-warning" onClick={() => addToCart(product)}>Add to cart</button></td>
        </tr>
      )
  })
}

const mapStateToProps = (state) => {
  console.log(state);
  return state
}

export default connect(mapStateToProps)(Products);