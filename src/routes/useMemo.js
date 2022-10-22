import React, {useEffect, useMemo, useState} from 'react'
import Header from '../components/header'

export default function UseMemo() {
  const [number, setNumber] = useState(0)
  
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  // const doubleNumber = slowFunction(number)

  const [dark, setDark] = useState(false)

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log('Theme changed!')
  }, [themeStyles])

  return (
    <div >
      <Header />
      <div>
        <p>Here the content of UseMemo!</p>
      </div>
      <hr />
      <div>
        <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
      </div>
    </div>
  )
}

const slowFunction = num => {
  // console.log('Calling Slow Function')
  for (let i = 0; i <= 1000000000; i++){ } // this loop only used to make the method slowFunction more slowwwwww
  return num * 2
}
