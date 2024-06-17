

import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image_logo from '../image/logo_sirculo.jpg';
import { FaBars, FaHome, FaSignInAlt, FaSignOutAlt,FaSearch, FaFileDownload } from "react-icons/fa";
import Sidebar from '../Navbar/Sidebar';
import axios from 'axios';
import { Chart } from 'chart.js/auto';
import { AuthContext } from '../otros/AuthContext';

import { jsPDF } from 'jspdf';

function TenRendimientoCosecha() {
  if (!window.location.pathname.endsWith('/')) { window.location.href = window.location.pathname + '/'; }
  const [sidebarVisible, setSidebarVisible] = useState(true); /* para esconder y hacer aparecer el sidebar */
  const toggleSidebar = () => { setSidebarVisible(!sidebarVisible); };

/*  const [datosRendiCose, setDatosRendiCose] = useState([]);
  const [error, setError] = useState(''); 
  
  useEffect(() => {
    const obtenerDatos = async () => {
      try { const resultado = await axios.get('/api/user'); // Ruta de la API para obtener los datos del usuario ejemplo si es de una url seria https://restcountries.com/v3.1/all
      if (!resultado.data || resultado.data.length === 0) {
        throw new Error('No se obtuvieron datos de la API');
      } // esto es para ver que los datos sean validos  
        setDatosRendiCose(resultado.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setError('Error al obtener los datos: ' + error.message);  
      }
    };

    obtenerDatos();
  }, []);

  /*    if (!datosRendiCose) {  return <p>Cargando...</p>;   }  */
  
/*  if (error) { return <div>{error}</div>; }  */

  const { authenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log('Cerrando sesión...');
    localStorage.clear(); // Limpiar el almacenamiento local
    logout();
    navigate('/LoginAdmin');
  };
  const rendimientosCosecha = [
    { fruta: 'Manzana roja', fecha: '27-05-2024', entregas: 2500, bines: 5 },
    { fruta: 'Manzana roja', fecha: '28-05-2024', entregas: 2000, bines: 4 },
    { fruta: 'Manzana roja', fecha: '29-05-2024', entregas: 2400, bines: 4 },
    { fruta: 'Manzana roja', fecha: '30-05-2024', entregas: 2300, bines: 4 },
    { fruta: 'Manzana roja', fecha: '31-05-2024', entregas: 2600, bines: 5 },
    { fruta: 'Manzana verde', fecha: '01-06-2024', entregas: 2500, bines: 5 },
    { fruta: 'Manzana verde', fecha: '02-06-2024', entregas: 2000, bines: 4 },
    { fruta: 'Manzana verde', fecha: '03-06-2024', entregas: 2400, bines: 4 },
    { fruta: 'Manzana verde', fecha: '04-06-2024', entregas: 2300, bines: 4 },
    { fruta: 'Manzana verde', fecha: '05-06-2024', entregas: 2600, bines: 5 },
    { fruta: 'Manzana verde', fecha: '06-06-2024', entregas: 2500, bines: 5 },
    { fruta: 'Manzana verde', fecha: '07-06-2024', entregas: 2000, bines: 4 },
    { fruta: 'Manzana verde', fecha: '08-06-2024', entregas: 2400, bines: 4 },
    { fruta: 'Manzana verde', fecha: '09-06-2024', entregas: 2300, bines: 4 },
    { fruta: 'Manzana verde', fecha: '10-06-2024', entregas: 2600, bines: 5 },
    { fruta: 'cerezas', fecha: '11-06-2024', entregas: 2500, bines: 5 },
    { fruta: 'cerezas', fecha: '12-06-2024', entregas: 2000, bines: 4 },
    { fruta: 'cerezas', fecha: '13-06-2024', entregas: 2400, bines: 4 },
    { fruta: 'cerezas', fecha: '14-06-2024', entregas: 2300, bines: 4 },
    { fruta: 'cerezas', fecha: '15-06-2024', entregas: 2600, bines: 5 },
    { fruta: 'cerezas', fecha: '16-06-2024', entregas: 2400, bines: 4 },
    { fruta: 'cerezas', fecha: '17-06-2024', entregas: 2300, bines: 4 },
    { fruta: 'cerezas', fecha: '18-06-2024', entregas: 2600, bines: 5 },
    { fruta: 'cerezas', fecha: '19-06-2024', entregas: 2400, bines: 4 },
    { fruta: 'cerezas', fecha: '20-06-2024', entregas: 2300, bines: 4 },
    { fruta: 'cerezas', fecha: '21-06-2024', entregas: 2600, bines: 5 },
    { fruta: 'cerezas', fecha: '22-06-2024', entregas: 1500, bines: 3 },
    { fruta: 'cerezas', fecha: '23-06-2024', entregas: 2000, bines: 4 }
  ]

    const ultimosDatos = rendimientosCosecha.slice().sort((a, b) => new Date(b.fecha.split('-').reverse().join('/')) - new Date(a.fecha.split('-').reverse().join('/'))).slice(0, 24); // Ordenar por fecha y seleccionar los últimos 24 datos
  useEffect(() => {
    const oneDay = 24 * 60 * 60 * 1000;  // Milisegundos en un día
      //datos de ahora  // Obtener la última fecha en los datos
    const lastDate = new Date(rendimientosCosecha[rendimientosCosecha.length - 1].fecha.split('-').reverse().join('/'));
      //datos de ahora  // Calcular el día de la semana de la última fecha (0: domingo, 1: lunes, ..., 6: sábado)
    const lastDayOfWeek = lastDate.getDay();
      //datos de ahora  // Ajustar para que el lunes sea el primer día de la semana
    let startOfCurrentWeek = new Date(lastDate.getTime() - (lastDayOfWeek - 1) * oneDay);
    if (lastDayOfWeek === 0) {
        startOfCurrentWeek = new Date(lastDate.getTime() - 6 * oneDay); // Ajuste para que el lunes sea el primer día
    }
      //datos de ahora  // Calcular fechas de inicio y fin de la semana actual y la semana anterior
    const endOfCurrentWeek = new Date(startOfCurrentWeek.getTime() + 6 * oneDay);
    const startOfPreviousWeek = new Date(startOfCurrentWeek.getTime() - 7 * oneDay);
    const endOfPreviousWeek = new Date(startOfPreviousWeek.getTime() + 6 * oneDay);
      //datos de ahora   // Filtrar los datos para la semana actual 
    const currentWeekData1area = rendimientosCosecha.filter(item => {
        const itemDate = new Date(item.fecha.split('-').reverse().join('/')); // Asegurar el formato de fecha
        return itemDate >= startOfCurrentWeek && itemDate <= endOfCurrentWeek;
    });
      //datos de ahora  // Filtrar los datos para la semana anterior
    const previousWeekData2area = rendimientosCosecha.filter(item => {
        const itemDate = new Date(item.fecha.split('-').reverse().join('/')); 
        return itemDate >= startOfPreviousWeek && itemDate <= endOfPreviousWeek;
    });
      // datos de la primera accion
    console.log('Datos de la semana actual:', currentWeekData1area);
    console.log('Datos de la semana anterior:', previousWeekData2area);
          // Código para crear y mostrar los gráficos con los datos filtrados
           const chartRef1area = document.getElementById('1areaChart'); //grafico de esta semana
           const ctx1area = chartRef1area.getContext('2d');
           if (window.myChart) { window.myChart.destroy(); }
           const fechaThisWeek = currentWeekData1area.map(item => item.fecha);
           const cantidadThisWeek = currentWeekData1area.map(item => item.entregas);
           window.myChart = new Chart(ctx1area, {
               type: 'line', data: { labels: fechaThisWeek,
                   datasets: [{ label: 'Cantidad de Cosecha Esta Semana', data: cantidadThisWeek, backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 }]
               }, options: { scales: { y: { beginAtZero: true } } }
           });
           const chartRefLastWeek2area = document.getElementById('1areaChartLastWeek'); //grafico de la semana pasada
           const ctxLastWeek2area = chartRefLastWeek2area.getContext('2d');
           if (window.myChartLastWeek) { window.myChartLastWeek.destroy(); }
           const fechaLastWeek = previousWeekData2area.map(item => item.fecha);
           const cantidadLastWeek = previousWeekData2area.map(item => item.entregas);
           window.myChartLastWeek = new Chart(ctxLastWeek2area, {
               type: 'line', data: { labels: fechaLastWeek,
                   datasets: [{ label: 'Cantidad de Cosecha Semana Pasada', data: cantidadLastWeek, backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 }]
               }, options: { scales: { y: { beginAtZero: true } } }
           });
   }, [  ]);

   const [formatoDescarga, setFormatoDescarga] = useState('');
    // Función para descargar el reporte en formato PDF o en CSV
    const descargarReporte = () => {
        const fechaActual = new Date();
        const dia = fechaActual.getDate().toString().padStart(2, '0');
        const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
        const anio = fechaActual.getFullYear();
        const fechaFormateada = `${dia}-${mes}-${anio}`;

        if (formatoDescarga === 'pdf') {
          const doc = new jsPDF();
          doc.text('Reporte de Información', 20, 10);
          let y = 20;
          rendimientosCosecha.forEach(item => {
            doc.text(`Fruta: ${item.fruta}, Fecha: ${item.fecha}, Entregas: ${item.entregas}, Bines: ${item.bines}`, 20, y);
            y += 10;
          });
          doc.save(`reporte_${fechaFormateada}.pdf`);
        } else if (formatoDescarga === 'csv') {
          const csvData = [
            ['Fruta', 'Fecha', 'Entregas', 'Bines'],
            ...rendimientosCosecha.map(item => [item.fruta, item.fecha, item.entregas, item.bines])
          ];
          const csvContent = csvData.map(row => row.join(',')).join('\n');
          const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `reporte_${fechaFormateada}.csv`;
          link.click();
        } else { alert('Por favor selecciona un formato de descarga.'); }
      };

  return (
    <div>
      <nav className="mi_navbar-fig"> {/*nav cabesera principal */}
        <div className="icon_mb displa_flex"> <button className='transparentis' onClick={toggleSidebar}> < FaBars /> </button> </div>
        <div className=" ps-5 " > <Link to="/Administrador/InfoForoAdministrativoAdministrador"> <img className='imagenavbar' src={image_logo} alt="Imagen de navbar" /> </Link>  </div>
        <div className="texto_nav">  <h3 className='titulopera'>Tendencia</h3>  </div>
        <div className='cerraSecion displa_flex '>
          {authenticated ? (  <div>  <button className='btn nav-link mb-2 ' onClick={handleLogout} ><FaSignOutAlt />  Cerrar sesión  </button>  </div>  ) : (  <div>  <Link className='btn nav-link mb-2 ' to="/LoginAdmin"><FaSignInAlt />  Iniciar sesión </Link>  </div>  )}
        </div> 
      </nav>
      {/* div despues del nav */}
      <div id='layoutSidenav' className={` ${sidebarVisible ? '' : 'layoutSidenav_nav-hidden'}`}>
        <Sidebar /> {/* barra lateral (Sidebar) */}
        {/* div del contenido que esta al lado de la barra lateral */}
        <div id="layoutSidenav_content" className={`${sidebarVisible ? '' : 'layoutSidenav_content-shifted'}`}>
            <div>
                <h4 className='tituladmin'>Rendiminetos de Cosecha </h4>
                <br/>
                <div  className='displa_flex'>
                    <div className="table1">
                        <div className="tablivilil3 tablitaCambiEfi" >
                            <div className="search-container" >
                                <select className='selectformatodescarga'  value={formatoDescarga} onChange={(e) => setFormatoDescarga(e.target.value)}>
                                    <option value="">Selecciona un formato</option>
                                    <option value="pdf">PDF</option>
                                    <option value="csv">CSV</option>
                                </select>
                            <button className='btn nav-link mb-2 separound_spas buttondescargar'  
                             onClick={descargarReporte} >  <FaFileDownload  /> Descargar  </button>
                                 <h5 className='tit_lis_oper' >Cosecha </h5>                               
                            </div>
                            <table >
                                <thead>
                                    <tr>
                                        <th className='p-2'>Fruta</th>
                                        <th className='p-2'>Fecha</th>
                                        <th className='p-2'>Entregas</th>
                                        <th className='p-2'>Bines</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ultimosDatos.map((item, index) => (
                                        <tr key={index} >
                                            <td className='displa_flex separound_spas'>
                                                <div className='efiloghome isquier'><FaHome /></div>
                                                <div className=' derech' > {item.fruta} </div>
                                            </td>
                                            <td>{item.fecha} </td>
                                            <td> Total: {item.entregas} </td>
                                            <td>Bins total: {item.bines}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='table1 div_de_losgraficos'   >
                        <div  >
                            <div className="col-xl-10 "    >
                                <div className="card mb-3">
                                    <div className="card-header tit_lis_oper">  Esta Semana  </div>
                                    <div className="card-body ">  <canvas id='1areaChart' className="chartjs-render-monitor graficsic"></canvas>  </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="col-xl-10 "   >
                                <div className="card mb-3 ">
                                    <div className="card-header tit_lis_oper">  Semana Pasada </div>
                                    <div className="card-body ">  <canvas id='1areaChartLastWeek' className="chartjs-render-monitor graficsic "></canvas>  </div>
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
export default TenRendimientoCosecha;




