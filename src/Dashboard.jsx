import './dashboard.scss';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Chart } from "react-google-charts";
import DataTable from 'react-data-table-component';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {setProductById,getProductsById} from "./detalles-slice/Detalles-Slice";
import { useSelector,useDispatch } from "react-redux";
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Dashboard=({setIsLogin})=>{
  //const products=useSelector(state=>state.productById.products);
const dispatch=useDispatch();
const [product,setProduct]=useState([]);
const navigate=useNavigate();

useEffect(()=>{

dispatch(getProductsById());


},[]);

useEffect(()=>{
axios.get('http://localhost:8000/api/v1/orders').then(res=>setProduct(res.data));


},[]);

const navegar=()=>{
const n=navigate('/agregar');
return n;



}
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];
  
  const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };
   const datos = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  
   const option = {
    title: "My Daily Activities",
  };

  const columns2 = [
    {
      name: 'id',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'totalAmount',
      selector: row => row.totalAmount,
      sortable: true
    },
    {
      name: 'status',
      selector: row => row.status,
      sortable: true
    },
  ];
  const columns = [
    {
      name: 'Titulo',
      selector: row => row.titulo,
    },
    {
      name: 'Cantidad',
      selector: row => row.cantidad,
    },
    {
      name: 'Precio',
      selector: row => row.precio,
    },
  ];



  const data1 = [
    { 
        titulo: "Producto 1", 
        cantidad: 10, 
        precio: 50.99 
    },
    { 
        titulo: "Producto 2", 
        cantidad: 20, 
        precio: 30.50 
    },
    { 
        titulo: "Producto 3", 
        cantidad: 15, 
        precio: 25.75 
    }
];

// Insertar 10 productos adicionales al arreglo
for (var i = 4; i <= 5; i++) {
    data1.push({
        titulo: "Producto " + i,
        cantidad: Math.floor(Math.random() * 50) + 1, // Genera una cantidad aleatoria entre 1 y 50
        precio: (Math.random() * 100).toFixed(2) // Genera un precio aleatorio entre 0 y 100 con dos decimales
    });
}
const cliente=[
  { nombre: 'Juan', direccion: 'Calle 123', telefono: '1234567890' },
  { nombre: 'María', direccion: 'Calle 456', telefono: '0987654321' },
  { nombre: 'Pedro', direccion: 'Calle 789', telefono: '5555555555' }
]

const columns3 = [
  {
    name: 'Nombre',
    selector: row => row.nombre,
  },
  {
    name: 'Direccion',
    selector: row => row.direccion,
  },
  {
    name: 'Telefono',
    selector: row => row.telefono,
  },
];

const user=localStorage.getItem('user');
const logout=()=>{
  localStorage.removeItem('token');
  localStorage.removeItem('user'); // Eliminar el usuario de localStorage
  setIsLogin(false); 

}

return(<>


<div className="container-fluid cambio">

<Tab.Container  id="left-tabs-example" defaultActiveKey="first" >

          <Nav variant="pills" className="flex-column sidebar">
            <Nav.Item>
              <Nav.Link eventKey="first"><i className="fa-solid fa-chart-line"></i>Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second"> <i className="fa-solid fa-cart-shopping"></i>Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tercer"> <i className="fa-brands fa-product-hunt"></i>Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cuarto"><i className="fa-solid fa-truck"></i>Shopping</Nav.Link>
            </Nav.Item>
          </Nav>
		 
          <Tab.Content className="contener  container">
          <div className='cont-search'>
          <div className='item-search'>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">R-shopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
         
          
            

          </Nav>
          <Nav>
          <NavDropdown title={user} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2" onClick={logout}>
                Cerrar Session
              </NavDropdown.Item>
             
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
</div>
		
            <Tab.Pane eventKey="first">
            <div className="container-fluid">
        
          <div className=" cont-dash container">
<div className="item-dash color">
  <div className='row'>
<div className='col-md-6'>
<i className="fa-solid fa-truck" style={{color:"white",fontSize:"110px",margin:"20px",padding:"20px"}}></i>
</div>
<div className='col-md-6'>
<h1 style={{color:"white",fontSize:"100px",margin:"20px",padding:"20px"}}>67</h1>
</div>
</div>
</div>
<div className="item-dash color1">
<div className='row'>
<div className='col-md-6'>
<i className="fa-solid fa-cart-shopping" style={{color:"white",fontSize:"110px",margin:"20px",padding:"20px"}}></i>
</div>
<div className='col-md-6'>
<h1 style={{color:"white",fontSize:"100px",margin:"20px",padding:"20px"}}>09</h1>
</div>
</div>
</div>
<div className="item-dash color2">
<div className='row'>
<div className='col-md-6'>
<i className="fa-solid fa-bag-shopping" style={{color:"white",fontSize:"110px",margin:"20px",padding:"20px"}}></i>
</div>
<div className='col-md-6'>
<h1 style={{color:"white",fontSize:"100px",margin:"20px",padding:"20px"}}>35</h1>
</div>
</div>
</div>
          </div>
        
      
      <div className="row chart-row">    
      <div className="col-md-5 chart-col">
      <Chart
      chartType="PieChart"
      data={datos}
      options={option}
      width={"100%"}
      height={"400px"}
      className="grafico"
      
    />

        </div>

        <div className="col-md-7 chart-col">
            <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  </div>
  </div>
  <div className='data-table'>
  <DataTable
			columns={columns}
			data={data1}
		/>
  </div>
</div>

            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <div className='cont-tabla row'>
            <div className='col-md-12'>            <DataTable
    title="Order Details"
    columns={columns2}
    data={product}
  
  />
  </div>
  </div>



            </Tab.Pane>
            <Tab.Pane eventKey="tercer">
              <div className='botton-cont'>
              <button className='btn btn-primary' onClick={navegar} style={{margin:"5px 0px 0px auto", padding:"10px"}}>Add Products</button>
              </div>
              <div className='container prod-cont'>
{product.map(x=>(x.products.map(p=>(<div className='prod-item'>
<img src={p.url} />
<h2>{p.titulo}</h2>
<p className='parra'>{p.price}</p>
{x.status=="success" &&(<><h2>Products Comprado</h2></>)}

</div>))))}



            </div>
              
              
        </Tab.Pane>
            <Tab.Pane eventKey="cuarto">
              <div className='row cont-tabla'>
                <div className='col-md-12'>
            <DataTable
			columns={columns3}
			data={cliente}
      pagination
          highlightOnHover
          responsive={true}
		/>
    </div>
</div>
            </Tab.Pane>

          </Tab.Content>
    
    </Tab.Container>
</div>
</>)

}
export default Dashboard;