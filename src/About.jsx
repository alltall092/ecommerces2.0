import Header from "./Header";
import Footer from "./Footer";
import './about.css';
import { useEffect,useState } from "react";
import ScrollReveal from 'scrollreveal';
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
const About=()=>{

 
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5 // 50% of the component visible in the viewport
  });
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

    return(<>
    <Header/>
    <div class="container-fluid about-cont">
    <div class="overlay">
        <img src="../fondo3.jpg" className="imagenes1" />
        <div class="overlay-content">
            <h2 class="titulo">Bienvenido a R-Shopping: Innovación Tecnológica al Alcance de Todos</h2>
            <p class="parrafo">En R-Shopping, estamos comprometidos con la misión de ofrecer soluciones tecnológicas innovadoras y accesibles que mejoren la vida diaria de nuestros clientes. Desde nuestra fundación, hemos estado a la vanguardia de la revolución tecnológica, proporcionando una amplia gama de productos y servicios que van desde dispositivos electrónicos hasta software de última generación.</p>
        </div>
    </div>
</div>

    <main>
    <section className="about-section animated"  ref={ref}>
       {isVisible && (
        <Fade direction="down" triggerOnce={true}>
    
    <h2  className="animated" style={{textAlign:"center"}}>Nuestra Historia en el Mundo del E-commerce</h2>
</Fade >
)}
<hr/>
      <div className="row">
      <div className="col-md-6">
<img src="../fun.jpg" className="image1"  height={300} width={700} />
<br/>
<img src="../fun2.jpg" className="image1" height={300} width={700} />


      </div>
<div className="col-md-6 animated">

<h3>Fundación y Visión</h3>
<p className="parra">R-Shopping nació de la pasión por la innovación y la búsqueda de soluciones convenientes para los consumidores modernos. Fundada en [Año de Fundación], nuestra empresa se propuso revolucionar la experiencia de compra en línea, ofreciendo una plataforma intuitiva, productos de calidad y un servicio excepcional al cliente.Desde el principio, nuestra visión fue clara: convertirnos en líderes en el mercado del e-commerce, proporcionando a nuestros clientes una amplia selección de productos, una experiencia de compra fluida y una atención personalizada que los haga sentir valorados y satisfechos.</p>

<h3>Crecimiento y Desarrollo</h3>

<p className="parra">A lo largo de los años, hemos experimentado un crecimiento significativo y hemos ampliado nuestro catálogo de productos para satisfacer las necesidades cambiantes de nuestros clientes. Desde electrónicos y moda hasta artículos para el hogar y productos de belleza, hemos trabajado diligentemente para ofrecer una amplia variedad de productos de calidad, siempre adaptándonos a las últimas tendencias y tecnologías del mercado. Nuestro compromiso con la excelencia en el servicio al cliente nos ha permitido construir relaciones sólidas y duraderas con nuestros clientes. Nos esforzamos por superar las expectativas en cada interacción, brindando asistencia experta, tiempos de entrega rápidos y una experiencia de compra segura y sin problemas.</p>

<h3>Innovación y Tecnología</h3>

<p className="parra">En R-Shopping, abrazamos la innovación y la tecnología como pilares fundamentales de nuestro éxito. Constantemente exploramos nuevas formas de mejorar nuestra plataforma, optimizar nuestros procesos y ofrecer experiencias de usuario excepcionales. Desde el desarrollo de aplicaciones móviles hasta la implementación de sistemas de pago seguros, estamos comprometidos con la vanguardia tecnológica y la seguridad de la información. Nos esforzamos por ofrecer una experiencia de compra en línea que sea fácil, segura y agradable para todos nuestros clientes.</p>




</div>



      </div>
    
    </section>
    
    <section class="about-section">
      <h2  className="animacion" style={{textAlign:"center"}}>Nuestro Equipo</h2>
      <hr/>
      <div className="row">
      <div className="col-md-6">
      <img src="../equipo.jpg"  className="animacion image1" height={400} width={700}/>

      </div>
      <div className="col-md-6">
      <h4 className="animacion">El Éxito del Equipo de Ventas</h4>
   
      <p className="parra animacion">El éxito del equipo de ventas se mide no solo en términos de ingresos generados, sino también en la capacidad para construir relaciones sólidas con los clientes, mantener altos niveles de satisfacción del cliente y contribuir al crecimiento y la reputación de la empresa en el mercado.

En resumen, el equipo de ventas desempeña un papel indispensable en la consecución de los objetivos comerciales de una organización y su capacidad para adaptarse a las necesidades cambiantes del mercado y ofrecer soluciones efectivas es fundamental para el éxito a largo plazo</p>
<h5 className="animacion">El Papel del Equipo de Ventas</h5>

<p className="parra animacion">El equipo de ventas está compuesto por individuos con habilidades excepcionales de comunicación, negociación y persuasión. Su objetivo principal es convertir prospectos en clientes y garantizar que las necesidades y expectativas de los clientes se satisfagan de manera efectiva.</p>
      </div>
     
    
     
    </div>
    <div className="row">
      <div className="col-md-6">
        <hr/>
    <h4 className="animation">
El Equipo de Compras: Impulsando la Eficiencia y la Rentabilidad Empresarial</h4>

      <p className="parra animation">El equipo de compras desempeña un papel esencial en la gestión de la cadena de suministro y en el logro de los objetivos financieros y estratégicos de una organización. Encargados de adquirir materias primas, productos y servicios necesarios para el funcionamiento de la empresa, este equipo contribuye significativamente a la eficiencia y rentabilidad del negocio.</p>
     <h5 className="animation"> El Papel del Equipo de Compras</h5>
 
      <p className="parra animation">El equipo de compras está compuesto por profesionales dedicados a identificar proveedores confiables, negociar términos y precios favorables, y garantizar la calidad y disponibilidad de los productos y servicios requeridos por la empresa. Su objetivo principal es obtener los mejores productos y servicios al mejor precio posible, sin comprometer la calidad ni la integridad de la cadena de suministro.</p>
      </div>
      <div className="col-md-6">
        <hr/>
      <img src="../equipo2.jpg"  className="animation" height={400} width={800}/>
      
      </div>
     
    
     
    </div>
    </section>
    <h2 className="animated" style={{textAlign:"center"}}>Nuestra Compañia</h2>
    <section class="contenedor animated">
  
        <div className="item-about">
     
      <img src="https://www.joserosas.com.co/wp-content/uploads/2019/01/Gerente-de-Compras.jpg" className="image1"  height={400} width={600}/>
      <h2>Gerente de compra</h2>
      </div>
      <div className="item-about">
     
      <img src="https://www.hiperestrategia.com/hs-fs/hubfs/Gerente%20de%20Ventas.jpg?width=1000&height=667&name=Gerente%20de%20Ventas.jpg" className="image1" height={400} width={600}/>
      <h2>Gerente de venta</h2>
      </div>
      <div className="item-about">
   
      <img src="https://es.snhu.edu/img/article/puestos-en-los-que-puede-trabajar-un-administrador-de-empresas.webp" className="image1" height={400} width={600}/>
      <h2>Administrador de venta</h2>
      
      </div>
      
    </section>
  </main>
    <Footer/>
    
    </>)
}
export default About;