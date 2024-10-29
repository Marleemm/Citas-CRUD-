import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CitaIndividual from './CitaIndividual'


function ListaUsuario() {
    const [datausuarios, setdatausuario] = useState([])
    useEffect(() => {
        axios.get('api/usuario/obtenerusuarios').then(res => {
            console.log(res.data)
            setdatausuario(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    //Mapeo de lista de usuarios en objeto usuario
    const listausuario = datausuarios.map(usuario => {
        return(
            <div>
                  <CitaIndividual  usuario={usuario}/>
            </div>

        )
    } )

    return (
        <div>
            <h2>Lista de citas</h2>
            {listausuario}
        </div>

    )
}

export default ListaUsuario