import React ,{useState} from 'react';
import { Button, Container, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Student from "./Student";
import { v4 as uuid } from 'uuid';
import { Link ,useNavigate} from "react-router-dom";

export default function Add ()
{
   const [name,setName] = useState('');
   const [age,setAge] = useState('');

   let history = useNavigate();

   const handleSubmit = (e) =>{
     e.preventDefault();

     const ids = uuid();
     let uniqueId = ids.slice(0,8);

     let a = name ,
      b = age ;

     Student.push({id: uniqueId,name:a,age:b})

     history("/")
   }

   return<>
      <Container >
         <Form className='d-grid gap-2 ' style={{margin:"15rem"}}>
            <Form.Group className='mb-3' controlId='formName'>
               <Form.Control type='text' placeholder='Enter Your Name' required onChange={(e)=>setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formName'>
               <Form.Control type='text' placeholder='Enter Your Age' required onChange={(e)=>setAge(e.target.value)}></Form.Control>
            </Form.Group>
            <Button type='submit' variant='warning' onClick={(e)=>handleSubmit(e)}>Submit</Button>
          
         </Form>
      </Container>
   </>
}
