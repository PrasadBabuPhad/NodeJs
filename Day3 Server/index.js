const http= require('http');

const server=http.createServer((req,res)=>{
    //res.end("Hello Coder Army");

    if(req.url=="/"){
        res.end("Hello Coder Army");
    }
    else if(req.url=="/contact"){
        res.end("This is our contact Page: ");
    }
    else{
        res.end("Error: Page not  Found");
    }
});


server.listen(4000,()=>{
    console.log("I am listening at port no. 4000");
});