import React ,{useState,useEffect} from"react"

import{AddStudent}from"./AddStudent"
export const ShowStudents = () => {
    const [formdata,setFormdata]=useState({
        first_name:"",
        last_name:"",
        email:"",
        gender:"",
        age: "",
        tenth_score: "",
        twelth_score: "",
        preferred_branch: ""
    })
    const [data,setData]=useState([])
    const [filter,setFilter]=useState([])
    const handleChange=(e)=>{
        
        setFormdata({
            ...formdata,[e.target.id]:e.target.value
        })
        
    }
    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        try{
            await fetch(`http://localhost:8080/students`,{
                method:"POST",
                body:JSON.stringify(formdata),
                headers:{"Content-Type":"application/json"}
            })
             getdata()
        }catch(err){
            console.log(err)
        }
        
    }
    const getdata=async()=>{
         try{
             let data=await fetch("http://localhost:8080/students");
             data=await data.json();
             setData(data);
             setFilter(data)
         } catch(err){
          console.log(err);
         }

    }
    const handlesort=(e)=>{
       if(e.target.value=="age"){
          let item= data.sort((a,b)=>b.age-a.age)
          setFilter([...item])
          
       }
       else if(e.target.value=="first_name"){
        let item= data.sort((a,b)=>b.first_name-a.first_name)
        setFilter([...item])
        
       }
       else if(e.target.value=="gender"){
        let item= data.sort((a,b)=>b.gender-a.gender)
        setFilter([...item])
        
       }
       else if(e.target.value=="tenth_score"){
        let item= data.sort((a,b)=>b.tenth_score-a.tenth_score)
        setFilter([...item])
        
       }
       else{
        let item= data.sort((a,b)=>b.twelth_score_score-a.twelth_score)
        setFilter([...item])
       }
    }
    useEffect(()=>{
        getdata();
    },[])
    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              onChange={handlesort}
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
           {filter.map((e)=>
            <tr className="row">
              <td className="first_name">{e.first_name}</td>
              <td className="last_name">{e.last_name}</td>
              <td className="email">{e.email}</td>
              <td className="gender">{e.gender}</td>
              <td className="age">{e.age}</td>
              <td className="tenth_score">{e.tenth_score}</td>
              <td className="twelth_score">{e.twelth_score}</td>
              <td className="preferred_branch">{e.preferred_branch}</td>
            </tr>
              )}
          </tbody>
        </table>
        <AddStudent handleChage={handleChange} handleSubmit={handleSubmit}/>
      </div>
    );
  };
  