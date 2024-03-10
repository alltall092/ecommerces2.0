import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import './products.css';
import { useState,useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { Pagination } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Whatsapp from "./Whatsapp";
import { useNavigate } from "react-router-dom";
const Products=()=>{
const [datos,setDatos]=useState([]);
const [categories,setCategories]=useState([]);
const [active, setActive] = useState(null);
const [filter,setFilter]=useState([]);
const [precio1,setPrecio1]=useState(null);
const [precio2,setPrecio2]=useState(null);
const [search,setSearch]=useState("");
const itemsPerPage = 3;
const navigate=useNavigate();
// Estado para el número de la página activa
const [activePage, setActivePage] = useState(1);

// Función para calcular el índice inicial y final de los elementos a mostrar
const startIndex = (activePage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

// Arreglo de elementos para la página activa
const currentPageData = filter.slice(startIndex, endIndex);

// Total de páginas
const totalPages = Math.ceil(filter.length / itemsPerPage);

// Manejar el cambio de página
const handlePageChange = (pageNumber) => {
  setActivePage(pageNumber);
};


useEffect(()=>{

getProducts();


},[]);
const getProducts=()=>{

  axios.get('http://localhost:8000/api/v1/products').then(res=>setDatos(res.data));

}

useEffect(()=>{

    axios.get('http://localhost:8000/api/v1/categories').then(res=>setCategories(res.data));
    
    
    },[datos]);
    
    const getByCategories=(id)=>{

        const cat=datos.filter((p)=>p.categoryId===id);
        setFilter(cat);
        //setImageUrl(r);
        
        setActive(id);
        
        
        }
        useEffect(()=>{
            setFilter(datos);
            
            
            
            },[datos]);
  
    useEffect(()=>{
const searchFilter=datos.filter(x=>x.titulo.toLowerCase().includes(search.toLocaleLowerCase()));
setFilter(searchFilter);
    },[search,datos])

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
  getProducts();
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
const getByFilterPrice=()=>{
const precio=datos.filter(x=>x.precio>=parseFloat(precio1) && x.precio<=parseFloat(precio2));
setFilter(precio);


}
const ProductsById=(id)=>{

const n=navigate(`/detalles/${id}`);
return n;


}
    return(<>
    <Header search={search} setSearch={setSearch}/>
    <div className="container-fluid conthome passcont">
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.clasesdeperiodismo.com/wp-content/uploads/2012/04/familia-television.jpg"
          alt="First slide"
          height={400}
        />
        <Carousel.Caption>
          <h5 style={{color:"white"}}>Transformando el Futuro con Tecnología</h5>
          <p>"Nuestra misión es impulsar la transformación digital y hacer que la tecnología sea accesible para todos. En nuestra tienda, nos dedicamos a ofrecer productos y soluciones innovadoras que inspiran y capacitan a las personas para enfrentar los desafíos del mañana</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.elconfidencialdigital.com/asset/thumbnail,1280,720,center,center/media/elconfidencialdigital/images/2018/08/24/2018082412495232566.jpg"
          alt="Second slide"
          height={400}
        />
        <Carousel.Caption>
          <h5 style={{color:"white"}}>Innovación para tu Estilo de Vida</h5>
          <p>Con un enfoque en la innovación, llevamos la última tecnología directamente a tu vida cotidiana. Desde dispositivos inteligentes hasta soluciones domésticas avanzadas, estamos aquí para mejorar tu estilo de vida y simplificar tus tareas diarias con la ayuda de la tecnología.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://parametric-architecture.com/wp-content/uploads/2023/10/Huion-Kamvas-22-Tablet.jpg"
          alt="Third slide"
          height={400}
        />
        <Carousel.Caption>
          <h5 style={{color:"white"}}>Experiencia Tecnológica Sin Límites"</h5>
          <p>
          En nuestra tienda, te invitamos a explorar un mundo de posibilidades ilimitadas. Nuestra pasión por la tecnología se refleja en cada producto que ofrecemos y en cada interacción con nuestros clientes. Únete a nosotros y descubre cómo la tecnología puede llevar tus sueños más allá de los límites imaginados
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="container-fluid">
<div className="row">
<div className="col-md-3 col-ms-3">
<Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filter By Price</Accordion.Header>
        <Accordion.Body>
    <div className="col-md-12 col-ms-6">
<div className="form-group">
<label>Price 1</label>

<input type="text"  onChange={(e)=>setPrecio1(e.target.value)} className="form-control" value={precio1}/>


</div>
<div className="form-group">
<label>Price 2</label>
<input type="text" onChange={(e)=>setPrecio2(e.target.value)}  className="form-control" value={precio2}/>


</div>
<br/>
<button className="btn btn-success" onClick={getByFilterPrice} style={{width:"100%"}}>filtrar</button>

    </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{backgroundColor:'green !mportant',color:'white !important'}}>Menu De Categirias</Accordion.Header>
        <Accordion.Body style={{margin:"0px",padding:"0px"}}>
        <ListGroup as="ul" className="categories">
 
      {categories.map((category) => (
            <ListGroup.Item as="li"
            className={active === category.id ? 'active' : ''}
              onClick={() => getByCategories(category.id)}
              style={{ cursor: "pointer" }}
            
            key={category.id}>
              <i className="fa-solid fa-angles-left"></i>
              {category.name}
              </ListGroup.Item>))}
    </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
<div className="col-md-9 col-ms-9">
  <div className="grid-container">
    {currentPageData.map(x => (

      <div className="item-products">
        <a href="#" onClick={()=>ProductsById(x.id)} style={{textDecoration:"none"}}>
        <img src={x.url}  alt="imagenes" />
        <h2>{x.titulo}</h2>
        </a>
        <p className="parra">{"RD$"+x.precio}</p>
       
        <button className="btn btn-success" onClick={()=>addCart(x.id)}> <i className="fa-solid fa-cart-plus" style={{color:"white"}}></i>Agregar </button>
      </div>
    ))}
  </div>
</div>





</div>
<div className="pagination-container">
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev onClick={() => handlePageChange(activePage - 1)}>Anterior</Pagination.Prev>
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item 
            key={index} 
            active={index + 1 === activePage} 
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(activePage + 1)}>Siguiente</Pagination.Next>
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
</div>
<Whatsapp/>
    </div>
    <Footer/>
    
    </>)
}
export default Products;