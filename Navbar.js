import{Link}from"react-router-dom";

export default function Navbar()
{
	return(
	< >
	<center>
		<div className="nav">
			
			<Link to="/add">Add</Link>
			<Link to="/">View</Link>
			<Link to="/location">Location</Link>
		</div>
	</center>
	</>
	);
}