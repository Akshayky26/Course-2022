// This project is for calling elements in a way so that we can reduce the DRY 

// Importing the image swe want display
import adv390_1 from './images/bike1.jpg'
import adv390_2 from './images/bike2.jpg'
import adv390_3 from './images/bike3.jpg'

// Interface is used here to tell the props what we want to import ie what is compulsory 
interface IMyh2{
    mycontent:string
}

interface IMyimg2{
    source:string
}

// This is the usual way of displaying the text but has DRY problem
const Myh1:React.FC=()=>{ return <h3>Developed by KTM in Australia and made in India</h3>}

// In thi s way we can write this LOC once and write whatever we want to by using props and interface
const Myh2:React.FC<IMyh2>=(props)=>{return <h3>{props.mycontent}</h3>  }


const Myimg:React.FC=()=>{return <img src={adv390_1} alt="Image displays here" />}
const Myimg2:React.FC<IMyimg2>=(props)=>{ return <img src={props.source} alt="Second image comes here" />}

//Calling elemets in different ways
const Elements:React.FC=()=>{
    return <>
    <h1>KTM Adventure 390</h1>
    <Myh1/>
    <Myh2 mycontent="The onroad price of the bike is 3,80,000 "/>
    <Myh2 mycontent='This is the best adventure bike in the segment'/>
    <Myimg/>
    <Myimg2 source={adv390_2}/>
    <Myimg2 source={adv390_3}/>
    </>
    
   
}

export default Elements