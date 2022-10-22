import React, { useEffect, useRef } from 'react'
import Header from '../components/header'

const UseEffectTwice = () => {
  const effectRan = useRef(false)

  useEffect(() => {
    console.log('effect ran')

    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json()
        console.log(json)
      }

      fetchUsers()
    }
    return () => {
      console.log('unmounted')
      effectRan.current = true
    }
  }, [])

  return (
    <div >
    <Header />

      <div>
        <p>Here the content of UseEffect Twice!</p>
        <p>F12 and check the CONSOLE</p>
      </div>
    </div>
  )
}

export default UseEffectTwice