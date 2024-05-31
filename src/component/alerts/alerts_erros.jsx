

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
      errorCode: '',
      errorStack: '',
    };
  }

  static getDerivedStateFromError(error, props) {
    return {
      hasError: true,
      errorMessage: error.message,
      /* manejar el caso que no haya un código de error pues con || '' se entrega una cadena vacia si no se entrega informacion */
      errorCode: error.code || '',
      /*manejar el caso que no haya un mensaje de error pues con || '' se entrega una cadena vacia si no se entrega informacion */
      errorStack: error.stack || '',

    };
  };

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio de monitoreo de errores aquí
    console.error(error, errorInfo);
  }

  goBack = () => {
    // const navigate = useNavigate();
    // navigate(-1); // Navegar hacia atrás en el historial de navegación
    window.history.back();

  };

  render() {
    if (this.state.hasError) {
      // Mostrar el mensaje de error en todas las vistas

      // Verificar si el error es un error de ruta no encontrada
      if (this.state.errorCode === '404') {
        return (
          <div className="error-modal">
            <h1>Error 404: Página no encontrada</h1>
            <p>La ruta   que has ingresado no existe o está mal escrita.</p>
            {/*   <Link onClick={this.goBack}>Volver a la página principal</Link> */}
          </div>
        );
      } else {
        // Mostrar el mensaje de error genérico en caso de otros errores

        return (
          <div className="error-modal">

            <h1> Error:   </h1>
            <p> {this.state.errorCode} </p>
            <p>{this.state.errorMessage}</p>
            <h3> Detalles del Error: </h3>
            <div>{this.state.errorStack}</div>
            {/*   <p>La ruta que has ingresado no existe o está mal escrita.</p> */}
            {/* <Link onClick={this.goBack}>Volver a la página principal</Link> */}

          </div>

        );
      }
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

