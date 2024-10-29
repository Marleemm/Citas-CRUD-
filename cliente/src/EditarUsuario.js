import React, { useEffect, useState } from  'react'
import { useParams} from 'react-router'
import axios from 'axios';


function EditarUsuario({ usuario }){
    const params = useParams()

    //HOOKS

    const[nombre,setNombre] = useState('')
    const[email,setEmail] = useState('')
    const[telefono,setTelefono] = useState('')


    useEffect(() =>{
        axios.post('/api/usuario/obtenerdatausuario',{idUsuario: params.idUsuario}).then(res =>{
            console.log(res.data[0])
            const datausuario = res.data[0]
            setNombre(datausuario.nombre)
            setEmail(datausuario.email)
            setTelefono(datausuario.telefono)
        } )
    }, [] )

    return(
        <div>
             <h2>Editar cita</h2>
             <h3>El ID del paciente es: {params.idUsuario}</h3>
        </div>
   
    )
}

export default EditarUsuario