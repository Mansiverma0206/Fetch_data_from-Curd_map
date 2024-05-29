import Add from "./Component/Add";
import Edit from "./Component/Edit";
import Home from "./Component/Home";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";

export default function App()
{
   return<>
     <h3 style={{textAlign:"center",color:"blue"}}>App Component</h3>
     <hr/>

     <Router
>     <Routes>
           <Route path="/" element={<Home/>}/>     
           <Route path="/create" element={<Add/>} />
           <Route path="/edit" element={<Edit/>}/>
      </Routes>
     </Router> 

       </>
}