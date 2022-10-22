import React, {useEffect, useRef, useState} from 'react'
import Header from '../components/header'

const UseRef = () => {
  const [name, setName] = useState('')
  const renderCount = useRef(0) // e.g. 1

  const inputRef = useRef()  // e.g. 2
  const focus = () => {
    console.log(inputRef.current)
    inputRef.current.focus()
  }

  useEffect(() => {
    renderCount.current = renderCount.current + 1 // e.g. 1
  }, [])

  const [name2, setName2] = useState('') // e.g. 3
  const prevName = useRef('')

  useEffect(() => {
    prevName.current = name2
  }, [name2])

  return (
    <div >
    <Header />
      <div>
        <p>Here the content of UseRef!</p>
      </div>
      <hr/>
      <div> 
        <p>E.G. 1</p>
        <input value={name} onChange={e => setName(e.target.value)} />
        <div>My name is {name}</div>
        <div>I rendered {renderCount.current} times</div>
      </div>
      <hr />
      <div>
        <p>E.G. 2</p>
        <input ref={inputRef} />
        <button onClick={focus}>Focus</button>
      </div>
      <hr />
      <div>
        <p>E.G. 3</p>
        <input value={name2} onChange={e => setName2(e.target.value)} />
        <div>My name is {name2} and ir used to be {prevName.current}</div>
      </div>
    </div>
  )
}

export default UseRef