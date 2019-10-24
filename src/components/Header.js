import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <div>
        <header>
            <h1>Gotta Catch em All!</h1>
        </header>
        <nav>
            <Link to="/">Pokedex</Link>
            <Link to="/tallgrass">Tall Grass</Link>
        </nav>
        </div>
    )
}
export default Header 