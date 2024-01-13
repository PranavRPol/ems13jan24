import{useState,useEffect}from"react";
import axios from"axios";
import {useLocation,useNavigate}from "react-router-dom";

export default function Add()
{

	const loc = useLocation();
	const nav = useNavigate();

	useEffect(()=>{
		setEid(loc.state.eid);
		setName(loc.state.name);
		setPosition(loc.state.position);
		setSalary(loc.state.salary);
	},[]);

	const[eid,setEid]=useState("");
	const[name,setName]=useState("");
	const[position,setPosition]=useState("");
	const[salary,setSalary]=useState("");
	const[msg,setMsg]=useState("");

	const hEid =(event)=>{setEid(event.target.value);}
	const hName =(event)=>{setName(event.target.value);}
	const hPosition =(event)=>{setPosition(event.target.value);}
	const hSalary =(event)=>{setSalary(event.target.value);}

	

	const save=(event)=>{
		event.preventDefault();
		let data ={eid,name,position,salary};
		let url ="http://localhost:9000/modify";
		axios.put(url,data)
		.then(res=>{
			alert("record updated");
			nav("/")
		})
		.catch(err=>setMsg("issue"+err));
	}

	return(
	<>
	<center>
		<h1>Update Page</h1>
		<form onSubmit={save}>
		<input type="number"placholder="enter Employee Id"
		onChange={hEid}value={eid}/>
		<br/><br/>
		<input type="text"placeholder="Enter Employee name"
		onChange={hName}value={name}/>
		<br/><br/>
		<input type="text"placeholder="Enter Employee Position"
		onChange={hPosition}value={position}/>
		<br/><br/>
		<input type="number"placeholder="Enter Employee Salary"
		onChange={hSalary}value={salary}/>
		<br/><br/>
		<input type="submit"value="Save"/>
		<br/><br/>
		</form>
		<h1>{msg}</h1>
	</center>
	</>
	);
}