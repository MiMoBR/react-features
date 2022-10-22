import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div >
      <header >
        <div>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/useref"}>useRef</Link>
            </li>
            <li>
              <Link to={"/usemeno"}>UseMemo</Link>
            </li>
            <li>
              <Link to={"/useeffecttwice"}>UseEffectTwice</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header