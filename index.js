const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");
const app = express();
app.use(cors());
app.use(express.json());


app.post("/save",(req,res)=>{
	const url = "mongodb://0.0.0.0:27017";
	const client = new MongoClient(url);
	const db = client.db("ems12jan24");
	const coll = db.collection("add");
	const record ={"_id":req.body.eid,"name":req.body.name,"position":req.body.position,"salary":req.body.salary};
	coll.insertOne(record)
	.then(result=>res.send(result))
	.catch(error=>res.send(error));
})

app.get("/gd",(req,res)=>{
	const url = "mongodb://0.0.0.0:27017";
	const client = new MongoClient(url);
	const db = client.db("ems12jan24");
	const coll = db.collection("add");
	coll.find({}).toArray()
	.then(result=>res.send(result))
	.catch(error=>res.send(error));
})

app.delete("/remove",(req,res)=>{
	const url = "mongodb://0.0.0.0:27017";
	const client = new MongoClient(url);
	const db = client.db("ems12jan24");
	const coll = db.collection("add");
	const data ={"_id":req.body.eid};
	coll.deleteOne(data)
	.then(result=>res.send(result))
	.catch(error=>res.send(error));
	
})
app.put("/modify",(req,res)=>{
	const url = "mongodb://0.0.0.0:27017";
	const client = new MongoClient(url);
	const db = client.db("ems12jan24");
	const coll = db.collection("add");
	coll.updateOne({"_id":req.body.eid},{"$set":{"eid":req.body.eid,"name":req.body.name,"position":req.body.position,"salary":req.body.salary}})
	.then(result=>res.send(result))
	.catch(error=>res.send(error));

});

app.listen(9000,()=>{console.log("ready @ 9000");});
