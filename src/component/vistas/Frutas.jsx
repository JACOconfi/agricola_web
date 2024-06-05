
import React, { useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from '../otros/AuthContext';

import { Link, useNavigate } from 'react-router-dom';
import image_logo from '../image/logo_sirculo.jpg';

import { FaBars, FaSignInAlt, FaSignOutAlt, FaPencilAlt, FaUserShield, FaSearch } from "react-icons/fa";
import Sidebar from '../Navbar/Sidebar';

import axios from 'axios';

// Componente  Frutas
function Frutas() {

  /* para cuando se escriba la url, pues al final termine con / */
  if (!window.location.pathname.endsWith('/')) {
    window.location.href = window.location.pathname + '/';
  }
  /* para esconder y hacer aparecer el sidebar */
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const [frutas, setFrutas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [modoEdicion, setModoEdicion] = useState(false);
  const [frutoEditado, setFrutoEditado] = useState(null);

  const [mostrarModal, setMostrarModal] = useState(false);

  const [idFrutoEliminar, setIdFrutoEliminar] = useState(null);
  const [alimentoEliminar, setAlimentoEliminar] = useState(null);


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

const esNombreValido = (nombre) => {
  const regexNombre = /^[a-zA-Z\s]*$/; // Expresión regular que permite solo letras y espacios

  if (!regexNombre.test(nombre)) {
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

  // Función para agregar una fruta
  const agregarFrutas = () => {
    // Validar que el nombre no esté vacío
    if (nombre.trim() === '') {
      setError('Por favor, ingresa una fruta');
      return;
    } 
    if (nombre.length < 3) {
      setError('La fruta deve ser mayor o igual a 3 digitos');
      return;
    }
    if (nombre.length > 20) {
      setError('La fruta deve ser menor o igual  a 20 digitos');
      return;
    }
    if (!esNombreValido(nombre)) {
      // setError('El rut ingresado no es válido, \nEn el  rut tiene que ingresar  12 caracteres'); 
       setError('La fruta solo puede contener letras y espacios'); 
       return;
     }

    const nuevaFruta = {
      id: Math.random().toString(),
      nombre
    };
    setFrutas([...frutas, nuevaFruta]);
    setNombre('');
    setError('');
  };

  // Función para editar una fruta
  const editarFruta = () => {
    // Validar que el nombre  no esté vacío
    if (nombre.trim() === '') {
      setError('Por favor, ingresa una fruta');
      return;
    }
    if (nombre.length < 3) {
      setError('La fruta deve ser mayor o igual a 3 digitos');
      return;
    }
    if (nombre.length > 20) {
      setError('La fruta deve ser menor o igual  a 20 digitos');
      return;
    }
    if (!esNombreValido(nombre)) { 
       setError('La fruta solo puede contener letras y espacios'); 
       return;
     }

    const frutasActualizadas = frutas.map((fruto) => {
      if (fruto.id === frutoEditado.id) {
        return { ...fruto, nombre };
      }
      return fruto;
    });
    setFrutas(frutasActualizadas);
    setNombre('');
    setModoEdicion(false);
    setFrutoEditado(null);
    setError('');
  };

  // Función para eliminar una fruta
  const eliminarFruto = () => {
    const frutasActualizadas = frutas.filter((fruto) => fruto.id !== idFrutoEliminar);
    setFrutas(frutasActualizadas);
    setMostrarModal(false);
    setIdFrutoEliminar(null);
  };

  // Función para mostrar el modal de eliminación
  const mostrarModalEliminar = (id) => {
    const alimento = frutas.find((fruto) => fruto.id === id);
    setAlimentoEliminar(alimento);
    setMostrarModal(true);
    setIdFrutoEliminar(id);
  };

  // Función para activar el modo de edición de una fruta
  const activarModoEdicion = (fruto) => {
    setModoEdicion(true);
    setFrutoEditado(fruto);
    setNombre(fruto.nombre);
  };

  // Función para cancelar la eliminación
  const cancelarEliminacion = () => {
    setMostrarModal(false);
    setIdFrutoEliminar(null);
    setAlimentoEliminar(null); // Limpiar la fruta seleccionada
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

          {modoEdicion ? (  <h3 className='titulopera'>Editar fruta</h3>  ) : (  <h3 className='titulopera'>Agregar nueva fruta</h3>  )}          

        </div>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input className='barra_bus_oper' type="text" placeholder="Buscar Fruta" value={busqueda} onChange={handbus} />

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

          <div className='creaOper'>
            {modoEdicion ? (  <h2>Editar fruta</h2>  ) : (  <h2>Agregar nueva fruta</h2>  )}
            
            {/* Formulario para crear o editar una fruta */}
            <form  onSubmit={handleSubmit} >
              <div className=' class="mb-3 row'>
                <label className="col-sm-2 col-form-label">Nombre:</label>
                <div className="col-sm-10">
                  <input className='form-control mb-3  ' type="text" placeholder="Ingresar Nombre fruta" value={nombre} minLength={3} maxLength={20} onChange={(e) => setNombre(e.target.value)} />
                  <p >{nombre.length} </p>
                </div>
              </div>
              {error && <p className='aler_error_infor'>{error}</p>}
            </form>

            {modoEdicion ? (  <button  type="button" onClick={editarFruta} className="btn btn-light btn-outline-dark" >Guardar cambios</button>  ) : (  <button type="button" onClick={agregarFrutas} className="btn btn-light btn-outline-dark" >Agregar fruta</button>  )}
          </div>


          <div className="table1 bordisgray" >
            <div className='listOper '  >
              <h2 className='tit_lis_oper'>Lista de frutas</h2>
              {/* Tabla para mostrar la lista de frutas */}
              <table >
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {frutas.filter((fruto) =>  fruto.nombre.toLowerCase().includes(busqueda.toLowerCase()) )
                    .map((fruto) => (
                    <tr key={fruto.id} className={(frutoEditado && frutoEditado.id === fruto.id) ? 'selected-edit' : (idFrutoEliminar === fruto.id) ? 'selected-delete' : ''}  >

                        <td ><div className='displa_flex '>
                          <div ><FaUserShield /></div>
                          <div className='  derech_nom_oper' > {fruto.nombre} </div>
                          </div>
                        </td>
                      
                      <td className='separound_spas displa_flex'>
                        <div className='isquier'>
                            <button type="button" className="btn btn-light btn-outline-dark"  onClick={() => activarModoEdicion(fruto)} ><FaPencilAlt /></button>  
                        </div>

                        <div className='derech'>
                            <button type="button"  onClick={() => mostrarModalEliminar(fruto.id)} className="btn btn-light btn-outline-danger closeX " ><b>X</b></button> 

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
                <p>¿Estás seguro de que deseas eliminar esta fruta?</p>
                {alimentoEliminar && (
                  <p>
                    Estás a punto de eliminar a la fruta:
                    <br />
                    Nombre: {alimentoEliminar.nombre}
                    <br />
                  </p>
                )}
                <div className='separound_spas displa_flex'>
                  <button type="button" className="btn btn-light btn-outline-danger" onClick={eliminarFruto}>Eliminar</button>
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

export default Frutas;

  


