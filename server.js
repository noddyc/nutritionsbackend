const express = require('express')
const query = require('./query')
const cors = require('cors')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express()
app.use(cors());
app.use(bodyParser.json());
// 如果用qs结构，则用extend:true`
app.use(bodyParser.urlencoded({
    extended:true,
}))
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
      origin: ["http://localhost:8086", "http://54.224.203.213:3006", "http://localhost:3000"],
      credentials: true,
    })
  );


app.get("/fetchAll", async(req, res)=>{
    try{
        const result = await query.queryAllData();
        res.status(200).send(result)
    }catch(error){
        throw error
    }
})

app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send('Internal Server Error')
})

app.listen(8086, ()=>{
    console.log("Server is running on port 8086")
})