import {useRef,useState} from 'react';

const User = ({setUsername}) =>{


   const [user,setUser] = useState("")
   const [hit,setHit] =  useState(false)

  const handleClick = (e) => {

        
    const word = e.target.value
    
    setUser(e.target.value)



  }

  const start = () =>{

     console.log('hello')

        
    setHit(true)
    setUsername(user)

  }

    return(
        <div className="start">
         <input placeholder="enter your name" onChange={handleClick} value={user} className="startInput"/>
        
   
         <button  onClick ={start} className="startButton">
             Start
         </button>
        
      
        </div>


    )



}


export default User