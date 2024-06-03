
import React, { useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from '../otros/AuthContext';

import { Link, useNavigate } from 'react-router-dom';
import image_logo from '../image/logo_sirculo.jpg';

import { FaBars, FaAngleDown, FaAngleRight, FaUserPlus, FaSignInAlt, FaSignOutAlt, FaPencilAlt, FaUserShield, FaSearch } from "react-icons/fa";

import axios from 'axios';

// Componente  Operadores
function Operadores() {

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

  const [operadores, setOperadores] = useState([]);
  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [modoEdicion, setModoEdicion] = useState(false);
  const [operadorEditado, setOperadorEditado] = useState(null);

  const [mostrarModal, setMostrarModal] = useState(false);

  const [idOperadorEliminar, setIdOperadorEliminar] = useState(null);
  const [usuarioEliminar, setUsuarioEliminar] = useState(null);


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


  const handleChange = (e) => {
    const inputRut = e.target.value.replace(/[^\dkK]/g, ''); // Eliminar caracteres no válidos
    const formattedRut = formatRut(inputRut); // Formatear el RUT
    setRut(formattedRut); 
  };

  const formatRut = (rut) => {
    const rutDigits = rut.slice(0, -1);
    const rutVerifier = rut.slice(-1);
    let formattedRut = rutDigits.replace(/\./g, ''); // Eliminar puntos existentes
    formattedRut = formattedRut.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); // Agregar puntos cada 3 dígitos
    formattedRut = formattedRut + '-' + rutVerifier.toUpperCase(); // Agregar guion al final
    return formattedRut; 
  };


  const handleSubmit = (event) => {
    event.preventDefault();  
  };

 
const esRutValido = (rut) => {
  
  // Verificar el formato del rut utilizando una expresión regular
  const rutRegex = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]$/;
  // const rutRegex = /^(\d{1,3}(\.\d{3}){2}-[\d0-9kK])$/;
  
  if (!rutRegex.test(rut)) {
    return false;
  }

   // Separar el RUT en dígitos y dígito verificador
   const rutDigits = rut.slice(0, -1);
 
   // Calcular el dígito verificador esperado
   let sum = 0;
   let multiplier = 2;
   for (let i = rutDigits.length - 1; i >= 0; i--) {
     sum += parseInt(rutDigits[i]) * multiplier;
     multiplier = (multiplier % 7) + 2;
   }
 
  return true;
};
//termino verificacion rut


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

  // Función para agregar un operador
  const agregarOperador = () => {
    // Validar que el nombre y el RUT no estén vacíos
    if (nombre.trim() === '') {
      setError('Por favor, ingresa tu nombre');
      return;
    }
    if (rut.trim() === '') {
      setError('Por favor, ingresa tu rut, ejemplo de un rut 12.435.678-9');
      return;
    }
    if (nombre.length < 6) {
      setError('Tu nombre deve ser mayor o igual a 6 digitos');
      return;
    }
    if (nombre.length > 40) {
      setError('Tu nombre deve ser menor o igual  a 40 digitos');
      return;
    }
    if (rut.length !== 12) {
      setError('Tu rut deve ser igual a 12 digitos');
      return;
    }
 
    
    if (!esRutValido(rut)) {
      // setError('El rut ingresado no es válido, \nEn el  rut tiene que ingresar  12 caracteres'); 
       setError('El RUT ingresado no es válido. Asegúrate de que la letra "k" esté al final. Formato correcto: 12.345.678-k o 12.345.678-9');
      
       return;
     }

    if (esRutValido(rut)) {
      alert('RUT válido');
    } else {
      alert('RUT inválido');
    }

    if (!esNombreValido(nombre)) {
      // setError('El rut ingresado no es válido, \nEn el  rut tiene que ingresar  12 caracteres'); 
       setError('El nombre solo puede contener letras y espacios');
      
       return;
     }

  


  

    const nuevoOperador = {
      id: Math.random().toString(),
      nombre,
      rut
    };
    setOperadores([...operadores, nuevoOperador]);
    setNombre('');
    setRut('');
    setError('');
  };

  // Función para editar un operador
  const editarOperador = () => {
    // Validar que el nombre y el RUT no estén vacíos
    if (nombre.trim() === '') {
      setError('Por favor, ingresa tu nombre');
      return;
    }
    if (rut.trim() === '') {
      setError('Por favor, ingresa tu rut, ejemplo de un rut 12.435.678-9');
      return;
    }
    if (nombre.length < 6) {
      setError('Tu nombre deve ser mayor o igual a 6 digitos');
      return;
    }
    if (nombre.length > 40) {
      setError('Tu nombre deve ser menor o igual  a 40 digitos');
      return;
    }

    if (rut.length !== 12) {
      setError('Tu rut deve ser igual a 12 digitos');
      return;
    }

    if (!esRutValido(rut)) {
      // setError('El rut ingresado no es válido, \nEn el  rut tiene que ingresar  12 caracteres'); 
       setError('El RUT ingresado no es válido. Asegúrate de que la letra "k" esté al final. Formato correcto: 12.345.678-k o 12.345.678-9');
      
       return;
     }

    if (esRutValido(rut)) {
      alert('RUT válido');
    } else {
      alert('RUT inválido');
    }

    if (!esNombreValido(nombre)) {
      // setError('El rut ingresado no es válido, \nEn el  rut tiene que ingresar  12 caracteres'); 
       setError('El nombre solo puede contener letras y espacios');
      
       return;
     }

    const operadoresActualizados = operadores.map((operador) => {
      if (operador.id === operadorEditado.id) {
        return { ...operador, nombre, rut };
      }
      return operador;
    });
    setOperadores(operadoresActualizados);
    setNombre('');
    setRut('');
    setModoEdicion(false);
    setOperadorEditado(null);
    setError('');
  };

  // Función para eliminar un operador
  const eliminarOperador = () => {
    const operadoresActualizados = operadores.filter((operador) => operador.id !== idOperadorEliminar);
    setOperadores(operadoresActualizados);
    setMostrarModal(false);
    setIdOperadorEliminar(null);
  };

  // Función para mostrar el modal de eliminación
  const mostrarModalEliminar = (id) => {
    const usuario = operadores.find((operador) => operador.id === id);
    setUsuarioEliminar(usuario);
    setMostrarModal(true);
    setIdOperadorEliminar(id);
  };

  // Función para activar el modo de edición de un operador
  const activarModoEdicion = (operador) => {
    setModoEdicion(true);
    setOperadorEditado(operador);
    setNombre(operador.nombre);
    setRut(operador.rut);
  };

  // Función para cancelar la eliminación
  const cancelarEliminacion = () => {
    setMostrarModal(false);
    setIdOperadorEliminar(null);
    setUsuarioEliminar(null); // Limpiar el usuario seleccionado
  };

  //para la barra de busqueda
  const [busqueda, setBusqueda] = useState('');
  /*
  operadores.filter(operador =>  operador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||  operador.rut.toLowerCase().includes(busqueda.toLowerCase()))
  */
  /*
  const datosFiltrados = todosLosDatos.filter(dato => 
    dato.name.common.toLowerCase().includes(query.toLowerCase()) || 
    dato.name.official.toLowerCase().includes(query.toLowerCase()) ||  
    dato.translations.spa.common.toLowerCase().includes(query.toLowerCase()) || 
    dato.translations.spa.official.toLowerCase().includes(query.toLowerCase())  
  );
  */

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

          
          {modoEdicion ? (
              <h3 className='titulopera'>Editar operador</h3>
            ) : (
              <h3 className='titulopera'>Agregar nuevo operador</h3>
            )}
          

        </div>
        <div className="search-container">
        <FaSearch className="search-icon"/>
          <input className='barra_bus_oper'  type="text"  placeholder="Buscar Operador"  value={busqueda}  onChange={handbus}  /> 
          
          </div>
        {/*   <input  className='buscadorInput'  type="text"   placeholder="Buscar Nombre País..."   value={busqueda}    onChange={e => setBusqueda(e.target.value)}   /> */}
        
        <div className='cerraSecion displa_flex '>
          {/*    <Link className='nav-link' onClick={handleLogout}>Cerrar Sesión</Link> */}

          {authenticated ? (
            <div>
              <button className='btn nav-link mb-2 ' onClick={handleLogout} ><FaSignOutAlt />  Cerrar sesión  </button>
            </div>
          ) : (
            <div>
              <Link className='btn nav-link mb-2 ' to="/LoginAdmin"><FaSignInAlt />  Iniciar sesión </Link>
            </div>
          )}

        </div> {/* Nuevo botón para cerrar sesión */}

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
              <Link className='nav-link operplus' to="/Administrador/InfoForoAdministrativoAdministrador/Operadores" >
                <div className='iconplus'> <FaUserPlus /></div>
                <div>Operadores QR  </div>
              </Link>
            </div>
          </nav>
        </div>

        {/* div del contenido que esta al lado de la barra lateral */}
        <div id="layoutSidenav_content" className={`${sidebarVisible ? '' : 'layoutSidenav_content-shifted'}`}>

          <div className='creaOper'>
            {modoEdicion ? (
              <h2>Editar operador</h2>
            ) : (
              <h2>Agregar nuevo operador</h2>
            )}
            
            {/* Formulario para crear o editar un operador */}
            <form  onSubmit={handleSubmit} >
              <div className=' class="mb-3 row'>
                <label className="col-sm-2 col-form-label">Nombre:</label>
                <div className="col-sm-10">
                  <input className='form-control mb-3  ' type="text" placeholder="Ingresar Nombre Completo" value={nombre} minLength={6} maxLength={40} onChange={(e) => setNombre(e.target.value)} />
                  <p >{nombre.length} </p>
                </div>
              </div>

              <div className=' class="mb-3 row'>
                <label className="col-sm-2 col-form-label" >RUT:</label>
                <div className="col-sm-10">
                  <input className='form-control mb-3  ' type="text" placeholder="ingresar Rut" value={rut}  minLength={12} maxLength={12} onChange={handleChange} /* onChange={(e) => setRut(e.target.value)} */ />
                  <p>{rut.length} </p>
                </div>
              </div>

              {error && <p className='aler_error_infor'>{error}</p>}
             
            </form>

            {modoEdicion ? (
              <button type="button" onClick={editarOperador}>Guardar cambios</button>
            ) : (
              <button type="button" onClick={agregarOperador}>Agregar operador</button>
            )}
          </div>


          <div className="table1 bordisgray" >
            <div className='listOper '  >
              <h2 className='tit_lis_oper'>Lista de operadores</h2>
              {/* Tabla para mostrar la lista de operadores */}
              <table >
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>RUT</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {operadores.filter((operador) =>  operador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||  operador.rut.toLowerCase().includes(busqueda.toLowerCase())  )
                    .map((operador) => (
                    <tr key={operador.id} className={(operadorEditado && operadorEditado.id === operador.id) ? 'selected-edit' : (idOperadorEliminar === operador.id) ? 'selected-delete' : ''}  >

                      
                        <td ><div className='displa_flex '>
                          <div ><FaUserShield /></div>
                          <div className='  derech_nom_oper' > {operador.nombre} </div>
                          </div>
                        </td>
                      <td  >{operador.rut}</td>

                      <td className='separound_spas displa_flex'>
                        <div className='isquier'>
                            <button type="button" className="btn btn-light btn-outline-dark"  onClick={() => activarModoEdicion(operador)} ><FaPencilAlt /></button>  
                        </div>

                        <div className='derech'>
                            <button type="button"  onClick={() => mostrarModalEliminar(operador.id)} className="btn btn-light btn-outline-danger closeX " ><b>X</b></button> 

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
                <p>¿Estás seguro de que deseas eliminar este usuario?</p>
                {usuarioEliminar && (
                  <p>
                    Estás a punto de eliminar al usuario:
                    <br />
                    Nombre: {usuarioEliminar.nombre}
                    <br />
                    RUT: {usuarioEliminar.rut}
                  </p>
                )}
                <div>
                  <button type="button" className="btn btn-light btn-outline-danger" onClick={eliminarOperador}>Eliminar</button>
                  {/*  <button type="button" onClick={() => eliminarOperador(operador.id)}>Eliminar</button>  */}
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

export default Operadores;

  


