import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductService from '../service/productService'

const EditProduct = () => {

  const [msg, setmsg] = useState("")
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    price: "",
    status: "",
  })

  const navigate = useNavigate()
  useEffect(() => {
    ProductService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const { id } = useParams();
  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value })
  }


  const ProductUpdate = (e) => {
    e.prevantDefault();
    ProductService
      .editProduct(product)
      .then((res) => {
        navigate("/")
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
                <form onSubmit={(e) => { ProductUpdate(e) }} action="">
                  <div className='mb-3'>
                    <label htmlFor="">Enter Product Name</label>
                    <input onChange={(e) => handleChange(e)} type="text" name='productName' className='form-control' value={product.productName} />

                  </div>
                  <div className='mb-3'>
                    <label htmlFor="">Enter Description</label>
                    <input onChange={(e) => handleChange(e)} type="text" name='description' className='form-control' value={product.description} />

                  </div>
                  <div className='mb-3'>
                    <label htmlFor="">Enter Status</label>
                    <input onChange={(e) => handleChange(e)} type="text" name='price' className='form-control' value={product.price} />

                  </div>
                  <div className='mb-3'>
                    <label htmlFor="">Enter Price</label>
                    <input onChange={(e) => handleChange(e)} type="text" name='status' className='form-control' value={product.status} />

                  </div>
                  <button className='btn btn-primary col-md-12'>
                    Update
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

export default EditProduct
