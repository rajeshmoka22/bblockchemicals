import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { REMOVE_FROM_CART } from './actions';

function Cart(props) {
  const {cart, auth, dispatch} = props;
  const { cartProducts } = cart;
  const removeFromCart = (index) => {
    dispatch({ type: REMOVE_FROM_CART, data: index });
  }
  return (
    <div className="p-4" style={{ height: '100%' }}>
      <h2>Cart</h2>
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
          <RenderTableData
            removeFromCart={removeFromCart}
            cartProducts={cartProducts}
            isAuthenticated={auth.isAuthenticated}
          />
        </tbody>
      </Table>
      {
        !cartProducts.length ? 
        (
          <h3 className="mt-4">
            It's lonely here. Add some products to see here.
          </h3>
        ) : ''
      }
    </div>
  )
}

function RenderTableData({ cartProducts, removeFromCart }) {
  return cartProducts.map((product, index) => {
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
            <td><button className="btn btn-warning" onClick={() => removeFromCart(index)}>Remove</button></td>
        </tr>
      )
  })
}

const mapStateToProps = (state) => {
  return ({
    cart: state.cart,
    auth: state.auth
  })
}

export default connect(mapStateToProps)(Cart);