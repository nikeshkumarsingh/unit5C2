import React ,{useEffect,useState}from"react"
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
 const [add,setAdd]=useState(false);
 const[show,setShow]=useState(true);

  return (
    <div className="App">
      <button className="togglebtn" >Togle</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      
      <ShowStudents/>
      
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
