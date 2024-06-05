
import React, { useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from '../otros/AuthContext';

import { Link, useNavigate } from 'react-router-dom';
import image_logo from '../image/logo_sirculo.jpg';

import { FaBars, FaSignInAlt, FaSignOutAlt, FaPencilAlt, FaUserShield, FaSearch } from "react-icons/fa";
import Sidebar from '../Navbar/Sidebar';

import axios from 'axios';

// Componente  Uvicaciones
function Uvicaciones() {

  /* para cuando se escriba la url, pues al final termine con / */
  if (!window.location.pathname.endsWith('/')) {
    window.location.href = window.location.pathname + '/';
  }
  /* para esconder y hacer aparecer el sidebar */
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const [uvicaciones, setUvicaciones] = useState([]);
  const [nombre, setNombre] = useState('');
  const [modoEdicion, setModoEdicion] = useState(false);
  const [uvicacionEditada, setUvicacionEditada] = useState(null);

  const [mostrarModal, setMostrarModal] = useState(false);

  const [idUvicacionEliminar, setIdUvicacionEliminar] = useState(null);
  const [direccionEliminar, setDireccionEliminar] = useState(null);

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

  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();  
  };

  const esDireccionValida = (nombre) => {
    const regexDireccion = /^[a-zA-Z0-9\s\.,#-]*$/; // Expresión regular que permite letras, números y algunos caracteres especiales

    if (!regexDireccion.test(nombre)) {
      return false;
    }
    return true;
  }

  const { authenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Cerrando sesión...');
    localStorage.clear(); // Limpiar el almacenamiento local
    logout();
    navigate('/LoginAdmin');
  };

  // Función para agregar una uvicacion
  const agregarUvicaciones = () => {
    // Validar que el nombre no esté vacío
    if (nombre.trim() === '') {
      setError('Por favor, ingresa una uvicación');
      return;
    }
    if (nombre.length < 6) {
      setError('La uvicación deve ser mayor o igual a 6 digitos');
      return;
    }
    if (nombre.length > 40) {
      setError('La uvicación deve ser menor o igual  a 40 digitos');
      return;
    }
    if (!esDireccionValida(nombre)) {
       setError('La dirección solo puede contener letras, números y algunos caracteres especiales como estos   . , # -');
      
       return;
     }

    const nuevaUvicacion = {
      id: Math.random().toString(),
      nombre
    };
    setUvicaciones([...uvicaciones, nuevaUvicacion]);
    setNombre('');
    setError('');
  };

  // Función para editar una uvicacion
  const editarUvicacion = () => {
    // Validar que el nombre  no esté vacío
    if (nombre.trim() === '') {
      setError('Por favor, ingresa una dirección');
      return;
    }
    if (nombre.length < 6) {
      setError('La dirección deve ser mayor o igual a 6 digitos');
      return;
    }
    if (nombre.length > 40) {
      setError('La dirección deve ser menor o igual  a 40 digitos');
      return;
    }
    if (!esDireccionValida(nombre)) { 
       setError('La dirección solo puede contener letras, números y algunos caracteres especiales  como estos . , # -');
      
       return;
     }

    const uvicacionesActualizadas = uvicaciones.map((uvicacion) => {
      if (uvicacion.id === uvicacionEditada.id) {
        return { ...uvicacion, nombre };
      }
      return uvicacion;
    });
    setUvicaciones(uvicacionesActualizadas);
    setNombre('');
    setModoEdicion(false);
    setUvicacionEditada(null);
    setError('');
  };

  // Función para eliminar una uvicacion
  const eliminarUvicacion = () => {
    const uvicacionesActualizadas = uvicaciones.filter((uvicacion) => uvicacion.id !== idUvicacionEliminar);
    setUvicaciones(uvicacionesActualizadas);
    setMostrarModal(false);
    setIdUvicacionEliminar(null);
  };

  // Función para mostrar el modal de eliminación
  const mostrarModalEliminar = (id) => {
    const direccion = uvicaciones.find((uvicacion) => uvicacion.id === id);
    setDireccionEliminar(direccion);
    setMostrarModal(true);
    setIdUvicacionEliminar(id);
  };

  // Función para activar el modo de edición de una uvicacion
  const activarModoEdicion = (uvicacion) => {
    setModoEdicion(true);
    setUvicacionEditada(uvicacion);
    setNombre(uvicacion.nombre);
  };

  // Función para cancelar la eliminación
  const cancelarEliminacion = () => {
    setMostrarModal(false);
    setIdUvicacionEliminar(null);
    setDireccionEliminar(null); // Limpiar la uvicacion seleccionada
  };

  //para la barra de busqueda
  const [busqueda, setBusqueda] = useState('');
  const handbus = (e) => {
    setBusqueda(e.target.value);
  };
  
  return (
    <div>
      {/*nav cabesera principal */}
      <nav className="mi_navbar-fig">
        <div className="icon_mb displa_flex"> <button className='transparentis' onClick={toggleSidebar}> < FaBars /> </button> </div>
        <div className=" ps-5 " ><Link to="/Administrador/InfoForoAdministrativoAdministrador"> <img className='imagenavbar' src={image_logo} alt="Imagen de navbar" /> </Link>  </div>
        <div className="texto_nav">

          {modoEdicion ? (  <h3 className='titulopera'>Editar uvicacion</h3>  ) : (  <h3 className='titulopera'>Agregar nueva uvicacion</h3>  )}          

        </div>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input className='barra_bus_oper' type="text" placeholder="Buscar uvicacion" value={busqueda} onChange={handbus} />

        </div>
       
        <div className='cerraSecion displa_flex '>
          
          {authenticated ? (  <div>  <button className='btn nav-link mb-2 ' onClick={handleLogout} ><FaSignOutAlt />  Cerrar sesión  </button>  </div>  ) : (  <div>  <Link className='btn nav-link mb-2 ' to="/LoginAdmin"><FaSignInAlt />  Iniciar sesión </Link>  </div>  )}

        </div>

      </nav>
      {/* div despues del nav */}
      <div id='layoutSidenav' className={` ${sidebarVisible ? '' : 'layoutSidenav_nav-hidden'}`}>
       
        {/* barra lateral (Sidebar) */}
        <Sidebar/>
      
        {/* div del contenido que esta al lado de la barra lateral */}
        <div id="layoutSidenav_content" className={`${sidebarVisible ? '' : 'layoutSidenav_content-shifted'}`}>

          <div className='creaOper'>
            {modoEdicion ? (  <h2>Editar uvicacion</h2>  ) : (  <h2>Agregar nueva uvicacion</h2>  )}
            
            {/* Formulario para crear o editar una uvicacion */}
            <form  onSubmit={handleSubmit} >
              <div className=' class="mb-3 row'>
                <label className="col-sm-2 col-form-label">Nombre:</label>
                <div className="col-sm-10">
                  <input className='form-control mb-3  ' type="text" placeholder="Ingresar Nombre uvicacion" value={nombre} minLength={6} maxLength={40} onChange={(e) => setNombre(e.target.value)} />
                  <p >{nombre.length} </p>
                </div>
              </div>
              {error && <p className='aler_error_infor'>{error}</p>}
            </form>

            {modoEdicion ? (  <button type="button" onClick={editarUvicacion} className="btn btn-light btn-outline-dark" >Guardar cambios</button>  ) : (  <button type="button" onClick={agregarUvicaciones} className="btn btn-light btn-outline-dark" >Agregar uvicacion</button>  )}
          </div>

          <div className="table1 bordisgray" >
            <div className='listOper '  >
              <h2 className='tit_lis_oper'>Lista de uvicaciones</h2>
              {/* Tabla para mostrar la lista de uvicaciones */}
              <table >
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {uvicaciones.filter((uvicacion) =>  uvicacion.nombre.toLowerCase().includes(busqueda.toLowerCase()) )
                    .map((uvicacion) => (
                    <tr key={uvicacion.id} className={(uvicacionEditada && uvicacionEditada.id === uvicacion.id) ? 'selected-edit' : (idUvicacionEliminar === uvicacion.id) ? 'selected-delete' : ''}  >
                      
                        <td ><div className='displa_flex '>
                          <div ><FaUserShield /></div>
                          <div className='  derech_nom_oper' > {uvicacion.nombre} </div>
                          </div>
                        </td>
                      
                      <td className='separound_spas displa_flex'>
                        <div className='isquier'>
                            <button type="button" className="btn btn-light btn-outline-dark"  onClick={() => activarModoEdicion(uvicacion)} ><FaPencilAlt /></button>  
                        </div>

                        <div className='derech'>
                            <button type="button"  onClick={() => mostrarModalEliminar(uvicacion.id)} className="btn btn-light btn-outline-danger closeX " ><b>X</b></button> 

                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {mostrarModal && (
            <div className="modal">
              <div className="modal-content">
                <button className="modal-close" onClick={() => cancelarEliminacion()}>X</button>
                <h3>Confirmar eliminación</h3>
                <p>¿Estás seguro de que deseas eliminar esta uvicacion?</p>
                {direccionEliminar && (
                  <p>
                    Estás a punto de eliminar a la uvicacion:
                    <br />
                    Nombre: {direccionEliminar.nombre}
                    <br />
                  </p>
                )}
                <div className='separound_spas displa_flex' >
                  <button type="button" className="btn btn-light btn-outline-danger" onClick={eliminarUvicacion}>Eliminar</button>
                  <button type="button" className="btn btn-light btn-outline-dark" onClick={() => cancelarEliminacion()}>Cancelar</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

    </div>

  )
};

export default Uvicaciones;

  


