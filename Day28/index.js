const express = require('express');
const app=express();
const main=require('./aichat');

app.use(express.json());
const chattinghistory={};
// const chattinghistory={
//     1:[{role:'user',parts:[{text:"Hi, How are you"}]},{role:'model',parts:[{text:"I am Good what about you"}]}],
//     2:[],
//     3:[]
// };
//we will install our user chat history here
//key:value pair
//key=id


app.post('/chat',async (req,res)=>{
    const {id,msg} = req.body;

    if(!chattinghistory[id]){
        chattinghistory[id]=[]
    }

    //extract user history
    const History=chattingHistory[id];
    //array of history

    //History+current : array
    const promptmessage =[...History,{
        role:'user',
        parts:[{text:msg}]
    }]
    const answer=await main(promptmessage);

    //user question ko dal na hai
    //model ka response 
    History.push({role:'user',parts:[{text:msg}]});
    History.push({role:'model',parts:[{text:answer}]});
    res.send(answer);
})


app.listen(3000,()=>{
    console.log("Listening at port 3000");
})