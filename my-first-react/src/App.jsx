import { useState } from 'react'

import './App.css'




function App() {
  const[name, setName] = useState('');
  const[message, setMessage] = useState('');
  function changeName(event){
    event.preventDefault();
    setMessage('welcome, '+ name + "!");
    alert('name is: '+ name);
  }

  


  return (
    <div>
      <h4>Login form</h4>
      <form onSubmit={changeName} >
        <p>enter your name: </p>
        <input type="text" placeholder="enter your name" 
        value={name} 
        onChange={(event)=>{ setName(event.target.value);
         }
        }
        />
        <button type="submit" >Submit</button>

        <p>{message}</p>
      </form>
      
    </div>
    

  )
}

export default App
