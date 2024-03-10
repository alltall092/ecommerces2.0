import Header from "./Header";
import Footer from "./Footer";
import './contacto.css';
import {useState} from 'react';
import axios from "axios";
const Contactos=()=>{
const [nombre,setNombre]=useState("");
const [email,setEmail]=useState("");
const [comentario,setComentario]=useState("");

const submitContacto=()=>{
const datos={nombre:nombre,email:email,comentario:comentario};
axios.post('https://app-de09ef91-f7ca-4a51-89e3-baf187d73079.cleverapps.io/api/v1/contact',datos).then(()=>console.log('guardado exitoso')).catch(err=>console.log(err));

}

    return(<>
    <Header/>
    
    <div className="container cont-form">
<div className="row">
<div className="col-md-8 contact">
<h2>Formulario de Contacto</h2>
<form onSubmit={submitContacto}>
<div className="form-group">
<label className="form2">Nombre Completo</label>
<input type="text" onChange={(e)=>setNombre(e.target.value)} className="form-control form1" value={nombre}/>

</div>
<div className="form-group">
<label className="form2">Email</label>
<input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control form1" value={email}/>

</div>
<div className="form-group">
<label className="form2">Comentario</label>
<textarea className="form-control form1" onChange={(e)=>setComentario(e.target.value)}  style={{border:"2px solid green"}} value={comentario}></textarea>

</div>
<div className="form-group">
<button type="submit" className="btn btn-success boton1" style={{width:"100%", margin:"10px"}}>Enviar</button>
</div>
</form>


</div>


</div>


    </div>
    <Footer/>
    </>)
}
export default Contactos;