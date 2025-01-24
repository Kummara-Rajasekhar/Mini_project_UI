import axios from "axios";


const APIURL="http://localhost:8080";


class ProductService{
    saveProduct(product){
        return axios.post(APIURL+'/saveProduct',product)
    }
    getAllProduct(){
        return axios.get(APIURL+'/')
    }
    getAllProductById(id){
        return axios.get(APIURL+'/',id)
    }
    deleteProduct(id){
        return axios.get(APIURL+'/deleteProduct',id)
    }
    editProduct(product){
        return axios.post(APIURL+'/editProduct/',product.id,product)
    }
}
export default ProductService