import {setProductById,getProductsById} from "./detalles-slice/Detalles-Slice";
import { useSelector,useDispatch } from "react-redux";
import {useState,useEffect} from 'react';
import './listproduct.css';
const ListProduct=()=>{
const products=useSelector(state=>state.productById.products);
const dispatch=useDispatch();
useEffect(()=>{

dispatch(getProductsById());

},[]);


return(<>
<div className="list-cont container">
    <h2>Lista de Productos</h2>
  <div className="grid-container">
    {products.map((x, index) => (
      <div key={index} className="item-list">
        <img src={x.url} alt={x.titulo} className="item-image" />
        <h2>{x.titulo}</h2>
        <p className="parra">{x.precio}</p>
        <button className="btn btn-success">Agregar al Carrito</button>
      </div>
    ))}
  </div>
</div>

</>)

}
export default ListProduct;