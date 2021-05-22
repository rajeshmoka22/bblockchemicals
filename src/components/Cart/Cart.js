import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { REMOVE_FROM_CART } from './actions';
import './cart.css';

function Cart(props) {
  const {cart, auth, dispatch} = props;
  const history = useHistory();
  const { cartProducts } = cart;
  const removeFromCart = (index) => {
    dispatch({ type: REMOVE_FROM_CART, data: index });
  }

  const getPrice = () => {
    let sum = 0;
    cartProducts.forEach((item) => {
      sum += +item.cost;
    })
    return sum;
  }

  const handleCheckout = (e) => {
    if(auth.isAuthenticated) {
      console.log('handle payment gateway');
    } else {
      const path = location.pathname;
      history.push(`/signin?redirectTo=${path}`);
    }
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
        ) : (
          <React.Fragment>
            <div className="d-flex flex-column align-items-end">
              <div>
                <div className="d-inline-block width-150">SubTotal</div><span>Rs. {(getPrice()).toFixed(2)}</span>
              </div>
              <div>
                <div className="d-inline-block width-150">Taxes</div>
                <span>Rs. {(getPrice()*(18/100)).toFixed(2)}</span>
              </div>
              <div>
                <div className="d-inline-block width-150">Total</div>
                <span>Rs. {(getPrice() + getPrice()*(18/100)).toFixed(2)}</span>
              </div>
            </div>
            <button className="btn btn-success d-flex mt-3 ml-auto" onClick={handleCheckout}>Checkout</button>
          </React.Fragment>
        )
      }
    </div>
  )
}

function RenderTableData({ cartProducts, removeFromCart }) {
  return cartProducts.map((product, index) => {
      const { serialNum, catalogNum, hsnCode, gst, name, cas, pack, cost, availability } = product
      return (
        <tr key={index}>
            <td>{index+1}</td>
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