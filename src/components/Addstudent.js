import React from 'react'
import { useState } from 'react';
import axios from 'axios';
export default function Addstudent() {

  
    const [data, setData] = useState({
        name: "",
        password: "",
        email: ""
      });


     
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      // console.log(data)
      };



  
      const handleSubmit=(event)=>
      {

      event.preventDefault();

      console.log(data)
      axios.post('http://localhost:5000/api/adddata',data)
      .then((response) => {
            console.log(response.data)

            if(response.status==200)
            {
                alert('data inserted');
                window.location.href='/list'
            }
            else{
                alert('failed');
            }
        });

    }

    
     
    
  return (
    <>
    <div className='col-md-10' style={{background:'lightblue'}}>
        <br/>
        <form onSubmit={handleSubmit}>
         
         <label>name</label> <input type='text' required name='name' value={data.name}
            onChange={handleInputChange}/>
         <label>password</label> <input type='text' name='password' value={data.roll}
            onChange={handleInputChange}/>
         <label>email</label> <input type='text' name='email' value={data.email}
            onChange={handleInputChange}/>
<input type='submit' name='submit'/>
        </form>

    </div>
    
    </>
  )
}
