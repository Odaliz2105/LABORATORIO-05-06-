import React, { useState, useEffect } from 'react'

export default function NombreUsuario() {
  const [nombre, setNombre] = useState('')

  // ✅ Al montar el componente, cargar el nombre guardado (si existe)
  useEffect(() => {
    const nombreGuardado = localStorage.getItem('nombreUsuario')
    if (nombreGuardado) {
      setNombre(nombreGuardado)
    }
  }, [])

  // Cada vez que cambie el nombre, guardarlo en localStorage
  useEffect(() => {
    if (nombre) {
      localStorage.setItem('nombreUsuario', nombre)
    }
  }, [nombre])

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2> Hola {nombre || 'invitado'}</h2>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ marginTop: '1rem', padding: '6px' }}
      />
      <p style={{ marginTop: '1rem' }}>
        (Tu nombre se guardará aunque recargues la página)
      </p>
    </div>
  )
}
