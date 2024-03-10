import { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2
const AgregarProducts=()=>{
const [titulo,setTitulo]=useState("");
const [price,setPrice]=useState(null);
const [cantidad,setCantidad]=useState(0);
const [image,setImage]=useState(null);
const [description,setDescription]=useState("");
const [categoryId,setCategoryId]=useState(null);
const [datos,setDatos]=useState([]);
useEffect(()=>{

axios.get('http://localhost:8000/api/v1/categories').then(res=>setDatos(res.data)).catch(err=>console.log('no cargan los datos'));



},[]);

const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

const enviar= async(e)=>{
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('price', price);
    formData.append('cantidad', cantidad);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('categoryId', categoryId);
 
axios.post('https://app-de09ef91-f7ca-4a51-89e3-baf187d73079.cleverapps.io/api/v1/products',formData).then(response => {
            console.log(response.data);
            // Show a success message using SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Product added successfully!',
    });
          }).catch(error => {
            // If there's an error, handle it
            console.error('Error adding product:', error);
        
            // Show an error message using SweetAlert2
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'Failed to add product. Please try again later.',
            });
          });
 
    
  

    
}


return(<>
<div className="container">
<div className="row">
<div className="col-md-6 col-ms-6">
    <h2>Agregar Productos</h2>
<form onSubmit={enviar} encType="multipart/form-data">
<div className="form-group">
<label>Titulo</label>
<input type="text" onChange={(e)=>setTitulo(e.target.value)} className="form-control" value={titulo}/>
</div>
<div className="form-group">
<label>Precio</label>
<input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control" value={price}/>
</div>
<div className="form-group">
<label>Cantidad</label>
<input type="number" onChange={(e)=>setCantidad(e.target.value)} className="form-control" value={cantidad}/>
</div>
<div className="form-group">
<label>subir imagenes</label>
<input type="file" onChange={handleFileChange} className="form-control"/>
</div>
<div className="form-group">
<label>Categorias </label>
<select onChange={(e)=>setCategoryId(e.target.value)} className="form-select" value={categoryId} style={{border:"2px solid green"}}>
<option>---------</option>
{datos.map(x=>(<option value={x.id}>{x.name}</option>))}


</select>
</div>
<div className="form-group mb-3">
<label>Descripcion</label>
<textarea className="form-control"  onChange={(e)=>setDescription(e.target.value)} value={description} style={{border:"2px solid green"}} ></textarea>


</div>
<br/>
<div className="form-group">
<button type="submit" className="btn btn-success" style={{width:"100%"}}>Agregar Productos</button>
</div>
</form>




</div>
</div>




</div>





</>)

}
export default AgregarProducts;