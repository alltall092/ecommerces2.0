import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Footer from './Footer';
import Header from './Header';
import './detallesproducts.css';
import { useDispatch, useSelector } from "react-redux";
import {setProductById,getProductsById} from "./detalles-slice/Detalles-Slice";
import Swal from 'sweetalert2';
const DetallesProducts=()=>{
const [datos,setDatos]=useState([]);
const { id } = useParams();
const products=useSelector(state=>state.productById);
const dispatch=useDispatch();
useEffect(()=>{
dispatch(getProductsById());

},[]);

useEffect(()=>{

    const productId=products.products.filter(x=>x.id==id);
    setDatos(productId);
},[datos]);
const [activeColor, setActiveColor] = useState('black'); // Estado para el color activo

const handleColorChange = (color, pic) => {
    setActiveColor(color);
    document.documentElement.style.setProperty('--primary-color', color); // Cambia el color de fondo
    document.documentElement.style.setProperty('--secondary-color', pic); // Cambia el color secundario
};
const addCart=(productId)=>{

    axios.post('http://localhost:8000/api/v1/cart',{productId}).then(()=>{
      console.log('Agregado con éxito');
      // Mostrar una alerta utilizando SweetAlert2
      Swal.fire({
          icon: 'success',
          title: 'Producto agregado al carrito',
          showConfirmButton: false,
          timer: 1500
      });
    }).catch(error => {
      console.error('Error al agregar al carrito:', error);
      // Mostrar una alerta de error utilizando SweetAlert2
      Swal.fire({
          icon: 'error',
          title: 'Error al agregar al carrito',
          text: 'Ha ocurrido un error al agregar el producto al carrito',
      });
    });
    
}

const updateQty = (id, newQty) => {
  const newItems = datos.map((item) => {
  
    if (item.id === id) {
      return { ...item,quantity: newQty };
    }
    return item;
  });
  setDatos(newItems);

};
const incementar=(id,quantity)=>{
      updateQty(id,quantity+1);
      
      
}
const decrementar=(id,quantity)=>{
updateQty(id,quantity-1);


}


return(<>
<Header/>
<div className="detalle-color container">
    <h1 style={{color:"green",textAlign:"center"}}>Detalles del Productos</h1>
{datos.map(p=>(
  <div className="product-detail">
    <div className="row products">
    <div className="col-md-6">
    <img src={p.url} alt="Product Image" className="product-image"/>
    </div>
    <div className="col-md-6">
    <div className="product-info">
      <h2 className="product-title">{p.titulo}</h2>
      <p className="product-description parra">{p.decripcion}</p>
      <p className="product-price parra">$RD {p.precio}</p>
      <button className="btn btn-light add-to-2" onClick={()=>incementar(p.id,p.cantidad)}>+</button> {p.cantidad}  <button className="btn btn-light add-to-cart2" onClick={()=>decrementar(p.id,p.cantidad)}>-</button> 
      <br/>
      <button className="add-to-cart" onClick={()=>addCart(p.id)}>Add to Cart</button>
      </div>
    </div>
    </div>
  </div>))}



    
    
    </div></>)


}
export default DetallesProducts;