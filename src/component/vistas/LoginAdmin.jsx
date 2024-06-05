import React, { useState, useContext } from 'react';
import { AuthContext } from '../otros/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

import image_logo from '../image/logo_sirculo.jpg';

// Componente para que el usuario inicie seción
function LoginAdmin ()  {
  
  if (!window.location.pathname.endsWith('/')) { window.location.href = window.location.pathname + '/'; }

  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');
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
    // Aquí se maneja la autenticación y redireccion al usuario a la página principal o pagina  correspondiente
    if (rut.trim() === '') {
      setError('Por favor, ingrese su rut, ejemplo de un rut 12.435.678-9');
      return;
    }
    if (!esRutValido(rut)) {
      setError('El rut ingresado no es válido, \nEn el  rut que se a de ingresar deve de tener 12 caracteres');
      return;
    }
    if (password.trim() === '') {
      setError('Por favor, ingrese su contraseña');
      return;
    }
    if (!esPasswordValido(password)) {
      setError('La password ingresada no es válida,\nla contraseña deve ser mayor a 4 y menor a 14 caracteres');
      return;
    }
        
    const exitoInicioSesion = iniciarSesionAdministrador(rut, password);
    if (exitoInicioSesion) {
      login(); // Establecer el estado authenticated en true 
      navigate('/Administrador/InfoForoAdministrativoAdministrador');  
    } else {
      setError('El rut y contraseña ingresados no coinciden con un usuario de Administrador o puede que no tenga permisos');
    }
  }; 

  const esRutValido = (rut) => {
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

  const esPasswordValido = (password) => {
    return password.length >= 4 && password.length <= 14;
  };

  const iniciarSesionAdministrador = (rut, password) => {
     
    //lógica de inicio de sesión para el rol de cosechador
    // Por ejemplo, verificar el rut y la contraseña en la base de datos

      // Simulación de verificación en la base de datos
    const usuarios = [
      { rut: '12.345.678-9', password: 'admin123', permisos: true },
      { rut: '98.765.432-1', password: 'test456', permisos: false },
    ];

    const usuario = usuarios.find((user) => user.rut === rut && user.password === password);
    if (!usuario) {
      return false;
    }
    if (!usuario.permisos) {
      return false;
    }
    // Si el inicio de sesión es exitoso, guardar el estado de inicio de sesión
    login();
    // Devolver true si el inicio de sesión es exitoso
    return true;
  };

  return (

    <div className='div_principal'> 

    <div className="divarriba" > Si quiere ver su desempeño como cosechador ingrese aca <button className='btn btn-primary mb-2 '  > <Link className="nav-link" to="/LoginCosechador">Portal Cosechador</Link> </button></div>
    <div className='text-center'><img className='imagelogin'  src={image_logo} alt="Imagen de Login" /> </div>
    <div >    
      <form className='borderLogin' onSubmit={handleSubmit}> 
        <div>
          <label className='mb-2'  >  Usuario:  </label>  
          <input className='form-control mb-3  ' type="text" placeholder=" Ingresar Rut " minLength={12} maxLength={12}   value={rut} onChange={handleChange} /* onChange={e => setRut(e.target.value)} */ autoComplete="rut" /* required */  />  
          <p>{rut.length} </p>
        </div>
        <div>
          <label className='mb-2' >  Contraseña:  </label>  
          <input className='form-control mb-3 ' type="password" placeholder= "Ingresar contraseña" minLength={4}  maxLength={14}   value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" /*   required  */ />
          <p>{password.length} </p>  
        </div>
        <div className='text-center'> {error && <div>{error}</div>} <button className='btn btn-primary mb-2 botonsecion' type="submit"  >Iniciar sesión</button></div> 
      </form>
      </div>
    </div>
  )
};
export default LoginAdmin;