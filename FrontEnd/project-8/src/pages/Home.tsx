import React from 'react'
import { h1Style, homeStyle1, pStyle2 } from './Style'

const Home:React.FC=()=>{
    return <>
        <div style={homeStyle1}>
            <h1 style={h1Style}>This is the home page</h1>   
            <p style={pStyle2}>This Project is to show the working of the React Router Dom. Notice how the page is not refreshed everytime you go to another page! Pretty amazing right ? </p>
        </div>
    </> 
}

export default Home