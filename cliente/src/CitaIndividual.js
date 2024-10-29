import React from 'react'
import {Link} from 'react-router-dom'

function CitaIndividual({ usuario }) {
    return (
        <div className='container'>
            <div className='row'>

                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            {usuario.idUsuario}
                        </li>
                        <li className='list-group-item'>
                            {usuario.nombre}
                        </li>
                        <li className='list-group-item'>
                            {usuario.email}
                        </li>
                        <li className='list-group-item'>
                            {usuario.telefono}
                        </li>
                    </ul>
                    {/* <botton className='btn btn-success'> Editar
                </botton> */}
                    <Link to={`/editarusuario/ ${usuario.idUsuario}`}><li className="btn btn-successs">Editar

                    </li></Link>

                    &nbsp;
                    <botton className='btn btn-danger'> Borrar
                    </botton>
                    <hr className='mt-4'></hr>
                </div>

            </div>

        </div>
    )
}

export default CitaIndividual