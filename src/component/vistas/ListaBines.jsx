

import React, { useState, useEffect, useRef, useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import image_logo from '../image/logo_sirculo.jpg';

import { FaBars, FaHome, FaSignInAlt, FaSignOutAlt,FaSearch,FaBoxOpen,FaMapMarkerAlt,FaCalendarAlt,FaAppleAlt,FaCheck  } from "react-icons/fa";
import Sidebar from '../Navbar/Sidebar';

import axios from 'axios';

import { AuthContext } from '../otros/AuthContext';

function ListaBines() {
    
  /* para cuando se escriba la url, pues al final termine con / */
  if (!window.location.pathname.endsWith('/')) {
    window.location.href = window.location.pathname + '/';
  }
  /* para esconder y hacer aparecer el sidebar */
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

   
/*  const [allData, setAllData] = useState( /* null */ /*  [] );
  const [error, setError] = useState(null /* '' */ /* ); // ni idea de si es que funcione, esto era para  que el usuario vea un mensaje por si es que tiene un error al obtener los datos
  
  useEffect(() => {
      const obtenerDatos = async () => {
        try { const resultado = await axios.get('/api/user'); // Ruta de la API para obtener los datos del usuario ejemplo si es de una url seria https://restcountries.com/v3.1/all

        if (!resultado.data || resultado.data.length === 0) {
          throw new Error('No se obtuvieron datos de la API');
        } // esto es para ver que los datos sean validos        
          setAllData(resultado.data);
        } catch (error) {
          console.error('Error al obtener los datos:', error);
          setError('Error al obtener los datos: ' + error.message);  // esta linea ni idea de si es que funcione
        }
      };
      obtenerDatos();
    }, []);  */
  
  /*    if (!allData) {
      return <p>Cargando...</p>;  //esta o  Otra lógica de manejo de carga
    }  */
  
/*  if (error) {
    return <div>{error}</div>;
  } // esta linea ni idea de si es que funcione */
  
 
  const { authenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log('Cerrando sesión...');
    localStorage.clear(); // Limpiar el almacenamiento local
    logout();
    navigate('/LoginAdmin');
  };

  const Bines = [
    { uvicacion: 'Fundo Los Robles', fecha: '06-05-2024',fruto: 'Durazno', estado: '30%' },
    { uvicacion: 'Fundo Los Robles', fecha: '07-05-2024',fruto: 'Durazno', estado: '50%' },
    { uvicacion: 'Fundo Los Robles', fecha: '08-05-2024',fruto: 'Durazno', estado: '80%' },
    { uvicacion: 'Fundo Los Robles', fecha: '09-05-2024',fruto: 'Durazno', estado: 'lleno' },
    { uvicacion: 'Fundo Los Robles', fecha: '10-05-2024',fruto: 'Durazno', estado: '30%' },
    { uvicacion: 'Fundo Los Robles', fecha: '11-05-2024',fruto: 'Durazno', estado: '50%' },
    { uvicacion: 'Fundo Los Robles', fecha: '12-05-2024',fruto: 'Durazno', estado: '80%' },
    { uvicacion: 'Fundo Los Robles', fecha: '13-05-2024',fruto: 'Durazno', estado: 'lleno' },
    { uvicacion: 'Fundo Los Robles', fecha: '14-05-2024',fruto: 'Durazno', estado: '30%' },
    { uvicacion: 'Fundo Los Robles', fecha: '15-05-2024',fruto: 'Durazno', estado: '50%' },
    { uvicacion: 'Fundo Los Robles', fecha: '16-05-2024',fruto: 'Durazno', estado: '80%' },
    { uvicacion: 'Fundo Los Robles', fecha: '17-05-2024',fruto: 'Durazno', estado: 'lleno' },
    { uvicacion: 'Fundo Los Robles', fecha: '18-05-2024',fruto: 'Durazno', estado: '30%' },
    { uvicacion: 'Fundo Los Robles', fecha: '19-05-2024',fruto: 'Durazno', estado: '50%' },
    { uvicacion: 'Fundo Los Robles', fecha: '20-05-2024',fruto: 'Durazno', estado: '80%' },
    { uvicacion: 'Fundo Los Robles', fecha: '21-05-2024',fruto: 'Durazno', estado: 'lleno' },
    { uvicacion: 'Fundo Los Robles', fecha: '22-05-2024',fruto: 'Durazno', estado: '30%' },
    { uvicacion: 'Fundo Los Robles', fecha: '23-05-2024',fruto: 'Durazno', estado: '50%' },
    { uvicacion: 'Fundo Los Robles', fecha: '24-05-2024',fruto: 'Durazno', estado: '80%' },
    { uvicacion: 'Fundo Los Robles', fecha: '25-05-2024',fruto: 'Durazno', estado: 'lleno' },
    { uvicacion: 'Fundo Los Robles', fecha: '26-05-2024',fruto: 'Durazno', estado: '30%' },
    { uvicacion: 'Fundo Los Robles', fecha: '27-05-2024',fruto: 'Durazno', estado: '50%' },
    { uvicacion: 'Fundo Los Robles', fecha: '28-05-2024',fruto: 'Durazno', estado: '80%' },
    { uvicacion: 'Fundo Los Robles', fecha: '29-05-2024',fruto: 'Durazno', estado: 'lleno' },

    { uvicacion: 'Fundo Los Robles', fecha: '30-05-2024',fruto: 'Durazno', estado: '30%' },
    { uvicacion: 'Fundo Los Robles', fecha: '31-05-2024',fruto: 'Durazno', estado: '50%' },
    { uvicacion: 'Fundo Los Robles', fecha: '01-06-2024',fruto: 'Durazno', estado: '80%' },
    { uvicacion: 'Fundo Los Robles', fecha: '02-06-2024',fruto: 'Durazno', estado: 'lleno' },
    { uvicacion: 'Fundo Los Robles', fecha: '03-06-2024',fruto: 'Durazno', estado: '30%' },
    { uvicacion: 'Fundo Los Robles', fecha: '04-06-2024',fruto: 'Durazno', estado: '50%' },
    { uvicacion: 'Fundo Los Robles', fecha: '05-06-2024',fruto: 'Durazno', estado: '80%' },
    { uvicacion: 'Fundo Los Robles', fecha: '06-06-2024',fruto: 'Durazno', estado: 'lleno' },
    { uvicacion: 'Fundo Los Robles', fecha: '07-06-2024',fruto: 'Durazno', estado: '30%' },
    { uvicacion: 'Fundo Los Robles', fecha: '08-06-2024',fruto: 'Durazno', estado: '50%' },
    { uvicacion: 'Fundo Los Robles', fecha: '09-06-2024',fruto: 'Durazno', estado: '80%' },
    { uvicacion: 'Fundo Los Robles', fecha: '10-06-2024',fruto: 'Durazno', estado: 'lleno' },
    
    { uvicacion: 'Fundo Los Maitenes', fecha: '11-06-2024',fruto: 'Mora', estado: '30%' },
    { uvicacion: 'Fundo Los Maitenes', fecha: '12-06-2024',fruto: 'Mora', estado: '50%' },
    { uvicacion: 'Fundo Los Maitenes', fecha: '13-06-2024',fruto: 'Mora', estado: '80%' },
    { uvicacion: 'Fundo Los Maitenes', fecha: '14-06-2024',fruto: 'Mora', estado: 'lleno' },
    { uvicacion: 'Fundo Los Maitenes', fecha: '15-06-2024',fruto: 'ciruela', estado: '30%' },
    { uvicacion: 'Fundo Los Maitenes', fecha: '16-06-2024',fruto: 'ciruela', estado: '50%' },
    { uvicacion: 'Fundo Los Maitenes', fecha: '17-06-2024',fruto: 'ciruela', estado: '80%' },

    { uvicacion: 'Fundo Los Maitenes', fecha: '18-06-2024',fruto: 'ciruela', estado: 'lleno' },

    { uvicacion: 'Fundo Los Robles', fecha: '19-06-2024',fruto: 'Durazno', estado: '30%' },
    { uvicacion: 'Fundo Los Robles', fecha: '19-06-2024',fruto: 'Durazno', estado: '50%' },
    { uvicacion: 'Fundo Los Robles', fecha: '19-06-2024',fruto: 'Durazno', estado: '80%' },
    { uvicacion: 'Fundo Los Robles', fecha: '19-06-2024',fruto: 'Durazno', estado: 'lleno' },
    { uvicacion: 'Fundo Los Makis', fecha: '20-06-2024',fruto: 'Manzana verde', estado: '30%' },
    { uvicacion: 'Fundo Los Makis', fecha: '20-06-2024',fruto: 'Manzana verde', estado: '50%' },
    { uvicacion: 'Fundo Los Makis', fecha: '20-06-2024',fruto: 'Manzana verde', estado: '80%' },
    { uvicacion: 'Fundo Los Makis', fecha: '20-06-2024',fruto: 'Manzana verde', estado: 'lleno' },
    { uvicacion: 'Fundo Los Makis', fecha: '21-06-2024',fruto: 'Naranja', estado: '30%' },
    { uvicacion: 'Fundo Los Makis', fecha: '21-06-2024',fruto: 'Naranja', estado: '50%' },
    { uvicacion: 'Fundo Los Makis', fecha: '21-06-2024',fruto: 'Naranja', estado: '80%' },
    { uvicacion: 'Fundo Los Makis', fecha: '21-06-2024',fruto: 'Naranja', estado: 'lleno' },
    { uvicacion: 'Fundo Las Calas', fecha: '22-06-2024',fruto: 'Pera', estado: '30%' },
    { uvicacion: 'Fundo Las Calas', fecha: '22-06-2024',fruto: 'Pera', estado: '50%' },
    { uvicacion: 'Fundo Las Calas', fecha: '22-06-2024',fruto: 'Pera', estado: '80%' },
    { uvicacion: 'Fundo Las Calas', fecha: '22-06-2024',fruto: 'Pera', estado: 'lleno' },
    { uvicacion: 'Fundo El Salto', fecha: '23-06-2024',fruto: 'Manzana roja', estado: '30%' },
    { uvicacion: 'Fundo El Salto', fecha: '23-06-2024',fruto: 'Manzana roja', estado: '50%' },
    { uvicacion: 'Fundo El Salto', fecha: '23-06-2024',fruto: 'Manzana roja', estado: '80%' },
    { uvicacion: 'Fundo El Salto', fecha: '23-06-2024',fruto: 'Manzana roja', estado: 'lleno' },
/* */
    
  ];


  const ultimosDatos = Bines.slice().sort((a, b) => new Date(b.fecha.split('-').reverse().join('/')) - new Date(a.fecha.split('-').reverse().join('/'))); // Ordenar por fecha
   
  const uviUvi = [...new Set(Bines.map(bin => bin.uvicacion))]; // Obtener ubicaciones 
  const fecFec = [...new Set(Bines.map(bin => bin.fecha))]; // Obtener fechas
  const fruFru = [...new Set(Bines.map(bin => bin.fruto))]; // Obtener frutas 
  const estEst = [...new Set(Bines.map(bin => bin.estado))]; // Obtener estado 
 
  //para la barra de busqueda
   // Funciones de filtrado y ordenamiento
   const [filtrarUvicacion, setFiltrarUvicacion] = useState('');
   const [filtrarFecha, setFiltrarFecha] = useState('');
   const [filtrarFruto, setFiltrarFruto] = useState('');
   const [filtrarEstado, setFiltrarEstado] = useState('');
   
  const filtrarBines = ultimosDatos.filter(item => item.uvicacion.toLowerCase().includes(filtrarUvicacion.toLowerCase()) && (filtrarFecha === ''  || item.fecha === filtrarFecha) && item.fruto.toLowerCase().includes(filtrarFruto.toLowerCase()) && item.estado.toLowerCase().includes(filtrarEstado.toLowerCase()) );

  //para mostrar el contenido paginado por botones
  const itemsPerPage = 21; // Número de elementos por página
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtrarBines.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => { setCurrentPage(pageNumber); };
  // ordenamiento de votones
  const totalPages = Math.ceil(filtrarBines.length / itemsPerPage);
  const maxPageButtons = 2; // Número máximo de botones de página hacia adelante y hacia atrás
  const renderPageButtons = () => {
    const pageButtons = [];
    let startPage = Math.max(1, currentPage - maxPageButtons);
    let endPage = Math.min(totalPages, currentPage + maxPageButtons);
    if (startPage > 1) {
        pageButtons.push( <button key={1} onClick={() => paginate(1)}>1</button> );
        if (startPage > 2) { pageButtons.push(<span key={'ellipsis-start'}>...</span>); }
    }
    for (let i = startPage; i <= endPage; i++) {
        pageButtons.push( <button key={i} onClick={() => paginate(i)} className={i === currentPage ? 'active' : ''}> {i} </button> );
    }
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) { pageButtons.push(<span key={'ellipsis-end'}>...</span>); }
        pageButtons.push( <button key={totalPages} onClick={() => paginate(totalPages)}>{totalPages}</button> );
    }
    return pageButtons;
};

  return (

    <div>
      {/*nav cabesera principal */}
      <nav className="mi_navbar-fig">
        <div className="icon_mb displa_flex"> <button className='transparentis' onClick={toggleSidebar}> < FaBars /> </button> </div>
        <div className=" ps-5 alig_center displa_flex " > <Link to="/Administrador/InfoForoAdministrativoAdministrador"> <img className='imagenavbar' src={image_logo} alt="Imagen de navbar" /> </Link>  </div>
        <div className="filters"> {/*Buscador */}
          <div className="filter-item"> {/*Buscador Ubicación */}
            <label htmlFor="filter-location"><FaMapMarkerAlt className='iconiti' /></label>
            <select  id="filter-location"  value={filtrarUvicacion}  onChange={e => setFiltrarUvicacion(e.target.value)}>   
              <option value="">Lugar</option> {uviUvi.map((uvi, index) => (  <option key={index} value={uvi}>{uvi}</option>  ))}
            </select>
          </div>
          <div className="filter-item"> {/*Buscador Fecha */}
            <label htmlFor="filter-date"><FaCalendarAlt className='iconiti' /></label>
            <select id="filter-date" value={filtrarFecha} onChange={e => { setFiltrarFecha(e.target.value)}}>
              <option value="">Fecha</option>  
              {fecFec.sort((a, b) => new Date(b.split('-').reverse().join('/')) - new Date(a.split('-').reverse().join('/')))
              .map((fec, index) => ( <option key={index} value={fec}>{fec}</option> ))} 
            </select>
          </div>  
          <div className="filter-item"> {/*Buscador Fruta */}
            <label htmlFor="filter-fruit"><FaAppleAlt className='iconiti' /></label>
            <select  id="filter-fruit" value={filtrarFruto}  onChange={e => setFiltrarFruto(e.target.value)} >             
              <option value="">Fruta</option> {fruFru.map((fru, index) => (  <option key={index} value={fru}>{fru}</option>  ))}
            </select>
          </div>
          <div className="filter-item"> {/*Buscador Estado */}
            <label htmlFor="filter-fill-status"><FaCheck className='iconiti' /></label>
            <select  id="filter-fill-status" value={filtrarEstado}  onChange={e => setFiltrarEstado(e.target.value)} >
              <option value="">Estado</option> {estEst.map((est, index) => (  <option key={index} value={est}>{est}</option>  ))}
            </select>
          </div>
        </div>
        <div className='cerraSecion displa_flex '>
          {authenticated ? (  <div>  <button className='btn nav-link mb-2 ' onClick={handleLogout} ><FaSignOutAlt />  Cerrar sesión  </button>  </div>  ) : (  <div>  <Link className='btn nav-link mb-2 ' to="/LoginAdmin"><FaSignInAlt />  Iniciar sesión </Link>  </div>  )}
        </div> 
      </nav>
      {/* div despues del nav */}
      <div id='layoutSidenav' className={` ${sidebarVisible ? '' : 'layoutSidenav_nav-hidden'}`}>
        <Sidebar /> {/* barra lateral (Sidebar) */}
        {/* div del contenido que esta al lado de la barra lateral */}
        <div id="layoutSidenav_content" className={`${sidebarVisible ? '' : 'layoutSidenav_content-shifted'}`}>
          <div className='width100porciento'>
            <div className="pagination"> {renderPageButtons()} </div>
            <div className='listBins'>
              <h4 className='tituladmin'>Lista Bines </h4> <br />
              <div className="bin-list">
                <div className="bin-cards">
                  {currentItems.map((item, index) => (
                    <div className="bin-card  ">
                      <div className="bin-info displa_flex   " key={index}  >
                        <div className='displa_flex'>
                          <div className=' displa_flex  icon_mb' ><FaBoxOpen className='iconiti' /></div>
                          <div className='tex' >{item.uvicacion}</div>
                        </div>
                        <div className='tex' >{item.fecha}</div>
                        <div className='tex' >{item.fruto}</div>
                        <div className='tex' >{item.estado}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
};
export default ListaBines;



