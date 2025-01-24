import React, { useEffect, useState } from 'react'
import ProductService from '../service/productService'
import { Link } from 'react-router-dom'

const Home = () => {
  const [productList, setProductList] = useState([])
  const [msg,setmsg]=useState("")

  useEffect(() => {
    init();

  }, [])

  const init=()=>{
    ProductService
      .getAllProduct()
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }


  const deleteProduct=(id)=>{
    ProductService.deleteProduct
    .then((res)=>{
      setmsg("Deleted Successfully")
      init();
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
          <div className="col-md-12">
            <div className='card'>
              <div className='card-header fs-3 text-center'>
                All Product List
                { msg && <p className='fs-4 text-center text-success'>{ms}</p>}
              </div>
              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">SL No</th>
                      <th scope="col">ProductName</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      productList.map((item, i) => {
                        <tr>
                          <td>{i+1}</td>
                          <td>{item.productName}</td>
                          <td>{item.description}</td>
                          <td>{item.price}</td>
                          <td>{item.status}</td>
                          <td>
                            <Link to={"editProduct"+item.id} className='btn btn-sm btn-primary'>Edit</Link>
                            <button onClick={(e)=>deleteProduct(item.id)} to="" className='btn btn-sm btn-danger ms-1'>Delete</button>
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
