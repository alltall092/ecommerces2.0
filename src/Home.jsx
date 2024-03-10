import Header from "./Header";
import './home.css';
import Footer from "./Footer";
import { useState,useEffect } from "react";
import axios from "axios";
import Whatsapp from "./Whatsapp";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';



const Home=()=>{
const [datos,setDatos]=useState([]);
const navigate=useNavigate();

useEffect(()=>{

axios.get('http://localhost:8000/api/v1/recientes').then(res=>setDatos(res.data.flat()));

},[]);

const navegar=()=>{
const n=navigate("/listaproductos")
return n;

}
return(<>

<Header/>

<div className=" container-fluid conthome" >
<div className="row">

<div className="col-md-5">
<h3 className="parrafo2">Tu Pasaporte a la Experiencia de Compra</h3>
<p className="parrafo"> Nuestro lema es simple pero poderoso: 'Tu carrito, tu experiencia de compra'. Con cada clic, te acercamos un paso más a la satisfacción y la alegría de encontrar exactamente lo que buscas. Únete a nosotros y descubre cómo hacer tus compras en línea más emocionantes y gratificantes que nunca</p>
<button className="btn btn-success botones" onClick={navegar}>Comprar Productos</button>


</div>
<div className="col-md-7 imagencont">


</div>

</div>



</div>
<div className="container-fluid">
<h2 style={{color:"green"}}>Productos Recientes</h2>
<hr style={{backgroundColor:"green"}}/>

<div className="item-container">
{datos.map(x=>(<div className="item-home">
<img src={x.url}  alt="imagenes"/>
<h2>{x.titulo}</h2>
<Stack spacing={1}>
      <Rating name="size-large" defaultValue={2} size="large" />
    </Stack>
        <h6>{x.precio}</h6>
        <button className="btn btn-success" onClick=""> <i className="fa-solid fa-cart-plus" style={{color:"white"}}></i>Agregar </button>

</div>))}



</div>
<h2 style={{textAlign:"center",color:"green"}}>Productos Por Categorias</h2>
<hr/>

<div class="cat-container">
  <div class="row">
    <div class="col-md-6 cat-item">
      <div class="image-container">
        <img src="./cat1.webp" alt="Computadora" className="img-cat" />
        <div class="overlay1">
          <div class="text1">Computadora</div>
        </div>
      </div>
    </div>
    <div class="col-md-6 cat-item">
      <div class="image-container">
        <img src="./cat2.webp" alt="Television"  className="img-cat"  />
        <div class="overlay1">
          <div class="text1">Television </div>
        </div>
      </div>
    </div>
  </div>

</div>



<Whatsapp/>
<br/>
<Footer/>
</div>





</>)

}
export default Home;