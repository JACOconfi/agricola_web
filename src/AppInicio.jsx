

import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './index.css';


// import Navbar from './component/Navbar/Navbar';


import LoginCosechador from './component/vistas/LoginCosechador';
import InfoCosechador from './component/vistas/InfoCosechador';

import LoginAdmin from './component/vistas/LoginAdmin';
import InfoForoAdministrativoAdministrador from './component/vistas/InfoForoAdministrativoAdministrador';
import ListaCosechadores from './component/vistas/ListaCosechadores';
import TenRendimientoCosecha from './component/vistas/TenRendimientoCosecha';
import Frutas from './component/vistas/Frutas';
import Uvicaciones from './component/vistas/Uvicaciones';

import Operadores from './component/vistas/Operadores';

import ErrorBoundary from './component/alerts/alerts_erros';
import {  AuthContext } from './component/otros/AuthContext';


function AppInicio() {
/*  const [authenticated, setAuthenticated] = useState(true); */   
  const { authenticated } = useContext(AuthContext);  
  
  useEffect(() => {
    const handleDeveloperMode = () => {

      console.log("%c¡%cDetente%c!",  'color: yellow; font-size: 34px;  font-weight: bold;  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -3px 0 #000, 0 3px 0 #000, -3px 0 0 #000, 3px 0 0 #000',  'color: red; font-size: 34px;  font-weight: bold;  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -3px 0 #000, 0 3px 0 #000, -3px 0 0 #000, 3px 0 0 #000',  'color: yellow; font-size: 34px;  font-weight: bold;  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -3px 0 #000, 0 3px 0 #000, -3px 0 0 #000, 3px 0 0 #000'  );
      console.log("%cEsta función del navegador está pensada para desarrolladores.", 'font-size: 14px; font-weight: bold;');
      console.log("%c¡Atención! Esta función del navegador está pensada para desarrolladores. Evita copiar y pegar código desconocido aquí.", 'color: red; font-size: 16px; font-weight: bold');
    }

    window.addEventListener('contextmenu', handleDeveloperMode);

    return () => {  window.removeEventListener('contextmenu', handleDeveloperMode);  };
  }, []);


  return (

    <Router>
      <ErrorBoundary>
        
        
          <Routes>

            {/* <Route exact path='/' element={<App/>}/> */}
            <Route path="/" element={<Navigate to="/LoginAdmin" />} />
            <Route path="/LoginCosechador" element={<LoginCosechador />} />

            {/* para que la ruta requiera inicio de sesion
              <Route  path="url_pagina"  element={  authenticated ? (  <archivo_pagina />  ) : (  <Navigate to="/LoginAdmin" replace /> )} />
            */}

               
            <Route path="/Cosechador/InfoCosechador" element={authenticated ? (  <InfoCosechador />  ) : (  <Navigate to="/LoginCosechador" replace />  )  }  /> 
           {/*      <Route  path="url_pagina"  element={  authenticated ? (  <archivo_pagina />  ) : (  <Navigate to="/LoginAdmin" replace /> )} />  */}            
            
            {/*  <Route path="/Navbar" element={<Navbar/>}/> */}

            <Route path="/LoginAdmin" element={<LoginAdmin />} />
        {/*     <Route path="/Administrador/InfoForoAdministrativoAdministrador" element={<InfoForoAdministrativoAdministrador />} />   
            
       */}        
            
            <Route path="/Administrador/InfoForoAdministrativoAdministrador" element={authenticated ? (  <InfoForoAdministrativoAdministrador />  ) : (  <Navigate to="/LoginAdmin" replace />  )  }  />    
            
            {/*Datos Listas*/}
            <Route path="/Administrador/InfoForoAdministrativoAdministrador/ListaCosechadores" element={authenticated ? (  <ListaCosechadores />  ) : (  <Navigate to="/LoginAdmin" replace />  )  }  />

            {/*Datos en Tendencia*/}
            <Route path="/Administrador/InfoForoAdministrativoAdministrador/TenRendimientoCosecha" element={authenticated ? (  <TenRendimientoCosecha />  ) : (  <Navigate to="/LoginAdmin" replace />  )  }  />

            {/*Datos Refenciales*/}
            <Route path="/Administrador/InfoForoAdministrativoAdministrador/Frutas" element={authenticated ? (  <Frutas />  ) : (  <Navigate to="/LoginAdmin" replace />  )  }  /> 
            <Route path="/Administrador/InfoForoAdministrativoAdministrador/Uvicaciones" element={authenticated ? (  <Uvicaciones />  ) : (  <Navigate to="/LoginAdmin" replace />  )  }  /> 

            {/*Operadores QR*/}
            <Route path="/Administrador/InfoForoAdministrativoAdministrador/Operadores" element={authenticated ? (  <Operadores />  ) : (  <Navigate to="/LoginAdmin" replace />  )  }  />      

            <Route path="*" element={<div className="error-modal" >La URL ingresada es incorrecta o no existe.</div>} /> 
            <Route path="/LoginCosechador" element={<LoginCosechador />} />
            <Route path="/LoginAdmin" element={<LoginAdmin />} /> 
          </Routes>
      </ErrorBoundary>
    </Router>
  )
};

export default AppInicio;

