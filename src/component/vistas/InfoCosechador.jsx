
import React,{ useState, useEffect, useRef, useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import image_logo from '../image/logo_sirculo.jpg';

import { FaBars, FaAngleDown, FaAngleRight, FaUserPlus, FaHome, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

import axios from 'axios';


import { Chart } from 'chart.js/auto';


import { AuthContext } from '../otros/AuthContext';


/*
import { Chart as ChartJS } from 'chart.js/auto';
*/

const InfoCosechador = () =>  {

    
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

// esto es para el cierre de secion
const { authenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Cerrando sesión...');
    localStorage.clear(); // Limpiar el almacenamiento local
    logout();
    navigate('/LoginCosechador');
  };

/*
const handleLogout = () => {
  console.log('Cerrando sesión...');
  localStorage.clear(); // Limpiar el almacenamiento local
  window.location.href = '/LoginCosechador'; // Redirigir al usuario a la página de inicio de sesión
};
*/


  const harvestHistory = [
    { fecha: '14-02-1958', cantidad: 100 },
    { fecha: '16-03-1959', cantidad: 90 },
    { fecha: '18-04-1961', cantidad: 70 },
    { fecha: '20-05-1962', cantidad: 80 },
    //
    { fecha: '16-03-1959', cantidad: 90 },
    { fecha: '18-04-1961', cantidad: 70 },
    { fecha: '20-05-1962', cantidad: 80 },
    { fecha: '16-03-1959', cantidad: 90 },
    { fecha: '18-04-1961', cantidad: 70 },
    { fecha: '20-05-1962', cantidad: 80 },
    { fecha: '16-03-1959', cantidad: 90 },
    { fecha: '18-04-1961', cantidad: 70 },
    { fecha: '20-05-1962', cantidad: 80 },
    { fecha: '16-03-1959', cantidad: 90 },
    { fecha: '18-04-1961', cantidad: 70 },
    { fecha: '20-05-1962', cantidad: 80 },

    { fecha: '16-03-1959', cantidad: 90 },
    { fecha: '18-04-1961', cantidad: 70 },
    { fecha: '20-05-1962', cantidad: 80 },
    { fecha: '16-03-1959', cantidad: 90 },
    { fecha: '18-04-1961', cantidad: 70 },
    { fecha: '20-05-1962', cantidad: 80 },
    //
    { fecha: '06-11-1975', cantidad: 120 }
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
    //
    '+35%',
    '+39%',
    '+26%',
    '+15%',
    '+23%',
    '+24%',
    '+17%',
    '+35%',
    '+39%',
    '+26%',
    '+15%',
    '+23%',
    '+24%',
    '+17%',
    '+35%',
    '+39%',
    '+26%',
    '+15%',
    '+23%',
    '+24%',
    '+17%',
    //
    '+25%'
  ];


       // Ordenar los datos de forma descendente por fecha
       const sortedHistory = harvestHistory.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
       // Invertir el orden de los datos para mostrar el más reciente arriba y el más antiguo abajo
       const reversedHistory = sortedHistory.reverse();



  /* parte para el grafico */
  useEffect(() => {
    const chartRef = document.getElementById('areaChart'); // Obtener el elemento canvas para el gráfico
    const ctx = chartRef.getContext('2d');

    // Destruir el gráfico existente si ya está creado
    if (window.myChart) {
        window.myChart.destroy();
    }

    const fecha = sortedHistory.map(item => item.fecha);
    const cantidad = sortedHistory.map(item => item.cantidad);

    // Crear el nuevo gráfico
    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: fecha,
            datasets: [{  label: 'Cantidad de Cosecha',  data: cantidad,  backgroundColor: 'rgba(54, 162, 235, 0.2)',  borderColor: 'rgba(54, 162, 235, 1)',  borderWidth: 1  }]
        },
        options: {  scales: {  y: {  beginAtZero: true  }  }  }
    });
}, [sortedHistory]);
  


  return (

    <div>


          {/*nav cabesera principal */}
          <nav className="mi_navbar-fig">
              <div className="icon_mb displa_flex"> <button className='transparentis' onClick={toggleSidebar}> < FaBars /> </button> </div>
              <a className=" ps-5 " ><img className='imagenavbar' src={image_logo} alt="Imagen de navbar" />  </a>
              <div className="texto_nav">  
                <div className="flex-container">  
                  <span className='etiRolUser'>   {/* {userData.rol}  */} Cosechador </span>  
                  <span className='etiNameUser'> juan mendes {/*  {userData.nombre}! */}</span> 
                </div>  
                <div> <img /* src={userData.codigoQR} */  alt="Código QR" /> </div> 
                
              </div> 
              <div className='cerraSecion displa_flex '> 
          {/*     <Link className='nav-link' onClick={handleLogout}>Cerrar Sesión</Link>  */}

                {authenticated ? (
                  <div>
                    <button className='btn nav-link mb-2 ' onClick={handleLogout}><FaSignOutAlt />  Cerrar sesión</button>
                  </div>
                ) : (
                  <div>
                    <Link className='btn nav-link mb-2 ' to="/LoginCosechador"><FaSignInAlt />  Iniciar sesión</Link>
                    
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
                          <a className='nav-link operplus'>
                              <div className='iconplus'> <FaUserPlus /></div>
                              <div> Operadores QR </div>
                          </a>

                      </div>
                  </nav>
              </div>

              {/* div del contenido que esta al lado de la barra lateral */}
              <div id="layoutSidenav_content" className={`${sidebarVisible ? '' : 'layoutSidenav_content-shifted'}`}>
                 {/*  este es el div de la informacion: pedro juan y diego */}
              
              <div className="table1">
                <div className='tabla-scrollable'>
                  <h4>Historial de cosecha</h4>
                <table className='tabla-cosecha'>
                  <thead>
                    <tr>
                      
                      <th className='p-2'><h3>Dia</h3></th>
                      <th className='p-2'><h3>Cantidad</h3></th>
                    </tr>
                  </thead>
                  <tbody>
                    {reversedHistory.map((item, index) => (
                      <tr key={index}>

                        
                        <td>{item.fecha} </td>
                        <td>{item.cantidad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
                </div>

                {/* simular parte de al lado */}

                <div className="table1">
                  <div className='lista-rendimientos'>
                    <h5>Rendimientos Semanales</h5>
                    <table className='tabla-contenid_rendimien' > 
                      <tbody>
                      {rendimientosSemanal.map((rendimiento, index) => (
                        <tr key={index} > 
                          <td> 
                            <div className='efiloghome isquier' > <FaHome /> </div> 
                            <div className=' derech' > {`Rendimiento Semanal = ${rendimiento}`} </div>  
                          </td> 
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                  </div>





           {/*        <div>
                    <div>
                    <canvas id="areaChart" width={400} height={200}></canvas>
                    </div>
                  </div>

            */}



                   
                      <div className="col-xl-5  centrgraficsic"> 
                        <div className="card mb-3 ">
                          <div className="card-header">  Area grafica  </div>

                          <div  className="card-body ">
                         
                            <canvas id="areaChart"  className="chartjs-render-monitor graficsic"></canvas>
                          </div>

                        </div>
                      </div> 
                    
              


              </div>

          </div>


        
    </div>

)
};
export default InfoCosechador;







