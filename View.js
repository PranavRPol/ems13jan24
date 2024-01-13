import{useState,useEffect}from"react";
import axios from "axios";
import{useNavigate}from"react-router-dom";



export default function View()
{

	const[data,setData]=useState([]);

	useEffect(()=>{
		let url = "http://localhost:9000/gd";
		axios.get(url)
		.then(res=>setData(res.data))
		.catch(err=>alert("issue"+err));
	},[]);
	const delEid =(eid)=>{
		let url = "http://localhost:9000/remove";
		axios.delete(url, {data:{ eid }})
		.then(res=>{
			alert("record deleted");
			window.location.reload();
		})
		.catch(err=>alert("issue"+err));
	}
	const nav = useNavigate();
	const updateEid=(eid,name,position,salary)=>{
		nav("/update",{state:{eid,name,position,salary}});
	}
	
	
	return(
	<>
	<center>
		<h1>View Page</h1>
		<table border="10"style={{"width":"5%"}}>
			<tr>
				<th> Eid </th>
				<th>Name</th>
				<th>Position</th>
				<th>Salary</th>
				<th>Delete</th>
				<th>Update</th>
			</tr>
		{
			data.map((e) =>(
			<tr style={{"text-align":"center"}}>
				
				<td>{e._id}</td>
				<td>{e.name}</td>
				<td>{e.position}</td>
				<td>{e.salary}</td>
				<td><button onClick={()=>{
				if(window.confirm('r u sure ???'))delEid(e._id)}}>Delete</button></td>
				<td><button onClick={()=>{updateEid(e._id,e.name,e.position,e.salary)}}>
						Update</button></td>
				
			</tr>
		))
		
		
		}
		</table>
	</center>
	</>
	);
}


















