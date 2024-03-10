import Footer from './Footer';
import Header from './Header';
import './login.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Login=({isLogin,setIsLogin})=>{
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const navigate=useNavigate();
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
      useEffect(()=>{
        const token=localStorage.getItem('token');
        if(token!==null){
            setIsLogin(true)
            navigate('/dashboard');
        }else{
            setIsLogin(false);
        }

    },[isLogin]);
const enviar=(email,password)=>{
console.log(email+"="+password);
axios.post('http://localhost:8000/api/v1/login',{email,password}).then((res) => {
  const token=res.data.token;
  localStorage.setItem('token',token);
  const user=res.data.email;
  localStorage.setItem('user',user)
    setSuccessMessage('¡Autenticación exitosa!');
    setErrorMessage('');
setIsLogin(true);
    setTimeout(() => {
      setSuccessMessage('');
      navigate('/dashboard');
    }, 3000);
  }).catch((err) => {
    setErrorMessage('Error: no se pudo autenticar',err.response);
    setSuccessMessage('');
    setIsLogin(false);
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  });


}

const onSubmit = (data) => enviar(data.email,data.password)

return(<>
<Header/>
<div className="container-fluid content">
{isLogin && <div className='alert alert-success' style={{width:"50%",margin:" 0 auto"}}><span style={{color:"green"}}>El usuario ha iniciado sesión correctamente.</span></div>}
<div className="row form-row">



<div className="col-md-6 login">
<h1>Inciar Session</h1>
<form onSubmit={handleSubmit(onSubmit)}>
<div className="form-group">
<label>Email</label>
<input type="text"   {...register("email", {
            required: "El campo Email está vacío",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Dirección de correo electrónico no válida"
            }
          })}
          aria-invalid={errors.email ? "true" : "false"}className="form-control" />
{errors.email && <span role="alert" style={ {color:"red"}}>{errors.email.message}</span>}


</div>
<div className="form-group">
<label>Password</label>
<input type="password"  {...register("password", { required: true })}
        aria-invalid={errors.password ? "true" : "false"} className="form-control" />
 {errors.password?.type === "required" && (
        <span role="alert" style={{color:"red"}}>El campo password esta Vacio</span>
      )}


</div>
<button type="submit" className="btn btn-success boton">Iniciar Session</button>
</form>


</div>


</div>
{successMessage && (
        <div className="alert alert-success" onAnimationEnd={() => setSuccessMessage('')} style={{width:"50%",margin:" 0 auto"}}>
          <center>{successMessage}</center>
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" onAnimationEnd={() => setErrorMessage('')} style={{width:"50%",margin:" 0 auto"}}>
         <center> {errorMessage}</center>
        </div>
      )}


</div>
<Footer/>
</>)


}
export default Login;