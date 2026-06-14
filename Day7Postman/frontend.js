
//default get method
const response2= await fetch('http://api.example.com/data')


const response =await fetch('https://api.example.com')


const response=await fetch('https://api.example.com/data',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({name:'john',age:30})
});
