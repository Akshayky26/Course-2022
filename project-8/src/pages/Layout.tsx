import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { buttonStyle, navStyle, pStyle } from './Style';

const Layout:React.FC=()=>{
  return <>
      <nav style={navStyle}>
       <div>
          <button style={buttonStyle}><Link to="/"><p style={pStyle}>Home</p></Link></button>
          <button style={buttonStyle}><Link to="/blog"><p style={pStyle}>Blog</p></Link></button>
          <button style={buttonStyle}><Link to="/contact"><p style={pStyle}>Contact</p></Link></button>
          <button style={buttonStyle}><Link to="/about"><p style={pStyle}> About</p></Link></button>
       </div>
      </nav>
      <Outlet />
    </>
}

export default Layout;