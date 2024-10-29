import React, { useState } from 'react'
import uniquid from 'uniqid'
import axios from 'axios'

function AgregarUsuario() {
    // Hooks
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    // Función para agregar usuario
    function agregarUsuario() {
        var usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idUsuario: uniquid()
        };

        console.log(usuario);

        // Llamada POST al servidor
        axios.post('/api/usuario/agregarusuario', usuario)
            .then((res) => {
                alert('Paciente agregado con éxito');
            })
            .then(err => {console.log(err)} )
    }

    return (
        <div className="container">
            <div className="row">
                <h2 className="mt-4">Crear una nueva cita</h2>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input
                            type="tel"
                            className="form-control"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={agregarUsuario}
                        className="btn btn-success bg-primary"
                    >
                        Guardar paciente
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AgregarUsuario;
