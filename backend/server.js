const express = require("express");
const axios = require('axios')
const app = express();
app.use(express.json());
const cors =require('cors');
const postcss = require("postcss");
app.use(cors())
require('dotenv').config()
const LINE_BOT_API = 'https://api.line.me/v2/bot'

const headers = {
  'Content-Type' : 'application/json',
  'Authorization' : `Bearer ${process.env.LINE_CHANEL_ACCESS_TOKEN}`
}

app.get("/test", (_, res) =>
  res.json({ greeting: "Hello woled", name: "kongpop" })
);

app.post('/send-message' , async (req , res)=>{
 try{
  const {userId , messages}=req.body
  const body = {
    to:userId,
    messages:[
        {
            type:'text',
            text:messages
        }
      
    ]
  }
  const response = await axios.post(`${LINE_BOT_API}/message/push`,body ,{headers})
  console.log('respones' , response.data);
  res.json({
    messages : 'send messages succ',
    responseData : response.data

  })
 }catch (error){
    console.log('error res', error.response)
 }
})

const PORT = "8000";
app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
