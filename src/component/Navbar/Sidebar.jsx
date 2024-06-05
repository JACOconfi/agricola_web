
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

import { FaAngleDown, FaAngleRight, FaUserPlus } from "react-icons/fa";


function Sidenavbar() {

    /* para hacer que aparesca y desaparesta las partes del contenido del sidebar */
    const [expandedSections, setExpandedSections] = useState([]);
    const handleSectionClick = (section) => {
      if (expandedSections.includes(section)) {
        setExpandedSections(expandedSections.filter((item) => item !== section));
      } else {
        setExpandedSections([...expandedSections, section]);
      }
    };

    return(
        <div id="layoutSidenav_nav">
            <nav className='p-1' >

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
                            <Link className="nav-link nov_camp" to="/Administrador/InfoForoAdministrativoAdministrador/Uvicaciones">Ubicación</Link>
                            <Link className="nav-link nov_camp" to="/Administrador/InfoForoAdministrativoAdministrador/Frutas">Fruta</Link>
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
    )

};

export default Sidenavbar;