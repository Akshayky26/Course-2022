import styled from "styled-components"

// this is inline CSS his is the old way of doing the things

export const Hone:React.FC=()=>{return <h1 style={{backgroundColor:'red'}} >Hello this is the first heading</h1>}
export const Htwo:React.FC=()=>{return <h2 style={{backgroundColor:'red'}} >Hello this is the first heading</h2> }


// This is Inpage CSS 

var HthreeStyle={
    backgroundColor:'red'
}

export const Hthree:React.FC=()=>{return <h3 style={HthreeStyle} >Hello this is the first heading</h3> }


// This is CSS using styled-components here we dont need to declare the element alag se it will declare the element itself

// import styled from "styled-components"

var Styledh=styled.h4`
    background-color:red;
    font-size: 50px
`
export const Styledh4:React.FC=()=>{return <Styledh>This is via styled component</Styledh> }


var Styleddiv=styled.div`
    background-color:blue;
    height:200px;
    width:200px;
`
export const Mydiv:React.FC=()=>{return <Styleddiv>This is my div</Styleddiv>}


// This section is for appliying the condtion if an element is true or false and changing the color accordingly

interface IMydiv2{
    akshay:boolean
}

var Styleddiv2=styled.div<IMydiv2>`
    background-color: ${(props)=>{return props.akshay?"red":"green"}};
    height:200px;
    width:200px;
`

export const Mydiv2:React.FC=()=>{ return <Styleddiv2 akshay={true}></Styleddiv2>}


// If we want to apply the same properties to many elements we use the inheritance concept

var Styleddiv3=styled(Styleddiv2)`
    height:300px;
    width:300px;
`

export const Mydiv3:React.FC=()=>{ return <Styleddiv3 akshay={false}></Styleddiv3>}


// Just andother div to show if the value is optional 

interface ICombdiv{
    value?:boolean
}

var Combdiv=styled.div<ICombdiv>`
    background-color: ${(props)=>{return props.value?"pink":"black"}};
    height:200px;
    width:200px;
`

export const Diffdiv:React.FC<ICombdiv>=()=>{return <Combdiv value={true}></Combdiv>}

var Combdiv2=styled(Combdiv)``

export const Diffdiv2:React.FC<ICombdiv>=()=>{return <Combdiv value={false}></Combdiv>}


//Wanted to try if this also works !!! Try this again when you become a good coder

// interface ICombdiv2{
//     value:boolean
// }

// var Combdiv3=styled.div<ICombdiv2>`
//     background-color: ${(props)=>{return props.value?"brown":"yellow"}};
//     height:200px;
//     width:200px;
// `

// export const Diffdiv3:React.FC<ICombdiv2>=(props)=>{return <Combdiv3>{props.value}</Combdiv3>}

// var Combdiv4=styled(Combdiv3)``

// export const Diffdiv4:React.FC<ICombdiv2>=(props)=>{return <Combdiv4>{props.value}</Combdiv4>}