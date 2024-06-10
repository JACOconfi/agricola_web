


import React, { useState, useEffect, useRef, useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import image_logo from '../image/logo_sirculo.jpg';

import { FaBars, FaHome, FaSignInAlt, FaSignOutAlt,FaSearch } from "react-icons/fa";
import Sidebar from '../Navbar/Sidebar';

import axios from 'axios';

import { Chart } from 'chart.js/auto';
import { AuthContext } from '../otros/AuthContext';


function ListaCosechadores() {
    
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

  const harvestHistory = [

    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '16-05-2024', entregas: 150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '17-05-2024', entregas: 150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '18-05-2024', entregas: 150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '19-05-2024', entregas: 150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '20-05-2024', entregas: 150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '21-05-2024', entregas: 150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '22-05-2024', entregas: 150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '23-05-2024', entregas: 150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '24-05-2024', entregas: 350 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '25-05-2024', entregas: 50 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '26-05-2024', entregas: 50 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '27-05-2024', entregas: 550 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '28-05-2024', entregas: 250 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '29-05-2024', entregas: 1050 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '30-05-2024', entregas: 2050 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '31-05-2024', entregas: 15 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '01-06-2024', entregas: 150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '02-06-2024', entregas: 150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '03-06-2024', entregas: 150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '04-06-2024', entregas: 350 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '05-06-2024', entregas: 50 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '06-06-2024', entregas: 50 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '07-06-2024', entregas: 550 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '08-06-2024', entregas: 250 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '09-06-2024', entregas: 1050 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '10-06-2024', entregas: 2050 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '11-06-2024', entregas: 15 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '12-06-2024', entregas: 150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '13-06-2024', entregas: 150 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '14-06-2024', entregas: 150 },

    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '15-06-2024', entregas: 50 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '18-06-2024', entregas: 550 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '17-06-2024', entregas: 250 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '16-06-2024', entregas: 250 },

    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '19-06-2024', entregas: 1050 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '20-06-2024', entregas: 550 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '21-06-2024', entregas: 550 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '22-06-2024', entregas: 550 },
    { nombre: 'Juan Lopez Perez', rut: '35754246-6', fecha: '23-06-2024', entregas: 550 },
/* */
    
  ];


    //para la barra de busqueda
    const [busqueda, setBusqueda] = useState('');
    const handbus = (e) => {  setBusqueda(e.target.value); };

    const ultimosDatos = harvestHistory.slice().sort((a, b) => new Date(b.fecha.split('-').reverse().join('/')) - new Date(a.fecha.split('-').reverse().join('/'))).slice(0, 24); // Ordenar por fecha y seleccionar los últimos 24 datos

  const filtrarDatos = ultimosDatos.filter(item => {
    return (
      item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||  
      item.rut.toLowerCase().includes(busqueda.toLowerCase()) ||  
      item.fecha.includes(busqueda) ||  
      item.entregas.toString().includes(busqueda)
    );
  });


/*  ///este es de ocupar  */

  useEffect(() => {

    // datos de la primera accion    
   // const currentDate = new Date();  // Obtener la fecha actual
    const oneDay = 24 * 60 * 60 * 1000;  // Milisegundos en un día
      
    //datos de ahora  // Obtener la última fecha en los datos
      const lastDate = new Date(harvestHistory[harvestHistory.length - 1].fecha.split('-').reverse().join('/'));
    
      //datos de ahora  // Calcular el día de la semana de la última fecha (0: domingo, 1: lunes, ..., 6: sábado)
    const lastDayOfWeek = lastDate.getDay();

/*    // datos de la primera accion  // Calcular fechas de inicio y fin de la semana actual
    const endOfCurrentWeek = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate());
    const startOfCurrentWeek = new Date(endOfCurrentWeek.getTime() - (lastDate.getDay() * oneDay)); */

    //datos de ahora  // Ajustar para que el lunes sea el primer día de la semana
    let startOfCurrentWeek = new Date(lastDate.getTime() - (lastDayOfWeek - 1) * oneDay);
    if (lastDayOfWeek === 0) {
        startOfCurrentWeek = new Date(lastDate.getTime() - 6 * oneDay); // Ajuste para que el lunes sea el primer día
    }


/*    // datos de la primera accion  // Calcular fechas de inicio y fin de la semana anterior
    const startOfPreviousWeek = new Date(startOfCurrentWeek.getTime() - (7 * oneDay));
    const endOfPreviousWeek = new Date(startOfCurrentWeek.getTime() - oneDay); */


    //datos de ahora  // Calcular fechas de inicio y fin de la semana actual y la semana anterior
     const endOfCurrentWeek = new Date(startOfCurrentWeek.getTime() + 6 * oneDay);
     const startOfPreviousWeek = new Date(startOfCurrentWeek.getTime() - 7 * oneDay);
     const endOfPreviousWeek = new Date(startOfPreviousWeek.getTime() + 6 * oneDay);

    //datos de ahora   // Filtrar los datos para la semana actual 
    const currentWeekData1area = harvestHistory.filter(item => {
        const itemDate = new Date(item.fecha.split('-').reverse().join('/')); // Asegurar el formato de fecha
        return itemDate >= startOfCurrentWeek && itemDate <= endOfCurrentWeek;
    });

    //datos de ahora  // Filtrar los datos para la semana anterior
    const previousWeekData2area = harvestHistory.filter(item => {
        const itemDate = new Date(item.fecha.split('-').reverse().join('/')); 
        return itemDate >= startOfPreviousWeek && itemDate <= endOfPreviousWeek;
    });

    // datos de la primera accion
    console.log('Datos de la semana actual:', currentWeekData1area);
    console.log('Datos de la semana anterior:', previousWeekData2area);


    /*   if (allData.length > 0) { */

    //       const thisWeekDay = obtenerSemanaActual(/* allData */ harvestHistory );
    //       const lastWeekDay = obtenerSemanaPasada(/* allData */ harvestHistory );
          
  
          // Código para crear y mostrar los gráficos con los datos filtrados
           //grafico de esta semana
           const chartRef1area = document.getElementById('1areaChart');
           const ctx1area = chartRef1area.getContext('2d');
           if (window.myChart) { window.myChart.destroy(); }
           const fechaThisWeek = currentWeekData1area.map(item => item.fecha);
           const cantidadThisWeek = currentWeekData1area.map(item => item.entregas);
           window.myChart = new Chart(ctx1area, {
               type: 'line', data: { labels: fechaThisWeek,
                   datasets: [{ label: 'Cantidad de Cosecha Esta Semana', data: cantidadThisWeek, backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 }]
               }, options: { scales: { y: { beginAtZero: true } } }
           });

           //grafico de la semana pasada
           const chartRefLastWeek2area = document.getElementById('1areaChartLastWeek');
           const ctxLastWeek2area = chartRefLastWeek2area.getContext('2d');
           if (window.myChartLastWeek) { window.myChartLastWeek.destroy(); }
           const fechaLastWeek = previousWeekData2area.map(item => item.fecha);
           const cantidadLastWeek = previousWeekData2area.map(item => item.entregas);
           window.myChartLastWeek = new Chart(ctxLastWeek2area, {
               type: 'line', data: { labels: fechaLastWeek,
                   datasets: [{ label: 'Cantidad de Cosecha Semana Pasada', data: cantidadLastWeek, backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 }]
               }, options: { scales: { y: { beginAtZero: true } } }
           });


      /* } */
   }, [ /* allData */ ]);


/* ///este es de ocupar */

    

  return (

    <div>

      {/*nav cabesera principal */}
      <nav className="mi_navbar-fig">
        <div className="icon_mb displa_flex"> <button className='transparentis' onClick={toggleSidebar}> < FaBars /> </button> </div>
        <div className=" ps-5 " > <Link to="/Administrador/InfoForoAdministrativoAdministrador"> <img className='imagenavbar' src={image_logo} alt="Imagen de navbar" /> </Link>  </div>
        
        <div className="texto_nav">  <h3 className='titulopera'>Lista Cosechadores</h3>  </div>

        <div className="search-container">
          <FaSearch className="search-icon" />
          <input className='barra_bus_oper' type="text" placeholder="Buscar cosechador" value={busqueda} onChange={handbus} />
        </div>

        <div className='cerraSecion displa_flex '>
          {authenticated ? (  <div>  <button className='btn nav-link mb-2 ' onClick={handleLogout} ><FaSignOutAlt />  Cerrar sesión  </button>  </div>  ) : (  <div>  <Link className='btn nav-link mb-2 ' to="/LoginAdmin"><FaSignInAlt />  Iniciar sesión </Link>  </div>  )}
        </div> 

      </nav>

      {/* div despues del nav */}
      <div id='layoutSidenav' className={` ${sidebarVisible ? '' : 'layoutSidenav_nav-hidden'}`}>
        {/* barra lateral (Sidebar) */}
        <Sidebar />

        {/* div del contenido que esta al lado de la barra lateral */}
        <div id="layoutSidenav_content" className={`${sidebarVisible ? '' : 'layoutSidenav_content-shifted'}`}>
            {/*  este es el div de la informacion: pedro juan y diego */}

            {/* contenido mostrado en tablas */}
            <div>
                <h4 className='tituladmin'>Eficiencia cosechadores </h4>
                <br/>
                
                <div /* className="grid-container" */ className='displa_flex'>

                    <div className="table1">
                        <div className="tablivilil3" style={{'marginTop':'0px','marginBottom':'0px','height':'680px'}}>
                            <h5 className='tit_lis_oper' > Lista Cosechadores</h5>
                            <table >
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
                                
                                    {filtrarDatos.map((item, index) => (
                                        <tr key={index} >
                                            <td className='displa_flex separound_spas'>
                                                <div className='efiloghome isquier'><FaHome /></div>
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

                    <div className='table1'  style={{'width':'600px','height':'680px' /* ,  'marginBottom':'40px','marginRight':'40px' */ }}  >

                        <div /* style={{'width':'436px','height':'276px','marginBottom':'16px'}}*/ /* style={{'marginBottom':'16px'}} */ >
                            <div className="col-xl-10 "  /* style={{'width':'504px','height':'316px','marginBottom':'16px'}} */  >
                                <div className="card mb-3">
                                    <div className="card-header tit_lis_oper">  Esta Semana  </div>
                                    <div className="card-body ">  <canvas  /* id="areaChart" */  id='1areaChart'  /* id='chartCurrentWeek' */  className="chartjs-render-monitor graficsic"></canvas>  </div>
                                </div>
                            </div>
                        </div>

                        <div >
                            <div className="col-xl-10 " /*  style={{'width':'504px','height':'316px','marginBottom':'16px'}} */  >
                                <div className="card mb-3 ">
                                    <div className="card-header tit_lis_oper">  Semana Pasada </div>
                                    <div className="card-body ">  <canvas /*  id="areaChartLastWeek" */  id='1areaChartLastWeek' /* id='chartPreviousWeek' */   className="chartjs-render-monitor graficsic "></canvas>  </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>               
            </div>
        </div>
      </div>
    </div>

  )
};
export default ListaCosechadores;




