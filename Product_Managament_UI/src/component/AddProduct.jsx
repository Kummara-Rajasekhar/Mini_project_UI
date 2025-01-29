import React, { useState } from 'react'
import ProductService from '../service/productService';

const AddProduct = () => {

  const [msg, setmsg] = useState("")
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value })
  }


  const ProductRegister = (e) => {
    e.prevantDefault();
    ProductService
      .saveProduct(product)
      .then((res) => {
        setmsg("Product Added Successfully")
        setProduct({
          productName: "",
          description: "",
          price: "",
          status: "",
        });
      })
      .catch((error) => {
        console.log(error)
      })

  }
  return (
    <>
      <div className='container mt-3'>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">
                Add Product

              </div>
              {
                msg &&
                <p className='fs-4 text-center text-success'>
                  {msg}

                </p>
              }
              <div className='card-body'>
                <form onSubmit={(e) => { ProductRegister(e) }} action="">
                  <div className='mb-3'>
                    <label htmlFor="">Enter Product Name</label>
                    <input onChange={(e) => handleChange(e)} type="text" name='productName' className='form-control' value={product.productName}/>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor="">Enter Description</label>
                    <input onChange={(e) => handleChange(e)} type="text" name='description' className='form-control'  value={product.description}/>
                  </div>

                  
                  <div className='mb-3'>
                    <label htmlFor="">Enter Status</label>
                    <input onChange={(e) => handleChange(e)} type="text" name='price' className='form-control' value={product.price}/>
                  </div>

                  <div className='mb-3'>
                    <label htmlFor="">Enter Price</label>
                    <input onChange={(e) => handleChange(e)} type="text" name='status' className='form-control' value={product.status}/>
                  </div>
                  <button className='btn btn-primary col-md-12'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AddProduct
