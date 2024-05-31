
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import image_logo from '../image/logo_sirculo.jpg';

import { FaBars, FaAngleDown, FaAngleRight, FaUserPlus } from "react-icons/fa";

function Navbar() {

  /* para cuando se escriba la url, pues al final termine con / */
  if (!window.location.pathname.endsWith('/')) {
    window.location.href = window.location.pathname + '/';
  }

/* para esconder y hacer aparecer el sidebar */
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

 /* para hacer que aparesca y desaparesta las partes del contenido del sidebar */
// este si

const [expandedSections, setExpandedSections] = useState([]);

const handleSectionClick = (section) => {
  if (expandedSections.includes(section)) {
    setExpandedSections(expandedSections.filter((item) => item !== section));
  } else {
    setExpandedSections([...expandedSections, section]);
  }
};


  return (

    <div >

      {/*nav cabesera principal */}
      <nav className="mi_navbar-fig">
        <div className="icon_mb displa_flex"> <button className='transparentis' onClick={toggleSidebar}> < FaBars /> </button> </div>
        <a className=" ps-5 " ><img className='imagenavbar' src={image_logo} alt="Imagen de navbar" />  </a>
        <div className="texto_nav">hola vecino</div>
      </nav>
      {/* div despues del nav */}
      <div id='layoutSidenav' className={` ${sidebarVisible ? '' : 'layoutSidenav_nav-hidden'}`}>
        {/* div de la barra lateral */}
        <div id="layoutSidenav_nav">
          <nav className='p-1' >
            {/* esto es lo que voy a probar ahora */}
            <div className="nav-item">
              <a href="#" className={`nav-link nov_encabeza ${expandedSections.includes('listas') ? 'expanded' : ''}`} onClick={() => handleSectionClick('listas')}  >
                <div className='isquier'>  Listas  </div>
                <div className='derech'>  {expandedSections.includes('listas') ? <FaAngleDown /> : <FaAngleRight />}  </div>
              </a>
              {expandedSections.includes('listas') && (
                <nav >
                  <a className="nav-link nov_camp">Lista de Cosechadores</a>
                  <a className="nav-link nov_camp">Lista de Entregas</a>
                  <a className="nav-link nov_camp">Lista de codigos QR</a>
                  <a className="nav-link nov_camp">Lista de bines</a>
                </nav>
              )}
            </div>

            <div className="nav-item">
              <a href="#" className={`nav-link nov_encabeza ${expandedSections.includes('tendencia') ? 'expanded' : ''}`} onClick={() => handleSectionClick('tendencia')}  >
                <div className='isquier'>  Datos en tendencia  </div>
                <div className='derech'>  {expandedSections.includes('tendencia') ? <FaAngleDown /> : <FaAngleRight />}  </div>
              </a>
              {expandedSections.includes('tendencia') && (
                <nav >
                  <a className="nav-link nov_camp">Rendimiento de cosecha</a>
                  <a className="nav-link nov_camp">Cambios en la eficiencia</a>
                </nav>
              )}
            </div>

            <div className="nav-item">
              <a href="#" className={`nav-link nov_encabeza ${expandedSections.includes('referenciales') ? 'expanded' : ''}`} onClick={() => handleSectionClick('referenciales')}  >
                <div className='isquier'> Crear Datos Referenciales </div>
                <div className='derech'>  {expandedSections.includes('referenciales') ? <FaAngleDown /> : <FaAngleRight />}  </div>
              </a>
              {expandedSections.includes('referenciales') && (
                <nav >
                  <a className="nav-link nov_camp">Ubicación</a>
                  <a className="nav-link nov_camp">Fruta</a>
                </nav>
              )}
            </div>

            <div className='nav-item'>
              <a className='nav-link operplus'>
                <div className='iconplus'> <FaUserPlus /></div>
                <div> Operadores QR </div>
              </a>
            </div>
          </nav>
        </div>

        {/* div del contenido que esta al lado de la barra lateral */}
        <div id="layoutSidenav_content" className={`${sidebarVisible ? '' : 'layoutSidenav_content-shifted'}`} >

          este es el div de la informacion: pedro juan y diego


          {/* este contenido es el que se cambia para las demas vistas */}
          {/* este contenido es el que se cambia para las demas vistas */}
          {/* este contenido es el que se cambia para las demas vistas */}


          {/* esta es la parte de juan que no a querido funcionar  */}
          <a className="nav-link collapsed " data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
            Juan
            <div className="icon_ma"><svg className="svg-inline--fa fa-angle-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg></div>


          </a>

          <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
            <nav>
              <a><Link className="nav-link" to="">hola 1</Link></a>
              <a><Link className="nav-link" to="">hola 2</Link></a>
              <a><Link className="nav-link" to="">hola 3</Link></a>
            </nav>
          </div>

          <dir>
            {/**<!--termino del Sidebar--> */}




            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              {/*form-select-lg */}
              <div className="container-fluid">
                <Link className="navbar-brand" to="/" >Navbar</Link>
                <Link className="navbar-brand" to="/" >Navbar</Link> <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">  <Link className="nav-link" aria-current="page" to="/Login">Iniciar Secion</Link>  </li>
                    <li className="nav-item">  <Link className="nav-link" to="/ScannerQR">Scanear QR</Link>  </li>
                    <li className="nav-item">  <Link className="nav-link" to='/SetPrice'>Presio por scaneo</Link>  </li>
                    <li className="nav-item">  <Link className="nav-link" to='/SetQuantity'>cantidad por escaneo</Link>  </li>
                    <li className="nav-item">  <Link className="nav-link" to='/AddWorker'>agregar trabajadores</Link>  </li>
                    <li className="nav-item">  <Link className="nav-link" to='/DailyReport'>Informe diario</Link>  </li>
                  </ul>
                </div>



              </div>




            </nav>

            <section className="home">
              <div className="text">Dashboard Sidebar</div>
            </section>

          </dir>



          <dir>


            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">  <Link className="nav-link" aria-current="page" to="/Login">Iniciar Secion</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to="/ScannerQR">Scanear QR</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetPrice'>Presio por scaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetQuantity'>cantidad por escaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/AddWorker'>agregar trabajadores</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/DailyReport'>Informe diario</Link>  </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">  <Link className="nav-link" aria-current="page" to="/Login">Iniciar Secion</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to="/ScannerQR">Scanear QR</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetPrice'>Presio por scaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetQuantity'>cantidad por escaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/AddWorker'>agregar trabajadores</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/DailyReport'>Informe diario</Link>  </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">  <Link className="nav-link" aria-current="page" to="/Login">Iniciar Secion</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to="/ScannerQR">Scanear QR</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetPrice'>Presio por scaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetQuantity'>cantidad por escaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/AddWorker'>agregar trabajadores</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/DailyReport'>Informe diario</Link>  </li>
            </ul>
            v
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">  <Link className="nav-link" aria-current="page" to="/Login">Iniciar Secion</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to="/ScannerQR">Scanear QR</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetPrice'>Presio por scaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetQuantity'>cantidad por escaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/AddWorker'>agregar trabajadores</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/DailyReport'>Informe diario</Link>  </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">  <Link className="nav-link" aria-current="page" to="/Login">Iniciar Secion</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to="/ScannerQR">Scanear QR</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetPrice'>Presio por scaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetQuantity'>cantidad por escaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/AddWorker'>agregar trabajadores</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/DailyReport'>Informe diario</Link>  </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">  <Link className="nav-link" aria-current="page" to="/Login">Iniciar Secion</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to="/ScannerQR">Scanear QR</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetPrice'>Presio por scaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetQuantity'>cantidad por escaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/AddWorker'>agregar trabajadores</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/DailyReport'>Informe diario</Link>  </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">  <Link className="nav-link" aria-current="page" to="/Login">Iniciar Secion</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to="/ScannerQR">Scanear QR</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetPrice'>Presio por scaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetQuantity'>cantidad por escaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/AddWorker'>agregar trabajadores</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/DailyReport'>Informe diario</Link>  </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">  <Link className="nav-link" aria-current="page" to="/Login">Iniciar Secion</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to="/ScannerQR">Scanear QR</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetPrice'>Presio por scaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetQuantity'>cantidad por escaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/AddWorker'>agregar trabajadores</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/DailyReport'>Informe diario</Link>  </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">  <Link className="nav-link" aria-current="page" to="/Login">Iniciar Secion</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to="/ScannerQR">Scanear QR</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetPrice'>Presio por scaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetQuantity'>cantidad por escaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/AddWorker'>agregar trabajadores</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/DailyReport'>Informe diario</Link>  </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">  <Link className="nav-link" aria-current="page" to="/Login">Iniciar Secion</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to="/ScannerQR">Scanear QR</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetPrice'>Presio por scaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetQuantity'>cantidad por escaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/AddWorker'>agregar trabajadores</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/DailyReport'>Informe diario</Link>  </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">  <Link className="nav-link" aria-current="page" to="/Login">Iniciar Secion</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to="/ScannerQR">Scanear QR</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetPrice'>Presio por scaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetQuantity'>cantidad por escaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/AddWorker'>agregar trabajadores</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/DailyReport'>Informe diario</Link>  </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">  <Link className="nav-link" aria-current="page" to="/Login">Iniciar Secion</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to="/ScannerQR">Scanear QR</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetPrice'>Presio por scaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/SetQuantity'>cantidad por escaneo</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/AddWorker'>agregar trabajadores</Link>  </li>
              <li className="nav-item">  <Link className="nav-link" to='/DailyReport'>Informe diario</Link>  </li>
            </ul>


          </dir>




          <section className="home">
            <div className="text">Dashboard Sidebar</div>
          </section>





        </div>

      </div>





















      /* */








    </div>
  )

};

export default Navbar;




















