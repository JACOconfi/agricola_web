import React, { useState, useContext } from 'react';
import { AuthContext } from '../otros/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

import image_logo from '../image/logo_sirculo.jpg';


// Componente para que el usuario inicie seción
function LoginCosechador ()  {

  if (!window.location.pathname.endsWith('/')) {
    window.location.href = window.location.pathname + '/';
  }

  const [rut, setRut] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

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
    formattedRut = formattedRut + '-' + rutVerifier; // Agregar guion al final
    return formattedRut;
  };
  
  
  const handleSubmit = (event) => {
    event.preventDefault();  

    // Aquí se maneja la autenticación y redireccion al usuario a la  pagina  correspondiente

    if (rut.trim() === '') {
      setError('Por favor, ingresa tu rut, ejemplo de un rut 12.435.678-9');
      return;
    }

    // lógica de validación
    if (!esRutValido(rut)) {
      setError('El rut ingresado no es válido, \nEn el  rut tiene que ingresar  12 caracteres');
      return;
    }

    // lógica de inicio de sesión para el rol de cosechador
    const exitoInicioSesion = iniciarSesionCosechador(rut);
    
    if (exitoInicioSesion) {  
      login(); // Establecer el estado authenticated en true
      navigate('/Cosechador/InfoCosechador'); 
    /*  history.push('/Cosechador/InfoCosechador'); */  
    } else {
      setError('El rut ingresado no coincide con un usuario de cosechador  o puede que no tenga permisos');
    }
  
 /*
    console.log(rut); */
    
    };


    const esRutValido = (rut) => {
      // implementar la lógica de validación del rut
      // Devuelve true si el rut es válido, de lo contrario devuelve false
      // Verificar la longitud del rut
      if (rut.length !== 12) {
        return false;
      }
    
      // Verificar el formato del rut utilizando una expresión regular
      const rutRegex = /^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/;
      if (!rutRegex.test(rut)) {
        return false;
      }
    
      return true;
    };

    
    const iniciarSesionCosechador = (rut) => {
     
      //lógica de inicio de sesión para el rol de cosechador
      // Por ejemplo, verificar el rut y la contraseña en la base de datos

      // Simulación de verificación en la base de datos
      const usuarios = [
        { rut: '12.543.678-9', permisos: true },
        { rut: '98.763.452-1', permisos: false },
      ];

      const usuario = usuarios.find((user) => user.rut === rut);

      if (!usuario) {
        // Rut incorrecto
        /* setError('Rut incorrecto'); */
        return false;
      }

      if (!usuario.permisos) {
        // Usuario sin permisos
        /*  setError('El usuario no tiene permisos'); */
        return false;
      }

      // Si el inicio de sesión es exitoso, guardar el estado de inicio de sesión en el contexto o en el estado global de la aplicación
      login();
    
      // Devolver true si el inicio de sesión es exitoso
      return true;
    };


  return (
   
    <div className='div_principal'> 
    <div className="divarriba" > Si necesita volver al portal administrador <button className='btn btn-primary mb-2 ' ><Link className="nav-link" to="/LoginAdmin">Portal Admin</Link></button></div>
    

    <div className='text-center'><img className='imagelogin'  src={image_logo} alt="Imagen de Login" /> </div>
    <div >
    
    
      <form className='borderLogin' onSubmit={handleSubmit}> 
        <div>
          
          <label className='mb-2' >  Usuario:      </label>
            
          <input className='form-control mb-3  ' type="text" placeholder=" Ingresar Rut " value={rut} maxLength={12}  onChange={handleChange}   /* onChange={e => setRut(e.target.value)} */  autoComplete="rut"    /* required */ />
          <p>{rut.length} </p>  
        </div>

        <div className='text-center'> {error && <div>{error}</div>} <button className='btn btn-primary mb-2 botonsecion' type="submit"  >Iniciar sesión</button></div> 
      </form>
      </div>
    </div>
  )
};

export default LoginCosechador;