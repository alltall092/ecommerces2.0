import Footer from './Footer';
import Header from './Header';
import './registrarse.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
const Registrarse=()=>{
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
const enviar=(datos)=>{
console.log(datos);
axios.post('http://localhost:8000/api/v1/register',datos).then((res) => {
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Los datos han sido guardados correctamente.'
    });
  }).catch((error) => {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Ha ocurrido un error al guardar los datos.',
      footer: `Detalles del error: ${error}`
    });
  })


}
const onSubmit = (data) => enviar(data)
return(<>
<Header/>
<div className="container-fluid content">
<div className="row form-row">
<div className="col-md-6 col-ms-6 register">
<h2>Formulario de Registrase</h2>
<form onSubmit={handleSubmit(onSubmit)}>
<div className="form-group">
<label className='control2'>Nombre Completo</label>
<input type="text"    {...register("username", { required: true })}
        aria-invalid={errors.username ? "true" : "false"} className="form-control control"/>
 {errors.username?.type === "required" && (
        <span role="alert" style={ {color:"red"}}>El campo nombre completo esta Vacio</span>
      )}
</div>
<div className="form-group">
<label className='control2'>Correo</label>
<input type="text"  {...register("email", {
            required: "El campo Email está vacío",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Dirección de correo electrónico no válida"
            }
          })}
          aria-invalid={errors.email ? "true" : "false"} className="form-control control"/>
          {errors.email && <span role="alert" style={ {color:"red"}}>{errors.email.message}</span>}

</div>

<div className="form-group">
<label className='control2'>Contraseña</label>
<input type="password"  {...register("password", { required: true })}
        aria-invalid={errors.password ? "true" : "false"} className="form-control control"/>
         {errors.password?.type === "required" && (
        <span role="alert" style={ {color:"red"}}>El campo Contraseña esta Vacio</span>
      )}

</div>
<div className="form-group">
<label className='control2'>Confimar Contraseña</label>
<input type="password" {...register("confirmar", { required: true })}
        aria-invalid={errors.confirmar ? "true" : "false"} className="form-control control"/>
 {errors.confirmar?.type === "required" && (
        <span role="alert" style={ {color:"red"}}>El campo comfirmar Contraseña esta Vacio</span>
      )}
</div>
<button type="submit" className="btn btn-success botton">Registrase</button>
</form>
</div>


</div>



</div>
<Footer/>
</>)
}
export default Registrarse;