import React from 'react'
import { useCounterStore } from './Octavo'

export default function Counter() {
  const { count, increase, decrease, reset } = useCounterStore()

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Contador: {count}</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' , backgroundColor : 'green'}}>
        <button onClick={increase}> Incrementar</button>
        <button onClick={decrease}> Decrementar</button>
        <button onClick={reset}> Resetear</button>
      </div>
    </div>
  )
}
