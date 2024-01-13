import{useState}from"react";
import axios from"axios";

export default function Add()
{

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
		let url = "http://localhost:9000/save";
		axios.post(url,data)
		.then(res=>{
			if(res.data.insertedId===eid)
			{
				setMsg("record created");
				setEid("");
				setName("");
				setPosition("");
				setSalary("");
			}
			else
			{
				setMsg("eid already exists");
			}
		})
		.catch(err=>setMsg("issue"+err));
	}
	return(
	<>
	<center>
		<h1>Add employee details </h1>
		<form onSubmit={save}>
		<input type="number"placeholder="Enter Employee id"
		onChange={hEid}value={eid}/>
		<br/><br/>
		<input type="text"placeholder="Enter Employee Name"
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
	

	