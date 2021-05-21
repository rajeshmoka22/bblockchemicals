import React from 'react';
import Table from 'react-bootstrap/Table';
import products from './../../assets/data/mockApi/products.json';

function Products() {
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
        <RenderTableData />
      </tbody>
    </Table>
  </div>
  )
}

function RenderTableData() {
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
            <td><button className="btn btn-warning">Add to cart</button></td>
        </tr>
      )
  })
}

export default Products;