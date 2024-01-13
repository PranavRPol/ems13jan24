import logo from './logo.svg';
import './App.css';
import Add from "./Add";
import View from"./View";
import NavBar from "./Navbar";
import{BrowserRouter,Routes,Route}from"react-router-dom";
import Update from"./Update";
import Location from"./Location";

function App() {
  return (
    <>
      <BrowserRouter>
	<NavBar/>
	<Routes>
		<Route path="/"element={<View/>} />
		<Route path="/Add"element={<Add/>}/>
		<Route path="*"element={<View/>} />
		<Route path="/update"element={<Update/>}/>
		<Route path="/location"element={<Location/>}/>
	</Routes>
	</BrowserRouter>
	</>
  );
}

export default App;
