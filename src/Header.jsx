import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';
import './header.css';
import { useNavigate } from 'react-router-dom';


const Header=({search,setSearch})=>{
  const [item,setItem]=useState([]);
  const [show, setShow] = useState(false);
  const user = localStorage.getItem('user');
const navigate=useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));
  useEffect(()=>{

axios.get('http://localhost:8000/api/v1/cart').then(res=>setItem(res.data.flat()));


  },[]);

  const updateQty = (id, newQty) => {
    const newItems = item.map((item) => {
    
      if (item.id === id) {
        return { ...item,quantity: newQty };
      }
      return item;
    });
    setItem(newItems);

  };
  const incementar=(id,quantity)=>{
        updateQty(id,quantity+1);
        
  }
  const decrementar=(id,quantity)=>{
updateQty(id,quantity-1);


  }

  const total=Array.isArray(item)?
  item.reduce((total, item) => total + item.quantity * item.precio, 0)
 .toFixed(2):null;


const checkOut=()=>{

axios.post('http://localhost:8000/api/v1/checkout',{total,item}).then((res)=>{
  if (res.data.url) {
    window.location.assign(res.data.url).catch(err=>console.log('error del pago',err));
  }


});


}

const logout=()=>{
  localStorage.removeItem('token');
  localStorage.removeItem('user'); // Eliminar el usuario de localStorage
  setIsLoggedIn(false); 

}
const eliminarCart=(id)=>{

axios.delete(`http://localhost:8000/api/v1/deletecart/${id}`).then(()=>console.log('eliminado con exito')).catch(err=>console.log('error la eliminar'));

}
const eliminarTodoCart=()=>{

axios.delete('http://localhost:8000/api/v1/deletetodocart').then(()=>console.log('eliminado con exito')).catch(err=>console.log('error al eliminar'))


}

return(<>
 <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary shadow-bottom ">
      <Container>
        <Navbar.Brand href="#home"><img src="../R_logo.svg.png" height={40} width={40} alt='imagenes' style={{marginLeft:"-40px",marginTop:"-20px"}}/> <h3 style={{margin:"-35px 0px 0px 0px"}}>-Shopping</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       
        <Navbar.Collapse id="responsive-navbar-nav">
        <div className="search-container">
  <input type="text"  className="form-control" onChange={(e)=>setSearch(e.target.value)} placeholder="Buscar..." value={search}/>
  <i className="fas fa-search"></i>
</div>

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"><i className="fa-solid fa-house"></i>Inicio</Nav.Link>
            <Nav.Link  as={Link} to="/productos"> <i className="fa-brands fa-product-hunt"></i>Productos</Nav.Link>
            <Nav.Link  as={Link} to="/contactos"><i className="fa-regular fa-address-book"></i>Contactos</Nav.Link>
            <Nav.Link  as={Link} to="/acerca"><i className="fa-solid fa-circle-info"></i> Acerca</Nav.Link>
            <button  onClick={handleShow} className="me-2 position-relative">
            <i className="fa-solid fa-cart-shopping" style={{fontSize:"20px"}}></i>

        Cart
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {item.length}
    <span class="visually-hidden">unread messages</span>
  </span>

      </button>
     

          </Nav>
         <Nav>
         {isLoggedIn?(<>
            <Nav.Link as={Link} to="/dashboard"><i className="fa-solid fa-user"></i>{user}</Nav.Link>
            <Nav.Link as={Link} onClick={logout}><i className="fa-solid fa-sign-out"></i>Cerrar Session</Nav.Link>
          </>):(<>
            <Nav.Link as={Link} to="/login"><i className="fa-solid fa-right-to-bracket"></i>Inciar Session</Nav.Link>
            <Nav.Link as={Link} to="/registrarse"><i className="fa-solid fa-registered"></i>Registrarse</Nav.Link>
          </>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compra</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="container">
<div className="row">
<table className="table table-hover">
<tr>
  <th>Productos</th>
  
  <th>Precio</th>

  <th>Cantidad</th>



</tr>
{item.map(p=>(
  <>

<tr>
  <td>
<img src={p.url} height="80" width="70"/>

</td>
<td>
<h6>{p.titulo}</h6>


</td>
<td>
<p>{p.precio}</p>


</td>
<td>

<button className="btn btn-success" onClick={()=>incementar(p.id,p.quantity)}>+</button>
{p.quantity}
<button className="btn btn-success" onClick={()=>decrementar(p.id,p.quantity)}>-</button>

</td>
<td>{p.quantity*p.precio}</td>
<td><button className='btn btn-danger' onClick={()=>eliminarCart(p.id)}>x</button></td>
</tr>


</>))}
</table>
<a  href="#" onClick={eliminarTodoCart} style={{textDecoration:"none"}}>Vaciar Carrito</a>
<div>Total: {total}</div>
</div>

<button className="btn btn-success" style={{width:"100%"}} onClick={checkOut}>CheckOut</button>
        </div>
        </Offcanvas.Body>
      </Offcanvas>

</>)

}
export default Header;