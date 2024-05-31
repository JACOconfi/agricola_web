import React, { useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from '../otros/AuthContext';

import { Link, useNavigate } from 'react-router-dom';
import image_logo from '../image/logo_sirculo.jpg';

import { FaBars, FaAngleDown, FaAngleRight, FaUserPlus, FaHome, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

import axios from 'axios';

const InfoForoAdministrativoAdministrador = () =>  {
    
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

const [userData, setUserData] = useState(null);
const [error, setError] = useState(null); // ni idea de si es que funcione, esto era para  que el usuario vea un mensaje por si es que tiene un error al obtener los datos

/*

useEffect(() => {
    const obtenerDatos = async () => {
      try { const resultado = await axios.get('/api/user'); // Ruta de la API para obtener los datos del usuario ejemplo si es de una url seria https://restcountries.com/v3.1/all
      
      if (!resultado.data || resultado.data.length === 0) {
        throw new Error('No se obtuvieron datos de la API');
      } // esto es para ver que los datos sean validos
      
        setUserData(resultado.data);
      } catch (error) {
        console.error(error);
        setError('Error al obtener los datos: ' + error.message);  // esta linea ni idea de si es que funcione
      }
    };

    obtenerDatos();
  }, []);
*/



/*

    if (!userData) {
    return <p>Cargando...</p>;  //esta o  Otra lógica de manejo de carga
  }

*/


/*
  
if (error) {
  return <div>{error}</div>;
} // esta linea ni idea de si es que funcione

*/


  const { authenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Cerrando sesión...');
    localStorage.clear(); // Limpiar el almacenamiento local
    logout();
    navigate('/LoginAdmin');
  };

  

  /*
const handleLogout = () => {
  console.log('Cerrando sesión...');
  localStorage.clear(); // Limpiar el almacenamiento local
  window.location.href = '/LoginAdmin'; // Redirigir al usuario a la página de inicio de sesión
};
*/


  const harvestHistory = [
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '16-03-1959', entregas:150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '16-03-1959', entregas:150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '16-03-1959', entregas:150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '16-03-1959', entregas:150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '16-03-1959', entregas:150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '16-03-1959', entregas:150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '16-03-1959', entregas:150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '16-03-1959', entregas:150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '16-03-1959', entregas:150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '16-03-1959', entregas:150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '16-03-1959', entregas:150 }
  ];

  const rendimientosSemanal = [
    '+25%',
    '+20%',
    '+35%',
    '+39%',
    '+26%',
    '+15%',
    '+23%',
    '+24%',
    '+17%',
    '+25%'
  ];

  const rendimientosCosecha = [
    {fruta: 'cerezas', fecha: '11-10-2025',entregas: 2500, bines: 5},
    {fruta: 'cerezas', fecha: '12-10-2025',entregas: 2000, bines: 4},
    {fruta: 'cerezas', fecha: '13-10-2025',entregas: 2400, bines: 4},
    {fruta: 'cerezas', fecha: '14-10-2025',entregas: 2300, bines: 4},
    {fruta: 'cerezas', fecha: '15-10-2025',entregas: 2600, bines: 5},
    
    //
    {fruta: 'cerezas', fecha: '13-10-2025',entregas: 2400, bines: 4},
    {fruta: 'cerezas', fecha: '14-10-2025',entregas: 2300, bines: 4},
    {fruta: 'cerezas', fecha: '15-10-2025',entregas: 2600, bines: 5},
    {fruta: 'cerezas', fecha: '13-10-2025',entregas: 2400, bines: 4},
    {fruta: 'cerezas', fecha: '14-10-2025',entregas: 2300, bines: 4},
    {fruta: 'cerezas', fecha: '15-10-2025',entregas: 2600, bines: 5},
    
    //
    {fruta: 'cerezas', fecha: '16-10-2025',entregas: 1500, bines: 3},
    {fruta: 'cerezas', fecha: '17-10-2025',entregas: 2000, bines: 4}
  ]


  const BinRegistry = [
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },


    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    



    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' },
    { nombre: 'Fundo el Salto', fecha: '16/03/1959', fruta:'Manzana', estado: 'lleno' }
  ];


       // Ordenar los datos de forma descendente por fecha
       const sortedHistory = harvestHistory.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
       // Invertir el orden de los datos para mostrar el más reciente arriba y el más antiguo abajo
       const reversedHistory = sortedHistory.reverse();





  return (

    <div>


          {/*nav cabesera principal */}
          <nav className="mi_navbar-fig">
              <div className="icon_mb displa_flex"> <button className='transparentis' onClick={toggleSidebar}> < FaBars /> </button> </div>
              <div className=" ps-5 " > <Link to="/Administrador/InfoForoAdministrativoAdministrador"> <img className='imagenavbar' src={image_logo} alt="Imagen de navbar"  /> </Link>  </div>
              <div className="texto_nav">  
                <div className="flex-container">  
                  <span className='etiRolUser'>   {/* {userData.rol}  */} cosechador </span>  
                  <span className='etiNameUser'> juan mendes {/*  {userData.nombre}! */}</span> 
                </div>  
                <div> <img /* src={userData.codigoQR} */ alt="Código QR" /> </div> 
               
              </div>
              <div className='cerraSecion displa_flex '> 
           {/*    <Link className='nav-link' onClick={handleLogout}>Cerrar Sesión</Link> */}

                {authenticated ? (
                  <div>
                     <button className='btn nav-link mb-2 ' onClick={handleLogout} ><FaSignOutAlt />  Cerrar sesión  </button>  
                  </div>
                ) : (
                  <div>
                     <Link className='btn nav-link mb-2 '  to="/LoginAdmin"><FaSignInAlt />  Iniciar sesión </Link> 
                  </div>
                )}

              </div> {/* Nuevo botón para cerrar sesión */}
                   
          </nav>


{/* 
          <div className="texto_nav">
          <div className="flex-container">
            <div>
              <p>Cargo: {userData.cargo}</p>
            </div>
            <div>
              <p>Rol: {userData.rol}</p>
            </div>
          </div>
          <img src={userData.codigoQR} alt="Código QR" />
        </div>
*/}




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
                          <Link className='nav-link operplus' to="/Administrador/InfoForoAdministrativoAdministrador/Operadores" >
                              <div className='iconplus'> <FaUserPlus /></div>
                              <div>Operadores QR  </div>
                          </Link>

                      </div>
                  </nav>
              </div>

              {/* div del contenido que esta al lado de la barra lateral */}
              <div id="layoutSidenav_content" className={`${sidebarVisible ? '' : 'layoutSidenav_content-shifted'}`}>
                 {/*  este es el div de la informacion: pedro juan y diego */}

                 
                {/* contenido mostrado en tablas */}

                <div className="grid-container">
                  <div className='panimibor'>
                  <div className="table1">
                    
                    <div className="tablivilil1">
                      <h5>Historial de cosecha</h5>
                      <table>
                        {/*   <!-- Contenido de la tabla 1 --> */}
                        <thead>
                          <tr>
                            <th className='p-2'>Nombre</th>
                            <th className='p-2'>Rut</th>
                            <th className='p-2'>Fecha</th>
                            <th className='p-2'>Entregas</th>
                          </tr>
                        </thead>
                        <tbody>
                          {harvestHistory.map((item, index) => (
                            <tr key={index} >
                              <td className='displa_flex separound_spas'>
                                <div className='efiloghome isquier'><FaHome  /></div> 
                                <div className=' derech' > {item.nombre} </div> 
                              </td>
                              <td>{item.rut} </td>
                              <td>{item.fecha} </td>
                              <td>{item.entregas}</td>
                            </tr>
                          ))}
                        </tbody>

                      </table>
                    </div>

                  </div>
                  <div className="table2">
                    
                    <div className="tablivilil2">
                        <h4>Rendimientos Semanales</h4>
                        <table>
                          {/*   <!-- Contenido de la tabla 2 --> */}
                          <tbody>
                            {rendimientosCosecha.map((item, index) => (
                              <tr key={index} >
                                <td className='displa_flex separound_spas'>
                                  <div className='efiloghome isquier' > <FaHome /> </div>
                                  <div className=' derech' > {item.fruta} </div>
                                </td>
                                <td>{item.fecha}</td>
                                <td>{item.entregas}</td>
                                <td>{item.bines}</td>
                              </tr>
                            ))}
                          </tbody>

                        </table>
                      </div>


                  </div>
                  </div>
                  <div className="table3">
                    
                    <div className="tablivilil3">
                        <h5 >Registro bines</h5>
                        <table>
                          {/*   <!-- Contenido de la tabla 3 --> */}

                          <thead>
                            <tr>
                              <th className='p-2'>Nombre</th>
                              <th className='p-2'>Fecha</th>
                              <th className='p-2'>Frutas</th>
                              <th className='p-2'>Estado</th>
                            </tr>
                          </thead>
                          <tbody>
                            {BinRegistry.map((item, index) => (
                              <tr key={index}>
                                <td>{item.nombre} </td>
                                <td>{item.fecha} </td>
                                <td>{item.fruta} </td>
                                <td>{item.estado}</td>
                              </tr>
                            ))}
                          </tbody>

                        </table>
                      </div>



                  </div>
                </div>

              </div>

          </div>

      
    </div>

)
};
export default InfoForoAdministrativoAdministrador;

