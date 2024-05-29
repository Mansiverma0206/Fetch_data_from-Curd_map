import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Table, Container } from 'react-bootstrap';
import Student from "./Student";
import { Link } from "react-router-dom";

export default function Home() {
   const [std, setStd] = useState(Student);

   const handleDlt = (id) => {
      const index = std.filter(stud => stud.id !== id);
      setStd(index);
   }
 
   const handleUpd = (id,name,age)=>{
       localStorage.setItem('name',name)
       localStorage.setItem('age',age)
       localStorage.setItem('id',id)
   }

   return (
      <Container>
         <div style={{ margin: "10rem" }}>
            <Table striped bordered hover size="sm">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Age</th>
                     <th>Update Info</th>
                     <th>Delete Info</th>
                  </tr>
               </thead>
               <tbody>
                  {std && std.length > 0 ? (
                     std.map((stud, index) => {
                        return (
                           <tr >
                              <td>{stud.id}</td>
                              <td>{stud.name}</td>
                              <td>{stud.age}</td>
                              <td>
                                 <Link to={'/edit'} >
                                 <Button variant="success" onClick={() => handleUpd(stud.id,stud.name,stud.age)}>Update</Button>
                                 </Link>
                              </td>
                              <td>
                                 <Button variant="danger" onClick={() => handleDlt(stud.id)}>Delete</Button>
                              </td>
                           </tr>
                        );
                     })
                  ) : (
                     <tr>
                        <td colSpan="5">No Data Available</td>
                     </tr>
                  )}
               </tbody>
            </Table>
            <br/>
            <Link className="d-grid gap-2" to ="/create">
               <Button size="lg">Create</Button>
            </Link>
         </div>
      </Container>
   );
}
