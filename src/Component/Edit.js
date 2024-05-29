import React ,{useState,useEffect} from 'react';
import { Button, Container, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Student from "./Student";
import { v4 as uuid } from 'uuid';
import { Link ,useNavigate} from "react-router-dom";

export default function Edit()
{
   const [name,setName] = useState('')
   const [age,setAge] = useState('')
   const [id,setId]=useState('')
    

   var index = Student.map(function(e){
      return e.id
   }).indexOf(id)
   
   let history = useNavigate();

   const handleSubmit = (e) =>{
     e.preventDefault();

     let a =Student[index];
     a.name = name;
     a.age = age;

     history("/")
   }

   useEffect(()=>{
         setName(localStorage.getItem("name"))
         setAge(localStorage.getItem("age"))
         setId(localStorage.getItem("id"))
   },[])
   return<>
     <Container >
         <Form className='d-grid gap-2 ' style={{margin:"15rem"}}>
         {/* <Form.Group className='mb-3' controlId='formName'>
               <Form.Control type='text' placeholder='Enter Your Name' value={name} required onChange={(e)=>setName(e.target.value)}></Form.Control>
            </Form.Group> */}
            <Form.Group className='mb-3' controlId='formName'>
               <Form.Control type='text' placeholder='Enter Your Name' value={name} required onChange={(e)=>setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formName'>
               <Form.Control type='text' placeholder='Enter Your Age' value={age} required onChange={(e)=>setAge(e.target.value)}></Form.Control>
            </Form.Group>
            <Button type='submit' variant='warning' onClick={(e)=>handleSubmit(e)}>Update</Button>
          
         </Form>
      </Container>
   </>
}